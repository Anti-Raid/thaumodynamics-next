---
title: "@antiraid-ext/events/discord/WebhookUpdate"
description: "API reference for @antiraid-ext/events/discord/WebhookUpdate"
---

<div id="@antiraid-ext/events/discord/WebhookUpdate"></div>

# @antiraid-ext/events/discord/WebhookUpdate

<div id="Functions"></div>

# Functions

<div id="onWebhookUpdate"></div>

## onWebhookUpdate

WebhookUpdate



Dispatched when a channel’s webhook is updated.

<details>
<summary>Function Signature</summary>

```luau
--- WebhookUpdate
---
--- Dispatched when a channel’s webhook is updated.
function onWebhookUpdate(event: Primitives.Event, callback: (payload: discordGateway.WebhooksUpdatePayload) -> ()) end
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
callback: (payload: discordGateway.WebhooksUpdatePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="payload"></div>

#### payload

[discordGateway](#module.discordGateway).[WebhooksUpdatePayload](#WebhooksUpdatePayload)



