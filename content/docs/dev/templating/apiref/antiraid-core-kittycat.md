---
title: "@antiraid-core/kittycat"
description: "API reference for @antiraid-core/kittycat"
---

<div id="@antiraid-core/kittycat"></div>

# @antiraid-core/kittycat

<div id="Types"></div>

## Types

<div id="Permission"></div>

## Permission

!nocheck

Permission type

<details>
<summary>Raw Type</summary>

```luau
--!nocheck
--- Permission type
type Permission = {
	--- Namespace of the permission
	namespace: string,

	--- Permission of the permission
	perm: string,

	--- Whether the permission is negated
	negator: boolean
}
```

</details>

<TypeTable
	type={{
		"namespace": {
			type: "[string](#string)",
			description: "Namespace of the permission",
			required: true
		},
		"perm": {
			type: "[string](#string)",
			description: "Permission of the permission",
			required: true
		},
		"negator": {
			type: "[boolean](#boolean)",
			description: "Whether the permission is negated",
			required: true
		},
	}}
/>
<div id="PartialStaffPosition"></div>

## PartialStaffPosition

PartialStaffPosition type

<details>
<summary>Raw Type</summary>

```luau
--- PartialStaffPosition type
type PartialStaffPosition = {
	id: string,

	index: number,

	perms: {Permission}
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"index": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"perms": {
			type: "\{[Permission](#Permission)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="StaffPermissions"></div>

## StaffPermissions

StaffPermissions type

<details>
<summary>Raw Type</summary>

```luau
--- StaffPermissions type
type StaffPermissions = {
	user_positions: {PartialStaffPosition},

	perm_overrides: {Permission},

	resolve: (self: StaffPermissions) -> {Permission}
}
```

</details>

<TypeTable
	type={{
		"resolve": {
			type: "(self) -> \{[Permission](#Permission)\}",
			description: "",
			required: true
		},
		"user_positions": {
			type: "\{[PartialStaffPosition](#PartialStaffPosition)\}",
			description: "",
			required: true
		},
		"perm_overrides": {
			type: "\{[Permission](#Permission)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="CheckPatchChangesError"></div>

## CheckPatchChangesError

Error types

<details>
<summary>Raw Type</summary>

```luau
-- Error types
type CheckPatchChangesError = {
	type: "NoPermission",

	permission: Permission
} | {
	type: "LacksNegatorForWildcard",

	wildcard: Permission,

	negator: Permission
}
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

<TypeTable
	type={{
		"type": {
			type: "'NoPermission'",
			description: "",
			required: true
		},
		"permission": {
			type: "[Permission](#Permission)",
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
			type: "'LacksNegatorForWildcard'",
			description: "",
			required: true
		},
		"wildcard": {
			type: "[Permission](#Permission)",
			description: "",
			required: true
		},
		"negator": {
			type: "[Permission](#Permission)",
			description: "",
			required: true
		},
	}}
/>
</details>

<div id="Functions"></div>

# Functions

<div id="Permission.new"></div>

## Permission.new

Permission implementation

<details>
<summary>Function Signature</summary>

```luau
-- Permission implementation
function Permission.new(namespace: string, perm: string, negator: boolean) -> Permission end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="namespace"></div>

### namespace

[string](#string)

<div id="perm"></div>

### perm

[string](#string)

<div id="negator"></div>

### negator

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Permission](#Permission)<div id="Permission.from_string"></div>

## Permission.from_string

<details>
<summary>Function Signature</summary>

```luau
function Permission.from_string(perm_str) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="perm_str"></div>

### perm_str

No type specified!!!

<div id="Permission.from_tab"></div>

## Permission.from_tab

<details>
<summary>Function Signature</summary>

```luau
function Permission.from_tab(perm: Permission) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="perm"></div>

### perm

[Permission](#Permission)

<div id="Permission.__tostring"></div>

## Permission.__tostring

<details>
<summary>Function Signature</summary>

```luau
function Permission.__tostring(self: Permission) end
```

</details>

<div id="PartialStaffPosition.new"></div>

## PartialStaffPosition.new

PartialStaffPosition implementation

<details>
<summary>Function Signature</summary>

```luau
-- PartialStaffPosition implementation
function PartialStaffPosition.new(id: string, index: number, perms: {Permission}) -> PartialStaffPosition end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="id"></div>

### id

[string](#string)

<div id="index"></div>

### index

[number](#number)

<div id="perms"></div>

### perms

\{[Permission](#Permission)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[PartialStaffPosition](#PartialStaffPosition)<div id="StaffPermissions.new"></div>

## StaffPermissions.new

StaffPermissions implementation

<details>
<summary>Function Signature</summary>

```luau
-- StaffPermissions implementation
function StaffPermissions.new(user_positions: {PartialStaffPosition}, perm_overrides: {Permission}) -> StaffPermissions end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="user_positions"></div>

### user_positions

\{[PartialStaffPosition](#PartialStaffPosition)\}

<div id="perm_overrides"></div>

### perm_overrides

\{[Permission](#Permission)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[StaffPermissions](#StaffPermissions)<div id="OrderedStrNumTable.new"></div>

## OrderedStrNumTable.new

<details>
<summary>Function Signature</summary>

```luau
function OrderedStrNumTable.new() end
```

</details>

<div id="OrderedStrNumTable.get"></div>

## OrderedStrNumTable.get

<details>
<summary>Function Signature</summary>

```luau
function OrderedStrNumTable.get(self: OrderedStrNumTable, key: string) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="key"></div>

### key

[string](#string)

<div id="OrderedStrNumTable.insert"></div>

## OrderedStrNumTable.insert

<details>
<summary>Function Signature</summary>

```luau
function OrderedStrNumTable.insert(self: OrderedStrNumTable, key: string, value: number) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="key"></div>

### key

[string](#string)

<div id="value"></div>

### value

[number](#number)

<div id="OrderedStrNumTable.remove"></div>

## OrderedStrNumTable.remove

<details>
<summary>Function Signature</summary>

```luau
function OrderedStrNumTable.remove(self: OrderedStrNumTable, key: string) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="key"></div>

### key

[string](#string)

<div id="OrderedStrNumTable.iterByInsertionOrder"></div>

## OrderedStrNumTable.iterByInsertionOrder

<details>
<summary>Function Signature</summary>

```luau
function OrderedStrNumTable.iterByInsertionOrder(self: OrderedStrNumTable) end
```

</details>

<div id="OrderedStrNumTable.clear"></div>

## OrderedStrNumTable.clear

<details>
<summary>Function Signature</summary>

```luau
function OrderedStrNumTable.clear(self: OrderedStrNumTable) end
```

</details>

<div id="StaffPermissions.resolve"></div>

## StaffPermissions.resolve

<details>
<summary>Function Signature</summary>

```luau
function StaffPermissions.resolve(self: StaffPermissions) end
```

</details>

<div id="has_perm"></div>

## has_perm

Helper functions

<details>
<summary>Function Signature</summary>

```luau
-- Helper functions
function has_perm(perms: {Permission}, perm: Permission) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="perms"></div>

### perms

\{[Permission](#Permission)\}

<div id="perm"></div>

### perm

[Permission](#Permission)

<div id="has_perm_str"></div>

## has_perm_str

<details>
<summary>Function Signature</summary>

```luau
function has_perm_str(perms: {string}, perm_str: string) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="perms"></div>

### perms

\{[string](#string)\}

<div id="perm_str"></div>

### perm_str

[string](#string)

<div id="cpce_to_string"></div>

## cpce_to_string

<details>
<summary>Function Signature</summary>

```luau
function cpce_to_string(err: CheckPatchChangesError?) -> string end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="err"></div>

### err

*This field is optional and may not be specified*

[CheckPatchChangesError](#CheckPatchChangesError)?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[string](#string)<div id="check_patch_changes"></div>

## check_patch_changes

<details>
<summary>Function Signature</summary>

```luau
function check_patch_changes(manager_perms: {Permission}, current_perms: {Permission}, new_perms: {Permission}) -> (boolean, CheckPatchChangesError?) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="manager_perms"></div>

### manager_perms

\{[Permission](#Permission)\}

<div id="current_perms"></div>

### current_perms

\{[Permission](#Permission)\}

<div id="new_perms"></div>

### new_perms

\{[Permission](#Permission)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[boolean](#boolean)

<div id="ret2"></div>

### ret2

*This field is optional and may not be specified*

[CheckPatchChangesError](#CheckPatchChangesError)?

<div id="check_patch_changes_str"></div>

## check_patch_changes_str

<details>
<summary>Function Signature</summary>

```luau
function check_patch_changes_str(manager_perms: {string}, current_perms: {string}, new_perms: {string}) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="manager_perms"></div>

### manager_perms

\{[string](#string)\}

<div id="current_perms"></div>

### current_perms

\{[string](#string)\}

<div id="new_perms"></div>

### new_perms

\{[string](#string)\}

<div id="test"></div>

## test

Test

<details>
<summary>Function Signature</summary>

```luau
-- Test
function test() end
```

</details>

