---
title: "@antiraid-ext/lockdowns/lockdownset"
description: "API reference for @antiraid-ext/lockdowns/lockdownset"
---

<div id="@antiraid-ext/lockdowns/lockdownset"></div>

# @antiraid-ext/lockdowns/lockdownset

<div id="Types"></div>

## Types

<div id="LockdownSet"></div>

## LockdownSet

Represents a list of lockdowns

<details>
<summary>Raw Type</summary>

```luau
--- Represents a list of lockdowns
type LockdownSet = {
	--- The current list of lockdowns
	lockdowns: {mode.Lockdown},

	--- Lockdown settings right now
	settings: settingsmanager.LockdownSettings,

	--- The current guild data
	guild_data: guilddata.GuildData,

	--- Applies a lockdown mode with a reason
	apply: (mode: mode.LockdownMode, reason: string) -> mode.Lockdown,

	--- Removes a lockdown by ID
	remove: (id: string) -> mode.Lockdown,

	--- Removes all lockdowns in order of specificity
	removeall: () -> (),

	--- Run the autofixer for a lockdown mode
	autofix: (mode: mode.LockdownMode) -> ()
}
```

</details>

<TypeTable
	type={{
		"apply": {
			type: "(mode: [mode](#module.mode).[LockdownMode](#LockdownMode), reason: [string](#string)) -> [mode](#module.mode).[Lockdown](#Lockdown)",
			description: "Applies a lockdown mode with a reason",
			required: true
		},
		"remove": {
			type: "(id: [string](#string)) -> [mode](#module.mode).[Lockdown](#Lockdown)",
			description: "Removes a lockdown by ID",
			required: true
		},
		"removeall": {
			type: "() -> ()",
			description: "Removes all lockdowns in order of specificity",
			required: true
		},
		"autofix": {
			type: "(mode: [mode](#module.mode).[LockdownMode](#LockdownMode)) -> ()",
			description: "Run the autofixer for a lockdown mode",
			required: true
		},
		"lockdowns": {
			type: "\{[mode](#module.mode).[Lockdown](#Lockdown)\}",
			description: "The current list of lockdowns",
			required: true
		},
		"settings": {
			type: "[settingsmanager](#module.settingsmanager).[LockdownSettings](#LockdownSettings)",
			description: "Lockdown settings right now",
			required: true
		},
		"guild_data": {
			type: "[guilddata](#module.guilddata).[GuildData](#GuildData)",
			description: "The current guild data",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="LockdownSet"></div>

## LockdownSet

Creates a new LockdownSet

<details>
<summary>Function Signature</summary>

```luau
--- Creates a new LockdownSet
function LockdownSet(ctx: Primitives.TemplateContext) -> LockdownSet end
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

[LockdownSet](#LockdownSet)