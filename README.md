# RadioBasilisk SDK

Fetch the recently played tracks from Basel's Radio Basilisk station

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Radio Basilisk API

[Radio Basilisk](https://www.basilisk.ch/) is a regional broadcaster based at Marktplatz 5 in Basel, Switzerland, reaching around 100,000 daily listeners. This SDK wraps the station's public track-history endpoint, which is served via the [Radiosphere](https://radiosphere.io/) platform that powers the station's digital infrastructure.

What you get from the API:

- A live feed of recently played songs for Radio Basilisk's channel.

Operational notes: the upstream endpoint is hosted at `radio-basilisk.api.radiosphere.io` under a fixed channel UUID. No authentication is documented, and the freepublicapis.com catalogue notes that CORS is disabled, so browser-side calls may need a proxy.

## Try it

**TypeScript**
```bash
npm install radio-basilisk
```

**Python**
```bash
pip install radio-basilisk-sdk
```

**PHP**
```bash
composer require voxgig/radio-basilisk-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/radio-basilisk-sdk/go
```

**Ruby**
```bash
gem install radio-basilisk-sdk
```

**Lua**
```bash
luarocks install radio-basilisk-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { RadioBasiliskSDK } from 'radio-basilisk'

const client = new RadioBasiliskSDK({})

// List all musics
const musics = await client.Music().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o radio-basilisk-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "radio-basilisk": {
      "command": "/abs/path/to/radio-basilisk-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Music** | Recently played tracks on Radio Basilisk, exposed by the upstream channel `track-history` endpoint. | `/songs/recently-played` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from radiobasilisk_sdk import RadioBasiliskSDK

client = RadioBasiliskSDK({})

# List all musics
musics, err = client.Music(None).list(None, None)
```

### PHP

```php
<?php
require_once 'radiobasilisk_sdk.php';

$client = new RadioBasiliskSDK([]);

// List all musics
[$musics, $err] = $client->Music(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/radio-basilisk-sdk/go"

client := sdk.NewRadioBasiliskSDK(map[string]any{})

// List all musics
musics, err := client.Music(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "RadioBasilisk_sdk"

client = RadioBasiliskSDK.new({})

# List all musics
musics, err = client.Music(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("radio-basilisk_sdk")

local client = sdk.new({})

-- List all musics
local musics, err = client:Music(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = RadioBasiliskSDK.test()
const result = await client.Music().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = RadioBasiliskSDK.test(None, None)
result, err = client.Music(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = RadioBasiliskSDK::test(null, null);
[$result, $err] = $client->Music(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Music(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = RadioBasiliskSDK.test(nil, nil)
result, err = client.Music(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Music(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Radio Basilisk API

- Upstream: [https://www.basilisk.ch/](https://www.basilisk.ch/)
- API docs: [https://freepublicapis.com/radio-basilisk](https://freepublicapis.com/radio-basilisk)

---

Generated from the Radio Basilisk API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
