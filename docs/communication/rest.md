---
sidebar_position: 1
sidebar_label: REST
---

# REST

Platform standard for synchronous HTTP APIs. Service-specific endpoints belong in the owning service `api.md`.

## When to use REST

<!-- Describe when services should call each other synchronously. -->

[Guidance]

## Request conventions

<!-- Describe common request conventions. -->

- Base path: `[/api/v1/...]`
- Resource naming: `[convention]`
- Headers:
  - `Authorization: Bearer <REDACTED>`
  - `X-Correlation-Id: [id]`
  - `[Additional header]`

## Response conventions

<!-- Describe common response conventions. -->

- Success: `[format]`
- Error: see [Error Handling](./error-handling.md)

## Timeouts

<!-- Document default timeout policies. -->

| Call type | Timeout |
|---|---|
| [Inbound / outbound / dependency] | `[duration]` |

## Idempotency

<!-- Describe how clients should retry safely. -->

- Idempotency key header: `[header name]`
- Safe methods: `[GET / PUT / ...]`
- Unsafe methods: `[POST / PATCH / ...]`

## Correlation IDs

Every request should propagate a correlation identifier.

- Incoming header: `[X-Correlation-Id]`
- If missing: `[generate and attach]`
- Include the same value in logs and downstream calls

Do not log personal data or secrets alongside the correlation ID.

## Related documentation

- [API template](../templates/api-template.md)
- [Retry Strategy](./retry-strategy.md)
- [Error Handling](./error-handling.md)
