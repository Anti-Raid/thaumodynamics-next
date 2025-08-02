---
title: "@antiraid-ext/lockdowns/settingsmanager"
description: "API reference for @antiraid-ext/lockdowns/settingsmanager"
---

<div id="@antiraid-ext/lockdowns/settingsmanager"></div>

# @antiraid-ext/lockdowns/settingsmanager

<div id="Types"></div>

## Types

<div id="LockdownSettings"></div>

## LockdownSettings

Stores common/persistent data required for lockdowns

<details>
<summary>Raw Type</summary>

```luau
--- Stores common/persistent data required for lockdowns
type LockdownSettings = {
	member_roles: {string},

	--- Whether or not lockdown tests should pass or not
	no_apply_test: boolean
}
```

</details>

<TypeTable
	type={{
		"member_roles": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
		"no_apply_test": {
			type: "[boolean](#boolean)",
			description: "Whether or not lockdown tests should pass or not",
			required: true
		},
	}}
/>
<div id="LockdownSettingsManager"></div>

## LockdownSettingsManager

<details>
<summary>Raw Type</summary>

```luau
type LockdownSettingsManager = {
	get: () -> LockdownSettings | nil,

	set: (settings: LockdownSettings) -> (),

	delete: () -> (),

	default: () -> LockdownSettings
}
```

</details>

<TypeTable
	type={{
		"get": {
			type: "() -> ([LockdownSettings](#LockdownSettings) | [nil](#nil))",
			description: "",
			required: true
		},
		"set": {
			type: "(settings: [LockdownSettings](#LockdownSettings)) -> ()",
			description: "",
			required: true
		},
		"delete": {
			type: "() -> ()",
			description: "",
			required: true
		},
		"default": {
			type: "() -> [LockdownSettings](#LockdownSettings)",
			description: "",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="LockdownSettingsManager"></div>

## LockdownSettingsManager

A settings manager for the lockdown settings.

<details>
<summary>Function Signature</summary>

```luau
--- A settings manager for the lockdown settings.
function LockdownSettingsManager(ctx: Primitives.TemplateContext) -> LockdownSettingsManager end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[LockdownSettingsManager](#LockdownSettingsManager)