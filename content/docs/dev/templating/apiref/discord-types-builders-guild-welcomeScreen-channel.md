---
title: "@discord-types/builders/guild/welcomeScreen/channel"
description: "API reference for @discord-types/builders/guild/welcomeScreen/channel"
---

<div id="@discord-types/builders/guild/welcomeScreen/channel"></div>

# @discord-types/builders/guild/welcomeScreen/channel

<div id="Types"></div>

## Types

<div id="WelcomeScreenChannel"></div>

## WelcomeScreenChannel

<details>
<summary>Raw Type</summary>

```luau
type WelcomeScreenChannel = WelcomeScreenChannel.Prototype, & {
	channelId: apiTypes.Snowflake?,

	description: string,

	emojiId: apiTypes.Snowflake?,

	emojiName: string?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"channelId": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"description": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"emojiId": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"emojiName": {
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
type JSON = WelcomeScreenChannel.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="WelcomeScreenChannel.Prototype.setChannelId"></div>

## WelcomeScreenChannel.Prototype.setChannelId

\[\[
	Set the channel id for this welcome screen channel
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the channel id for this welcome screen channel
]]
function WelcomeScreenChannel.Prototype.setChannelId(self: WelcomeScreenChannel, channelId: apiTypes.Snowflake) -> WelcomeScreenChannel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="channelId"></div>

### channelId

[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[WelcomeScreenChannel](#WelcomeScreenChannel)<div id="WelcomeScreenChannel.Prototype.setDescription"></div>

## WelcomeScreenChannel.Prototype.setDescription

\[\[
	Set the description for this welcome screen channel
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the description for this welcome screen channel
]]
function WelcomeScreenChannel.Prototype.setDescription(self: WelcomeScreenChannel, description: string) -> WelcomeScreenChannel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="description"></div>

### description

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[WelcomeScreenChannel](#WelcomeScreenChannel)<div id="WelcomeScreenChannel.Prototype.setEmojiId"></div>

## WelcomeScreenChannel.Prototype.setEmojiId

\[\[
	Set the emoji id for this welcome screen channel
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the emoji id for this welcome screen channel
]]
function WelcomeScreenChannel.Prototype.setEmojiId(self: WelcomeScreenChannel, emojiId: apiTypes.Snowflake) -> WelcomeScreenChannel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="emojiId"></div>

### emojiId

[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[WelcomeScreenChannel](#WelcomeScreenChannel)<div id="WelcomeScreenChannel.Prototype.setEmojiName"></div>

## WelcomeScreenChannel.Prototype.setEmojiName

\[\[
	Set the emoji name for this welcome screen channel
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the emoji name for this welcome screen channel
]]
function WelcomeScreenChannel.Prototype.setEmojiName(self: WelcomeScreenChannel, emojiName: string) -> WelcomeScreenChannel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="emojiName"></div>

### emojiName

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[WelcomeScreenChannel](#WelcomeScreenChannel)<div id="WelcomeScreenChannel.Prototype.build"></div>

## WelcomeScreenChannel.Prototype.build

\[\[
	Responsible for building the WelcomeScreenChannelObject JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the WelcomeScreenChannelObject JSON that can be parsed by the Discord API.
]]
function WelcomeScreenChannel.Prototype.build(self: WelcomeScreenChannel) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="WelcomeScreenChannel.Interface.new"></div>

## WelcomeScreenChannel.Interface.new

\[\[
	Responsible for creating a new WelcomeScreenChannel.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new WelcomeScreenChannel.

	\`\`\`lua
	
	\`\`\`
]]
function WelcomeScreenChannel.Interface.new(resource: {
		channelId: apiTypes.Snowflake?,

		description: string?,

		emojiId: apiTypes.Snowflake?,

		emojiName: string?
	}?) -> WelcomeScreenChannel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{channelId: [apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?, description: [string](#string)?, emojiId: [apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?, emojiName: [string](#string)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[WelcomeScreenChannel](#WelcomeScreenChannel)