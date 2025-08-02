---
title: "@antiraid-ext/events/discord/GuildRoleCreate"
description: "API reference for @antiraid-ext/events/discord/GuildRoleCreate"
---

<div id="@antiraid-ext/events/discord/GuildRoleCreate"></div>

# @antiraid-ext/events/discord/GuildRoleCreate

<div id="Functions"></div>

# Functions

<div id="onGuildRoleCreate"></div>

## onGuildRoleCreate

GuildRoleCreate



Dispatched when a role is created in a guild.

<details>
<summary>Function Signature</summary>

```luau
--- GuildRoleCreate
---
--- Dispatched when a role is created in a guild.
function onGuildRoleCreate(event: Primitives.Event, callback: (payload: discordgateway.GuildRoleCreatePayload) -> ()) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="event"></div>

### event

[Primitives](#module.Primitives).[Event](#Event)



<div id="callback"></div>

### callback

<details>
<summary>Function Signature</summary>

```luau
callback: (payload: discordgateway.GuildRoleCreatePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="payload"></div>

#### payload

[discordgateway](#module.discordgateway).[GuildRoleCreatePayload](#GuildRoleCreatePayload)



