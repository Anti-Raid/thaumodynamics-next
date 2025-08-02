---
title: "@discord-types/channel"
description: "API reference for @discord-types/channel"
---

<div id="@discord-types/channel"></div>

# @discord-types/channel

<div id="Types"></div>

## Types

<div id="ChannelType"></div>

## ChannelType

<details>
<summary>Raw Type</summary>

```luau
type ChannelType = "GuildText" | "DM" | "GuildVoice" | "GroupDM" | "GuildCategory" | "GuildAnnouncement" | "AnnouncementThread" | "PublicThread" | "PrivateThread" | "GuildStageVoice" | "GuildDirectory" | "GuildForum" | "GuildMedia"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"GuildText"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"DM"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"GuildVoice"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"GroupDM"
```

</details>

<details>
<summary>Variant 5</summary>

```luau
"GuildCategory"
```

</details>

<details>
<summary>Variant 6</summary>

```luau
"GuildAnnouncement"
```

</details>

<details>
<summary>Variant 7</summary>

```luau
"AnnouncementThread"
```

</details>

<details>
<summary>Variant 8</summary>

```luau
"PublicThread"
```

</details>

<details>
<summary>Variant 9</summary>

```luau
"PrivateThread"
```

</details>

<details>
<summary>Variant 10</summary>

```luau
"GuildStageVoice"
```

</details>

<details>
<summary>Variant 11</summary>

```luau
"GuildDirectory"
```

</details>

<details>
<summary>Variant 12</summary>

```luau
"GuildForum"
```

</details>

<details>
<summary>Variant 13</summary>

```luau
"GuildMedia"
```

</details>

<div id="MediaSortOrder"></div>

## MediaSortOrder

<details>
<summary>Raw Type</summary>

```luau
type MediaSortOrder = "LatestActivity" | "CreationDate"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"LatestActivity"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"CreationDate"
```

</details>

<div id="ForumSortOrder"></div>

## ForumSortOrder

<details>
<summary>Raw Type</summary>

```luau
type ForumSortOrder = "LatestActivity" | "CreationDate"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"LatestActivity"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"CreationDate"
```

</details>

<div id="ForumLayout"></div>

## ForumLayout

<details>
<summary>Raw Type</summary>

```luau
type ForumLayout = "NotSet" | "ListView" | "GalleryView"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"NotSet"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"ListView"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"GalleryView"
```

</details>

<div id="VideoQualityMode"></div>

## VideoQualityMode

<details>
<summary>Raw Type</summary>

```luau
type VideoQualityMode = "Auto" | "Full"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Auto"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Full"
```

</details>

<div id="SelectMenuType"></div>

## SelectMenuType

<details>
<summary>Raw Type</summary>

```luau
type SelectMenuType = "String" | "Text" | "User" | "Role" | "Mentionable" | "Channel"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"String"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Text"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"User"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"Role"
```

</details>

<details>
<summary>Variant 5</summary>

```luau
"Mentionable"
```

</details>

<details>
<summary>Variant 6</summary>

```luau
"Channel"
```

</details>

<div id="AbstractChannel"></div>

## AbstractChannel

<details>
<summary>Raw Type</summary>

```luau
type AbstractChannel = {
	id: apiTypes.Snowflake?,

	type: ChannelType,

	guild_id: apiTypes.Snowflake?,

	position: number,

	permission_overwrites: {apiTypes.OverwriteObject},

	name: string,

	topic: string?,

	nsfw: boolean?,

	last_message_id: apiTypes.Snowflake?,

	bitrate: number?,

	user_limit: number?,

	rate_limit_per_user: number?,

	recipients: {apiTypes.UserObject}?,

	icon: string?,

	owner_id: apiTypes.Snowflake?,

	application_id: apiTypes.Snowflake?,

	managed: boolean?,

	parent_id: apiTypes.Snowflake?,

	last_pin_timestamp: string?,

	rtc_region: string?,

	video_quality_mode: VideoQualityMode?,

	message_count: number?,

	member_count: number?,

	thread_metadata: apiTypes.ThreadMetadataObject?,

	member: apiTypes.ThreadMemberObject?,

	default_auto_archive_duration: number?,

	permissions: string?,

	flags: apiTypes.ChannelFlags?,

	total_message_sent: number?,

	available_tags: {apiTypes.ForumTagObject}?,

	applied_tags: {apiTypes.Snowflake}?,

	default_reaction_emoji: apiTypes.DefaultReactionObject?,

	default_thread_rate_limit_per_user: number?,

	default_sort_order: apiTypes.SortOrderType?,

	default_forum_layout: apiTypes.ForumLayoutType?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"type": {
			type: "[ChannelType](#ChannelType)",
			description: "",
			required: true
		},
		"guild_id": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"position": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"permission_overwrites": {
			type: "\{[apiTypes](#module.apiTypes).[OverwriteObject](#OverwriteObject)\}",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"topic": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"nsfw": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"last_message_id": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"bitrate": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"user_limit": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"rate_limit_per_user": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"recipients": {
			type: "\{[apiTypes](#module.apiTypes).[UserObject](#UserObject)\}?",
			description: "",
			required: false
		},
		"icon": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"owner_id": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"application_id": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"managed": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"parent_id": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"last_pin_timestamp": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"rtc_region": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"video_quality_mode": {
			type: "[VideoQualityMode](#VideoQualityMode)?",
			description: "",
			required: false
		},
		"message_count": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"member_count": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"thread_metadata": {
			type: "[apiTypes](#module.apiTypes).[ThreadMetadataObject](#ThreadMetadataObject)?",
			description: "",
			required: false
		},
		"member": {
			type: "[apiTypes](#module.apiTypes).[ThreadMemberObject](#ThreadMemberObject)?",
			description: "",
			required: false
		},
		"default_auto_archive_duration": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"permissions": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"flags": {
			type: "[apiTypes](#module.apiTypes).[ChannelFlags](#ChannelFlags)?",
			description: "",
			required: false
		},
		"total_message_sent": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"available_tags": {
			type: "\{[apiTypes](#module.apiTypes).[ForumTagObject](#ForumTagObject)\}?",
			description: "",
			required: false
		},
		"applied_tags": {
			type: "\{[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)\}?",
			description: "",
			required: false
		},
		"default_reaction_emoji": {
			type: "[apiTypes](#module.apiTypes).[DefaultReactionObject](#DefaultReactionObject)?",
			description: "",
			required: false
		},
		"default_thread_rate_limit_per_user": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"default_sort_order": {
			type: "[apiTypes](#module.apiTypes).[SortOrderType](#SortOrderType)?",
			description: "",
			required: false
		},
		"default_forum_layout": {
			type: "[apiTypes](#module.apiTypes).[ForumLayoutType](#ForumLayoutType)?",
			description: "",
			required: false
		},
	}}
/>
