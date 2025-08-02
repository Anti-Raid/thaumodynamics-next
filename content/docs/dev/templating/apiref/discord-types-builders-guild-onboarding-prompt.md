---
title: "@discord-types/builders/guild/onboarding/prompt"
description: "API reference for @discord-types/builders/guild/onboarding/prompt"
---

<div id="@discord-types/builders/guild/onboarding/prompt"></div>

# @discord-types/builders/guild/onboarding/prompt

<div id="Types"></div>

## Types

<div id="Prompt"></div>

## Prompt

<details>
<summary>Raw Type</summary>

```luau
type Prompt = Prompt.Prototype, & {
	type: guildTypes.OnboardingPromptType,

	options: {option.JSON},

	title: string,

	singleSelect: boolean,

	required: boolean
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"type": {
			type: "[guildTypes](#module.guildTypes).[OnboardingPromptType](#OnboardingPromptType)",
			description: "",
			required: true
		},
		"options": {
			type: "\{[option](#module.option).[JSON](#JSON)\}",
			description: "",
			required: true
		},
		"title": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"singleSelect": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"required": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
	}}
/>
</details>

<div id="JSON"></div>

## JSON

<details>
<summary>Raw Type</summary>

```luau
type JSON = Prompt.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Prompt.Prototype.addOption"></div>

## Prompt.Prototype.addOption

\[\[
	Add an Option to this prompt
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Add an Option to this prompt
]]
function Prompt.Prototype.addOption(self: Prompt, option: option.JSON) -> Prompt end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="option"></div>

### option

[option](#module.option).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Prompt](#Prompt)<div id="Prompt.Prototype.setType"></div>

## Prompt.Prototype.setType

\[\[
	Set the type of prompt.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the type of prompt.
]]
function Prompt.Prototype.setType(self: Prompt, type: guildTypes.OnboardingPromptType) -> Prompt end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="type"></div>

### type

[guildTypes](#module.guildTypes).[OnboardingPromptType](#OnboardingPromptType)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Prompt](#Prompt)<div id="Prompt.Prototype.setTitle"></div>

## Prompt.Prototype.setTitle

\[\[
	Set the title of this prompt
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the title of this prompt
]]
function Prompt.Prototype.setTitle(self: Prompt, title: string) -> Prompt end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="title"></div>

### title

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Prompt](#Prompt)<div id="Prompt.Prototype.setSingleSelect"></div>

## Prompt.Prototype.setSingleSelect

\[\[
	Set weather or not users can select one option, or multiple.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set weather or not users can select one option, or multiple.
]]
function Prompt.Prototype.setSingleSelect(self: Prompt, singleSelect: boolean) -> Prompt end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="singleSelect"></div>

### singleSelect

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Prompt](#Prompt)<div id="Prompt.Prototype.setRequired"></div>

## Prompt.Prototype.setRequired

\[\[
	Set weather this option is required or not.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set weather this option is required or not.
]]
function Prompt.Prototype.setRequired(self: Prompt, required: boolean) -> Prompt end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="required"></div>

### required

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Prompt](#Prompt)<div id="Prompt.Prototype.build"></div>

## Prompt.Prototype.build

\[\[
	Responsible for building the PromptObject JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the PromptObject JSON that can be parsed by the Discord API.
]]
function Prompt.Prototype.build(self: Prompt) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Prompt.Interface.new"></div>

## Prompt.Interface.new

\[\[
	Responsible for creating a new Prompt.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Prompt.

	\`\`\`lua
	
	\`\`\`
]]
function Prompt.Interface.new(resource: {
		type: guildTypes.OnboardingPromptType?,

		options: {option.JSON}?,

		title: string?,

		singleSelect: boolean?,

		required: boolean?
	}?) -> Prompt end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{type: [guildTypes](#module.guildTypes).[OnboardingPromptType](#OnboardingPromptType)?, options: \{[option](#module.option).[JSON](#JSON)\}?, title: [string](#string)?, singleSelect: [boolean](#boolean)?, required: [boolean](#boolean)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Prompt](#Prompt)