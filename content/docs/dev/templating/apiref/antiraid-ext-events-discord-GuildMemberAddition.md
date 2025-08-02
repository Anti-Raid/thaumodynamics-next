---
title: "@antiraid-ext/events/discord/GuildMemberAddition"
description: "API reference for @antiraid-ext/events/discord/GuildMemberAddition"
---

<div id="@antiraid-ext/events/discord/GuildMemberAddition"></div>

# @antiraid-ext/events/discord/GuildMemberAddition

<div id="Functions"></div>

# Functions

<div id="onGuildMemberAddition"></div>

## onGuildMemberAddition

GuildMemberAddition



Dispatched when a user joins a guild.



Provides the guild’s id and the user’s member data.

<details>
<summary>Function Signature</summary>

```luau
--- GuildMemberAddition
---
--- Dispatched when a user joins a guild.
---
--- Provides the guild’s id and the user’s member data.
function onGuildMemberAddition(event: Primitives.Event, callback: (member: discordgateway.GuildMemberAddPayload) -> ()) end
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
callback: (member: discordgateway.GuildMemberAddPayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="member"></div>

#### member

[discordgateway](#module.discordgateway).[GuildMemberAddPayload](#GuildMemberAddPayload)



