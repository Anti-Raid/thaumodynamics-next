---
title: "@antiraid-ext/events/discord/MessagePollVoteRemove"
description: "API reference for @antiraid-ext/events/discord/MessagePollVoteRemove"
---

<div id="@antiraid-ext/events/discord/MessagePollVoteRemove"></div>

# @antiraid-ext/events/discord/MessagePollVoteRemove

<div id="Functions"></div>

# Functions

<div id="onMessagePollVoteRemove"></div>

## onMessagePollVoteRemove

MessagePollVoteRemove



Dispatched when a user removes their vote in a poll.

<details>
<summary>Function Signature</summary>

```luau
--- MessagePollVoteRemove
---
--- Dispatched when a user removes their vote in a poll.
function onMessagePollVoteRemove(event: Primitives.Event, callback: (vote: discordGateway.MessagePollVoteRemove) -> ()) end
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
callback: (vote: discordGateway.MessagePollVoteRemove) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="vote"></div>

#### vote

[discordGateway](#module.discordGateway).[MessagePollVoteRemove](#MessagePollVoteRemove)



