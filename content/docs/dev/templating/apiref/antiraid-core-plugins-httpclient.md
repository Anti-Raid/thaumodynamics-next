---
title: "@antiraid-core/plugins/httpclient"
description: "API reference for @antiraid-core/plugins/httpclient"
---

<div id="@antiraid-core/plugins/httpclient"></div>

# @antiraid-core/plugins/httpclient

<div id="Types"></div>

## Types

<div id="Url"></div>

## Url

<details>
<summary>Raw Type</summary>

```luau
type Url = {
	host: string,

	-- The host of the URL
	port: number,

	-- The port of the URL
	scheme: string,

	-- The scheme of the URL (e.g., "http", "https")
	path: string,

	-- The path of the URL
	query: string?,

	-- The query string of the URL
	fragment: string?
}
```

</details>

<TypeTable
	type={{
		"host": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"port": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"scheme": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"path": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"query": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"fragment": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="Headers"></div>

## Headers

<details>
<summary>Raw Type</summary>

```luau
type Headers = {
	get: (self: Headers, key: string) -> string?,

	-- Get a header by key
	set: (self: Headers, key: string, value: string) -> (),

	-- Set a header
	remove: (self: Headers, key: string) -> (),

	-- Remove a header by key
	headers_bytes: (self: Headers) -> {
		[string]: {number}
	},

	-- Get all headers as a table of strings to bytes
	headers_str: (self: Headers) -> {
		[string]: string
	}
}
```

</details>

<TypeTable
	type={{
		"get": {
			type: "(self, key: [string](#string)) -> [string](#string)?",
			description: "",
			required: true
		},
		"set": {
			type: "(self, key: [string](#string), value: [string](#string)) -> ()",
			description: "",
			required: true
		},
		"remove": {
			type: "(self, key: [string](#string)) -> ()",
			description: "",
			required: true
		},
		"headers_bytes": {
			type: "(self) -> \{[string]: \{[number](#number)\}\}",
			description: "",
			required: true
		},
		"headers_str": {
			type: "(self) -> \{[string]: [string](#string)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="Request"></div>

## Request

<details>
<summary>Raw Type</summary>

```luau
type Request = {
	--- The HTTP method (e.g., "GET", "POST")
	method: string,

	--- The URL of the request
	---
	--- The returned object will be a copy of the URL so mutating this object without explicit assignment
	--- will not affect the original URL.
	url: Url,

	--- The headers of the request
	--- The returned object will be a copy of the headers so mutating this object without explicit assignment
	--- will not affect the original headers. 
	headers: Headers,

	--- The body of the request, can be a string, table, or buffer. When set, it will be serialized to bytes.
	---
	--- When reading, the body will be a buffer
	body_bytes: any,

	--- The timeout for the request, can be a number (in seconds) or a \`timedelta\` object
	---
	--- Max value: 5 seconds
	timeout: dt.TimeDelta,

	--- The HTTP version of the request, defaults to "HTTP/1.1"
	version: "HTTP/0.9" | "HTTP/1.0" | "HTTP/1.1" | "HTTP/2.0" | "HTTP/3.0",

	--- @yields
	---
	--- Sends the request and returns a response object
	send: (self: Request) -> Response
}
```

</details>

<TypeTable
	type={{
		"send": {
			type: "(self) -> [Response](#Response)",
			description: "@yields Sends the request and returns a response object",
			required: true
		},
		"method": {
			type: "[string](#string)",
			description: "The HTTP method (e.g., 'GET', 'POST')",
			required: true
		},
		"url": {
			type: "[Url](#Url)",
			description: "The URL of the requestThe returned object will be a copy of the URL so mutating this object without explicit assignmentwill not affect the original URL.",
			required: true
		},
		"headers": {
			type: "[Headers](#Headers)",
			description: "The headers of the requestThe returned object will be a copy of the headers so mutating this object without explicit assignmentwill not affect the original headers.",
			required: true
		},
		"body_bytes": {
			type: "[any](#any)",
			description: "The body of the request, can be a string, table, or buffer. When set, it will be serialized to bytes.When reading, the body will be a buffer",
			required: true
		},
		"timeout": {
			type: "[dt](#module.dt).[TimeDelta](#TimeDelta)",
			description: "The timeout for the request, can be a number (in seconds) or a \`timedelta\` objectMax value: 5 seconds",
			required: true
		},
		"version": {
			type: "('HTTP/0.9' | 'HTTP/1.0' | 'HTTP/1.1' | 'HTTP/2.0' | 'HTTP/3.0')",
			description: "The HTTP version of the request, defaults to 'HTTP/1.1'",
			required: true
		},
	}}
/>
<div id="Response"></div>

## Response

<details>
<summary>Raw Type</summary>

```luau
type Response = {
	--- URL of the response
	url: Url,

	--- The status code of the response
	status: number,

	--- The content length of the response
	content_length: number?,

	--- The headers of the response
	headers: Headers,

	--- @yields
	---
	--- Reads the response as text (but does not have to be UTF-8 encoded) 
	---
	--- Note that this will destroy the Response object and cause all calls to it to fail after this.
	text: (self: Response) -> string,

	--- @yields
	---
	--- Reads the response as JSON, will return a Lua table
	---
	--- Note that this will destroy the Response object and cause all calls to it to fail after this.
	json: (self: Response) -> any,

	--- @yields
	---
	--- Reads the response as bytes, will return a blob
	---
	--- Note that this will destroy the Response object and cause all calls to it to fail after this.
	blob: (self: Response) -> blob.Blob
}
```

</details>

<TypeTable
	type={{
		"text": {
			type: "(self) -> [string](#string)",
			description: "@yields Reads the response as text (but does not have to be UTF-8 encoded)Note that this will destroy the Response object and cause all calls to it to fail after this.",
			required: true
		},
		"json": {
			type: "(self) -> [any](#any)",
			description: "@yields Reads the response as JSON, will return a Lua tableNote that this will destroy the Response object and cause all calls to it to fail after this.",
			required: true
		},
		"blob": {
			type: "(self) -> [blob](#module.blob).[Blob](#Blob)",
			description: "@yields Reads the response as bytes, will return a blobNote that this will destroy the Response object and cause all calls to it to fail after this.",
			required: true
		},
		"url": {
			type: "[Url](#Url)",
			description: "URL of the response",
			required: true
		},
		"status": {
			type: "[number](#number)",
			description: "The status code of the response",
			required: true
		},
		"content_length": {
			type: "[number](#number)?",
			description: "The content length of the response",
			required: false
		},
		"headers": {
			type: "[Headers](#Headers)",
			description: "The headers of the response",
			required: true
		},
	}}
/>
<div id="Plugin"></div>

## Plugin

<details>
<summary>Raw Type</summary>

```luau
type Plugin = {
	--- Creates a new request
	new_request: (method: string, url: string) -> Request,

	--- Creates a new empty headers object
	new_headers: () -> Headers,

	--- Parses a URL string into a Url object
	new_url: (url: string) -> Url
}
```

</details>

<TypeTable
	type={{
		"new_request": {
			type: "(method: [string](#string), url: [string](#string)) -> [Request](#Request)",
			description: "Creates a new request",
			required: true
		},
		"new_headers": {
			type: "() -> [Headers](#Headers)",
			description: "Creates a new empty headers object",
			required: true
		},
		"new_url": {
			type: "(url: [string](#string)) -> [Url](#Url)",
			description: "Parses a URL string into a Url object",
			required: true
		},
	}}
/>
