---
title: "@antiraid-ext/appcommands"
description: "API reference for @antiraid-ext/appcommands"
---

<div id="@antiraid-ext/appcommands"></div>

# @antiraid-ext/appcommands

<div id="Types"></div>

## Types

<div id="ParsedApplicationCommand"></div>

## ParsedApplicationCommand

Parsed application command type created using \`parseApplicationCommand\`

<details>
<summary>Raw Type</summary>

```luau
--- Parsed application command type created using \`parseApplicationCommand\`
type ParsedApplicationCommand = {
	--- The base name of the slash command
	baseName: string,

	--- The command name list of the slash command
	nameList: {string},

	--- The inner data of the interaction
	data: discord.InteractionDataObject,

	--- The inner options of the slash command
	options: {ResolvedOption}
}
```

</details>

<TypeTable
	type={{
		"baseName": {
			type: "[string](#string)",
			description: "The base name of the slash command",
			required: true
		},
		"nameList": {
			type: "\{[string](#string)\}",
			description: "The command name list of the slash command",
			required: true
		},
		"data": {
			type: "[discord](#module.discord).[InteractionDataObject](#InteractionDataObject)",
			description: "The inner data of the interaction",
			required: true
		},
		"options": {
			type: "\{[ResolvedOption](#ResolvedOption)\}",
			description: "The inner options of the slash command",
			required: true
		},
	}}
/>
<div id="ResolvedOption"></div>

## ResolvedOption

An option that is resolved from the slash command interaction options.



Note that Subcommand and SubcommandGroup will probably not be observed unless resolveOption is called directly outside

of parseApplicationCommand due to the extra parsing logic in \`parseApplicationCommand\` that unwraps subcommands and subcommand groups.

<details>
<summary>Raw Type</summary>

```luau
--- An option that is resolved from the slash command interaction options.
---
--- Note that Subcommand and SubcommandGroup will probably not be observed unless resolveOption is called directly outside
--- of parseApplicationCommand due to the extra parsing logic in \`parseApplicationCommand\` that unwraps subcommands and subcommand groups.
type ResolvedOption = {
	name: string,

	value: ResolvedValue,

	focused: boolean,

	isMentionable: boolean
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
			type: "[ResolvedValue](#ResolvedValue)",
			description: "",
			required: true
		},
		"focused": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"isMentionable": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
	}}
/>
<div id="ResolvedValue"></div>

## ResolvedValue

<details>
<summary>Raw Type</summary>

```luau
type ResolvedValue = {
	kind: "Subcommand",

	options: {ResolvedOption}
} | {
	kind: "SubcommandGroup",

	options: {ResolvedOption}
} | {
	kind: "String",

	value: string
} | {
	kind: "Integer",

	value: number
} | {
	kind: "Boolean",

	value: boolean
} | {
	kind: "User",

	user: discord.UserObject,

	member: discord.GuildMemberObject?
} | {
	kind: "Channel",

	channel: discord.ChannelObject
} | {
	kind: "Role",

	role: discord.GuildRoleObject
} | {
	kind: "Number",

	value: number
} | {
	kind: "Attachment",

	attachment: discord.AttachmentObject
} | {
	kind: "Unresolved",

	type: "User" | "Channel" | "Role" | "Mentionable" | "Attachment",

	id: string
}
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

<TypeTable
	type={{
		"kind": {
			type: "'Subcommand'",
			description: "",
			required: true
		},
		"options": {
			type: "\{[ResolvedOption](#ResolvedOption)\}",
			description: "",
			required: true
		},
	}}
/>
</details>

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"kind": {
			type: "'SubcommandGroup'",
			description: "",
			required: true
		},
		"options": {
			type: "\{[ResolvedOption](#ResolvedOption)\}",
			description: "",
			required: true
		},
	}}
/>
</details>

<details>
<summary>Variant 3</summary>

<TypeTable
	type={{
		"kind": {
			type: "'String'",
			description: "",
			required: true
		},
		"value": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
</details>

<details>
<summary>Variant 4</summary>

<TypeTable
	type={{
		"kind": {
			type: "'Integer'",
			description: "",
			required: true
		},
		"value": {
			type: "[number](#number)",
			description: "",
			required: true
		},
	}}
/>
</details>

<details>
<summary>Variant 5</summary>

<TypeTable
	type={{
		"kind": {
			type: "'Boolean'",
			description: "",
			required: true
		},
		"value": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
	}}
/>
</details>

<details>
<summary>Variant 6</summary>

<TypeTable
	type={{
		"kind": {
			type: "'User'",
			description: "",
			required: true
		},
		"user": {
			type: "[discord](#module.discord).[UserObject](#UserObject)",
			description: "",
			required: true
		},
		"member": {
			type: "[discord](#module.discord).[GuildMemberObject](#GuildMemberObject)?",
			description: "",
			required: false
		},
	}}
/>
</details>

<details>
<summary>Variant 7</summary>

<TypeTable
	type={{
		"kind": {
			type: "'Channel'",
			description: "",
			required: true
		},
		"channel": {
			type: "[discord](#module.discord).[ChannelObject](#ChannelObject)",
			description: "",
			required: true
		},
	}}
/>
</details>

<details>
<summary>Variant 8</summary>

<TypeTable
	type={{
		"kind": {
			type: "'Role'",
			description: "",
			required: true
		},
		"role": {
			type: "[discord](#module.discord).[GuildRoleObject](#GuildRoleObject)",
			description: "",
			required: true
		},
	}}
/>
</details>

<details>
<summary>Variant 9</summary>

<TypeTable
	type={{
		"kind": {
			type: "'Number'",
			description: "",
			required: true
		},
		"value": {
			type: "[number](#number)",
			description: "",
			required: true
		},
	}}
/>
</details>

<details>
<summary>Variant 10</summary>

<TypeTable
	type={{
		"kind": {
			type: "'Attachment'",
			description: "",
			required: true
		},
		"attachment": {
			type: "[discord](#module.discord).[AttachmentObject](#AttachmentObject)",
			description: "",
			required: true
		},
	}}
/>
</details>

<details>
<summary>Variant 11</summary>

<TypeTable
	type={{
		"kind": {
			type: "'Unresolved'",
			description: "",
			required: true
		},
		"type": {
			type: "('User' | 'Channel' | 'Role' | 'Mentionable' | 'Attachment')",
			description: "",
			required: true
		},
		"id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
</details>

<div id="ParsedCommandDataArgument"></div>

## ParsedCommandDataArgument

ParsedCommandDataArgument is the type of a parsed command data argument

<details>
<summary>Raw Type</summary>

```luau
--- ParsedCommandDataArgument is the type of a parsed command data argument
type ParsedCommandDataArgument = {
	name: string,

	description: string,

	type: "String" | "Integer" | "Boolean" | "User" | "Channel" | "Role" | "Number" | "Attachment",

	required: boolean,

	choices: {discord.ApplicationCommandOptionChoiceObject}?,

	min_length: number?,

	max_length: number?
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
		"description": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"type": {
			type: "('String' | 'Integer' | 'Boolean' | 'User' | 'Channel' | 'Role' | 'Number' | 'Attachment')",
			description: "",
			required: true
		},
		"required": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"choices": {
			type: "\{[discord](#module.discord).[ApplicationCommandOptionChoiceObject](#ApplicationCommandOptionChoiceObject)\}?",
			description: "",
			required: false
		},
		"min_length": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"max_length": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
	}}
/>
<div id="ParsedCommandData"></div>

## ParsedCommandData

ParsedCommandData is the parsed \`\`discordRestTypes.CreateGuildApplicationCommandRequest\`\`

<details>
<summary>Raw Type</summary>

```luau
--- ParsedCommandData is the parsed \`\`discordRestTypes.CreateGuildApplicationCommandRequest\`\`
type ParsedCommandData = {
	name: string,

	description: string?,

	options: {ParsedCommandDataArgument},

	subcommands: {ParsedCommandData}
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
		"description": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"options": {
			type: "\{[ParsedCommandDataArgument](#ParsedCommandDataArgument)\}",
			description: "",
			required: true
		},
		"subcommands": {
			type: "\{[ParsedCommandData](#ParsedCommandData)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="AppCommandDataLike"></div>

## AppCommandDataLike

<details>
<summary>Raw Type</summary>

```luau
type AppCommandDataLike = {
	name: string,

	description: string?,

	options: {discord.ApplicationCommandOptionObject}?
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
		"description": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"options": {
			type: "\{[discord](#module.discord).[ApplicationCommandOptionObject](#ApplicationCommandOptionObject)\}?",
			description: "",
			required: false
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="resolveOptions"></div>

## resolveOptions

Resolves discords option into a more type-safe structure for handling slash commands

<details>
<summary>Function Signature</summary>

```luau
--- Resolves discords option into a more type-safe structure for handling slash commands
function resolveOptions(opts: {discord.ApplicationCommandInteractionDataOptionObject}, resolved: discord.ResolvedDataStructure) -> {ResolvedOption} end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="opts"></div>

### opts

\{[discord](#module.discord).[ApplicationCommandInteractionDataOptionObject](#ApplicationCommandInteractionDataOptionObject)\}

<div id="resolved"></div>

### resolved

[discord](#module.discord).[ResolvedDataStructure](#ResolvedDataStructure)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

\{[ResolvedOption](#ResolvedOption)\}<div id="parseApplicationCommand"></div>

## parseApplicationCommand

Parses a/an application/slash command from an AntiRaid interaction create event into a parsed slash command object.

<details>
<summary>Function Signature</summary>

```luau
--- Parses a/an application/slash command from an AntiRaid interaction create event into a parsed slash command object.
function parseApplicationCommand(interaction: discord.InteractionObject) -> ParsedApplicationCommand? end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="interaction"></div>

### interaction

[discord](#module.discord).[InteractionObject](#InteractionObject)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[ParsedApplicationCommand](#ParsedApplicationCommand)?<div id="parseApplicationCommandData"></div>

## parseApplicationCommandData

Parses a command data object from a discordRestTypes.CreateGuildApplicationCommandRequest into a parsed command data object.

<details>
<summary>Function Signature</summary>

```luau
--- Parses a command data object from a discordRestTypes.CreateGuildApplicationCommandRequest into a parsed command data object.
function parseApplicationCommandData(data: AppCommandDataLike) -> ParsedCommandData end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="data"></div>

### data

[AppCommandDataLike](#AppCommandDataLike)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[ParsedCommandData](#ParsedCommandData)