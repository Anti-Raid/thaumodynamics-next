---
title: "@antiraid-ext/events/discord/TypingStart"
description: "API reference for @antiraid-ext/events/discord/TypingStart"
---

<div id="@antiraid-ext/events/discord/TypingStart"></div>

# @antiraid-ext/events/discord/TypingStart

<div id="Functions"></div>

# Functions

<div id="onTypingStart"></div>

## onTypingStart

TypingStart



Dispatched when a user starts typing in a channel.

<details>
<summary>Function Signature</summary>

```luau
--- TypingStart
---
--- Dispatched when a user starts typing in a channel.
function onTypingStart(event: Primitives.Event, callback: (data: discordGateway.TypingStartPayload) -> ()) end
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
callback: (data: discordGateway.TypingStartPayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="data"></div>

#### data

[discordGateway](#module.discordGateway).[TypingStartPayload](#TypingStartPayload)



