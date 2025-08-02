---
title: "@discord-types/builders/message/components/textInput"
description: "API reference for @discord-types/builders/message/components/textInput"
---

<div id="@discord-types/builders/message/components/textInput"></div>

# @discord-types/builders/message/components/textInput

<div id="Types"></div>

## Types

<div id="TextInput"></div>

## TextInput

<details>
<summary>Raw Type</summary>

```luau
type TextInput = TextInput.Prototype, & {
	customId: string?,

	style: messageTypes.TextInputStyle?,

	label: string?,

	minLength: number?,

	maxLength: number?,

	required: boolean?,

	value: string?,

	placeholder: string?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"customId": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"style": {
			type: "[messageTypes](#module.messageTypes).[TextInputStyle](#TextInputStyle)?",
			description: "",
			required: false
		},
		"label": {
			type: "[string](#string)?",
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
		"required": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"value": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"placeholder": {
			type: "[string](#string)?",
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
type JSON = apiTypes.TextInputComponentObject
```

</details>

[apiTypes](#module.apiTypes).[TextInputComponentObject](#TextInputComponentObject)



<div id="Functions"></div>

# Functions

<div id="TextInput.Prototype.setCustomId"></div>

## TextInput.Prototype.setCustomId

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function TextInput.Prototype.setCustomId(self: TextInput, customId: string) -> TextInput end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="customId"></div>

### customId

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TextInput](#TextInput)<div id="TextInput.Prototype.setStyle"></div>

## TextInput.Prototype.setStyle

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function TextInput.Prototype.setStyle(self: TextInput, style: messageTypes.TextInputStyle) -> TextInput end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="style"></div>

### style

[messageTypes](#module.messageTypes).[TextInputStyle](#TextInputStyle)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TextInput](#TextInput)<div id="TextInput.Prototype.setLabel"></div>

## TextInput.Prototype.setLabel

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function TextInput.Prototype.setLabel(self: TextInput, label: string) -> TextInput end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="label"></div>

### label

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TextInput](#TextInput)<div id="TextInput.Prototype.setMinLength"></div>

## TextInput.Prototype.setMinLength

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function TextInput.Prototype.setMinLength(self: TextInput, minLength: number) -> TextInput end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="minLength"></div>

### minLength

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TextInput](#TextInput)<div id="TextInput.Prototype.setMaxLength"></div>

## TextInput.Prototype.setMaxLength

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function TextInput.Prototype.setMaxLength(self: TextInput, maxLength: number) -> TextInput end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="maxLength"></div>

### maxLength

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TextInput](#TextInput)<div id="TextInput.Prototype.setIsRequired"></div>

## TextInput.Prototype.setIsRequired

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function TextInput.Prototype.setIsRequired(self: TextInput, isRequired: boolean) -> TextInput end
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

[TextInput](#TextInput)<div id="TextInput.Prototype.setValue"></div>

## TextInput.Prototype.setValue

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function TextInput.Prototype.setValue(self: TextInput, value: string) -> TextInput end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="value"></div>

### value

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TextInput](#TextInput)<div id="TextInput.Prototype.setPlaceholder"></div>

## TextInput.Prototype.setPlaceholder

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function TextInput.Prototype.setPlaceholder(self: TextInput, placeholder: string) -> TextInput end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="placeholder"></div>

### placeholder

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TextInput](#TextInput)<div id="TextInput.Prototype.build"></div>

## TextInput.Prototype.build

\[\[
	Responsible for building the TextInput JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the TextInput JSON that can be parsed by the Discord API.
]]
function TextInput.Prototype.build(self: TextInput) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="TextInput.Interface.new"></div>

## TextInput.Interface.new

\[\[
	Responsible for creating a new TextInput.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new TextInput.

	\`\`\`lua
	
	\`\`\`
]]
function TextInput.Interface.new(resource: {
		customId: string?,

		style: messageTypes.TextInputStyle?,

		label: string?,

		minLength: number?,

		maxLength: number?,

		required: boolean?,

		value: string?,

		placeholder: string?
	}?) -> TextInput end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{customId: [string](#string)?, style: [messageTypes](#module.messageTypes).[TextInputStyle](#TextInputStyle)?, label: [string](#string)?, minLength: [number](#number)?, maxLength: [number](#number)?, required: [boolean](#boolean)?, value: [string](#string)?, placeholder: [string](#string)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TextInput](#TextInput)