---
title: "@antiraid-ext/events/discord/IntegrationDelete"
description: "API reference for @antiraid-ext/events/discord/IntegrationDelete"
---

<div id="@antiraid-ext/events/discord/IntegrationDelete"></div>

# @antiraid-ext/events/discord/IntegrationDelete

<div id="Functions"></div>

# Functions

<div id="onIntegrationDelete"></div>

## onIntegrationDelete

IntegrationDelete



Dispatched when an integration is deleted in a guild.

<details>
<summary>Function Signature</summary>

```luau
--- IntegrationDelete
---
--- Dispatched when an integration is deleted in a guild.
function onIntegrationDelete(event: Primitives.Event, callback: (payload: discordgateway.IntegrationDeletePayload) -> ()) end
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
callback: (payload: discordgateway.IntegrationDeletePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="payload"></div>

#### payload

[discordgateway](#module.discordgateway).[IntegrationDeletePayload](#IntegrationDeletePayload)



