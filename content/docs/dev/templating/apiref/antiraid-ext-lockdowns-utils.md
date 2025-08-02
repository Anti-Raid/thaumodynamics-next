---
title: "@antiraid-ext/lockdowns/utils"
description: "API reference for @antiraid-ext/lockdowns/utils"
---

<div id="@antiraid-ext/lockdowns/utils"></div>

# @antiraid-ext/lockdowns/utils

<div id="Functions"></div>

# Functions

<div id="getCriticalRoles"></div>

## getCriticalRoles

Returns the critical roles for a guild



The \`\`set_member_roles\`\` here are the pre-defined roles set by the server that should be locked down

If \`\`set_member_roles\`\` is empty (no overrides), the @everyone role is returned

<details>
<summary>Function Signature</summary>

```luau
--- Returns the critical roles for a guild
---
--- The \`\`set_member_roles\`\` here are the pre-defined roles set by the server that should be locked down
--- If \`\`set_member_roles\`\` is empty (no overrides), the @everyone role is returned
function getCriticalRoles(guild: discord.GuildObject, set_member_roles: {discord.Snowflake}) -> set.Set<discord.Snowflake> end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="guild"></div>

### guild

[discord](#module.discord).[GuildObject](#GuildObject)



<div id="set_member_roles"></div>

### set_member_roles

\{[discord](#module.discord).[Snowflake](#Snowflake)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[set](#module.set).[Set](#Set)&lt;[discord](#module.discord).[Snowflake](#Snowflake)&gt;<div id="mergelsd"></div>

## mergelsd

Merges a set of lockdown sharable data's assuming that least recent lockdowns are first

<details>
<summary>Function Signature</summary>

```luau
--- Merges a set of lockdown sharable data's assuming that least recent lockdowns are first
function mergelsd(lsd: {handle.LockdownSharableData}) -> handle.LockdownSharableData end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="lsd"></div>

### lsd

\{[handle](#module.handle).[LockdownSharableData](#LockdownSharableData)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[handle](#module.handle).[LockdownSharableData](#LockdownSharableData)<div id="getunderlying"></div>

## getunderlying

Returns the underlying permissions (or otherwise) for a given state



This works by merging the shareable data from all lockdowns in the order of least recent first,

to ensure that the permissions are derived from the least recent lockdowns first and then using

\`f\` to extract the desired data from the merged sharable data

<details>
<summary>Function Signature</summary>

```luau
--- Returns the underlying permissions (or otherwise) for a given state
---
--- This works by merging the shareable data from all lockdowns in the order of least recent first,
--- to ensure that the permissions are derived from the least recent lockdowns first and then using
--- \`f\` to extract the desired data from the merged sharable data
function getunderlying<T, U>(lockdowns: {mode.Lockdown}, state: T, f: (handle.LockdownSharableData, T) -> U?) -> U? end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="U"></div>

### U

This generic is unconstrained and can be any type

<div id="Arguments"></div>

## Arguments

<div id="lockdowns"></div>

### lockdowns

\{[mode](#module.mode).[Lockdown](#Lockdown)\}

<div id="state"></div>

### state

[T](#T)

<div id="f"></div>

### f

<details>
<summary>Function Signature</summary>

```luau
f: (handle.LockdownSharableData, T) -> U?
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="arg1"></div>

#### arg1

[handle](#module.handle).[LockdownSharableData](#LockdownSharableData)



<div id="arg2"></div>

#### arg2

[T](#T)

<div id="Returns"></div>

### Returns

<div id="ret1"></div>

#### ret1

[U](#U)?<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[U](#U)?<div id="getunderlyingrolepermissions"></div>

## getunderlyingrolepermissions

Returns the underlying role permissions if any

<details>
<summary>Function Signature</summary>

```luau
--- Returns the underlying role permissions if any
function getunderlyingrolepermissions(lockdowns: {mode.Lockdown}, role_id: discord.Snowflake) -> string? end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="lockdowns"></div>

### lockdowns

\{[mode](#module.mode).[Lockdown](#Lockdown)\}

<div id="role_id"></div>

### role_id

[discord](#module.discord).[Snowflake](#Snowflake)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[string](#string)?<div id="getunderlyingchannelpermissions"></div>

## getunderlyingchannelpermissions

Returns the underlying channel permission overwrites if any

<details>
<summary>Function Signature</summary>

```luau
--- Returns the underlying channel permission overwrites if any
function getunderlyingchannelpermissions(lockdowns: {mode.Lockdown}, channel_id: discord.Snowflake) -> {discord.OverwriteObject}? end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="lockdowns"></div>

### lockdowns

\{[mode](#module.mode).[Lockdown](#Lockdown)\}

<div id="channel_id"></div>

### channel_id

[discord](#module.discord).[Snowflake](#Snowflake)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

\{[discord](#module.discord).[OverwriteObject](#OverwriteObject)\}?<div id="replacerole"></div>

## replacerole

Replaces a role in the guild roles list

<details>
<summary>Function Signature</summary>

```luau
--- Replaces a role in the guild roles list
function replacerole(data: mode.BaseLockdownModeData, role: discord.GuildRoleObject, hint_idx: number?) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="data"></div>

### data

[mode](#module.mode).[BaseLockdownModeData](#BaseLockdownModeData)



<div id="role"></div>

### role

[discord](#module.discord).[GuildRoleObject](#GuildRoleObject)



<div id="hint_idx"></div>

### hint_idx

*This field is optional and may not be specified*

[number](#number)?

<div id="replacechannel"></div>

## replacechannel

Replaces a channel in the guild channel list

<details>
<summary>Function Signature</summary>

```luau
--- Replaces a channel in the guild channel list
function replacechannel(data: mode.BaseLockdownModeData, channel: discord.ChannelObject, hint_idx: number?) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="data"></div>

### data

[mode](#module.mode).[BaseLockdownModeData](#BaseLockdownModeData)



<div id="channel"></div>

### channel

[discord](#module.discord).[ChannelObject](#ChannelObject)



<div id="hint_idx"></div>

### hint_idx

*This field is optional and may not be specified*

[number](#number)?

