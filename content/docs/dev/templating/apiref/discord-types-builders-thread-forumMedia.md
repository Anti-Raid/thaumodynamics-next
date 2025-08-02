---
title: "@discord-types/builders/thread/forumMedia"
description: "API reference for @discord-types/builders/thread/forumMedia"
---

<div id="@discord-types/builders/thread/forumMedia"></div>

# @discord-types/builders/thread/forumMedia

<div id="Types"></div>

## Types

<div id="ForumMediaThread"></div>

## ForumMediaThread

<details>
<summary>Raw Type</summary>

```luau
type ForumMediaThread = ForumMediaThread.Prototype, & {
	name: string?,

	autoArchiveDuration: number?,

	rateLimitPerUser: number?,

	appliedTags: {string},

	message: messageParams.JSON
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
		"appliedTags": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
		"message": {
			type: "[messageParams](#module.messageParams).[JSON](#JSON)",
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
type JSON = ForumMediaThread.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="ForumMediaThread.Prototype.setName"></div>

## ForumMediaThread.Prototype.setName

\[\[
	Sets the name of the forum thread.
	Name must be between 1-100 characters.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the name of the forum thread.
	Name must be between 1-100 characters.
]]
function ForumMediaThread.Prototype.setName(self: ForumMediaThread, name: string) -> ForumMediaThread end
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

[ForumMediaThread](#ForumMediaThread)<div id="ForumMediaThread.Prototype.setAutoArchiveDuration"></div>

## ForumMediaThread.Prototype.setAutoArchiveDuration

\[\[
	Sets the duration after which the thread will automatically archive.
	Duration must be one of: 60, 1440, 4320, or 10080 minutes.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the duration after which the thread will automatically archive.
	Duration must be one of: 60, 1440, 4320, or 10080 minutes.
]]
function ForumMediaThread.Prototype.setAutoArchiveDuration(self: ForumMediaThread, duration: number) -> ForumMediaThread end
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

[ForumMediaThread](#ForumMediaThread)<div id="ForumMediaThread.Prototype.setRateLimitPerUser"></div>

## ForumMediaThread.Prototype.setRateLimitPerUser

\[\[
	Sets the rate limit per user for the thread in seconds.
	Rate limit must not exceed 21600 seconds (6 hours).
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the rate limit per user for the thread in seconds.
	Rate limit must not exceed 21600 seconds (6 hours).
]]
function ForumMediaThread.Prototype.setRateLimitPerUser(self: ForumMediaThread, rateLimit: number) -> ForumMediaThread end
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

[ForumMediaThread](#ForumMediaThread)<div id="ForumMediaThread.Prototype.addTag"></div>

## ForumMediaThread.Prototype.addTag

\[\[
	Adds a tag to the forum thread.
	Tags can be used to categorize or filter threads.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Adds a tag to the forum thread.
	Tags can be used to categorize or filter threads.
]]
function ForumMediaThread.Prototype.addTag(self: ForumMediaThread, rateLimit: string) -> ForumMediaThread end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="rateLimit"></div>

### rateLimit

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[ForumMediaThread](#ForumMediaThread)<div id="ForumMediaThread.Prototype.setMessage"></div>

## ForumMediaThread.Prototype.setMessage

\[\[
	Sets the initial message content for the forum thread.
	The message must be a valid message parameters object.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the initial message content for the forum thread.
	The message must be a valid message parameters object.
]]
function ForumMediaThread.Prototype.setMessage(self: ForumMediaThread, message: messageParams.JSON) -> ForumMediaThread end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="message"></div>

### message

[messageParams](#module.messageParams).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[ForumMediaThread](#ForumMediaThread)<div id="ForumMediaThread.Prototype.build"></div>

## ForumMediaThread.Prototype.build

\[\[
	Responsible for building the ForumMediaThread JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the ForumMediaThread JSON that can be parsed by the Discord API.
]]
function ForumMediaThread.Prototype.build(self: ForumMediaThread) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="ForumMediaThread.Interface.new"></div>

## ForumMediaThread.Interface.new

\[\[
	Responsible for creating a new ForumMediaThread.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new ForumMediaThread.

	\`\`\`lua
	
	\`\`\`
]]
function ForumMediaThread.Interface.new(resource: {
		name: string?,

		autoArchiveDuration: number?,

		rateLimitPerUser: number?
	}?) -> ForumMediaThread end
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

[ForumMediaThread](#ForumMediaThread)