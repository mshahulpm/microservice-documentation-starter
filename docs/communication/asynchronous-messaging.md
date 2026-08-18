---
sidebar_position: 2
sidebar_label: Asynchronous Messaging
---

# Asynchronous Messaging

Platform standard for message-based communication. Service-specific published and consumed events belong in the owning service `events.md`.

## When to use messaging

<!-- Describe when services should communicate asynchronously. -->

[Guidance]

## Broker / transport

| Item | Value |
|---|---|
| Technology | `[Broker]` |
| Purpose | `[Purpose]` |

Do not include connection strings or credentials.

## Message shape

<!-- Describe the common envelope without sensitive payloads. -->

```json
{
  "eventName": "[event.name]",
  "eventId": "[id]",
  "occurredAt": "[ISO-8601]",
  "correlationId": "[id]",
  "payload": {}
}
```

Sanitize examples. Never include customer data, personal data, or secrets.

## Delivery expectations

| Topic | Standard |
|---|---|
| At-least-once / at-most-once | `[expectation]` |
| Ordering | `[expectation]` |
| Dead-letter | `[expectation]` |

## Related documentation

- [Event Conventions](./event-conventions.md)
- [Retry Strategy](./retry-strategy.md)
- [Event template](../templates/event-template.md)
