---
title: "@antiraid-ext/events/discord/ChannelPinsUpdate"
description: "API reference for @antiraid-ext/events/discord/ChannelPinsUpdate"
---

<div id="@antiraid-ext/events/discord/ChannelPinsUpdate"></div>

# @antiraid-ext/events/discord/ChannelPinsUpdate

<div id="Functions"></div>

# Functions

<div id="onChannelPinsUpdate"></div>

## onChannelPinsUpdate

ChannelPinsUpdate

<details>
<summary>Function Signature</summary>

```luau
--- ChannelPinsUpdate
function onChannelPinsUpdate(event: Primitives.Event, callback: (pin: discordGateway.ChannelPinsUpdatePayload) -> ()) end
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
callback: (pin: discordGateway.ChannelPinsUpdatePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="pin"></div>

#### pin

[discordGateway](#module.discordGateway).[ChannelPinsUpdatePayload](#ChannelPinsUpdatePayload)



