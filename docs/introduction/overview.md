---
sidebar_position: 1
sidebar_label: Overview
---

# Documentation Overview

This portal is the **internal technical documentation standard** for a Microservice application built from multiple backend microservices.

It is a documentation framework, not a generated catalog of the organization's real systems. Developers copy the standard structure, then fill in service-specific details themselves.

## What this project provides

- A consistent folder structure for every microservice
- Markdown boilerplates and reusable templates
- One generic **Example Service** that shows the expected format
- Navigation, Mermaid diagrams, and documentation rules

## What this project does not provide

- Real organizational architecture, service names, or APIs
- Generated documentation from source code
- A global provider catalog
- Custom dashboards or application UI

## How documentation is organized

| Area | Purpose |
|---|---|
| [Introduction](./business-context.md) | Portal purpose, business context placeholders, glossary |
| [Architecture](../architecture/system-context.md) | Platform-level context only |
| [Services](../services/example-service/overview.md) | Service-owned documentation |
| [Communication Standards](../communication/rest.md) | Cross-service communication rules |
| [Operations](../operations/environments.md) | Environments, deployment, monitoring |
| [Architecture Decisions](../adr/overview.md) | Global ADRs |
| [Templates](../templates/microservice-template.md) | Copy-paste boilerplates |

## Expected workflow

```text
New Microservice
      ↓
Copy Example Service Structure
      ↓
Rename Service
      ↓
Fill Existing Markdown Files
      ↓
Add Service-Specific Flows
      ↓
Document Service-Specific Providers
      ↓
Documentation Automatically Follows Company Standard
```

See the project `README.md` in the repository root for install steps, documentation rules, and how to add a new service.
