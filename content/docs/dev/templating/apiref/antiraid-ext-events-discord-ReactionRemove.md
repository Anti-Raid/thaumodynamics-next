---
title: "@antiraid-ext/events/discord/ReactionRemove"
description: "API reference for @antiraid-ext/events/discord/ReactionRemove"
---

<div id="@antiraid-ext/events/discord/ReactionRemove"></div>

# @antiraid-ext/events/discord/ReactionRemove

<div id="Functions"></div>

# Functions

<div id="onReactionRemove"></div>

## onReactionRemove

ReactionRemove



Dispatched when a reaction is removed from a message.

<details>
<summary>Function Signature</summary>

```luau
--- ReactionRemove
---
--- Dispatched when a reaction is removed from a message.
function onReactionRemove(event: Primitives.Event, callback: (reaction: discordGateway.MessageReactionRemovePayload) -> ()) end
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
callback: (reaction: discordGateway.MessageReactionRemovePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="reaction"></div>

#### reaction

[discordGateway](#module.discordGateway).[MessageReactionRemovePayload](#MessageReactionRemovePayload)



