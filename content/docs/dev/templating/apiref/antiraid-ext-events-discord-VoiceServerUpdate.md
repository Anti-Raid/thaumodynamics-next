---
title: "@antiraid-ext/events/discord/VoiceServerUpdate"
description: "API reference for @antiraid-ext/events/discord/VoiceServerUpdate"
---

<div id="@antiraid-ext/events/discord/VoiceServerUpdate"></div>

# @antiraid-ext/events/discord/VoiceServerUpdate

<div id="Functions"></div>

# Functions

<div id="onVoiceServerUpdate"></div>

## onVoiceServerUpdate

VoiceServerUpdate



Dispatched when a guild’s voice server was updated (or changed to another one).



Note that you usually won't get this event from AntiRaid unless you're self-hosting or unusual circumstances.

<details>
<summary>Function Signature</summary>

```luau
--- VoiceServerUpdate
---
--- Dispatched when a guild’s voice server was updated (or changed to another one).
---
--- Note that you usually won't get this event from AntiRaid unless you're self-hosting or unusual circumstances.
function onVoiceServerUpdate(event: Primitives.Event, callback: (data: discordGateway.VoiceServerUpdatePayload) -> ()) end
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
callback: (data: discordGateway.VoiceServerUpdatePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="data"></div>

#### data

[discordGateway](#module.discordGateway).[VoiceServerUpdatePayload](#VoiceServerUpdatePayload)



