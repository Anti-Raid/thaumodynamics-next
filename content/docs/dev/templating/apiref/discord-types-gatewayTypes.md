---
title: "@discord-types/gatewayTypes"
description: "API reference for @discord-types/gatewayTypes"
---

<div id="@discord-types/gatewayTypes"></div>

# @discord-types/gatewayTypes

<div id="Types"></div>

## Types

<div id="Payload"></div>

## Payload

\[\[ Base \]\] --

<details>
<summary>Raw Type</summary>

```luau
-- [[ Base ]] --
type Payload<DATA> = DATA
```

</details>

[DATA](#DATA)

<div id="IdentifyPayload"></div>

## IdentifyPayload

\[\[ Send Events - https://discord.com/developers/docs/topics/gateway-events#send-events \]\] --

https://discord.com/developers/docs/topics/gateway-events#identify

<details>
<summary>Raw Type</summary>

```luau
-- [[ Send Events - https://discord.com/developers/docs/topics/gateway-events#send-events ]] --
-- https://discord.com/developers/docs/topics/gateway-events#identify
type IdentifyPayload = Payload<{
	token: string,

	-- Authentication token
	properties: objects.IdentifyPropertiesObject,

	-- Connection properties
	compress: boolean?,

	-- Whether this connection supports compression of packets
	large_threshold: number?,

	-- Value between 50 and 250, total number of members where the gateway will stop sending offline members in the guild member list
	shard: {number}?,

	-- Used for Guild Sharding
	presence: objects.ActivityObject?,

	-- Presence structure for initial presence information
	intents: number
}>
```

</details>

[Payload](#Payload)&lt;\{token: [string](#string), properties: [objects](#module.objects).[IdentifyPropertiesObject](#IdentifyPropertiesObject), compress: [boolean](#boolean)?, large_threshold: [number](#number)?, shard: \{[number](#number)\}?, presence: [objects](#module.objects).[ActivityObject](#ActivityObject)?, intents: [number](#number)\}&gt;<div id="ResumePayload"></div>

## ResumePayload

https://discord.com/developers/docs/topics/gateway-events#resume

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#resume
type ResumePayload = Payload<{
	token: string,

	-- Session token
	session_id: string,

	-- Session ID
	seq: number
}>
```

</details>

[Payload](#Payload)&lt;\{token: [string](#string), session_id: [string](#string), seq: [number](#number)\}&gt;<div id="HeartbeatPayload"></div>

## HeartbeatPayload

https://discord.com/developers/docs/topics/gateway-events#heartbeat

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#heartbeat
type HeartbeatPayload = Payload<number>
```

</details>

[Payload](#Payload)&lt;[number](#number)&gt;<div id="RequestGuildMembersPayload"></div>

## RequestGuildMembersPayload

https://discord.com/developers/docs/topics/gateway-events#request-guild-members

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#request-guild-members
type RequestGuildMembersPayload = Payload<{
	guild_id: objects.Snowflake,

	-- ID of the guild to get members for
	query: string?,

	-- string that username starts with, or an empty string to return all members
	limit: number,

	-- maximum number of members to send matching the query; a limit of 0 can be used with an empty string query to return all members
	presences: boolean?,

	-- used to specify if we want the presences of the matched members
	user_ids: {objects.Snowflake}?,

	-- used to specify which users you wish to fetch
	nonce: string?
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake), query: [string](#string)?, limit: [number](#number), presences: [boolean](#boolean)?, user_ids: \{[objects](#module.objects).[Snowflake](#Snowflake)\}?, nonce: [string](#string)?\}&gt;<div id="UpdateVoiceStatePayload"></div>

## UpdateVoiceStatePayload

https://discord.com/developers/docs/topics/gateway-events#update-voice-state

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#update-voice-state
type UpdateVoiceStatePayload = Payload<{
	guild_id: objects.Snowflake,

	-- ID of the guild
	channel_id: string?,

	-- ID of the voice channel client wants to join (null if disconnecting)
	self_mute: boolean,

	-- Whether the client is muted
	self_deaf: boolean
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake), channel_id: [string](#string)?, self_mute: [boolean](#boolean), self_deaf: [boolean](#boolean)\}&gt;<div id="UpdatePresencePayload"></div>

## UpdatePresencePayload

https://discord.com/developers/docs/topics/gateway-events#update-presence

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#update-presence
type UpdatePresencePayload = Payload<objects.PresenceObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[PresenceObject](#PresenceObject)&gt;<div id="HelloPayload"></div>

## HelloPayload

\[\[ Receive Events - https://discord.com/developers/docs/topics/gateway-events#receive-events \]\] --

https://discord.com/developers/docs/topics/gateway-events#hello

<details>
<summary>Raw Type</summary>

```luau
-- [[ Receive Events - https://discord.com/developers/docs/topics/gateway-events#receive-events ]] --
-- https://discord.com/developers/docs/topics/gateway-events#hello
type HelloPayload = Payload<{
	heartbeat_interval: number
}>
```

</details>

[Payload](#Payload)&lt;\{heartbeat_interval: [number](#number)\}&gt;<div id="ReadyPayload"></div>

## ReadyPayload

https://discord.com/developers/docs/topics/gateway-events#ready

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#ready
type ReadyPayload = Payload<{
	v: number,

	user: objects.UserObject,

	guilds: {objects.UnavailableGuildObject},

	session_id: string,

	resume_gateway_url: string,

	shard: {number}?,

	application: objects.ApplicationObject
}>
```

</details>

[Payload](#Payload)&lt;\{v: [number](#number), user: [objects](#module.objects).[UserObject](#UserObject), guilds: \{[objects](#module.objects).[UnavailableGuildObject](#UnavailableGuildObject)\}, session_id: [string](#string), resume_gateway_url: [string](#string), shard: \{[number](#number)\}?, application: [objects](#module.objects).[ApplicationObject](#ApplicationObject)\}&gt;<div id="ResumedPayload"></div>

## ResumedPayload

https://discord.com/developers/docs/topics/gateway-events#resumed

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#resumed
type ResumedPayload = Payload<nil>
```

</details>

[Payload](#Payload)&lt;[nil](#nil)&gt;<div id="ReconnectPayload"></div>

## ReconnectPayload

https://discord.com/developers/docs/topics/gateway-events#reconnect

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#reconnect
type ReconnectPayload = Payload<boolean>
```

</details>

[Payload](#Payload)&lt;[boolean](#boolean)&gt;<div id="InvalidSessionPayload"></div>

## InvalidSessionPayload

https://discord.com/developers/docs/topics/gateway-events#invalid-session

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#invalid-session
type InvalidSessionPayload = Payload<boolean?>
```

</details>

[Payload](#Payload)&lt;[boolean](#boolean)?&gt;<div id="ApplicationCommandPermissionsCreatePayload"></div>

## ApplicationCommandPermissionsCreatePayload

https://discord.com/developers/docs/topics/gateway-events#auto-moderation-rule-create

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#auto-moderation-rule-create
type ApplicationCommandPermissionsCreatePayload = Payload<objects.AutomoderationRuleObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[AutomoderationRuleObject](#AutomoderationRuleObject)&gt;<div id="ApplicationCommandPermissionsUpdatePayload"></div>

## ApplicationCommandPermissionsUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#application-command-permissions-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#application-command-permissions-update
type ApplicationCommandPermissionsUpdatePayload = Payload<objects.AutomoderationRuleObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[AutomoderationRuleObject](#AutomoderationRuleObject)&gt;<div id="ApplicationCommandPermissionsDeletePayload"></div>

## ApplicationCommandPermissionsDeletePayload

https://discord.com/developers/docs/topics/gateway-events#auto-moderation-rule-delete

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#auto-moderation-rule-delete
type ApplicationCommandPermissionsDeletePayload = Payload<objects.AutomoderationRuleObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[AutomoderationRuleObject](#AutomoderationRuleObject)&gt;<div id="ApplicationCommandPermissionsExecutionPayload"></div>

## ApplicationCommandPermissionsExecutionPayload

https://discord.com/developers/docs/topics/gateway-events#auto-moderation-action-execution

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#auto-moderation-action-execution
type ApplicationCommandPermissionsExecutionPayload = Payload<{
	guild_id: objects.Snowflake,

	-- ID of the guild in which action was executed
	action: objects.AutomoderationActionObject,

	-- Action which was executed
	rule_id: objects.Snowflake,

	-- ID of the rule which action belongs to
	rule_trigger_type: objects.AutomoderationRuleTriggerType,

	-- Trigger type of rule which was triggered
	user_id: objects.Snowflake,

	-- ID of the user which generated the content which triggered the rule
	channel_id: objects.Snowflake?,

	-- ID of the channel in which user content was posted
	message_id: objects.Snowflake?,

	-- ID of any user message which content belongs to *
	alert_system_message_id: objects.Snowflake?,

	-- ID of any system auto moderation messages posted as a result of this action **
	content: string,

	-- User-generated text content
	matched_keyword: string?,

	-- Word or phrase configured in the rule that triggered the rule
	matched_content: string?
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake), action: [objects](#module.objects).[AutomoderationActionObject](#AutomoderationActionObject), rule_id: [objects](#module.objects).[Snowflake](#Snowflake), rule_trigger_type: [objects](#module.objects).[AutomoderationRuleTriggerType](#AutomoderationRuleTriggerType), user_id: [objects](#module.objects).[Snowflake](#Snowflake), channel_id: [objects](#module.objects).[Snowflake](#Snowflake)?, message_id: [objects](#module.objects).[Snowflake](#Snowflake)?, alert_system_message_id: [objects](#module.objects).[Snowflake](#Snowflake)?, content: [string](#string), matched_keyword: [string](#string)?, matched_content: [string](#string)?\}&gt;<div id="CreateChannelPayload"></div>

## CreateChannelPayload

https://discord.com/developers/docs/topics/gateway-events#channel-create

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#channel-create
type CreateChannelPayload = Payload<objects.ChannelObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[ChannelObject](#ChannelObject)&gt;<div id="UpdateChannelPayload"></div>

## UpdateChannelPayload

https://discord.com/developers/docs/topics/gateway-events#channel-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#channel-update
type UpdateChannelPayload = Payload<objects.ChannelObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[ChannelObject](#ChannelObject)&gt;<div id="DeleteChannelPayload"></div>

## DeleteChannelPayload

https://discord.com/developers/docs/topics/gateway-events#channel-delete

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#channel-delete
type DeleteChannelPayload = Payload<objects.ChannelObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[ChannelObject](#ChannelObject)&gt;<div id="ChannelPinsUpdatePayload"></div>

## ChannelPinsUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#channel-pins-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#channel-pins-update
type ChannelPinsUpdatePayload = Payload<{
	guild_id: objects.Snowflake?,

	channel_id: objects.Snowflake,

	last_pin_timestamp: string?
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake)?, channel_id: [objects](#module.objects).[Snowflake](#Snowflake), last_pin_timestamp: [string](#string)?\}&gt;<div id="CreateThreadPayload"></div>

## CreateThreadPayload

https://discord.com/developers/docs/topics/gateway-events#thread-create

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#thread-create
type CreateThreadPayload = Payload<objects.ChannelObject & {
	newly_created: boolean?
}>
```

</details>

[Payload](#Payload)&lt;([objects](#module.objects).[ChannelObject](#ChannelObject) & \{newly_created: [boolean](#boolean)?\})&gt;<div id="UpdateThreadPayload"></div>

## UpdateThreadPayload

https://discord.com/developers/docs/topics/gateway-events#thread-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#thread-update
type UpdateThreadPayload = Payload<objects.ChannelObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[ChannelObject](#ChannelObject)&gt;<div id="DeleteThreadPayload"></div>

## DeleteThreadPayload

https://discord.com/developers/docs/topics/gateway-events#thread-delete

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#thread-delete
type DeleteThreadPayload = Payload<{
	id: objects.Snowflake,

	-- ID of the thread
	guild_id: objects.Snowflake?,

	-- ID of the guild
	parent_id: objects.Snowflake?,

	-- ID of the parent channel
	type: objects.ChannelType
}>
```

</details>

[Payload](#Payload)&lt;\{id: [objects](#module.objects).[Snowflake](#Snowflake), guild_id: [objects](#module.objects).[Snowflake](#Snowflake)?, parent_id: [objects](#module.objects).[Snowflake](#Snowflake)?, type: [objects](#module.objects).[ChannelType](#ChannelType)\}&gt;<div id="ThreadListSyncPayload"></div>

## ThreadListSyncPayload

https://discord.com/developers/docs/topics/gateway-events#thread-list-sync

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#thread-list-sync
type ThreadListSyncPayload = Payload<{
	guild_id: objects.Snowflake,

	-- ID of the guild
	channel_ids: {objects.Snowflake}?,

	-- Parent channel IDs whose threads are being synced. If omitted, then threads were synced for the entire guild. This array may contain channel_ids that have no active threads as well, so you know to clear that data.
	threads: {objects.ChannelObject},

	-- All active threads in the given channels that the current user can access
	members: {objects.ThreadMemberObject}
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake), channel_ids: \{[objects](#module.objects).[Snowflake](#Snowflake)\}?, threads: \{[objects](#module.objects).[ChannelObject](#ChannelObject)\}, members: \{[objects](#module.objects).[ThreadMemberObject](#ThreadMemberObject)\}\}&gt;<div id="ThreadMemberUpdatePayload"></div>

## ThreadMemberUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#thread-member-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#thread-member-update
type ThreadMemberUpdatePayload = Payload<{
	guild_id: objects.Snowflake
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake)\}&gt;<div id="ThreadMembersUpdatePayload"></div>

## ThreadMembersUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#thread-member-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#thread-member-update
type ThreadMembersUpdatePayload = Payload<{
	id: objects.Snowflake,

	-- ID of the thread
	guild_id: objects.Snowflake,

	-- ID of the guild
	member_count: number,

	-- Approximate number of members in the thread, capped at 50
	added_members: {objects.ThreadMemberObject}?,

	-- Users who were added to the thread
	removed_member_ids: {objects.Snowflake}?
}>
```

</details>

[Payload](#Payload)&lt;\{id: [objects](#module.objects).[Snowflake](#Snowflake), guild_id: [objects](#module.objects).[Snowflake](#Snowflake), member_count: [number](#number), added_members: \{[objects](#module.objects).[ThreadMemberObject](#ThreadMemberObject)\}?, removed_member_ids: \{[objects](#module.objects).[Snowflake](#Snowflake)\}?\}&gt;<div id="EntitlementCreatePayload"></div>

## EntitlementCreatePayload

https://discord.com/developers/docs/topics/gateway-events#entitlement-create

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#entitlement-create
type EntitlementCreatePayload = Payload<objects.EntitlementObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[EntitlementObject](#EntitlementObject)&gt;<div id="EntitlementUpdatePayload"></div>

## EntitlementUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#entitlement-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#entitlement-update
type EntitlementUpdatePayload = Payload<objects.EntitlementObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[EntitlementObject](#EntitlementObject)&gt;<div id="EntitlementDeletePayload"></div>

## EntitlementDeletePayload

https://discord.com/developers/docs/topics/gateway-events#entitlement-delete

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#entitlement-delete
type EntitlementDeletePayload = Payload<objects.EntitlementObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[EntitlementObject](#EntitlementObject)&gt;<div id="GuildCreatePayload"></div>

## GuildCreatePayload

https://discord.com/developers/docs/topics/gateway-events#guild-create

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-create
type GuildCreatePayload = Payload<objects.UnavailableGuildObject | (objects.GuildObject & {
	joined_at: string,

	-- When this guild was joined at
	large: boolean,

	-- true if this is considered a large guild
	unavailable: boolean?,

	-- true if this guild is unavailable due to an outage
	member_count: number,

	-- Total number of members in this guild
	voice_states: {objects.VoiceStateObject},

	-- States of members currently in voice channels; lacks the guild_id key
	members: {objects.GuildMemberObject},

	-- Users in the guild
	channels: {objects.ChannelObject},

	-- Channels in the guild
	threads: {objects.ChannelObject},

	-- All active threads in the guild that current user has permission to view
	presences: {objects.PresenceUpdateObject},

	-- Presences of the members in the guild, will only include non-offline members if the size is greater than large threshold
	stage_instances: {objects.StageInstanceObject},

	-- Stage instances in the guild
	guild_scheduled_events: {objects.GuildScheduledEventObject}
})>
```

</details>

[Payload](#Payload)&lt;([objects](#module.objects).[UnavailableGuildObject](#UnavailableGuildObject) | ([objects](#module.objects).[GuildObject](#GuildObject) & \{joined_at: [string](#string), large: [boolean](#boolean), unavailable: [boolean](#boolean)?, member_count: [number](#number), voice_states: \{[objects](#module.objects).[VoiceStateObject](#VoiceStateObject)\}, members: \{[objects](#module.objects).[GuildMemberObject](#GuildMemberObject)\}, channels: \{[objects](#module.objects).[ChannelObject](#ChannelObject)\}, threads: \{[objects](#module.objects).[ChannelObject](#ChannelObject)\}, presences: \{[objects](#module.objects).[PresenceUpdateObject](#PresenceUpdateObject)\}, stage_instances: \{[objects](#module.objects).[StageInstanceObject](#StageInstanceObject)\}, guild_scheduled_events: \{[objects](#module.objects).[GuildScheduledEventObject](#GuildScheduledEventObject)\}\}))&gt;<div id="GuildUpdatePayload"></div>

## GuildUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#guild-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-update
type GuildUpdatePayload = Payload<objects.GuildObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[GuildObject](#GuildObject)&gt;<div id="GuildDeletePayload"></div>

## GuildDeletePayload

https://discord.com/developers/docs/topics/gateway-events#guild-delete

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-delete
type GuildDeletePayload = Payload<objects.UnavailableGuildObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[UnavailableGuildObject](#UnavailableGuildObject)&gt;<div id="GuildBanAddPayload"></div>

## GuildBanAddPayload

https://discord.com/developers/docs/topics/gateway-events#guild-ban-add

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-ban-add
type GuildBanAddPayload = Payload<{
	guild_id: objects.Snowflake,

	-- ID of the guild
	user: objects.UserObject
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake), user: [objects](#module.objects).[UserObject](#UserObject)\}&gt;<div id="GuildBanRemovePayload"></div>

## GuildBanRemovePayload

https://discord.com/developers/docs/topics/gateway-events#guild-ban-remove

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-ban-remove
type GuildBanRemovePayload = Payload<{
	guild_id: objects.Snowflake,

	-- ID of the guild
	user: objects.UserObject
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake), user: [objects](#module.objects).[UserObject](#UserObject)\}&gt;<div id="GuildEmojisUpdatePayload"></div>

## GuildEmojisUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#guild-emojis-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-emojis-update
type GuildEmojisUpdatePayload = Payload<{
	guild_id: objects.Snowflake,

	-- ID of the guild
	emojis: {objects.EmojiObject}
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake), emojis: \{[objects](#module.objects).[EmojiObject](#EmojiObject)\}\}&gt;<div id="GuildStickersUpdatePayload"></div>

## GuildStickersUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#guild-stickers-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-stickers-update
type GuildStickersUpdatePayload = Payload<{
	guild_id: objects.Snowflake,

	-- ID of the guild
	stickers: {objects.StickerObject}
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake), stickers: \{[objects](#module.objects).[StickerObject](#StickerObject)\}\}&gt;<div id="GuildIntegrationsUpdatePayload"></div>

## GuildIntegrationsUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#guild-integrations-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-integrations-update
type GuildIntegrationsUpdatePayload = Payload<{
	guild_id: objects.Snowflake
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake)\}&gt;<div id="GuildMemberAddPayload"></div>

## GuildMemberAddPayload

https://discord.com/developers/docs/topics/gateway-events#guild-member-add

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-member-add
type GuildMemberAddPayload = Payload<objects.GuildMemberObject & {
	guild_id: objects.Snowflake
}>
```

</details>

[Payload](#Payload)&lt;([objects](#module.objects).[GuildMemberObject](#GuildMemberObject) & \{guild_id: [objects](#module.objects).[Snowflake](#Snowflake)\})&gt;<div id="GuildMemberRemovePayload"></div>

## GuildMemberRemovePayload

https://discord.com/developers/docs/topics/gateway-events#guild-member-remove

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-member-remove
type GuildMemberRemovePayload = Payload<{
	guild_id: objects.Snowflake,

	--ID of the guild
	user: objects.UserObject
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake), user: [objects](#module.objects).[UserObject](#UserObject)\}&gt;<div id="GuildMemberUpdatePayload"></div>

## GuildMemberUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#guild-member-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-member-update
type GuildMemberUpdatePayload = Payload<{
	guild_id: objects.Snowflake,

	-- ID of the guild
	roles: {objects.Snowflake},

	-- User role ids
	user: objects.UserObject,

	-- The user effected
	nick: string?,

	-- Nickname of the user in the guild
	avatar: string?,

	-- Member's guild avatar hash
	joined_at: string?,

	-- When the user joined the guild
	premium_since: string?,

	-- When the user starting boosting the guild
	deaf: boolean?,

	-- Whether the user is deafened in voice channels
	mute: boolean?,

	-- Whether the user is muted in voice channels
	pending: boolean?,

	-- Whether the user has not yet passed the guild's Membership Screening requirements
	communication_disabled_until: string?,

	-- When the user's timeout will expire and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed out
	flags: number?,

	-- Guild member flags represented as a bit set, defaults to 0
	avatar_decoration_data: objects.AvatarDecorationDataObject?
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake), roles: \{[objects](#module.objects).[Snowflake](#Snowflake)\}, user: [objects](#module.objects).[UserObject](#UserObject), nick: [string](#string)?, avatar: [string](#string)?, joined_at: [string](#string)?, premium_since: [string](#string)?, deaf: [boolean](#boolean)?, mute: [boolean](#boolean)?, pending: [boolean](#boolean)?, communication_disabled_until: [string](#string)?, flags: [number](#number)?, avatar_decoration_data: [objects](#module.objects).[AvatarDecorationDataObject](#AvatarDecorationDataObject)?\}&gt;<div id="GuildMembersChunkPayload"></div>

## GuildMembersChunkPayload

https://discord.com/developers/docs/topics/gateway-events#guild-members-chunk

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-members-chunk
type GuildMembersChunkPayload = Payload<{
	guild_id: objects.Snowflake,

	-- ID of the guild
	members: {objects.GuildMemberObject},

	-- Set of guild members
	chunk_index: number,

	-- Chunk index in the expected chunks for this response (0 <= chunk_index < chunk_count)
	chunk_count: number,

	-- Total number of expected chunks for this response
	not_found: {unknown}?,

	-- When passing an invalid ID to REQUEST_GUILD_MEMBERS, it will be returned here
	presences: {objects.PresenceObject}?,

	-- When passing true to REQUEST_GUILD_MEMBERS, presences of the returned members will be here
	nonce: string?
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake), members: \{[objects](#module.objects).[GuildMemberObject](#GuildMemberObject)\}, chunk_index: [number](#number), chunk_count: [number](#number), not_found: \{[unknown](#unknown)\}?, presences: \{[objects](#module.objects).[PresenceObject](#PresenceObject)\}?, nonce: [string](#string)?\}&gt;<div id="GuildRoleCreatePayload"></div>

## GuildRoleCreatePayload

https://discord.com/developers/docs/topics/gateway-events#guild-role-create

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-role-create
type GuildRoleCreatePayload = Payload<{
	guild_id: objects.Snowflake,

	-- ID of the guild
	role: objects.GuildRoleObject
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake), role: [objects](#module.objects).[GuildRoleObject](#GuildRoleObject)\}&gt;<div id="GuildRoleUpdatePayload"></div>

## GuildRoleUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#guild-role-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-role-update
type GuildRoleUpdatePayload = Payload<{
	guild_id: objects.Snowflake,

	-- ID of the guild
	role: objects.GuildRoleObject
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake), role: [objects](#module.objects).[GuildRoleObject](#GuildRoleObject)\}&gt;<div id="GuildRoleDeletePayload"></div>

## GuildRoleDeletePayload

https://discord.com/developers/docs/topics/gateway-events#guild-role-delete

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-role-delete
type GuildRoleDeletePayload = Payload<{
	guild_id: objects.Snowflake,

	-- ID of the guild
	role_id: objects.Snowflake
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake), role_id: [objects](#module.objects).[Snowflake](#Snowflake)\}&gt;<div id="GuildScheduledEventCreatePayload"></div>

## GuildScheduledEventCreatePayload

https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-create

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-create
type GuildScheduledEventCreatePayload = Payload<objects.GuildScheduledEventObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[GuildScheduledEventObject](#GuildScheduledEventObject)&gt;<div id="GuildScheduledEventUpdatePayload"></div>

## GuildScheduledEventUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-create

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-create
type GuildScheduledEventUpdatePayload = Payload<objects.GuildScheduledEventObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[GuildScheduledEventObject](#GuildScheduledEventObject)&gt;<div id="GuildScheduledEventDeletePayload"></div>

## GuildScheduledEventDeletePayload

https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-create

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-create
type GuildScheduledEventDeletePayload = Payload<objects.GuildScheduledEventObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[GuildScheduledEventObject](#GuildScheduledEventObject)&gt;<div id="GuildScheduledEventUserAddPayload"></div>

## GuildScheduledEventUserAddPayload

https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-create

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-create
type GuildScheduledEventUserAddPayload = Payload<{
	guild_scheduled_event_id: objects.Snowflake,

	-- ID of the guild scheduled event
	user_id: objects.Snowflake,

	-- ID of the user
	guild_id: objects.Snowflake
}>
```

</details>

[Payload](#Payload)&lt;\{guild_scheduled_event_id: [objects](#module.objects).[Snowflake](#Snowflake), user_id: [objects](#module.objects).[Snowflake](#Snowflake), guild_id: [objects](#module.objects).[Snowflake](#Snowflake)\}&gt;<div id="GuildScheduledEventUserRemovePayload"></div>

## GuildScheduledEventUserRemovePayload

https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-create

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-create
type GuildScheduledEventUserRemovePayload = Payload<{
	guild_scheduled_event_id: objects.Snowflake,

	-- ID of the guild scheduled event
	user_id: objects.Snowflake,

	-- ID of the user
	guild_id: objects.Snowflake
}>
```

</details>

[Payload](#Payload)&lt;\{guild_scheduled_event_id: [objects](#module.objects).[Snowflake](#Snowflake), user_id: [objects](#module.objects).[Snowflake](#Snowflake), guild_id: [objects](#module.objects).[Snowflake](#Snowflake)\}&gt;<div id="IntegrationCreatePayload"></div>

## IntegrationCreatePayload

https://discord.com/developers/docs/topics/gateway-events#integration-create

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#integration-create
type IntegrationCreatePayload = Payload<objects.IntegrationObject & {
	guild_id: objects.Snowflake?
}>
```

</details>

[Payload](#Payload)&lt;([objects](#module.objects).[IntegrationObject](#IntegrationObject) & \{guild_id: [objects](#module.objects).[Snowflake](#Snowflake)?\})&gt;<div id="IntegrationUpdatePayload"></div>

## IntegrationUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#integration-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#integration-update
type IntegrationUpdatePayload = Payload<objects.IntegrationObject & {
	guild_id: objects.Snowflake?
}>
```

</details>

[Payload](#Payload)&lt;([objects](#module.objects).[IntegrationObject](#IntegrationObject) & \{guild_id: [objects](#module.objects).[Snowflake](#Snowflake)?\})&gt;<div id="IntegrationDeletePayload"></div>

## IntegrationDeletePayload

https://discord.com/developers/docs/topics/gateway-events#integration-delete

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#integration-delete
type IntegrationDeletePayload = Payload<objects.IntegrationObject & {
	id: objects.Snowflake?,

	-- Integration ID
	guild_id: objects.Snowflake,

	-- ID of the guild
	application_id: objects.Snowflake?
}>
```

</details>

[Payload](#Payload)&lt;([objects](#module.objects).[IntegrationObject](#IntegrationObject) & \{id: [objects](#module.objects).[Snowflake](#Snowflake)?, guild_id: [objects](#module.objects).[Snowflake](#Snowflake), application_id: [objects](#module.objects).[Snowflake](#Snowflake)?\})&gt;<div id="InteractionCreatePayload"></div>

## InteractionCreatePayload

https://discord.com/developers/docs/topics/gateway-events#interaction-create

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#interaction-create
type InteractionCreatePayload = Payload<objects.InteractionObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[InteractionObject](#InteractionObject)&gt;<div id="InviteCreatePayload"></div>

## InviteCreatePayload

https://discord.com/developers/docs/topics/gateway-events#invite-create

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#invite-create
type InviteCreatePayload = Payload<{
	channel_id: objects.Snowflake,

	-- Channel the invite is for
	code: string,

	-- Unique invite code
	created_at: string,

	-- Time at which the invite was created
	guild_id: objects.Snowflake?,

	-- Guild of the invite
	inviter: objects.UserObject?,

	-- User that created the invite
	max_age: number,

	-- How long the invite is valid for (in seconds)
	max_uses: number,

	-- Maximum number of times the invite can be used
	target_type: objects.InviteTargetTypes?,

	-- Type of target for this voice channel invite
	target_user: objects.UserObject?,

	-- User whose stream to display for this voice channel stream invite
	target_application: objects.ApplicationObject?,

	-- Embedded application to open for this voice channel embedded application invite
	temporary: boolean,

	-- Whether or not the invite is temporary (invited users will be kicked on disconnect unless they're assigned a role)
	uses: number
}>
```

</details>

[Payload](#Payload)&lt;\{channel_id: [objects](#module.objects).[Snowflake](#Snowflake), code: [string](#string), created_at: [string](#string), guild_id: [objects](#module.objects).[Snowflake](#Snowflake)?, inviter: [objects](#module.objects).[UserObject](#UserObject)?, max_age: [number](#number), max_uses: [number](#number), target_type: [objects](#module.objects).[InviteTargetTypes](#InviteTargetTypes)?, target_user: [objects](#module.objects).[UserObject](#UserObject)?, target_application: [objects](#module.objects).[ApplicationObject](#ApplicationObject)?, temporary: [boolean](#boolean), uses: [number](#number)\}&gt;<div id="InviteDeletePayload"></div>

## InviteDeletePayload

https://discord.com/developers/docs/topics/gateway-events#invite-delete

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#invite-delete
type InviteDeletePayload = Payload<{
	channel_id: objects.Snowflake,

	-- Channel of the invite
	code: string,

	-- Unique invite code
	guild_id: objects.Snowflake?
}>
```

</details>

[Payload](#Payload)&lt;\{channel_id: [objects](#module.objects).[Snowflake](#Snowflake), code: [string](#string), guild_id: [objects](#module.objects).[Snowflake](#Snowflake)?\}&gt;<div id="MessageCreatePayload"></div>

## MessageCreatePayload

https://discord.com/developers/docs/topics/gateway-events#message-create

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#message-create
type MessageCreatePayload = Payload<objects.MessageObject & {
	mentions: {objects.UserObject & {
		member: objects.GuildMemberObject
	}},

	-- Users specifically mentioned in the message
	member: objects.GuildMemberObject?,

	-- Member properties for this message's author. Missing for ephemeral messages and messages from webhooks
	guild_id: objects.Snowflake?
}>
```

</details>

[Payload](#Payload)&lt;([objects](#module.objects).[MessageObject](#MessageObject) & \{mentions: \{([objects](#module.objects).[UserObject](#UserObject) & \{member: [objects](#module.objects).[GuildMemberObject](#GuildMemberObject)\})\}, member: [objects](#module.objects).[GuildMemberObject](#GuildMemberObject)?, guild_id: [objects](#module.objects).[Snowflake](#Snowflake)?\})&gt;<div id="MessageUpdatePayload"></div>

## MessageUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#message-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#message-update
type MessageUpdatePayload = Payload<objects.MessageObject & {
	mentions: {objects.UserObject & {
		member: objects.GuildMemberObject
	}},

	-- Users specifically mentioned in the message
	member: objects.GuildMemberObject?,

	-- Member properties for this message's author. Missing for ephemeral messages and messages from webhooks
	guild_id: objects.Snowflake?
}>
```

</details>

[Payload](#Payload)&lt;([objects](#module.objects).[MessageObject](#MessageObject) & \{mentions: \{([objects](#module.objects).[UserObject](#UserObject) & \{member: [objects](#module.objects).[GuildMemberObject](#GuildMemberObject)\})\}, member: [objects](#module.objects).[GuildMemberObject](#GuildMemberObject)?, guild_id: [objects](#module.objects).[Snowflake](#Snowflake)?\})&gt;<div id="MessageDeletePayload"></div>

## MessageDeletePayload

https://discord.com/developers/docs/topics/gateway-events#message-delete

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#message-delete
type MessageDeletePayload = Payload<{
	id: objects.Snowflake,

	-- ID of the messages
	channel_id: objects.Snowflake,

	-- ID of the channel
	guild_id: objects.Snowflake?
}>
```

</details>

[Payload](#Payload)&lt;\{id: [objects](#module.objects).[Snowflake](#Snowflake), channel_id: [objects](#module.objects).[Snowflake](#Snowflake), guild_id: [objects](#module.objects).[Snowflake](#Snowflake)?\}&gt;<div id="MessageDeleteBulkPayload"></div>

## MessageDeleteBulkPayload

https://discord.com/developers/docs/topics/gateway-events#message-delete-bulk

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#message-delete-bulk
type MessageDeleteBulkPayload = Payload<{
	ids: {objects.Snowflake},

	-- IDs of the messages
	channel_id: objects.Snowflake,

	-- ID of the channel
	guild_id: objects.Snowflake?
}>
```

</details>

[Payload](#Payload)&lt;\{ids: \{[objects](#module.objects).[Snowflake](#Snowflake)\}, channel_id: [objects](#module.objects).[Snowflake](#Snowflake), guild_id: [objects](#module.objects).[Snowflake](#Snowflake)?\}&gt;<div id="MessageReactionAddPayload"></div>

## MessageReactionAddPayload

https://discord.com/developers/docs/topics/gateway-events#message-reaction-add

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#message-reaction-add
type MessageReactionAddPayload = Payload<{
	user_id: objects.Snowflake,

	-- ID of the user
	channel_id: objects.Snowflake,

	-- ID of the channel
	message_id: objects.Snowflake,

	-- ID of the message
	guild_id: objects.Snowflake?,

	-- ID of the guild
	member: objects.GuildMemberObject?,

	-- Member who reacted if this happened in a guild
	emoji: objects.EmojiObject,

	-- Emoji used to react - example
	message_author_id: objects.Snowflake?,

	-- ID of the user who authored the message which was reacted to
	burst: boolean,

	-- true if this is a super-reaction
	burst_colors: {string},

	-- Colors used for super-reaction animation in "#rrggbb" format
	type: objects.ReactionType
}>
```

</details>

[Payload](#Payload)&lt;\{user_id: [objects](#module.objects).[Snowflake](#Snowflake), channel_id: [objects](#module.objects).[Snowflake](#Snowflake), message_id: [objects](#module.objects).[Snowflake](#Snowflake), guild_id: [objects](#module.objects).[Snowflake](#Snowflake)?, member: [objects](#module.objects).[GuildMemberObject](#GuildMemberObject)?, emoji: [objects](#module.objects).[EmojiObject](#EmojiObject), message_author_id: [objects](#module.objects).[Snowflake](#Snowflake)?, burst: [boolean](#boolean), burst_colors: \{[string](#string)\}, type: [objects](#module.objects).[ReactionType](#ReactionType)\}&gt;<div id="MessageReactionRemovePayload"></div>

## MessageReactionRemovePayload

https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove
type MessageReactionRemovePayload = Payload<{
	user_id: objects.Snowflake,

	-- ID of the user
	channel_id: objects.Snowflake,

	-- ID of the channel
	message_id: objects.Snowflake,

	-- ID of the message
	guild_id: objects.Snowflake?,

	-- ID of the guild
	emoji: objects.EmojiObject,

	-- Emoji used to react - example
	burst: boolean,

	-- true if this was a super-reaction
	type: objects.ReactionType
}>
```

</details>

[Payload](#Payload)&lt;\{user_id: [objects](#module.objects).[Snowflake](#Snowflake), channel_id: [objects](#module.objects).[Snowflake](#Snowflake), message_id: [objects](#module.objects).[Snowflake](#Snowflake), guild_id: [objects](#module.objects).[Snowflake](#Snowflake)?, emoji: [objects](#module.objects).[EmojiObject](#EmojiObject), burst: [boolean](#boolean), type: [objects](#module.objects).[ReactionType](#ReactionType)\}&gt;<div id="MessageReactionRemoveAllPayload"></div>

## MessageReactionRemoveAllPayload

https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-all

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-all
type MessageReactionRemoveAllPayload = Payload<{
	channel_id: objects.Snowflake,

	-- ID of the channel
	message_id: objects.Snowflake,

	-- ID of the guild
	guild_id: objects.Snowflake?
}>
```

</details>

[Payload](#Payload)&lt;\{channel_id: [objects](#module.objects).[Snowflake](#Snowflake), message_id: [objects](#module.objects).[Snowflake](#Snowflake), guild_id: [objects](#module.objects).[Snowflake](#Snowflake)?\}&gt;<div id="MessageReactionRemoveEmojiPayload"></div>

## MessageReactionRemoveEmojiPayload

https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-emoji

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-emoji
type MessageReactionRemoveEmojiPayload = Payload<{
	channel_id: objects.Snowflake,

	-- ID of the channel
	message_id: objects.Snowflake,

	-- ID of the guild
	guild_id: objects.Snowflake?,

	-- ID of the message
	emoji: objects.EmojiObject
}>
```

</details>

[Payload](#Payload)&lt;\{channel_id: [objects](#module.objects).[Snowflake](#Snowflake), message_id: [objects](#module.objects).[Snowflake](#Snowflake), guild_id: [objects](#module.objects).[Snowflake](#Snowflake)?, emoji: [objects](#module.objects).[EmojiObject](#EmojiObject)\}&gt;<div id="PresenceUpdatePayload"></div>

## PresenceUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#presence-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#presence-update
type PresenceUpdatePayload = Payload<{
	user: objects.UserObject,

	-- User whose presence is being updated
	guild_id: objects.Snowflake,

	-- ID of the guild
	status: string,

	-- Either "idle", "dnd", "online", or "offline"
	activities: {objects.ActivityObject},

	-- User's current activities
	client_status: objects.ClientStatusObject
}>
```

</details>

[Payload](#Payload)&lt;\{user: [objects](#module.objects).[UserObject](#UserObject), guild_id: [objects](#module.objects).[Snowflake](#Snowflake), status: [string](#string), activities: \{[objects](#module.objects).[ActivityObject](#ActivityObject)\}, client_status: [objects](#module.objects).[ClientStatusObject](#ClientStatusObject)\}&gt;<div id="StageInstanceCreate"></div>

## StageInstanceCreate

https://discord.com/developers/docs/topics/gateway-events#stage-instance-create

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#stage-instance-create
type StageInstanceCreate = Payload<objects.StageInstanceObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[StageInstanceObject](#StageInstanceObject)&gt;<div id="StageInstanceUpdate"></div>

## StageInstanceUpdate

https://discord.com/developers/docs/topics/gateway-events#stage-instance-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#stage-instance-update
type StageInstanceUpdate = Payload<objects.StageInstanceObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[StageInstanceObject](#StageInstanceObject)&gt;<div id="StageInstanceDelete"></div>

## StageInstanceDelete

https://discord.com/developers/docs/topics/gateway-events#stage-instance-delete

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#stage-instance-delete
type StageInstanceDelete = Payload<objects.StageInstanceObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[StageInstanceObject](#StageInstanceObject)&gt;<div id="TypingStartPayload"></div>

## TypingStartPayload

https://discord.com/developers/docs/topics/gateway-events#typing-start

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#typing-start
type TypingStartPayload = Payload<{
	channel_id: objects.Snowflake,

	-- ID of the channel
	guild_id: objects.Snowflake?,

	-- ID of the guild
	user_id: objects.Snowflake,

	-- ID of the user
	timestamp: number,

	-- Unix time (in seconds) of when the user started typing
	member: objects.GuildMemberObject?
}>
```

</details>

[Payload](#Payload)&lt;\{channel_id: [objects](#module.objects).[Snowflake](#Snowflake), guild_id: [objects](#module.objects).[Snowflake](#Snowflake)?, user_id: [objects](#module.objects).[Snowflake](#Snowflake), timestamp: [number](#number), member: [objects](#module.objects).[GuildMemberObject](#GuildMemberObject)?\}&gt;<div id="UserUpdatePayload"></div>

## UserUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#user-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#user-update
type UserUpdatePayload = Payload<objects.UserObject>
```

</details>

[Payload](#Payload)&lt;[objects](#module.objects).[UserObject](#UserObject)&gt;<div id="VoiceStateUpdatePayload"></div>

## VoiceStateUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#voice-state-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#voice-state-update
type VoiceStateUpdatePayload = Payload<{
	token: string,

	-- Voice connection token
	guild_id: objects.Snowflake,

	-- Guild this voice server update is for
	endpoint: string?
}>
```

</details>

[Payload](#Payload)&lt;\{token: [string](#string), guild_id: [objects](#module.objects).[Snowflake](#Snowflake), endpoint: [string](#string)?\}&gt;<div id="VoiceServerUpdatePayload"></div>

## VoiceServerUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#voice-server-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#voice-server-update
type VoiceServerUpdatePayload = Payload<{
	token: string,

	-- Voice connection token
	guild_id: objects.Snowflake,

	-- Guild this voice server update is for
	endpoint: string?
}>
```

</details>

[Payload](#Payload)&lt;\{token: [string](#string), guild_id: [objects](#module.objects).[Snowflake](#Snowflake), endpoint: [string](#string)?\}&gt;<div id="WebhooksUpdatePayload"></div>

## WebhooksUpdatePayload

https://discord.com/developers/docs/topics/gateway-events#webhooks-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#webhooks-update
type WebhooksUpdatePayload = Payload<{
	guild_id: objects.Snowflake,

	-- ID of the guild
	channel_id: objects.Snowflake
}>
```

</details>

[Payload](#Payload)&lt;\{guild_id: [objects](#module.objects).[Snowflake](#Snowflake), channel_id: [objects](#module.objects).[Snowflake](#Snowflake)\}&gt;<div id="MessagePollVoteAdd"></div>

## MessagePollVoteAdd

https://discord.com/developers/docs/topics/gateway-events#message-poll-vote-add

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#message-poll-vote-add
type MessagePollVoteAdd = Payload<{
	user_id: objects.Snowflake,

	-- ID of the user
	channel_id: objects.Snowflake,

	-- ID of the channel
	message_id: objects.Snowflake,

	-- ID of the message
	guild_id: objects.Snowflake?,

	-- ID of the guild
	answer_id: number
}>
```

</details>

[Payload](#Payload)&lt;\{user_id: [objects](#module.objects).[Snowflake](#Snowflake), channel_id: [objects](#module.objects).[Snowflake](#Snowflake), message_id: [objects](#module.objects).[Snowflake](#Snowflake), guild_id: [objects](#module.objects).[Snowflake](#Snowflake)?, answer_id: [number](#number)\}&gt;<div id="MessagePollVoteRemove"></div>

## MessagePollVoteRemove

https://discord.com/developers/docs/topics/gateway-events#message-poll-vote-remove

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#message-poll-vote-remove
type MessagePollVoteRemove = Payload<{
	user_id: objects.Snowflake,

	-- ID of the user
	channel_id: objects.Snowflake,

	-- ID of the channel
	message_id: objects.Snowflake,

	-- ID of the message
	guild_id: objects.Snowflake?,

	-- ID of the guild
	answer_id: number
}>
```

</details>

[Payload](#Payload)&lt;\{user_id: [objects](#module.objects).[Snowflake](#Snowflake), channel_id: [objects](#module.objects).[Snowflake](#Snowflake), message_id: [objects](#module.objects).[Snowflake](#Snowflake), guild_id: [objects](#module.objects).[Snowflake](#Snowflake)?, answer_id: [number](#number)\}&gt;