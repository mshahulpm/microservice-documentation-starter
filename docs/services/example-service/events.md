---
sidebar_position: 5
sidebar_label: Events
---

# Events

Document only events that Example Service publishes or consumes.

## Published Events

### example.resource.created

**Trigger**

<!-- When is this event published? -->

Published after Example Service successfully creates an example resource. See [Example Flow](./flows/example-flow.md).

**Consumers**

- [Service]

**Purpose**

<!-- Explain why this event exists. -->

Notify other services that an example resource was created.

---

### example.resource.updated

**Trigger**

<!-- When is this event published? -->

[When the resource is updated]

**Consumers**

- [Service]

**Purpose**

<!-- Explain why this event exists. -->

[Purpose]

---

## Consumed Events

### example.dependency.completed

**Producer**

[Service]

**Purpose**

<!-- Explain why this service consumes this event. -->

Example Service consumes this event to continue a downstream step in a flow.

Use the [event template](../../templates/event-template.md) for additional events.
