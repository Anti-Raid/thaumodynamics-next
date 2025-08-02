---
title: "@antiraid-ext/events/discord/GuildEmojisUpdate"
description: "API reference for @antiraid-ext/events/discord/GuildEmojisUpdate"
---

<div id="@antiraid-ext/events/discord/GuildEmojisUpdate"></div>

# @antiraid-ext/events/discord/GuildEmojisUpdate

<div id="Functions"></div>

# Functions

<div id="onGuildEmojisUpdate"></div>

## onGuildEmojisUpdate

GuildEmojisUpdate



Dispatched when the emojis in a guild are updated.



Provides the guild’s id and the new state of the emojis in the guild.

<details>
<summary>Function Signature</summary>

```luau
--- GuildEmojisUpdate
---
--- Dispatched when the emojis in a guild are updated.
---
--- Provides the guild’s id and the new state of the emojis in the guild.
function onGuildEmojisUpdate(event: Primitives.Event, callback: (payload: discordgateway.GuildEmojisUpdatePayload) -> ()) end
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
callback: (payload: discordgateway.GuildEmojisUpdatePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="payload"></div>

#### payload

[discordgateway](#module.discordgateway).[GuildEmojisUpdatePayload](#GuildEmojisUpdatePayload)



