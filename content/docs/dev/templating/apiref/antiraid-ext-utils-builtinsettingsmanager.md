---
title: "@antiraid-ext/utils/builtinsettingsmanager"
description: "API reference for @antiraid-ext/utils/builtinsettingsmanager"
---

<div id="@antiraid-ext/utils/builtinsettingsmanager"></div>

# @antiraid-ext/utils/builtinsettingsmanager

<div id="Types"></div>

## Types

<div id="BaseAction"></div>

## BaseAction

<details>
<summary>Raw Type</summary>

```luau
type BaseAction = {
	name: string,

	value: string,

	description: string
}
```

</details>

<TypeTable
	type={{
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"value": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"description": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="BuiltinSettingsManager"></div>

## BuiltinSettingsManager

\[\[
    Manages the builtin settings for the bot in the server
\]\]

<details>
<summary>Raw Type</summary>

```luau
--[[
    Manages the builtin settings for the bot in the server
]]
type BuiltinSettingsManager = {
	--- Gets the mod logs channel for a specific action.
	---
	--- @param action string The action to get the mod logs channel for.
	--- @return discord.Snowflake? The channel ID of the mod logs channel for the action, or nil if not set.
	getModLogsChannel: (action: string) -> discord.Snowflake?,

	--- Gets all mod logs channels.
	---
	--- @return {[string]: discord.Snowflake} A table mapping action names to channel IDs.
	getAllModLogsChannels: () -> {
		[string]: discord.Snowflake
	},

	--- Sets the mod logs channel for a specific action.
	---
	--- @param action string? The action to set the mod logs channel for. If nil, sets the default channel.
	--- @param channelId discord.Snowflake The channel ID to set as the mod logs channel.
	--- @return nil
	setModLogsChannel: (action: string?, channelId: discord.Snowflake) -> nil,

	--- Deletes the mod logs channel for a specific action.
	---
	--- @param action string? The action to delete the mod logs channel for. If nil, deletes the default channel.
	--- @return nil 
	deleteModLogsChannel: (action: string?) -> nil,

	-- Base mod sting endpoints
	--- Gets the base moderation sting counts for a specific action.
	---
	--- @param action string The action to get the base moderation sting counts for.
	--- @return number? The number of stings for the action, or nil if not set.
	getBaseModerationStingCounts: (action: string) -> number?,

	--- Gets all base moderation sting counts.
	---
	--- @return {[string]: number} A table mapping action names to the number of stings.
	getAllBaseModerationStingCounts: () -> {
		[string]: number
	},

	--- Sets the base moderation sting counts for a specific action.
	---
	--- @param action string? The action to set the base moderation sting counts for. If nil, sets the default counts.
	--- @param stings number The number of stings to set for the action.
	--- @return nil
	setBaseModerationStingCounts: (action: string?, stings: number) -> nil,

	--- Deletes the base moderation sting counts for a specific action.
	---
	--- @param action string? The action to delete the base moderation sting counts for. If nil, deletes the default counts.
	--- @return nil
	deleteBaseModerationStingCounts: (action: string?) -> nil,

	-- Actions
	--- Gets all mod logs actions.
	--- @return {BaseAction} A table of mod logs actions with their names, values, and descriptions
	getAllModLogsActions: () -> {BaseAction},

	--- Gets all mod actions.
	--- @return {BaseAction} A table of mod actions with their names, values,
	getAllModActions: () -> {BaseAction}
}
```

</details>

<TypeTable
	type={{
		"getModLogsChannel": {
			type: "(action: [string](#string)) -> [discord](#module.discord).[Snowflake](#Snowflake)?",
			description: "Gets the mod logs channel for a specific action.",
			required: true
		},
		"getAllModLogsChannels": {
			type: "() -> \{[string]: [discord](#module.discord).[Snowflake](#Snowflake)\}",
			description: "Gets all mod logs channels.",
			required: true
		},
		"setModLogsChannel": {
			type: "(action: [string](#string)?, channelId: [discord](#module.discord).[Snowflake](#Snowflake)) -> [nil](#nil)",
			description: "Sets the mod logs channel for a specific action.",
			required: true
		},
		"deleteModLogsChannel": {
			type: "(action: [string](#string)?) -> [nil](#nil)",
			description: "Deletes the mod logs channel for a specific action.",
			required: true
		},
		"getBaseModerationStingCounts": {
			type: "(action: [string](#string)) -> [number](#number)?",
			description: "Gets the base moderation sting counts for a specific action.",
			required: true
		},
		"getAllBaseModerationStingCounts": {
			type: "() -> \{[string]: [number](#number)\}",
			description: "Gets all base moderation sting counts.",
			required: true
		},
		"setBaseModerationStingCounts": {
			type: "(action: [string](#string)?, stings: [number](#number)) -> [nil](#nil)",
			description: "Sets the base moderation sting counts for a specific action.",
			required: true
		},
		"deleteBaseModerationStingCounts": {
			type: "(action: [string](#string)?) -> [nil](#nil)",
			description: "Deletes the base moderation sting counts for a specific action.",
			required: true
		},
		"getAllModLogsActions": {
			type: "() -> \{[BaseAction](#BaseAction)\}",
			description: "Gets all mod logs actions.",
			required: true
		},
		"getAllModActions": {
			type: "() -> \{[BaseAction](#BaseAction)\}",
			description: "Gets all mod actions.",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="BuiltinSettingsManager"></div>

## BuiltinSettingsManager

<details>
<summary>Function Signature</summary>

```luau
function BuiltinSettingsManager(ctx: Primitives.TemplateContext) -> BuiltinSettingsManager end
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

[BuiltinSettingsManager](#BuiltinSettingsManager)