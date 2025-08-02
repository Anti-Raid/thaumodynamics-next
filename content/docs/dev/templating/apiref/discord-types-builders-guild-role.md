---
title: "@discord-types/builders/guild/role"
description: "API reference for @discord-types/builders/guild/role"
---

<div id="@discord-types/builders/guild/role"></div>

# @discord-types/builders/guild/role

<div id="Types"></div>

## Types

<div id="Role"></div>

## Role

<details>
<summary>Raw Type</summary>

```luau
type Role = Role.Prototype, & {
	name: string?,

	permissionFlags: {permissionTypes.Permissions},

	color: number?,

	isHoisted: boolean?,

	icon: string?,

	unicodeEmoji: string?,

	isMentionable: boolean?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"name": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"permissionFlags": {
			type: "\{[permissionTypes](#module.permissionTypes).[Permissions](#Permissions)\}",
			description: "",
			required: true
		},
		"color": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"isHoisted": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"icon": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"unicodeEmoji": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"isMentionable": {
			type: "[boolean](#boolean)?",
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
type JSON = Role.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Role.Prototype.setName"></div>

## Role.Prototype.setName

\[\[
	Sets the name of the role, optionally this could be defined when creating the Role Builder as well.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the name of the role, optionally this could be defined when creating the Role Builder as well.
]]
function Role.Prototype.setName(self: Role, roleName: string) -> Role end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="roleName"></div>

### roleName

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Role](#Role)<div id="Role.Prototype.setPermissions"></div>

## Role.Prototype.setPermissions

\[\[
	Sets the permissions of the role, optionally this could be defined when creating the Role Builder as well.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the permissions of the role, optionally this could be defined when creating the Role Builder as well.
]]
function Role.Prototype.setPermissions(self: Role, ...: permissionTypes.Permissions) -> Role end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="..."></div>

### ...

[permissionTypes](#module.permissionTypes).[Permissions](#Permissions)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Role](#Role)<div id="Role.Prototype.setColor"></div>

## Role.Prototype.setColor

\[\[
	Sets the color of the role. Colors are presennted as a hexadecimal number.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the color of the role. Colors are presennted as a hexadecimal number.
]]
function Role.Prototype.setColor(self: Role, color: number) -> Role end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="color"></div>

### color

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Role](#Role)<div id="Role.Prototype.setHoisted"></div>

## Role.Prototype.setHoisted

\[\[
	Sets the role to be hoisted. A hoisted role is displayed in the user listing, vs's an unhoisted role which is not displayed at all.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the role to be hoisted. A hoisted role is displayed in the user listing, vs's an unhoisted role which is not displayed at all.
]]
function Role.Prototype.setHoisted(self: Role, isHoisted: boolean) -> Role end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="isHoisted"></div>

### isHoisted

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Role](#Role)<div id="Role.Prototype.setMentionable"></div>

## Role.Prototype.setMentionable

\[\[
	Sets the role to be mentionable through the @ mention.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the role to be mentionable through the @ mention.
]]
function Role.Prototype.setMentionable(self: Role, isMentionable: boolean) -> Role end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="isMentionable"></div>

### isMentionable

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Role](#Role)<div id="Role.Prototype.build"></div>

## Role.Prototype.build

\[\[
	Responsible for buillding the role object that the Discord API can understand.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for buillding the role object that the Discord API can understand.
]]
function Role.Prototype.build(self: Role) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Role.Interface.new"></div>

## Role.Interface.new

\[\[
	Constructs a new Role Builder.

	\`\`\`lua
	local role = Role.new("Role Name", \{ permissions.Permission.SendMessages \})
		:setColor(0xFFFFFF)
		:setHoisted(true)
		:setMentionable(true)
		:build()
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Constructs a new Role Builder.

	\`\`\`lua
	local role = Role.new("Role Name", { permissions.Permission.SendMessages })
		:setColor(0xFFFFFF)
		:setHoisted(true)
		:setMentionable(true)
		:build()
	\`\`\`
]]
function Role.Interface.new(resource: {
		roleName: string?,

		rolePermissions: {permissionTypes.Permissions}?
	}) -> Role end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

<TypeTable
	type={{
		"roleName": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"rolePermissions": {
			type: "\{[permissionTypes](#module.permissionTypes).[Permissions](#Permissions)\}?",
			description: "",
			required: false
		},
	}}
/>
<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Role](#Role)