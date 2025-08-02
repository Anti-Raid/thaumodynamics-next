---
title: "@antiraid-ext/utils/discordpermcalc"
description: "API reference for @antiraid-ext/utils/discordpermcalc"
---

<div id="@antiraid-ext/utils/discordpermcalc"></div>

# @antiraid-ext/utils/discordpermcalc

<div id="Functions"></div>

# Functions

<div id="BasePermissions"></div>

## BasePermissions

Computes the 'base permissions' of a member



As this uses a different algorithm from the Rust layer, the permissions returned may be different if there are bugs

<details>
<summary>Function Signature</summary>

```luau
--- Computes the 'base permissions' of a member
--- @param g The guild object
--- @param m The member object
--- @return number The base permissions of the member
---
--- As this uses a different algorithm from the Rust layer, the permissions returned may be different if there are bugs
function BasePermissions(g: apitypes.GuildObject, m: apitypes.GuildMemberObject) -> typesext.U64 end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="g"></div>

### g

The guild object

[apitypes](#module.apitypes).[GuildObject](#GuildObject)



<div id="m"></div>

### m

The member object

[apitypes](#module.apitypes).[GuildMemberObject](#GuildMemberObject)



<div id="Returns"></div>

## Returns

<div id="number"></div>

### number

The base permissions of the member

[typesext](#module.typesext).[U64](#U64)<div id="ComputeMemberChannelOverwrites"></div>

## ComputeMemberChannelOverwrites

Computes the permissions of a member in a channel

<details>
<summary>Function Signature</summary>

```luau
--- Computes the permissions of a member in a channel
--- @param basePerms The base permissions of the member
--- @param g The guild object
--- @param m The member object
--- @param c The channel object
--- @return typesext.U64 The permissions of the member in the channel
function ComputeMemberChannelOverwrites(basePerms: typesext.U64, g: apitypes.GuildObject, m: apitypes.GuildMemberObject, c: apitypes.ChannelObject) -> typesext.U64 end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="basePerms"></div>

### basePerms

The base permissions of the member

[typesext](#module.typesext).[U64](#U64)



<div id="g"></div>

### g

The guild object

[apitypes](#module.apitypes).[GuildObject](#GuildObject)



<div id="m"></div>

### m

The member object

[apitypes](#module.apitypes).[GuildMemberObject](#GuildMemberObject)



<div id="c"></div>

### c

The channel object

[apitypes](#module.apitypes).[ChannelObject](#ChannelObject)



<div id="Returns"></div>

## Returns

<div id="typesext.U64"></div>

### typesext.U64

The permissions of the member in the channel

[typesext](#module.typesext).[U64](#U64)<div id="MemberChannelPerms"></div>

## MemberChannelPerms

<details>
<summary>Function Signature</summary>

```luau
function MemberChannelPerms(g: apitypes.GuildObject, m: apitypes.GuildMemberObject, c: apitypes.ChannelObject) -> typesext.U64 end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="g"></div>

### g

[apitypes](#module.apitypes).[GuildObject](#GuildObject)



<div id="m"></div>

### m

[apitypes](#module.apitypes).[GuildMemberObject](#GuildMemberObject)



<div id="c"></div>

### c

[apitypes](#module.apitypes).[ChannelObject](#ChannelObject)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[typesext](#module.typesext).[U64](#U64)<div id="HasPermission"></div>

## HasPermission

Check if a permission u64 has a permission

<details>
<summary>Function Signature</summary>

```luau
--- Check if a permission u64 has a permission
--- @param perms typesext.U64 The permission u64 to check
--- @param perm typesext.U64Convertibles The permission to check for
--- @return boolean True if the permission is present, false otherwise
function HasPermission(perms: typesext.U64, perm: typesext.U64Convertibles) -> boolean end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="perms"></div>

### perms

typesext.U64 The permission u64 to check

[typesext](#module.typesext).[U64](#U64)



<div id="perm"></div>

### perm

typesext.U64Convertibles The permission to check for

[typesext](#module.typesext).[U64Convertibles](#U64Convertibles)



<div id="Returns"></div>

## Returns

<div id="boolean"></div>

### boolean

True if the permission is present, false otherwise

[boolean](#boolean)<div id="HasAllPermissions"></div>

## HasAllPermissions

Check if a permission u64 has all permissions in a set

<details>
<summary>Function Signature</summary>

```luau
--- Check if a permission u64 has all permissions in a set
--- @param perms typesext.U64 The permission u64 to check
--- @param permSet set.Set<typesext.U64Convertibles> The set of permissions to check for
--- @return boolean True if all permissions are present, false otherwise
function HasAllPermissions(perms: typesext.U64, permSet: set.Set<typesext.U64Convertibles>) -> boolean end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="perms"></div>

### perms

typesext.U64 The permission u64 to check

[typesext](#module.typesext).[U64](#U64)



<div id="permSet"></div>

### permSet

set.Set&lt;typesext.U64Convertibles&gt; The set of permissions to check for

[set](#module.set).[Set](#Set)&lt;[typesext](#module.typesext).[U64Convertibles](#U64Convertibles)&gt;



<div id="Returns"></div>

## Returns

<div id="boolean"></div>

### boolean

True if all permissions are present, false otherwise

[boolean](#boolean)