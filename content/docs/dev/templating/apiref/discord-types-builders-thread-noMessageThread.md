---
title: "@discord-types/builders/thread/noMessageThread"
description: "API reference for @discord-types/builders/thread/noMessageThread"
---

<div id="@discord-types/builders/thread/noMessageThread"></div>

# @discord-types/builders/thread/noMessageThread

<div id="Types"></div>

## Types

<div id="NoMessageThread"></div>

## NoMessageThread

<details>
<summary>Raw Type</summary>

```luau
type NoMessageThread = NoMessageThread.Prototype, & {
	name: string?,

	autoArchiveDuration: number?,

	type: channelTypes.ChannelType?,

	invitable: boolean?,

	rateLimitPerUser: number?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"name": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"autoArchiveDuration": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"type": {
			type: "[channelTypes](#module.channelTypes).[ChannelType](#ChannelType)?",
			description: "",
			required: false
		},
		"invitable": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"rateLimitPerUser": {
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
type JSON = NoMessageThread.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="NoMessageThread.Prototype.setName"></div>

## NoMessageThread.Prototype.setName

\[\[
	Sets the name of the thread.
	Name must be between 1-100 characters.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the name of the thread.
	Name must be between 1-100 characters.
]]
function NoMessageThread.Prototype.setName(self: NoMessageThread, name: string) -> NoMessageThread end
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

[NoMessageThread](#NoMessageThread)<div id="NoMessageThread.Prototype.setAutoArchiveDuration"></div>

## NoMessageThread.Prototype.setAutoArchiveDuration

\[\[
	Sets the duration in minutes before the thread is automatically archived.
	Valid values are 60, 1440, 4320, or 10080.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the duration in minutes before the thread is automatically archived.
	Valid values are 60, 1440, 4320, or 10080.
]]
function NoMessageThread.Prototype.setAutoArchiveDuration(self: NoMessageThread, duration: number) -> NoMessageThread end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="duration"></div>

### duration

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[NoMessageThread](#NoMessageThread)<div id="NoMessageThread.Prototype.setType"></div>

## NoMessageThread.Prototype.setType

\[\[
	Sets the type of thread channel.
	Must be a valid Discord channel type.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the type of thread channel.
	Must be a valid Discord channel type.
]]
function NoMessageThread.Prototype.setType(self: NoMessageThread, type: channelTypes.ChannelType) -> NoMessageThread end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="type"></div>

### type

[channelTypes](#module.channelTypes).[ChannelType](#ChannelType)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[NoMessageThread](#NoMessageThread)<div id="NoMessageThread.Prototype.setInvitable"></div>

## NoMessageThread.Prototype.setInvitable

\[\[
	Sets whether non-moderators can add other non-moderators to the thread.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets whether non-moderators can add other non-moderators to the thread.
]]
function NoMessageThread.Prototype.setInvitable(self: NoMessageThread, invitable: boolean) -> NoMessageThread end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="invitable"></div>

### invitable

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[NoMessageThread](#NoMessageThread)<div id="NoMessageThread.Prototype.setRateLimitPerUser"></div>

## NoMessageThread.Prototype.setRateLimitPerUser

\[\[
	Sets the amount of seconds a user has to wait before sending another message.
	Must be less than or equal to 21600 seconds (6 hours).
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the amount of seconds a user has to wait before sending another message.
	Must be less than or equal to 21600 seconds (6 hours).
]]
function NoMessageThread.Prototype.setRateLimitPerUser(self: NoMessageThread, rateLimit: number) -> NoMessageThread end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="rateLimit"></div>

### rateLimit

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[NoMessageThread](#NoMessageThread)<div id="NoMessageThread.Prototype.build"></div>

## NoMessageThread.Prototype.build

\[\[
	Responsible for building the NoMessageThread JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the NoMessageThread JSON that can be parsed by the Discord API.
]]
function NoMessageThread.Prototype.build(self: NoMessageThread) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="NoMessageThread.Interface.new"></div>

## NoMessageThread.Interface.new

\[\[
	Responsible for creating a new NoMessageThread.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new NoMessageThread.

	\`\`\`lua
	
	\`\`\`
]]
function NoMessageThread.Interface.new(resource: {
		name: string?,

		autoArchiveDuration: number?,

		type: channelTypes.ChannelType?,

		invitable: boolean?,

		rateLimitPerUser: number?
	}?) -> NoMessageThread end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{name: [string](#string)?, autoArchiveDuration: [number](#number)?, type: [channelTypes](#module.channelTypes).[ChannelType](#ChannelType)?, invitable: [boolean](#boolean)?, rateLimitPerUser: [number](#number)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[NoMessageThread](#NoMessageThread)