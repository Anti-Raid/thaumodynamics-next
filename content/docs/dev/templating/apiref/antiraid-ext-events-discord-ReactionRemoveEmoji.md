---
title: "@antiraid-ext/events/discord/ReactionRemoveEmoji"
description: "API reference for @antiraid-ext/events/discord/ReactionRemoveEmoji"
---

<div id="@antiraid-ext/events/discord/ReactionRemoveEmoji"></div>

# @antiraid-ext/events/discord/ReactionRemoveEmoji

<div id="Functions"></div>

# Functions

<div id="onReactionRemoveEmoji"></div>

## onReactionRemoveEmoji

ReactionRemoveEmoji



Dispatched when all reactions of a specific emoji are removed from a message.

<details>
<summary>Function Signature</summary>

```luau
--- ReactionRemoveEmoji
---
--- Dispatched when all reactions of a specific emoji are removed from a message.
function onReactionRemoveEmoji(event: Primitives.Event, callback: (payload: discordGateway.MessageReactionRemoveEmojiPayload) -> ()) end
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
callback: (payload: discordGateway.MessageReactionRemoveEmojiPayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="payload"></div>

#### payload

[discordGateway](#module.discordGateway).[MessageReactionRemoveEmojiPayload](#MessageReactionRemoveEmojiPayload)



