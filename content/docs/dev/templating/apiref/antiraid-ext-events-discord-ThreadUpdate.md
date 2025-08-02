---
title: "@antiraid-ext/events/discord/ThreadUpdate"
description: "API reference for @antiraid-ext/events/discord/ThreadUpdate"
---

<div id="@antiraid-ext/events/discord/ThreadUpdate"></div>

# @antiraid-ext/events/discord/ThreadUpdate

<div id="Functions"></div>

# Functions

<div id="onThreadUpdate"></div>

## onThreadUpdate

ThreadUpdate



Dispatched when a thread is updated.

<details>
<summary>Function Signature</summary>

```luau
--- ThreadUpdate
---
--- Dispatched when a thread is updated.
function onThreadUpdate(event: Primitives.Event, callback: (event: discordGateway.UpdateThreadPayload) -> ()) end
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
callback: (event: discordGateway.UpdateThreadPayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="event"></div>

#### event

[discordGateway](#module.discordGateway).[UpdateThreadPayload](#UpdateThreadPayload)



