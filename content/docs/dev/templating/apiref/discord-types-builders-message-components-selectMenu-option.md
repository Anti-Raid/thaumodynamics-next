---
title: "@discord-types/builders/message/components/selectMenu/option"
description: "API reference for @discord-types/builders/message/components/selectMenu/option"
---

<div id="@discord-types/builders/message/components/selectMenu/option"></div>

# @discord-types/builders/message/components/selectMenu/option

<div id="Types"></div>

## Types

<div id="Option"></div>

## Option

<details>
<summary>Raw Type</summary>

```luau
type Option = Option.Prototype, & {
	type: interactionTypes.ApplicationCommandOptionType?,

	name: string?,

	nameLocalizations: {
		[apiTypes.LanguageLocales]: string
	},

	description: string?,

	descriptionLocalizations: {
		[apiTypes.LanguageLocales]: string
	},

	required: boolean?,

	choices: {interactionChoice.JSON},

	options: {JSON},

	channelTypes: {channelTypes.ChannelType},

	minValue: number?,

	maxValue: number?,

	minLength: number?,

	maxLength: number?,

	autocomplete: boolean?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"type": {
			type: "[interactionTypes](#module.interactionTypes).[ApplicationCommandOptionType](#ApplicationCommandOptionType)?",
			description: "",
			required: false
		},
		"name": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"nameLocalizations": {
			type: "\{[apiTypes.LanguageLocales]: [string](#string)\}",
			description: "",
			required: true
		},
		"description": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"descriptionLocalizations": {
			type: "\{[apiTypes.LanguageLocales]: [string](#string)\}",
			description: "",
			required: true
		},
		"required": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"choices": {
			type: "\{[interactionChoice](#module.interactionChoice).[JSON](#JSON)\}",
			description: "",
			required: true
		},
		"options": {
			type: "\{[JSON](#JSON)\}",
			description: "",
			required: true
		},
		"channelTypes": {
			type: "\{[channelTypes](#module.channelTypes).[ChannelType](#ChannelType)\}",
			description: "",
			required: true
		},
		"minValue": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"maxValue": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"minLength": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"maxLength": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"autocomplete": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
	}}
/>
</details>

<div id="JSON"></div>

## JSON

<details>
<summary>Raw Type</summary>

```luau
type JSON = Option.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Option.Prototype.setType"></div>

## Option.Prototype.setType

\[\[
	Set the Type of option that will be built.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the Type of option that will be built.
]]
function Option.Prototype.setType(self: Option, type: interactionTypes.ApplicationCommandOptionType) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="type"></div>

### type

[interactionTypes](#module.interactionTypes).[ApplicationCommandOptionType](#ApplicationCommandOptionType)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)<div id="Option.Prototype.setName"></div>

## Option.Prototype.setName

\[\[
	Set the name of this option, option name needs to be kebab case.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the name of this option, option name needs to be kebab case.
]]
function Option.Prototype.setName(self: Option, name: string) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="name"></div>

### name

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)<div id="Option.Prototype.setNameLocalization"></div>

## Option.Prototype.setNameLocalization

\[\[
	add a name localization for this option.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	add a name localization for this option.
]]
function Option.Prototype.setNameLocalization(self: Option, localization: apiTypes.LanguageLocales, name: string) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="localization"></div>

### localization

[apiTypes](#module.apiTypes).[LanguageLocales](#LanguageLocales)



<div id="name"></div>

### name

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)<div id="Option.Prototype.setDescription"></div>

## Option.Prototype.setDescription

\[\[
	set the description of this option.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	set the description of this option.
]]
function Option.Prototype.setDescription(self: Option, description: string) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="description"></div>

### description

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)<div id="Option.Prototype.setDescriptionLocalization"></div>

## Option.Prototype.setDescriptionLocalization

\[\[
	add a description localization for this option.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	add a description localization for this option.
]]
function Option.Prototype.setDescriptionLocalization(self: Option, localization: apiTypes.LanguageLocales, description: string) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="localization"></div>

### localization

[apiTypes](#module.apiTypes).[LanguageLocales](#LanguageLocales)



<div id="description"></div>

### description

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)<div id="Option.Prototype.setRequired"></div>

## Option.Prototype.setRequired

\[\[
	set if the option is required, will not work on SubCommand or SubCommandGroup options.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	set if the option is required, will not work on SubCommand or SubCommandGroup options.
]]
function Option.Prototype.setRequired(self: Option, isRequired: boolean) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="isRequired"></div>

### isRequired

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)<div id="Option.Prototype.addChoice"></div>

## Option.Prototype.addChoice

\[\[
	add a choice to the option, will only work on String, Integer, or Number options.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	add a choice to the option, will only work on String, Integer, or Number options.
]]
function Option.Prototype.addChoice(self: Option, choice: interactionChoice.JSON) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="choice"></div>

### choice

[interactionChoice](#module.interactionChoice).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)<div id="Option.Prototype.addOption"></div>

## Option.Prototype.addOption

\[\[
	add an option to the option, will only work on SubCommand or SubCommandGroup options.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	add an option to the option, will only work on SubCommand or SubCommandGroup options.
]]
function Option.Prototype.addOption(self: Option, option: JSON) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="option"></div>

### option

[JSON](#JSON)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)<div id="Option.Prototype.addChannelType"></div>

## Option.Prototype.addChannelType

\[\[
	add supported channel types, will only work on Channel options.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	add supported channel types, will only work on Channel options.
]]
function Option.Prototype.addChannelType(self: Option, channelType: channelTypes.ChannelType) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="channelType"></div>

### channelType

[channelTypes](#module.channelTypes).[ChannelType](#ChannelType)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)<div id="Option.Prototype.setMinValue"></div>

## Option.Prototype.setMinValue

\[\[
	set the min value of this option, will only work on Integer or Number options.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	set the min value of this option, will only work on Integer or Number options.
]]
function Option.Prototype.setMinValue(self: Option, value: number) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="value"></div>

### value

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)<div id="Option.Prototype.setMaxValue"></div>

## Option.Prototype.setMaxValue

\[\[
	set the max value of this option, will only work on Integer or Number options.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	set the max value of this option, will only work on Integer or Number options.
]]
function Option.Prototype.setMaxValue(self: Option, value: number) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="value"></div>

### value

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)<div id="Option.Prototype.setMinLength"></div>

## Option.Prototype.setMinLength

\[\[
	set the min length of this option, will only work on String options.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	set the min length of this option, will only work on String options.
]]
function Option.Prototype.setMinLength(self: Option, value: number) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="value"></div>

### value

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)<div id="Option.Prototype.setMaxLength"></div>

## Option.Prototype.setMaxLength

\[\[
	set the max length of this option, will only work on String options.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	set the max length of this option, will only work on String options.
]]
function Option.Prototype.setMaxLength(self: Option, value: number) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="value"></div>

### value

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)<div id="Option.Prototype.setAutocompleteEnabled"></div>

## Option.Prototype.setAutocompleteEnabled

\[\[
	If autocomplete interactions are enabled for this option, will only work on String, Integer, or Number options.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	If autocomplete interactions are enabled for this option, will only work on String, Integer, or Number options.
]]
function Option.Prototype.setAutocompleteEnabled(self: Option, autocompleteEnabled: boolean) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="autocompleteEnabled"></div>

### autocompleteEnabled

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)<div id="Option.Prototype.build"></div>

## Option.Prototype.build

\[\[
	Responsible for buillding the default reaction object that the Discord API can understand.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for buillding the default reaction object that the Discord API can understand.
]]
function Option.Prototype.build(self: Option) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Option.Interface.new"></div>

## Option.Interface.new

\[\[
	Constructor for the Discord Default Reaction Builder.

	\`\`\`lua
	local defaultReaction = Option.new("000000000000000000", "secret-emoji"):build()
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Constructor for the Discord Default Reaction Builder.

	\`\`\`lua
	local defaultReaction = Option.new("000000000000000000", "secret-emoji"):build()
	\`\`\`
]]
function Option.Interface.new(resource: {
		type: interactionTypes.ApplicationCommandOptionType?,

		name: string?,

		nameLocalizations: {
			[apiTypes.LanguageLocales]: string
		}?,

		description: string?,

		descriptionLocalizations: {
			[apiTypes.LanguageLocales]: string
		}?,

		required: boolean?,

		choices: {apiTypes.ApplicationCommandOptionChoiceObject}?,

		options: {JSON}?,

		channelTypes: {apiTypes.ChannelType}?,

		minValue: number?,

		maxValue: number?,

		minLength: number?,

		maxLength: number?,

		autocomplete: boolean?
	}?) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{type: [interactionTypes](#module.interactionTypes).[ApplicationCommandOptionType](#ApplicationCommandOptionType)?, name: [string](#string)?, nameLocalizations: \{[apiTypes.LanguageLocales]: [string](#string)\}?, description: [string](#string)?, descriptionLocalizations: \{[apiTypes.LanguageLocales]: [string](#string)\}?, required: [boolean](#boolean)?, choices: \{[apiTypes](#module.apiTypes).[ApplicationCommandOptionChoiceObject](#ApplicationCommandOptionChoiceObject)\}?, options: \{[JSON](#JSON)\}?, channelTypes: \{[apiTypes](#module.apiTypes).[ChannelType](#ChannelType)\}?, minValue: [number](#number)?, maxValue: [number](#number)?, minLength: [number](#number)?, maxLength: [number](#number)?, autocomplete: [boolean](#boolean)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)