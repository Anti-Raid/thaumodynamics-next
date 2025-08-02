---
title: "@discord-types/restTypes"
description: "API reference for @discord-types/restTypes"
---

<div id="@discord-types/restTypes"></div>

# @discord-types/restTypes

<div id="Types"></div>

## Types

<div id="Response"></div>

## Response

\[\[ Base \]\] --

<details>
<summary>Raw Type</summary>

```luau
-- [[ Base ]] --
type Response<DATA> = DATA
```

</details>

[DATA](#DATA)

<div id="Request"></div>

## Request

<details>
<summary>Raw Type</summary>

```luau
type Request<DATA> = DATA
```

</details>

[DATA](#DATA)

<div id="CreateMessageAttachment"></div>

## CreateMessageAttachment

An attachment in a message

<details>
<summary>Raw Type</summary>

```luau
--- An attachment in a message
type CreateMessageAttachment = {
	--- The filename of the attachment
	filename: string,

	--- The description (if any) of the attachment
	description: string?,

	--- The content of the attachment
	content: {number}
}
```

</details>

<TypeTable
	type={{
		"filename": {
			type: "[string](#string)",
			description: "The filename of the attachment",
			required: true
		},
		"description": {
			type: "[string](#string)?",
			description: "The description (if any) of the attachment",
			required: false
		},
		"content": {
			type: "\{[number](#number)\}",
			description: "The content of the attachment",
			required: true
		},
	}}
/>
<div id="CreateInteractionRequest"></div>

## CreateInteractionRequest

\[\[ Requests \]\] --

https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response

<details>
<summary>Raw Type</summary>

```luau
-- [[ Requests ]] --
-- https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response
type CreateInteractionRequest = Request<objects.InteractionResponseObject>
```

</details>

[Request](#Request)&lt;[objects](#module.objects).[InteractionResponseObject](#InteractionResponseObject)&gt;<div id="EditOriginalInteractionRequest"></div>

## EditOriginalInteractionRequest

https://discord.com/developers/docs/interactions/receiving-and-responding#edit-original-interaction-response

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#edit-original-interaction-response
type EditOriginalInteractionRequest = Request<objects.Partial<objects.MessageObject>>
```

</details>

[Request](#Request)&lt;[objects](#module.objects).[Partial](#Partial)&lt;[objects](#module.objects).[MessageObject](#MessageObject)&gt;&gt;<div id="CreateFollowupMessageRequest"></div>

## CreateFollowupMessageRequest

https://discord.com/developers/docs/interactions/receiving-and-responding#create-followup-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#create-followup-message
type CreateFollowupMessageRequest = Request<objects.Partial<objects.MessageObject>>
```

</details>

[Request](#Request)&lt;[objects](#module.objects).[Partial](#Partial)&lt;[objects](#module.objects).[MessageObject](#MessageObject)&gt;&gt;<div id="EditFollowupMessageRequest"></div>

## EditFollowupMessageRequest

https://discord.com/developers/docs/interactions/receiving-and-responding#edit-followup-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#edit-followup-message
type EditFollowupMessageRequest = Request<objects.Partial<objects.MessageObject>>
```

</details>

[Request](#Request)&lt;[objects](#module.objects).[Partial](#Partial)&lt;[objects](#module.objects).[MessageObject](#MessageObject)&gt;&gt;<div id="CreateAutoModerationRuleRequest"></div>

## CreateAutoModerationRuleRequest

https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule
type CreateAutoModerationRuleRequest = Request<{
	name: string,

	-- the rule name
	event_type: objects.AutomoderationRuleEventType,

	-- the event type
	trigger_type: objects.AutomoderationRuleTriggerType,

	-- the trigger type
	trigger_metadata: objects.AutomoderationRuleTriggerMetadataObject?,

	-- the trigger metadata
	actions: {objects.AutomoderationActionObject},

	-- the actions which will execute when the rule is triggered
	enabled: boolean?,

	-- whether the rule is enabled (False by default)
	exempt_roles: {objects.Snowflake}?,

	-- the role ids that should not be affected by the rule (Maximum of 20)
	exempt_channels: {objects.Snowflake}?
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), event_type: [objects](#module.objects).[AutomoderationRuleEventType](#AutomoderationRuleEventType), trigger_type: [objects](#module.objects).[AutomoderationRuleTriggerType](#AutomoderationRuleTriggerType), trigger_metadata: [objects](#module.objects).[AutomoderationRuleTriggerMetadataObject](#AutomoderationRuleTriggerMetadataObject)?, actions: \{[objects](#module.objects).[AutomoderationActionObject](#AutomoderationActionObject)\}, enabled: [boolean](#boolean)?, exempt_roles: \{[objects](#module.objects).[Snowflake](#Snowflake)\}?, exempt_channels: \{[objects](#module.objects).[Snowflake](#Snowflake)\}?\}&gt;<div id="ModifyAutoModerationRuleRequest"></div>

## ModifyAutoModerationRuleRequest

https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule
type ModifyAutoModerationRuleRequest = Request<{
	name: string,

	-- the rule name
	event_type: objects.AutomoderationRuleEventType,

	-- the event type
	trigger_metadata: objects.AutomoderationRuleTriggerMetadataObject?,

	-- the trigger metadata
	actions: {objects.AutomoderationActionObject},

	-- the actions which will execute when the rule is triggered
	enabled: boolean?,

	-- whether the rule is enabled (False by default)
	exempt_roles: {objects.Snowflake}?,

	-- the role ids that should not be affected by the rule (Maximum of 20)
	exempt_channels: {objects.Snowflake}?
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), event_type: [objects](#module.objects).[AutomoderationRuleEventType](#AutomoderationRuleEventType), trigger_metadata: [objects](#module.objects).[AutomoderationRuleTriggerMetadataObject](#AutomoderationRuleTriggerMetadataObject)?, actions: \{[objects](#module.objects).[AutomoderationActionObject](#AutomoderationActionObject)\}, enabled: [boolean](#boolean)?, exempt_roles: \{[objects](#module.objects).[Snowflake](#Snowflake)\}?, exempt_channels: \{[objects](#module.objects).[Snowflake](#Snowflake)\}?\}&gt;<div id="EditCurrentApplicationRequest"></div>

## EditCurrentApplicationRequest

https://discord.com/developers/docs/resources/application#edit-current-application

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/application#edit-current-application
type EditCurrentApplicationRequest = Request<{
	custom_install_url: string,

	-- Default custom authorization URL for the app, if enabled
	description: string,

	-- Description of the app
	role_connections_verification_url: string,

	-- Role connection verification URL for the app
	install_params: objects.InstallParamsObject,

	-- Settings for the app's default in-app authorization link, if enabled
	integration_types_config: {
		[objects.IntegrationType]: unknown
	},

	-- In preview. Default scopes and permissions for each supported installation context. Value for each key is an integration type configuration object
	flags: number,

	-- App's public flags
	icon: string?,

	-- Icon for the app
	cover_image: string?,

	-- Default rich presence invite cover image for the app
	interactions_endpoint_url: string,

	-- Interactions endpoint URL for the app
	tags: {string}
}>
```

</details>

[Request](#Request)&lt;\{custom_install_url: [string](#string), description: [string](#string), role_connections_verification_url: [string](#string), install_params: [objects](#module.objects).[InstallParamsObject](#InstallParamsObject), integration_types_config: \{[objects.IntegrationType]: [unknown](#unknown)\}, flags: [number](#number), icon: [string](#string)?, cover_image: [string](#string)?, interactions_endpoint_url: [string](#string), tags: \{[string](#string)\}\}&gt;<div id="ModifyChannelRequest"></div>

## ModifyChannelRequest

https://discord.com/developers/docs/resources/channel#modify-channel

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#modify-channel
type ModifyChannelRequest = Request<{
	name: string?,

	-- 1-100 character channel name
	type: objects.ChannelType?,

	-- the type of channel; only conversion between text and announcement is supported and only in guilds with the "NEWS" feature
	icon: string?,

	-- (if a group DM, the base64 encoded icon for the group DM)
	position: number?,

	-- the position of the channel in the left-hand listing (channels with the same position are sorted by id)
	topic: string?,

	-- 0-1024 character channel topic (0-4096 characters for GUILD_FORUM and GUILD_MEDIA channels)
	nsfw: boolean?,

	-- whether the channel is nsfw
	rate_limit_per_user: number?,

	-- amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected
	bitrate: number?,

	-- the bitrate (in bits) of the voice or stage channel; min 8000
	user_limit: number?,

	-- the user limit of the voice or stage channel, max 99 for voice channels and 10,000 for stage channels (0 refers to no limit)
	permission_overwrites: {objects.OverwriteObject}?,

	-- channel or category-specific permissions
	parent_id: objects.Snowflake?,

	-- id of the new parent category for a channel
	rtc_region: string?,

	-- channel voice region id, automatic when set to null
	video_quality_mode: objects.VideoQualityMode?,

	-- the camera video quality mode of the voice channel
	default_auto_archive_duration: number?,

	-- the default duration that the clients use (not the API) for newly created threads in the channel, in minutes, to automatically archive the thread after recent activity
	flags: number?,

	-- channel flags combined as a bitfield. Currently only REQUIRE_TAG (1 << 4) is supported by GUILD_FORUM and GUILD_MEDIA channels. HIDE_MEDIA_DOWNLOAD_OPTIONS (1 << 15) is supported only by GUILD_MEDIA channels
	available_tags: {objects.ForumTagObject}?,

	-- the set of tags that can be used in a GUILD_FORUM or a GUILD_MEDIA channel; limited to 20
	default_reaction_emoji: objects.DefaultReactionObject?,

	-- the emoji to show in the add reaction button on a thread in a GUILD_FORUM or a GUILD_MEDIA channel
	default_thread_rate_limit_per_user: number?,

	-- the initial rate_limit_per_user to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update.
	default_sort_order: objects.SortOrderType?,

	-- the default sort order type used to order posts in GUILD_FORUM and GUILD_MEDIA channels
	default_forum_layout: objects.ForumLayoutType?,

	-- the default forum layout type used to display posts in GUILD_FORUM channels
	archived: boolean?,

	-- whether the thread is archived
	auto_archive_duration: number?,

	-- the thread will stop showing in the channel list after auto_archive_duration minutes of inactivity, can be set to: 60, 1440, 4320, 10080
	locked: boolean?,

	-- whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it
	invitable: boolean?,

	-- whether non-moderators can add other non-moderators to a thread; only available on private threads
	applied_tags: {objects.Snowflake}?
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string)?, type: [objects](#module.objects).[ChannelType](#ChannelType)?, icon: [string](#string)?, position: [number](#number)?, topic: [string](#string)?, nsfw: [boolean](#boolean)?, rate_limit_per_user: [number](#number)?, bitrate: [number](#number)?, user_limit: [number](#number)?, permission_overwrites: \{[objects](#module.objects).[OverwriteObject](#OverwriteObject)\}?, parent_id: [objects](#module.objects).[Snowflake](#Snowflake)?, rtc_region: [string](#string)?, video_quality_mode: [objects](#module.objects).[VideoQualityMode](#VideoQualityMode)?, default_auto_archive_duration: [number](#number)?, flags: [number](#number)?, available_tags: \{[objects](#module.objects).[ForumTagObject](#ForumTagObject)\}?, default_reaction_emoji: [objects](#module.objects).[DefaultReactionObject](#DefaultReactionObject)?, default_thread_rate_limit_per_user: [number](#number)?, default_sort_order: [objects](#module.objects).[SortOrderType](#SortOrderType)?, default_forum_layout: [objects](#module.objects).[ForumLayoutType](#ForumLayoutType)?, archived: [boolean](#boolean)?, auto_archive_duration: [number](#number)?, locked: [boolean](#boolean)?, invitable: [boolean](#boolean)?, applied_tags: \{[objects](#module.objects).[Snowflake](#Snowflake)\}?\}&gt;<div id="CreateMessageRequest"></div>

## CreateMessageRequest

https://discord.com/developers/docs/resources/channel#create-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#create-message
type CreateMessageRequest = Request<{
	content: string?,

	-- Message contents (up to 2000 characters)
	nonce: (string | number)?,

	-- Can be used to verify a message was sent (up to 25 characters). Value will appear in the Message Create event.
	tts: boolean?,

	-- true if this is a TTS message
	embeds: {objects.EmbedObject}?,

	-- Up to 10 rich embeds (up to 6000 characters)
	allowed_mentions: objects.AllowedMentionObject?,

	-- Allowed mentions for the message
	message_reference: objects.MessageReferenceObject?,

	-- Include to make your message a reply or a forward
	components: {objects.ComponentObjects}?,

	-- Components to include with the message
	sticker_ids: {objects.Snowflake}?,

	-- IDs of up to 3 stickers in the server to send in the message
	-- files: { },
	-- payload_json: string,
	attachments: {CreateMessageAttachment}?,

	-- Attachment objects with filename and description. See Uploading Files
	flags: number?,

	-- Message flags combined as a bitfield (only SUPPRESS_EMBEDS and SUPPRESS_NOTIFICATIONS can be set)
	enforce_nonce: boolean?,

	-- If true and nonce is present, it will be checked for uniqueness in the past few minutes. If another message was created by the same author with the same nonce, that message will be returned and no new message will be created.
	poll: objects.PollObject?
}>
```

</details>

[Request](#Request)&lt;\{content: [string](#string)?, nonce: ([string](#string) | [number](#number))?, tts: [boolean](#boolean)?, embeds: \{[objects](#module.objects).[EmbedObject](#EmbedObject)\}?, allowed_mentions: [objects](#module.objects).[AllowedMentionObject](#AllowedMentionObject)?, message_reference: [objects](#module.objects).[MessageReferenceObject](#MessageReferenceObject)?, components: \{[objects](#module.objects).[ComponentObjects](#ComponentObjects)\}?, sticker_ids: \{[objects](#module.objects).[Snowflake](#Snowflake)\}?, attachments: \{[CreateMessageAttachment](#CreateMessageAttachment)\}?, flags: [number](#number)?, enforce_nonce: [boolean](#boolean)?, poll: [objects](#module.objects).[PollObject](#PollObject)?\}&gt;<div id="EditMessageRequest"></div>

## EditMessageRequest

https://discord.com/developers/docs/resources/channel#edit-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#edit-message
type EditMessageRequest = Request<{
	content: string?,

	-- Message contents (up to 2000 characters)
	embeds: {objects.EmbedObject}?,

	-- Up to 10 rich embeds (up to 6000 characters)
	allowed_mentions: {objects.AllowedMentionObject}?,

	-- Allowed mentions for the message
	components: {objects.ComponentObjects}?,

	-- Components to include with the message
	-- files: { },
	-- payload_json: string,
	attachments: {CreateMessageAttachment}?,

	-- Attachment objects with filename and description. See Uploading Files
	flags: number?
}>
```

</details>

[Request](#Request)&lt;\{content: [string](#string)?, embeds: \{[objects](#module.objects).[EmbedObject](#EmbedObject)\}?, allowed_mentions: \{[objects](#module.objects).[AllowedMentionObject](#AllowedMentionObject)\}?, components: \{[objects](#module.objects).[ComponentObjects](#ComponentObjects)\}?, attachments: \{[CreateMessageAttachment](#CreateMessageAttachment)\}?, flags: [number](#number)?\}&gt;<div id="CreateChannelInviteRequest"></div>

## CreateChannelInviteRequest

https://discord.com/developers/docs/resources/channel#create-channel-invite

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#create-channel-invite
type CreateChannelInviteRequest = Request<{
	max_age: number?,

	-- duration of invite in seconds before expiry, or 0 for never. between 0 and 604800 (7 days)
	max_uses: number?,

	-- max number of uses or 0 for unlimited. between 0 and 100
	temporary: boolean?,

	-- whether this invite only grants temporary membership
	unique: boolean?,

	-- if true, don't try to reuse a similar invite (useful for creating many unique one time use invites)
	target_type: objects.InviteTargetTypes?,

	-- the type of target for this voice channel invite
	target_user_id: objects.Snowflake?,

	-- the id of the user whose stream to display for this invite, required if target_type is 1, the user must be streaming in the channel
	target_application_id: objects.Snowflake?
}>
```

</details>

[Request](#Request)&lt;\{max_age: [number](#number)?, max_uses: [number](#number)?, temporary: [boolean](#boolean)?, unique: [boolean](#boolean)?, target_type: [objects](#module.objects).[InviteTargetTypes](#InviteTargetTypes)?, target_user_id: [objects](#module.objects).[Snowflake](#Snowflake)?, target_application_id: [objects](#module.objects).[Snowflake](#Snowflake)?\}&gt;<div id="BulkDeleteMessagesRequest"></div>

## BulkDeleteMessagesRequest

https://discord.com/developers/docs/resources/channel#bulk-delete-messages

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#bulk-delete-messages
type BulkDeleteMessagesRequest = Request<{
	messages: {objects.Snowflake}
}>
```

</details>

[Request](#Request)&lt;\{messages: \{[objects](#module.objects).[Snowflake](#Snowflake)\}\}&gt;<div id="FollowAnnouncementChannelRequest"></div>

## FollowAnnouncementChannelRequest

https://discord.com/developers/docs/resources/channel#follow-announcement-channel

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#follow-announcement-channel
type FollowAnnouncementChannelRequest = Request<{
	webhook_channel_id: objects.Snowflake
}>
```

</details>

[Request](#Request)&lt;\{webhook_channel_id: [objects](#module.objects).[Snowflake](#Snowflake)\}&gt;<div id="GroupDMAddRecipientRequest"></div>

## GroupDMAddRecipientRequest

https://discord.com/developers/docs/resources/channel#group-dm-add-recipient

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#group-dm-add-recipient
type GroupDMAddRecipientRequest = Request<{
	access_token: string,

	-- access token of a user that has granted your app the gdm.join scope
	nick: string
}>
```

</details>

[Request](#Request)&lt;\{access_token: [string](#string), nick: [string](#string)\}&gt;<div id="StartThreadFromMessageRequest"></div>

## StartThreadFromMessageRequest

https://discord.com/developers/docs/resources/channel#start-thread-from-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#start-thread-from-message
type StartThreadFromMessageRequest = Request<{
	name: string,

	-- 1-100 character channel name
	auto_archive_duration: number?,

	-- the thread will stop showing in the channel list after auto_archive_duration minutes of inactivity, can be set to: 60, 1440, 4320, 10080
	rate_limit_per_user: number?
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), auto_archive_duration: [number](#number)?, rate_limit_per_user: [number](#number)?\}&gt;<div id="StartThreadWithoutMessageRequest"></div>

## StartThreadWithoutMessageRequest

https://discord.com/developers/docs/resources/channel#start-thread-without-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#start-thread-without-message
type StartThreadWithoutMessageRequest = Request<{
	name: string,

	-- 1-100 character channel name
	auto_archive_duration: number?,

	-- the thread will stop showing in the channel list after auto_archive_duration minutes of inactivity, can be set to: 60, 1440, 4320, 10080
	type: objects.ChannelType?,

	-- the type of thread to create
	invitable: boolean?,

	-- whether non-moderators can add other non-moderators to a thread; only available when creating a private thread
	rate_limit_per_user: number?
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), auto_archive_duration: [number](#number)?, type: [objects](#module.objects).[ChannelType](#ChannelType)?, invitable: [boolean](#boolean)?, rate_limit_per_user: [number](#number)?\}&gt;<div id="StartThreadInForumOrMediaChannelRequest"></div>

## StartThreadInForumOrMediaChannelRequest

https://discord.com/developers/docs/resources/channel#start-thread-in-forum-or-media-channel

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#start-thread-in-forum-or-media-channel
type StartThreadInForumOrMediaChannelRequest = Request<{
	name: string,

	-- 1-100 character channel name
	auto_archive_duration: number?,

	-- the thread will stop showing in the channel list after auto_archive_duration minutes of inactivity, can be set to: 60, 1440, 4320, 10080
	rate_limit_per_user: number?,

	-- amount of seconds a user has to wait before sending another message (0-21600)
	--files: { },
	-- payload_json: string,
	applied_tags: {objects.Snowflake}?,

	-- the IDs of the set of tags that have been applied to a thread in a GUILD_FORUM or a GUILD_MEDIA channel
	message: objects.ForumAndMediaThreadMessageObject?
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), auto_archive_duration: [number](#number)?, rate_limit_per_user: [number](#number)?, applied_tags: \{[objects](#module.objects).[Snowflake](#Snowflake)\}?, message: [objects](#module.objects).[ForumAndMediaThreadMessageObject](#ForumAndMediaThreadMessageObject)?\}&gt;<div id="CreateGuildEmojiRequest"></div>

## CreateGuildEmojiRequest

https://discord.com/developers/docs/resources/emoji#create-guild-emoji

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/emoji#create-guild-emoji
type CreateGuildEmojiRequest = Request<{
	name: string,

	-- name of the emoji
	image: string,

	-- the 128x128 emoji image
	roles: {objects.Snowflake}
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), image: [string](#string), roles: \{[objects](#module.objects).[Snowflake](#Snowflake)\}\}&gt;<div id="ModifyGuildEmojiRequest"></div>

## ModifyGuildEmojiRequest

https://discord.com/developers/docs/resources/emoji#modify-guild-emoji

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/emoji#modify-guild-emoji
type ModifyGuildEmojiRequest = Request<{
	name: string,

	-- name of the emoji
	roles: {objects.Snowflake}
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), roles: \{[objects](#module.objects).[Snowflake](#Snowflake)\}\}&gt;<div id="CreateGuildRequest"></div>

## CreateGuildRequest

https://discord.com/developers/docs/resources/guild#create-guild

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#create-guild
type CreateGuildRequest = Request<{
	name: string,

	-- name of the guild (2-100 characters)
	region: string?,

	-- voice region id (deprecated)
	icon: string?,

	-- base64 128x128 image for the guild icon
	verification_level: objects.VerificationLevel?,

	-- verification level
	default_message_notifications: objects.DefaultMessageNotification?,

	-- default message notification level
	explicit_content_filter: objects.ExplicitContentFilterLevel?,

	-- explicit content filter level
	roles: {objects.GuildRoleObject}?,

	-- new guild roles
	channels: {objects.ChannelObject}?,

	-- new guild's channels
	afk_channel_id: objects.Snowflake?,

	-- id for afk channel
	afk_timeout: number?,

	-- afk timeout in seconds, can be set to: 60, 300, 900, 1800, 3600
	system_channel_id: objects.Snowflake?,

	-- the id of the channel where guild notices such as welcome messages and boost events are posted
	system_channel_flags: objects.SystemChannelFlags?
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), region: [string](#string)?, icon: [string](#string)?, verification_level: [objects](#module.objects).[VerificationLevel](#VerificationLevel)?, default_message_notifications: [objects](#module.objects).[DefaultMessageNotification](#DefaultMessageNotification)?, explicit_content_filter: [objects](#module.objects).[ExplicitContentFilterLevel](#ExplicitContentFilterLevel)?, roles: \{[objects](#module.objects).[GuildRoleObject](#GuildRoleObject)\}?, channels: \{[objects](#module.objects).[ChannelObject](#ChannelObject)\}?, afk_channel_id: [objects](#module.objects).[Snowflake](#Snowflake)?, afk_timeout: [number](#number)?, system_channel_id: [objects](#module.objects).[Snowflake](#Snowflake)?, system_channel_flags: [objects](#module.objects).[SystemChannelFlags](#SystemChannelFlags)?\}&gt;<div id="ModifyGuildRequest"></div>

## ModifyGuildRequest

https://discord.com/developers/docs/resources/guild#modify-guild

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild
type ModifyGuildRequest = Request<objects.Partial<{
	name: string,

	-- guild name
	verification_level: objects.VerificationLevel?,

	-- verification level
	default_message_notifications: objects.DefaultMessageNotification?,

	-- default message notification level
	explicit_content_filter: objects.ExplicitContentFilterLevel?,

	-- explicit content filter level
	afk_channel_id: objects.Snowflake?,

	-- id for afk channel
	afk_timeout: number?,

	-- afk timeout in seconds, can be set to: 60, 300, 900, 1800, 3600
	icon: string?,

	-- base64 1024x1024 png/jpeg/gif image for the guild icon (can be animated gif when the server has the ANIMATED_ICON feature)
	owner_id: objects.Snowflake,

	-- user id to transfer guild ownership to (must be owner)
	splash: string?,

	-- base64 16:9 png/jpeg image for the guild splash (when the server has the INVITE_SPLASH feature)
	discovery_splash: string?,

	-- base64 16:9 png/jpeg image for the guild discovery splash (when the server has the DISCOVERABLE feature)
	banner: string?,

	-- base64 16:9 png/jpeg image for the guild banner (when the server has the BANNER feature; can be animated gif when the server has the ANIMATED_BANNER feature)
	system_channel_id: objects.Snowflake?,

	-- the id of the channel where guild notices such as welcome messages and boost events are posted
	system_channel_flags: objects.SystemChannelFlags?,

	-- system channel flags
	rules_channel_id: objects.Snowflake?,

	-- the id of the channel where Community guilds display rules and/or guidelines
	public_updates_channel_id: objects.Snowflake?,

	-- the id of the channel where admins and moderators of Community guilds receive notices from Discord
	preferred_locale: objects.LanguageLocales?,

	-- the preferred locale of a Community guild used in server discovery and notices from Discord; defaults to "en-US"
	features: {objects.GuildFeature}?,

	-- enabled guild features
	description: string?,

	-- the description for the guild
	premium_progress_bar_enabled: boolean?,

	-- whether the guild's boost progress bar should be enabled
	safety_alerts_channel_id: objects.Snowflake?
}>>
```

</details>

[Request](#Request)&lt;[objects](#module.objects).[Partial](#Partial)&lt;\{name: [string](#string), verification_level: [objects](#module.objects).[VerificationLevel](#VerificationLevel)?, default_message_notifications: [objects](#module.objects).[DefaultMessageNotification](#DefaultMessageNotification)?, explicit_content_filter: [objects](#module.objects).[ExplicitContentFilterLevel](#ExplicitContentFilterLevel)?, afk_channel_id: [objects](#module.objects).[Snowflake](#Snowflake)?, afk_timeout: [number](#number)?, icon: [string](#string)?, owner_id: [objects](#module.objects).[Snowflake](#Snowflake), splash: [string](#string)?, discovery_splash: [string](#string)?, banner: [string](#string)?, system_channel_id: [objects](#module.objects).[Snowflake](#Snowflake)?, system_channel_flags: [objects](#module.objects).[SystemChannelFlags](#SystemChannelFlags)?, rules_channel_id: [objects](#module.objects).[Snowflake](#Snowflake)?, public_updates_channel_id: [objects](#module.objects).[Snowflake](#Snowflake)?, preferred_locale: [objects](#module.objects).[LanguageLocales](#LanguageLocales)?, features: \{[objects](#module.objects).[GuildFeature](#GuildFeature)\}?, description: [string](#string)?, premium_progress_bar_enabled: [boolean](#boolean)?, safety_alerts_channel_id: [objects](#module.objects).[Snowflake](#Snowflake)?\}&gt;&gt;<div id="CreateGuildChannelRequest"></div>

## CreateGuildChannelRequest

https://discord.com/developers/docs/resources/guild#create-guild-channel

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#create-guild-channel
type CreateGuildChannelRequest = Request<objects.Partial<{
	name: string,

	-- channel name (1-100 characters)
	type: objects.ChannelType,

	-- the type of channel
	topic: string?,

	-- channel topic (0-1024 characters)
	bitrate: number?,

	-- the bitrate (in bits) of the voice or stage channel; min 8000
	user_limit: number?,

	-- the user limit of the voice channel
	rate_limit_per_user: number?,

	-- amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected
	position: number,

	-- sorting position of the channel (channels with the same position are sorted by id)
	permission_overwrites: {objects.OverwriteObject},

	-- the channel's permission overwrites
	parent_id: objects.Snowflake?,

	-- id of the parent category for a channel
	nsfw: boolean?,

	-- whether the channel is nsfw
	rtc_region: string?,

	-- channel voice region id of the voice or stage channel, automatic when set to null
	video_quality_mode: objects.VideoQualityMode?,

	-- the camera video quality mode of the voice channel
	default_auto_archive_duration: number?,

	-- the default duration that the clients use (not the API) for newly created threads in the channel, in minutes, to automatically archive the thread after recent activity
	default_reaction_emoji: objects.EmojiObject?,

	-- emoji to show in the add reaction button on a thread in a GUILD_FORUM or a GUILD_MEDIA channel
	available_tags: {objects.ForumTagObject}?,

	-- set of tags that can be used in a GUILD_FORUM or a GUILD_MEDIA channel
	default_sort_order: objects.SortOrderType?,

	-- the default sort order type used to order posts in GUILD_FORUM and GUILD_MEDIA channels
	default_forum_layout: objects.ForumLayoutType?,

	-- the default forum layout view used to display posts in GUILD_FORUM channels
	default_thread_rate_limit_per_user: number?
}>>
```

</details>

[Request](#Request)&lt;[objects](#module.objects).[Partial](#Partial)&lt;\{name: [string](#string), type: [objects](#module.objects).[ChannelType](#ChannelType), topic: [string](#string)?, bitrate: [number](#number)?, user_limit: [number](#number)?, rate_limit_per_user: [number](#number)?, position: [number](#number), permission_overwrites: \{[objects](#module.objects).[OverwriteObject](#OverwriteObject)\}, parent_id: [objects](#module.objects).[Snowflake](#Snowflake)?, nsfw: [boolean](#boolean)?, rtc_region: [string](#string)?, video_quality_mode: [objects](#module.objects).[VideoQualityMode](#VideoQualityMode)?, default_auto_archive_duration: [number](#number)?, default_reaction_emoji: [objects](#module.objects).[EmojiObject](#EmojiObject)?, available_tags: \{[objects](#module.objects).[ForumTagObject](#ForumTagObject)\}?, default_sort_order: [objects](#module.objects).[SortOrderType](#SortOrderType)?, default_forum_layout: [objects](#module.objects).[ForumLayoutType](#ForumLayoutType)?, default_thread_rate_limit_per_user: [number](#number)?\}&gt;&gt;<div id="ModifyGuildChannelPositionsRequest"></div>

## ModifyGuildChannelPositionsRequest

https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions
type ModifyGuildChannelPositionsRequest = Request<{{
	id: objects.Snowflake,

	-- channel id
	position: number?,

	-- sorting position of the channel (channels with the same position are sorted by id)
	lock_permissions: boolean?,

	-- syncs the permission overwrites with the new parent, if moving to a new category
	parent_id: objects.Snowflake?
}}>
```

</details>

[Request](#Request)&lt;\{\{id: [objects](#module.objects).[Snowflake](#Snowflake), position: [number](#number)?, lock_permissions: [boolean](#boolean)?, parent_id: [objects](#module.objects).[Snowflake](#Snowflake)?\}\}&gt;<div id="AddGuildMemberRequest"></div>

## AddGuildMemberRequest

https://discord.com/developers/docs/resources/guild#add-guild-member

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#add-guild-member
type AddGuildMemberRequest = Request<{
	access_token: string,

	-- an oauth2 access token granted with the guilds.join to the bot's application for the user you want to add to the guild
	nick: string?,

	-- value to set user's nickname to
	roles: {objects.Snowflake}?,

	-- array of role ids the member is assigned
	mute: boolean?,

	-- whether the user is muted in voice channels
	deaf: boolean?
}>
```

</details>

[Request](#Request)&lt;\{access_token: [string](#string), nick: [string](#string)?, roles: \{[objects](#module.objects).[Snowflake](#Snowflake)\}?, mute: [boolean](#boolean)?, deaf: [boolean](#boolean)?\}&gt;<div id="ModifyGuildMemberRequest"></div>

## ModifyGuildMemberRequest

https://discord.com/developers/docs/resources/guild#modify-guild-member

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild-member
type ModifyGuildMemberRequest = Request<{
	nick: string?,

	-- value to set user's nickname to
	roles: {objects.Snowflake}?,

	-- array of role ids the member is assigned
	mute: boolean?,

	-- whether the user is muted in voice channels. Will throw a 400 error if the user is not in a voice channel
	deaf: boolean?,

	-- whether the user is deafened in voice channels. Will throw a 400 error if the user is not in a voice channel
	channel_id: (objects.Snowflake | boolean)?,

	-- id of channel to move user to (if they are connected to voice)
	communication_disabled_until: typesext.MultiOption<string>,

	-- when the user's timeout will expire and the user will be able to communicate in the guild again (up to 28 days in the future), set to null to remove timeout. Will throw a 403 error if the user has the ADMINISTRATOR permission or is the owner of the guild
	flags: objects.GuildMemberFlags?
}>
```

</details>

[Request](#Request)&lt;\{nick: [string](#string)?, roles: \{[objects](#module.objects).[Snowflake](#Snowflake)\}?, mute: [boolean](#boolean)?, deaf: [boolean](#boolean)?, channel_id: ([objects](#module.objects).[Snowflake](#Snowflake) | [boolean](#boolean))?, communication_disabled_until: [typesext](#module.typesext).[MultiOption](#MultiOption)&lt;[string](#string)&gt;, flags: [objects](#module.objects).[GuildMemberFlags](#GuildMemberFlags)?\}&gt;<div id="ModifyCurrentMemberRequest"></div>

## ModifyCurrentMemberRequest

https://discord.com/developers/docs/resources/guild#modify-current-member

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-current-member
type ModifyCurrentMemberRequest = Request<{
	nick: string
}>
```

</details>

[Request](#Request)&lt;\{nick: [string](#string)\}&gt;<div id="CreateGuildBanRequest"></div>

## CreateGuildBanRequest

https://discord.com/developers/docs/resources/guild#create-guild-ban

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#create-guild-ban
type CreateGuildBanRequest = Request<{
	delete_message_days: number?,

	-- number of days to delete messages for (0-7) (deprecated)
	delete_message_seconds: number?
}>
```

</details>

[Request](#Request)&lt;\{delete_message_days: [number](#number)?, delete_message_seconds: [number](#number)?\}&gt;<div id="BulkGuildBanRequest"></div>

## BulkGuildBanRequest

https://discord.com/developers/docs/resources/guild#bulk-guild-ban

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#bulk-guild-ban
type BulkGuildBanRequest = Request<{
	user_ids: {objects.Snowflake},

	-- list of user ids to ban (max 200)
	delete_message_seconds: number?
}>
```

</details>

[Request](#Request)&lt;\{user_ids: \{[objects](#module.objects).[Snowflake](#Snowflake)\}, delete_message_seconds: [number](#number)?\}&gt;<div id="CreateGuildRoleRequest"></div>

## CreateGuildRoleRequest

https://discord.com/developers/docs/resources/guild#create-guild-role

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#create-guild-role
type CreateGuildRoleRequest = Request<{
	name: string?,

	-- name of the role, max 100 characters
	permissions: string?,

	-- bitwise value of the enabled/disabled permissions
	color: number?,

	-- RGB color value
	hoist: boolean?,

	-- whether the role should be displayed separately in the sidebar
	icon: string?,

	-- the role's icon image (if the guild has the ROLE_ICONS feature)
	unicode_emoji: string?,

	-- the role's unicode emoji as a standard emoji (if the guild has the ROLE_ICONS feature)
	mentionable: boolean?
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string)?, permissions: [string](#string)?, color: [number](#number)?, hoist: [boolean](#boolean)?, icon: [string](#string)?, unicode_emoji: [string](#string)?, mentionable: [boolean](#boolean)?\}&gt;<div id="ModifyGuildRolePositionsRequest"></div>

## ModifyGuildRolePositionsRequest

https://discord.com/developers/docs/resources/guild#modify-guild-role-positions

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild-role-positions
type ModifyGuildRolePositionsRequest = Request<{
	id: objects.Snowflake,

	-- the target role id
	position: number
}>
```

</details>

[Request](#Request)&lt;\{id: [objects](#module.objects).[Snowflake](#Snowflake), position: [number](#number)\}&gt;<div id="ModifyGuildRoleRequest"></div>

## ModifyGuildRoleRequest

https://discord.com/developers/docs/resources/guild#modify-guild-role

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild-role
type ModifyGuildRoleRequest = Request<{
	name: string?,

	-- name of the role, max 100 characters
	permissions: string?,

	-- bitwise value of the enabled/disabled permissions
	color: number?,

	-- RGB color value
	hoist: boolean?,

	-- whether the role should be displayed separately in the sidebar
	icon: string?,

	-- the role's icon image (if the guild has the ROLE_ICONS feature)
	unicode_emoji: string?,

	-- the role's unicode emoji as a standard emoji (if the guild has the ROLE_ICONS feature)
	mentionable: boolean?
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string)?, permissions: [string](#string)?, color: [number](#number)?, hoist: [boolean](#boolean)?, icon: [string](#string)?, unicode_emoji: [string](#string)?, mentionable: [boolean](#boolean)?\}&gt;<div id="ModifyGuildMFALevelRequest"></div>

## ModifyGuildMFALevelRequest

https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level
type ModifyGuildMFALevelRequest = Request<{
	level: objects.MFALevel
}>
```

</details>

[Request](#Request)&lt;\{level: [objects](#module.objects).[MFALevel](#MFALevel)\}&gt;<div id="BeginGuildPruneRequest"></div>

## BeginGuildPruneRequest

https://discord.com/developers/docs/resources/guild#begin-guild-prune

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#begin-guild-prune
type BeginGuildPruneRequest = Request<{
	days: number,

	-- number of days to prune (1-30)
	compute_prune_count: boolean,

	-- whether pruned is returned, discouraged for large guilds
	include_ruoles: {objects.Snowflake},

	-- role(s) to include
	reason: string?
}>
```

</details>

[Request](#Request)&lt;\{days: [number](#number), compute_prune_count: [boolean](#boolean), include_ruoles: \{[objects](#module.objects).[Snowflake](#Snowflake)\}, reason: [string](#string)?\}&gt;<div id="ModifyGuildWelcomeScreenRequest"></div>

## ModifyGuildWelcomeScreenRequest

https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen
type ModifyGuildWelcomeScreenRequest = Request<{
	enabled: boolean?,

	-- whether the welcome screen is enabled
	welcome_channels: {objects.WelcomeScreenChannelObject},

	-- channels linked in the welcome screen and their display options
	description: string?
}>
```

</details>

[Request](#Request)&lt;\{enabled: [boolean](#boolean)?, welcome_channels: \{[objects](#module.objects).[WelcomeScreenChannelObject](#WelcomeScreenChannelObject)\}, description: [string](#string)?\}&gt;<div id="ModifyGuildOnboardingRequest"></div>

## ModifyGuildOnboardingRequest

https://discord.com/developers/docs/resources/guild#modify-guild-onboarding

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild-onboarding
type ModifyGuildOnboardingRequest = Request<{
	prompts: {objects.OnboardingPromptObject}?,

	-- Prompts shown during onboarding and in customize community
	default_channel_ids: {objects.Snowflake}?,

	-- Channel IDs that members get opted into automatically
	enabled: boolean?,

	-- Whether onboarding is enabled in the guild
	mode: objects.OnboardingMode?
}>
```

</details>

[Request](#Request)&lt;\{prompts: \{[objects](#module.objects).[OnboardingPromptObject](#OnboardingPromptObject)\}?, default_channel_ids: \{[objects](#module.objects).[Snowflake](#Snowflake)\}?, enabled: [boolean](#boolean)?, mode: [objects](#module.objects).[OnboardingMode](#OnboardingMode)?\}&gt;<div id="ModifyCurrentUserVoiceStateRequest"></div>

## ModifyCurrentUserVoiceStateRequest

https://discord.com/developers/docs/resources/guild#modify-current-user-voice-state

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-current-user-voice-state
type ModifyCurrentUserVoiceStateRequest = Request<{
	channel_id: objects.Snowflake?,

	-- the id of the channel the user is currently in
	suppress: boolean?,

	-- toggles the user's suppress state
	request_to_speak_timestamp: string?
}>
```

</details>

[Request](#Request)&lt;\{channel_id: [objects](#module.objects).[Snowflake](#Snowflake)?, suppress: [boolean](#boolean)?, request_to_speak_timestamp: [string](#string)?\}&gt;<div id="ModifyUserVoiceStateRequest"></div>

## ModifyUserVoiceStateRequest

https://discord.com/developers/docs/resources/guild#modify-user-voice-state

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-user-voice-state
type ModifyUserVoiceStateRequest = Request<{
	channel_id: objects.Snowflake?,

	-- the id of the channel the user is currently in
	suppress: boolean?
}>
```

</details>

[Request](#Request)&lt;\{channel_id: [objects](#module.objects).[Snowflake](#Snowflake)?, suppress: [boolean](#boolean)?\}&gt;<div id="CreateGuildScheduledEventRequest"></div>

## CreateGuildScheduledEventRequest

https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event
type CreateGuildScheduledEventRequest = Request<{
	channel_id: objects.Snowflake?,

	-- the channel id of the scheduled event.
	entity_metadata: objects.GuildScheduledEventEntityMetadata,

	-- the entity metadata of the scheduled event
	name: string,

	-- the name of the scheduled event
	privacy_level: objects.PrivacyLevel,

	-- the privacy level of the scheduled event
	scheduled_start_time: string,

	-- the time to schedule the scheduled event
	scheduled_end_time: string?,

	-- the time when the scheduled event is scheduled to end
	description: string?,

	-- the description of the scheduled event
	entity_type: objects.GuildScheduledEventEntityType,

	-- the entity type of the scheduled event
	image: string?
}>
```

</details>

[Request](#Request)&lt;\{channel_id: [objects](#module.objects).[Snowflake](#Snowflake)?, entity_metadata: [objects](#module.objects).[GuildScheduledEventEntityMetadata](#GuildScheduledEventEntityMetadata), name: [string](#string), privacy_level: [objects](#module.objects).[PrivacyLevel](#PrivacyLevel), scheduled_start_time: [string](#string), scheduled_end_time: [string](#string)?, description: [string](#string)?, entity_type: [objects](#module.objects).[GuildScheduledEventEntityType](#GuildScheduledEventEntityType), image: [string](#string)?\}&gt;<div id="ModifyGuildScheduledEventRequest"></div>

## ModifyGuildScheduledEventRequest

https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event
type ModifyGuildScheduledEventRequest = Request<{
	channel_id: objects.Snowflake?,

	-- the channel id of the scheduled event.
	entity_metadata: objects.GuildScheduledEventEntityMetadata,

	-- the entity metadata of the scheduled event
	name: string,

	-- the name of the scheduled event
	privacy_level: objects.PrivacyLevel,

	-- the privacy level of the scheduled event
	scheduled_start_time: string,

	-- the time to schedule the scheduled event
	scheduled_end_time: string?,

	-- the time when the scheduled event is scheduled to end
	description: string?,

	-- the description of the scheduled event
	entity_type: objects.GuildScheduledEventEntityType,

	-- the entity type of the scheduled event
	status: objects.GuildScheduledEventStatus?,

	-- the status of the scheduled event
	image: string?
}>
```

</details>

[Request](#Request)&lt;\{channel_id: [objects](#module.objects).[Snowflake](#Snowflake)?, entity_metadata: [objects](#module.objects).[GuildScheduledEventEntityMetadata](#GuildScheduledEventEntityMetadata), name: [string](#string), privacy_level: [objects](#module.objects).[PrivacyLevel](#PrivacyLevel), scheduled_start_time: [string](#string), scheduled_end_time: [string](#string)?, description: [string](#string)?, entity_type: [objects](#module.objects).[GuildScheduledEventEntityType](#GuildScheduledEventEntityType), status: [objects](#module.objects).[GuildScheduledEventStatus](#GuildScheduledEventStatus)?, image: [string](#string)?\}&gt;<div id="CreateGuildFromGuildTemplateRequest"></div>

## CreateGuildFromGuildTemplateRequest

https://discord.com/developers/docs/resources/guild-template#create-guild-from-guild-template

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-template#create-guild-from-guild-template
type CreateGuildFromGuildTemplateRequest = Request<{
	name: string,

	-- name of the guild (2-100 characters)
	icon: string?
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), icon: [string](#string)?\}&gt;<div id="CreateGuildTemplateRequest"></div>

## CreateGuildTemplateRequest

https://discord.com/developers/docs/resources/guild-template#create-guild-template

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-template#create-guild-template
type CreateGuildTemplateRequest = Request<{
	name: string,

	-- name of the template (1-100 characters)
	description: string?
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), description: [string](#string)?\}&gt;<div id="ModifyGuildTemplateRequest"></div>

## ModifyGuildTemplateRequest

https://discord.com/developers/docs/resources/guild-template#modify-guild-template

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-template#modify-guild-template
type ModifyGuildTemplateRequest = Request<{
	name: string?,

	-- name of the template (1-100 characters)
	description: string?
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string)?, description: [string](#string)?\}&gt;<div id="CreateStageInstanceRequest"></div>

## CreateStageInstanceRequest

https://discord.com/developers/docs/resources/stage-instance#create-stage-instance

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/stage-instance#create-stage-instance
type CreateStageInstanceRequest = Request<{
	channel_id: objects.Snowflake,

	-- The id of the Stage channel
	topic: string,

	-- The topic of the Stage instance (1-120 characters)
	privacy_level: objects.PrivacyLevel?,

	-- The privacy level of the Stage instance (default GUILD_ONLY)
	send_start_notification: boolean?,

	-- Notify @everyone that a Stage instance has started
	guild_scheduled_event_id: objects.Snowflake?
}>
```

</details>

[Request](#Request)&lt;\{channel_id: [objects](#module.objects).[Snowflake](#Snowflake), topic: [string](#string), privacy_level: [objects](#module.objects).[PrivacyLevel](#PrivacyLevel)?, send_start_notification: [boolean](#boolean)?, guild_scheduled_event_id: [objects](#module.objects).[Snowflake](#Snowflake)?\}&gt;<div id="ModifyStageInstanceRequest"></div>

## ModifyStageInstanceRequest

https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance
type ModifyStageInstanceRequest = Request<{
	topic: string,

	-- The topic of the Stage instance (1-120 characters)
	privacy_level: objects.PrivacyLevel
}>
```

</details>

[Request](#Request)&lt;\{topic: [string](#string), privacy_level: [objects](#module.objects).[PrivacyLevel](#PrivacyLevel)\}&gt;<div id="CreateGuildStickerRequest"></div>

## CreateGuildStickerRequest

https://discord.com/developers/docs/resources/sticker#create-guild-sticker

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/sticker#create-guild-sticker
type CreateGuildStickerRequest = Request<{
	name: string,

	-- name of the sticker (2-30 characters)
	description: string,

	-- description of the sticker (empty or 2-100 characters)
	tags: {string},

	-- autocomplete/suggestion tags for the sticker (max 200 characters)
	file: string
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), description: [string](#string), tags: \{[string](#string)\}, file: [string](#string)\}&gt;<div id="ModifyGuildStickerRequest"></div>

## ModifyGuildStickerRequest

https://discord.com/developers/docs/resources/sticker#modify-guild-sticker

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/sticker#modify-guild-sticker
type ModifyGuildStickerRequest = Request<{
	name: string,

	-- name of the sticker (2-30 characters)
	description: string?,

	-- description of the sticker (2-100 characters)
	tags: string
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), description: [string](#string)?, tags: [string](#string)\}&gt;<div id="ModifyCurrentUserRequest"></div>

## ModifyCurrentUserRequest

https://discord.com/developers/docs/resources/user#modify-current-user

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#modify-current-user
type ModifyCurrentUserRequest = Request<{
	username: string,

	-- user's username, if changed may cause the user's discriminator to be randomized.
	avatar: string?,

	-- if passed, modifies the user's avatar
	banner: string?
}>
```

</details>

[Request](#Request)&lt;\{username: [string](#string), avatar: [string](#string)?, banner: [string](#string)?\}&gt;<div id="CreateDMRequest"></div>

## CreateDMRequest

https://discord.com/developers/docs/resources/user#create-dm

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#create-dm
type CreateDMRequest = Request<{
	recipient_id: objects.Snowflake
}>
```

</details>

[Request](#Request)&lt;\{recipient_id: [objects](#module.objects).[Snowflake](#Snowflake)\}&gt;<div id="CreateGroupDMRequest"></div>

## CreateGroupDMRequest

https://discord.com/developers/docs/resources/user#create-group-dm

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#create-group-dm
type CreateGroupDMRequest = Request<{
	access_tokens: {string},

	-- access tokens of users that have granted your app the gdm.join scope
	nicks: {
		[objects.Snowflake]: string
	}
}>
```

</details>

[Request](#Request)&lt;\{access_tokens: \{[string](#string)\}, nicks: \{[objects.Snowflake]: [string](#string)\}\}&gt;<div id="UpdateCurrentUserApplicationRoleConnectionRequest"></div>

## UpdateCurrentUserApplicationRoleConnectionRequest

https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection
type UpdateCurrentUserApplicationRoleConnectionRequest = Request<{
	platform_name: string?,

	-- the vanity name of the platform a bot has connected (max 50 characters)
	platform_username: string?,

	-- the username on the platform a bot has connected (max 100 characters)
	metadata: objects.ApplicationRoleConnectionMetadataObject?
}>
```

</details>

[Request](#Request)&lt;\{platform_name: [string](#string)?, platform_username: [string](#string)?, metadata: [objects](#module.objects).[ApplicationRoleConnectionMetadataObject](#ApplicationRoleConnectionMetadataObject)?\}&gt;<div id="CreateWebhookRequest"></div>

## CreateWebhookRequest

https://discord.com/developers/docs/resources/webhook#create-webhook

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#create-webhook
type CreateWebhookRequest = Request<{
	name: string,

	-- name of the webhook (1-80 characters)
	avatar: string?
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), avatar: [string](#string)?\}&gt;<div id="ModifyWebhookRequest"></div>

## ModifyWebhookRequest

https://discord.com/developers/docs/resources/webhook#modify-webhook

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#modify-webhook
type ModifyWebhookRequest = Request<{
	name: string,

	avatar: string,

	channel_id: objects.Snowflake
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), avatar: [string](#string), channel_id: [objects](#module.objects).[Snowflake](#Snowflake)\}&gt;<div id="ExecuteWebhookRequest"></div>

## ExecuteWebhookRequest

https://discord.com/developers/docs/resources/webhook#execute-webhook

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#execute-webhook
type ExecuteWebhookRequest = Request<{
	content: string,

	-- the message contents (up to 2000 characters)
	username: string,

	-- override the default username of the webhook
	avatar_url: string,

	-- override the default avatar of the webhook
	tts: boolean,

	-- true if this is a TTS message
	embeds: {objects.EmbedObject},

	-- embedded rich content
	allowed_mentions: objects.AllowedMentionObject,

	-- allowed mentions for the message
	components: {objects.ComponentObjects},

	-- the components to include with the message
	-- files: { },
	-- payload_json: string,
	attachments: {CreateMessageAttachment},

	-- attachment objects with filename and description
	flags: number,

	-- message flags combined as a bitfield (only SUPPRESS_EMBEDS and SUPPRESS_NOTIFICATIONS can be set can be set)
	thread_name: string,

	-- name of thread to create (requires the webhook channel to be a forum or media channel)
	applied_tags: {objects.Snowflake},

	-- array of tag ids to apply to the thread (requires the webhook channel to be a forum or media channel)
	poll: objects.PollObject
}>
```

</details>

[Request](#Request)&lt;\{content: [string](#string), username: [string](#string), avatar_url: [string](#string), tts: [boolean](#boolean), embeds: \{[objects](#module.objects).[EmbedObject](#EmbedObject)\}, allowed_mentions: [objects](#module.objects).[AllowedMentionObject](#AllowedMentionObject), components: \{[objects](#module.objects).[ComponentObjects](#ComponentObjects)\}, attachments: \{[CreateMessageAttachment](#CreateMessageAttachment)\}, flags: [number](#number), thread_name: [string](#string), applied_tags: \{[objects](#module.objects).[Snowflake](#Snowflake)\}, poll: [objects](#module.objects).[PollObject](#PollObject)\}&gt;<div id="ExecuteSlackCompatibleWebhookRequest"></div>

## ExecuteSlackCompatibleWebhookRequest

https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook
type ExecuteSlackCompatibleWebhookRequest = Request<{}>
```

</details>

[Request](#Request)&lt;\{\}&gt;<div id="ExecuteGithubCompatibleWebhookRequest"></div>

## ExecuteGithubCompatibleWebhookRequest

https://discord.com/developers/docs/resources/webhook#execute-githubcompatible-webhook

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#execute-githubcompatible-webhook
type ExecuteGithubCompatibleWebhookRequest = Request<{}>
```

</details>

[Request](#Request)&lt;\{\}&gt;<div id="EditWebhookMessageRequest"></div>

## EditWebhookMessageRequest

https://discord.com/developers/docs/resources/webhook#edit-webhook-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#edit-webhook-message
type EditWebhookMessageRequest = Request<{
	content: string,

	-- the message contents (up to 2000 characters)
	embeds: {objects.EmbedObject},

	-- embedded rich content
	allowed_mentions: objects.AllowedMentionObject,

	-- allowed mentions for the message
	components: {objects.ComponentObjects},

	-- the components to include with the message
	-- files: { },
	-- payload_json: string,
	attachments: {CreateMessageAttachment},

	-- attached files to keep and possible descriptions for new files
	poll: objects.PollObject?
}>
```

</details>

[Request](#Request)&lt;\{content: [string](#string), embeds: \{[objects](#module.objects).[EmbedObject](#EmbedObject)\}, allowed_mentions: [objects](#module.objects).[AllowedMentionObject](#AllowedMentionObject), components: \{[objects](#module.objects).[ComponentObjects](#ComponentObjects)\}, attachments: \{[CreateMessageAttachment](#CreateMessageAttachment)\}, poll: [objects](#module.objects).[PollObject](#PollObject)?\}&gt;<div id="EditChannelPermissionsRequest"></div>

## EditChannelPermissionsRequest

https://discord.com/developers/docs/resources/channel#edit-channel-permissions

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#edit-channel-permissions
type EditChannelPermissionsRequest = Request<{
	allow: string?,

	-- the bitwise value of all allowed permissions (default "0")
	deny: string?,

	-- the bitwise value of all disallowed permissions (default "0")
	type: number
}>
```

</details>

[Request](#Request)&lt;\{allow: [string](#string)?, deny: [string](#string)?, type: [number](#number)\}&gt;<div id="ModifyGuildWidgetRequest"></div>

## ModifyGuildWidgetRequest

https://discord.com/developers/docs/resources/guild#modify-guild-widget

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild-widget
type ModifyGuildWidgetRequest = Request<objects.GuildWidgetSettingsObject>
```

</details>

[Request](#Request)&lt;[objects](#module.objects).[GuildWidgetSettingsObject](#GuildWidgetSettingsObject)&gt;<div id="CrosspostMessageRequest"></div>

## CrosspostMessageRequest

https://discord.com/developers/docs/resources/channel#crosspost-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#crosspost-message
type CrosspostMessageRequest = Request<objects.MessageObject>
```

</details>

[Request](#Request)&lt;[objects](#module.objects).[MessageObject](#MessageObject)&gt;<div id="CreateGlobalApplicationCommandRequest"></div>

## CreateGlobalApplicationCommandRequest

https://discord.com/developers/docs/interactions/application-commands#create-global-application-command

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#create-global-application-command
type CreateGlobalApplicationCommandRequest = Request<{
	name: string,

	-- Name of command, 1-32 characters
	name_localizations: {
		[objects.LanguageLocales]: string
	}?,

	-- Localization dictionary for the name field. Values follow the same restrictions as name
	description: string?,

	-- 1-100 character description for CHAT_INPUT commands
	description_localizations: {
		[objects.LanguageLocales]: string
	}?,

	-- Localization dictionary for the description field. Values follow the same restrictions as description
	options: {objects.ApplicationCommandOptionObject}?,

	-- the parameters for the command, max of 25
	default_member_permissions: string?,

	-- Set of permissions represented as a bit set
	dm_permission: boolean?,

	-- Deprecated (use contexts instead); Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
	default_permission: boolean,

	-- Replaced by default_member_permissions and will be deprecated in the future. Indicates whether the command is enabled by default when the app is added to a guild. Defaults to true
	integration_types: {objects.IntegrationType}?,

	-- Installation context(s) where the command is available
	contexts: {objects.InteractionContextType}?,

	-- Interaction context(s) where the command can be used
	type: objects.ApplicationCommandType?,

	-- Type of command, defaults 1 if not set
	nsfw: boolean?
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), name_localizations: \{[objects.LanguageLocales]: [string](#string)\}?, description: [string](#string)?, description_localizations: \{[objects.LanguageLocales]: [string](#string)\}?, options: \{[objects](#module.objects).[ApplicationCommandOptionObject](#ApplicationCommandOptionObject)\}?, default_member_permissions: [string](#string)?, dm_permission: [boolean](#boolean)?, default_permission: [boolean](#boolean), integration_types: \{[objects](#module.objects).[IntegrationType](#IntegrationType)\}?, contexts: \{[objects](#module.objects).[InteractionContextType](#InteractionContextType)\}?, type: [objects](#module.objects).[ApplicationCommandType](#ApplicationCommandType)?, nsfw: [boolean](#boolean)?\}&gt;<div id="EditGlobalApplicationCommandRequest"></div>

## EditGlobalApplicationCommandRequest

https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command
type EditGlobalApplicationCommandRequest = Request<{
	name: string,

	-- Name of command, 1-32 characters
	name_localizations: {
		[objects.LanguageLocales]: string
	}?,

	-- Localization dictionary for the name field. Values follow the same restrictions as name
	description: string?,

	-- 1-100 character description for CHAT_INPUT commands
	description_localizations: {
		[objects.LanguageLocales]: string
	}?,

	-- Localization dictionary for the description field. Values follow the same restrictions as description
	options: {objects.ApplicationCommandOptionObject}?,

	-- the parameters for the command, max of 25
	default_member_permissions: string?,

	-- Set of permissions represented as a bit set
	dm_permission: boolean?,

	-- Deprecated (use contexts instead); Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
	default_permission: boolean,

	-- Replaced by default_member_permissions and will be deprecated in the future. Indicates whether the command is enabled by default when the app is added to a guild. Defaults to true
	integration_types: {objects.IntegrationType}?,

	-- Installation context(s) where the command is available
	contexts: {objects.InteractionContextType}?,

	-- Interaction context(s) where the command can be used
	nsfw: boolean?
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), name_localizations: \{[objects.LanguageLocales]: [string](#string)\}?, description: [string](#string)?, description_localizations: \{[objects.LanguageLocales]: [string](#string)\}?, options: \{[objects](#module.objects).[ApplicationCommandOptionObject](#ApplicationCommandOptionObject)\}?, default_member_permissions: [string](#string)?, dm_permission: [boolean](#boolean)?, default_permission: [boolean](#boolean), integration_types: \{[objects](#module.objects).[IntegrationType](#IntegrationType)\}?, contexts: \{[objects](#module.objects).[InteractionContextType](#InteractionContextType)\}?, nsfw: [boolean](#boolean)?\}&gt;<div id="CreateGuildApplicationCommandRequest"></div>

## CreateGuildApplicationCommandRequest

https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command
type CreateGuildApplicationCommandRequest = Request<{
	name: string,

	-- Name of command, 1-32 characters
	name_localizations: {
		[objects.LanguageLocales]: string
	}?,

	-- Localization dictionary for the name field. Values follow the same restrictions as name
	description: string?,

	-- 1-100 character description for CHAT_INPUT commands
	description_localizations: {
		[objects.LanguageLocales]: string
	}?,

	-- Localization dictionary for the description field. Values follow the same restrictions as description
	options: {objects.ApplicationCommandOptionObject}?,

	-- the parameters for the command, max of 25
	default_member_permissions: string?,

	-- Set of permissions represented as a bit set
	dm_permission: boolean?,

	-- Deprecated (use contexts instead); Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
	default_permission: boolean,

	-- Replaced by default_member_permissions and will be deprecated in the future. Indicates whether the command is enabled by default when the app is added to a guild. Defaults to true
	integration_types: {objects.IntegrationType}?,

	-- Installation context(s) where the command is available
	contexts: {objects.InteractionContextType}?,

	-- Interaction context(s) where the command can be used
	type: objects.ApplicationCommandType?,

	-- Type of command, defaults 1 if not set
	nsfw: boolean?,

	-- Indicates whether the command is age-restricted
	handler: number?
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), name_localizations: \{[objects.LanguageLocales]: [string](#string)\}?, description: [string](#string)?, description_localizations: \{[objects.LanguageLocales]: [string](#string)\}?, options: \{[objects](#module.objects).[ApplicationCommandOptionObject](#ApplicationCommandOptionObject)\}?, default_member_permissions: [string](#string)?, dm_permission: [boolean](#boolean)?, default_permission: [boolean](#boolean), integration_types: \{[objects](#module.objects).[IntegrationType](#IntegrationType)\}?, contexts: \{[objects](#module.objects).[InteractionContextType](#InteractionContextType)\}?, type: [objects](#module.objects).[ApplicationCommandType](#ApplicationCommandType)?, nsfw: [boolean](#boolean)?, handler: [number](#number)?\}&gt;<div id="EditGuildApplicationCommandRequest"></div>

## EditGuildApplicationCommandRequest

https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command
type EditGuildApplicationCommandRequest = Request<{
	name: string,

	-- Name of command, 1-32 characters
	name_localizations: {
		[objects.LanguageLocales]: string
	}?,

	-- Localization dictionary for the name field. Values follow the same restrictions as name
	description: string?,

	-- 1-100 character description for CHAT_INPUT commands
	description_localizations: {
		[objects.LanguageLocales]: string
	}?,

	-- Localization dictionary for the description field. Values follow the same restrictions as description
	options: {objects.ApplicationCommandOptionObject}?,

	-- the parameters for the command, max of 25
	default_member_permissions: string?,

	-- Set of permissions represented as a bit set
	dm_permission: boolean?,

	-- Deprecated (use contexts instead); Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
	default_permission: boolean,

	-- Replaced by default_member_permissions and will be deprecated in the future. Indicates whether the command is enabled by default when the app is added to a guild. Defaults to true
	integration_types: {objects.IntegrationType}?,

	-- Installation context(s) where the command is available
	contexts: {objects.InteractionContextType}?,

	-- Interaction context(s) where the command can be used
	nsfw: boolean?
}>
```

</details>

[Request](#Request)&lt;\{name: [string](#string), name_localizations: \{[objects.LanguageLocales]: [string](#string)\}?, description: [string](#string)?, description_localizations: \{[objects.LanguageLocales]: [string](#string)\}?, options: \{[objects](#module.objects).[ApplicationCommandOptionObject](#ApplicationCommandOptionObject)\}?, default_member_permissions: [string](#string)?, dm_permission: [boolean](#boolean)?, default_permission: [boolean](#boolean), integration_types: \{[objects](#module.objects).[IntegrationType](#IntegrationType)\}?, contexts: \{[objects](#module.objects).[InteractionContextType](#InteractionContextType)\}?, nsfw: [boolean](#boolean)?\}&gt;<div id="BulkOverwriteGlobalApplicationCommandsRequest"></div>

## BulkOverwriteGlobalApplicationCommandsRequest

https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands
type BulkOverwriteGlobalApplicationCommandsRequest = Request<{objects.ApplicationCommandObject}>
```

</details>

[Request](#Request)&lt;\{[objects](#module.objects).[ApplicationCommandObject](#ApplicationCommandObject)\}&gt;<div id="BulkOverwriteGuildApplicationCommandsRequest"></div>

## BulkOverwriteGuildApplicationCommandsRequest

https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands
type BulkOverwriteGuildApplicationCommandsRequest = Request<{{
	id: objects.Snowflake?,

	-- ID of the command, if known
	name: string,

	-- Name of command, 1-32 characters
	name_localizations: {
		[objects.LanguageLocales]: string
	}?,

	-- Localization dictionary for the name field. Values follow the same restrictions as name
	description: string?,

	-- 1-100 character description for CHAT_INPUT commands
	description_localizations: {
		[objects.LanguageLocales]: string
	}?,

	-- Localization dictionary for the description field. Values follow the same restrictions as description
	options: {objects.ApplicationCommandOptionObject}?,

	-- the parameters for the command, max of 25
	default_member_permissions: string?,

	-- Set of permissions represented as a bit set
	dm_permission: boolean?,

	-- Deprecated (use contexts instead); Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
	default_permission: boolean,

	-- Replaced by default_member_permissions and will be deprecated in the future. Indicates whether the command is enabled by default when the app is added to a guild. Defaults to true
	integration_types: {objects.IntegrationType}?,

	-- Installation context(s) where the command is available
	contexts: {objects.InteractionContextType}?,

	-- Interaction context(s) where the command can be used
	type: objects.ApplicationCommandType?,

	-- Type of command, defaults 1 if not set
	nsfw: boolean?
}}>
```

</details>

[Request](#Request)&lt;\{\{id: [objects](#module.objects).[Snowflake](#Snowflake)?, name: [string](#string), name_localizations: \{[objects.LanguageLocales]: [string](#string)\}?, description: [string](#string)?, description_localizations: \{[objects.LanguageLocales]: [string](#string)\}?, options: \{[objects](#module.objects).[ApplicationCommandOptionObject](#ApplicationCommandOptionObject)\}?, default_member_permissions: [string](#string)?, dm_permission: [boolean](#boolean)?, default_permission: [boolean](#boolean), integration_types: \{[objects](#module.objects).[IntegrationType](#IntegrationType)\}?, contexts: \{[objects](#module.objects).[InteractionContextType](#InteractionContextType)\}?, type: [objects](#module.objects).[ApplicationCommandType](#ApplicationCommandType)?, nsfw: [boolean](#boolean)?\}\}&gt;<div id="EditApplicationCommandPermissionsRequest"></div>

## EditApplicationCommandPermissionsRequest

https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions
type EditApplicationCommandPermissionsRequest = Request<{
	permissions: {objects.GuildApplicationCommandPermissionObject}
}>
```

</details>

[Request](#Request)&lt;\{permissions: \{[objects](#module.objects).[GuildApplicationCommandPermissionObject](#GuildApplicationCommandPermissionObject)\}\}&gt;<div id="GetCurrentUserVoiceStateResponse"></div>

## GetCurrentUserVoiceStateResponse

\[\[ Responses \]\] --

https://discord.com/developers/docs/resources/voice#get-current-user-voice-state

<details>
<summary>Raw Type</summary>

```luau
-- [[ Responses ]] --
-- https://discord.com/developers/docs/resources/voice#get-current-user-voice-state
type GetCurrentUserVoiceStateResponse = Response<objects.VoiceStateObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[VoiceStateObject](#VoiceStateObject)&gt;<div id="GetUserVoiceStateResponse"></div>

## GetUserVoiceStateResponse

https://discord.com/developers/docs/resources/voice#get-user-voice-state

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/voice#get-user-voice-state
type GetUserVoiceStateResponse = Response<objects.VoiceStateObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[VoiceStateObject](#VoiceStateObject)&gt;<div id="GetGlobalApplicationCommandsResponse"></div>

## GetGlobalApplicationCommandsResponse

https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands
type GetGlobalApplicationCommandsResponse = Response<{objects.ApplicationCommandObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[ApplicationCommandObject](#ApplicationCommandObject)\}&gt;<div id="CreateGlobalApplicationCommandResponse"></div>

## CreateGlobalApplicationCommandResponse

https://discord.com/developers/docs/interactions/application-commands#create-global-application-command

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#create-global-application-command
type CreateGlobalApplicationCommandResponse = Response<objects.ApplicationCommandObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ApplicationCommandObject](#ApplicationCommandObject)&gt;<div id="GetGlobalApplicationCommandResponse"></div>

## GetGlobalApplicationCommandResponse

https://discord.com/developers/docs/interactions/application-commands#get-global-application-command

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#get-global-application-command
type GetGlobalApplicationCommandResponse = Response<objects.ApplicationCommandObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ApplicationCommandObject](#ApplicationCommandObject)&gt;<div id="EditGlobalApplicationCommandResponse"></div>

## EditGlobalApplicationCommandResponse

https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command
type EditGlobalApplicationCommandResponse = Response<objects.ApplicationCommandObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ApplicationCommandObject](#ApplicationCommandObject)&gt;<div id="DeleteGlobalApplicationCommandResponse"></div>

## DeleteGlobalApplicationCommandResponse

https://discord.com/developers/docs/interactions/application-commands#delete-global-application-command

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#delete-global-application-command
type DeleteGlobalApplicationCommandResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="BulkOverwriteGlobalApplicationCommandsResponse"></div>

## BulkOverwriteGlobalApplicationCommandsResponse

https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands
type BulkOverwriteGlobalApplicationCommandsResponse = Response<{objects.ApplicationCommandObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[ApplicationCommandObject](#ApplicationCommandObject)\}&gt;<div id="GetGuildApplicationCommandsResponse"></div>

## GetGuildApplicationCommandsResponse

https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands
type GetGuildApplicationCommandsResponse = Response<{objects.ApplicationCommandObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[ApplicationCommandObject](#ApplicationCommandObject)\}&gt;<div id="CreateGuildApplicationCommandResponse"></div>

## CreateGuildApplicationCommandResponse

https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command
type CreateGuildApplicationCommandResponse = Response<objects.ApplicationCommandObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ApplicationCommandObject](#ApplicationCommandObject)&gt;<div id="GetGuildApplicationCommandResponse"></div>

## GetGuildApplicationCommandResponse

https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command
type GetGuildApplicationCommandResponse = Response<objects.ApplicationCommandObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ApplicationCommandObject](#ApplicationCommandObject)&gt;<div id="EditGuildApplicationCommandResponse"></div>

## EditGuildApplicationCommandResponse

https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command
type EditGuildApplicationCommandResponse = Response<objects.ApplicationCommandObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ApplicationCommandObject](#ApplicationCommandObject)&gt;<div id="DeleteGuildApplicationCommandResponse"></div>

## DeleteGuildApplicationCommandResponse

https://discord.com/developers/docs/interactions/application-commands#delete-guild-application-command

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#delete-guild-application-command
type DeleteGuildApplicationCommandResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="BulkOverwriteGuildApplicationCommandsResponse"></div>

## BulkOverwriteGuildApplicationCommandsResponse

https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands
type BulkOverwriteGuildApplicationCommandsResponse = Response<{objects.ApplicationCommandObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[ApplicationCommandObject](#ApplicationCommandObject)\}&gt;<div id="GetGuildApplicationCommandPermissionsResponse"></div>

## GetGuildApplicationCommandPermissionsResponse

https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command-permissions

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command-permissions
type GetGuildApplicationCommandPermissionsResponse = Response<{objects.GuildApplicationCommandPermissionsObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[GuildApplicationCommandPermissionsObject](#GuildApplicationCommandPermissionsObject)\}&gt;<div id="GetApplicationCommandPermissionsResponse"></div>

## GetApplicationCommandPermissionsResponse

https://discord.com/developers/docs/interactions/application-commands#get-application-command-permissions

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#get-application-command-permissions
type GetApplicationCommandPermissionsResponse = Response<{objects.GuildApplicationCommandPermissionsObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[GuildApplicationCommandPermissionsObject](#GuildApplicationCommandPermissionsObject)\}&gt;<div id="EditApplicationCommandPermissionsResponse"></div>

## EditApplicationCommandPermissionsResponse

https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions
type EditApplicationCommandPermissionsResponse = Response<objects.GuildApplicationCommandPermissionsObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildApplicationCommandPermissionsObject](#GuildApplicationCommandPermissionsObject)&gt;<div id="GetCurrentApplicationResponse"></div>

## GetCurrentApplicationResponse

https://discord.com/developers/docs/resources/application#get-current-application

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/application#get-current-application
type GetCurrentApplicationResponse = Response<{objects.ApplicationObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[ApplicationObject](#ApplicationObject)\}&gt;<div id="EditCurrentApplicationResponse"></div>

## EditCurrentApplicationResponse

https://discord.com/developers/docs/resources/application#edit-current-application

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/application#edit-current-application
type EditCurrentApplicationResponse = Response<{objects.ApplicationObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[ApplicationObject](#ApplicationObject)\}&gt;<div id="GetApplicationRoleConnectionMetadataRecordsResponse"></div>

## GetApplicationRoleConnectionMetadataRecordsResponse

https://discord.com/developers/docs/resources/application-role-connection-metadata#get-application-role-connection-metadata-records

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/application-role-connection-metadata#get-application-role-connection-metadata-records
type GetApplicationRoleConnectionMetadataRecordsResponse = Response<objects.ApplicationRoleConnectionMetadataObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ApplicationRoleConnectionMetadataObject](#ApplicationRoleConnectionMetadataObject)&gt;<div id="UpdateApplicationRoleConnectionMetadataRecordsResponse"></div>

## UpdateApplicationRoleConnectionMetadataRecordsResponse

https://discord.com/developers/docs/resources/application-role-connection-metadata#update-application-role-connection-metadata-records

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/application-role-connection-metadata#update-application-role-connection-metadata-records
type UpdateApplicationRoleConnectionMetadataRecordsResponse = Response<objects.ApplicationRoleConnectionMetadataObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ApplicationRoleConnectionMetadataObject](#ApplicationRoleConnectionMetadataObject)&gt;<div id="GetGuildAuditLogResponse"></div>

## GetGuildAuditLogResponse

https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log
type GetGuildAuditLogResponse = Response<objects.AuditLogObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[AuditLogObject](#AuditLogObject)&gt;<div id="ListAutoModerationRulesForGuildResponse"></div>

## ListAutoModerationRulesForGuildResponse

https://discord.com/developers/docs/resources/auto-moderation#list-auto-moderation-rules-for-guild

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/auto-moderation#list-auto-moderation-rules-for-guild
type ListAutoModerationRulesForGuildResponse = Response<{objects.AutomoderationRuleObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[AutomoderationRuleObject](#AutomoderationRuleObject)\}&gt;<div id="GetAutoModerationRuleResponse"></div>

## GetAutoModerationRuleResponse

https://discord.com/developers/docs/resources/auto-moderation#get-auto-moderation-rule

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/auto-moderation#get-auto-moderation-rule
type GetAutoModerationRuleResponse = Response<objects.AutomoderationRuleObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[AutomoderationRuleObject](#AutomoderationRuleObject)&gt;<div id="CreateAutoModerationRuleResponse"></div>

## CreateAutoModerationRuleResponse

https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule
type CreateAutoModerationRuleResponse = Response<objects.AutomoderationRuleObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[AutomoderationRuleObject](#AutomoderationRuleObject)&gt;<div id="ModifyAutoModerationRuleResponse"></div>

## ModifyAutoModerationRuleResponse

https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule
type ModifyAutoModerationRuleResponse = Response<objects.AutomoderationRuleObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[AutomoderationRuleObject](#AutomoderationRuleObject)&gt;<div id="DeleteAutoModerationRuleResponse"></div>

## DeleteAutoModerationRuleResponse

https://discord.com/developers/docs/resources/auto-moderation#delete-auto-moderation-rule

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/auto-moderation#delete-auto-moderation-rule
type DeleteAutoModerationRuleResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="GetChannelResponse"></div>

## GetChannelResponse

https://discord.com/developers/docs/resources/channel#get-channel

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#get-channel
type GetChannelResponse = Response<objects.ChannelObject & (objects.ThreadMemberObject?)>
```

</details>

[Response](#Response)&lt;([objects](#module.objects).[ChannelObject](#ChannelObject) & [objects](#module.objects).[ThreadMemberObject](#ThreadMemberObject)?)&gt;<div id="ModifyChannelResponse"></div>

## ModifyChannelResponse

https://discord.com/developers/docs/resources/channel#modify-channel

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#modify-channel
type ModifyChannelResponse = Response<objects.ChannelObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ChannelObject](#ChannelObject)&gt;<div id="DeleteCloseChannelResponse"></div>

## DeleteCloseChannelResponse

https://discord.com/developers/docs/resources/channel#deleteclose-channel

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#deleteclose-channel
type DeleteCloseChannelResponse = Response<objects.ChannelObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ChannelObject](#ChannelObject)&gt;<div id="GetChannelMessagesResponse"></div>

## GetChannelMessagesResponse

https://discord.com/developers/docs/resources/channel#get-channel-messages

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#get-channel-messages
type GetChannelMessagesResponse = Response<{objects.MessageObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[MessageObject](#MessageObject)\}&gt;<div id="GetChannelMessageResponse"></div>

## GetChannelMessageResponse

https://discord.com/developers/docs/resources/channel#get-channel-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#get-channel-message
type GetChannelMessageResponse = Response<objects.MessageObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[MessageObject](#MessageObject)&gt;<div id="CreateMessageResponse"></div>

## CreateMessageResponse

https://discord.com/developers/docs/resources/channel#create-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#create-message
type CreateMessageResponse = Response<objects.MessageObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[MessageObject](#MessageObject)&gt;<div id="CrosspostMessageResponse"></div>

## CrosspostMessageResponse

https://discord.com/developers/docs/resources/channel#crosspost-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#crosspost-message
type CrosspostMessageResponse = Response<objects.MessageObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[MessageObject](#MessageObject)&gt;<div id="CreateReactionResponse"></div>

## CreateReactionResponse

https://discord.com/developers/docs/resources/channel#create-reaction

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#create-reaction
type CreateReactionResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="DeleteOwnReactionResponse"></div>

## DeleteOwnReactionResponse

https://discord.com/developers/docs/resources/channel#delete-own-reaction

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#delete-own-reaction
type DeleteOwnReactionResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="DeleteUserReactionResponse"></div>

## DeleteUserReactionResponse

https://discord.com/developers/docs/resources/channel#delete-user-reaction

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#delete-user-reaction
type DeleteUserReactionResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="GetReactionsResponse"></div>

## GetReactionsResponse

https://discord.com/developers/docs/resources/channel#get-reactions

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#get-reactions
type GetReactionsResponse = Response<{objects.UserObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[UserObject](#UserObject)\}&gt;<div id="DeleteAllReactionsResponse"></div>

## DeleteAllReactionsResponse

https://discord.com/developers/docs/resources/channel#delete-all-reactions

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#delete-all-reactions
type DeleteAllReactionsResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="DeleteAllReactionsForEmojiResponse"></div>

## DeleteAllReactionsForEmojiResponse

https://discord.com/developers/docs/resources/channel#delete-all-reactions-for-emoji

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#delete-all-reactions-for-emoji
type DeleteAllReactionsForEmojiResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="EditMessageResponse"></div>

## EditMessageResponse

https://discord.com/developers/docs/resources/channel#edit-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#edit-message
type EditMessageResponse = Response<objects.MessageObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[MessageObject](#MessageObject)&gt;<div id="DeleteMessageResponse"></div>

## DeleteMessageResponse

https://discord.com/developers/docs/resources/channel#delete-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#delete-message
type DeleteMessageResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="BulkDeleteMessageResponse"></div>

## BulkDeleteMessageResponse

https://discord.com/developers/docs/resources/channel#bulk-delete-messages

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#bulk-delete-messages
type BulkDeleteMessageResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="EditChannelPermissionsResponse"></div>

## EditChannelPermissionsResponse

https://discord.com/developers/docs/resources/channel#edit-channel-permissions

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#edit-channel-permissions
type EditChannelPermissionsResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="GetChannelInvitesResponse"></div>

## GetChannelInvitesResponse

https://discord.com/developers/docs/resources/channel#get-channel-invites

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#get-channel-invites
type GetChannelInvitesResponse = Response<{objects.InviteObject & objects.InviteMetadataObject}>
```

</details>

[Response](#Response)&lt;\{([objects](#module.objects).[InviteObject](#InviteObject) & [objects](#module.objects).[InviteMetadataObject](#InviteMetadataObject))\}&gt;<div id="CreateChannelInviteResponse"></div>

## CreateChannelInviteResponse

https://discord.com/developers/docs/resources/channel#create-channel-invite

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#create-channel-invite
type CreateChannelInviteResponse = Response<objects.InviteObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[InviteObject](#InviteObject)&gt;<div id="DeleteChannelPermissionResponse"></div>

## DeleteChannelPermissionResponse

https://discord.com/developers/docs/resources/channel#delete-channel-permission

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#delete-channel-permission
type DeleteChannelPermissionResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="FollowAnnouncementChannelResponse"></div>

## FollowAnnouncementChannelResponse

https://discord.com/developers/docs/resources/channel#follow-announcement-channel

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#follow-announcement-channel
type FollowAnnouncementChannelResponse = Response<objects.FollowedChannelObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[FollowedChannelObject](#FollowedChannelObject)&gt;<div id="TriggerTypingIndicatorResponse"></div>

## TriggerTypingIndicatorResponse

https://discord.com/developers/docs/resources/channel#trigger-typing-indicator

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#trigger-typing-indicator
type TriggerTypingIndicatorResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="GetPinnedMessagesResponse"></div>

## GetPinnedMessagesResponse

https://discord.com/developers/docs/resources/channel#get-pinned-messages

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#get-pinned-messages
type GetPinnedMessagesResponse = Response<{objects.MessageObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[MessageObject](#MessageObject)\}&gt;<div id="PinMessageResponse"></div>

## PinMessageResponse

https://discord.com/developers/docs/resources/channel#pin-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#pin-message
type PinMessageResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="UnpinMessageResponse"></div>

## UnpinMessageResponse

https://discord.com/developers/docs/resources/channel#unpin-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#unpin-message
type UnpinMessageResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="GroupDMAddRecipientResponse"></div>

## GroupDMAddRecipientResponse

https://discord.com/developers/docs/resources/channel#group-dm-add-recipient

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#group-dm-add-recipient
type GroupDMAddRecipientResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="GroupDMRemoveRecipientResponse"></div>

## GroupDMRemoveRecipientResponse

https://discord.com/developers/docs/resources/channel#group-dm-remove-recipient

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#group-dm-remove-recipient
type GroupDMRemoveRecipientResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="StartThreadFromMessageResponse"></div>

## StartThreadFromMessageResponse

https://discord.com/developers/docs/resources/channel#start-thread-from-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#start-thread-from-message
type StartThreadFromMessageResponse = Response<objects.ChannelObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ChannelObject](#ChannelObject)&gt;<div id="StartThreadWithoutMessageResponse"></div>

## StartThreadWithoutMessageResponse

https://discord.com/developers/docs/resources/channel#start-thread-without-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#start-thread-without-message
type StartThreadWithoutMessageResponse = Response<objects.ChannelObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ChannelObject](#ChannelObject)&gt;<div id="StartThreadInForumOrMediaChannelResponse"></div>

## StartThreadInForumOrMediaChannelResponse

https://discord.com/developers/docs/resources/channel#start-thread-in-forum-or-media-channel

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#start-thread-in-forum-or-media-channel
type StartThreadInForumOrMediaChannelResponse = Response<objects.ChannelObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ChannelObject](#ChannelObject)&gt;<div id="JoinThreadResponse"></div>

## JoinThreadResponse

https://discord.com/developers/docs/resources/channel#join-thread

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#join-thread
type JoinThreadResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="AddThreadMemberResponse"></div>

## AddThreadMemberResponse

https://discord.com/developers/docs/resources/channel#add-thread-member

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#add-thread-member
type AddThreadMemberResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="LeaveThreadResponse"></div>

## LeaveThreadResponse

https://discord.com/developers/docs/resources/channel#leave-thread

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#leave-thread
type LeaveThreadResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="RemoveThreadMemberResponse"></div>

## RemoveThreadMemberResponse

https://discord.com/developers/docs/resources/channel#remove-thread-member

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#remove-thread-member
type RemoveThreadMemberResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="GetThreadMemberResponse"></div>

## GetThreadMemberResponse

https://discord.com/developers/docs/resources/channel#get-thread-member

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#get-thread-member
type GetThreadMemberResponse = Response<objects.ThreadMemberObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ThreadMemberObject](#ThreadMemberObject)&gt;<div id="ListThreadMembersResponse"></div>

## ListThreadMembersResponse

https://discord.com/developers/docs/resources/channel#list-thread-members

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#list-thread-members
type ListThreadMembersResponse = Response<{objects.ThreadMemberObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[ThreadMemberObject](#ThreadMemberObject)\}&gt;<div id="ListPublicArchivedThreadsResponse"></div>

## ListPublicArchivedThreadsResponse

https://discord.com/developers/docs/resources/channel#list-public-archived-threads

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#list-public-archived-threads
type ListPublicArchivedThreadsResponse = Response<{
	threads: {objects.ChannelObject},

	-- the public, archived threads
	members: {objects.ThreadMemberObject},

	-- a thread member object for each returned thread the current user has joined
	has_more: boolean
}>
```

</details>

[Response](#Response)&lt;\{threads: \{[objects](#module.objects).[ChannelObject](#ChannelObject)\}, members: \{[objects](#module.objects).[ThreadMemberObject](#ThreadMemberObject)\}, has_more: [boolean](#boolean)\}&gt;<div id="ListPrivateArchivedThreadsResponse"></div>

## ListPrivateArchivedThreadsResponse

https://discord.com/developers/docs/resources/channel#list-private-archived-threads

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#list-private-archived-threads
type ListPrivateArchivedThreadsResponse = Response<{
	threads: {objects.ChannelObject},

	-- the public, archived threads
	members: {objects.ThreadMemberObject},

	-- a thread member object for each returned thread the current user has joined
	has_more: boolean
}>
```

</details>

[Response](#Response)&lt;\{threads: \{[objects](#module.objects).[ChannelObject](#ChannelObject)\}, members: \{[objects](#module.objects).[ThreadMemberObject](#ThreadMemberObject)\}, has_more: [boolean](#boolean)\}&gt;<div id="ListJoinedPrivateArchivedThreadsResponse"></div>

## ListJoinedPrivateArchivedThreadsResponse

https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads
type ListJoinedPrivateArchivedThreadsResponse = Response<{
	threads: {objects.ChannelObject},

	-- the public, archived threads
	members: {objects.ThreadMemberObject},

	-- a thread member object for each returned thread the current user has joined
	has_more: boolean
}>
```

</details>

[Response](#Response)&lt;\{threads: \{[objects](#module.objects).[ChannelObject](#ChannelObject)\}, members: \{[objects](#module.objects).[ThreadMemberObject](#ThreadMemberObject)\}, has_more: [boolean](#boolean)\}&gt;<div id="ListGuildEmojisResponse"></div>

## ListGuildEmojisResponse

https://discord.com/developers/docs/resources/emoji#list-guild-emojis

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/emoji#list-guild-emojis
type ListGuildEmojisResponse = Response<{objects.EmojiObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[EmojiObject](#EmojiObject)\}&gt;<div id="GetGuildEmojiResponse"></div>

## GetGuildEmojiResponse

https://discord.com/developers/docs/resources/emoji#get-guild-emoji

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/emoji#get-guild-emoji
type GetGuildEmojiResponse = Response<objects.EmojiObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[EmojiObject](#EmojiObject)&gt;<div id="CreateGuildEmojiResponse"></div>

## CreateGuildEmojiResponse

https://discord.com/developers/docs/resources/emoji#create-guild-emoji

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/emoji#create-guild-emoji
type CreateGuildEmojiResponse = Response<objects.EmojiObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[EmojiObject](#EmojiObject)&gt;<div id="ModifyGuildEmojiResponse"></div>

## ModifyGuildEmojiResponse

https://discord.com/developers/docs/resources/emoji#modify-guild-emoji

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/emoji#modify-guild-emoji
type ModifyGuildEmojiResponse = Response<objects.EmojiObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[EmojiObject](#EmojiObject)&gt;<div id="DeleteGuildEmojiResponse"></div>

## DeleteGuildEmojiResponse

https://discord.com/developers/docs/resources/emoji#delete-guild-emoji

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/emoji#delete-guild-emoji
type DeleteGuildEmojiResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="CreateGuildResponse"></div>

## CreateGuildResponse

https://discord.com/developers/docs/resources/guild#create-guild

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#create-guild
type CreateGuildResponse = Response<objects.GuildObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildObject](#GuildObject)&gt;<div id="GetGuildResponse"></div>

## GetGuildResponse

https://discord.com/developers/docs/resources/guild#get-guild

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild
type GetGuildResponse = Response<objects.GuildObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildObject](#GuildObject)&gt;<div id="GetGuildPreviewResponse"></div>

## GetGuildPreviewResponse

https://discord.com/developers/docs/resources/guild#get-guild

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild
type GetGuildPreviewResponse = Response<objects.GuildPreviewObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildPreviewObject](#GuildPreviewObject)&gt;<div id="ModifyGuildResponse"></div>

## ModifyGuildResponse

https://discord.com/developers/docs/resources/guild#modify-guild

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild
type ModifyGuildResponse = Response<objects.GuildObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildObject](#GuildObject)&gt;<div id="DeleteGuildResponse"></div>

## DeleteGuildResponse

https://discord.com/developers/docs/resources/guild#delete-guild

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#delete-guild
type DeleteGuildResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="GetGuildChannelsResponse"></div>

## GetGuildChannelsResponse

https://discord.com/developers/docs/resources/guild#get-guild-channels

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild-channels
type GetGuildChannelsResponse = Response<{objects.ChannelObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[ChannelObject](#ChannelObject)\}&gt;<div id="CreateGuildChannelResponse"></div>

## CreateGuildChannelResponse

https://discord.com/developers/docs/resources/guild#create-guild-channel

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#create-guild-channel
type CreateGuildChannelResponse = Response<objects.ChannelObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ChannelObject](#ChannelObject)&gt;<div id="ModifyGuildChannelPositionsResponse"></div>

## ModifyGuildChannelPositionsResponse

https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions
type ModifyGuildChannelPositionsResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="ListActiveGuildThreadsResponse"></div>

## ListActiveGuildThreadsResponse

https://discord.com/developers/docs/resources/guild#list-active-guild-threads

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#list-active-guild-threads
type ListActiveGuildThreadsResponse = Response<{
	threads: {objects.ChannelObject},

	-- the active threads
	members: {objects.ThreadMemberObject}
}>
```

</details>

[Response](#Response)&lt;\{threads: \{[objects](#module.objects).[ChannelObject](#ChannelObject)\}, members: \{[objects](#module.objects).[ThreadMemberObject](#ThreadMemberObject)\}\}&gt;<div id="GetGuildMemberResponse"></div>

## GetGuildMemberResponse

https://discord.com/developers/docs/resources/guild#get-guild-member

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild-member
type GetGuildMemberResponse = Response<objects.GuildMemberObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildMemberObject](#GuildMemberObject)&gt;<div id="ListGuildMembersResponse"></div>

## ListGuildMembersResponse

https://discord.com/developers/docs/resources/guild#list-guild-members

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#list-guild-members
type ListGuildMembersResponse = Response<{objects.GuildMemberObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[GuildMemberObject](#GuildMemberObject)\}&gt;<div id="SearchGuildMembersResponse"></div>

## SearchGuildMembersResponse

https://discord.com/developers/docs/resources/guild#search-guild-members

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#search-guild-members
type SearchGuildMembersResponse = Response<{objects.GuildMemberObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[GuildMemberObject](#GuildMemberObject)\}&gt;<div id="AddGuildMemberResponse"></div>

## AddGuildMemberResponse

https://discord.com/developers/docs/resources/guild#add-guild-member

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#add-guild-member
type AddGuildMemberResponse = Response<objects.GuildMemberObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildMemberObject](#GuildMemberObject)&gt;<div id="ModifyGuildMemberResponse"></div>

## ModifyGuildMemberResponse

https://discord.com/developers/docs/resources/guild#modify-guild-member

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild-member
type ModifyGuildMemberResponse = Response<objects.GuildMemberObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildMemberObject](#GuildMemberObject)&gt;<div id="ModifyCurrentMemberResponse"></div>

## ModifyCurrentMemberResponse

https://discord.com/developers/docs/resources/guild#modify-current-member

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-current-member
type ModifyCurrentMemberResponse = Response<objects.GuildMemberObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildMemberObject](#GuildMemberObject)&gt;<div id="AddGuildMemberRoleResponse"></div>

## AddGuildMemberRoleResponse

https://discord.com/developers/docs/resources/guild#add-guild-member-role

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#add-guild-member-role
type AddGuildMemberRoleResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="RemoveGuildMemberRoleResponse"></div>

## RemoveGuildMemberRoleResponse

https://discord.com/developers/docs/resources/guild#remove-guild-member-role

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#remove-guild-member-role
type RemoveGuildMemberRoleResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="RemoveGuildMemberResponse"></div>

## RemoveGuildMemberResponse

https://discord.com/developers/docs/resources/guild#remove-guild-member

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#remove-guild-member
type RemoveGuildMemberResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="GetGuildBansResponse"></div>

## GetGuildBansResponse

https://discord.com/developers/docs/resources/guild#get-guild-bans

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild-bans
type GetGuildBansResponse = Response<{objects.BanObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[BanObject](#BanObject)\}&gt;<div id="GetGuildBanResponse"></div>

## GetGuildBanResponse

https://discord.com/developers/docs/resources/guild#get-guild-ban

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild-ban
type GetGuildBanResponse = Response<objects.BanObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[BanObject](#BanObject)&gt;<div id="CreateGuildBanResponse"></div>

## CreateGuildBanResponse

https://discord.com/developers/docs/resources/guild#create-guild-ban

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#create-guild-ban
type CreateGuildBanResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="RemoveGuildBanResponse"></div>

## RemoveGuildBanResponse

https://discord.com/developers/docs/resources/guild#remove-guild-ban

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#remove-guild-ban
type RemoveGuildBanResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="BulkGuildBanResponse"></div>

## BulkGuildBanResponse

https://discord.com/developers/docs/resources/guild#bulk-guild-ban

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#bulk-guild-ban
type BulkGuildBanResponse = Response<{
	banned_users: {objects.Snowflake},

	failed_users: {objects.Snowflake}
}>
```

</details>

[Response](#Response)&lt;\{banned_users: \{[objects](#module.objects).[Snowflake](#Snowflake)\}, failed_users: \{[objects](#module.objects).[Snowflake](#Snowflake)\}\}&gt;<div id="GetGuildRolesResponse"></div>

## GetGuildRolesResponse

https://discord.com/developers/docs/resources/guild#get-guild-roles

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild-roles
type GetGuildRolesResponse = Response<{objects.GuildRoleObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[GuildRoleObject](#GuildRoleObject)\}&gt;<div id="GetGuildRoleResponse"></div>

## GetGuildRoleResponse

https://discord.com/developers/docs/resources/guild#get-guild-roles

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild-roles
type GetGuildRoleResponse = Response<objects.GuildRoleObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildRoleObject](#GuildRoleObject)&gt;<div id="CreateGuildRoleResponse"></div>

## CreateGuildRoleResponse

https://discord.com/developers/docs/resources/guild#create-guild-role

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#create-guild-role
type CreateGuildRoleResponse = Response<objects.GuildRoleObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildRoleObject](#GuildRoleObject)&gt;<div id="ModifyGuildRolePositionsResponse"></div>

## ModifyGuildRolePositionsResponse

https://discord.com/developers/docs/resources/guild#modify-guild-role-positions

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild-role-positions
type ModifyGuildRolePositionsResponse = Response<{objects.GuildRoleObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[GuildRoleObject](#GuildRoleObject)\}&gt;<div id="ModifyGuildRoleResponse"></div>

## ModifyGuildRoleResponse

https://discord.com/developers/docs/resources/guild#modify-guild-role

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild-role
type ModifyGuildRoleResponse = Response<objects.GuildRoleObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildRoleObject](#GuildRoleObject)&gt;<div id="ModifyGuildMFALevelResponse"></div>

## ModifyGuildMFALevelResponse

https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level
type ModifyGuildMFALevelResponse = Response<unknown>
```

</details>

[Response](#Response)&lt;[unknown](#unknown)&gt;<div id="DeleteGuildRoleResponse"></div>

## DeleteGuildRoleResponse

https://discord.com/developers/docs/resources/guild#delete-guild-role

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#delete-guild-role
type DeleteGuildRoleResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="GetGuildPruneCountResponse"></div>

## GetGuildPruneCountResponse

https://discord.com/developers/docs/resources/guild#get-guild-prune-count

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild-prune-count
type GetGuildPruneCountResponse = Response<{
	pruned: number
}>
```

</details>

[Response](#Response)&lt;\{pruned: [number](#number)\}&gt;<div id="BeginGuildPruneResponse"></div>

## BeginGuildPruneResponse

https://discord.com/developers/docs/resources/guild#begin-guild-prune

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#begin-guild-prune
type BeginGuildPruneResponse = Response<{
	pruned: number
}>
```

</details>

[Response](#Response)&lt;\{pruned: [number](#number)\}&gt;<div id="GetGuildVoiceRegionsResponse"></div>

## GetGuildVoiceRegionsResponse

https://discord.com/developers/docs/resources/guild#get-guild-voice-regions

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild-voice-regions
type GetGuildVoiceRegionsResponse = Response<{objects.VoiceRegionObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[VoiceRegionObject](#VoiceRegionObject)\}&gt;<div id="GetGuildInvitesResponse"></div>

## GetGuildInvitesResponse

https://discord.com/developers/docs/resources/guild#get-guild-invites

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild-invites
type GetGuildInvitesResponse = Response<{objects.InviteObject & objects.InviteMetadataObject}>
```

</details>

[Response](#Response)&lt;\{([objects](#module.objects).[InviteObject](#InviteObject) & [objects](#module.objects).[InviteMetadataObject](#InviteMetadataObject))\}&gt;<div id="GetGuildIntegrationsResponse"></div>

## GetGuildIntegrationsResponse

https://discord.com/developers/docs/resources/guild#get-guild-integrations

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild-integrations
type GetGuildIntegrationsResponse = Response<{objects.IntegrationObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[IntegrationObject](#IntegrationObject)\}&gt;<div id="DeleteGuildIntegrationResponse"></div>

## DeleteGuildIntegrationResponse

https://discord.com/developers/docs/resources/guild#delete-guild-integration

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#delete-guild-integration
type DeleteGuildIntegrationResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="GetGuildWidgetSettingsResponse"></div>

## GetGuildWidgetSettingsResponse

https://discord.com/developers/docs/resources/guild#get-guild-widget-settings

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild-widget-settings
type GetGuildWidgetSettingsResponse = Response<objects.GuildWidgetSettingsObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildWidgetSettingsObject](#GuildWidgetSettingsObject)&gt;<div id="ModifyGuildWidgetResponse"></div>

## ModifyGuildWidgetResponse

https://discord.com/developers/docs/resources/guild#modify-guild-widget

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild-widget
type ModifyGuildWidgetResponse = Response<objects.GuildWidgetSettingsObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildWidgetSettingsObject](#GuildWidgetSettingsObject)&gt;<div id="GetGuildWidgetResponse"></div>

## GetGuildWidgetResponse

https://discord.com/developers/docs/resources/guild#get-guild-widget

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild-widget
type GetGuildWidgetResponse = Response<objects.GuildWidgetObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildWidgetObject](#GuildWidgetObject)&gt;<div id="GetGuildVanityUrlResponse"></div>

## GetGuildVanityUrlResponse

https://discord.com/developers/docs/resources/guild#get-guild-vanity-url

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild-vanity-url
type GetGuildVanityUrlResponse = Response<objects.GuildVanityUrl>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildVanityUrl](#GuildVanityUrl)&gt;<div id="GetGuildWidgetImageResponse"></div>

## GetGuildWidgetImageResponse

https://discord.com/developers/docs/resources/guild#get-guild-widget-image

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild-widget-image
type GetGuildWidgetImageResponse = Response<string>
```

</details>

[Response](#Response)&lt;[string](#string)&gt;<div id="GetGuildWelcomeScreenResponse"></div>

## GetGuildWelcomeScreenResponse

https://discord.com/developers/docs/resources/guild#get-guild-welcome-screen

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild-welcome-screen
type GetGuildWelcomeScreenResponse = Response<objects.WelcomeScreenObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[WelcomeScreenObject](#WelcomeScreenObject)&gt;<div id="ModifyGuildWelcomeScreenResponse"></div>

## ModifyGuildWelcomeScreenResponse

https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen
type ModifyGuildWelcomeScreenResponse = Response<objects.WelcomeScreenObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[WelcomeScreenObject](#WelcomeScreenObject)&gt;<div id="GetGuildOnboardingResponse"></div>

## GetGuildOnboardingResponse

https://discord.com/developers/docs/resources/guild#get-guild-onboarding

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild-onboarding
type GetGuildOnboardingResponse = Response<objects.GuildOnboardingObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildOnboardingObject](#GuildOnboardingObject)&gt;<div id="ModifyGuildOnboardingResponse"></div>

## ModifyGuildOnboardingResponse

https://discord.com/developers/docs/resources/guild#modify-guild-onboarding

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-guild-onboarding
type ModifyGuildOnboardingResponse = Response<objects.GuildOnboardingObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildOnboardingObject](#GuildOnboardingObject)&gt;<div id="ModifyCurrentUserVoiceStateResponse"></div>

## ModifyCurrentUserVoiceStateResponse

https://discord.com/developers/docs/resources/guild#modify-current-user-voice-state

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-current-user-voice-state
type ModifyCurrentUserVoiceStateResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="ModifyUserVoiceStateResponse"></div>

## ModifyUserVoiceStateResponse

https://discord.com/developers/docs/resources/guild#modify-user-voice-state

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#modify-user-voice-state
type ModifyUserVoiceStateResponse = Response<unknown>
```

</details>

[Response](#Response)&lt;[unknown](#unknown)&gt;<div id="ListScheduledEventsForGuildResponse"></div>

## ListScheduledEventsForGuildResponse

https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild
type ListScheduledEventsForGuildResponse = Response<{objects.GuildScheduledEventObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[GuildScheduledEventObject](#GuildScheduledEventObject)\}&gt;<div id="CreateGuildScheduledEventResponse"></div>

## CreateGuildScheduledEventResponse

https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event
type CreateGuildScheduledEventResponse = Response<objects.GuildScheduledEventObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildScheduledEventObject](#GuildScheduledEventObject)&gt;<div id="GetGuildScheduledEventResponse"></div>

## GetGuildScheduledEventResponse

https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event
type GetGuildScheduledEventResponse = Response<objects.GuildScheduledEventObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildScheduledEventObject](#GuildScheduledEventObject)&gt;<div id="ModifyGuildScheduledEventResponse"></div>

## ModifyGuildScheduledEventResponse

https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event
type ModifyGuildScheduledEventResponse = Response<objects.GuildScheduledEventObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildScheduledEventObject](#GuildScheduledEventObject)&gt;<div id="DeleteGuildScheduledEventResponse"></div>

## DeleteGuildScheduledEventResponse

https://discord.com/developers/docs/resources/guild-scheduled-event#delete-guild-scheduled-event

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-scheduled-event#delete-guild-scheduled-event
type DeleteGuildScheduledEventResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="GetGuildScheduledEventUsersResponse"></div>

## GetGuildScheduledEventUsersResponse

https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users
type GetGuildScheduledEventUsersResponse = Response<{objects.GuildScheduledEventUserObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[GuildScheduledEventUserObject](#GuildScheduledEventUserObject)\}&gt;<div id="GetGuildTemplateResponse"></div>

## GetGuildTemplateResponse

https://discord.com/developers/docs/resources/guild-template#get-guild-template

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-template#get-guild-template
type GetGuildTemplateResponse = Response<objects.GuildTemplateObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildTemplateObject](#GuildTemplateObject)&gt;<div id="CreateGuildFromGuildTemplateResponse"></div>

## CreateGuildFromGuildTemplateResponse

https://discord.com/developers/docs/resources/guild-template#create-guild-from-guild-template

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-template#create-guild-from-guild-template
type CreateGuildFromGuildTemplateResponse = Response<objects.GuildObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildObject](#GuildObject)&gt;<div id="GetGuildTemplatesResponse"></div>

## GetGuildTemplatesResponse

https://discord.com/developers/docs/resources/guild-template#get-guild-templates

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-template#get-guild-templates
type GetGuildTemplatesResponse = Response<objects.GuildTemplateObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildTemplateObject](#GuildTemplateObject)&gt;<div id="CreateGuildTemplateResponse"></div>

## CreateGuildTemplateResponse

https://discord.com/developers/docs/resources/guild-template#create-guild-template

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-template#create-guild-template
type CreateGuildTemplateResponse = Response<objects.GuildTemplateObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildTemplateObject](#GuildTemplateObject)&gt;<div id="SyncGuildTemplateResponse"></div>

## SyncGuildTemplateResponse

https://discord.com/developers/docs/resources/guild-template#sync-guild-template

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-template#sync-guild-template
type SyncGuildTemplateResponse = Response<objects.GuildTemplateObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildTemplateObject](#GuildTemplateObject)&gt;<div id="ModifyGuildTemplateResponse"></div>

## ModifyGuildTemplateResponse

https://discord.com/developers/docs/resources/guild-template#modify-guild-template

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-template#modify-guild-template
type ModifyGuildTemplateResponse = Response<objects.GuildTemplateObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildTemplateObject](#GuildTemplateObject)&gt;<div id="DeleteGuildTemplateResponse"></div>

## DeleteGuildTemplateResponse

https://discord.com/developers/docs/resources/guild-template#delete-guild-template

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-template#delete-guild-template
type DeleteGuildTemplateResponse = Response<objects.GuildTemplateObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildTemplateObject](#GuildTemplateObject)&gt;<div id="GetInviteResponse"></div>

## GetInviteResponse

https://discord.com/developers/docs/resources/invite#get-invite

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/invite#get-invite
type GetInviteResponse = Response<objects.InviteObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[InviteObject](#InviteObject)&gt;<div id="DeleteInviteResponse"></div>

## DeleteInviteResponse

https://discord.com/developers/docs/resources/invite#delete-invite

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/invite#delete-invite
type DeleteInviteResponse = Response<objects.InviteObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[InviteObject](#InviteObject)&gt;<div id="GetAnswerVotersResponse"></div>

## GetAnswerVotersResponse

https://discord.com/developers/docs/resources/poll#get-answer-voters

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/poll#get-answer-voters
type GetAnswerVotersResponse = Response<{objects.UserObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[UserObject](#UserObject)\}&gt;<div id="EndPollResponse"></div>

## EndPollResponse

https://discord.com/developers/docs/resources/poll#end-poll

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/poll#end-poll
type EndPollResponse = Response<objects.MessageObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[MessageObject](#MessageObject)&gt;<div id="CreateStageInstanceResponse"></div>

## CreateStageInstanceResponse

https://discord.com/developers/docs/resources/stage-instance#create-stage-instance

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/stage-instance#create-stage-instance
type CreateStageInstanceResponse = Response<objects.StageInstanceObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[StageInstanceObject](#StageInstanceObject)&gt;<div id="GetStageInstanceResponse"></div>

## GetStageInstanceResponse

https://discord.com/developers/docs/resources/stage-instance#get-stage-instance

discord-fixme: make a PR to declare what this API returns.

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/stage-instance#get-stage-instance
-- discord-fixme: make a PR to declare what this API returns.
type GetStageInstanceResponse = Response<objects.StageInstanceObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[StageInstanceObject](#StageInstanceObject)&gt;<div id="ModifyStageInstanceResponse"></div>

## ModifyStageInstanceResponse

https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance
type ModifyStageInstanceResponse = Response<objects.StageInstanceObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[StageInstanceObject](#StageInstanceObject)&gt;<div id="DeleteStageInstanceResponse"></div>

## DeleteStageInstanceResponse

https://discord.com/developers/docs/resources/stage-instance#delete-stage-instance

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/stage-instance#delete-stage-instance
type DeleteStageInstanceResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="GetStickerResponse"></div>

## GetStickerResponse

https://discord.com/developers/docs/resources/sticker#get-sticker

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/sticker#get-sticker
type GetStickerResponse = Response<objects.StickerObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[StickerObject](#StickerObject)&gt;<div id="ListStickerPacksResponse"></div>

## ListStickerPacksResponse

https://discord.com/developers/docs/resources/sticker#list-sticker-packs

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/sticker#list-sticker-packs
type ListStickerPacksResponse = Response<{
	sticker_packs: {objects.StickerPackObject}
}>
```

</details>

[Response](#Response)&lt;\{sticker_packs: \{[objects](#module.objects).[StickerPackObject](#StickerPackObject)\}\}&gt;<div id="ListGuildStickersResponse"></div>

## ListGuildStickersResponse

https://discord.com/developers/docs/resources/sticker#list-guild-stickers

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/sticker#list-guild-stickers
type ListGuildStickersResponse = Response<{objects.StickerObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[StickerObject](#StickerObject)\}&gt;<div id="GetGuildStickerResponse"></div>

## GetGuildStickerResponse

https://discord.com/developers/docs/resources/sticker#get-guild-sticker

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/sticker#get-guild-sticker
type GetGuildStickerResponse = Response<objects.StickerObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[StickerObject](#StickerObject)&gt;<div id="CreateGuildStickerResponse"></div>

## CreateGuildStickerResponse

https://discord.com/developers/docs/resources/sticker#create-guild-sticker

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/sticker#create-guild-sticker
type CreateGuildStickerResponse = Response<objects.StickerObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[StickerObject](#StickerObject)&gt;<div id="ModifyGuildStickerResponse"></div>

## ModifyGuildStickerResponse

https://discord.com/developers/docs/resources/sticker#modify-guild-sticker

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/sticker#modify-guild-sticker
type ModifyGuildStickerResponse = Response<objects.StickerObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[StickerObject](#StickerObject)&gt;<div id="DeleteGuildStickerResponse"></div>

## DeleteGuildStickerResponse

https://discord.com/developers/docs/resources/sticker#delete-guild-sticker

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/sticker#delete-guild-sticker
type DeleteGuildStickerResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="GetCurrentUserResponse"></div>

## GetCurrentUserResponse

https://discord.com/developers/docs/resources/user#get-current-user

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#get-current-user
type GetCurrentUserResponse = Response<objects.UserObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[UserObject](#UserObject)&gt;<div id="GetUserResponse"></div>

## GetUserResponse

https://discord.com/developers/docs/resources/user#get-user

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#get-user
type GetUserResponse = Response<objects.UserObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[UserObject](#UserObject)&gt;<div id="ModifyCurrentUserResponse"></div>

## ModifyCurrentUserResponse

https://discord.com/developers/docs/resources/user#modify-current-user

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#modify-current-user
type ModifyCurrentUserResponse = Response<objects.UserObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[UserObject](#UserObject)&gt;<div id="GetCurrentUserGuildsResponse"></div>

## GetCurrentUserGuildsResponse

https://discord.com/developers/docs/resources/user#get-current-user-guilds

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#get-current-user-guilds
type GetCurrentUserGuildsResponse = Response<{objects.GuildObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[GuildObject](#GuildObject)\}&gt;<div id="GetCurrentUserGuildMemberResponse"></div>

## GetCurrentUserGuildMemberResponse

https://discord.com/developers/docs/resources/user#get-current-user-guild-member

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#get-current-user-guild-member
type GetCurrentUserGuildMemberResponse = Response<objects.GuildMemberObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[GuildMemberObject](#GuildMemberObject)&gt;<div id="LeaveGuildResponse"></div>

## LeaveGuildResponse

https://discord.com/developers/docs/resources/user#leave-guild

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#leave-guild
type LeaveGuildResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="CreateDMResponse"></div>

## CreateDMResponse

https://discord.com/developers/docs/resources/user#create-dm

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#create-dm
type CreateDMResponse = Response<objects.ChannelObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ChannelObject](#ChannelObject)&gt;<div id="CreateGroupDMResponse"></div>

## CreateGroupDMResponse

https://discord.com/developers/docs/resources/user#create-group-dm

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#create-group-dm
type CreateGroupDMResponse = Response<objects.ChannelObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ChannelObject](#ChannelObject)&gt;<div id="GetCurrentUserConnectionResponse"></div>

## GetCurrentUserConnectionResponse

https://discord.com/developers/docs/resources/user#get-current-user-connections

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#get-current-user-connections
type GetCurrentUserConnectionResponse = Response<objects.ConnectionObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ConnectionObject](#ConnectionObject)&gt;<div id="GetCurrentUserApplicationRoleConnectionResponse"></div>

## GetCurrentUserApplicationRoleConnectionResponse

https://discord.com/developers/docs/resources/user#get-current-user-application-role-connection

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#get-current-user-application-role-connection
type GetCurrentUserApplicationRoleConnectionResponse = Response<objects.ApplicationRoleConnectionObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ApplicationRoleConnectionObject](#ApplicationRoleConnectionObject)&gt;<div id="UpdateCurrentUserApplicationRoleConnectionResponse"></div>

## UpdateCurrentUserApplicationRoleConnectionResponse

https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection
type UpdateCurrentUserApplicationRoleConnectionResponse = Response<objects.ApplicationRoleConnectionObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[ApplicationRoleConnectionObject](#ApplicationRoleConnectionObject)&gt;<div id="ListVoiceRegionsResponse"></div>

## ListVoiceRegionsResponse

https://discord.com/developers/docs/resources/voice

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/voice
type ListVoiceRegionsResponse = Response<{objects.VoiceRegionObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[VoiceRegionObject](#VoiceRegionObject)\}&gt;<div id="CreateWebhookResponse"></div>

## CreateWebhookResponse

https://discord.com/developers/docs/resources/webhook#create-webhook

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#create-webhook
type CreateWebhookResponse = Response<objects.WebhookObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[WebhookObject](#WebhookObject)&gt;<div id="GetChannelWebhooksResponse"></div>

## GetChannelWebhooksResponse

https://discord.com/developers/docs/resources/webhook#get-channel-webhooks

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#get-channel-webhooks
type GetChannelWebhooksResponse = Response<{objects.WebhookObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[WebhookObject](#WebhookObject)\}&gt;<div id="GetGuildWebhooksResponse"></div>

## GetGuildWebhooksResponse

https://discord.com/developers/docs/resources/webhook#get-guild-webhooks

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#get-guild-webhooks
type GetGuildWebhooksResponse = Response<{objects.WebhookObject}>
```

</details>

[Response](#Response)&lt;\{[objects](#module.objects).[WebhookObject](#WebhookObject)\}&gt;<div id="GetWebhookResponse"></div>

## GetWebhookResponse

https://discord.com/developers/docs/resources/webhook#get-webhook

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#get-webhook
type GetWebhookResponse = Response<objects.WebhookObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[WebhookObject](#WebhookObject)&gt;<div id="GetWebhookWithTokenResponse"></div>

## GetWebhookWithTokenResponse

https://discord.com/developers/docs/resources/webhook#get-webhook-with-token

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#get-webhook-with-token
type GetWebhookWithTokenResponse = Response<objects.WebhookObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[WebhookObject](#WebhookObject)&gt;<div id="ModifyWebhookResponse"></div>

## ModifyWebhookResponse

https://discord.com/developers/docs/resources/webhook#modify-webhook

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#modify-webhook
type ModifyWebhookResponse = Response<objects.WebhookObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[WebhookObject](#WebhookObject)&gt;<div id="ModifyWebhookWithTokenResponse"></div>

## ModifyWebhookWithTokenResponse

https://discord.com/developers/docs/resources/webhook#modify-webhook-with-token

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#modify-webhook-with-token
type ModifyWebhookWithTokenResponse = Response<objects.WebhookObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[WebhookObject](#WebhookObject)&gt;<div id="DeleteWebhookResponse"></div>

## DeleteWebhookResponse

https://discord.com/developers/docs/resources/webhook#delete-webhook

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#delete-webhook
type DeleteWebhookResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="DeleteWebhookWitHTokenResponse"></div>

## DeleteWebhookWitHTokenResponse

https://discord.com/developers/docs/resources/webhook#delete-webhook-with-token

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#delete-webhook-with-token
type DeleteWebhookWitHTokenResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="ExecuteWebhookResponse"></div>

## ExecuteWebhookResponse

https://discord.com/developers/docs/resources/webhook#execute-webhook

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#execute-webhook
type ExecuteWebhookResponse = Response<objects.MessageObject?>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[MessageObject](#MessageObject)?&gt;<div id="ExecuteSlackCompatibleWebhookResponse"></div>

## ExecuteSlackCompatibleWebhookResponse

https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook
type ExecuteSlackCompatibleWebhookResponse = Response<unknown>
```

</details>

[Response](#Response)&lt;[unknown](#unknown)&gt;<div id="ExecuteGitCompatibleWebhookResponse"></div>

## ExecuteGitCompatibleWebhookResponse

https://discord.com/developers/docs/resources/webhook#execute-githubcompatible-webhook

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#execute-githubcompatible-webhook
type ExecuteGitCompatibleWebhookResponse = Response<unknown>
```

</details>

[Response](#Response)&lt;[unknown](#unknown)&gt;<div id="GetWebhookMessageResponse"></div>

## GetWebhookMessageResponse

https://discord.com/developers/docs/resources/webhook#get-webhook-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#get-webhook-message
type GetWebhookMessageResponse = Response<objects.MessageObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[MessageObject](#MessageObject)&gt;<div id="EditWebhookMessageResponse"></div>

## EditWebhookMessageResponse

https://discord.com/developers/docs/resources/webhook#edit-webhook-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#edit-webhook-message
type EditWebhookMessageResponse = Response<objects.MessageObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[MessageObject](#MessageObject)&gt;<div id="DeleteWebhookMessageResponse"></div>

## DeleteWebhookMessageResponse

https://discord.com/developers/docs/resources/webhook#delete-webhook-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#delete-webhook-message
type DeleteWebhookMessageResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="GetGatewayResponse"></div>

## GetGatewayResponse

https://discord.com/developers/docs/topics/gateway#get-gateway

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway#get-gateway
type GetGatewayResponse = Response<{
	url: string
}>
```

</details>

[Response](#Response)&lt;\{url: [string](#string)\}&gt;<div id="GetGatewayBotResponse"></div>

## GetGatewayBotResponse

https://discord.com/developers/docs/topics/gateway#get-gateway-bot

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway#get-gateway-bot
type GetGatewayBotResponse = Response<{
	url: string,

	-- WSS URL that can be used for connecting to the Gateway
	shards: number,

	-- Recommended number of shards to use when connecting
	session_start_limit: objects.SessionStartLimitObject
}>
```

</details>

[Response](#Response)&lt;\{url: [string](#string), shards: [number](#number), session_start_limit: [objects](#module.objects).[SessionStartLimitObject](#SessionStartLimitObject)\}&gt;<div id="CreateInteractionResponse"></div>

## CreateInteractionResponse

https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response
type CreateInteractionResponse = Response<{
	resource: {
		message: objects.MessageObject?
	}
}>
```

</details>

[Response](#Response)&lt;\{resource: \{message: [objects](#module.objects).[MessageObject](#MessageObject)?\}\}&gt;<div id="GetOriginalInteractionResponse"></div>

## GetOriginalInteractionResponse

https://discord.com/developers/docs/interactions/receiving-and-responding#get-original-interaction-response

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#get-original-interaction-response
type GetOriginalInteractionResponse = Response<objects.MessageObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[MessageObject](#MessageObject)&gt;<div id="EditOriginalInteractionResponse"></div>

## EditOriginalInteractionResponse

https://discord.com/developers/docs/interactions/receiving-and-responding#edit-original-interaction-response

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#edit-original-interaction-response
type EditOriginalInteractionResponse = Response<objects.MessageObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[MessageObject](#MessageObject)&gt;<div id="DeleteOriginalInteractionResponse"></div>

## DeleteOriginalInteractionResponse

https://discord.com/developers/docs/interactions/receiving-and-responding#delete-original-interaction-response

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#delete-original-interaction-response
type DeleteOriginalInteractionResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;<div id="CreateFollowupMessageResponse"></div>

## CreateFollowupMessageResponse

https://discord.com/developers/docs/interactions/receiving-and-responding#create-followup-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#create-followup-message
type CreateFollowupMessageResponse = Response<objects.MessageObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[MessageObject](#MessageObject)&gt;<div id="GetFollowupMessageResponse"></div>

## GetFollowupMessageResponse

https://discord.com/developers/docs/interactions/receiving-and-responding#get-followup-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#get-followup-message
type GetFollowupMessageResponse = Response<objects.MessageObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[MessageObject](#MessageObject)&gt;<div id="EditFollowupMessageResponse"></div>

## EditFollowupMessageResponse

https://discord.com/developers/docs/interactions/receiving-and-responding#edit-followup-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#edit-followup-message
type EditFollowupMessageResponse = Response<objects.MessageObject>
```

</details>

[Response](#Response)&lt;[objects](#module.objects).[MessageObject](#MessageObject)&gt;<div id="DeleteFollowupMessageResponse"></div>

## DeleteFollowupMessageResponse

https://discord.com/developers/docs/interactions/receiving-and-responding#delete-followup-message

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#delete-followup-message
type DeleteFollowupMessageResponse = Response<nil>
```

</details>

[Response](#Response)&lt;[nil](#nil)&gt;