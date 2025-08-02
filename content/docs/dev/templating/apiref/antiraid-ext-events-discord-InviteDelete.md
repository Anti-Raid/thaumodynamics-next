---
title: "@antiraid-ext/events/discord/InviteDelete"
description: "API reference for @antiraid-ext/events/discord/InviteDelete"
---

<div id="@antiraid-ext/events/discord/InviteDelete"></div>

# @antiraid-ext/events/discord/InviteDelete

<div id="Functions"></div>

# Functions

<div id="onInviteDelete"></div>

## onInviteDelete

InviteDelete



Dispatched when an invite is deleted.

<details>
<summary>Function Signature</summary>

```luau
--- InviteDelete
---
--- Dispatched when an invite is deleted.
function onInviteDelete(event: Primitives.Event, callback: (data: discordGateway.InviteDeletePayload) -> ()) end
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
callback: (data: discordGateway.InviteDeletePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="data"></div>

#### data

[discordGateway](#module.discordGateway).[InviteDeletePayload](#InviteDeletePayload)



