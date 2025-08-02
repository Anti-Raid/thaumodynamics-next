---
title: "@antiraid-ext/events/discord/GuildScheduledEventUpdate"
description: "API reference for @antiraid-ext/events/discord/GuildScheduledEventUpdate"
---

<div id="@antiraid-ext/events/discord/GuildScheduledEventUpdate"></div>

# @antiraid-ext/events/discord/GuildScheduledEventUpdate

<div id="Functions"></div>

# Functions

<div id="onGuildScheduledEventUpdate"></div>

## onGuildScheduledEventUpdate

GuildScheduledEventUpdate



Dispatched when a scheduled event is updated in a guild.

<details>
<summary>Function Signature</summary>

```luau
--- GuildScheduledEventUpdate
---
--- Dispatched when a scheduled event is updated in a guild.
function onGuildScheduledEventUpdate(event: Primitives.Event, callback: (event: discord.GuildScheduledEventObject) -> ()) end
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
callback: (event: discord.GuildScheduledEventObject) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="event"></div>

#### event

[discord](#module.discord).[GuildScheduledEventObject](#GuildScheduledEventObject)



