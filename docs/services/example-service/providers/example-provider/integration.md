---
sidebar_position: 2
sidebar_label: Integration
---

# Example Provider Integration

## Integration Owner

Example Service

## How the integration works

<!-- Describe how this service integrates with the provider. -->

1. Example Service sends a sanitized request to Example Provider.
2. Example Provider returns a sanitized response.
3. Optional webhooks are handled as documented in [webhooks.md](./webhooks.md).

```mermaid
sequenceDiagram
    participant Service as Example Service
    participant Provider as Example Provider

    Service->>Provider: Request
    Provider-->>Service: Response
    Provider->>Service: Webhook (optional)
```

## Runtime location

<!-- Describe where configuration lives, not secret values. -->

- Configuration names: see [overview.md](./overview.md)
- Related flow: [Example Flow](../../flows/example-flow.md)

## Out of scope

- Credentials and production tokens
- Other services' provider integrations (those belong under the other service)
