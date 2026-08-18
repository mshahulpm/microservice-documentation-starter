# Microservices Documentation

Starter internal technical documentation portal for a application built from multiple backend microservices.

This repository is a **documentation framework and standard**. It is not a system for generating the organization's real technical documentation. Cursor and other external AI tools must not be used to generate or process real internal documentation content.

Developers document services by copying the example structure and filling in Markdown files. An approved internal chatbot may assist later; this project only provides the framework.

## Project purpose

- Docusaurus documentation site
- Standard folder conventions for every microservice
- Markdown boilerplates and templates
- One generic Example Service
- Navigation and Mermaid support
- Documentation rules

Do not add real service names, APIs, providers, infrastructure details, or financial workflows to this starter.

## Install

Requires Node.js 20 or later.

```bash
npm install
```

## Run locally

```bash
npm run start
```

This starts the Docusaurus development server (default: `http://localhost:3000`).

## Build

```bash
npm run build
```

Serve the production build:

```bash
npm run serve
```

## Documentation structure

```text
docs/
├── introduction/
├── architecture/
├── services/
│   └── example-service/
│       ├── overview.md
│       ├── architecture.md
│       ├── api.md
│       ├── database.md
│       ├── events.md
│       ├── dependencies.md
│       ├── flows/
│       └── providers/
├── communication/
├── operations/
├── adr/
└── templates/
```

| Area | What belongs there |
|---|---|
| `introduction/` | Portal purpose, business context placeholders, glossary |
| `architecture/` | Platform-level context only |
| `services/` | One folder per microservice |
| `communication/` | Cross-service REST, messaging, events, retries, errors |
| `operations/` | Environments, deployment, monitoring, logging, troubleshooting |
| `adr/` | Architecture Decision Records |
| `templates/` | Copy-paste Markdown boilerplates |

## Standard microservice structure

Every new microservice must use:

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

Minimum required files: overview, architecture, API, database, events, dependencies.

`flows/` and `providers/` are used when applicable. Flows stay in the owning service. Provider documentation stays in the service that owns the integration. There is no global provider catalog.

## How to use the example service

`docs/services/example-service/` is the copyable standard. It uses generic names only:

- Example Service
- Example Flow
- Example Provider

It demonstrates formatting, required sections, Mermaid diagrams, and provider history. It does not describe real business logic.

## How to create a new service

1. Copy `docs/services/example-service`.
2. Rename the folder to the real service name.
3. Update `_category_.json` labels and document titles.
4. Fill `overview.md`.
5. Document service architecture.
6. Document APIs (link to OpenAPI/Swagger instead of duplicating it).
7. Document database ownership.
8. Document events.
9. Document dependencies.
10. Add flows if applicable.
11. Add provider documentation if applicable.
12. Verify Mermaid diagrams render locally.
13. Run the documentation project locally (`npm run start` and `npm run build`).
14. Submit documentation changes through the normal Git workflow.

Then add a row to [Microservices Overview](docs/architecture/microservices-overview.md) linking to the new service.

## Documentation rules

1. Every service must follow the standard folder structure.
2. Do not create custom documentation structures without discussion.
3. Use Markdown by default.
4. Use MDX only when necessary.
5. Keep flows inside the owning service.
6. Keep provider information inside the service that owns the provider integration.
7. Do not create a global provider catalog.
8. Use Mermaid for maintainable diagrams when possible.
9. Do not commit secrets or sensitive information.
10. Do not include production credentials.
11. Sanitize API examples.
12. Do not document customer or personal data.
13. Link related documentation instead of duplicating content.
14. Keep documentation updated when architecture changes.
15. Update provider history when significant provider changes occur.

## Security guidelines

Never include:

- API keys
- Passwords
- Production credentials
- JWT secrets
- Private keys
- Private certificates
- Database connection strings
- Customer data
- Personal data
- Production tokens
- Sensitive financial data

Use placeholders:

```text
<API_KEY>
<CLIENT_ID>
<REDACTED>
<SECRET_VALUE>
```

All request and response examples must be sanitized.

## Templates

Reusable boilerplates live in `docs/templates/`:

- `microservice-template.md`
- `flow-template.md`
- `provider-template.md`
- `event-template.md`
- `api-template.md`
- `database-template.md`
- `adr-template.md`

## Stack

Docusaurus, Markdown, MDX only when required, Mermaid, Node.js, npm, Git.

This is a static documentation portal. Do not add databases, backend services, authentication systems, or custom application UI.
