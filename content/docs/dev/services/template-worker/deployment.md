---
title: "Template Worker Deployment"
description: "Deployment guides for the template-worker service including Docker and native deployment options."
---

# Template Worker Deployment

This guide covers deploying the template-worker service in both Docker and native (systemd) environments.

## Docker Deployment

### Build Context

The template-worker Docker image is built from:

- **Build context:** `services/template-worker/`
- **Base image:** `rust:1.88-bookworm`
- **Dependencies:** `clang`, `lld`

### Dockerfile Structure

The Dockerfile (located at the repository root) performs:

1. **Base Setup**
   - Uses Rust 1.88 on Debian Bookworm
   - Installs build dependencies (clang, lld)

2. **Source Copy**
   - Copies `services/template-worker/` to `/app/a/b`
   - Copies `.cargo/` configuration
   - Copies `builtins/`, `templating-types/`, and `builtins_patches/`

3. **Build Process**
   - Uses build cache for dependencies
   - Builds with `SQLX_OFFLINE=true`
   - Copies executable to `/app/template-worker`

4. **Runtime**
   - Exposes port **60000**
   - Runs `/app/template-worker`

### Docker Compose

In Docker Compose deployments:

- **Service name:** `template-worker` (or similar)
- **Config:** Uses `config.docker.yaml` (auto-generated)
- **Healthcheck:** HTTP health endpoint provided
- **Network:** Part of internal service network

### Building the Image

```bash
# From the repository root
docker build -f Dockerfile -t template-worker:latest .
```

### Running the Container

```bash
docker run -p 60000:60000 \
  -v /path/to/config:/app/config \
  template-worker:latest
```

## Native Deployment

### Systemd Service

For native/systemd deployments, use a service file like:

```ini
[Unit]
Description=AntiRaid Template Worker
After=network.target postgresql.service

[Service]
Type=simple
User=antiraid
Group=antiraid
WorkingDirectory=/opt/antiraid
ExecStart=/opt/antiraid/template-worker
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

### Service File Location

Example service files are provided in `data/systemd-example/`:

- `splashtail-staging-templateworker.service`

### Installation

```bash
# Copy service file
sudo cp data/systemd-example/splashtail-staging-templateworker.service \
  /etc/systemd/system/

# Reload systemd
sudo systemctl daemon-reload

# Enable and start
sudo systemctl enable splashtail-staging-templateworker
sudo systemctl start splashtail-staging-templateworker
```

### Startup Order

The template-worker should start:

1. **After:** Jobserver, Bot service
2. **Before:** API service (optional, depends on architecture)

## Configuration

### Configuration File

The service is configured via:

- **Service config file:** `config.yaml` or `config.docker.yaml`
- **Environment variables** for sensitive data
- **Runtime parameters** for VM distribution strategy selection

### Required Configuration

- Database connection settings
- Redis connection (if used)
- HTTP server port (default: 60000)
- VM distribution strategy
- Resource limits

### Environment Variables

Common environment variables:

- Database connection strings
- API keys and secrets
- Logging configuration
- Feature flags

## Health & Monitoring

### Health Endpoints

The service provides:

- **Health Check:** Basic health status endpoint
- **Metrics:** Prometheus metrics (if configured)

### Monitoring

Monitor service health using:

```bash
# Docker
docker ps  # Check container status
docker logs -f <template-worker-container>

# Systemd
systemctl status splashtail-staging-templateworker
journalctl -u splashtail-staging-templateworker -f
```

### Logging

The service uses structured logging:

- Log levels: ERROR, WARN, INFO, DEBUG, TRACE
- JSON format (configurable)
- Log rotation support

## Networking

### Port Configuration

- **Default port:** 60000
- **Configurable** via configuration file
- **Internal only** in Docker deployments (not exposed to host)

### Network Requirements

- Access to PostgreSQL database
- Access to Redis (if used)
- Communication with Bot service
- Communication with API service (if needed)

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   - Check if another service is using port 60000
   - Change port in configuration

2. **Database Connection Failed**
   - Verify database is running
   - Check connection string in config
   - Verify network connectivity

3. **VM Creation Failures**
   - Check resource limits
   - Verify builtins and templating-types are available
   - Check logs for specific errors

4. **High Memory Usage**
   - Monitor VM count and memory per VM
   - Adjust resource limits if needed
   - Consider VM cleanup strategies

### Debug Mode

Enable debug logging:

```bash
# Set log level
RUST_LOG=debug template-worker

# Or in config
log_level: "debug"
```

## Related Documentation

- [Template Worker Overview](./index.mdx) - Service overview
- [Architecture](./architecture.md) - Service architecture
- [Development](./development.md) - Building from source
- [Hosting Guides](../../hosting/) - General hosting information

## References

- [Template Worker Repository](https://github.com/Anti-Raid/template-worker)
- [Dockerfile](https://github.com/Anti-Raid/template-worker/blob/master/Dockerfile)

