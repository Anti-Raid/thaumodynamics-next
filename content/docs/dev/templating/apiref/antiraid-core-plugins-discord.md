---
title: "@antiraid-core/plugins/discord"
description: "API reference for @antiraid-core/plugins/discord"
---

<div id="@antiraid-core/plugins/discord"></div>

# @antiraid-core/plugins/discord

<div id="Types"></div>

## Types

<div id="GetAuditLogOptions"></div>

## GetAuditLogOptions

Options for getting audit logs in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for getting audit logs in Discord
type GetAuditLogOptions = {
	--- The action type to filter by
	action_type: discord.AuditLogEventType?,

	--- The user ID to filter by
	user_id: discord.Snowflake?,

	--- The audit log entry ID to filter
	before: discord.Snowflake?,

	--- The number of entries to return
	limit: number?
}
```

</details>

<TypeTable
	type={{
		"action_type": {
			type: "[discord](#module.discord).[AuditLogEventType](#AuditLogEventType)?",
			description: "The action type to filter by",
			required: false
		},
		"user_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)?",
			description: "The user ID to filter by",
			required: false
		},
		"before": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)?",
			description: "The audit log entry ID to filter",
			required: false
		},
		"limit": {
			type: "[number](#number)?",
			description: "The number of entries to return",
			required: false
		},
	}}
/>
<div id="GetAutoModerationRuleOptions"></div>

## GetAutoModerationRuleOptions

Options for getting an auto moderation rule in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for getting an auto moderation rule in Discord
type GetAutoModerationRuleOptions = {
	--- The rule ID
	rule_id: discord.Snowflake
}
```

</details>

<TypeTable
	type={{
		"rule_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The rule ID",
			required: true
		},
	}}
/>
<div id="CreateAutoModerationRuleOptions"></div>

## CreateAutoModerationRuleOptions

Options for creating an auto moderation rule in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for creating an auto moderation rule in Discord
type CreateAutoModerationRuleOptions = {
	--- The reason for creating the rule
	reason: string,

	--- The data to create the rule with
	data: discordRest.CreateAutoModerationRuleRequest
}
```

</details>

<TypeTable
	type={{
		"reason": {
			type: "[string](#string)",
			description: "The reason for creating the rule",
			required: true
		},
		"data": {
			type: "[discordRest](#module.discordRest).[CreateAutoModerationRuleRequest](#CreateAutoModerationRuleRequest)",
			description: "The data to create the rule with",
			required: true
		},
	}}
/>
<div id="EditAutoModerationRuleOptions"></div>

## EditAutoModerationRuleOptions

Options for editing an auto moderation rule in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for editing an auto moderation rule in Discord
type EditAutoModerationRuleOptions = {
	--- The rule ID
	rule_id: discord.Snowflake,

	--- The reason for editing the rule
	reason: string,

	--- The data to edit the rule with
	data: discordRest.ModifyAutoModerationRuleRequest
}
```

</details>

<TypeTable
	type={{
		"rule_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The rule ID",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "The reason for editing the rule",
			required: true
		},
		"data": {
			type: "[discordRest](#module.discordRest).[ModifyAutoModerationRuleRequest](#ModifyAutoModerationRuleRequest)",
			description: "The data to edit the rule with",
			required: true
		},
	}}
/>
<div id="DeleteAutoModerationRuleOptions"></div>

## DeleteAutoModerationRuleOptions

Options for deleting an auto moderation rule in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for deleting an auto moderation rule in Discord
type DeleteAutoModerationRuleOptions = {
	--- The rule ID
	rule_id: discord.Snowflake,

	--- The reason for deleting the rule
	reason: string
}
```

</details>

<TypeTable
	type={{
		"rule_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The rule ID",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "The reason for deleting the rule",
			required: true
		},
	}}
/>
<div id="EditChannelOptions"></div>

## EditChannelOptions

Options for editing a channel in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for editing a channel in Discord
type EditChannelOptions = {
	--- The channel ID
	channel_id: discord.Snowflake,

	--- The reason for the edit
	reason: string,

	--- The data to edit the channel with
	data: discordRest.ModifyChannelRequest
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The channel ID",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "The reason for the edit",
			required: true
		},
		"data": {
			type: "[discordRest](#module.discordRest).[ModifyChannelRequest](#ModifyChannelRequest)",
			description: "The data to edit the channel with",
			required: true
		},
	}}
/>
<div id="DeleteChannelOptions"></div>

## DeleteChannelOptions

Options for deleting a channel in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for deleting a channel in Discord
type DeleteChannelOptions = {
	--- The channel ID
	channel_id: discord.Snowflake,

	--- The reason for the deletion
	reason: string
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The channel ID",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "The reason for the deletion",
			required: true
		},
	}}
/>
<div id="EditChannelPermissionsOptions"></div>

## EditChannelPermissionsOptions

Options for editting channel permissions

<details>
<summary>Raw Type</summary>

```luau
--- Options for editting channel permissions
type EditChannelPermissionsOptions = {
	--- The channel ID
	channel_id: discord.Snowflake,

	--- The target ID to edit permissions of
	target_id: discord.Snowflake,

	--- The allow permissions
	allow: typesext.MultiOption<string>,

	--- The deny permissions
	deny: typesext.MultiOption<string>,

	--- The type of the target
	kind: discord.OverwriteObjectType,

	--- The reason for the edit
	reason: string
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The channel ID",
			required: true
		},
		"target_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The target ID to edit permissions of",
			required: true
		},
		"allow": {
			type: "[typesext](#module.typesext).[MultiOption](#MultiOption)&lt;[string](#string)&gt;",
			description: "The allow permissions",
			required: true
		},
		"deny": {
			type: "[typesext](#module.typesext).[MultiOption](#MultiOption)&lt;[string](#string)&gt;",
			description: "The deny permissions",
			required: true
		},
		"kind": {
			type: "[discord](#module.discord).[OverwriteObjectType](#OverwriteObjectType)",
			description: "The type of the target",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "The reason for the edit",
			required: true
		},
	}}
/>
<div id="CreateChannelOptions"></div>

## CreateChannelOptions

Options for editing a channel in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for editing a channel in Discord
type CreateChannelOptions = {
	--- The reason for the create
	reason: string,

	--- The data to edit the channel with
	data: discordRest.CreateGuildChannelRequest
}
```

</details>

<TypeTable
	type={{
		"reason": {
			type: "[string](#string)",
			description: "The reason for the create",
			required: true
		},
		"data": {
			type: "[discordRest](#module.discordRest).[CreateGuildChannelRequest](#CreateGuildChannelRequest)",
			description: "The data to edit the channel with",
			required: true
		},
	}}
/>
<div id="AddGuildMemberRoleOptions"></div>

## AddGuildMemberRoleOptions

Options for adding a role to a member

<details>
<summary>Raw Type</summary>

```luau
--- Options for adding a role to a member
type AddGuildMemberRoleOptions = {
	--- The member ID
	user_id: discord.Snowflake,

	--- The role ID
	role_id: discord.Snowflake,

	--- The reason for adding the role
	reason: string
}
```

</details>

<TypeTable
	type={{
		"user_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The member ID",
			required: true
		},
		"role_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The role ID",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "The reason for adding the role",
			required: true
		},
	}}
/>
<div id="RemoveGuildMemberRoleOptions"></div>

## RemoveGuildMemberRoleOptions

Options for removing a role from a member

<details>
<summary>Raw Type</summary>

```luau
--- Options for removing a role from a member
type RemoveGuildMemberRoleOptions = {
	--- The member ID
	user_id: discord.Snowflake,

	--- The role ID
	role_id: discord.Snowflake,

	--- The reason for adding the role
	reason: string
}
```

</details>

<TypeTable
	type={{
		"user_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The member ID",
			required: true
		},
		"role_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The role ID",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "The reason for adding the role",
			required: true
		},
	}}
/>
<div id="RemoveGuildMemberOptions"></div>

## RemoveGuildMemberOptions

Options for removing a member from a guild

<details>
<summary>Raw Type</summary>

```luau
--- Options for removing a member from a guild
type RemoveGuildMemberOptions = {
	--- The member ID
	user_id: discord.Snowflake,

	--- The reason for removing the member
	reason: string
}
```

</details>

<TypeTable
	type={{
		"user_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The member ID",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "The reason for removing the member",
			required: true
		},
	}}
/>
<div id="GetGuildBansOptions"></div>

## GetGuildBansOptions

Options for getting guild bans



Note: If both \`before\` and \`after\` are provided, \`before\` will take precedence.

<details>
<summary>Raw Type</summary>

```luau
--- Options for getting guild bans
---
--- Note: If both \`before\` and \`after\` are provided, \`before\` will take precedence.
type GetGuildBansOptions = {
	--- The limit of bans to get (max 100)
	limit: number?,

	--- Before a certain user ID
	before: discord.Snowflake?,

	--- After a certain user ID
	after: discord.Snowflake?
}
```

</details>

<TypeTable
	type={{
		"limit": {
			type: "[number](#number)?",
			description: "The limit of bans to get (max 100)",
			required: false
		},
		"before": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)?",
			description: "Before a certain user ID",
			required: false
		},
		"after": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)?",
			description: "After a certain user ID",
			required: false
		},
	}}
/>
<div id="CreateMessageOptions"></div>

## CreateMessageOptions

Options for sending a message to a channel in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for sending a message to a channel in Discord
type CreateMessageOptions = {
	--- The channel ID
	channel_id: discord.Snowflake,

	--- The data to send the message with
	data: discordRest.CreateMessageRequest
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The channel ID",
			required: true
		},
		"data": {
			type: "[discordRest](#module.discordRest).[CreateMessageRequest](#CreateMessageRequest)",
			description: "The data to send the message with",
			required: true
		},
	}}
/>
<div id="ReactionType"></div>

## ReactionType

<details>
<summary>Raw Type</summary>

```luau
type ReactionType = {
	type: "Unicode",

	data: string
} | {
	type: "Custom",

	animated: boolean,

	id: discord.Snowflake,

	name: string?
}
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

<TypeTable
	type={{
		"type": {
			type: "'Unicode'",
			description: "",
			required: true
		},
		"data": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
</details>

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"type": {
			type: "'Custom'",
			description: "",
			required: true
		},
		"animated": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
</details>

<div id="CreateReactionOptions"></div>

## CreateReactionOptions

Options for creating a reaction in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for creating a reaction in Discord
type CreateReactionOptions = {
	--- The channel ID
	channel_id: discord.Snowflake,

	--- The message ID
	message_id: discord.Snowflake,

	--- The reaction to add
	reaction: ReactionType
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The channel ID",
			required: true
		},
		"message_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The message ID",
			required: true
		},
		"reaction": {
			type: "[ReactionType](#ReactionType)",
			description: "The reaction to add",
			required: true
		},
	}}
/>
<div id="DeleteOwnReactionOptions"></div>

## DeleteOwnReactionOptions

Options for deleting the reaction AntiRaid has made on Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for deleting the reaction AntiRaid has made on Discord
type DeleteOwnReactionOptions = {
	--- The channel ID
	channel_id: discord.Snowflake,

	--- The message ID
	message_id: discord.Snowflake,

	--- The reaction to add
	reaction: ReactionType
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The channel ID",
			required: true
		},
		"message_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The message ID",
			required: true
		},
		"reaction": {
			type: "[ReactionType](#ReactionType)",
			description: "The reaction to add",
			required: true
		},
	}}
/>
<div id="DeleteUserReactionOptions"></div>

## DeleteUserReactionOptions

Options for deleting the reaction of a user on Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for deleting the reaction of a user on Discord
type DeleteUserReactionOptions = {
	--- The channel ID
	channel_id: discord.Snowflake,

	--- The message ID
	message_id: discord.Snowflake,

	--- The user ID
	user_id: discord.Snowflake,

	--- The reaction to add
	reaction: ReactionType
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The channel ID",
			required: true
		},
		"message_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The message ID",
			required: true
		},
		"user_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The user ID",
			required: true
		},
		"reaction": {
			type: "[ReactionType](#ReactionType)",
			description: "The reaction to add",
			required: true
		},
	}}
/>
<div id="ReactionTypeEnum"></div>

## ReactionTypeEnum

Normal = normal reaction, burst is a super reaction

<details>
<summary>Raw Type</summary>

```luau
--- Normal = normal reaction, burst is a super reaction
type ReactionTypeEnum = "Normal" | "Burst"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Normal"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Burst"
```

</details>

<div id="GetReactionsOptions"></div>

## GetReactionsOptions

Options for getting reactions on a message

<details>
<summary>Raw Type</summary>

```luau
--- Options for getting reactions on a message
type GetReactionsOptions = {
	channel_id: discord.Snowflake,

	message_id: discord.Snowflake,

	reaction: ReactionType,

	type: ReactionTypeEnum?,

	-- Normal or burst/super reaction
	after: discord.Snowflake?,

	-- After which ID to use
	limit: number?
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"message_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"reaction": {
			type: "[ReactionType](#ReactionType)",
			description: "",
			required: true
		},
		"type": {
			type: "[ReactionTypeEnum](#ReactionTypeEnum)?",
			description: "",
			required: false
		},
		"after": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"limit": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
	}}
/>
<div id="DeleteAllReactionsForEmojiOptions"></div>

## DeleteAllReactionsForEmojiOptions

Options for deleting all reactions on a message

<details>
<summary>Raw Type</summary>

```luau
--- Options for deleting all reactions on a message
type DeleteAllReactionsForEmojiOptions = {
	channel_id: discord.Snowflake,

	message_id: discord.Snowflake,

	reaction: ReactionType
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"message_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"reaction": {
			type: "[ReactionType](#ReactionType)",
			description: "",
			required: true
		},
	}}
/>
<div id="EditMessageOptions"></div>

## EditMessageOptions

<details>
<summary>Raw Type</summary>

```luau
type EditMessageOptions = {
	channel_id: discord.Snowflake,

	message_id: discord.Snowflake,

	data: discordRest.EditMessageRequest
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"message_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"data": {
			type: "[discordRest](#module.discordRest).[EditMessageRequest](#EditMessageRequest)",
			description: "",
			required: true
		},
	}}
/>
<div id="CreateCommandOptions"></div>

## CreateCommandOptions

Options for creating a command in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for creating a command in Discord
type CreateCommandOptions = {
	--- The data to create the command with
	data: discordRest.CreateGuildApplicationCommandRequest
}
```

</details>

<TypeTable
	type={{
		"data": {
			type: "[discordRest](#module.discordRest).[CreateGuildApplicationCommandRequest](#CreateGuildApplicationCommandRequest)",
			description: "The data to create the command with",
			required: true
		},
	}}
/>
<div id="CreateCommandsOptions"></div>

## CreateCommandsOptions

Options for creating multiple command in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for creating multiple command in Discord
type CreateCommandsOptions = {
	--- The data to create the command with
	data: {discordRest.CreateGuildApplicationCommandRequest}
}
```

</details>

<TypeTable
	type={{
		"data": {
			type: "\{[discordRest](#module.discordRest).[CreateGuildApplicationCommandRequest](#CreateGuildApplicationCommandRequest)\}",
			description: "The data to create the command with",
			required: true
		},
	}}
/>
<div id="CreateInteractionResponseOptions"></div>

## CreateInteractionResponseOptions

Options for creating an interaction response in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for creating an interaction response in Discord
type CreateInteractionResponseOptions = {
	--- The interaction ID
	interaction_id: discord.Snowflake,

	--- The interaction token
	interaction_token: string,

	--- The data to create the interaction response with
	data: discordRest.CreateInteractionRequest
}
```

</details>

<TypeTable
	type={{
		"interaction_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The interaction ID",
			required: true
		},
		"interaction_token": {
			type: "[string](#string)",
			description: "The interaction token",
			required: true
		},
		"data": {
			type: "[discordRest](#module.discordRest).[CreateInteractionRequest](#CreateInteractionRequest)",
			description: "The data to create the interaction response with",
			required: true
		},
	}}
/>
<div id="EditInteractionResponseOptions"></div>

## EditInteractionResponseOptions

Options for editting an interaction response in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for editting an interaction response in Discord
type EditInteractionResponseOptions = {
	--- The interaction token
	interaction_token: string,

	--- The data to edit the interaction response with
	data: discordRest.EditWebhookMessageRequest
}
```

</details>

<TypeTable
	type={{
		"interaction_token": {
			type: "[string](#string)",
			description: "The interaction token",
			required: true
		},
		"data": {
			type: "[discordRest](#module.discordRest).[EditWebhookMessageRequest](#EditWebhookMessageRequest)",
			description: "The data to edit the interaction response with",
			required: true
		},
	}}
/>
<div id="GetFollowupMessageOptions"></div>

## GetFollowupMessageOptions

Options for getting a followup message in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for getting a followup message in Discord
type GetFollowupMessageOptions = {
	--- The interaction token
	interaction_token: string,

	--- The message ID
	message_id: discord.Snowflake
}
```

</details>

<TypeTable
	type={{
		"interaction_token": {
			type: "[string](#string)",
			description: "The interaction token",
			required: true
		},
		"message_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The message ID",
			required: true
		},
	}}
/>
<div id="CreateFollowupMessageOptions"></div>

## CreateFollowupMessageOptions

Options for creating a followup message in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for creating a followup message in Discord
type CreateFollowupMessageOptions = {
	--- The interaction token
	interaction_token: string,

	--- The data to create the followup message with
	data: discordRest.CreateFollowupMessageRequest
}
```

</details>

<TypeTable
	type={{
		"interaction_token": {
			type: "[string](#string)",
			description: "The interaction token",
			required: true
		},
		"data": {
			type: "[discordRest](#module.discordRest).[CreateFollowupMessageRequest](#CreateFollowupMessageRequest)",
			description: "The data to create the followup message with",
			required: true
		},
	}}
/>
<div id="EditFollowupMessageOptions"></div>

## EditFollowupMessageOptions

Options for editting a followup message in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for editting a followup message in Discord
type EditFollowupMessageOptions = {
	--- The interaction token
	interaction_token: string,

	--- The message ID
	message_id: discord.Snowflake,

	--- The data to edit the followup message with
	data: discordRest.EditWebhookMessageRequest
}
```

</details>

<TypeTable
	type={{
		"interaction_token": {
			type: "[string](#string)",
			description: "The interaction token",
			required: true
		},
		"message_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The message ID",
			required: true
		},
		"data": {
			type: "[discordRest](#module.discordRest).[EditWebhookMessageRequest](#EditWebhookMessageRequest)",
			description: "The data to edit the followup message with",
			required: true
		},
	}}
/>
<div id="DeleteFollowupMessageOptions"></div>

## DeleteFollowupMessageOptions

Options for deleting a followup message in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for deleting a followup message in Discord
type DeleteFollowupMessageOptions = {
	--- The interaction token
	interaction_token: string,

	--- The message ID
	message_id: discord.Snowflake
}
```

</details>

<TypeTable
	type={{
		"interaction_token": {
			type: "[string](#string)",
			description: "The interaction token",
			required: true
		},
		"message_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The message ID",
			required: true
		},
	}}
/>
<div id="MessagePagination"></div>

## MessagePagination

A message pagination object

<details>
<summary>Raw Type</summary>

```luau
--- A message pagination object
type MessagePagination = {
	type: "After" | "Around" | "Before",

	id: discord.Snowflake
}
```

</details>

<TypeTable
	type={{
		"type": {
			type: "('After' | 'Around' | 'Before')",
			description: "",
			required: true
		},
		"id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
	}}
/>
<div id="GetMessagesOptions"></div>

## GetMessagesOptions

Options for getting messages in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for getting messages in Discord
type GetMessagesOptions = {
	--- The channel ID
	channel_id: discord.Snowflake,

	--- The target message
	target: MessagePagination?,

	--- The limit of messages to get
	limit: number?
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The channel ID",
			required: true
		},
		"target": {
			type: "[MessagePagination](#MessagePagination)?",
			description: "The target message",
			required: false
		},
		"limit": {
			type: "[number](#number)?",
			description: "The limit of messages to get",
			required: false
		},
	}}
/>
<div id="GetMessageOptions"></div>

## GetMessageOptions

Options for getting a message in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for getting a message in Discord
type GetMessageOptions = {
	--- The channel ID
	channel_id: discord.Snowflake,

	--- The message ID
	message_id: discord.Snowflake
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The channel ID",
			required: true
		},
		"message_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The message ID",
			required: true
		},
	}}
/>
<div id="CreateGuildBanOptions"></div>

## CreateGuildBanOptions

Options for creating a guild ban in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for creating a guild ban in Discord
type CreateGuildBanOptions = {
	--- The user ID to ban
	user_id: discord.Snowflake,

	--- The reason for the ban
	reason: string,

	--- The number of seconds to delete messages from
	delete_message_seconds: number?
}
```

</details>

<TypeTable
	type={{
		"user_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The user ID to ban",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "The reason for the ban",
			required: true
		},
		"delete_message_seconds": {
			type: "[number](#number)?",
			description: "The number of seconds to delete messages from",
			required: false
		},
	}}
/>
<div id="RemoveGuildBanOptions"></div>

## RemoveGuildBanOptions

Options for removing a guild ban in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for removing a guild ban in Discord
type RemoveGuildBanOptions = {
	--- The user ID to unban
	user_id: discord.Snowflake,

	--- The reason for the unban
	reason: string
}
```

</details>

<TypeTable
	type={{
		"user_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The user ID to unban",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "The reason for the unban",
			required: true
		},
	}}
/>
<div id="GetGuildMembersOptions"></div>

## GetGuildMembersOptions

Options for getting guild members

<details>
<summary>Raw Type</summary>

```luau
--- Options for getting guild members
type GetGuildMembersOptions = {
	--- The limit of members to get
	limit: number?,

	--- The user ID to get members after
	after: discord.Snowflake?
}
```

</details>

<TypeTable
	type={{
		"limit": {
			type: "[number](#number)?",
			description: "The limit of members to get",
			required: false
		},
		"after": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)?",
			description: "The user ID to get members after",
			required: false
		},
	}}
/>
<div id="SearchGuildMembersOptions"></div>

## SearchGuildMembersOptions

Options for searching guild members

<details>
<summary>Raw Type</summary>

```luau
--- Options for searching guild members
type SearchGuildMembersOptions = {
	--- The query to search for
	query: string,

	--- The limit of members to get
	limit: number?
}
```

</details>

<TypeTable
	type={{
		"query": {
			type: "[string](#string)",
			description: "The query to search for",
			required: true
		},
		"limit": {
			type: "[number](#number)?",
			description: "The limit of members to get",
			required: false
		},
	}}
/>
<div id="ModifyGuildMemberOptions"></div>

## ModifyGuildMemberOptions

Options for modifying a guild member

<details>
<summary>Raw Type</summary>

```luau
--- Options for modifying a guild member
type ModifyGuildMemberOptions = {
	--- The user ID to modify
	user_id: discord.Snowflake,

	--- The reason for the modification
	reason: string,

	--- The data to modify the member with
	data: discordRest.ModifyGuildMemberRequest
}
```

</details>

<TypeTable
	type={{
		"user_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The user ID to modify",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "The reason for the modification",
			required: true
		},
		"data": {
			type: "[discordRest](#module.discordRest).[ModifyGuildMemberRequest](#ModifyGuildMemberRequest)",
			description: "The data to modify the member with",
			required: true
		},
	}}
/>
<div id="ModifyGuildOptions"></div>

## ModifyGuildOptions

Options for modifying a guild

<details>
<summary>Raw Type</summary>

```luau
--- Options for modifying a guild
type ModifyGuildOptions = {
	data: discordRest.ModifyGuildRequest,

	reason: string
}
```

</details>

<TypeTable
	type={{
		"data": {
			type: "[discordRest](#module.discordRest).[ModifyGuildRequest](#ModifyGuildRequest)",
			description: "",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="AntiRaidCheckPermissionsOptions"></div>

## AntiRaidCheckPermissionsOptions

Options for checking if a user has the needed Discord permissions to perform an action

<details>
<summary>Raw Type</summary>

```luau
--- Options for checking if a user has the needed Discord permissions to perform an action
type AntiRaidCheckPermissionsOptions = {
	--- The user ID to check permissions for
	user_id: discord.Snowflake,

	--- The needed permissions
	needed_permissions: string
}
```

</details>

<TypeTable
	type={{
		"user_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The user ID to check permissions for",
			required: true
		},
		"needed_permissions": {
			type: "[string](#string)",
			description: "The needed permissions",
			required: true
		},
	}}
/>
<div id="AntiRaidCheckPermissionsAndHierarchyOptions"></div>

## AntiRaidCheckPermissionsAndHierarchyOptions

Options for checking if a user has the needed Discord permissions to perform an action

and is above the target user in terms of hierarchy

<details>
<summary>Raw Type</summary>

```luau
--- Options for checking if a user has the needed Discord permissions to perform an action 
--- and is above the target user in terms of hierarchy
type AntiRaidCheckPermissionsAndHierarchyOptions = {
	--- The user ID to check permissions for
	user_id: discord.Snowflake,

	--- The target ID to check permissions for
	target_id: discord.Snowflake,

	--- The needed permissions
	needed_permissions: string
}
```

</details>

<TypeTable
	type={{
		"user_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The user ID to check permissions for",
			required: true
		},
		"target_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The target ID to check permissions for",
			required: true
		},
		"needed_permissions": {
			type: "[string](#string)",
			description: "The needed permissions",
			required: true
		},
	}}
/>
<div id="AntiRaidCheckPermissionsResponse"></div>

## AntiRaidCheckPermissionsResponse

Extra/additional success response for checking if a user has the needed Discord permissions to perform an action

<details>
<summary>Raw Type</summary>

```luau
--- Extra/additional success response for checking if a user has the needed Discord permissions to perform an action
type AntiRaidCheckPermissionsResponse = {
	--- The partial guild
	partial_guild: discord.Partial<discord.GuildObject>,

	--- The member
	member: discord.GuildMemberObject,

	--- The permissions
	permissions: string
}
```

</details>

<TypeTable
	type={{
		"partial_guild": {
			type: "[discord](#module.discord).[Partial](#Partial)&lt;[discord](#module.discord).[GuildObject](#GuildObject)&gt;",
			description: "The partial guild",
			required: true
		},
		"member": {
			type: "[discord](#module.discord).[GuildMemberObject](#GuildMemberObject)",
			description: "The member",
			required: true
		},
		"permissions": {
			type: "[string](#string)",
			description: "The permissions",
			required: true
		},
	}}
/>
<div id="AntiRaidCheckChannelPermissionsOptions"></div>

## AntiRaidCheckChannelPermissionsOptions

<details>
<summary>Raw Type</summary>

```luau
type AntiRaidCheckChannelPermissionsOptions = {
	--- The user ID to check permissions for
	user_id: discord.Snowflake,

	--- The channel ID to check permissions for
	channel_id: discord.Snowflake,

	--- The needed permissions
	needed_permissions: string
}
```

</details>

<TypeTable
	type={{
		"user_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The user ID to check permissions for",
			required: true
		},
		"channel_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The channel ID to check permissions for",
			required: true
		},
		"needed_permissions": {
			type: "[string](#string)",
			description: "The needed permissions",
			required: true
		},
	}}
/>
<div id="AntiRaidCheckChannelPermissionsResponse"></div>

## AntiRaidCheckChannelPermissionsResponse

<details>
<summary>Raw Type</summary>

```luau
type AntiRaidCheckChannelPermissionsResponse = {
	--- The partial guild
	partial_guild: discord.Partial<discord.GuildObject>,

	--- The channel
	channel: discord.ChannelObject,

	--- The member
	member: discord.GuildMemberObject,

	--- The permissions
	permissions: string
}
```

</details>

<TypeTable
	type={{
		"partial_guild": {
			type: "[discord](#module.discord).[Partial](#Partial)&lt;[discord](#module.discord).[GuildObject](#GuildObject)&gt;",
			description: "The partial guild",
			required: true
		},
		"channel": {
			type: "[discord](#module.discord).[ChannelObject](#ChannelObject)",
			description: "The channel",
			required: true
		},
		"member": {
			type: "[discord](#module.discord).[GuildMemberObject](#GuildMemberObject)",
			description: "The member",
			required: true
		},
		"permissions": {
			type: "[string](#string)",
			description: "The permissions",
			required: true
		},
	}}
/>
<div id="AntiraidFusedMemberSingle"></div>

## AntiraidFusedMemberSingle

<details>
<summary>Raw Type</summary>

```luau
type AntiraidFusedMemberSingle = {
	--- The member
	member: discord.GuildMemberObject,

	--- The resolved permissions of the member in the guild
	resolved_perms: string
}
```

</details>

<TypeTable
	type={{
		"member": {
			type: "[discord](#module.discord).[GuildMemberObject](#GuildMemberObject)",
			description: "The member",
			required: true
		},
		"resolved_perms": {
			type: "[string](#string)",
			description: "The resolved permissions of the member in the guild",
			required: true
		},
	}}
/>
<div id="AntiraidFusedMember"></div>

## AntiraidFusedMember

A fused member contains both a member, the guild and the resolved permissions of

the member in the guild. This is useful for operations that require both the member and the guild context, such as permission checks.

<details>
<summary>Raw Type</summary>

```luau
--- A fused member contains both a member, the guild and the resolved permissions of
--- the member in the guild. This is useful for operations that require both the member and the guild context, such as permission checks.
type AntiraidFusedMember = {
	--- The partial guild
	guild: discord.Partial<discord.GuildObject>,

	--- The member and resolved permissions
	members: {AntiraidFusedMemberSingle}
}
```

</details>

<TypeTable
	type={{
		"guild": {
			type: "[discord](#module.discord).[Partial](#Partial)&lt;[discord](#module.discord).[GuildObject](#GuildObject)&gt;",
			description: "The partial guild",
			required: true
		},
		"members": {
			type: "\{[AntiraidFusedMemberSingle](#AntiraidFusedMemberSingle)\}",
			description: "The member and resolved permissions",
			required: true
		},
	}}
/>
<div id="CreateGuildRoleOptions"></div>

## CreateGuildRoleOptions

Options for creating a guild role

<details>
<summary>Raw Type</summary>

```luau
--- Options for creating a guild role
type CreateGuildRoleOptions = {
	--- The reason for the creation
	reason: string,

	--- The data to create the role with
	data: discordRest.CreateGuildRoleRequest
}
```

</details>

<TypeTable
	type={{
		"reason": {
			type: "[string](#string)",
			description: "The reason for the creation",
			required: true
		},
		"data": {
			type: "[discordRest](#module.discordRest).[CreateGuildRoleRequest](#CreateGuildRoleRequest)",
			description: "The data to create the role with",
			required: true
		},
	}}
/>
<div id="ModifyRolePositionOptions"></div>

## ModifyRolePositionOptions

Options for modifying a guild role position

<details>
<summary>Raw Type</summary>

```luau
--- Options for modifying a guild role position
type ModifyRolePositionOptions = {
	--- The data to modify the role position with
	data: {discordRest.ModifyGuildRolePositionsRequest},

	--- The reason for the modification
	reason: string
}
```

</details>

<TypeTable
	type={{
		"data": {
			type: "\{[discordRest](#module.discordRest).[ModifyGuildRolePositionsRequest](#ModifyGuildRolePositionsRequest)\}",
			description: "The data to modify the role position with",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "The reason for the modification",
			required: true
		},
	}}
/>
<div id="EditGuildRoleOptions"></div>

## EditGuildRoleOptions

Options for modifying a guild role

<details>
<summary>Raw Type</summary>

```luau
--- Options for modifying a guild role
type EditGuildRoleOptions = {
	--- The reason for the creation
	reason: string,

	--- The data to create the role with
	data: discordRest.ModifyGuildRoleRequest,

	--- Role ID
	role_id: discord.Snowflake
}
```

</details>

<TypeTable
	type={{
		"reason": {
			type: "[string](#string)",
			description: "The reason for the creation",
			required: true
		},
		"data": {
			type: "[discordRest](#module.discordRest).[ModifyGuildRoleRequest](#ModifyGuildRoleRequest)",
			description: "The data to create the role with",
			required: true
		},
		"role_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "Role ID",
			required: true
		},
	}}
/>
<div id="DeleteGuildRoleOptions"></div>

## DeleteGuildRoleOptions

Options for deleting a guild role

<details>
<summary>Raw Type</summary>

```luau
--- Options for deleting a guild role
type DeleteGuildRoleOptions = {
	--- The reason for the creation
	reason: string,

	--- Role ID
	role_id: discord.Snowflake
}
```

</details>

<TypeTable
	type={{
		"reason": {
			type: "[string](#string)",
			description: "The reason for the creation",
			required: true
		},
		"role_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "Role ID",
			required: true
		},
	}}
/>
<div id="CreateChannelInviteOptions"></div>

## CreateChannelInviteOptions

<details>
<summary>Raw Type</summary>

```luau
type CreateChannelInviteOptions = {
	--- The channel ID
	channel_id: discord.Snowflake,

	--- The data to create the invite with
	data: discordRest.CreateChannelInviteRequest,

	--- The reason for the creation
	reason: string
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The channel ID",
			required: true
		},
		"data": {
			type: "[discordRest](#module.discordRest).[CreateChannelInviteRequest](#CreateChannelInviteRequest)",
			description: "The data to create the invite with",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "The reason for the creation",
			required: true
		},
	}}
/>
<div id="DeleteChannelPermissionOptions"></div>

## DeleteChannelPermissionOptions

<details>
<summary>Raw Type</summary>

```luau
type DeleteChannelPermissionOptions = {
	--- The channel ID
	channel_id: discord.Snowflake,

	--- The overwrite ID
	overwrite_id: discord.Snowflake,

	--- The reason for the deletion
	reason: string
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The channel ID",
			required: true
		},
		"overwrite_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The overwrite ID",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "The reason for the deletion",
			required: true
		},
	}}
/>
<div id="FollowAnnouncementChannelOptions"></div>

## FollowAnnouncementChannelOptions

<details>
<summary>Raw Type</summary>

```luau
type FollowAnnouncementChannelOptions = {
	--- The Channel ID
	channel_id: discord.Snowflake,

	--- Data
	data: discordRest.FollowAnnouncementChannelRequest,

	--- Reason
	reason: string
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The Channel ID",
			required: true
		},
		"data": {
			type: "[discordRest](#module.discordRest).[FollowAnnouncementChannelRequest](#FollowAnnouncementChannelRequest)",
			description: "Data",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "Reason",
			required: true
		},
	}}
/>
<div id="GetInviteOptions"></div>

## GetInviteOptions

\[\[
#\[derive(serde::Serialize, serde::Deserialize)\]
pub struct GetInviteOptions \{
    pub code: String,
    pub with_counts: Option&lt;bool&gt;, // default to false
    pub with_expiration: Option&lt;bool&gt;, // default to false
    pub guild_scheduled_event_id: Option&lt;serenity::all::ScheduledEventId&gt;,    
\}

#\[derive(serde::Serialize, serde::Deserialize)\]
pub struct DeleteInviteOptions \{
    pub code: String,
    pub reason: String,
\}
\]\]

<details>
<summary>Raw Type</summary>

```luau
--[[
#[derive(serde::Serialize, serde::Deserialize)]
pub struct GetInviteOptions {
    pub code: String,
    pub with_counts: Option<bool>, // default to false
    pub with_expiration: Option<bool>, // default to false
    pub guild_scheduled_event_id: Option<serenity::all::ScheduledEventId>,    
}

#[derive(serde::Serialize, serde::Deserialize)]
pub struct DeleteInviteOptions {
    pub code: String,
    pub reason: String,
}
]]
type GetInviteOptions = {
	--- The invite code
	code: string,

	--- Whether to include counts
	with_counts: boolean?,

	--- Whether to include expiration
	with_expiration: boolean?,

	--- The guild scheduled event ID
	guild_scheduled_event_id: discord.Snowflake?
}
```

</details>

<TypeTable
	type={{
		"code": {
			type: "[string](#string)",
			description: "The invite code",
			required: true
		},
		"with_counts": {
			type: "[boolean](#boolean)?",
			description: "Whether to include counts",
			required: false
		},
		"with_expiration": {
			type: "[boolean](#boolean)?",
			description: "Whether to include expiration",
			required: false
		},
		"guild_scheduled_event_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)?",
			description: "The guild scheduled event ID",
			required: false
		},
	}}
/>
<div id="DeleteInviteOptions"></div>

## DeleteInviteOptions

<details>
<summary>Raw Type</summary>

```luau
type DeleteInviteOptions = {
	--- The invite code
	code: string,

	--- The reason for the deletion
	reason: string
}
```

</details>

<TypeTable
	type={{
		"code": {
			type: "[string](#string)",
			description: "The invite code",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "The reason for the deletion",
			required: true
		},
	}}
/>
<div id="DiscordExecutor"></div>

## DiscordExecutor

DiscordExecutor allows templates to access/use the Discord API in a sandboxed form.

<details>
<summary>Raw Type</summary>

```luau
--- DiscordExecutor allows templates to access/use the Discord API in a sandboxed form.
type DiscordExecutor = {
	-- Bulk operations
	--- When performing bulk operations, AntiRaid's standard GCRA based ratelimits might not work so well. 
	---
	--- For this, AntiRaid provides a \`\`antiraid_bulk_op\`\` which will return a discord \`\`Plugin\`\` that allows performing bulk operations. 
	---
	--- To do a bulk operation, your code must perform one operation at a time, and then call \`\`antiraid_bulk_op_wait\`\` to wait for the enforced wait period
	--- between each operation (otherwise, AntiRaid will reject the operation). Note that AntiRaid will automatically no-op if you can still perform another 
	--- operation.
	---
	--- Note that the calls to \`\`antiraid_bulk_op\`\` and \`\`antiraid_bulk_op_wait\`\` will respect AntiRaid's standard GCRA 
	--- ratelimits (with the exception that global bucket will not be hit) to ensure user code cannot just keep creating 
	--- new bulk operations.
	---
	--- A bulk operaction executor will expire 10 seconds after the last call to \`\`antiraid_bulk_op\`\` or \`\`antiraid_bulk_op_wait\`\` returns.
	---
	--- An \`\`action\`\` can be specified to increase/improve the ratelimits+wait period at the cost of limiting the executor
	--- to only the \`\`action\`\` specified. If no action is specified, the executor will be able to perform any action but with
	--- harsher ratelimits and a longer enforced wait period.
	antiraid_bulk_op: (self: DiscordExecutor, action: string?) -> DiscordExecutor,

	--- @yields
	---
	--- Waits for the bulk operation executor to finish the enforced wait period
	---
	--- Errors if the executor has expired or if the executor is used in a different thread than the one that created it
	--- or if the executor is not a bulk operation executor (the executor returned by \`\`antiraid_bulk_op\`\`).
	antiraid_bulk_op_wait: (self: DiscordExecutor) -> nil,

	-- Antiraid helpers
	--- @yields
	---
	--- Checks an audit log reason for validity, errors out if invalid
	antiraid_check_reason: (self: DiscordExecutor, reason: string) -> nil,

	--- @yields
	---
	--- Checks if a specified user with an ID of \`data.user_id\` has the specified permissions in the server
	antiraid_check_permissions: (self: DiscordExecutor, data: AntiRaidCheckPermissionsOptions) -> AntiRaidCheckPermissionsResponse,

	--- @yields
	---
	--- Checks if a specified user with an ID of \`data.user_id\` has the specified permissions in the server and is above the target user with an ID of \`data.target_id\` in terms of hierarchy
	antiraid_check_permissions_and_hierarchy: (self: DiscordExecutor, data: AntiRaidCheckPermissionsAndHierarchyOptions) -> AntiRaidCheckPermissionsResponse,

	--- @yields
	---
	--- Checks if a specified user with an ID of \`data.user_id\` has the specified permissions in the channel \`data.channel_id\`
	antiraid_check_channel_permissions: (self: DiscordExecutor, data: AntiRaidCheckChannelPermissionsOptions) -> AntiRaidCheckChannelPermissionsResponse,

	--- @yields
	---
	--- Fetches the member and resolved permissions of a user in the guild
	--- (also called a 'fused member' as it contains both the member and the resolved permissions)
	antiraid_get_fused_member: (self: DiscordExecutor, ids: {discord.Snowflake}) -> LazyAntiraidFusedMember,

	-- Discord API
	-- Audit Logs
	--- @yields
	---
	--- Gets the audit logs
	get_audit_logs: (self: DiscordExecutor, data: GetAuditLogOptions) -> LazyAuditLogObject,

	-- Auto Moderation
	--- @yields
	--- 
	--- Lists the auto moderation rules available
	list_auto_moderation_rules: (self: DiscordExecutor) -> LazyAutomoderationRuleObjectList,

	--- @yields
	---
	--- Gets an auto moderation rule by ID
	get_auto_moderation_rule: (self: DiscordExecutor, data: GetAutoModerationRuleOptions) -> LazyAutomoderationRuleObject,

	--- @yields
	---
	--- Creates an auto moderation rule
	create_auto_moderation_rule: (self: DiscordExecutor, data: CreateAutoModerationRuleOptions) -> LazyAutomoderationRuleObject,

	--- @yields
	---
	--- Edits an auto moderation rule
	edit_auto_moderation_rule: (self: DiscordExecutor, data: EditAutoModerationRuleOptions) -> LazyAutomoderationRuleObject,

	--- @yields
	---
	--- Deletes an auto moderation rule
	delete_auto_moderation_rule: (self: DiscordExecutor, data: DeleteAutoModerationRuleOptions) -> LazyAutomoderationRuleObject,

	-- Channel
	--- @yields
	---
	--- Gets a channel
	get_channel: (self: DiscordExecutor, channel_id: string) -> LazyChannelObject,

	--- @yields
	---
	--- Edits a channel
	edit_channel: (self: DiscordExecutor, data: EditChannelOptions) -> LazyChannelObject,

	--- @yields
	---
	--- Deletes a channel
	delete_channel: (self: DiscordExecutor, data: DeleteChannelOptions) -> LazyChannelObject,

	--- @yields
	---
	--- Edits channel permissions for a target
	edit_channel_permissions: (self: DiscordExecutor, data: EditChannelPermissionsOptions) -> nil,

	--- @yields
	---
	--- Gets all invites a channel has
	get_channel_invites: (self: DiscordExecutor) -> LazyInviteObjectList,

	--- @yields
	---
	--- Creates a channel invite
	create_channel_invite: (self: DiscordExecutor, data: CreateChannelInviteOptions) -> LazyInviteObject,

	--- @yields
	---
	--- Deletes a channel permission
	delete_channel_permission: (self: DiscordExecutor, data: DeleteChannelPermissionOptions) -> nil,

	--- @yields
	---
	--- Follows a announcement channel
	follow_announcement_channel: (self: DiscordExecutor, data: FollowAnnouncementChannelOptions) -> LazyChannelObject,

	-- Guild
	--- @yields
	---
	--- Gets the guild
	get_guild: (self: DiscordExecutor) -> LazyGuildObject,

	--- @yields
	---
	--- Gets the guilds preview
	get_guild_preview: (self: DiscordExecutor) -> LazyGuildPreviewObject,

	--- @yields
	---
	--- Edits the guild
	modify_guild: (self: DiscordExecutor, data: ModifyGuildOptions) -> LazyGuildObject,

	--- @yields
	---
	--- Gets the guild channels
	get_guild_channels: (self: DiscordExecutor) -> LazyChannelsObject,

	--- @yields
	---
	--- Creates a guild channel
	create_guild_channel: (self: DiscordExecutor, data: CreateChannelOptions) -> LazyChannelObject,

	--- @yields
	---
	--- Modify guild channel positions. Only channels to be modified are required to be passed in \`data\`.
	modify_guild_channel_positions: (self: DiscordExecutor, data: {discordRest.ModifyGuildChannelPositionsRequest}) -> nil,

	--- @yields
	---
	--- List active guild threads
	list_active_guild_threads: (self: DiscordExecutor) -> LazyActiveGuildThreadsResponse,

	--- @yields
	---
	--- Gets a guild member by ID
	get_guild_member: (self: DiscordExecutor, user_id: string) -> LazyGuildMemberObject,

	--- @yields
	---
	--- List all guild members
	list_guild_members: (self: DiscordExecutor, data: GetGuildMembersOptions) -> LazyGuildMembersObject,

	--- @yields
	---
	--- Search guild members
	search_guild_members: (self: DiscordExecutor, data: SearchGuildMembersOptions) -> LazyGuildMembersObject,

	--- @yields
	---
	--- Modify guild member (this includes timing out a member using \`communication_disabled_until\`)
	modify_guild_member: (self: DiscordExecutor, data: ModifyGuildMemberOptions) -> LazyGuildMemberObject,

	--- @yields
	---
	--- Adds a role to a member
	add_guild_member_role: (self: DiscordExecutor, data: AddGuildMemberRoleOptions) -> nil,

	--- @yields
	---
	--- Removes a role from a member
	remove_guild_member_role: (self: DiscordExecutor, data: RemoveGuildMemberRoleOptions) -> nil,

	--- @yields
	---
	--- Removes a member from a guild
	remove_guild_member: (self: DiscordExecutor, data: RemoveGuildMemberOptions) -> nil,

	--- @yields
	---
	--- Gets guild bans
	get_guild_bans: (self: DiscordExecutor, data: GetGuildBansOptions) -> LazyBanObjectList,

	--- @yields
	---
	--- Gets a guild ban for a user or nil if it does not exist
	get_guild_ban: (self: DiscordExecutor, user_id: discord.Snowflake) -> LazyBanOptionalObject,

	--- @yields
	---
	--- Creates a guild ban
	create_guild_ban: (self: DiscordExecutor, data: CreateGuildBanOptions) -> nil,

	--- @yields
	---
	--- Removes a guild ban
	remove_guild_ban: (self: DiscordExecutor, data: RemoveGuildBanOptions) -> nil,

	--- @yields
	---
	--- Returns the guild roles of a guild
	get_guild_roles: (self: DiscordExecutor) -> LazyRolesObject,

	--- @yields
	---
	--- Returns a guild role by ID
	get_guild_role: (self: DiscordExecutor, role_id: discord.Snowflake) -> LazyRoleObject,

	--- @yields
	---
	--- Creates a guild role
	create_guild_role: (self: DiscordExecutor, data: CreateGuildRoleOptions) -> LazyRoleObject,

	--- @yields
	---
	--- Modify guild role positions
	modify_guild_role_positions: (self: DiscordExecutor, data: ModifyRolePositionOptions) -> LazyRolesObject,

	--- @yields
	---
	--- Modifies a guild role
	modify_guild_role: (self: DiscordExecutor, data: EditGuildRoleOptions) -> LazyRoleObject,

	--- @yields
	---
	--- Deletes a guild role
	delete_guild_role: (self: DiscordExecutor, data: DeleteGuildRoleOptions) -> (),

	-- Invites
	--- @yields
	---
	--- Gets an invite by code
	get_invite: (self: DiscordExecutor, data: GetInviteOptions) -> LazyInviteObject,

	--- @yields
	---
	--- Deletes an invite by code
	delete_invite: (self: DiscordExecutor, data: DeleteInviteOptions) -> LazyInviteObject,

	-- Messages
	--- @yields
	---
	--- Gets messages from a channel
	get_channel_messages: (self: DiscordExecutor, data: GetMessagesOptions) -> LazyMessagesObject,

	--- @yields
	---
	--- Gets a message
	get_channel_message: (self: DiscordExecutor, data: GetMessageOptions) -> LazyMessageObject,

	--- @yields
	---
	--- Creates a message
	create_message: (self: DiscordExecutor, data: CreateMessageOptions) -> LazyMessageObject,

	--- @yields
	---
	--- Crossposts a message to an announcement channel
	crosspost_message: (self: DiscordExecutor, channel_id: discord.Snowflake, message_id: discord.Snowflake) -> LazyMessageObject,

	--- @yields
	---
	--- Creates a reaction to a message
	create_reaction: (self: DiscordExecutor, data: CreateReactionOptions) -> nil,

	--- @yields
	--- Deletes the reaction AntiRaid has made on a message
	delete_own_reaction: (self: DiscordExecutor, data: DeleteOwnReactionOptions) -> nil,

	--- @yields
	--- Deletes a reaction another user has made on a message (see \`\`delete_own_reaction\`\` for AntiRaid's
	--- reactions)
	delete_user_reaction: (self: DiscordExecutor, data: DeleteUserReactionOptions) -> nil,

	--- @yields
	---
	--- Gets all users who have reacted to awith the provided reaction based on provided criteria
	get_reactions: (self: DiscordExecutor, data: GetReactionsOptions) -> LazyUsersObject,

	--- @yields
	---
	--- Deletes all reactions on a message
	delete_all_reactions: (self: DiscordExecutor, channel_id: discord.Snowflake, message_id: discord.Snowflake) -> nil,

	--- @yields
	---
	--- Deletes all reactions for a specific emoji on a message
	delete_all_reactions_for_emoji: (self: DiscordExecutor, data: DeleteAllReactionsForEmojiOptions) -> nil,

	--- @yields
	---
	--- Edits a message
	edit_message: (self: DiscordExecutor, data: EditMessageOptions) -> LazyMessageObject,

	--- @yields
	---
	--- Deletes a message
	delete_message: (self: DiscordExecutor, channel_id: discord.Snowflake, message_id: discord.Snowflake, reason: string) -> nil,

	--- @yields
	---
	--- Bulk deletes messages in a channel
	bulk_delete_messages: (self: DiscordExecutor, channel_id: discord.Snowflake, message_ids: {discord.Snowflake}, reason: string) -> nil,

	-- Interactions
	--- @yields
	---
	--- Creates an interaction response
	create_interaction_response: (self: DiscordExecutor, data: CreateInteractionResponseOptions) -> nil,

	--- @yields
	---
	--- Gets the original interaction response
	get_original_interaction_response: (self: DiscordExecutor, interaction_token: string) -> LazyMessageObject,

	--- @yields
	---
	--- Edits the original interaction response
	edit_original_interaction_response: (self: DiscordExecutor, data: EditInteractionResponseOptions) -> LazyMessageObject,

	--- @yields
	---
	--- Deletes the original interaction response
	delete_original_interaction_response: (self: DiscordExecutor, interaction_token: string) -> nil,

	--- @yields
	---
	--- Gets a followup interaction response
	get_followup_message: (self: DiscordExecutor, data: GetFollowupMessageOptions) -> LazyMessageObject,

	--- @yields
	---
	--- Creates a followup interaction response
	create_followup_message: (self: DiscordExecutor, data: CreateFollowupMessageOptions) -> LazyMessageObject,

	--- @yields
	---
	--- Edits a followup interaction response
	edit_followup_message: (self: DiscordExecutor, data: EditFollowupMessageOptions) -> LazyMessageObject,

	--- @yields
	---
	--- Deletes a followup interaction response
	delete_followup_message: (self: DiscordExecutor, data: DeleteFollowupMessageOptions) -> nil,

	-- Uncategorized (for now)
	--- @yields
	---
	--- Gets all guild commands currently registered
	get_guild_commands: (self: DiscordExecutor) -> LazyApplicationCommandsObject,

	--- @yields
	---
	--- Creates a guild command
	create_guild_command: (self: DiscordExecutor, data: CreateCommandOptions) -> LazyApplicationCommandObject,

	--- @yields
	---
	--- Creates multiple guild commands
	create_guild_commands: (self: DiscordExecutor, data: CreateCommandsOptions) -> LazyApplicationCommandsObject
}
```

</details>

<TypeTable
	type={{
		"antiraid_bulk_op": {
			type: "(self, action: [string](#string)?) -> [DiscordExecutor](#DiscordExecutor)",
			description: "When performing bulk operations, AntiRaid's standard GCRA based ratelimits might not work so well.For this, AntiRaid provides a \`\`antiraid_bulk_op\`\` which will return a discord \`\`Plugin\`\` that allows performing bulk operations.To do a bulk operation, your code must perform one operation at a time, and then call \`\`antiraid_bulk_op_wait\`\` to wait for the enforced wait periodbetween each operation (otherwise, AntiRaid will reject the operation). Note that AntiRaid will automatically no-op if you can still perform anotheroperation.Note that the calls to \`\`antiraid_bulk_op\`\` and \`\`antiraid_bulk_op_wait\`\` will respect AntiRaid's standard GCRAratelimits (with the exception that global bucket will not be hit) to ensure user code cannot just keep creatingnew bulk operations.A bulk operaction executor will expire 10 seconds after the last call to \`\`antiraid_bulk_op\`\` or \`\`antiraid_bulk_op_wait\`\` returns.An \`\`action\`\` can be specified to increase/improve the ratelimits+wait period at the cost of limiting the executorto only the \`\`action\`\` specified. If no action is specified, the executor will be able to perform any action but withharsher ratelimits and a longer enforced wait period.",
			required: true
		},
		"antiraid_bulk_op_wait": {
			type: "(self) -> [nil](#nil)",
			description: "@yields Waits for the bulk operation executor to finish the enforced wait periodErrors if the executor has expired or if the executor is used in a different thread than the one that created itor if the executor is not a bulk operation executor (the executor returned by \`\`antiraid_bulk_op\`\`).",
			required: true
		},
		"antiraid_check_reason": {
			type: "(self, reason: [string](#string)) -> [nil](#nil)",
			description: "@yields Checks an audit log reason for validity, errors out if invalid",
			required: true
		},
		"antiraid_check_permissions": {
			type: "(self, data: [AntiRaidCheckPermissionsOptions](#AntiRaidCheckPermissionsOptions)) -> [AntiRaidCheckPermissionsResponse](#AntiRaidCheckPermissionsResponse)",
			description: "@yields Checks if a specified user with an ID of \`data.user_id\` has the specified permissions in the server",
			required: true
		},
		"antiraid_check_permissions_and_hierarchy": {
			type: "(self, data: [AntiRaidCheckPermissionsAndHierarchyOptions](#AntiRaidCheckPermissionsAndHierarchyOptions)) -> [AntiRaidCheckPermissionsResponse](#AntiRaidCheckPermissionsResponse)",
			description: "@yields Checks if a specified user with an ID of \`data.user_id\` has the specified permissions in the server and is above the target user with an ID of \`data.target_id\` in terms of hierarchy",
			required: true
		},
		"antiraid_check_channel_permissions": {
			type: "(self, data: [AntiRaidCheckChannelPermissionsOptions](#AntiRaidCheckChannelPermissionsOptions)) -> [AntiRaidCheckChannelPermissionsResponse](#AntiRaidCheckChannelPermissionsResponse)",
			description: "@yields Checks if a specified user with an ID of \`data.user_id\` has the specified permissions in the channel \`data.channel_id\`",
			required: true
		},
		"antiraid_get_fused_member": {
			type: "(self, ids: \{[discord](#module.discord).[Snowflake](#Snowflake)\}) -> [LazyAntiraidFusedMember](#LazyAntiraidFusedMember)",
			description: "@yields Fetches the member and resolved permissions of a user in the guild(also called a 'fused member' as it contains both the member and the resolved permissions)",
			required: true
		},
		"get_audit_logs": {
			type: "(self, data: [GetAuditLogOptions](#GetAuditLogOptions)) -> [LazyAuditLogObject](#LazyAuditLogObject)",
			description: "@yields Gets the audit logs",
			required: true
		},
		"list_auto_moderation_rules": {
			type: "(self) -> [LazyAutomoderationRuleObjectList](#LazyAutomoderationRuleObjectList)",
			description: "@yields Lists the auto moderation rules available",
			required: true
		},
		"get_auto_moderation_rule": {
			type: "(self, data: [GetAutoModerationRuleOptions](#GetAutoModerationRuleOptions)) -> [LazyAutomoderationRuleObject](#LazyAutomoderationRuleObject)",
			description: "@yields Gets an auto moderation rule by ID",
			required: true
		},
		"create_auto_moderation_rule": {
			type: "(self, data: [CreateAutoModerationRuleOptions](#CreateAutoModerationRuleOptions)) -> [LazyAutomoderationRuleObject](#LazyAutomoderationRuleObject)",
			description: "@yields Creates an auto moderation rule",
			required: true
		},
		"edit_auto_moderation_rule": {
			type: "(self, data: [EditAutoModerationRuleOptions](#EditAutoModerationRuleOptions)) -> [LazyAutomoderationRuleObject](#LazyAutomoderationRuleObject)",
			description: "@yields Edits an auto moderation rule",
			required: true
		},
		"delete_auto_moderation_rule": {
			type: "(self, data: [DeleteAutoModerationRuleOptions](#DeleteAutoModerationRuleOptions)) -> [LazyAutomoderationRuleObject](#LazyAutomoderationRuleObject)",
			description: "@yields Deletes an auto moderation rule",
			required: true
		},
		"get_channel": {
			type: "(self, channel_id: [string](#string)) -> [LazyChannelObject](#LazyChannelObject)",
			description: "@yields Gets a channel",
			required: true
		},
		"edit_channel": {
			type: "(self, data: [EditChannelOptions](#EditChannelOptions)) -> [LazyChannelObject](#LazyChannelObject)",
			description: "@yields Edits a channel",
			required: true
		},
		"delete_channel": {
			type: "(self, data: [DeleteChannelOptions](#DeleteChannelOptions)) -> [LazyChannelObject](#LazyChannelObject)",
			description: "@yields Deletes a channel",
			required: true
		},
		"edit_channel_permissions": {
			type: "(self, data: [EditChannelPermissionsOptions](#EditChannelPermissionsOptions)) -> [nil](#nil)",
			description: "@yields Edits channel permissions for a target",
			required: true
		},
		"get_channel_invites": {
			type: "(self) -> [LazyInviteObjectList](#LazyInviteObjectList)",
			description: "@yields Gets all invites a channel has",
			required: true
		},
		"create_channel_invite": {
			type: "(self, data: [CreateChannelInviteOptions](#CreateChannelInviteOptions)) -> [LazyInviteObject](#LazyInviteObject)",
			description: "@yields Creates a channel invite",
			required: true
		},
		"delete_channel_permission": {
			type: "(self, data: [DeleteChannelPermissionOptions](#DeleteChannelPermissionOptions)) -> [nil](#nil)",
			description: "@yields Deletes a channel permission",
			required: true
		},
		"follow_announcement_channel": {
			type: "(self, data: [FollowAnnouncementChannelOptions](#FollowAnnouncementChannelOptions)) -> [LazyChannelObject](#LazyChannelObject)",
			description: "@yields Follows a announcement channel",
			required: true
		},
		"get_guild": {
			type: "(self) -> [LazyGuildObject](#LazyGuildObject)",
			description: "@yields Gets the guild",
			required: true
		},
		"get_guild_preview": {
			type: "(self) -> [LazyGuildPreviewObject](#LazyGuildPreviewObject)",
			description: "@yields Gets the guilds preview",
			required: true
		},
		"modify_guild": {
			type: "(self, data: [ModifyGuildOptions](#ModifyGuildOptions)) -> [LazyGuildObject](#LazyGuildObject)",
			description: "@yields Edits the guild",
			required: true
		},
		"get_guild_channels": {
			type: "(self) -> [LazyChannelsObject](#LazyChannelsObject)",
			description: "@yields Gets the guild channels",
			required: true
		},
		"create_guild_channel": {
			type: "(self, data: [CreateChannelOptions](#CreateChannelOptions)) -> [LazyChannelObject](#LazyChannelObject)",
			description: "@yields Creates a guild channel",
			required: true
		},
		"modify_guild_channel_positions": {
			type: "(self, data: \{[discordRest](#module.discordRest).[ModifyGuildChannelPositionsRequest](#ModifyGuildChannelPositionsRequest)\}) -> [nil](#nil)",
			description: "@yields Modify guild channel positions. Only channels to be modified are required to be passed in \`data\`.",
			required: true
		},
		"list_active_guild_threads": {
			type: "(self) -> [LazyActiveGuildThreadsResponse](#LazyActiveGuildThreadsResponse)",
			description: "@yields List active guild threads",
			required: true
		},
		"get_guild_member": {
			type: "(self, user_id: [string](#string)) -> [LazyGuildMemberObject](#LazyGuildMemberObject)",
			description: "@yields Gets a guild member by ID",
			required: true
		},
		"list_guild_members": {
			type: "(self, data: [GetGuildMembersOptions](#GetGuildMembersOptions)) -> [LazyGuildMembersObject](#LazyGuildMembersObject)",
			description: "@yields List all guild members",
			required: true
		},
		"search_guild_members": {
			type: "(self, data: [SearchGuildMembersOptions](#SearchGuildMembersOptions)) -> [LazyGuildMembersObject](#LazyGuildMembersObject)",
			description: "@yields Search guild members",
			required: true
		},
		"modify_guild_member": {
			type: "(self, data: [ModifyGuildMemberOptions](#ModifyGuildMemberOptions)) -> [LazyGuildMemberObject](#LazyGuildMemberObject)",
			description: "@yields Modify guild member (this includes timing out a member using \`communication_disabled_until\`)",
			required: true
		},
		"add_guild_member_role": {
			type: "(self, data: [AddGuildMemberRoleOptions](#AddGuildMemberRoleOptions)) -> [nil](#nil)",
			description: "@yields Adds a role to a member",
			required: true
		},
		"remove_guild_member_role": {
			type: "(self, data: [RemoveGuildMemberRoleOptions](#RemoveGuildMemberRoleOptions)) -> [nil](#nil)",
			description: "@yields Removes a role from a member",
			required: true
		},
		"remove_guild_member": {
			type: "(self, data: [RemoveGuildMemberOptions](#RemoveGuildMemberOptions)) -> [nil](#nil)",
			description: "@yields Removes a member from a guild",
			required: true
		},
		"get_guild_bans": {
			type: "(self, data: [GetGuildBansOptions](#GetGuildBansOptions)) -> [LazyBanObjectList](#LazyBanObjectList)",
			description: "@yields Gets guild bans",
			required: true
		},
		"get_guild_ban": {
			type: "(self, user_id: [discord](#module.discord).[Snowflake](#Snowflake)) -> [LazyBanOptionalObject](#LazyBanOptionalObject)",
			description: "@yields Gets a guild ban for a user or nil if it does not exist",
			required: true
		},
		"create_guild_ban": {
			type: "(self, data: [CreateGuildBanOptions](#CreateGuildBanOptions)) -> [nil](#nil)",
			description: "@yields Creates a guild ban",
			required: true
		},
		"remove_guild_ban": {
			type: "(self, data: [RemoveGuildBanOptions](#RemoveGuildBanOptions)) -> [nil](#nil)",
			description: "@yields Removes a guild ban",
			required: true
		},
		"get_guild_roles": {
			type: "(self) -> [LazyRolesObject](#LazyRolesObject)",
			description: "@yields Returns the guild roles of a guild",
			required: true
		},
		"get_guild_role": {
			type: "(self, role_id: [discord](#module.discord).[Snowflake](#Snowflake)) -> [LazyRoleObject](#LazyRoleObject)",
			description: "@yields Returns a guild role by ID",
			required: true
		},
		"create_guild_role": {
			type: "(self, data: [CreateGuildRoleOptions](#CreateGuildRoleOptions)) -> [LazyRoleObject](#LazyRoleObject)",
			description: "@yields Creates a guild role",
			required: true
		},
		"modify_guild_role_positions": {
			type: "(self, data: [ModifyRolePositionOptions](#ModifyRolePositionOptions)) -> [LazyRolesObject](#LazyRolesObject)",
			description: "@yields Modify guild role positions",
			required: true
		},
		"modify_guild_role": {
			type: "(self, data: [EditGuildRoleOptions](#EditGuildRoleOptions)) -> [LazyRoleObject](#LazyRoleObject)",
			description: "@yields Modifies a guild role",
			required: true
		},
		"delete_guild_role": {
			type: "(self, data: [DeleteGuildRoleOptions](#DeleteGuildRoleOptions)) -> ()",
			description: "@yields Deletes a guild role",
			required: true
		},
		"get_invite": {
			type: "(self, data: [GetInviteOptions](#GetInviteOptions)) -> [LazyInviteObject](#LazyInviteObject)",
			description: "@yields Gets an invite by code",
			required: true
		},
		"delete_invite": {
			type: "(self, data: [DeleteInviteOptions](#DeleteInviteOptions)) -> [LazyInviteObject](#LazyInviteObject)",
			description: "@yields Deletes an invite by code",
			required: true
		},
		"get_channel_messages": {
			type: "(self, data: [GetMessagesOptions](#GetMessagesOptions)) -> [LazyMessagesObject](#LazyMessagesObject)",
			description: "@yields Gets messages from a channel",
			required: true
		},
		"get_channel_message": {
			type: "(self, data: [GetMessageOptions](#GetMessageOptions)) -> [LazyMessageObject](#LazyMessageObject)",
			description: "@yields Gets a message",
			required: true
		},
		"create_message": {
			type: "(self, data: [CreateMessageOptions](#CreateMessageOptions)) -> [LazyMessageObject](#LazyMessageObject)",
			description: "@yields Creates a message",
			required: true
		},
		"crosspost_message": {
			type: "(self, channel_id: [discord](#module.discord).[Snowflake](#Snowflake), message_id: [discord](#module.discord).[Snowflake](#Snowflake)) -> [LazyMessageObject](#LazyMessageObject)",
			description: "@yields Crossposts a message to an announcement channel",
			required: true
		},
		"create_reaction": {
			type: "(self, data: [CreateReactionOptions](#CreateReactionOptions)) -> [nil](#nil)",
			description: "@yields Creates a reaction to a message",
			required: true
		},
		"delete_own_reaction": {
			type: "(self, data: [DeleteOwnReactionOptions](#DeleteOwnReactionOptions)) -> [nil](#nil)",
			description: "@yields Deletes the reaction AntiRaid has made on a message",
			required: true
		},
		"delete_user_reaction": {
			type: "(self, data: [DeleteUserReactionOptions](#DeleteUserReactionOptions)) -> [nil](#nil)",
			description: "@yields Deletes a reaction another user has made on a message (see \`\`delete_own_reaction\`\` for AntiRaid'sreactions)",
			required: true
		},
		"get_reactions": {
			type: "(self, data: [GetReactionsOptions](#GetReactionsOptions)) -> [LazyUsersObject](#LazyUsersObject)",
			description: "@yields Gets all users who have reacted to awith the provided reaction based on provided criteria",
			required: true
		},
		"delete_all_reactions": {
			type: "(self, channel_id: [discord](#module.discord).[Snowflake](#Snowflake), message_id: [discord](#module.discord).[Snowflake](#Snowflake)) -> [nil](#nil)",
			description: "@yields Deletes all reactions on a message",
			required: true
		},
		"delete_all_reactions_for_emoji": {
			type: "(self, data: [DeleteAllReactionsForEmojiOptions](#DeleteAllReactionsForEmojiOptions)) -> [nil](#nil)",
			description: "@yields Deletes all reactions for a specific emoji on a message",
			required: true
		},
		"edit_message": {
			type: "(self, data: [EditMessageOptions](#EditMessageOptions)) -> [LazyMessageObject](#LazyMessageObject)",
			description: "@yields Edits a message",
			required: true
		},
		"delete_message": {
			type: "(self, channel_id: [discord](#module.discord).[Snowflake](#Snowflake), message_id: [discord](#module.discord).[Snowflake](#Snowflake), reason: [string](#string)) -> [nil](#nil)",
			description: "@yields Deletes a message",
			required: true
		},
		"bulk_delete_messages": {
			type: "(self, channel_id: [discord](#module.discord).[Snowflake](#Snowflake), message_ids: \{[discord](#module.discord).[Snowflake](#Snowflake)\}, reason: [string](#string)) -> [nil](#nil)",
			description: "@yields Bulk deletes messages in a channel",
			required: true
		},
		"create_interaction_response": {
			type: "(self, data: [CreateInteractionResponseOptions](#CreateInteractionResponseOptions)) -> [nil](#nil)",
			description: "@yields Creates an interaction response",
			required: true
		},
		"get_original_interaction_response": {
			type: "(self, interaction_token: [string](#string)) -> [LazyMessageObject](#LazyMessageObject)",
			description: "@yields Gets the original interaction response",
			required: true
		},
		"edit_original_interaction_response": {
			type: "(self, data: [EditInteractionResponseOptions](#EditInteractionResponseOptions)) -> [LazyMessageObject](#LazyMessageObject)",
			description: "@yields Edits the original interaction response",
			required: true
		},
		"delete_original_interaction_response": {
			type: "(self, interaction_token: [string](#string)) -> [nil](#nil)",
			description: "@yields Deletes the original interaction response",
			required: true
		},
		"get_followup_message": {
			type: "(self, data: [GetFollowupMessageOptions](#GetFollowupMessageOptions)) -> [LazyMessageObject](#LazyMessageObject)",
			description: "@yields Gets a followup interaction response",
			required: true
		},
		"create_followup_message": {
			type: "(self, data: [CreateFollowupMessageOptions](#CreateFollowupMessageOptions)) -> [LazyMessageObject](#LazyMessageObject)",
			description: "@yields Creates a followup interaction response",
			required: true
		},
		"edit_followup_message": {
			type: "(self, data: [EditFollowupMessageOptions](#EditFollowupMessageOptions)) -> [LazyMessageObject](#LazyMessageObject)",
			description: "@yields Edits a followup interaction response",
			required: true
		},
		"delete_followup_message": {
			type: "(self, data: [DeleteFollowupMessageOptions](#DeleteFollowupMessageOptions)) -> [nil](#nil)",
			description: "@yields Deletes a followup interaction response",
			required: true
		},
		"get_guild_commands": {
			type: "(self) -> [LazyApplicationCommandsObject](#LazyApplicationCommandsObject)",
			description: "@yields Gets all guild commands currently registered",
			required: true
		},
		"create_guild_command": {
			type: "(self, data: [CreateCommandOptions](#CreateCommandOptions)) -> [LazyApplicationCommandObject](#LazyApplicationCommandObject)",
			description: "@yields Creates a guild command",
			required: true
		},
		"create_guild_commands": {
			type: "(self, data: [CreateCommandsOptions](#CreateCommandsOptions)) -> [LazyApplicationCommandsObject](#LazyApplicationCommandsObject)",
			description: "@yields Creates multiple guild commands",
			required: true
		},
	}}
/>
<div id="Plugin"></div>

## Plugin

<details>
<summary>Raw Type</summary>

```luau
type Plugin = DiscordExecutor
```

</details>

[DiscordExecutor](#DiscordExecutor)

