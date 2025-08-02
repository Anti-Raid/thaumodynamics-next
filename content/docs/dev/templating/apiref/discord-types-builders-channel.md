---
title: "@discord-types/builders/channel"
description: "API reference for @discord-types/builders/channel"
---

<div id="@discord-types/builders/channel"></div>

# @discord-types/builders/channel

<div id="Types"></div>

## Types

<div id="Channel"></div>

## Channel

<details>
<summary>Raw Type</summary>

```luau
type Channel = Channel.Prototype, & {
	id: apiTypes.Snowflake?,

	name: string?,

	type: channelTypes.ChannelType,

	permissionOverwrites: {apiTypes.OverwriteObject},

	position: number?,

	-- DM
	icon: string?,

	flags: number?,

	-- TEXT
	topic: string?,

	rateLimitPerUser: number?,

	parentId: apiTypes.Snowflake?,

	nsfw: boolean?,

	defaultAutoArchiveDuration: number?,

	defaultThreadRateLimitPerUser: number?,

	-- MEDIA
	defaultReactionEmoji: apiTypes.DefaultReactionObject?,

	availableTags: {apiTypes.ForumTagObject}?,

	defaultSortOrder: channelTypes.ForumSortOrder?,

	-- FORUM
	defaultForumLayout: channelTypes.ForumLayout?,

	-- VOICE
	videoQualityMode: channelTypes.VideoQualityMode?,

	rtcRegion: string?,

	userLimit: number?,

	bitrate: number?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"id": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"name": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"type": {
			type: "[channelTypes](#module.channelTypes).[ChannelType](#ChannelType)",
			description: "",
			required: true
		},
		"permissionOverwrites": {
			type: "\{[apiTypes](#module.apiTypes).[OverwriteObject](#OverwriteObject)\}",
			description: "",
			required: true
		},
		"position": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"icon": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"flags": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"topic": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"rateLimitPerUser": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"parentId": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"nsfw": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"defaultAutoArchiveDuration": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"defaultThreadRateLimitPerUser": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"defaultReactionEmoji": {
			type: "[apiTypes](#module.apiTypes).[DefaultReactionObject](#DefaultReactionObject)?",
			description: "",
			required: false
		},
		"availableTags": {
			type: "\{[apiTypes](#module.apiTypes).[ForumTagObject](#ForumTagObject)\}?",
			description: "",
			required: false
		},
		"defaultSortOrder": {
			type: "[channelTypes](#module.channelTypes).[ForumSortOrder](#ForumSortOrder)?",
			description: "",
			required: false
		},
		"defaultForumLayout": {
			type: "[channelTypes](#module.channelTypes).[ForumLayout](#ForumLayout)?",
			description: "",
			required: false
		},
		"videoQualityMode": {
			type: "[channelTypes](#module.channelTypes).[VideoQualityMode](#VideoQualityMode)?",
			description: "",
			required: false
		},
		"rtcRegion": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"userLimit": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"bitrate": {
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
type JSON = Channel.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Channel.Prototype.setName"></div>

## Channel.Prototype.setName

\[\[
	Set the name of this Channel
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the name of this Channel
]]
function Channel.Prototype.setName(self: Channel, tagName: string) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="tagName"></div>

### tagName

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setType"></div>

## Channel.Prototype.setType

\[\[
	Set the Type of channel this is.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the Type of channel this is.
]]
function Channel.Prototype.setType(self: Channel, channelType: channelTypes.ChannelType) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="channelType"></div>

### channelType

[channelTypes](#module.channelTypes).[ChannelType](#ChannelType)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setPosition"></div>

## Channel.Prototype.setPosition

\[\[
	Sets the position of the channel in the discord channels list.

	channels with the same position are sorted by id
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the position of the channel in the discord channels list.

	channels with the same position are sorted by id
]]
function Channel.Prototype.setPosition(self: Channel, channelPosition: number) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="channelPosition"></div>

### channelPosition

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setOverwrites"></div>

## Channel.Prototype.setOverwrites

\[\[
	Adds an overwrite object to the channel's permission overwrites.

	channel overwrites are responsible for handling user/role permission on a specific channel.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Adds an overwrite object to the channel's permission overwrites.

	channel overwrites are responsible for handling user/role permission on a specific channel.
]]
function Channel.Prototype.setOverwrites(self: Channel, overwriteObjects: {apiTypes.OverwriteObject}) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="overwriteObjects"></div>

### overwriteObjects

\{[apiTypes](#module.apiTypes).[OverwriteObject](#OverwriteObject)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setTopic"></div>

## Channel.Prototype.setTopic

\[\[
	Sets the channels topic, topics appear at the top of the discord app and help to inform players about
		the channel's purpose.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the channels topic, topics appear at the top of the discord app and help to inform players about
		the channel's purpose.
]]
function Channel.Prototype.setTopic(self: Channel, channelTopic: string) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="channelTopic"></div>

### channelTopic

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setBitrate"></div>

## Channel.Prototype.setBitrate

\[\[
	Sets the bitrate of the voice channel, the bitrate (in bits) of the voice or stage channel.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the bitrate of the voice channel, the bitrate (in bits) of the voice or stage channel.
]]
function Channel.Prototype.setBitrate(self: Channel, bitrate: number) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="bitrate"></div>

### bitrate

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setUserLimit"></div>

## Channel.Prototype.setUserLimit

\[\[
	the user limit of the voice channel	

	the user limit of a voice channel is the maximum number of users allowed in the channel at one time.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	the user limit of the voice channel	

	the user limit of a voice channel is the maximum number of users allowed in the channel at one time.
]]
function Channel.Prototype.setUserLimit(self: Channel, userLimit: number?) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="userLimit"></div>

### userLimit

*This field is optional and may not be specified*

[number](#number)?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setRateLimitPerUser"></div>

## Channel.Prototype.setRateLimitPerUser

\[\[
	amount of seconds a user has to wait before sending another message; bots, as well as users with
		the permission manage_messages or manage_channel, are unaffected
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	amount of seconds a user has to wait before sending another message; bots, as well as users with
		the permission manage_messages or manage_channel, are unaffected
]]
function Channel.Prototype.setRateLimitPerUser(self: Channel, rateLimitPerUser: number?) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="rateLimitPerUser"></div>

### rateLimitPerUser

*This field is optional and may not be specified*

[number](#number)?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setParentId"></div>

## Channel.Prototype.setParentId

\[\[
	set the parent of the channel, channel parents are categories and can help break down a discord guild.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	set the parent of the channel, channel parents are categories and can help break down a discord guild.
]]
function Channel.Prototype.setParentId(self: Channel, parentId: apiTypes.Snowflake?) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="parentId"></div>

### parentId

*This field is optional and may not be specified*

[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setNSFW"></div>

## Channel.Prototype.setNSFW

\[\[
	set weather this channel is NSFW or not.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	set weather this channel is NSFW or not.
]]
function Channel.Prototype.setNSFW(self: Channel, isNSFW: boolean) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="isNSFW"></div>

### isNSFW

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setVoiceRegion"></div>

## Channel.Prototype.setVoiceRegion

\[\[
	set the voice region (requires you to query for the voice region ids) of the voice channel.

	voice regions are regions that discord uses to host voice channels.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	set the voice region (requires you to query for the voice region ids) of the voice channel.

	voice regions are regions that discord uses to host voice channels.
]]
function Channel.Prototype.setVoiceRegion(self: Channel, voiceRegionId: string) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="voiceRegionId"></div>

### voiceRegionId

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setVideoQualityMode"></div>

## Channel.Prototype.setVideoQualityMode

\[\[
	sets the video quality mode of the voice channel.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	sets the video quality mode of the voice channel.
]]
function Channel.Prototype.setVideoQualityMode(self: Channel, videoQualityMode: channelTypes.VideoQualityMode) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="videoQualityMode"></div>

### videoQualityMode

[channelTypes](#module.channelTypes).[VideoQualityMode](#VideoQualityMode)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setDefaultAutoArchiveDuration"></div>

## Channel.Prototype.setDefaultAutoArchiveDuration

\[\[
	sets the default auto archive duration for the channel, the default duration that the clients use (not the API)
		for newly created threads in the channel, in minutes, to automatically archive the thread after recent activity	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	sets the default auto archive duration for the channel, the default duration that the clients use (not the API)
		for newly created threads in the channel, in minutes, to automatically archive the thread after recent activity	
]]
function Channel.Prototype.setDefaultAutoArchiveDuration(self: Channel, autoArchiveDuration: number) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="autoArchiveDuration"></div>

### autoArchiveDuration

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setDefaultReactionEmoji"></div>

## Channel.Prototype.setDefaultReactionEmoji

\[\[
	sets the default reaction emoji for either a forum or media channel.

	This is the default emoji that the channel will use for the forum or media channel.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	sets the default reaction emoji for either a forum or media channel.

	This is the default emoji that the channel will use for the forum or media channel.
]]
function Channel.Prototype.setDefaultReactionEmoji(self: Channel, defaultReactionEmoji: apiTypes.DefaultReactionObject) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="defaultReactionEmoji"></div>

### defaultReactionEmoji

[apiTypes](#module.apiTypes).[DefaultReactionObject](#DefaultReactionObject)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setForumTags"></div>

## Channel.Prototype.setForumTags

\[\[
	specify channel forum tags that are available to the channel.

	This is the list of tags that the channel will use for the forum.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	specify channel forum tags that are available to the channel.

	This is the list of tags that the channel will use for the forum.
]]
function Channel.Prototype.setForumTags(self: Channel, forumTags: {apiTypes.ForumTagObject}) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="forumTags"></div>

### forumTags

\{[apiTypes](#module.apiTypes).[ForumTagObject](#ForumTagObject)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setDefaultSortOrder"></div>

## Channel.Prototype.setDefaultSortOrder

\[\[
	sets the default sort order for the channel.

	This is the sort order that the channel will use for newly created threads.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	sets the default sort order for the channel.

	This is the sort order that the channel will use for newly created threads.
]]
function Channel.Prototype.setDefaultSortOrder(self: Channel, sortOrder: channelTypes.ForumSortOrder) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="sortOrder"></div>

### sortOrder

[channelTypes](#module.channelTypes).[ForumSortOrder](#ForumSortOrder)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setDefaultForumLayout"></div>

## Channel.Prototype.setDefaultForumLayout

\[\[
	sets the default forum layout for the channel.

	This is the layout that the channel will use for newly created threads.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	sets the default forum layout for the channel.

	This is the layout that the channel will use for newly created threads.
]]
function Channel.Prototype.setDefaultForumLayout(self: Channel, forumLayout: channelTypes.ForumLayout) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="forumLayout"></div>

### forumLayout

[channelTypes](#module.channelTypes).[ForumLayout](#ForumLayout)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setDefaultThreadRateLimitPerUser"></div>

## Channel.Prototype.setDefaultThreadRateLimitPerUser

\[\[
	sets the default thread rate limit per user for the channel.

	This is the amount of seconds a user has to wait before sending another message in the thread,
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	sets the default thread rate limit per user for the channel.

	This is the amount of seconds a user has to wait before sending another message in the thread,
]]
function Channel.Prototype.setDefaultThreadRateLimitPerUser(self: Channel, threadRateLimitPerUser: number) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="threadRateLimitPerUser"></div>

### threadRateLimitPerUser

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setFlags"></div>

## Channel.Prototype.setFlags

\[\[
	Sets the channel flags using a bitfield value.

	The flags control various channel settings and behaviors.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the channel flags using a bitfield value.

	The flags control various channel settings and behaviors.
]]
function Channel.Prototype.setFlags(self: Channel, bitflags: number) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="bitflags"></div>

### bitflags

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.setIcon"></div>

## Channel.Prototype.setIcon

\[\[
	Sets the channel icon using the provided icon data.

	The icon data should be a base64 encoded image string.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the channel icon using the provided icon data.

	The icon data should be a base64 encoded image string.
]]
function Channel.Prototype.setIcon(self: Channel, iconData: string) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="iconData"></div>

### iconData

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)<div id="Channel.Prototype.build"></div>

## Channel.Prototype.build

\[\[
	Responsible for buillding the channel object that the Discord API can understand.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for buillding the channel object that the Discord API can understand.
]]
function Channel.Prototype.build(self: Channel) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Channel.Interface.new"></div>

## Channel.Interface.new

\[\[
	Constructor for the Discord Channel Builder.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Constructor for the Discord Channel Builder.
]]
function Channel.Interface.new(resource: {
		channelName: string?,

		channelType: channelTypes.ChannelType?,

		channelPosition: number?,

		channelPermissionOverwrites: {apiTypes.OverwriteObject}?
	}?) -> Channel end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{channelName: [string](#string)?, channelType: [channelTypes](#module.channelTypes).[ChannelType](#ChannelType)?, channelPosition: [number](#number)?, channelPermissionOverwrites: \{[apiTypes](#module.apiTypes).[OverwriteObject](#OverwriteObject)\}?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Channel](#Channel)