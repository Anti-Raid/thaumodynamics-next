---
title: "@antiraid-ext/events/discord/MessageDelete"
description: "API reference for @antiraid-ext/events/discord/MessageDelete"
---

<div id="@antiraid-ext/events/discord/MessageDelete"></div>

# @antiraid-ext/events/discord/MessageDelete

<div id="Functions"></div>

# Functions

<div id="onMessageDelete"></div>

## onMessageDelete

MessageDelete



Dispatched when a message is deleted.

<details>
<summary>Function Signature</summary>

```luau
--- MessageDelete
---
--- Dispatched when a message is deleted.
function onMessageDelete(event: Primitives.Event, callback: (payload: discordgateway.MessageDeletePayload) -> ()) end
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
callback: (payload: discordgateway.MessageDeletePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="payload"></div>

#### payload

[discordgateway](#module.discordgateway).[MessageDeletePayload](#MessageDeletePayload)



