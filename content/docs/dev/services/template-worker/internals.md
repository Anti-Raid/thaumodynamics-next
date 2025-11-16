---
title: "Template Worker Internals"
description: "Deep dive into the template-worker implementation details, code patterns, and internal architecture."
---

# Template Worker Internals

This document provides an in-depth look at the template-worker's internal implementation, code patterns, and architectural decisions.

## Core Data Structures

### LuaVmAction

The `LuaVmAction` enum represents all possible actions that can be performed on a Lua VM:

```rust
pub enum LuaVmAction {
    /// Execute a template with given event and context
    Execute {
        event: Event,
        context: TemplateContext,
        callback: Option<oneshot::Sender<Result<Value>>>,
    },
    /// Destroy the VM
    Destroy,
    /// Get VM state/info
    GetState {
        callback: oneshot::Sender<VMState>,
    },
    // ... other actions
}
```

Each action can optionally include a callback channel for receiving results asynchronously.

### ThreadEntry

The `ThreadEntry` structure provides a generic abstraction for VM distribution strategies:

```rust
pub struct ThreadEntry {
    pub guild_id: GuildId,
    pub vm_handle: Arc<Mutex<Option<KhronosRuntime>>>,
    pub action_rx: mpsc::Receiver<LuaVmAction>,
    pub shutdown: Arc<AtomicBool>,
}
```

**Key Components:**

- **`guild_id`**: The Discord guild this thread handles
- **`vm_handle`**: Shared reference to the Lua VM runtime (wrapped in Mutex for thread safety)
- **`action_rx`**: Channel receiver for incoming VM actions
- **`shutdown`**: Atomic flag for graceful shutdown

### KhronosRuntime

The `KhronosRuntime` is the core Lua VM manager:

```rust
pub struct KhronosRuntime {
    vm: Lua,
    // Internal state
    memory_usage: AtomicUsize,
    execution_count: AtomicU64,
    // ...
}
```

**Important Rules:**

- Each Lua VM is owned by a **single** `KhronosRuntime`
- **Never clone** the Lua VM handle directly (logic bug)
- Use `WeakLua` (weak reference) for temporary access
- Hold Lua VM handles for as short a time as possible

## VM Distribution Implementation

### Thread Pool Strategy

The thread pool strategy distributes multiple guilds across a pool of worker threads:

```rust
pub struct ThreadPoolStrategy {
    pool: ThreadPool,
    vm_registry: Arc<Mutex<HashMap<GuildId, Weak<ThreadEntry>>>>,
    action_tx: HashMap<GuildId, mpsc::Sender<LuaVmAction>>,
}

impl ThreadPoolStrategy {
    pub fn new(pool_size: usize) -> Self {
        let pool = ThreadPool::new(pool_size);
        // Initialize registry and channels
    }
    
    pub async fn dispatch(&self, guild_id: GuildId, action: LuaVmAction) {
        // Get or create thread entry for guild
        let entry = self.get_or_create_entry(guild_id).await;
        
        // Send action to thread's channel
        entry.action_tx.send(action).await?;
    }
}
```

**Flow:**

1. **Request arrives** → `dispatch()` is called
2. **Get or create** thread entry for the guild
3. **Send action** to the thread's action channel
4. **Thread processes** action in its main loop
5. **Result sent** via callback channel (if provided)

### Thread Entry Main Loop

Each thread runs a main loop that processes actions:

```rust
async fn thread_main(entry: ThreadEntry) {
    // Setup phase
    let mut vm = initialize_vm(entry.guild_id).await?;
    
    // Main loop
    while !entry.shutdown.load(Ordering::Relaxed) {
        tokio::select! {
            // Receive action from channel
            Some(action) = entry.action_rx.recv() => {
                match action {
                    LuaVmAction::Execute { event, context, callback } => {
                        let result = vm.execute_template(event, context).await;
                        if let Some(cb) = callback {
                            let _ = cb.send(result);
                        }
                    }
                    LuaVmAction::Destroy => {
                        vm.cleanup().await;
                        break;
                    }
                    // ... other actions
                }
            }
            // Handle shutdown
            _ = shutdown_signal => {
                break;
            }
        }
    }
    
    // Cleanup
    vm.cleanup().await;
}
```

## Template Execution Flow

### Execution Pipeline

When a template execution request arrives:

```rust
pub async fn execute_template(
    &mut self,
    event: Event,
    context: TemplateContext,
) -> Result<Value> {
    // 1. Validate event and context
    self.validate_execution(&event, &context)?;
    
    // 2. Get or compile template
    let template = self.get_template(&context.template_name).await?;
    
    // 3. Check resource limits
    self.check_limits()?;
    
    // 4. Create Luau thread for async execution
    let thread = self.vm.create_thread()?;
    
    // 5. Set up sandbox environment
    let env = self.create_sandbox_env(&context)?;
    
    // 6. Execute template
    let result = thread.execute_async(template, (event, context), env).await?;
    
    // 7. Monitor resource usage
    self.update_resource_usage()?;
    
    Ok(result)
}
```

### Sandbox Environment Creation

The sandbox environment isolates templates:

```rust
fn create_sandbox_env(&self, context: &TemplateContext) -> Result<Table> {
    // Create isolated global table
    let env = self.vm.create_table()?;
    
    // Set up metatable for isolation
    let metatable = self.vm.create_table()?;
    
    // Custom __index for controlled access
    metatable.set("__index", |_, key: String| {
        // Check if key is in allowed set
        if ALLOWED_GLOBALS.contains(&key) {
            // Return from read-only standard library
            STANDARD_LIB.get(&key)
        } else if key.starts_with("@antiraid/") {
            // Load AntiRaid plugin
            self.load_plugin(&key)
        } else {
            // Access denied
            None
        }
    })?;
    
    // Prevent writes to standard library
    metatable.set("__newindex", |_, key: String, value| {
        // Only allow writes to _G (isolated per-template)
        if key == "_G" {
            // Store in template-specific _G
            TEMPLATE_GLOBALS.insert(key, value)
        } else {
            // Deny write
            Err("Cannot modify read-only global")
        }
    })?;
    
    env.set_metatable(Some(metatable));
    Ok(env)
}
```

## Resource Management

### Memory Tracking

Memory usage is tracked per-VM:

```rust
impl KhronosRuntime {
    fn track_memory(&self, delta: isize) -> Result<()> {
        let current = self.memory_usage.fetch_add(delta as usize, Ordering::Relaxed);
        let new_total = current + delta as usize;
        
        if new_total > MAX_TEMPLATE_MEMORY_USAGE {
            // Kill VM and mark as broken
            self.mark_broken(MemoryLimitExceeded)?;
            return Err(Error::MemoryLimitExceeded);
        }
        
        Ok(())
    }
}
```

### Execution Time Limits

Execution time is tracked with a timeout:

```rust
async fn execute_with_timeout(
    &self,
    template: &Template,
    args: (Event, TemplateContext),
) -> Result<Value> {
    tokio::time::timeout(
        MAX_TEMPLATES_EXECUTION_TIME,
        self.vm.execute(template, args)
    )
    .await
    .map_err(|_| Error::ExecutionTimeout)?
}
```

## Event Dispatching

### Event Queue

Events are queued and dispatched asynchronously:

```rust
pub struct EventDispatcher {
    queues: HashMap<GuildId, mpsc::UnboundedSender<Event>>,
    workers: Vec<JoinHandle<()>>,
}

impl EventDispatcher {
    pub fn dispatch(&self, guild_id: GuildId, event: Event) {
        if let Some(queue) = self.queues.get(&guild_id) {
            let _ = queue.send(event);
        }
    }
    
    async fn worker_loop(&self, guild_id: GuildId, mut rx: mpsc::UnboundedReceiver<Event>) {
        while let Some(event) = rx.recv().await {
            // Get VM for guild
            let vm = self.get_vm(guild_id).await?;
            
            // Create Luau thread for async execution
            let thread = vm.create_thread()?;
            
            // Dispatch event to template
            thread.spawn(async move {
                // Execute template with event
                template.execute((event, context)).await
            });
        }
    }
}
```

### Async Event Handling

Events are handled asynchronously using Luau threads:

```rust
// In template execution
let thread = vm.create_thread()?;

thread.spawn(async move {
    // This runs asynchronously
    let evt, ctx = ...
    
    // Template code can use task library
    task.wait(5) -- Wait 5 seconds
    
    -- Do something
    return result
});
```

## Error Handling & Recovery

### Panic Recovery

Per-thread panic hooks clean up on panic:

```rust
std::panic::set_hook(Box::new(move |panic_info| {
    // Clean up all guild VMs on this thread
    let mut registry = VM_REGISTRY.lock().unwrap();
    for (guild_id, entry) in registry.iter() {
        if entry.thread_id == current_thread_id() {
            // Mark VM as broken
            entry.mark_broken(PanicRecovery);
            // Clean up resources
            entry.cleanup();
        }
    }
    
    // Log panic
    error!("VM thread panicked: {:?}", panic_info);
}));
```

### VM State Management

VMs can be in various states:

```rust
pub enum VMState {
    /// VM is healthy and ready
    Healthy,
    /// VM is broken and needs recreation
    Broken(BrokenReason),
    /// VM is being initialized
    Initializing,
    /// VM is being destroyed
    Destroying,
}

pub enum BrokenReason {
    MemoryLimitExceeded,
    ExecutionTimeout,
    PanicRecovery,
    InternalError,
    ExplicitDestroy,
}
```

When a VM is marked as broken, future dispatches will create a new VM.

## Plugin System

### Plugin Loading

Plugins are loaded via the `require` system:

```rust
fn load_plugin(&self, plugin_name: &str) -> Result<Value> {
    // Parse plugin name (e.g., "@antiraid/discord")
    let (namespace, module) = parse_plugin_name(plugin_name)?;
    
    match namespace {
        "antiraid" => {
            // Load from builtins
            self.builtins.get_module(module)?
        }
        _ => {
            // Unknown plugin
            Err(Error::UnknownPlugin)
        }
    }
}
```

### Plugin Sandboxing

Plugins are read-only and cannot be modified:

```rust
fn create_plugin_table(&self, plugin: &Plugin) -> Table {
    let table = self.vm.create_table()?;
    
    // Set read-only metatable
    let metatable = self.vm.create_table()?;
    metatable.set("__newindex", |_, _, _| {
        Err("Cannot modify plugin")
    })?;
    metatable.set("__metatable", None)?; // Hide metatable
    
    table.set_metatable(Some(metatable));
    table
}
```

## Interop with Rust

### FFI Types

Types are converted between Rust and Lua:

```rust
// Rust → Lua
impl ToLua for MyType {
    fn to_lua(&self, lua: &Lua) -> Result<Value> {
        // Convert Rust type to Lua value
    }
}

// Lua → Rust
impl FromLua for MyType {
    fn from_lua(value: Value, lua: &Lua) -> Result<Self> {
        // Convert Lua value to Rust type
    }
}
```

### Array Metatable

Arrays use a special metatable for FFI:

```rust
// In Lua interop module
pub const ARRAY_METATABLE: &str = "@antiraid/interop#array_metatable";

fn create_array_metatable(lua: &Lua) -> Result<Table> {
    let mt = lua.create_table()?;
    // Set metatable that marks table as array for Rust Vec conversion
    Ok(mt)
}
```

## HTTP API Implementation

### Endpoint Registration

Endpoints are registered with Utoipa for OpenAPI:

```rust
#[utoipa::path(
    post,
    path = "/execute",
    request_body = ExecuteRequest,
    responses(
        (status = 200, description = "Execution successful", body = ExecuteResponse),
        (status = 400, description = "Invalid request"),
    )
)]
pub async fn execute_template(
    State(state): State<AppState>,
    Json(request): Json<ExecuteRequest>,
) -> Result<Json<ExecuteResponse>> {
    // Implementation
}
```

### Type Schema Generation

All API types must derive `ToSchema`:

```rust
#[derive(Serialize, Deserialize, utoipa::ToSchema)]
#[schema(as = ExecuteRequest)]
pub struct ExecuteRequest {
    #[schema(example = "template_name")]
    pub template: String,
    pub event: Event,
    pub context: TemplateContext,
}
```

## Performance Optimizations

### VM Reuse

VMs are reused across multiple template executions:

```rust
// Get or create VM
let vm = match self.vm_registry.get(&guild_id) {
    Some(weak) => {
        // Try to upgrade weak reference
        weak.upgrade().ok_or(Error::VMBroken)?
    }
    None => {
        // Create new VM
        let vm = self.create_vm(guild_id).await?;
        let weak = Arc::downgrade(&vm);
        self.vm_registry.insert(guild_id, weak);
        vm
    }
};
```

### Lazy Template Compilation

Templates are compiled on first use and cached:

```rust
struct TemplateCache {
    compiled: HashMap<String, CompiledTemplate>,
}

impl TemplateCache {
    fn get_or_compile(&mut self, name: &str, source: &str) -> Result<&CompiledTemplate> {
        if let Some(compiled) = self.compiled.get(name) {
            return Ok(compiled);
        }
        
        // Compile template
        let compiled = self.compile(source)?;
        self.compiled.insert(name.to_string(), compiled);
        Ok(self.compiled.get(name).unwrap())
    }
}
```

## Testing Patterns

### Mock VM

For testing, a mock VM can be used:

```rust
#[cfg(test)]
mod tests {
    struct MockVM {
        // Mock implementation
    }
    
    impl MockVM {
        fn execute(&self, template: &Template, args: (Event, TemplateContext)) -> Result<Value> {
            // Mock execution
        }
    }
}
```

### Integration Tests

Integration tests use real VMs:

```rust
#[tokio::test]
async fn test_template_execution() {
    let vm = create_test_vm().await;
    let event = create_test_event();
    let context = create_test_context();
    
    let result = vm.execute_template(event, context).await?;
    assert!(result.is_success());
}
```

## Related Documentation

- [Template Worker Overview](./index.mdx) - Service overview
- [Architecture](./architecture.md) - High-level architecture
- [HTTP API](./http-api.md) - API documentation
- [Development](./development.md) - Development guide

