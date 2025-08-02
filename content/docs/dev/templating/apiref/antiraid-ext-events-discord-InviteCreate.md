---
title: "@antiraid-ext/events/discord/InviteCreate"
description: "API reference for @antiraid-ext/events/discord/InviteCreate"
---

<div id="@antiraid-ext/events/discord/InviteCreate"></div>

# @antiraid-ext/events/discord/InviteCreate

<div id="Functions"></div>

# Functions

<div id="onInviteCreate"></div>

## onInviteCreate

InviteCreate



Dispatched when an invite is created.

<details>
<summary>Function Signature</summary>

```luau
--- InviteCreate
---
--- Dispatched when an invite is created.
function onInviteCreate(event: Primitives.Event, callback: (data: discordGateway.InviteCreatePayload) -> ()) end
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
callback: (data: discordGateway.InviteCreatePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="data"></div>

#### data

[discordGateway](#module.discordGateway).[InviteCreatePayload](#InviteCreatePayload)



