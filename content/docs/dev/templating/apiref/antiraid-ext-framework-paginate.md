---
title: "@antiraid-ext/framework/paginate"
description: "API reference for @antiraid-ext/framework/paginate"
---

<div id="@antiraid-ext/framework/paginate"></div>

# @antiraid-ext/framework/paginate

<div id="Types"></div>

## Types

<div id="PaginationOpts"></div>

## PaginationOpts

<details>
<summary>Raw Type</summary>

```luau
type PaginationOpts = {
	id: string,

	embed: (currentIdx: number) -> apitypes.EmbedObject,

	numPages: number,

	timeToExpiry: number?
}
```

</details>

<TypeTable
	type={{
		"embed": {
			type: "(currentIdx: [number](#number)) -> [apitypes](#module.apitypes).[EmbedObject](#EmbedObject)",
			description: "",
			required: true
		},
		"id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"numPages": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"timeToExpiry": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="paginate"></div>

## paginate

<details>
<summary>Function Signature</summary>

```luau
function paginate(data: frameworktypes.RunData, opts: PaginationOpts) -> () end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="data"></div>

### data

[frameworktypes](#module.frameworktypes).[RunData](#RunData)



<div id="opts"></div>

### opts

[PaginationOpts](#PaginationOpts)

