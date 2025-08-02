---
title: "@antiraid-ext/events/discord/MessagePollVoteAdd"
description: "API reference for @antiraid-ext/events/discord/MessagePollVoteAdd"
---

<div id="@antiraid-ext/events/discord/MessagePollVoteAdd"></div>

# @antiraid-ext/events/discord/MessagePollVoteAdd

<div id="Functions"></div>

# Functions

<div id="onMessagePollVoteAdd"></div>

## onMessagePollVoteAdd

MessagePollVoteAdd



Dispatched when a user votes in a poll.



This will be dispatched multiple times if multiple answers are selected.

<details>
<summary>Function Signature</summary>

```luau
--- MessagePollVoteAdd
---
--- Dispatched when a user votes in a poll.
---
--- This will be dispatched multiple times if multiple answers are selected.
function onMessagePollVoteAdd(event: Primitives.Event, callback: (vote: discordGateway.MessagePollVoteAdd) -> ()) end
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
callback: (vote: discordGateway.MessagePollVoteAdd) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="vote"></div>

#### vote

[discordGateway](#module.discordGateway).[MessagePollVoteAdd](#MessagePollVoteAdd)



