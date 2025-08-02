---
title: "@antiraid-ext/events/discord/GuildBanAddition"
description: "API reference for @antiraid-ext/events/discord/GuildBanAddition"
---

<div id="@antiraid-ext/events/discord/GuildBanAddition"></div>

# @antiraid-ext/events/discord/GuildBanAddition

<div id="Functions"></div>

# Functions

<div id="onGuildBanAddition"></div>

## onGuildBanAddition

GuildBanAddition



Dispatched when a user is banned from a guild.



Provides the user’s data and the id of the guild where the ban occurred.

<details>
<summary>Function Signature</summary>

```luau
--- GuildBanAddition
---
--- Dispatched when a user is banned from a guild.
---
--- Provides the user’s data and the id of the guild where the ban occurred.
function onGuildBanAddition(event: Primitives.Event, callback: (data: discordGateway.GuildBanAddPayload) -> ()) end
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
callback: (data: discordGateway.GuildBanAddPayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="data"></div>

#### data

[discordGateway](#module.discordGateway).[GuildBanAddPayload](#GuildBanAddPayload)



