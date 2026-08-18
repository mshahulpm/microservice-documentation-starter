---
sidebar_position: 1
sidebar_label: System Context
---

# System Context

Describe the platform at a high level. Do not duplicate detailed service documentation here.

## Overview

<!-- Describe the system boundary and the kinds of consumers that interact with it. -->

[System context summary]

## Context diagram

```mermaid
flowchart LR
    Client[Calling Client]
    Platform[Platform]
    Provider[External Provider]

    Client --> Platform
    Platform --> Provider
```

Replace this generic diagram with the real system context when documenting the platform.

## Major parts of the platform

| Part | Responsibility |
|---|---|
| [Part] | [Responsibility] |

## External actors

| Actor | Relationship |
|---|---|
| [Client / provider / dependency] | [How it interacts with the platform] |

## Related documentation

- [Microservices Overview](./microservices-overview.md)
- [Communication](./communication.md)
- [Infrastructure](./infrastructure.md)
- [Security](./security.md)
