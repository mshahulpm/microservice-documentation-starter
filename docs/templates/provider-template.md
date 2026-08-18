---
sidebar_position: 3
sidebar_label: Provider Template
---

# Provider Template

Create a folder under the owning service:

```text
services/<service-name>/providers/<provider-name>/
├── overview.md
├── integration.md
├── authentication.md
├── api-usage.md
├── webhooks.md
├── errors.md
├── known-issues.md
└── history.md
```

Do not create a global provider catalog.

`overview.md`:

```markdown
# Provider Name

## Purpose

<!-- Why does this service use this provider? -->

## Integration Owner

[Service Name]

## Integration Overview

<!-- Describe how this service integrates with the provider. -->

## Authentication

<!-- Describe authentication mechanism without exposing secrets. -->

## APIs Used

| API | Purpose |
|---|---|
| [API] | [Purpose] |

## Configuration

<!-- Document configuration names and purposes without exposing secrets. -->

## Related Flows

<!-- Link to flows in ../flows/ that use this provider. -->
```
