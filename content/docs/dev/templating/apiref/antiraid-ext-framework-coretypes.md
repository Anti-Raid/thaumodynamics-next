---
title: "@antiraid-ext/framework/coretypes"
description: "API reference for @antiraid-ext/framework/coretypes"
---

<div id="@antiraid-ext/framework/coretypes"></div>

# @antiraid-ext/framework/coretypes

<div id="Types"></div>

## Types

<div id="BaseFrameworkData"></div>

## BaseFrameworkData

<details>
<summary>Raw Type</summary>

```luau
type BaseFrameworkData = {
	templateName: string,

	stingManager: stingmanager.StingManager,

	punishmentmanager: punishmentmanager.PunishmentManager,

	builtinSettingsManager: builtinSettingsManager.BuiltinSettingsManager,

	userinfomanager: userinfomanager.UserInfoManager,

	settings: {settings.Setting}
}
```

</details>

<TypeTable
	type={{
		"templateName": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"stingManager": {
			type: "[stingmanager](#module.stingmanager).[StingManager](#StingManager)",
			description: "",
			required: true
		},
		"punishmentmanager": {
			type: "[punishmentmanager](#module.punishmentmanager).[PunishmentManager](#PunishmentManager)",
			description: "",
			required: true
		},
		"builtinSettingsManager": {
			type: "[builtinSettingsManager](#module.builtinSettingsManager).[BuiltinSettingsManager](#BuiltinSettingsManager)",
			description: "",
			required: true
		},
		"userinfomanager": {
			type: "[userinfomanager](#module.userinfomanager).[UserInfoManager](#UserInfoManager)",
			description: "",
			required: true
		},
		"settings": {
			type: "\{[settings](#module.settings).[Setting](#Setting)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="Framework"></div>

## Framework

Framework provides a simple abstraction for building custom scripts with

command handling etc. done for you

<details>
<summary>Raw Type</summary>

```luau
--- Framework provides a simple abstraction for building custom scripts with
--- command handling etc. done for you
type Framework = {
	--- The ID of the framework.
	id: string,

	--- The base framework that is being used.
	base: BaseFramework,

	--- Attaches a button callback to the framework.
	attachButtonCallback: (buttonId: string, callback: (bcd: ButtonCallbackData) -> nil) -> nil,

	--- Drops a button callback from the framework.
	dropButtonCallback: (buttonId: string) -> nil,

	--- Gets a button callback from the framework.
	getButtonCallback: (buttonId: string) -> ((bcd: ButtonCallbackData) -> nil)?,

	--- The data that is being used by the framework.
	--- Base framework data. Will only be set on first dispatch
	data: BaseFrameworkData?
}
```

</details>

<TypeTable
	type={{
		"attachButtonCallback": {
			type: "(buttonId: [string](#string), callback: (bcd: [ButtonCallbackData](#ButtonCallbackData)) -> [nil](#nil)) -> [nil](#nil)",
			description: "Attaches a button callback to the framework.",
			required: true
		},
		"dropButtonCallback": {
			type: "(buttonId: [string](#string)) -> [nil](#nil)",
			description: "Drops a button callback from the framework.",
			required: true
		},
		"getButtonCallback": {
			type: "(buttonId: [string](#string)) -> (bcd: [ButtonCallbackData](#ButtonCallbackData)) -> [nil](#nil)?",
			description: "Gets a button callback from the framework.",
			required: true
		},
		"id": {
			type: "[string](#string)",
			description: "The ID of the framework.",
			required: true
		},
		"base": {
			type: "[BaseFramework](#BaseFramework)",
			description: "The base framework that is being used.",
			required: true
		},
		"data": {
			type: "[BaseFrameworkData](#BaseFrameworkData)?",
			description: "The data that is being used by the framework.Base framework data. Will only be set on first dispatch",
			required: false
		},
	}}
/>
<div id="SettingsData"></div>

## SettingsData

<details>
<summary>Raw Type</summary>

```luau
type SettingsData = {
	userinfomanager: userinfomanager.UserInfoManager,

	ctx: primitives.TemplateContext
}
```

</details>

<TypeTable
	type={{
		"userinfomanager": {
			type: "[userinfomanager](#module.userinfomanager).[UserInfoManager](#UserInfoManager)",
			description: "",
			required: true
		},
		"ctx": {
			type: "[primitives](#module.primitives).[TemplateContext](#TemplateContext)",
			description: "",
			required: true
		},
	}}
/>
<div id="FrameworkSetting"></div>

## FrameworkSetting

<details>
<summary>Raw Type</summary>

```luau
type FrameworkSetting = {
	schema: settings.Setting?,

	dynSchema: (ctx: primitives.TemplateContext) -> settings.Setting,

	execute: (event: events.SettingExecuteEvent, data: SettingsData) -> any
}
```

</details>

<TypeTable
	type={{
		"dynSchema": {
			type: "(ctx: [primitives](#module.primitives).[TemplateContext](#TemplateContext)) -> [settings](#module.settings).[Setting](#Setting)",
			description: "",
			required: true
		},
		"execute": {
			type: "(event: [events](#module.events).[SettingExecuteEvent](#SettingExecuteEvent), data: [SettingsData](#SettingsData)) -> [any](#any)",
			description: "",
			required: true
		},
		"schema": {
			type: "[settings](#module.settings).[Setting](#Setting)?",
			description: "",
			required: false
		},
	}}
/>
<div id="BaseFramework"></div>

## BaseFramework

BaseFramework provides a simple abstraction around command registration.

<details>
<summary>Raw Type</summary>

```luau
--- BaseFramework provides a simple abstraction around command registration.
type BaseFramework = {
	--- What command suffix is being used for commands.
	---
	--- This is useful for prod/dev environments
	suffix: string?,

	--- Registers a command in the framework.
	registerCommand: (command: Command) -> (),

	--- Registers a setting into the framework.
	registerSetting: (name: string, setting: FrameworkSetting) -> (),

	--- Returns the compiled commands of the framework.
	---
	--- This moves subcommands and subcommand groups to the base command (creating the base command if needed)
	commands: () -> {discordRestTypes.CreateGuildApplicationCommandRequest},

	--- Returns the closest command given the name as a split string (by space)
	getcommand: (name: {string}) -> Command?,

	--- Returns a list of all commands in the framework.
	getcommands: () -> {
		[string]: Command
	},

	--- Returns a list of all settings in the framework.
	getsettings: () -> {
		[string]: FrameworkSetting
	}
}
```

</details>

<TypeTable
	type={{
		"registerCommand": {
			type: "(command: [Command](#Command)) -> ()",
			description: "Registers a command in the framework.",
			required: true
		},
		"registerSetting": {
			type: "(name: [string](#string), setting: [FrameworkSetting](#FrameworkSetting)) -> ()",
			description: "Registers a setting into the framework.",
			required: true
		},
		"commands": {
			type: "() -> \{[discordRestTypes](#module.discordRestTypes).[CreateGuildApplicationCommandRequest](#CreateGuildApplicationCommandRequest)\}",
			description: "Returns the compiled commands of the framework.This moves subcommands and subcommand groups to the base command (creating the base command if needed)",
			required: true
		},
		"getcommand": {
			type: "(name: \{[string](#string)\}) -> [Command](#Command)?",
			description: "Returns the closest command given the name as a split string (by space)",
			required: true
		},
		"getcommands": {
			type: "() -> \{[string]: [Command](#Command)\}",
			description: "Returns a list of all commands in the framework.",
			required: true
		},
		"getsettings": {
			type: "() -> \{[string]: [FrameworkSetting](#FrameworkSetting)\}",
			description: "Returns a list of all settings in the framework.",
			required: true
		},
		"suffix": {
			type: "[string](#string)?",
			description: "What command suffix is being used for commands.This is useful for prod/dev environments",
			required: false
		},
	}}
/>
<div id="CommandBuilder"></div>

## CommandBuilder

A builder for creating commands in the framework.

<details>
<summary>Raw Type</summary>

```luau
--- A builder for creating commands in the framework.
type CommandBuilder = {
	--- Set the schema of the command
	setSchema: (schema: discordRestTypes.CreateGuildApplicationCommandRequest) -> CommandBuilder,

	--- Same as setSchema but provides the base schema for you
	addSchema: (name: string, fn: (commandBuilder.Interaction) -> commandBuilder.JSON) -> CommandBuilder,

	--- Set the run function of the command
	setRun: (run: (data: RunData) -> ()) -> CommandBuilder,

	--- Set the autocompleter function of the command
	setAutocompleter: (autocompleter: ((data: AutocompleteRunData) -> {discord.ApplicationCommandOptionChoiceObject})?) -> CommandBuilder,

	--- Set the key expirations of the command
	setKeyExpirations: (keyexpiries: {
		[string]: (data: KeyExpiryData) -> nil
	}?) -> CommandBuilder,

	--- Build the command
	build: () -> Command
}
```

</details>

<TypeTable
	type={{
		"setSchema": {
			type: "(schema: [discordRestTypes](#module.discordRestTypes).[CreateGuildApplicationCommandRequest](#CreateGuildApplicationCommandRequest)) -> [CommandBuilder](#CommandBuilder)",
			description: "Set the schema of the command",
			required: true
		},
		"addSchema": {
			type: "(name: [string](#string), fn: ([commandBuilder](#module.commandBuilder).[Interaction](#Interaction)) -> [commandBuilder](#module.commandBuilder).[JSON](#JSON)) -> [CommandBuilder](#CommandBuilder)",
			description: "Same as setSchema but provides the base schema for you",
			required: true
		},
		"setRun": {
			type: "(run: (data: [RunData](#RunData)) -> ()) -> [CommandBuilder](#CommandBuilder)",
			description: "Set the run function of the command",
			required: true
		},
		"setAutocompleter": {
			type: "(autocompleter: (data: [AutocompleteRunData](#AutocompleteRunData)) -> \{[discord](#module.discord).[ApplicationCommandOptionChoiceObject](#ApplicationCommandOptionChoiceObject)\}?) -> [CommandBuilder](#CommandBuilder)",
			description: "Set the autocompleter function of the command",
			required: true
		},
		"setKeyExpirations": {
			type: "(keyexpiries: \{[string]: (data: [KeyExpiryData](#KeyExpiryData)) -> [nil](#nil)\}?) -> [CommandBuilder](#CommandBuilder)",
			description: "Set the key expirations of the command",
			required: true
		},
		"build": {
			type: "() -> [Command](#Command)",
			description: "Build the command",
			required: true
		},
	}}
/>
<div id="Command"></div>

## Command

<details>
<summary>Raw Type</summary>

```luau
type Command = {
	--- Discord command definition.
	command: discordRestTypes.CreateGuildApplicationCommandRequest,

	--- A register command to return the command definition at runtime.
	register: (() -> discordRestTypes.CreateGuildApplicationCommandRequest)?,

	--- The function that runs when the command is executed.
	run: (data: RunData) -> (),

	--- The function that runs when the command is autocompleted.
	autocompleter: ((data: AutocompleteRunData) -> {discord.ApplicationCommandOptionChoiceObject})?,

	--- The function that runs when a key expires.
	keyexpiries: {
		[string]: (data: KeyExpiryData) -> nil
	}?
}
```

</details>

<TypeTable
	type={{
		"run": {
			type: "(data: [RunData](#RunData)) -> ()",
			description: "The function that runs when the command is executed.",
			required: true
		},
		"command": {
			type: "[discordRestTypes](#module.discordRestTypes).[CreateGuildApplicationCommandRequest](#CreateGuildApplicationCommandRequest)",
			description: "Discord command definition.",
			required: true
		},
		"register": {
			type: "() -> [discordRestTypes](#module.discordRestTypes).[CreateGuildApplicationCommandRequest](#CreateGuildApplicationCommandRequest)?",
			description: "A register command to return the command definition at runtime.",
			required: false
		},
		"autocompleter": {
			type: "(data: [AutocompleteRunData](#AutocompleteRunData)) -> \{[discord](#module.discord).[ApplicationCommandOptionChoiceObject](#ApplicationCommandOptionChoiceObject)\}?",
			description: "The function that runs when the command is autocompleted.",
			required: false
		},
		"keyexpiries": {
			type: "\{[string]: (data: [KeyExpiryData](#KeyExpiryData)) -> [nil](#nil)\}?",
			description: "The function that runs when a key expires.",
			required: false
		},
	}}
/>
<div id="KeyExpiryData"></div>

## KeyExpiryData

<details>
<summary>Raw Type</summary>

```luau
type KeyExpiryData = {
	ctx: primitives.TemplateContext,

	event: primitives.Event,

	data: events.KeyExpiryEvent,

	stingManager: stingmanager.StingManager,

	punishmentmanager: punishmentmanager.PunishmentManager,

	builtinSettingsManager: builtinSettingsManager.BuiltinSettingsManager,

	userinfomanager: userinfomanager.UserInfoManager
}
```

</details>

<TypeTable
	type={{
		"ctx": {
			type: "[primitives](#module.primitives).[TemplateContext](#TemplateContext)",
			description: "",
			required: true
		},
		"event": {
			type: "[primitives](#module.primitives).[Event](#Event)",
			description: "",
			required: true
		},
		"data": {
			type: "[events](#module.events).[KeyExpiryEvent](#KeyExpiryEvent)",
			description: "",
			required: true
		},
		"stingManager": {
			type: "[stingmanager](#module.stingmanager).[StingManager](#StingManager)",
			description: "",
			required: true
		},
		"punishmentmanager": {
			type: "[punishmentmanager](#module.punishmentmanager).[PunishmentManager](#PunishmentManager)",
			description: "",
			required: true
		},
		"builtinSettingsManager": {
			type: "[builtinSettingsManager](#module.builtinSettingsManager).[BuiltinSettingsManager](#BuiltinSettingsManager)",
			description: "",
			required: true
		},
		"userinfomanager": {
			type: "[userinfomanager](#module.userinfomanager).[UserInfoManager](#UserInfoManager)",
			description: "",
			required: true
		},
	}}
/>
<div id="ButtonCallbackData"></div>

## ButtonCallbackData

<details>
<summary>Raw Type</summary>

```luau
type ButtonCallbackData = {
	ctx: primitives.TemplateContext,

	interaction: discord.InteractionObject,

	removeCallback: () -> nil,

	event: primitives.Event
}
```

</details>

<TypeTable
	type={{
		"removeCallback": {
			type: "() -> [nil](#nil)",
			description: "",
			required: true
		},
		"ctx": {
			type: "[primitives](#module.primitives).[TemplateContext](#TemplateContext)",
			description: "",
			required: true
		},
		"interaction": {
			type: "[discord](#module.discord).[InteractionObject](#InteractionObject)",
			description: "",
			required: true
		},
		"event": {
			type: "[primitives](#module.primitives).[Event](#Event)",
			description: "",
			required: true
		},
	}}
/>
<div id="RunData"></div>

## RunData

<details>
<summary>Raw Type</summary>

```luau
type RunData = {
	ctx: primitives.TemplateContext,

	event: primitives.Event,

	interaction: discord.InteractionObject,

	stingManager: stingmanager.StingManager,

	punishmentmanager: punishmentmanager.PunishmentManager,

	builtinSettingsManager: builtinSettingsManager.BuiltinSettingsManager,

	userinfomanager: userinfomanager.UserInfoManager,

	command: appcommands.ParsedApplicationCommand,

	attachButtonCallback: ((buttonId: string, callback: (bcd: ButtonCallbackData) -> nil) -> nil),

	dropButtonCallback: ((buttonId: string) -> nil),

	sethasEdited: (to: boolean) -> nil
}
```

</details>

<TypeTable
	type={{
		"sethasEdited": {
			type: "(to: [boolean](#boolean)) -> [nil](#nil)",
			description: "",
			required: true
		},
		"ctx": {
			type: "[primitives](#module.primitives).[TemplateContext](#TemplateContext)",
			description: "",
			required: true
		},
		"event": {
			type: "[primitives](#module.primitives).[Event](#Event)",
			description: "",
			required: true
		},
		"interaction": {
			type: "[discord](#module.discord).[InteractionObject](#InteractionObject)",
			description: "",
			required: true
		},
		"stingManager": {
			type: "[stingmanager](#module.stingmanager).[StingManager](#StingManager)",
			description: "",
			required: true
		},
		"punishmentmanager": {
			type: "[punishmentmanager](#module.punishmentmanager).[PunishmentManager](#PunishmentManager)",
			description: "",
			required: true
		},
		"builtinSettingsManager": {
			type: "[builtinSettingsManager](#module.builtinSettingsManager).[BuiltinSettingsManager](#BuiltinSettingsManager)",
			description: "",
			required: true
		},
		"userinfomanager": {
			type: "[userinfomanager](#module.userinfomanager).[UserInfoManager](#UserInfoManager)",
			description: "",
			required: true
		},
		"command": {
			type: "[appcommands](#module.appcommands).[ParsedApplicationCommand](#ParsedApplicationCommand)",
			description: "",
			required: true
		},
		"attachButtonCallback": {
			type: "(buttonId: [string](#string), callback: (bcd: [ButtonCallbackData](#ButtonCallbackData)) -> [nil](#nil)) -> [nil](#nil)",
			description: "",
			required: true
		},
		"dropButtonCallback": {
			type: "(buttonId: [string](#string)) -> [nil](#nil)",
			description: "",
			required: true
		},
	}}
/>
<div id="AutocompleteRunData"></div>

## AutocompleteRunData

<details>
<summary>Raw Type</summary>

```luau
type AutocompleteRunData = {
	ctx: primitives.TemplateContext,

	event: primitives.Event,

	interaction: discord.InteractionObject,

	stingManager: stingmanager.StingManager,

	builtinSettingsManager: builtinSettingsManager.BuiltinSettingsManager,

	command: appcommands.ParsedApplicationCommand
}
```

</details>

<TypeTable
	type={{
		"ctx": {
			type: "[primitives](#module.primitives).[TemplateContext](#TemplateContext)",
			description: "",
			required: true
		},
		"event": {
			type: "[primitives](#module.primitives).[Event](#Event)",
			description: "",
			required: true
		},
		"interaction": {
			type: "[discord](#module.discord).[InteractionObject](#InteractionObject)",
			description: "",
			required: true
		},
		"stingManager": {
			type: "[stingmanager](#module.stingmanager).[StingManager](#StingManager)",
			description: "",
			required: true
		},
		"builtinSettingsManager": {
			type: "[builtinSettingsManager](#module.builtinSettingsManager).[BuiltinSettingsManager](#BuiltinSettingsManager)",
			description: "",
			required: true
		},
		"command": {
			type: "[appcommands](#module.appcommands).[ParsedApplicationCommand](#ParsedApplicationCommand)",
			description: "",
			required: true
		},
	}}
/>
