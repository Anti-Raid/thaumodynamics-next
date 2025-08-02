---
title: "@antiraid-ext/lockdowns/mode"
description: "API reference for @antiraid-ext/lockdowns/mode"
---

<div id="@antiraid-ext/lockdowns/mode"></div>

# @antiraid-ext/lockdowns/mode

<div id="Types"></div>

## Types

<div id="Lockdown"></div>

## Lockdown

<details>
<summary>Raw Type</summary>

```luau
type Lockdown = {
	id: string,

	reason: string,

	type: LockdownMode,

	data: any,

	-- Data specific to the lockdown mode
	created_at: datetime.DateTime
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"type": {
			type: "[LockdownMode](#LockdownMode)",
			description: "",
			required: true
		},
		"data": {
			type: "[any](#any)",
			description: "",
			required: true
		},
		"created_at": {
			type: "[datetime](#module.datetime).[DateTime](#DateTime)",
			description: "",
			required: true
		},
	}}
/>
<div id="BaseLockdownModeData"></div>

## BaseLockdownModeData

Base lockdown mode data

<details>
<summary>Raw Type</summary>

```luau
--- Base lockdown mode data
type BaseLockdownModeData = {
	guild: discord.GuildObject,

	channels: {discord.ChannelObject},

	critical_roles: set.Set<discord.Snowflake>,

	lockdowns: {Lockdown},

	ctx: Primitives.TemplateContext
}
```

</details>

<TypeTable
	type={{
		"guild": {
			type: "[discord](#module.discord).[GuildObject](#GuildObject)",
			description: "",
			required: true
		},
		"channels": {
			type: "\{[discord](#module.discord).[ChannelObject](#ChannelObject)\}",
			description: "",
			required: true
		},
		"critical_roles": {
			type: "[set](#module.set).[Set](#Set)&lt;[discord](#module.discord).[Snowflake](#Snowflake)&gt;",
			description: "",
			required: true
		},
		"lockdowns": {
			type: "\{[Lockdown](#Lockdown)\}",
			description: "",
			required: true
		},
		"ctx": {
			type: "[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)",
			description: "",
			required: true
		},
	}}
/>
<div id="ExtLockdownModeData"></div>

## ExtLockdownModeData

Extended lockdown mode data

<details>
<summary>Raw Type</summary>

```luau
--- Extended lockdown mode data
type ExtLockdownModeData = BaseLockdownModeData & {
	all_handles: handle.LockdownModeHandles,

	lockdown: Lockdown
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 1</summary>

[BaseLockdownModeData](#BaseLockdownModeData)

</details>

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"all_handles": {
			type: "[handle](#module.handle).[LockdownModeHandles](#LockdownModeHandles)",
			description: "",
			required: true
		},
		"lockdown": {
			type: "[Lockdown](#Lockdown)",
			description: "",
			required: true
		},
	}}
/>
</details>

<div id="LockdownMode"></div>

## LockdownMode

<details>
<summary>Raw Type</summary>

```luau
type LockdownMode = {
	--- Returns the string form of the lockdown mode
	string_form: () -> string,

	--- The specificity of the lockdown mode. More specific lockdowns should have higher specificity
	---
	--- The specificity is used to determine which lockdowns should be applied/reverted in the event of multiple lockdowns
	--- handling the same roles/channels
	specificity: () -> number,

	--- Tests that a lockdown mode can in fact work
	---
	--- Should error if the lockdown mode cannot be applied
	test: (data: BaseLockdownModeData) -> (),

	--- Try to automatically fix any issues that may prevent the lockdown mode from being applied
	autofix: (data: BaseLockdownModeData) -> (),

	--- Sets up the lockdown mode, returning any data to be stored with the lockdown
	setup: (data: BaseLockdownModeData) -> any,

	--- Returns the sharable lockdown data
	shareable: (lockdown: Lockdown) -> handle.LockdownSharableData,

	--- Creates a new lockdown
	create: (data: ExtLockdownModeData) -> (),

	--- Reverts a lockdown
	revert: (data: ExtLockdownModeData) -> (),

	--- Returns the handle for the lockdown
	handle: (data: BaseLockdownModeData, lockdown: Lockdown) -> handle.LockdownModeHandle
}
```

</details>

<TypeTable
	type={{
		"string_form": {
			type: "() -> [string](#string)",
			description: "Returns the string form of the lockdown mode",
			required: true
		},
		"specificity": {
			type: "() -> [number](#number)",
			description: "The specificity of the lockdown mode. More specific lockdowns should have higher specificityThe specificity is used to determine which lockdowns should be applied/reverted in the event of multiple lockdownshandling the same roles/channels",
			required: true
		},
		"test": {
			type: "(data: [BaseLockdownModeData](#BaseLockdownModeData)) -> ()",
			description: "Tests that a lockdown mode can in fact workShould error if the lockdown mode cannot be applied",
			required: true
		},
		"autofix": {
			type: "(data: [BaseLockdownModeData](#BaseLockdownModeData)) -> ()",
			description: "Try to automatically fix any issues that may prevent the lockdown mode from being applied",
			required: true
		},
		"setup": {
			type: "(data: [BaseLockdownModeData](#BaseLockdownModeData)) -> [any](#any)",
			description: "Sets up the lockdown mode, returning any data to be stored with the lockdown",
			required: true
		},
		"shareable": {
			type: "(lockdown: [Lockdown](#Lockdown)) -> [handle](#module.handle).[LockdownSharableData](#LockdownSharableData)",
			description: "Returns the sharable lockdown data",
			required: true
		},
		"create": {
			type: "(data: [ExtLockdownModeData](#ExtLockdownModeData)) -> ()",
			description: "Creates a new lockdown",
			required: true
		},
		"revert": {
			type: "(data: [ExtLockdownModeData](#ExtLockdownModeData)) -> ()",
			description: "Reverts a lockdown",
			required: true
		},
		"handle": {
			type: "(data: [BaseLockdownModeData](#BaseLockdownModeData), lockdown: [Lockdown](#Lockdown)) -> [handle](#module.handle).[LockdownModeHandle](#LockdownModeHandle)",
			description: "Returns the handle for the lockdown",
			required: true
		},
	}}
/>
<div id="RegistryCall"></div>

## RegistryCall

<details>
<summary>Raw Type</summary>

```luau
type RegistryCall = (stringform: string) -> LockdownMode?
```

</details>

<details>
<summary>Function Signature</summary>

```luau
(stringform: string) -> LockdownMode?
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="stringform"></div>

### stringform

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[LockdownMode](#LockdownMode)?<div id="LockdownModeRegistry"></div>

## LockdownModeRegistry

<details>
<summary>Raw Type</summary>

```luau
type LockdownModeRegistry = {RegistryCall}
```

</details>

\{[RegistryCall](#RegistryCall)\}

<div id="Functions"></div>

# Functions

<div id="getLockdownMode"></div>

## getLockdownMode

<details>
<summary>Function Signature</summary>

```luau
function getLockdownMode(reg: LockdownModeRegistry, stringform: string) -> LockdownMode? end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="reg"></div>

### reg

[LockdownModeRegistry](#LockdownModeRegistry)

<div id="stringform"></div>

### stringform

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[LockdownMode](#LockdownMode)?