---
title: "@antiraid-ext/events/discord/ReactionRemoveAll"
description: "API reference for @antiraid-ext/events/discord/ReactionRemoveAll"
---

<div id="@antiraid-ext/events/discord/ReactionRemoveAll"></div>

# @antiraid-ext/events/discord/ReactionRemoveAll

<div id="Functions"></div>

# Functions

<div id="onReactionRemoveAll"></div>

## onReactionRemoveAll

ReactionRemoveAll



Dispatched when all reactions are removed from a message.

<details>
<summary>Function Signature</summary>

```luau
--- ReactionRemoveAll
---
--- Dispatched when all reactions are removed from a message.
function onReactionRemoveAll(event: Primitives.Event, callback: (reaction: discordGateway.MessageReactionRemoveAllPayload) -> ()) end
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
callback: (reaction: discordGateway.MessageReactionRemoveAllPayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="reaction"></div>

#### reaction

[discordGateway](#module.discordGateway).[MessageReactionRemoveAllPayload](#MessageReactionRemoveAllPayload)



