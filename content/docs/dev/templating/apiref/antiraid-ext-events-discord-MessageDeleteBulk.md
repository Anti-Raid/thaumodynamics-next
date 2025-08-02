---
title: "@antiraid-ext/events/discord/MessageDeleteBulk"
description: "API reference for @antiraid-ext/events/discord/MessageDeleteBulk"
---

<div id="@antiraid-ext/events/discord/MessageDeleteBulk"></div>

# @antiraid-ext/events/discord/MessageDeleteBulk

<div id="Functions"></div>

# Functions

<div id="onMessageDeleteBulk"></div>

## onMessageDeleteBulk

MessageDeleteBulk



Dispatched when multiple messages are deleted at once.

<details>
<summary>Function Signature</summary>

```luau
--- MessageDeleteBulk
---
--- Dispatched when multiple messages are deleted at once.
function onMessageDeleteBulk(event: Primitives.Event, callback: (payload: discordgateway.MessageDeleteBulkPayload) -> ()) end
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
callback: (payload: discordgateway.MessageDeleteBulkPayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="payload"></div>

#### payload

[discordgateway](#module.discordgateway).[MessageDeleteBulkPayload](#MessageDeleteBulkPayload)



