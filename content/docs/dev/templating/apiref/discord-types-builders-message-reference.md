---
title: "@discord-types/builders/message/reference"
description: "API reference for @discord-types/builders/message/reference"
---

<div id="@discord-types/builders/message/reference"></div>

# @discord-types/builders/message/reference

<div id="Types"></div>

## Types

<div id="Reference"></div>

## Reference

<details>
<summary>Raw Type</summary>

```luau
type Reference = Reference.Prototype, & {
	type: messageTypes.MessageReferenceType?,

	messageId: apiTypes.Snowflake?,

	channelId: apiTypes.Snowflake?,

	guildId: apiTypes.Snowflake?,

	failIfNotExists: boolean?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"type": {
			type: "[messageTypes](#module.messageTypes).[MessageReferenceType](#MessageReferenceType)?",
			description: "",
			required: false
		},
		"messageId": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"channelId": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"guildId": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"failIfNotExists": {
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
type JSON = Reference.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Reference.Prototype.setType"></div>

## Reference.Prototype.setType

\[\[
	type of reference.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	type of reference.
]]
function Reference.Prototype.setType(self: Reference, type: messageTypes.MessageReferenceType) -> Reference end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="type"></div>

### type

[messageTypes](#module.messageTypes).[MessageReferenceType](#MessageReferenceType)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Reference](#Reference)<div id="Reference.Prototype.setMessageId"></div>

## Reference.Prototype.setMessageId

\[\[
	id of the originating message
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	id of the originating message
]]
function Reference.Prototype.setMessageId(self: Reference, messageId: string) -> Reference end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="messageId"></div>

### messageId

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Reference](#Reference)<div id="Reference.Prototype.setChannelId"></div>

## Reference.Prototype.setChannelId

\[\[
	id of the originating message's channel
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	id of the originating message's channel
]]
function Reference.Prototype.setChannelId(self: Reference, channelId: string) -> Reference end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="channelId"></div>

### channelId

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Reference](#Reference)<div id="Reference.Prototype.setGuildId"></div>

## Reference.Prototype.setGuildId

\[\[
	id of the originating message's guild
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	id of the originating message's guild
]]
function Reference.Prototype.setGuildId(self: Reference, guildId: string) -> Reference end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="guildId"></div>

### guildId

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Reference](#Reference)<div id="Reference.Prototype.setFailIfNotExists"></div>

## Reference.Prototype.setFailIfNotExists

\[\[
	when sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	when sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true
]]
function Reference.Prototype.setFailIfNotExists(self: Reference, failIfNotExists: boolean) -> Reference end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="failIfNotExists"></div>

### failIfNotExists

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Reference](#Reference)<div id="Reference.Prototype.build"></div>

## Reference.Prototype.build

\[\[
	Responsible for building the Reference JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the Reference JSON that can be parsed by the Discord API.
]]
function Reference.Prototype.build(self: Reference) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Reference.Interface.new"></div>

## Reference.Interface.new

\[\[
	Responsible for creating a new Reference.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Reference.

	\`\`\`lua
	
	\`\`\`
]]
function Reference.Interface.new(resource: {
		type: messageTypes.MessageReferenceType?,

		messageId: string?,

		channelId: string?,

		guildId: string?,

		failIfNotExists: boolean?
	}?) -> Reference end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{type: [messageTypes](#module.messageTypes).[MessageReferenceType](#MessageReferenceType)?, messageId: [string](#string)?, channelId: [string](#string)?, guildId: [string](#string)?, failIfNotExists: [boolean](#boolean)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Reference](#Reference)