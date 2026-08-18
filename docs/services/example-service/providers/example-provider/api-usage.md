---
sidebar_position: 4
sidebar_label: API Usage
---

# Example Provider API Usage

## APIs used by Example Service

| API | Method | Purpose |
|---|---|---|
| `[/resources]` | `POST` | [Purpose] |
| `[/resources/{id}]` | `GET` | [Purpose] |

## Request example (sanitized)

```http
POST /resources
Authorization: Bearer <REDACTED>
Content-Type: application/json

{
  "reference": "[id]"
}
```

## Response example (sanitized)

```json
{
  "id": "[provider-id]",
  "status": "[status]"
}
```

Do not copy production payloads, customer data, or personal data into this page.

## Timeouts and retries

Follow [Retry Strategy](../../../../communication/retry-strategy.md) unless this provider requires a documented exception.
