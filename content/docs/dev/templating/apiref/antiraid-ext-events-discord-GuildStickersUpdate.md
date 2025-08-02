---
title: "@antiraid-ext/events/discord/GuildStickersUpdate"
description: "API reference for @antiraid-ext/events/discord/GuildStickersUpdate"
---

<div id="@antiraid-ext/events/discord/GuildStickersUpdate"></div>

# @antiraid-ext/events/discord/GuildStickersUpdate

<div id="Functions"></div>

# Functions

<div id="onGuildStickersUpdate"></div>

## onGuildStickersUpdate

GuildStickersUpdate



Dispatched when the stickers in a guild are updated.

<details>
<summary>Function Signature</summary>

```luau
--- GuildStickersUpdate
---
--- Dispatched when the stickers in a guild are updated.
function onGuildStickersUpdate(event: Primitives.Event, callback: (payload: discordgateway.GuildStickersUpdatePayload) -> ()) end
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
callback: (payload: discordgateway.GuildStickersUpdatePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="payload"></div>

#### payload

[discordgateway](#module.discordgateway).[GuildStickersUpdatePayload](#GuildStickersUpdatePayload)



