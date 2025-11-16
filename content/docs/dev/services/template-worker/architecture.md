---
title: "Template Worker Architecture"
description: "Architecture details for the template-worker service including VM distribution, lifecycle, and runtime management."
---

# Template Worker Architecture

This document covers the internal architecture of the template-worker service, including VM distribution strategies, lifecycle management, and runtime details.

## VM Distribution Strategies

A _VM distribution strategy_ defines how guild VMs should be distributed across threads or processes. The template-worker supports multiple strategies:

### Thread Pool (Current Default)

- Multiple guilds share threads from a pool
- More efficient resource utilization
- Better scalability for large deployments
- Internally used by the legacy "thread per guild" strategy

### Thread Per Guild (Legacy)

- Each guild was originally given its own dedicated thread
- Now internally uses thread pool
- Maintained for compatibility

### Process Pooling (Future)

- VMs run in separate processes for maximum isolation
- Requires additional work in the sandwich daemon layer
- Provides the highest level of security and isolation

## VM Lifecycle

Each guild is assigned a dedicated Lua(u) VM that:

- **Persists** until explicitly destroyed or marked as broken
- **Survives** multiple template executions within the same guild
- **Is cleaned up** automatically on:
  - Panic or internal errors
  - Memory limit exceeded
  - Infrastructure requirements
  - Explicit destruction requests

### VM State Management

- VMs use **WeakLua references** to prevent memory leaks
- Lua VM handles should be held for as short a time as possible
- Never clone the Lua VM handle directly (considered a logic bug)

## Khronos Runtime

The template-worker uses the `khronos` runtime to manage Lua VMs:

- Each Lua VM is owned by a single `KhronosRuntime` struct
- Provides VM lifecycle management
- Handles VM state and isolation
- Manages resource limits

### Runtime Best Practices

- **Never clone** the Lua VM handle directly
- Use `WeakLua` (weak reference) for temporary access
- Hold Lua VM handles for minimal time
- Clean up references promptly

## Thread Entry Implementation

The `ThreadEntry` structure provides a generic abstraction for VM distribution strategies:

### Setup Phase

1. Initialize guild state
2. Set up Tokio runtime
3. Initialize Khronos runtime

### Main Loop

1. Listen on request channel for `LuaVmAction` messages
2. Handle actions with optional callback channels
3. Call `handle` method of `LuaVmAction` for execution

### Error Handling

- Per-thread panic hooks clean up guild templating handles
- Future dispatches to a guild start fresh VMs on non-panicking threads
- Automatic recovery from panics

## Resource Limits

The service enforces global limits on all templates:

```rust
pub const MAX_TEMPLATE_MEMORY_USAGE: usize = 1024 * 1024 * 20; // 20MB maximum memory
pub const MAX_VM_THREAD_STACK_SIZE: usize = 1024 * 1024 * 20; // 20MB maximum stack
pub const MAX_TEMPLATES_EXECUTION_TIME: std::time::Duration =
    std::time::Duration::from_secs(60 * 10); // 10 minute maximum execution time
pub const MAX_TEMPLATES_RETURN_WAIT_TIME: std::time::Duration =
    std::time::Duration::from_secs(60); // 60 seconds before return is ignored
```

These limits are designed to:
- Allow complex templates to run successfully
- Prevent resource exhaustion and abuse
- Maintain system stability under load

## Sandboxing

The template-worker implements multiple layers of sandboxing:

### 1. Luau Runtime Sandboxing

- Built-in sandboxing capabilities of Luau
- Prevents direct system access
- Limits available standard library functions

### 2. Global Table Isolation

- Read-only shared global table for Luau standard library
- Isolated per-template global table with custom `__index` and `__metatable`
- Prevents template interference while allowing `_G` usage

### 3. Plugin Sandboxing

- Plugins are read-only and cannot be monkey-patched
- Controlled API surface through the template context
- Capability-based access control

### 4. Resource Limits

- Memory usage monitoring and enforcement
- Execution time limits
- Stack size restrictions

## Event Dispatching

Templates are invoked via events:

- Events are dispatched **asynchronously** using Luau threads
- Each event receives the event data and template context
- The `task` library works as expected in event handlers
- See the [Templating Events](../../templating/events.mdx) documentation for available events

## Code Structure

The template-worker source code is organized in `src/`:

- **`src/api/`** - HTTP API handlers and types
- **`src/events/`** - Event type definitions
- **VM Management** - VM lifecycle, distribution, and cleanup
- **Execution Engine** - Template execution and event handling
- **Sandboxing** - Security and isolation enforcement
- **Resource Management** - Memory, time, and stack limits

## Extension Points

To extend the template-worker:

1. **Add New VM Distribution Strategy**
   - Implement the distribution strategy interface
   - Use `ThreadEntry` for common functionality
   - Register in service initialization

2. **Add New Resource Limits**
   - Define constants in limit configuration
   - Update enforcement logic
   - Add monitoring/metrics

3. **Extend Sandboxing**
   - Modify global table isolation
   - Add new capability checks
   - Update plugin sandboxing rules

4. **Add New Event Types**
   - Define event structure in `src/events/`
   - Update dispatcher logic
   - Document in templating API reference

## Related Documentation

- [Template Worker Overview](./index.mdx) - Service overview
- [HTTP API](./http-api.md) - API endpoints and types
- [Templating Architecture](../../templating/archnotes.md) - Additional architecture details

