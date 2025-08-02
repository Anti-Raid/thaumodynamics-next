---
title: "@antiraid-ext/events/discord/ReactionAdd"
description: "API reference for @antiraid-ext/events/discord/ReactionAdd"
---

<div id="@antiraid-ext/events/discord/ReactionAdd"></div>

# @antiraid-ext/events/discord/ReactionAdd

<div id="Functions"></div>

# Functions

<div id="onReactionAdd"></div>

## onReactionAdd

ReactionAdd



Dispatched when a reaction is added to a message.

<details>
<summary>Function Signature</summary>

```luau
--- ReactionAdd
---
--- Dispatched when a reaction is added to a message.
function onReactionAdd(event: Primitives.Event, callback: (reaction: discordGateway.MessageReactionAddPayload) -> ()) end
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
callback: (reaction: discordGateway.MessageReactionAddPayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="reaction"></div>

#### reaction

[discordGateway](#module.discordGateway).[MessageReactionAddPayload](#MessageReactionAddPayload)



