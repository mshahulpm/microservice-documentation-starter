---
sidebar_position: 4
sidebar_label: Retry Strategy
---

# Retry Strategy

Platform retry rules for synchronous calls and asynchronous consumers. Service-specific retry behavior belongs in the relevant flow.

## Synchronous retries

<!-- Describe retry behavior for REST/HTTP calls. -->

| Item | Standard |
|---|---|
| Retryable errors | `[timeouts / 429 / 5xx / ...]` |
| Non-retryable errors | `[4xx except ...]` |
| Max attempts | `[n]` |
| Backoff | `[linear / exponential]` |

## Asynchronous retries

<!-- Describe retry behavior for message consumers. -->

| Item | Standard |
|---|---|
| Max attempts | `[n]` |
| Backoff | `[strategy]` |
| Dead-letter | `[destination]` |

## Timeouts

Retries must respect the timeout policies in [REST](./rest.md).

## Related documentation

- [Error Handling](./error-handling.md)
- [Asynchronous Messaging](./asynchronous-messaging.md)
