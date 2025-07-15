---
title: "@antiraid/discord"
description: "API documentation for the @antiraid/discord module, including types and Discord-specific helpers."
---

# @antiraid/discord

## Types

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

### action_type

The action type to filter by

_This field is optional and may not be specified_

[`discord`](./discord.md).[`AuditLogEventType`](./discord.md#auditlogeventtype)

### user_id

The user ID to filter by

_This field is optional and may not be specified_

[`discord`](./discord.md).[`Snowflake`](./discord.md#snowflake)

### before

The audit log entry ID to filter

_This field is optional and may not be specified_

[`discord`](./discord.md).[`Snowflake`](./discord.md#snowflake)

### limit

The number of entries to return

_This field is optional and may not be specified_

`number`

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

### rule_id

The rule ID

[`discord`](./discord.md).[`Snowflake`](./discord.md#snowflake)

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

### reason

The reason for creating the rule

`string`

### data

The data to create the rule with

[`discordRest`](./discordrest.md).[`CreateAutoModerationRuleRequest`](./discordrest.md#createautomoderationrulerequest)

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

### rule_id

The rule ID

[`discord`](./discord.md).[`Snowflake`](./discord.md#snowflake)

### reason

The reason for editing the rule

`string`

### data

The data to edit the rule with

[`discordRest`](./discordrest.md).[`ModifyAutoModerationRuleRequest`](./discordrest.md#modifyautomoderationrulerequest)

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

### rule_id

The rule ID

[`discord`](./discord.md).[`Snowflake`](./discord.md#snowflake)

### reason

The reason for deleting the rule

`string`

## GetChannelOptions

Options for getting a channel in Discord

<details>
<summary>Raw Type</summary>

```luau
--- Options for getting a channel in Discord
type GetChannelOptions = {
	--- The channel ID
	channel_id: discord.Snowflake
}
```

</details>

### channel_id

The channel ID

[`discord`](./discord.md).[`Snowflake`](./discord.md#snowflake)

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

### channel_id

The channel ID

[`discord`](./discord.md).[`Snowflake`](./discord.md#snowflake)

### reason

The reason for the edit
