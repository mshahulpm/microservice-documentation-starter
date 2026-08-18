---
sidebar_position: 1
sidebar_label: Overview
---

# Example Service

This folder is the **standard microservice documentation structure**. Copy it when adding a new service. Replace titles and placeholders. Do not treat this as a real organizational service.

## Purpose

<!-- Describe why this service exists. -->

Example Service exists to demonstrate the required documentation files and sections. Replace this sentence with the real service purpose.

## Responsibilities

<!-- List the primary responsibilities. -->

- Own the example resource lifecycle
- Expose the service API
- Publish and consume the events listed in [events.md](./events.md)
- Integrate with [Example Provider](./providers/example-provider/overview.md) when applicable

## Scope

<!-- Describe what this service owns. -->

- Example resource data owned by this service
- Flows documented under [flows/](./flows/example-flow.md)
- Provider integration documented under [providers/example-provider/](./providers/example-provider/overview.md)

## Out of Scope

<!-- Describe what this service does not own. -->

- Other services' databases
- Global provider catalogs
- Flows owned by another service

## Technologies

| Technology | Purpose |
|---|---|
| [Technology] | [Purpose] |

## Communication

| Type | Technology | Purpose |
|---|---|---|
| Sync | REST | Inbound and outbound HTTP APIs |
| Async | [Broker] | Published and consumed events |
