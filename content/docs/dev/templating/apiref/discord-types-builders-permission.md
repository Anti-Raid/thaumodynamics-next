---
title: "@discord-types/builders/permission"
description: "API reference for @discord-types/builders/permission"
---

<div id="@discord-types/builders/permission"></div>

# @discord-types/builders/permission

<div id="Types"></div>

## Types

<div id="Permission"></div>

## Permission

<details>
<summary>Raw Type</summary>

```luau
type Permission = Permission.Prototype, & {
	bitflag: typesext.U64,

	addedPermissions: {permissionTypes.Permissions},

	removedPermissions: {permissionTypes.Permissions}
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"bitflag": {
			type: "[typesext](#module.typesext).[U64](#U64)",
			description: "",
			required: true
		},
		"addedPermissions": {
			type: "\{[permissionTypes](#module.permissionTypes).[Permissions](#Permissions)\}",
			description: "",
			required: true
		},
		"removedPermissions": {
			type: "\{[permissionTypes](#module.permissionTypes).[Permissions](#Permissions)\}",
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
type JSON = Permission.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Permission.Prototype.setPermissionBitflag"></div>

## Permission.Prototype.setPermissionBitflag

\[\[
	set the bitflag for this builder.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	set the bitflag for this builder.
]]
function Permission.Prototype.setPermissionBitflag(self: Permission, bitflag: typesext.U64Convertibles) -> Permission end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="bitflag"></div>

### bitflag

[typesext](#module.typesext).[U64Convertibles](#U64Convertibles)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Permission](#Permission)<div id="Permission.Prototype.addPermission"></div>

## Permission.Prototype.addPermission

\[\[
	add a specific permission to this permissions builder.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	add a specific permission to this permissions builder.
]]
function Permission.Prototype.addPermission(self: Permission, permission: permissionTypes.Permissions) -> Permission end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="permission"></div>

### permission

[permissionTypes](#module.permissionTypes).[Permissions](#Permissions)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Permission](#Permission)<div id="Permission.Prototype.removePermission"></div>

## Permission.Prototype.removePermission

\[\[
	remove a specific permission to this permissions builder.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	remove a specific permission to this permissions builder.
]]
function Permission.Prototype.removePermission(self: Permission, permission: permissionTypes.Permissions) -> Permission end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="permission"></div>

### permission

[permissionTypes](#module.permissionTypes).[Permissions](#Permissions)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Permission](#Permission)<div id="Permission.Prototype.build"></div>

## Permission.Prototype.build

\[\[
	Returns the bitflag representation of the permission.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Returns the bitflag representation of the permission.
]]
function Permission.Prototype.build(self: Permission) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Permission.Interface.new"></div>

## Permission.Interface.new

\[\[
	Responsible for creating a new Permission.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Permission.

	\`\`\`lua
	
	\`\`\`
]]
function Permission.Interface.new(resource: {
		bitflag: (string | number)?
	}?) -> Permission end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{bitflag: ([string](#string) | [number](#number))?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Permission](#Permission)<div id="Permission.Interface.fromPermissions"></div>

## Permission.Interface.fromPermissions

\[\[
	Enables you to create a permission builder from a list of permissions.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Enables you to create a permission builder from a list of permissions.
]]
function Permission.Interface.fromPermissions(permissions: {permissionTypes.Permissions}) -> Permission end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="permissions"></div>

### permissions

\{[permissionTypes](#module.permissionTypes).[Permissions](#Permissions)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Permission](#Permission)