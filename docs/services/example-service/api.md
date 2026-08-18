---
sidebar_position: 3
sidebar_label: API
---

# API Documentation

## Overview

<!-- Describe the APIs exposed by this service. -->

Example Service exposes HTTP APIs for the example resource. This page is a high-level summary. Do not duplicate a complete OpenAPI specification here if one already exists.

## Authentication

<!-- Describe authentication requirements. -->

- Mechanism: `[Bearer token / mTLS / ...]`
- Credential placeholders: `<API_KEY>`, `<CLIENT_ID>`, `<SECRET_VALUE>`
- Do not document production credentials

## API Groups

| Group | Description |
|---|---|
| Example resources | Create, read, and update the example resource |
| [Group] | [Description] |

## Request Standards

<!-- Describe common request conventions. -->

Follow the platform [REST](../../communication/rest.md) conventions.

Example (sanitized):

```http
POST /example-resources
Authorization: Bearer <REDACTED>
X-Correlation-Id: [id]
Content-Type: application/json

{
  "name": "[example]"
}
```

## Response Standards

<!-- Describe common response conventions. -->

```json
{
  "id": "[id]",
  "name": "[example]",
  "status": "[status]"
}
```

## Error Handling

<!-- Describe error response format. -->

Follow [Error Handling](../../communication/error-handling.md).

```json
{
  "error": {
    "code": "[ERROR_CODE]",
    "message": "[safe message]",
    "correlationId": "[id]"
  }
}
```

## Detailed API Reference

<!-- Link to OpenAPI/Swagger documentation if available. -->

- OpenAPI / Swagger: `[link or location]`
- Related flow: [Example Flow](./flows/example-flow.md)
