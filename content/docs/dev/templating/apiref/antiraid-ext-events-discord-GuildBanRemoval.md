---
title: "@antiraid-ext/events/discord/GuildBanRemoval"
description: "API reference for @antiraid-ext/events/discord/GuildBanRemoval"
---

<div id="@antiraid-ext/events/discord/GuildBanRemoval"></div>

# @antiraid-ext/events/discord/GuildBanRemoval

<div id="Functions"></div>

# Functions

<div id="onGuildBanRemoval"></div>

## onGuildBanRemoval

GuildBanRemoval



Dispatched when a user is unbanned from a guild.



Provides the user’s data and the id of the guild where the unban occurred.

<details>
<summary>Function Signature</summary>

```luau
--- GuildBanRemoval
---
--- Dispatched when a user is unbanned from a guild.
---
--- Provides the user’s data and the id of the guild where the unban occurred.
function onGuildBanRemoval(event: Primitives.Event, callback: (user: discordGateway.GuildBanRemovePayload) -> ()) end
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
callback: (user: discordGateway.GuildBanRemovePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="user"></div>

#### user

[discordGateway](#module.discordGateway).[GuildBanRemovePayload](#GuildBanRemovePayload)



