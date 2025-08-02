---
title: "@discord-types/builders/guild/overwrite"
description: "API reference for @discord-types/builders/guild/overwrite"
---

<div id="@discord-types/builders/guild/overwrite"></div>

# @discord-types/builders/guild/overwrite

<div id="Types"></div>

## Types

<div id="Overwrite"></div>

## Overwrite

<details>
<summary>Raw Type</summary>

```luau
type Overwrite = Overwrite.Prototype, & {
	allowedPermissionFlags: {permissionTypes.Permissions},

	deniedPermissionFlags: {permissionTypes.Permissions},

	type: PermissionOverwriteType,

	id: apiTypes.Snowflake
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"allowedPermissionFlags": {
			type: "\{[permissionTypes](#module.permissionTypes).[Permissions](#Permissions)\}",
			description: "",
			required: true
		},
		"deniedPermissionFlags": {
			type: "\{[permissionTypes](#module.permissionTypes).[Permissions](#Permissions)\}",
			description: "",
			required: true
		},
		"type": {
			type: "[PermissionOverwriteType](#PermissionOverwriteType)",
			description: "",
			required: true
		},
		"id": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
	}}
/>
</details>

<div id="JSON"></div>

## JSON

<details>
<summary>Raw Type</summary>

```luau
type JSON = Overwrite.Prototype.build(nil :: any),
```

</details>

<div id="PermissionOverwriteType"></div>

## PermissionOverwriteType

<details>
<summary>Raw Type</summary>

```luau
type PermissionOverwriteType = "role" | "member"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"role"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"member"
```

</details>

<div id="PermissionOverwriteObject"></div>

## PermissionOverwriteObject

<details>
<summary>Raw Type</summary>

```luau
type PermissionOverwriteObject = apiTypes.OverwriteObject
```

</details>

[apiTypes](#module.apiTypes).[OverwriteObject](#OverwriteObject)



<div id="Functions"></div>

# Functions

<div id="Overwrite.Prototype.allowPermissions"></div>

## Overwrite.Prototype.allowPermissions

\[\[
	Responsible for allowing specific permissionTypes to be set on either a Role of a Member.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for allowing specific permissionTypes to be set on either a Role of a Member.
]]
function Overwrite.Prototype.allowPermissions(self: Overwrite, ...: permissionTypes.Permissions) -> Overwrite end
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

[Overwrite](#Overwrite)<div id="Overwrite.Prototype.denyPermissions"></div>

## Overwrite.Prototype.denyPermissions

\[\[
	Responsible for denying specific permissionTypes to be set on either a Role of a Member.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for denying specific permissionTypes to be set on either a Role of a Member.
]]
function Overwrite.Prototype.denyPermissions(self: Overwrite, ...: permissionTypes.Permissions) -> Overwrite end
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

[Overwrite](#Overwrite)<div id="Overwrite.Prototype.build"></div>

## Overwrite.Prototype.build

\[\[
	Responsible for building the OverwriteObject JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the OverwriteObject JSON that can be parsed by the Discord API.
]]
function Overwrite.Prototype.build(self: Overwrite) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Overwrite.Interface.new"></div>

## Overwrite.Interface.new

\[\[
	Responsible for creating a new Overwrite.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Overwrite.

	\`\`\`lua
	
	\`\`\`
]]
function Overwrite.Interface.new(resource: {
		permissionType: PermissionOverwriteType,

		allowFlags: {permissionTypes.Permissions}?,

		denyFlags: {permissionTypes.Permissions}?
	}) -> Overwrite end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

<TypeTable
	type={{
		"permissionType": {
			type: "[PermissionOverwriteType](#PermissionOverwriteType)",
			description: "",
			required: true
		},
		"allowFlags": {
			type: "\{[permissionTypes](#module.permissionTypes).[Permissions](#Permissions)\}?",
			description: "",
			required: false
		},
		"denyFlags": {
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

[Overwrite](#Overwrite)<div id="Overwrite.Interface.fromId"></div>

## Overwrite.Interface.fromId

\[\[
	Responsible for creating a new Overwrite from an existing ID/Object.

	Supports properties that the .new constructor doesn't support. (id)
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Overwrite from an existing ID/Object.

	Supports properties that the .new constructor doesn't support. (id)
]]
function Overwrite.Interface.fromId(resource: {
		permissionId: apiTypes.Snowflake,

		permissionType: PermissionOverwriteType,

		allowFlags: {permissionTypes.Permissions}?,

		denyFlags: {permissionTypes.Permissions}?
	}) -> Overwrite end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

<TypeTable
	type={{
		"permissionId": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"permissionType": {
			type: "[PermissionOverwriteType](#PermissionOverwriteType)",
			description: "",
			required: true
		},
		"allowFlags": {
			type: "\{[permissionTypes](#module.permissionTypes).[Permissions](#Permissions)\}?",
			description: "",
			required: false
		},
		"denyFlags": {
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

[Overwrite](#Overwrite)