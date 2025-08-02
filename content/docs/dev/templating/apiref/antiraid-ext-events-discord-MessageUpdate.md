---
title: "@antiraid-ext/events/discord/MessageUpdate"
description: "API reference for @antiraid-ext/events/discord/MessageUpdate"
---

<div id="@antiraid-ext/events/discord/MessageUpdate"></div>

# @antiraid-ext/events/discord/MessageUpdate

<div id="Functions"></div>

# Functions

<div id="onMessageUpdate"></div>

## onMessageUpdate

MessageUpdate



Provides the message update data, as well as the actual old and new message if data is available.

<details>
<summary>Function Signature</summary>

```luau
--- MessageUpdate
---
--- Provides the message update data, as well as the actual old and new message if data is available.
function onMessageUpdate(event: Primitives.Event, callback: (payload: discordGateway.MessageUpdatePayload) -> ()) end
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
callback: (payload: discordGateway.MessageUpdatePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="payload"></div>

#### payload

[discordGateway](#module.discordGateway).[MessageUpdatePayload](#MessageUpdatePayload)



