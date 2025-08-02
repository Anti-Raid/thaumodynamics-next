---
title: "@antiraid-ext/events/discord/GuildScheduledEventCreate"
description: "API reference for @antiraid-ext/events/discord/GuildScheduledEventCreate"
---

<div id="@antiraid-ext/events/discord/GuildScheduledEventCreate"></div>

# @antiraid-ext/events/discord/GuildScheduledEventCreate

<div id="Functions"></div>

# Functions

<div id="onGuildScheduledEventCreate"></div>

## onGuildScheduledEventCreate

GuildScheduledEventCreate



Dispatched when a scheduled event is created in a guild.

<details>
<summary>Function Signature</summary>

```luau
--- GuildScheduledEventCreate
---
--- Dispatched when a scheduled event is created in a guild.
function onGuildScheduledEventCreate(event: Primitives.Event, callback: (event: discord.GuildScheduledEventObject) -> ()) end
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



