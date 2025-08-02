---
title: "@discord-types/builders/message/components/button"
description: "API reference for @discord-types/builders/message/components/button"
---

<div id="@discord-types/builders/message/components/button"></div>

# @discord-types/builders/message/components/button

<div id="Types"></div>

## Types

<div id="Button"></div>

## Button

<details>
<summary>Raw Type</summary>

```luau
type Button = Button.Prototype, & {
	style: messageTypes.ButtonStyle,

	label: string?,

	emoji: emoji.JSON?,

	customId: string?,

	skuId: string?,

	url: string?,

	disabled: boolean?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"style": {
			type: "[messageTypes](#module.messageTypes).[ButtonStyle](#ButtonStyle)",
			description: "",
			required: true
		},
		"label": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"emoji": {
			type: "[emoji](#module.emoji).[JSON](#JSON)?",
			description: "",
			required: false
		},
		"customId": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"skuId": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"disabled": {
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
type JSON = apiTypes.ButtonComponentObject
```

</details>

[apiTypes](#module.apiTypes).[ButtonComponentObject](#ButtonComponentObject)



<div id="Functions"></div>

# Functions

<div id="Button.Prototype.setStyle"></div>

## Button.Prototype.setStyle

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function Button.Prototype.setStyle(self: Button, buttonStyle: messageTypes.ButtonStyle) -> Button end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="buttonStyle"></div>

### buttonStyle

[messageTypes](#module.messageTypes).[ButtonStyle](#ButtonStyle)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Button](#Button)<div id="Button.Prototype.setLabel"></div>

## Button.Prototype.setLabel

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function Button.Prototype.setLabel(self: Button, label: string) -> Button end
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

[Button](#Button)<div id="Button.Prototype.setEmoji"></div>

## Button.Prototype.setEmoji

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function Button.Prototype.setEmoji(self: Button, emoji: emoji.JSON) -> Button end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="emoji"></div>

### emoji

[emoji](#module.emoji).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Button](#Button)<div id="Button.Prototype.setCustomId"></div>

## Button.Prototype.setCustomId

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function Button.Prototype.setCustomId(self: Button, customId: string) -> Button end
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

[Button](#Button)<div id="Button.Prototype.setSkuId"></div>

## Button.Prototype.setSkuId

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function Button.Prototype.setSkuId(self: Button, skuId: string) -> Button end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="skuId"></div>

### skuId

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Button](#Button)<div id="Button.Prototype.setUrl"></div>

## Button.Prototype.setUrl

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function Button.Prototype.setUrl(self: Button, url: string) -> Button end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="url"></div>

### url

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Button](#Button)<div id="Button.Prototype.setDisabled"></div>

## Button.Prototype.setDisabled

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function Button.Prototype.setDisabled(self: Button, disabled: boolean) -> Button end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="disabled"></div>

### disabled

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Button](#Button)<div id="Button.Prototype.build"></div>

## Button.Prototype.build

\[\[
	Responsible for building the Button JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the Button JSON that can be parsed by the Discord API.
]]
function Button.Prototype.build(self: Button) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Button.Interface.new"></div>

## Button.Interface.new

\[\[
	Responsible for creating a new Button.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Button.

	\`\`\`lua
	
	\`\`\`
]]
function Button.Interface.new(resource: {
		style: messageTypes.ButtonStyle,

		label: string?,

		emoji: emoji.JSON?,

		customId: string?,

		skuId: string?,

		url: string?,

		disabled: boolean?
	}?) -> Button end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{style: [messageTypes](#module.messageTypes).[ButtonStyle](#ButtonStyle), label: [string](#string)?, emoji: [emoji](#module.emoji).[JSON](#JSON)?, customId: [string](#string)?, skuId: [string](#string)?, url: [string](#string)?, disabled: [boolean](#boolean)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Button](#Button)