---
sidebar_position: 4
sidebar_label: Logging
---

# Logging

Platform logging standard.

## Requirements

- Include a correlation ID on every request or consumed message
- Use structured logs where possible
- Do not log secrets, credentials, tokens, customer data, or personal data

## Suggested fields

| Field | Purpose |
|---|---|
| `timestamp` | Event time |
| `level` | `debug` / `info` / `warn` / `error` |
| `service` | Service name |
| `correlationId` | Request or message correlation |
| `message` | Safe description |

## Related documentation

- [Monitoring](./monitoring.md)
- [Error Handling](../communication/error-handling.md)
