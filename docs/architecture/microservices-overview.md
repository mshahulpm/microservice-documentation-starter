---
sidebar_position: 2
sidebar_label: Microservices Overview
---

# Microservices Overview

List the platform's microservices and link to each service folder. Keep this page as an index. Detailed information belongs inside `services/`.

## Service catalog

| Service | Purpose | Documentation |
|---|---|---|
| Example Service | Demonstrates the documentation standard | [Overview](../services/example-service/overview.md) |
| [Service Name] | [Purpose] | [Link to `services/<service-name>/overview.md`] |

## Ownership

Each microservice owns:

- Overview, architecture, APIs, database, events, and dependencies
- Flows that it orchestrates
- Provider integrations that it owns

There is no global provider documentation folder.

## Adding a service to this list

1. Copy `docs/services/example-service/`.
2. Rename the folder and update titles.
3. Fill in the standard Markdown files.
4. Add a row to the table above that links to the new service overview.
