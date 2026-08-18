---
sidebar_position: 1
sidebar_label: Overview
---

# Example Provider

## Purpose

<!-- Why does this service use this provider? -->

Example Service uses Example Provider to demonstrate provider documentation that lives **inside the owning service**. This is not a real vendor.

## Integration Owner

Example Service

## Integration Overview

<!-- Describe how this service integrates with the provider. -->

Example Service calls Example Provider over HTTP and may receive webhooks. Details are split across the files in this folder.

## Authentication

<!-- Describe authentication mechanism without exposing secrets. -->

See [authentication.md](./authentication.md). Use placeholders such as `<API_KEY>` and `<CLIENT_ID>`.

## APIs Used

| API | Purpose |
|---|---|
| `[Provider API]` | [Purpose] |

See [api-usage.md](./api-usage.md).

## Configuration

<!-- Document configuration names and purposes without exposing secrets. -->

| Name | Purpose |
|---|---|
| `[PROVIDER_BASE_URL]` | Provider endpoint |
| `[PROVIDER_CLIENT_ID]` | Client identifier (`<CLIENT_ID>`) |
| `[PROVIDER_SECRET]` | Secret (`<SECRET_VALUE>`) |

## Related Flows

<!-- Link to flows in ../flows/ that use this provider. -->

- [Example Flow](../../flows/example-flow.md)

## Additional pages

- [Integration](./integration.md)
- [Authentication](./authentication.md)
- [API Usage](./api-usage.md)
- [Webhooks](./webhooks.md)
- [Errors](./errors.md)
- [Known Issues](./known-issues.md)
- [History](./history.md)
