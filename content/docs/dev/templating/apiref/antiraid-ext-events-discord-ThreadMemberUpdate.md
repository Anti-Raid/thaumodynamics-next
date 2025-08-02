---
title: "@antiraid-ext/events/discord/ThreadMemberUpdate"
description: "API reference for @antiraid-ext/events/discord/ThreadMemberUpdate"
---

<div id="@antiraid-ext/events/discord/ThreadMemberUpdate"></div>

# @antiraid-ext/events/discord/ThreadMemberUpdate

<div id="Functions"></div>

# Functions

<div id="onThreadMemberUpdate"></div>

## onThreadMemberUpdate

ThreadMemberUpdate



Dispatched when a thread member is updated.

<details>
<summary>Function Signature</summary>

```luau
--- ThreadMemberUpdate
---
--- Dispatched when a thread member is updated.
function onThreadMemberUpdate(event: Primitives.Event, callback: (event: discordGateway.ThreadMemberUpdatePayload) -> ()) end
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
callback: (event: discordGateway.ThreadMemberUpdatePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="event"></div>

#### event

[discordGateway](#module.discordGateway).[ThreadMemberUpdatePayload](#ThreadMemberUpdatePayload)



