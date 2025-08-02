---
title: "@discord-types/builders/interaction/choice"
description: "API reference for @discord-types/builders/interaction/choice"
---

<div id="@discord-types/builders/interaction/choice"></div>

# @discord-types/builders/interaction/choice

<div id="Types"></div>

## Types

<div id="Choice"></div>

## Choice

<details>
<summary>Raw Type</summary>

```luau
type Choice = Choice.Prototype, & {
	name: string,

	nameLocalizations: {
		[apiTypes.LanguageLocales]: string
	},

	value: string | number
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"nameLocalizations": {
			type: "\{[apiTypes.LanguageLocales]: [string](#string)\}",
			description: "",
			required: true
		},
		"value": {
			type: "([string](#string) | [number](#number))",
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
type JSON = Choice.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Choice.Prototype.setName"></div>

## Choice.Prototype.setName

\[\[
	Responsible for setting the name of the choice. Name must be kebab case, with 1-100 characters.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for setting the name of the choice. Name must be kebab case, with 1-100 characters.
]]
function Choice.Prototype.setName(self: Choice, name: string) -> Choice end
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

[Choice](#Choice)<div id="Choice.Prototype.setNameLocalization"></div>

## Choice.Prototype.setNameLocalization

\[\[
	Adding localization to the Name of the choice, enabling developers to create milti-language support.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Adding localization to the Name of the choice, enabling developers to create milti-language support.
]]
function Choice.Prototype.setNameLocalization(self: Choice, localization: apiTypes.LanguageLocales, name: string) -> Choice end
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

[Choice](#Choice)<div id="Choice.Prototype.setValue"></div>

## Choice.Prototype.setValue

\[\[
	Set the value of the choice, value can only be either a string or number.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the value of the choice, value can only be either a string or number.
]]
function Choice.Prototype.setValue(self: Choice, value: string | number) -> Choice end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="value"></div>

### value

Union with variants:

<details>
<summary>Variant 1</summary>

[string](#string)

</details>

<details>
<summary>Variant 2</summary>

[number](#number)

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Choice](#Choice)<div id="Choice.Prototype.build"></div>

## Choice.Prototype.build

\[\[
	Responsible for buillding the default reaction object that the Discord API can understand.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for buillding the default reaction object that the Discord API can understand.
]]
function Choice.Prototype.build(self: Choice) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Choice.Interface.new"></div>

## Choice.Interface.new

\[\[
	Constructor for the Discord Default Reaction Builder.

	\`\`\`lua
	local defaultReaction = Choice.new(\{
		name = "example-choice",
		value = "example-value",
	\}):build()
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Constructor for the Discord Default Reaction Builder.

	\`\`\`lua
	local defaultReaction = Choice.new({
		name = "example-choice",
		value = "example-value",
	}):build()
	\`\`\`
]]
function Choice.Interface.new(resource: {
		name: string?,

		nameLocalizations: {
			[apiTypes.LanguageLocales]: string
		}?,

		value: string | number?
	}?) -> Choice end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{name: [string](#string)?, nameLocalizations: \{[apiTypes.LanguageLocales]: [string](#string)\}?, value: ([string](#string) | [number](#number)?)\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Choice](#Choice)