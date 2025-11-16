---
title: "Template Worker Development"
description: "Development guide for the template-worker service including building, testing, and code structure."
---

# Template Worker Development

This guide covers developing and contributing to the template-worker service.

## Repository

The template-worker is maintained in a separate repository:

**GitHub:** [https://github.com/Anti-Raid/template-worker](https://github.com/Anti-Raid/template-worker)

## Prerequisites

- **Rust** (nightly recommended, version 1.88+)
- **Cargo** - Rust package manager
- **clang** and **lld** - For building native dependencies
- **SQLX CLI** - For database migrations (if needed)

## Building

### From Source

```bash
# Clone the repository
git clone https://github.com/Anti-Raid/template-worker.git
cd template-worker

# Build in release mode
cargo build --release

# The binary will be at: target/release/template-worker
```

### With SQLX Offline Mode

For builds without database access:

```bash
SQLX_OFFLINE=true cargo build --release
```

### Development Build

For faster iteration during development:

```bash
# Debug build (faster compilation)
cargo build

# Run directly
cargo run
```

## Code Structure

The source code is organized in `src/`:

```
src/
├── api/           # HTTP API handlers and types
│   └── types.rs   # API request/response types
├── events/        # Event type definitions
├── main.rs        # Entry point
└── ...           # Other modules
```

### Key Components

- **`src/api/`** - HTTP API handlers, routes, and types
- **`src/events/`** - Event type definitions for template dispatching
- **VM Management** - VM lifecycle, distribution, and cleanup
- **Execution Engine** - Template execution and event handling
- **Sandboxing** - Security and isolation enforcement
- **Resource Management** - Memory, time, and stack limits

## Testing

### Unit Tests

```bash
# Run all tests
cargo test

# Run specific test
cargo test test_name

# Run with output
cargo test -- --nocapture
```

### Integration Tests

```bash
# Run integration tests (if available)
cargo test --test integration
```

### Test Coverage

```bash
# Install cargo-tarpaulin (if not installed)
cargo install cargo-tarpaulin

# Generate coverage report
cargo tarpaulin --out Html
```

## Adding New Features

### HTTP API Endpoints

1. **Define types** in `src/api/types.rs`:

```rust
#[derive(Serialize, Deserialize, utoipa::ToSchema)]
pub struct MyRequest {
    pub field: String,
}
```

2. **Create handler** in appropriate API module

3. **Register route** with OpenAPI documentation

4. **Add tests** for the new endpoint

### Event Types

1. **Define event** in `src/events/`:

```rust
#[derive(Serialize, Deserialize, utoipa::ToSchema)]
pub struct MyEvent {
    pub data: String,
}
```

2. **Update dispatcher** to handle the new event

3. **Document** in templating API reference

### VM Distribution Strategy

1. **Implement strategy** interface

2. **Use `ThreadEntry`** for common functionality

3. **Register** in service initialization

4. **Add tests** for the new strategy

## Code Style

### Rust Formatting

```bash
# Format code
cargo fmt

# Check formatting
cargo fmt --check
```

### Clippy Linting

```bash
# Run clippy
cargo clippy

# Fix auto-fixable issues
cargo clippy --fix
```

## Dependencies

### Key Dependencies

- **tokio** - Async runtime
- **utoipa** - OpenAPI documentation
- **khronos** - Lua VM runtime
- **serde** - Serialization
- **sqlx** - Database access

### Adding Dependencies

```bash
# Add a dependency
cargo add dependency-name

# Add with features
cargo add dependency-name --features feature-name
```

## Building for Production

### Release Build

```bash
# Optimized release build
cargo build --release

# With specific target
cargo build --release --target x86_64-unknown-linux-gnu
```

### Docker Build

```bash
# Build Docker image
docker build -f Dockerfile -t template-worker:latest .
```

## Debugging

### Debug Logging

```bash
# Set log level
RUST_LOG=debug cargo run

# Specific module
RUST_LOG=template_worker::api=debug cargo run
```

### Debugger

```bash
# Build with debug symbols
cargo build

# Attach debugger (gdb/lldb)
gdb target/debug/template-worker
```

## Contributing

### Pull Request Process

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Add tests** for new features
5. **Ensure** all tests pass
6. **Submit** a pull request

### Code Review Checklist

- [ ] Code follows Rust style guidelines
- [ ] All tests pass
- [ ] New types have `utoipa::ToSchema` derive
- [ ] Documentation is updated
- [ ] No clippy warnings

## Related Documentation

- [Template Worker Overview](./index.mdx) - Service overview
- [Architecture](./architecture.md) - Service architecture
- [HTTP API](./http-api.md) - API documentation
- [Deployment](./deployment.md) - Deployment guides

## References

- [Template Worker Repository](https://github.com/Anti-Raid/template-worker)
- [Rust Documentation](https://doc.rust-lang.org/)
- [Utoipa Documentation](https://docs.rs/utoipa/)

