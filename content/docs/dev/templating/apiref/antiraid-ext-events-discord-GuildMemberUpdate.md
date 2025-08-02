---
title: "@antiraid-ext/events/discord/GuildMemberUpdate"
description: "API reference for @antiraid-ext/events/discord/GuildMemberUpdate"
---

<div id="@antiraid-ext/events/discord/GuildMemberUpdate"></div>

# @antiraid-ext/events/discord/GuildMemberUpdate

<div id="Functions"></div>

# Functions

<div id="onGuildMemberUpdate"></div>

## onGuildMemberUpdate

GuildMemberUpdate



Dispatched when a member is updated (e.g their nickname is updated).



Provides the member’s old and new data (if cache feature is enabled and data is available) and the new raw data about updated fields.

<details>
<summary>Function Signature</summary>

```luau
--- GuildMemberUpdate
---
--- Dispatched when a member is updated (e.g their nickname is updated).
---
--- Provides the member’s old and new data (if cache feature is enabled and data is available) and the new raw data about updated fields.
function onGuildMemberUpdate(event: Primitives.Event, callback: (payload: discordGateway.GuildMemberUpdatePayload) -> ()) end
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
callback: (payload: discordGateway.GuildMemberUpdatePayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="payload"></div>

#### payload

[discordGateway](#module.discordGateway).[GuildMemberUpdatePayload](#GuildMemberUpdatePayload)



