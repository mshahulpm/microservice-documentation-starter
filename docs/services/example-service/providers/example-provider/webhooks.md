---
sidebar_position: 5
sidebar_label: Webhooks
---

# Example Provider Webhooks

## Overview

<!-- Describe inbound callbacks from the provider. -->

Example Provider may send webhooks to Example Service. Replace this page when documenting a real provider.

## Endpoint

`[POST /webhooks/example-provider]`

## Authentication / verification

<!-- Describe signature checks without exposing secrets. -->

- Header: `[X-Signature]`
- Secret: `<SECRET_VALUE>`

## Payload example (sanitized)

```json
{
  "id": "[event-id]",
  "type": "[event-type]",
  "resourceId": "[id]"
}
```

## Processing

Related flow: [Example Flow](../../flows/example-flow.md)

## Idempotency

Webhook delivery may be at-least-once. Example Service should handle duplicate notifications safely.
