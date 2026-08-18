---
sidebar_position: 6
sidebar_label: Security
---

# Security

Describe major security boundaries for the platform. Do not include secrets, credentials, private keys, or production tokens.

## Security boundaries

| Boundary | What it protects |
|---|---|
| [Edge / API gateway] | [Description] |
| [Service-to-service] | [Description] |
| [Data store] | [Description] |

## Authentication and authorization

<!-- Describe platform-level authn/authz without exposing secrets. -->

- Incoming requests: [Mechanism]
- Service-to-service: [Mechanism]
- External providers: [Mechanism]

Use placeholders such as `<CLIENT_ID>` and `<SECRET_VALUE>` in examples.

## Secrets handling

Never commit:

- API keys
- Passwords
- Production credentials
- JWT secrets
- Private keys or certificates
- Database connection strings
- Customer or personal data
- Production tokens
- Sensitive financial data

## Related documentation

- [REST](../communication/rest.md)
- [Error Handling](../communication/error-handling.md)
- Service-level auth belongs in each service `api.md` and provider `authentication.md`
