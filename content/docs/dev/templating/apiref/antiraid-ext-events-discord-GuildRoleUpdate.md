---
title: "@antiraid-ext/events/discord/GuildRoleUpdate"
description: "API reference for @antiraid-ext/events/discord/GuildRoleUpdate"
---

<div id="@antiraid-ext/events/discord/GuildRoleUpdate"></div>

# @antiraid-ext/events/discord/GuildRoleUpdate

<div id="Functions"></div>

# Functions

<div id="onGuildRoleUpdate"></div>

## onGuildRoleUpdate

GuildRoleUpdate



Dispatched when a role is updated in a guild.

<details>
<summary>Function Signature</summary>

```luau
--- GuildRoleUpdate
---
--- Dispatched when a role is updated in a guild.
function onGuildRoleUpdate(event: Primitives.Event, callback: (payload: discordgateway.GuildRoleUpdatePayload) -> ()) end
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
callback: (payload: discordgateway.GuildRoleUpdatePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="payload"></div>

#### payload

[discordgateway](#module.discordgateway).[GuildRoleUpdatePayload](#GuildRoleUpdatePayload)



