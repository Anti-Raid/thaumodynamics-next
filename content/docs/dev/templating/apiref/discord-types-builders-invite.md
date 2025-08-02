---
title: "@discord-types/builders/invite"
description: "API reference for @discord-types/builders/invite"
---

<div id="@discord-types/builders/invite"></div>

# @discord-types/builders/invite

<div id="Types"></div>

## Types

<div id="Invite"></div>

## Invite

<details>
<summary>Raw Type</summary>

```luau
type Invite = Invite.Prototype, & {
	maxAge: number?,

	maxUses: number?,

	temporary: boolean?,

	unique: boolean?,

	targetType: guildTypes.InviteTargetType?,

	targetUserId: string?,

	targetApplicationId: string?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"maxAge": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"maxUses": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"temporary": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"unique": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"targetType": {
			type: "[guildTypes](#module.guildTypes).[InviteTargetType](#InviteTargetType)?",
			description: "",
			required: false
		},
		"targetUserId": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"targetApplicationId": {
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
type JSON = Invite.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Invite.Prototype.setMaxAge"></div>

## Invite.Prototype.setMaxAge

\[\[
	Sets the duration in seconds after which the invite expires.
	Age must be between 0 and 604800 seconds.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the duration in seconds after which the invite expires.
	Age must be between 0 and 604800 seconds.
]]
function Invite.Prototype.setMaxAge(self: Invite, age: number) -> Invite end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="age"></div>

### age

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Invite](#Invite)<div id="Invite.Prototype.setMaxUses"></div>

## Invite.Prototype.setMaxUses

\[\[
	Sets the maximum number of times this invite can be used.
	Uses must be between 0 and 100.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the maximum number of times this invite can be used.
	Uses must be between 0 and 100.
]]
function Invite.Prototype.setMaxUses(self: Invite, uses: number) -> Invite end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="uses"></div>

### uses

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Invite](#Invite)<div id="Invite.Prototype.setTemporary"></div>

## Invite.Prototype.setTemporary

\[\[
	Sets whether the invite grants temporary membership.
	Temporary members are removed when they disconnect unless granted a role.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets whether the invite grants temporary membership.
	Temporary members are removed when they disconnect unless granted a role.
]]
function Invite.Prototype.setTemporary(self: Invite, isTemporary: boolean) -> Invite end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="isTemporary"></div>

### isTemporary

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Invite](#Invite)<div id="Invite.Prototype.setIsUnique"></div>

## Invite.Prototype.setIsUnique

\[\[
	Sets whether this invite should be unique.
	If true, don't try to reuse a similar invite.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets whether this invite should be unique.
	If true, don't try to reuse a similar invite.
]]
function Invite.Prototype.setIsUnique(self: Invite, isUnique: boolean) -> Invite end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="isUnique"></div>

### isUnique

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Invite](#Invite)<div id="Invite.Prototype.setTargetType"></div>

## Invite.Prototype.setTargetType

\[\[
	Sets the type of target for this invite.
	Used for stream and embedded application invites.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the type of target for this invite.
	Used for stream and embedded application invites.
]]
function Invite.Prototype.setTargetType(self: Invite, targetType: guildTypes.InviteTargetType) -> Invite end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="targetType"></div>

### targetType

[guildTypes](#module.guildTypes).[InviteTargetType](#InviteTargetType)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Invite](#Invite)<div id="Invite.Prototype.setTargetUser"></div>

## Invite.Prototype.setTargetUser

\[\[
	Sets the target user ID for this invite.
	Used to specify which user's stream to display for stream invites.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the target user ID for this invite.
	Used to specify which user's stream to display for stream invites.
]]
function Invite.Prototype.setTargetUser(self: Invite, userId: string) -> Invite end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="userId"></div>

### userId

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Invite](#Invite)<div id="Invite.Prototype.setTargetApplication"></div>

## Invite.Prototype.setTargetApplication

\[\[
	Sets the target application ID for this invite.
	Used to specify which embedded application to open.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the target application ID for this invite.
	Used to specify which embedded application to open.
]]
function Invite.Prototype.setTargetApplication(self: Invite, applicationId: string) -> Invite end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="applicationId"></div>

### applicationId

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Invite](#Invite)<div id="Invite.Prototype.build"></div>

## Invite.Prototype.build

\[\[
	Responsible for buillding the invite object that the Discord API can understand.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for buillding the invite object that the Discord API can understand.
]]
function Invite.Prototype.build(self: Invite) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Invite.Interface.new"></div>

## Invite.Interface.new

\[\[
	Responsible for creating a new Invite.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Invite.

	\`\`\`lua
	
	\`\`\`
]]
function Invite.Interface.new(resource: {
		maxAge: number?,

		maxUses: number?,

		temporary: boolean?,

		unique: boolean?,

		targetType: guildTypes.InviteTargetType?,

		targetUserId: string?,

		targetApplicationId: string?
	}?) -> Invite end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{maxAge: [number](#number)?, maxUses: [number](#number)?, temporary: [boolean](#boolean)?, unique: [boolean](#boolean)?, targetType: [guildTypes](#module.guildTypes).[InviteTargetType](#InviteTargetType)?, targetUserId: [string](#string)?, targetApplicationId: [string](#string)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Invite](#Invite)