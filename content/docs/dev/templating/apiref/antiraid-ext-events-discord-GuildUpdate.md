---
title: "@antiraid-ext/events/discord/GuildUpdate"
description: "API reference for @antiraid-ext/events/discord/GuildUpdate"
---

<div id="@antiraid-ext/events/discord/GuildUpdate"></div>

# @antiraid-ext/events/discord/GuildUpdate

<div id="Functions"></div>

# Functions

<div id="onGuildUpdate"></div>

## onGuildUpdate

GuildUpdate



Dispatched when the guild is updated.



Note that the new data may be partial

<details>
<summary>Function Signature</summary>

```luau
--- GuildUpdate
---
--- Dispatched when the guild is updated.
---
--- Note that the new data may be partial
function onGuildUpdate(event: Primitives.Event, callback: (new: discord.GuildObject) -> ()) end
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
callback: (new: discord.GuildObject) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="new"></div>

#### new

[discord](#module.discord).[GuildObject](#GuildObject)



