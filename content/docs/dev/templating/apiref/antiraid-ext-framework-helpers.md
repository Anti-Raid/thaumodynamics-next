---
title: "@antiraid-ext/framework/helpers"
description: "API reference for @antiraid-ext/framework/helpers"
---

<div id="@antiraid-ext/framework/helpers"></div>

# @antiraid-ext/framework/helpers

<div id="Functions"></div>

# Functions

<div id="CustomFramework"></div>

## CustomFramework

<details>
<summary>Function Signature</summary>

```luau
function CustomFramework(base: coretypes.BaseFramework, suffix: string?, commands: {
		[string]: coretypes.Command
	}) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="base"></div>

### base

[coretypes](#module.coretypes).[BaseFramework](#BaseFramework)



<div id="suffix"></div>

### suffix

*This field is optional and may not be specified*

[string](#string)?

<div id="commands"></div>

### commands

<TypeTable
	type={{
		"[string]": {
			type: "[coretypes](#module.coretypes).[Command](#Command)",
			description: "",
			required: true
		},
	}}
/>
<div id="SimpleFramework"></div>

## SimpleFramework

<details>
<summary>Function Signature</summary>

```luau
function SimpleFramework(strict_val: boolean, suffix: string?, commands: {
		[string]: coretypes.Command
	}) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="strict_val"></div>

### strict_val

[boolean](#boolean)

<div id="suffix"></div>

### suffix

*This field is optional and may not be specified*

[string](#string)?

<div id="commands"></div>

### commands

<TypeTable
	type={{
		"[string]": {
			type: "[coretypes](#module.coretypes).[Command](#Command)",
			description: "",
			required: true
		},
	}}
/>
<div id="FlowFramework"></div>

## FlowFramework

<details>
<summary>Function Signature</summary>

```luau
function FlowFramework(strict_val: boolean, suffix: string?, commands: {
		[string]: coretypes.Command
	}) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="strict_val"></div>

### strict_val

[boolean](#boolean)

<div id="suffix"></div>

### suffix

*This field is optional and may not be specified*

[string](#string)?

<div id="commands"></div>

### commands

<TypeTable
	type={{
		"[string]": {
			type: "[coretypes](#module.coretypes).[Command](#Command)",
			description: "",
			required: true
		},
	}}
/>
