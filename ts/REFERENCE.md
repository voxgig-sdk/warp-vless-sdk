# GithubError TypeScript SDK Reference

Complete API reference for the GithubError TypeScript SDK.


## GithubErrorSDK

### Constructor

```ts
new GithubErrorSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GithubErrorSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = GithubErrorSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `GithubErrorSDK` instance in test mode.


### Instance Methods

#### `Warp(data?: object)`

Create a new `Warp` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WarpEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `GithubErrorSDK.test()`.

**Returns:** `GithubErrorSDK` instance in test mode.


---

## WarpEntity

```ts
const warp = client.Warp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amneziaMode` | `string` | No | Amnezia VPN mode configuration |
| `configs` | `any[]` | No | Array of configuration objects when multiple configs are returned |
| `content` | `string` | No | Base64 encoded WARP configuration content |
| `deviceType` | `string` | No | The type of device requesting the configuration |
| `errorCode` | `string` | No | Error code if an error occurred |
| `message` | `string` | No | Human-readable message or error description |
| `selectedDns` | `string` | No | DNS provider selection |
| `selectedServices` | `any[]` | No | List of selected services to include in the configuration |
| `siteMode` | `string` | No | The site mode for the WARP configuration |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Warp().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WarpEntity` instance with the same client and
options.

#### `client()`

Return the parent `GithubErrorSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new GithubErrorSDK({
  feature: {
    test: { active: true },
  }
})
```

