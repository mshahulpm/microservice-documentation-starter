---
sidebar_position: 1
sidebar_label: Microservice Template
---

# Microservice Template

Copy `docs/services/example-service/` rather than recreating this structure by hand. Use these sections in `overview.md`.

```markdown
# Service Name

## Purpose

<!-- Describe why this service exists. -->

## Responsibilities

<!-- List the primary responsibilities. -->

## Scope

<!-- Describe what this service owns. -->

## Out of Scope

<!-- Describe what this service does not own. -->

## Technologies

| Technology | Purpose |
|---|---|
| [Technology] | [Purpose] |

## Communication

| Type | Technology | Purpose |
|---|---|---|
| [Sync/Async] | [Technology] | [Purpose] |
```

Required files for every service:

```text
service-name/
├── overview.md
├── architecture.md
├── api.md
├── database.md
├── events.md
├── dependencies.md
├── flows/
└── providers/
```
