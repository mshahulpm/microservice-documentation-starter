---
sidebar_position: 5
sidebar_label: Error Handling
---

# Error Handling

Platform error-handling standard. Service APIs should follow this format unless an ADR records an exception.

## Error response format

<!-- Describe the common error body. Sanitize examples. -->

```json
{
  "error": {
    "code": "[ERROR_CODE]",
    "message": "[safe message]",
    "correlationId": "[id]"
  }
}
```

Do not return stack traces, connection strings, or internal secrets to clients.

## HTTP status usage

| Status | When to use |
|---|---|
| `400` | `[validation]` |
| `401` | `[unauthenticated]` |
| `403` | `[unauthorized]` |
| `404` | `[not found]` |
| `409` | `[conflict]` |
| `429` | `[rate limit]` |
| `5xx` | `[unexpected failure]` |

## Logging

- Include the correlation ID
- Do not log personal data, customer data, or secrets
- Sanitize request and response examples in documentation

## Related documentation

- [REST](./rest.md)
- [Retry Strategy](./retry-strategy.md)
- [API template](../templates/api-template.md)
