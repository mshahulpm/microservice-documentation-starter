---
sidebar_position: 3
sidebar_label: Event Conventions
---

# Event Conventions

Naming and ownership rules for events. Each service documents only the events it publishes or consumes.

## Naming

<!-- Describe the platform event naming convention. -->

Example pattern:

```text
[domain].[entity].[action]
```

Placeholder:

```text
example.resource.created
```

Do not use real product event names on this page unless they are already approved for documentation.

## Ownership

| Rule | Detail |
|---|---|
| Publisher owns the contract | The publishing service documents the event in `events.md` |
| Consumers document usage | Consuming services list the event under Consumed Events |
| No global event dump | Do not create a folder of all events outside services |

## Versioning

<!-- Describe how event contracts change. -->

[Versioning guidance]

## Related documentation

- [Asynchronous Messaging](./asynchronous-messaging.md)
- [Event template](../templates/event-template.md)
- Example: [Example Service events](../services/example-service/events.md)
