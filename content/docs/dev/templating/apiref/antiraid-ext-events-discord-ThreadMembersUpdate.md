---
title: "@antiraid-ext/events/discord/ThreadMembersUpdate"
description: "API reference for @antiraid-ext/events/discord/ThreadMembersUpdate"
---

<div id="@antiraid-ext/events/discord/ThreadMembersUpdate"></div>

# @antiraid-ext/events/discord/ThreadMembersUpdate

<div id="Functions"></div>

# Functions

<div id="onThreadMembersUpdate"></div>

## onThreadMembersUpdate

ThreadMembersUpdate



Dispatched when anyone is added to or removed from a thread.

<details>
<summary>Function Signature</summary>

```luau
--- ThreadMembersUpdate
---
--- Dispatched when anyone is added to or removed from a thread.
function onThreadMembersUpdate(event: Primitives.Event, callback: (data: discordGateway.ThreadMembersUpdatePayload) -> ()) end
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
callback: (data: discordGateway.ThreadMembersUpdatePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="data"></div>

#### data

[discordGateway](#module.discordGateway).[ThreadMembersUpdatePayload](#ThreadMembersUpdatePayload)



