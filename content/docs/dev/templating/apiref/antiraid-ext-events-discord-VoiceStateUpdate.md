---
title: "@antiraid-ext/events/discord/VoiceStateUpdate"
description: "API reference for @antiraid-ext/events/discord/VoiceStateUpdate"
---

<div id="@antiraid-ext/events/discord/VoiceStateUpdate"></div>

# @antiraid-ext/events/discord/VoiceStateUpdate

<div id="Functions"></div>

# Functions

<div id="onVoiceStateUpdate"></div>

## onVoiceStateUpdate

VoiceStateUpdate



Dispatched when a user joins, leaves or moves to a voice channel.

<details>
<summary>Function Signature</summary>

```luau
--- VoiceStateUpdate
---
--- Dispatched when a user joins, leaves or moves to a voice channel.
function onVoiceStateUpdate(event: Primitives.Event, callback: (new: discord.VoiceStateObject) -> ()) end
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
callback: (new: discord.VoiceStateObject) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="new"></div>

#### new

[discord](#module.discord).[VoiceStateObject](#VoiceStateObject)



