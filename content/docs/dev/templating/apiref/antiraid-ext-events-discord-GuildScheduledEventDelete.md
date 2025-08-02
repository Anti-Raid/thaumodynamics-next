---
title: "@antiraid-ext/events/discord/GuildScheduledEventDelete"
description: "API reference for @antiraid-ext/events/discord/GuildScheduledEventDelete"
---

<div id="@antiraid-ext/events/discord/GuildScheduledEventDelete"></div>

# @antiraid-ext/events/discord/GuildScheduledEventDelete

<div id="Functions"></div>

# Functions

<div id="onGuildScheduledEventDelete"></div>

## onGuildScheduledEventDelete

GuildScheduledEventDelete



Dispatched when a scheduled event is deleted in a guild.

<details>
<summary>Function Signature</summary>

```luau
--- GuildScheduledEventDelete
---
--- Dispatched when a scheduled event is deleted in a guild.
function onGuildScheduledEventDelete(event: Primitives.Event, callback: (event: discord.GuildScheduledEventObject) -> ()) end
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



