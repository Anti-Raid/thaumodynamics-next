---
title: "@antiraid-ext/events/discord/ThreadDelete"
description: "API reference for @antiraid-ext/events/discord/ThreadDelete"
---

<div id="@antiraid-ext/events/discord/ThreadDelete"></div>

# @antiraid-ext/events/discord/ThreadDelete

<div id="Functions"></div>

# Functions

<div id="onThreadDelete"></div>

## onThreadDelete

ThreadDelete



Dispatched when a thread is deleted.



Provides the partial data about the deleted thread and, if it was present in the cache before its deletion, its full data.

<details>
<summary>Function Signature</summary>

```luau
--- ThreadDelete
---
--- Dispatched when a thread is deleted.
---
--- Provides the partial data about the deleted thread and, if it was present in the cache before its deletion, its full data.
function onThreadDelete(event: Primitives.Event, callback: (event: discordGateway.DeleteThreadPayload) -> ()) end
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
callback: (event: discordGateway.DeleteThreadPayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="event"></div>

#### event

[discordGateway](#module.discordGateway).[DeleteThreadPayload](#DeleteThreadPayload)



