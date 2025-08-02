---
title: "@antiraid-ext/events/discord/GuildScheduledEventUserAdd"
description: "API reference for @antiraid-ext/events/discord/GuildScheduledEventUserAdd"
---

<div id="@antiraid-ext/events/discord/GuildScheduledEventUserAdd"></div>

# @antiraid-ext/events/discord/GuildScheduledEventUserAdd

<div id="Functions"></div>

# Functions

<div id="onGuildScheduledEventUserAdd"></div>

## onGuildScheduledEventUserAdd

GuildScheduledEventUserAdd



Dispatched when a user is added to a scheduled event in a guild.

<details>
<summary>Function Signature</summary>

```luau
--- GuildScheduledEventUserAdd
---
--- Dispatched when a user is added to a scheduled event in a guild.
function onGuildScheduledEventUserAdd(event: Primitives.Event, callback: (subscribed: discordGateway.GuildScheduledEventUserAddPayload) -> ()) end
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
callback: (subscribed: discordGateway.GuildScheduledEventUserAddPayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="subscribed"></div>

#### subscribed

[discordGateway](#module.discordGateway).[GuildScheduledEventUserAddPayload](#GuildScheduledEventUserAddPayload)



