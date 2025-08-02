---
title: "@antiraid-ext/events/discord/GuildScheduledEventUserRemove"
description: "API reference for @antiraid-ext/events/discord/GuildScheduledEventUserRemove"
---

<div id="@antiraid-ext/events/discord/GuildScheduledEventUserRemove"></div>

# @antiraid-ext/events/discord/GuildScheduledEventUserRemove

<div id="Functions"></div>

# Functions

<div id="onGuildScheduledEventUserRemove"></div>

## onGuildScheduledEventUserRemove

GuildScheduledEventUserRemove



Dispatched when a user is removed from a scheduled event in a guild.

<details>
<summary>Function Signature</summary>

```luau
--- GuildScheduledEventUserRemove
---
--- Dispatched when a user is removed from a scheduled event in a guild.
function onGuildScheduledEventUserRemove(event: Primitives.Event, callback: (unsubscribed: discordGateway.GuildScheduledEventUserRemovePayload) -> ()) end
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
callback: (unsubscribed: discordGateway.GuildScheduledEventUserRemovePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="unsubscribed"></div>

#### unsubscribed

[discordGateway](#module.discordGateway).[GuildScheduledEventUserRemovePayload](#GuildScheduledEventUserRemovePayload)



