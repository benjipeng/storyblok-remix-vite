# StoryBlok and Remix!

## Local Development

> `MacOS` requires installing `mkcert` for **creating** a _valid_ certificate and Install localhost with `mkcert`

```bash
brew install mkcert
brew install nss # Network Security Services for FireFox
mkcert -install
mkcert localhost
```

After that

1. `npm install -g local-ssl-proxy` Installing the _actual_ proxy
2. `local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem` Run the proxy to target port 3000, can change that into any ports but this is what the app is running in this development.
