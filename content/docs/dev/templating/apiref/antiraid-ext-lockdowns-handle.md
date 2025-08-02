---
title: "@antiraid-ext/lockdowns/handle"
description: "API reference for @antiraid-ext/lockdowns/handle"
---

<div id="@antiraid-ext/lockdowns/handle"></div>

# @antiraid-ext/lockdowns/handle

<div id="Types"></div>

## Types

<div id="LockdownModeHandle"></div>

## LockdownModeHandle

To ensure two lockdowns don't conflict with each other, we need some information about what all lockdowns are handling

along with what specificity they have

<details>
<summary>Raw Type</summary>

```luau
--- To ensure two lockdowns don't conflict with each other, we need some information about what all lockdowns are handling
--- along with what specificity they have
type LockdownModeHandle = {
	roles: set.Set<discord.Snowflake>,

	channels: set.Set<discord.Snowflake>
}
```

</details>

<TypeTable
	type={{
		"roles": {
			type: "[set](#module.set).[Set](#Set)&lt;[discord](#module.discord).[Snowflake](#Snowflake)&gt;",
			description: "",
			required: true
		},
		"channels": {
			type: "[set](#module.set).[Set](#Set)&lt;[discord](#module.discord).[Snowflake](#Snowflake)&gt;",
			description: "",
			required: true
		},
	}}
/>
<div id="LockdownModeHandles"></div>

## LockdownModeHandles

To ensure two lockdowns don't conflict with each other, we need some information about what all lockdowns are handling

along with what specificity they have

<details>
<summary>Raw Type</summary>

```luau
--- To ensure two lockdowns don't conflict with each other, we need some information about what all lockdowns are handling
--- along with what specificity they have
type LockdownModeHandles = {
	roles: priorityset.PrioritySet<discord.Snowflake>,

	channels: priorityset.PrioritySet<discord.Snowflake>,

	--- Adds a handle to the set given the specificity of the handle
	addhandle: (handle: LockdownModeHandle, specificity: number) -> (),

	--- Removes a handle from the set given the specificity of the handle
	removehandle: (handle: LockdownModeHandle, specificity: number) -> (),

	--- A role is locked if it contains all roles of the current *with a lower specificity*
	isrolelocked: (role: discord.Snowflake, specificity: number) -> boolean,

	--- A channel is locked if it contains all channel of the current *with a lower specificity*
	ischannellocked: (channel: discord.Snowflake, specificity: number) -> boolean,

	--- A handle is redundant if it contains all roles and channels of the current *with a lower specificity*
	isredundant: (other: LockdownModeHandle, other_spec: number) -> boolean
}
```

</details>

<TypeTable
	type={{
		"addhandle": {
			type: "(handle: [LockdownModeHandle](#LockdownModeHandle), specificity: [number](#number)) -> ()",
			description: "Adds a handle to the set given the specificity of the handle",
			required: true
		},
		"removehandle": {
			type: "(handle: [LockdownModeHandle](#LockdownModeHandle), specificity: [number](#number)) -> ()",
			description: "Removes a handle from the set given the specificity of the handle",
			required: true
		},
		"isrolelocked": {
			type: "(role: [discord](#module.discord).[Snowflake](#Snowflake), specificity: [number](#number)) -> [boolean](#boolean)",
			description: "A role is locked if it contains all roles of the current *with a lower specificity*",
			required: true
		},
		"ischannellocked": {
			type: "(channel: [discord](#module.discord).[Snowflake](#Snowflake), specificity: [number](#number)) -> [boolean](#boolean)",
			description: "A channel is locked if it contains all channel of the current *with a lower specificity*",
			required: true
		},
		"isredundant": {
			type: "(other: [LockdownModeHandle](#LockdownModeHandle), other_spec: [number](#number)) -> [boolean](#boolean)",
			description: "A handle is redundant if it contains all roles and channels of the current *with a lower specificity*",
			required: true
		},
		"roles": {
			type: "[priorityset](#module.priorityset).[PrioritySet](#PrioritySet)&lt;[discord](#module.discord).[Snowflake](#Snowflake)&gt;",
			description: "",
			required: true
		},
		"channels": {
			type: "[priorityset](#module.priorityset).[PrioritySet](#PrioritySet)&lt;[discord](#module.discord).[Snowflake](#Snowflake)&gt;",
			description: "",
			required: true
		},
	}}
/>
<div id="LockdownSharableData"></div>

## LockdownSharableData

To allow lockdowns to have access to the low-level data of other lockdowns,

this struct contains the roles and channels each lockdown knows about

<details>
<summary>Raw Type</summary>

```luau
--- To allow lockdowns to have access to the low-level data of other lockdowns,
--- this struct contains the roles and channels each lockdown knows about
type LockdownSharableData = {
	role_permissions: {
		[discord.Snowflake]: string
	},

	channel_permissions: {
		[discord.Snowflake]: {discord.OverwriteObject}
	}
}
```

</details>

<TypeTable
	type={{
		"role_permissions": {
			type: "\{[discord.Snowflake]: [string](#string)\}",
			description: "",
			required: true
		},
		"channel_permissions": {
			type: "\{[discord.Snowflake]: \{[discord](#module.discord).[OverwriteObject](#OverwriteObject)\}\}",
			description: "",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="LockdownModeHandle"></div>

## LockdownModeHandle

To ensure two lockdowns don't conflict with each other, we need some information about what all lockdowns are handling

along with what specificity they have

<details>
<summary>Function Signature</summary>

```luau
--- To ensure two lockdowns don't conflict with each other, we need some information about what all lockdowns are handling
--- along with what specificity they have
function LockdownModeHandle() -> LockdownModeHandle end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[LockdownModeHandle](#LockdownModeHandle)<div id="LockdownModeHandles"></div>

## LockdownModeHandles

To ensure two lockdowns don't conflict with each other, we need some information about what all lockdowns are handling

along with what specificity they have

<details>
<summary>Function Signature</summary>

```luau
--- To ensure two lockdowns don't conflict with each other, we need some information about what all lockdowns are handling
--- along with what specificity they have
function LockdownModeHandles() -> LockdownModeHandles end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[LockdownModeHandles](#LockdownModeHandles)