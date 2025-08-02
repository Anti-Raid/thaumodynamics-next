---
title: "@antiraid-ext/utils/stingmanager"
description: "API reference for @antiraid-ext/utils/stingmanager"
---

<div id="@antiraid-ext/utils/stingmanager"></div>

# @antiraid-ext/utils/stingmanager

<div id="Types"></div>

## Types

<div id="Sting"></div>

## Sting

<details>
<summary>Raw Type</summary>

```luau
type Sting = {
	stingId: string,

	userId: discord.Snowflake,

	modId: discord.Snowflake?,

	stings: number,

	reason: string,

	created_at: datetime.DateTime,

	expires_at: datetime.DateTime?
}
```

</details>

<TypeTable
	type={{
		"stingId": {
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
		"stings": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"reason": {
			type: "[string](#string)",
			description: "",
			required: true
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
	}}
/>
<div id="CreateSting"></div>

## CreateSting

<details>
<summary>Raw Type</summary>

```luau
type CreateSting = {
	userId: discord.Snowflake,

	modId: discord.Snowflake?,

	stings: number?,

	reason: string,

	expires_at: datetime.DateTime?
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
		"stings": {
			type: "[number](#number)?",
			description: "",
			required: false
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
	}}
/>
<div id="StingManager"></div>

## StingManager

\[\[
    Manages the moderation 'stings' (think bee stings!) of a user.
\]\]

<details>
<summary>Raw Type</summary>

```luau
--[[
    Manages the moderation 'stings' (think bee stings!) of a user.
]]
type StingManager = {
	--- Gets all the stings a user has accrued
	getStingsOnUser: (userId: discord.Snowflake) -> {Sting},

	--- Gets a single sting by its ID
	getSting: (userId: discord.Snowflake, stingId: string) -> Sting?,

	--- Creates a new sting for a user returning a Sting
	createUserSting: (sting: CreateSting) -> Sting,

	--- Sets the expiration of a sting. Repeated calls override previous expiration
	setStingExpiration: (userId: discord.Snowflake, stingId: string, reason: string, expiresAt: datetime.DateTime) -> (),

	--- Deletes the expiration of a sting
	deleteStingExpiration: (userId: discord.Snowflake, stingId: string) -> (),

	--- Deletes a sting. Note that this does not delete the expiration task (use fullyDeleteSting if you want to do that)
	deleteSting: (userId: discord.Snowflake, stingId: string, mod: string?, auditReason: string) -> (),

	--- Returns the cached list of stings for a user. If the cache is expired, it will fetch the stings from the kv store
	getCachedUserStings: (userId: string) -> {Sting},

	--- Manually update the cached list of stings for a user
	--- This is useful for when you know the stings have changed and you want to update the cache
	updateCachedUserStings: (userId: string, stings: {Sting}) -> nil,

	--- Clears the cached list of stings for a user
	clearCachedUserStings: (userId: string) -> nil,

	--- Compactly stringifies a sting
	stingCompactString: (sting: Sting) -> string
}
```

</details>

<TypeTable
	type={{
		"getStingsOnUser": {
			type: "(userId: [discord](#module.discord).[Snowflake](#Snowflake)) -> \{[Sting](#Sting)\}",
			description: "Gets all the stings a user has accrued",
			required: true
		},
		"getSting": {
			type: "(userId: [discord](#module.discord).[Snowflake](#Snowflake), stingId: [string](#string)) -> [Sting](#Sting)?",
			description: "Gets a single sting by its ID",
			required: true
		},
		"createUserSting": {
			type: "(sting: [CreateSting](#CreateSting)) -> [Sting](#Sting)",
			description: "Creates a new sting for a user returning a Sting",
			required: true
		},
		"setStingExpiration": {
			type: "(userId: [discord](#module.discord).[Snowflake](#Snowflake), stingId: [string](#string), reason: [string](#string), expiresAt: [datetime](#module.datetime).[DateTime](#DateTime)) -> ()",
			description: "Sets the expiration of a sting. Repeated calls override previous expiration",
			required: true
		},
		"deleteStingExpiration": {
			type: "(userId: [discord](#module.discord).[Snowflake](#Snowflake), stingId: [string](#string)) -> ()",
			description: "Deletes the expiration of a sting",
			required: true
		},
		"deleteSting": {
			type: "(userId: [discord](#module.discord).[Snowflake](#Snowflake), stingId: [string](#string), mod: [string](#string)?, auditReason: [string](#string)) -> ()",
			description: "Deletes a sting. Note that this does not delete the expiration task (use fullyDeleteSting if you want to do that)",
			required: true
		},
		"getCachedUserStings": {
			type: "(userId: [string](#string)) -> \{[Sting](#Sting)\}",
			description: "Returns the cached list of stings for a user. If the cache is expired, it will fetch the stings from the kv store",
			required: true
		},
		"updateCachedUserStings": {
			type: "(userId: [string](#string), stings: \{[Sting](#Sting)\}) -> [nil](#nil)",
			description: "Manually update the cached list of stings for a userThis is useful for when you know the stings have changed and you want to update the cache",
			required: true
		},
		"clearCachedUserStings": {
			type: "(userId: [string](#string)) -> [nil](#nil)",
			description: "Clears the cached list of stings for a user",
			required: true
		},
		"stingCompactString": {
			type: "(sting: [Sting](#Sting)) -> [string](#string)",
			description: "Compactly stringifies a sting",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="StingManager"></div>

## StingManager

2 minutes

<details>
<summary>Function Signature</summary>

```luau
-- 2 minutes
function StingManager(ctx: Primitives.TemplateContext) -> StingManager end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[StingManager](#StingManager)