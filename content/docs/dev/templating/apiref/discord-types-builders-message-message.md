---
title: "@discord-types/builders/message/message"
description: "API reference for @discord-types/builders/message/message"
---

<div id="@discord-types/builders/message/message"></div>

# @discord-types/builders/message/message

<div id="Types"></div>

## Types

<div id="Message"></div>

## Message

<details>
<summary>Raw Type</summary>

```luau
type Message = Message.Prototype, & {
	content: string?,

	nonce: string?,

	tts: boolean?,

	embeds: {embed.JSON},

	allowedMentions: allowedMention.JSON?,

	messageReference: reference.JSON?,

	components: {button.JSON | textInput.JSON | selectMenu.JSON | actionRow.JSON},

	stickerIds: {string},

	-- files[n]
	-- payloadJson
	attachments: {attachment.JSON},

	flags: number?,

	enforceNonce: boolean?,

	poll: poll.JSON?
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
		"nonce": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"tts": {
			type: "[boolean](#boolean)?",
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
		"messageReference": {
			type: "[reference](#module.reference).[JSON](#JSON)?",
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
		"enforceNonce": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"poll": {
			type: "[poll](#module.poll).[JSON](#JSON)?",
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
type JSON = Message.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Message.Prototype.setContent"></div>

## Message.Prototype.setContent

\[\[
	Sets the content of the message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the content of the message.
]]
function Message.Prototype.setContent(self: Message, content: string) -> Message end
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

[Message](#Message)<div id="Message.Prototype.setNonce"></div>

## Message.Prototype.setNonce

\[\[
	Sets the nonce of the message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the nonce of the message.
]]
function Message.Prototype.setNonce(self: Message, nonce: string) -> Message end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="nonce"></div>

### nonce

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Message](#Message)<div id="Message.Prototype.setTTS"></div>

## Message.Prototype.setTTS

\[\[
	Sets whether the message is text-to-speech.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets whether the message is text-to-speech.
]]
function Message.Prototype.setTTS(self: Message, tts: boolean) -> Message end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="tts"></div>

### tts

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Message](#Message)<div id="Message.Prototype.addEmbed"></div>

## Message.Prototype.addEmbed

\[\[
	Adds an embed to the message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Adds an embed to the message.
]]
function Message.Prototype.addEmbed(self: Message, embedData: embed.JSON) -> Message end
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

[Message](#Message)<div id="Message.Prototype.setAllowedMentions"></div>

## Message.Prototype.setAllowedMentions

\[\[
	Sets the allowed mentions for the message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the allowed mentions for the message.
]]
function Message.Prototype.setAllowedMentions(self: Message, mentions: allowedMention.JSON) -> Message end
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

[Message](#Message)<div id="Message.Prototype.setMessageReference"></div>

## Message.Prototype.setMessageReference

\[\[
	Sets the message reference.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the message reference.
]]
function Message.Prototype.setMessageReference(self: Message, ref: reference.JSON) -> Message end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ref"></div>

### ref

[reference](#module.reference).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Message](#Message)<div id="Message.Prototype.addComponent"></div>

## Message.Prototype.addComponent

\[\[
	Adds a component to the message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Adds a component to the message.
]]
function Message.Prototype.addComponent(self: Message, component: button.JSON | textInput.JSON | selectMenu.JSON | actionRow.JSON) -> Message end
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

[Message](#Message)<div id="Message.Prototype.addStickerId"></div>

## Message.Prototype.addStickerId

\[\[
	Adds a sticker ID to the message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Adds a sticker ID to the message.
]]
function Message.Prototype.addStickerId(self: Message, stickerId: string) -> Message end
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

[Message](#Message)<div id="Message.Prototype.addAttachment"></div>

## Message.Prototype.addAttachment

\[\[
	Adds an attachment to the message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Adds an attachment to the message.
]]
function Message.Prototype.addAttachment(self: Message, attachmentData: attachment.JSON) -> Message end
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

[Message](#Message)<div id="Message.Prototype.setFlags"></div>

## Message.Prototype.setFlags

\[\[
	Sets the flags for the message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the flags for the message.
]]
function Message.Prototype.setFlags(self: Message, flags: number) -> Message end
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

[Message](#Message)<div id="Message.Prototype.setEnforceNonce"></div>

## Message.Prototype.setEnforceNonce

\[\[
	If true and nonce is present, it will be checked for uniqueness in the past few minutes. If another message
	was created by the same author with the same nonce, that message will be returned and no new message will 
	be created.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	If true and nonce is present, it will be checked for uniqueness in the past few minutes. If another message
	was created by the same author with the same nonce, that message will be returned and no new message will 
	be created.
]]
function Message.Prototype.setEnforceNonce(self: Message, enforceNonce: boolean) -> Message end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="enforceNonce"></div>

### enforceNonce

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Message](#Message)<div id="Message.Prototype.setPoll"></div>

## Message.Prototype.setPoll

\[\[
	Sets the poll for the message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the poll for the message.
]]
function Message.Prototype.setPoll(self: Message, poll: poll.JSON) -> Message end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="poll"></div>

### poll

[poll](#module.poll).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Message](#Message)<div id="Message.Prototype.build"></div>

## Message.Prototype.build

\[\[
	Responsible for building the Message JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the Message JSON that can be parsed by the Discord API.
]]
function Message.Prototype.build(self: Message) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Message.Interface.new"></div>

## Message.Interface.new

\[\[
	Responsible for creating a new Message.

	\`\`\`lua

	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Message.

	\`\`\`lua

	\`\`\`
]]
function Message.Interface.new(resource: {
		content: string?,

		nonce: string?,

		tts: boolean?,

		embeds: {embed.JSON}?,

		allowedMentions: allowedMention.JSON?,

		messageReference: reference.JSON?,

		components: {button.JSON | textInput.JSON | selectMenu.JSON | actionRow.JSON}?,

		stickerIds: {string}?,

		attachments: {attachment.JSON}?,

		flags: number?,

		enforceNonce: boolean?,

		poll: poll.JSON?
	}?) -> Message end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{content: [string](#string)?, nonce: [string](#string)?, tts: [boolean](#boolean)?, embeds: \{[embed](#module.embed).[JSON](#JSON)\}?, allowedMentions: [allowedMention](#module.allowedMention).[JSON](#JSON)?, messageReference: [reference](#module.reference).[JSON](#JSON)?, components: \{([button](#module.button).[JSON](#JSON) | [textInput](#module.textInput).[JSON](#JSON) | [selectMenu](#module.selectMenu).[JSON](#JSON) | [actionRow](#module.actionRow).[JSON](#JSON))\}?, stickerIds: \{[string](#string)\}?, attachments: \{[attachment](#module.attachment).[JSON](#JSON)\}?, flags: [number](#number)?, enforceNonce: [boolean](#boolean)?, poll: [poll](#module.poll).[JSON](#JSON)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Message](#Message)