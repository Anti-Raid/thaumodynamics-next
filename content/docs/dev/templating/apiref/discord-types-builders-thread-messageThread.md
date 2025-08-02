---
title: "@discord-types/builders/thread/messageThread"
description: "API reference for @discord-types/builders/thread/messageThread"
---

<div id="@discord-types/builders/thread/messageThread"></div>

# @discord-types/builders/thread/messageThread

<div id="Types"></div>

## Types

<div id="MessageThread"></div>

## MessageThread

<details>
<summary>Raw Type</summary>

```luau
type MessageThread = MessageThread.Prototype, & {
	name: string?,

	autoArchiveDuration: number?,

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
type JSON = MessageThread.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="MessageThread.Prototype.setName"></div>

## MessageThread.Prototype.setName

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
function MessageThread.Prototype.setName(self: MessageThread, name: string) -> MessageThread end
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

[MessageThread](#MessageThread)<div id="MessageThread.Prototype.setAutoArchiveDuration"></div>

## MessageThread.Prototype.setAutoArchiveDuration

\[\[
	Sets the duration in minutes before the thread is automatically archived.
	Duration must be 60, 1440, 4320, or 10080.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the duration in minutes before the thread is automatically archived.
	Duration must be 60, 1440, 4320, or 10080.
]]
function MessageThread.Prototype.setAutoArchiveDuration(self: MessageThread, duration: number) -> MessageThread end
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

[MessageThread](#MessageThread)<div id="MessageThread.Prototype.setRateLimitPerUser"></div>

## MessageThread.Prototype.setRateLimitPerUser

\[\[
	Sets the rate limit per user in the thread.
	Rate limit must be less than or equal to 21600 seconds.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the rate limit per user in the thread.
	Rate limit must be less than or equal to 21600 seconds.
]]
function MessageThread.Prototype.setRateLimitPerUser(self: MessageThread, rateLimit: number) -> MessageThread end
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

[MessageThread](#MessageThread)<div id="MessageThread.Prototype.build"></div>

## MessageThread.Prototype.build

\[\[
	Responsible for building the MessageThread JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the MessageThread JSON that can be parsed by the Discord API.
]]
function MessageThread.Prototype.build(self: MessageThread) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="MessageThread.Interface.new"></div>

## MessageThread.Interface.new

\[\[
	Responsible for creating a new MessageThread.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new MessageThread.

	\`\`\`lua
	
	\`\`\`
]]
function MessageThread.Interface.new(resource: {
		name: string?,

		autoArchiveDuration: number?,

		rateLimitPerUser: number?
	}?) -> MessageThread end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{name: [string](#string)?, autoArchiveDuration: [number](#number)?, rateLimitPerUser: [number](#number)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[MessageThread](#MessageThread)