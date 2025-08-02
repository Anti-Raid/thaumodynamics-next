---
title: "@antiraid-ext/events/discord/GuildIntegrationsUpdate"
description: "API reference for @antiraid-ext/events/discord/GuildIntegrationsUpdate"
---

<div id="@antiraid-ext/events/discord/GuildIntegrationsUpdate"></div>

# @antiraid-ext/events/discord/GuildIntegrationsUpdate

<div id="Functions"></div>

# Functions

<div id="onGuildIntegrationsUpdate"></div>

## onGuildIntegrationsUpdate

GuildIntegrationsUpdate



Dispatched when a guild’s integration is added, updated or removed.

<details>
<summary>Function Signature</summary>

```luau
--- GuildIntegrationsUpdate
---
--- Dispatched when a guild’s integration is added, updated or removed.
function onGuildIntegrationsUpdate(event: Primitives.Event, callback: (payload: discordgateway.GuildIntegrationsUpdatePayload) -> ()) end
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
callback: (payload: discordgateway.GuildIntegrationsUpdatePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="payload"></div>

#### payload

[discordgateway](#module.discordgateway).[GuildIntegrationsUpdatePayload](#GuildIntegrationsUpdatePayload)



