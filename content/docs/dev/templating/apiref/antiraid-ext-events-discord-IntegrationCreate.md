---
title: "@antiraid-ext/events/discord/IntegrationCreate"
description: "API reference for @antiraid-ext/events/discord/IntegrationCreate"
---

<div id="@antiraid-ext/events/discord/IntegrationCreate"></div>

# @antiraid-ext/events/discord/IntegrationCreate

<div id="Functions"></div>

# Functions

<div id="onIntegrationCreate"></div>

## onIntegrationCreate

IntegrationCreate



Dispatched when an integration is created in a guild.

<details>
<summary>Function Signature</summary>

```luau
--- IntegrationCreate
---
--- Dispatched when an integration is created in a guild.
function onIntegrationCreate(event: Primitives.Event, callback: (integration: discordgateway.IntegrationCreatePayload) -> ()) end
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
callback: (integration: discordgateway.IntegrationCreatePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="integration"></div>

#### integration

[discordgateway](#module.discordgateway).[IntegrationCreatePayload](#IntegrationCreatePayload)



