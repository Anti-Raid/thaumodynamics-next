---
title: "@antiraid-ext/events/discord/ThreadListSync"
description: "API reference for @antiraid-ext/events/discord/ThreadListSync"
---

<div id="@antiraid-ext/events/discord/ThreadListSync"></div>

# @antiraid-ext/events/discord/ThreadListSync

<div id="Functions"></div>

# Functions

<div id="onThreadListSync"></div>

## onThreadListSync

ThreadListSync



Dispatched when the current user gains access to a thread.

<details>
<summary>Function Signature</summary>

```luau
--- ThreadListSync
---
--- Dispatched when the current user gains access to a thread.
function onThreadListSync(event: Primitives.Event, callback: (data: discordGateway.ThreadListSyncPayload) -> ()) end
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
callback: (data: discordGateway.ThreadListSyncPayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="data"></div>

#### data

[discordGateway](#module.discordGateway).[ThreadListSyncPayload](#ThreadListSyncPayload)



