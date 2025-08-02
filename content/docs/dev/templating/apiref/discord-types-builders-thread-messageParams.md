---
title: "@discord-types/builders/thread/messageParams"
description: "API reference for @discord-types/builders/thread/messageParams"
---

<div id="@discord-types/builders/thread/messageParams"></div>

# @discord-types/builders/thread/messageParams

<div id="Types"></div>

## Types

<div id="MessageParams"></div>

## MessageParams

<details>
<summary>Raw Type</summary>

```luau
type MessageParams = MessageParams.Prototype, & {
	content: string?,

	embeds: {embed.JSON},

	allowedMentions: allowedMention.JSON?,

	components: {button.JSON | textInput.JSON | selectMenu.JSON | actionRow.JSON},

	stickerIds: {string},

	attachments: {attachment.JSON},

	flags: number?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"content": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"embeds": {
			type: "\{[embed](#module.embed).[JSON](#JSON)\}",
			description: "",
			required: true
		},
		"allowedMentions": {
			type: "[allowedMention](#module.allowedMention).[JSON](#JSON)?",
			description: "",
			required: false
		},
		"components": {
			type: "\{([button](#module.button).[JSON](#JSON) | [textInput](#module.textInput).[JSON](#JSON) | [selectMenu](#module.selectMenu).[JSON](#JSON) | [actionRow](#module.actionRow).[JSON](#JSON))\}",
			description: "",
			required: true
		},
		"stickerIds": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
		"attachments": {
			type: "\{[attachment](#module.attachment).[JSON](#JSON)\}",
			description: "",
			required: true
		},
		"flags": {
			type: "[number](#number)?",
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
type JSON = MessageParams.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="MessageParams.Prototype.setContent"></div>

## MessageParams.Prototype.setContent

\[\[
	Sets the content of the message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the content of the message.
]]
function MessageParams.Prototype.setContent(self: MessageParams, content: string) -> MessageParams end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="content"></div>

### content

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[MessageParams](#MessageParams)<div id="MessageParams.Prototype.addEmbed"></div>

## MessageParams.Prototype.addEmbed

\[\[
	Adds an embed to the message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Adds an embed to the message.
]]
function MessageParams.Prototype.addEmbed(self: MessageParams, embedData: embed.JSON) -> MessageParams end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="embedData"></div>

### embedData

[embed](#module.embed).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[MessageParams](#MessageParams)<div id="MessageParams.Prototype.setAllowedMentions"></div>

## MessageParams.Prototype.setAllowedMentions

\[\[
	Sets the allowed mentions for the message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the allowed mentions for the message.
]]
function MessageParams.Prototype.setAllowedMentions(self: MessageParams, mentions: allowedMention.JSON) -> MessageParams end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="mentions"></div>

### mentions

[allowedMention](#module.allowedMention).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[MessageParams](#MessageParams)<div id="MessageParams.Prototype.addComponent"></div>

## MessageParams.Prototype.addComponent

\[\[
	Adds a component to the message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Adds a component to the message.
]]
function MessageParams.Prototype.addComponent(self: MessageParams, component: button.JSON | textInput.JSON | selectMenu.JSON | actionRow.JSON) -> MessageParams end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="component"></div>

### component

Union with variants:

<details>
<summary>Variant 1</summary>

[button](#module.button).[JSON](#JSON)



</details>

<details>
<summary>Variant 2</summary>

[textInput](#module.textInput).[JSON](#JSON)



</details>

<details>
<summary>Variant 3</summary>

[selectMenu](#module.selectMenu).[JSON](#JSON)



</details>

<details>
<summary>Variant 4</summary>

[actionRow](#module.actionRow).[JSON](#JSON)



</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[MessageParams](#MessageParams)<div id="MessageParams.Prototype.addStickerId"></div>

## MessageParams.Prototype.addStickerId

\[\[
	Adds a sticker ID to the message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Adds a sticker ID to the message.
]]
function MessageParams.Prototype.addStickerId(self: MessageParams, stickerId: string) -> MessageParams end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="stickerId"></div>

### stickerId

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[MessageParams](#MessageParams)<div id="MessageParams.Prototype.addAttachment"></div>

## MessageParams.Prototype.addAttachment

\[\[
	Adds an attachment to the message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Adds an attachment to the message.
]]
function MessageParams.Prototype.addAttachment(self: MessageParams, attachmentData: attachment.JSON) -> MessageParams end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="attachmentData"></div>

### attachmentData

[attachment](#module.attachment).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[MessageParams](#MessageParams)<div id="MessageParams.Prototype.setFlags"></div>

## MessageParams.Prototype.setFlags

\[\[
	Sets the flags for the message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the flags for the message.
]]
function MessageParams.Prototype.setFlags(self: MessageParams, flags: number) -> MessageParams end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="flags"></div>

### flags

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[MessageParams](#MessageParams)<div id="MessageParams.Prototype.build"></div>

## MessageParams.Prototype.build

\[\[
	Responsible for building the MessageParams JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the MessageParams JSON that can be parsed by the Discord API.
]]
function MessageParams.Prototype.build(self: MessageParams) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="MessageParams.Interface.new"></div>

## MessageParams.Interface.new

\[\[
	Responsible for creating a new MessageParams.

	\`\`\`lua

	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new MessageParams.

	\`\`\`lua

	\`\`\`
]]
function MessageParams.Interface.new(resource: {
		content: string?,

		embeds: {embed.JSON}?,

		allowedMentions: allowedMention.JSON?,

		components: {button.JSON | textInput.JSON | selectMenu.JSON | actionRow.JSON}?,

		stickerIds: {string}?,

		attachments: {attachment.JSON}?,

		flags: number?
	}?) -> MessageParams end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{content: [string](#string)?, embeds: \{[embed](#module.embed).[JSON](#JSON)\}?, allowedMentions: [allowedMention](#module.allowedMention).[JSON](#JSON)?, components: \{([button](#module.button).[JSON](#JSON) | [textInput](#module.textInput).[JSON](#JSON) | [selectMenu](#module.selectMenu).[JSON](#JSON) | [actionRow](#module.actionRow).[JSON](#JSON))\}?, stickerIds: \{[string](#string)\}?, attachments: \{[attachment](#module.attachment).[JSON](#JSON)\}?, flags: [number](#number)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[MessageParams](#MessageParams)