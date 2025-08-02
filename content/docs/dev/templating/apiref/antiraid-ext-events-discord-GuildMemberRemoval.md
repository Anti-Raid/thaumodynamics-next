---
title: "@antiraid-ext/events/discord/GuildMemberRemoval"
description: "API reference for @antiraid-ext/events/discord/GuildMemberRemoval"
---

<div id="@antiraid-ext/events/discord/GuildMemberRemoval"></div>

# @antiraid-ext/events/discord/GuildMemberRemoval

<div id="Functions"></div>

# Functions

<div id="onGuildMemberRemoval"></div>

## onGuildMemberRemoval

GuildMemberRemoval



Dispatched when a user’s membership ends by leaving, getting kicked, or being banned.



Provides the guild’s id and the user’s data.

<details>
<summary>Function Signature</summary>

```luau
--- GuildMemberRemoval
---
--- Dispatched when a user’s membership ends by leaving, getting kicked, or being banned.
---
--- Provides the guild’s id and the user’s data.
function onGuildMemberRemoval(event: Primitives.Event, callback: (payload: discordgateway.GuildMemberRemovePayload) -> ()) end
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
callback: (payload: discordgateway.GuildMemberRemovePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="payload"></div>

#### payload

[discordgateway](#module.discordgateway).[GuildMemberRemovePayload](#GuildMemberRemovePayload)



