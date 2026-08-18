---
sidebar_position: 4
sidebar_label: Event Template
---

# Event Template

Document events only in the service that publishes or consumes them: `services/<service-name>/events.md`.

```markdown
# Events

## Published Events

### event.name

**Trigger**

<!-- When is this event published? -->

**Consumers**

- [Service]

**Purpose**

<!-- Explain why this event exists. -->

---

## Consumed Events

### event.name

**Producer**

[Service]

**Purpose**

<!-- Explain why this service consumes this event. -->
```
