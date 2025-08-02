---
title: "@antiraid-ext/events/discord/GuildRoleDelete"
description: "API reference for @antiraid-ext/events/discord/GuildRoleDelete"
---

<div id="@antiraid-ext/events/discord/GuildRoleDelete"></div>

# @antiraid-ext/events/discord/GuildRoleDelete

<div id="Functions"></div>

# Functions

<div id="onGuildRoleDelete"></div>

## onGuildRoleDelete

GuildRoleDelete



Dispatched when a role is deleted in a guild.

<details>
<summary>Function Signature</summary>

```luau
--- GuildRoleDelete
---
--- Dispatched when a role is deleted in a guild.
function onGuildRoleDelete(event: Primitives.Event, callback: (payload: discordgateway.GuildRoleDeletePayload) -> ()) end
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
callback: (payload: discordgateway.GuildRoleDeletePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="payload"></div>

#### payload

[discordgateway](#module.discordgateway).[GuildRoleDeletePayload](#GuildRoleDeletePayload)



