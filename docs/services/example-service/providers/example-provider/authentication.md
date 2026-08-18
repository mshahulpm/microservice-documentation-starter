---
sidebar_position: 3
sidebar_label: Authentication
---

# Example Provider Authentication

## Mechanism

<!-- Describe authentication mechanism without exposing secrets. -->

`[OAuth client credentials / API key / mTLS / ...]`

## Credentials

Document names only:

| Name | Placeholder |
|---|---|
| Client ID | `<CLIENT_ID>` |
| Secret | `<SECRET_VALUE>` |
| API key | `<API_KEY>` |

Never commit real values.

## Example (sanitized)

```http
POST /oauth/token
Content-Type: application/x-www-form-urlencoded

client_id=<CLIENT_ID>&client_secret=<SECRET_VALUE>&grant_type=client_credentials
```

## Token handling

<!-- Describe token lifetime and storage without publishing secrets. -->

- Token lifetime: `[duration]`
- Storage: `[secret manager / env var name]`
- Do not log tokens
