---
title: "@antiraid-ext/events/discord/ThreadCreate"
description: "API reference for @antiraid-ext/events/discord/ThreadCreate"
---

<div id="@antiraid-ext/events/discord/ThreadCreate"></div>

# @antiraid-ext/events/discord/ThreadCreate

<div id="Functions"></div>

# Functions

<div id="onThreadCreate"></div>

## onThreadCreate

ThreadCreate



Dispatched when a thread is created or the current user is added to a private thread.

<details>
<summary>Function Signature</summary>

```luau
--- ThreadCreate
---
--- Dispatched when a thread is created or the current user is added to a private thread.
function onThreadCreate(event: Primitives.Event, callback: (event: discordGateway.CreateThreadPayload) -> ()) end
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
callback: (event: discordGateway.CreateThreadPayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="event"></div>

#### event

[discordGateway](#module.discordGateway).[CreateThreadPayload](#CreateThreadPayload)



