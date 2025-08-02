---
title: "@antiraid-ext/utils/punishmentmanager"
description: "API reference for @antiraid-ext/utils/punishmentmanager"
---

<div id="@antiraid-ext/utils/punishmentmanager"></div>

# @antiraid-ext/utils/punishmentmanager

<div id="Types"></div>

## Types

<div id="ResolutionReason"></div>

## ResolutionReason

<details>
<summary>Raw Type</summary>

```luau
type ResolutionReason = "reversed"
```

</details>

```luau
"reversed"
```

<div id="Punishment"></div>

## Punishment

<details>
<summary>Raw Type</summary>

```luau
type Punishment = {
	punishmentId: string,

	userId: discord.Snowflake,

	modId: discord.Snowflake?,

	punishment: string,

	reason: string,

	delete_message_seconds: number?,

	created_at: datetime.DateTime,

	expires_at: datetime.DateTime?,

	resolved: ResolutionReason?
}
```

</details>

<TypeTable
	type={{
		"punishmentId": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"userId": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"modId": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"punishment": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"delete_message_seconds": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"created_at": {
			type: "[datetime](#module.datetime).[DateTime](#DateTime)",
			description: "",
			required: true
		},
		"expires_at": {
			type: "[datetime](#module.datetime).[DateTime](#DateTime)?",
			description: "",
			required: false
		},
		"resolved": {
			type: "[ResolutionReason](#ResolutionReason)?",
			description: "",
			required: false
		},
	}}
/>
<div id="CreatePunishment"></div>

## CreatePunishment

<details>
<summary>Raw Type</summary>

```luau
type CreatePunishment = {
	userId: discord.Snowflake,

	modId: discord.Snowflake?,

	punishment: string,

	reason: string,

	expires_at: datetime.DateTime?,

	delete_message_seconds: number?
}
```

</details>

<TypeTable
	type={{
		"userId": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"modId": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"punishment": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"expires_at": {
			type: "[datetime](#module.datetime).[DateTime](#DateTime)?",
			description: "",
			required: false
		},
		"delete_message_seconds": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
	}}
/>
<div id="PunishmentManager"></div>

## PunishmentManager

\[\[
    Manages the moderation 'punishments' (think bee punishments!) of a user.
\]\]

<details>
<summary>Raw Type</summary>

```luau
--[[
    Manages the moderation 'punishments' (think bee punishments!) of a user.
]]
type PunishmentManager = {
	--- Gets all the punishments a user has accrued
	getPunishmentsOnUser: (userId: discord.Snowflake) -> {Punishment},

	--- Gets a single punishment by its ID
	getPunishment: (userId: discord.Snowflake, punishmentId: string) -> Punishment?,

	--- Creates a new punishment for a user returning a Punishment
	createUserPunishment: (punishment: CreatePunishment) -> Punishment,

	--- Sets the expiration of a punishment. Repeated calls override previous expiration
	setPunishmentExpiration: (userId: discord.Snowflake, punishmentId: string, reason: string, expiresAt: datetime.DateTime) -> (),

	--- Deletes the expiration of a punishment
	deletePunishmentExpiration: (userId: discord.Snowflake, punishmentId: string, resolve: ResolutionReason?) -> (),

	--- Deletes a punishment. This will also reverse the punishment if possible and delete the expiration if it exists
	deletePunishment: (userId: discord.Snowflake, punishmentId: string, mod: string?, auditReason: string) -> (),

	--- Reverse a whole class of punishments, this will create a dummy punishment for reversal disabling expiration for all punishments within the bot
	reversePunishmentClass: (userId: discord.Snowflake, mod: string?, punishment: string, auditReason: string) -> (),

	--- Returns the cached list of punishments for a user. If the cache is expired, it will fetch the punishments from the kv store
	getCachedUserPunishments: (userId: string) -> {Punishment},

	--- Manually update the cached list of punishments for a user
	---
	--- This is useful for when you know the punishments have changed and you want to update the cache
	updateCachedUserPunishments: (userId: string, punishments: {Punishment}) -> nil,

	--- Clears the cached list of punishments for a user
	clearCachedUserPunishments: (userId: string) -> nil,

	--- Compactly stringifies a punishment
	punishmentCompactString: (punishment: Punishment) -> string,

	--- Gets the list of punishment actions. This can then be modified directly to add/remove punishment actions
	getPunishmentActions: () -> {
		[string]: PunishmentAction
	}
}
```

</details>

<TypeTable
	type={{
		"getPunishmentsOnUser": {
			type: "(userId: [discord](#module.discord).[Snowflake](#Snowflake)) -> \{[Punishment](#Punishment)\}",
			description: "Gets all the punishments a user has accrued",
			required: true
		},
		"getPunishment": {
			type: "(userId: [discord](#module.discord).[Snowflake](#Snowflake), punishmentId: [string](#string)) -> [Punishment](#Punishment)?",
			description: "Gets a single punishment by its ID",
			required: true
		},
		"createUserPunishment": {
			type: "(punishment: [CreatePunishment](#CreatePunishment)) -> [Punishment](#Punishment)",
			description: "Creates a new punishment for a user returning a Punishment",
			required: true
		},
		"setPunishmentExpiration": {
			type: "(userId: [discord](#module.discord).[Snowflake](#Snowflake), punishmentId: [string](#string), reason: [string](#string), expiresAt: [datetime](#module.datetime).[DateTime](#DateTime)) -> ()",
			description: "Sets the expiration of a punishment. Repeated calls override previous expiration",
			required: true
		},
		"deletePunishmentExpiration": {
			type: "(userId: [discord](#module.discord).[Snowflake](#Snowflake), punishmentId: [string](#string), resolve: [ResolutionReason](#ResolutionReason)?) -> ()",
			description: "Deletes the expiration of a punishment",
			required: true
		},
		"deletePunishment": {
			type: "(userId: [discord](#module.discord).[Snowflake](#Snowflake), punishmentId: [string](#string), mod: [string](#string)?, auditReason: [string](#string)) -> ()",
			description: "Deletes a punishment. This will also reverse the punishment if possible and delete the expiration if it exists",
			required: true
		},
		"reversePunishmentClass": {
			type: "(userId: [discord](#module.discord).[Snowflake](#Snowflake), mod: [string](#string)?, punishment: [string](#string), auditReason: [string](#string)) -> ()",
			description: "Reverse a whole class of punishments, this will create a dummy punishment for reversal disabling expiration for all punishments within the bot",
			required: true
		},
		"getCachedUserPunishments": {
			type: "(userId: [string](#string)) -> \{[Punishment](#Punishment)\}",
			description: "Returns the cached list of punishments for a user. If the cache is expired, it will fetch the punishments from the kv store",
			required: true
		},
		"updateCachedUserPunishments": {
			type: "(userId: [string](#string), punishments: \{[Punishment](#Punishment)\}) -> [nil](#nil)",
			description: "Manually update the cached list of punishments for a userThis is useful for when you know the punishments have changed and you want to update the cache",
			required: true
		},
		"clearCachedUserPunishments": {
			type: "(userId: [string](#string)) -> [nil](#nil)",
			description: "Clears the cached list of punishments for a user",
			required: true
		},
		"punishmentCompactString": {
			type: "(punishment: [Punishment](#Punishment)) -> [string](#string)",
			description: "Compactly stringifies a punishment",
			required: true
		},
		"getPunishmentActions": {
			type: "() -> \{[string]: [PunishmentAction](#PunishmentAction)\}",
			description: "Gets the list of punishment actions. This can then be modified directly to add/remove punishment actions",
			required: true
		},
	}}
/>
<div id="PunishmentAction"></div>

## PunishmentAction

A punishment action stores how to apply and reverse a punishment

<details>
<summary>Raw Type</summary>

```luau
--- A punishment action stores how to apply and reverse a punishment
type PunishmentAction = {
	name: string,

	description: string,

	check: (ctx: Primitives.TemplateContext, p: Punishment) -> (),

	needsReversal: boolean,

	apply: (ctx: Primitives.TemplateContext, p: Punishment) -> (),

	remove: ((ctx: Primitives.TemplateContext, p: Punishment) -> ())?
}
```

</details>

<TypeTable
	type={{
		"check": {
			type: "(ctx: [Primitives](#module.Primitives).[TemplateContext](#TemplateContext), p: [Punishment](#Punishment)) -> ()",
			description: "",
			required: true
		},
		"apply": {
			type: "(ctx: [Primitives](#module.Primitives).[TemplateContext](#TemplateContext), p: [Punishment](#Punishment)) -> ()",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"description": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"needsReversal": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"remove": {
			type: "(ctx: [Primitives](#module.Primitives).[TemplateContext](#TemplateContext), p: [Punishment](#Punishment)) -> ()?",
			description: "",
			required: false
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="PunishmentManager"></div>

## PunishmentManager

2 minutes

<details>
<summary>Function Signature</summary>

```luau
-- 2 minutes
function PunishmentManager(ctx: Primitives.TemplateContext, stingmanager: stingmanager.StingManager) -> PunishmentManager end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="stingmanager"></div>

### stingmanager

[stingmanager](#module.stingmanager).[StingManager](#StingManager)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[PunishmentManager](#PunishmentManager)