---
title: "@antiraid-core/blob"
description: "API reference for @antiraid-core/blob"
---

<div id="@antiraid-core/blob"></div>

# @antiraid-core/blob

<div id="Types"></div>

## Types

<div id="Blob"></div>

## Blob

\[\[
    A Blob is a special structure that is owned by Rust
    and can be used to e.g. avoid copying between Lua and Rust

    When a Blob is passed into a DataStore/Rust, its contents may be moved
    to Rust leaving a empty Blob. \`clone\` can be used to avoid this. When this
    will happen is undefined.

    This core primitive is not available in WASM contexts yet
\]\]

<details>
<summary>Raw Type</summary>

```luau
--[[
    A Blob is a special structure that is owned by Rust
    and can be used to e.g. avoid copying between Lua and Rust

    When a Blob is passed into a DataStore/Rust, its contents may be moved
    to Rust leaving a empty Blob. \`clone\` can be used to avoid this. When this
    will happen is undefined.

    This core primitive is not available in WASM contexts yet
]]
type Blob = {
	--- Converts the Blob to a buffer if there is enough memory available
	tobuffer: (self: Blob) -> buffer,

	--- Drains the Blob following which the Blob will be empty
	drain: (self: Blob) -> nil,

	--- Securely drains/"zeroizes" the Blob, following which the Blob will be empty
	zeroize: (self: Blob) -> nil,

	-- Metatable
	__len: (self: Blob) -> number
}
```

</details>

<TypeTable
	type={{
		"tobuffer": {
			type: "(self) -> [buffer](#buffer)",
			description: "Converts the Blob to a buffer if there is enough memory available",
			required: true
		},
		"drain": {
			type: "(self) -> [nil](#nil)",
			description: "Drains the Blob following which the Blob will be empty",
			required: true
		},
		"zeroize": {
			type: "(self) -> [nil](#nil)",
			description: "Securely drains/'zeroizes' the Blob, following which the Blob will be empty",
			required: true
		},
		"__len": {
			type: "(self) -> [number](#number)",
			description: "",
			required: true
		},
	}}
/>
<div id="BlobTaker"></div>

## BlobTaker

<details>
<summary>Raw Type</summary>

```luau
type BlobTaker = buffer | string | Blob
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

[buffer](#buffer)

</details>

<details>
<summary>Variant 2</summary>

[string](#string)

</details>

<details>
<summary>Variant 3</summary>

[Blob](#Blob)

</details>

