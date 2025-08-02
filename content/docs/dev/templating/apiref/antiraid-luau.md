---
title: "@antiraid/luau"
description: "API reference for @antiraid/luau"
---

<div id="@antiraid/luau"></div>

# @antiraid/luau

<div id="Types"></div>

## Types

<div id="Chunk"></div>

## Chunk

<details>
<summary>Raw Type</summary>

```luau
type Chunk = {
	--- Sets the environment of the chunk (_G).
	environment: {
		[any]: any
	}?,

	--- Sets the optimization level of the chunk.
	optimization_level: number?,

	--- Text code to be evaluated. Bytecode evaluation is not allowed due to
	--- security reasons.
	code: string,

	---  The name of the chunk, used for debugging purposes.
	chunk_name: string?,

	--- Takes in args and returns the returned values from the \`\`code\`\` being evaluated. This will run the code in main thread / coroutine.running() == nil
	call: (self: Chunk, args: any) -> any,

	--- @yields
	---
	--- Takes in args and returns the returned values from the \`\`code\`\` being evaluated.
	---
	--- This runs the code asynchronously within a coroutine, allowing it to call
	--- yielding functions
	call_async: (self: Chunk, args: any) -> any
}
```

</details>

<TypeTable
	type={{
		"call": {
			type: "(self, args: [any](#any)) -> [any](#any)",
			description: "Takes in args and returns the returned values from the \`\`code\`\` being evaluated. This will run the code in main thread / coroutine.running() == nil",
			required: true
		},
		"call_async": {
			type: "(self, args: [any](#any)) -> [any](#any)",
			description: "@yields Takes in args and returns the returned values from the \`\`code\`\` being evaluated.This runs the code asynchronously within a coroutine, allowing it to callyielding functions",
			required: true
		},
		"environment": {
			type: "\{[any]: [any](#any)\}?",
			description: "Sets the environment of the chunk (_G).",
			required: false
		},
		"optimization_level": {
			type: "[number](#number)?",
			description: "Sets the optimization level of the chunk.",
			required: false
		},
		"code": {
			type: "[string](#string)",
			description: "Text code to be evaluated. Bytecode evaluation is not allowed due tosecurity reasons.",
			required: true
		},
		"chunk_name": {
			type: "[string](#string)?",
			description: "The name of the chunk, used for debugging purposes.",
			required: false
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="load"></div>

## load

Loads a Luau chunk.

<details>
<summary>Function Signature</summary>

```luau
--- Loads a Luau chunk.
function load(code: string) -> Chunk end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="code"></div>

### code

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Chunk](#Chunk)<div id="format"></div>

## format

Formats a set of values to a string

<details>
<summary>Function Signature</summary>

```luau
--- Formats a set of values to a string
function format(...: any) -> string end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="..."></div>

### ...

[any](#any)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[string](#string)