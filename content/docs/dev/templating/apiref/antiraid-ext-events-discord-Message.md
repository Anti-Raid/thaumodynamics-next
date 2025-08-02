---
title: "@antiraid-ext/events/discord/Message"
description: "API reference for @antiraid-ext/events/discord/Message"
---

<div id="@antiraid-ext/events/discord/Message"></div>

# @antiraid-ext/events/discord/Message

<div id="Functions"></div>

# Functions

<div id="onMessage"></div>

## onMessage

Message



Run an event on message. This is a helper function that extracts the useful data from the event and calls the callback.

<details>
<summary>Function Signature</summary>

```luau
--- Message
---
--- Run an event on message. This is a helper function that extracts the useful data from the event and calls the callback.
function onMessage(event: Primitives.Event, callback: (msg: discordgateway.MessageCreatePayload) -> ()) end
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
callback: (msg: discordgateway.MessageCreatePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="msg"></div>

#### msg

[discordgateway](#module.discordgateway).[MessageCreatePayload](#MessageCreatePayload)



