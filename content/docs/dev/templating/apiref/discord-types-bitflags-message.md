---
title: "@discord-types/bitflags/message"
description: "API reference for @discord-types/bitflags/message"
---

<div id="@discord-types/bitflags/message"></div>

# @discord-types/bitflags/message

<div id="Types"></div>

## Types

<div id="MessageBitflag"></div>

## MessageBitflag

<details>
<summary>Raw Type</summary>

```luau
type MessageBitflag = MessageBitflag.Prototype, & {
	flag: number
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"flag": {
			type: "[number](#number)",
			description: "",
			required: true
		},
	}}
/>
</details>

<div id="Functions"></div>

# Functions

<div id="MessageBitflag.Prototype.crossposted"></div>

## MessageBitflag.Prototype.crossposted

\[\[
	this message has been published to subscribed channels (via Channel Following)
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	this message has been published to subscribed channels (via Channel Following)
]]
function MessageBitflag.Prototype.crossposted(self: MessageBitflag) end
```

</details>

<div id="MessageBitflag.Prototype.isCrossposted"></div>

## MessageBitflag.Prototype.isCrossposted

\[\[
	this message originated from a message in another channel (via Channel Following)
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	this message originated from a message in another channel (via Channel Following)
]]
function MessageBitflag.Prototype.isCrossposted(self: MessageBitflag) end
```

</details>

<div id="MessageBitflag.Prototype.suppressEmbeds"></div>

## MessageBitflag.Prototype.suppressEmbeds

\[\[
	do not include any embeds when serializing this message
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	do not include any embeds when serializing this message
]]
function MessageBitflag.Prototype.suppressEmbeds(self: MessageBitflag) end
```

</details>

<div id="MessageBitflag.Prototype.setSuppressEmbeds"></div>

## MessageBitflag.Prototype.setSuppressEmbeds

\[\[
    set the suppress embeds bitflag
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
    set the suppress embeds bitflag
]]
function MessageBitflag.Prototype.setSuppressEmbeds(self: MessageBitflag) end
```

</details>

<div id="MessageBitflag.Prototype.sourceMessageDeleted"></div>

## MessageBitflag.Prototype.sourceMessageDeleted

\[\[
	the source message for this crosspost has been deleted (via Channel Following)
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	the source message for this crosspost has been deleted (via Channel Following)
]]
function MessageBitflag.Prototype.sourceMessageDeleted(self: MessageBitflag) end
```

</details>

<div id="MessageBitflag.Prototype.urgent"></div>

## MessageBitflag.Prototype.urgent

\[\[
	this message came from the urgent message system
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	this message came from the urgent message system
]]
function MessageBitflag.Prototype.urgent(self: MessageBitflag) end
```

</details>

<div id="MessageBitflag.Prototype.hasThread"></div>

## MessageBitflag.Prototype.hasThread

\[\[
	this message has an associated thread, with the same id as the message
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	this message has an associated thread, with the same id as the message
]]
function MessageBitflag.Prototype.hasThread(self: MessageBitflag) end
```

</details>

<div id="MessageBitflag.Prototype.ephemeral"></div>

## MessageBitflag.Prototype.ephemeral

\[\[
	this message is only visible to the user who invoked the Interaction
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	this message is only visible to the user who invoked the Interaction
]]
function MessageBitflag.Prototype.ephemeral(self: MessageBitflag) end
```

</details>

<div id="MessageBitflag.Prototype.setEphemeral"></div>

## MessageBitflag.Prototype.setEphemeral

\[\[
set the ephemeral bitflag
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
set the ephemeral bitflag
]]
function MessageBitflag.Prototype.setEphemeral(self: MessageBitflag) end
```

</details>

<div id="MessageBitflag.Prototype.loading"></div>

## MessageBitflag.Prototype.loading

\[\[
	this message is an Interaction Response and the bot is "thinking"
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	this message is an Interaction Response and the bot is "thinking"
]]
function MessageBitflag.Prototype.loading(self: MessageBitflag) end
```

</details>

<div id="MessageBitflag.Prototype.setLoading"></div>

## MessageBitflag.Prototype.setLoading

\[\[
set the loading bitflag
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
set the loading bitflag
]]
function MessageBitflag.Prototype.setLoading(self: MessageBitflag) end
```

</details>

<div id="MessageBitflag.Prototype.failedToMentionSomeRolesInThread"></div>

## MessageBitflag.Prototype.failedToMentionSomeRolesInThread

\[\[
	this message failed to mention some roles and add their members to the thread
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	this message failed to mention some roles and add their members to the thread
]]
function MessageBitflag.Prototype.failedToMentionSomeRolesInThread(self: MessageBitflag) end
```

</details>

<div id="MessageBitflag.Prototype.suppressNotifications"></div>

## MessageBitflag.Prototype.suppressNotifications

\[\[
	this message will not trigger push and desktop notifications
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	this message will not trigger push and desktop notifications
]]
function MessageBitflag.Prototype.suppressNotifications(self: MessageBitflag) end
```

</details>

<div id="MessageBitflag.Prototype.setSuppressNotifications"></div>

## MessageBitflag.Prototype.setSuppressNotifications

\[\[
set the suppress notifications bitflag
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
set the suppress notifications bitflag
]]
function MessageBitflag.Prototype.setSuppressNotifications(self: MessageBitflag) end
```

</details>

<div id="MessageBitflag.Prototype.isVoiceMessage"></div>

## MessageBitflag.Prototype.isVoiceMessage

\[\[
	this message is a voice message
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	this message is a voice message
]]
function MessageBitflag.Prototype.isVoiceMessage(self: MessageBitflag) end
```

</details>

<div id="MessageBitflag.Prototype.setVoiceMessage"></div>

## MessageBitflag.Prototype.setVoiceMessage

\[\[
set the voice message bitflag
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
set the voice message bitflag
]]
function MessageBitflag.Prototype.setVoiceMessage(self: MessageBitflag) end
```

</details>

<div id="MessageBitflag.Interface.new"></div>

## MessageBitflag.Interface.new

<details>
<summary>Function Signature</summary>

```luau
function MessageBitflag.Interface.new(flag: number) -> MessageBitflag end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="flag"></div>

### flag

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[MessageBitflag](#MessageBitflag)