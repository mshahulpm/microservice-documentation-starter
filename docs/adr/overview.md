---
sidebar_position: 1
sidebar_label: Overview
---

# Architecture Decision Records

Architecture decisions are stored globally in `docs/adr/`.

Use ADRs for choices that affect more than one service, or that future developers need to understand.

## Format

Copy [ADR Template](../templates/adr-template.md) or [template.md](./template.md).

Required sections:

- Status
- Date
- Context
- Options considered
- Decision
- Consequences
- Related services
- Related documentation

## Status values

`Proposed` / `Accepted` / `Deprecated` / `Superseded`

## File naming

```text
docs/adr/ADR-XXX-title.md
```

Replace `XXX` with the next number and `title` with a short slug.

## Rules

- Do not record secrets or sensitive data in an ADR
- Link to service documentation instead of duplicating it
- When a decision is superseded, keep the original ADR and point to the new one
