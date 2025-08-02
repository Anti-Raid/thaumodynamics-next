---
title: "@discord-types/utils/frombf"
description: "API reference for @discord-types/utils/frombf"
---

<div id="@discord-types/utils/frombf"></div>

# @discord-types/utils/frombf

<div id="Functions"></div>

# Functions

<div id="fromBitflag"></div>

## fromBitflag

<details>
<summary>Function Signature</summary>

```luau
function fromBitflag(bitflag: typesext.U64Convertibles, flags: {
		[string]: typesext.U64Convertibles
	}) -> {string} end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="bitflag"></div>

### bitflag

[typesext](#module.typesext).[U64Convertibles](#U64Convertibles)



<div id="flags"></div>

### flags

<TypeTable
	type={{
		"[string]": {
			type: "[typesext](#module.typesext).[U64Convertibles](#U64Convertibles)",
			description: "",
			required: true
		},
	}}
/>
<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

\{[string](#string)\}<div id="fromBitflagToSet"></div>

## fromBitflagToSet

<details>
<summary>Function Signature</summary>

```luau
function fromBitflagToSet(bitflag: typesext.U64Convertibles, flags: {
		[string]: typesext.U64Convertibles
	}) -> set.Set<string> end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="bitflag"></div>

### bitflag

[typesext](#module.typesext).[U64Convertibles](#U64Convertibles)



<div id="flags"></div>

### flags

<TypeTable
	type={{
		"[string]": {
			type: "[typesext](#module.typesext).[U64Convertibles](#U64Convertibles)",
			description: "",
			required: true
		},
	}}
/>
<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[set](#module.set).[Set](#Set)&lt;[string](#string)&gt;