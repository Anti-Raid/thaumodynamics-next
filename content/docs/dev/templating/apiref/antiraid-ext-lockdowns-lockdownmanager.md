---
title: "@antiraid-ext/lockdowns/lockdownmanager"
description: "API reference for @antiraid-ext/lockdowns/lockdownmanager"
---

<div id="@antiraid-ext/lockdowns/lockdownmanager"></div>

# @antiraid-ext/lockdowns/lockdownmanager

<div id="Types"></div>

## Types

<div id="CreateLockdown"></div>

## CreateLockdown

<details>
<summary>Raw Type</summary>

```luau
type CreateLockdown = {
	id: string?,

	-- ID of the lockdown, if not provided a random one will be generated
	reason: string,

	-- Reason for the lockdown
	type: mode.LockdownMode,

	-- The type of lockdown mode to use
	data: any
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"reason": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"type": {
			type: "[mode](#module.mode).[LockdownMode](#LockdownMode)",
			description: "",
			required: true
		},
		"data": {
			type: "[any](#any)",
			description: "",
			required: true
		},
	}}
/>
<div id="LockdownManager"></div>

## LockdownManager

<details>
<summary>Raw Type</summary>

```luau
type LockdownManager = {
	--- Returns a list of all lockdowns
	list: () -> {mode.Lockdown},

	--- Returns a lockdown by ID
	get: (id: string) -> mode.Lockdown | nil,

	--- Sets a lockdown, creating it if it does not exist
	---
	--- Returns the ID of the lockdown
	set: (lockdown: CreateLockdown) -> mode.Lockdown,

	--- Deletes a lockdown by ID
	delete: (id: string) -> ()
}
```

</details>

<TypeTable
	type={{
		"list": {
			type: "() -> \{[mode](#module.mode).[Lockdown](#Lockdown)\}",
			description: "Returns a list of all lockdowns",
			required: true
		},
		"get": {
			type: "(id: [string](#string)) -> ([mode](#module.mode).[Lockdown](#Lockdown) | [nil](#nil))",
			description: "Returns a lockdown by ID",
			required: true
		},
		"set": {
			type: "(lockdown: [CreateLockdown](#CreateLockdown)) -> [mode](#module.mode).[Lockdown](#Lockdown)",
			description: "Sets a lockdown, creating it if it does not existReturns the ID of the lockdown",
			required: true
		},
		"delete": {
			type: "(id: [string](#string)) -> ()",
			description: "Deletes a lockdown by ID",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="LockdownManager"></div>

## LockdownManager

A data fetcher for lockdowns.

<details>
<summary>Function Signature</summary>

```luau
--- A data fetcher for lockdowns.
function LockdownManager(ctx: Primitives.TemplateContext, reg_val: mode.LockdownModeRegistry?) -> LockdownManager end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="reg_val"></div>

### reg_val

*This field is optional and may not be specified*

[mode](#module.mode).[LockdownModeRegistry](#LockdownModeRegistry)?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[LockdownManager](#LockdownManager)