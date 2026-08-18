---
sidebar_position: 6
sidebar_label: Errors
---

# Example Provider Errors

## Error format

<!-- Describe provider error payloads using sanitized examples. -->

```json
{
  "code": "[PROVIDER_ERROR]",
  "message": "[safe message]"
}
```

## Mapping to Example Service

| Provider code | Service behavior |
|---|---|
| `[retryable code]` | Retry per [Retry Strategy](../../../../communication/retry-strategy.md) |
| `[client code]` | Return a client error; do not retry |
| `[unknown]` | Log with correlation ID; return a safe 5xx |

## What not to expose

Do not return provider secrets, raw credentials, or internal stack traces to API clients.
