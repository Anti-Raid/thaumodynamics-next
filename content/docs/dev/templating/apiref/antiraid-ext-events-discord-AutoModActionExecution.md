---
title: "@antiraid-ext/events/discord/AutoModActionExecution"
description: "API reference for @antiraid-ext/events/discord/AutoModActionExecution"
---

<div id="@antiraid-ext/events/discord/AutoModActionExecution"></div>

# @antiraid-ext/events/discord/AutoModActionExecution

<div id="Functions"></div>

# Functions

<div id="onAutoModActionExecution"></div>

## onAutoModActionExecution

AutoModActionExecution



Note that discord-luau calls it ApplicationCommandPermissionsExecutionPayload instead of AutoModActionExecution due to naming bug

<details>
<summary>Function Signature</summary>

```luau
--- AutoModActionExecution
---
--- Note that discord-luau calls it ApplicationCommandPermissionsExecutionPayload instead of AutoModActionExecution due to naming bug
function onAutoModActionExecution(event: Primitives.Event, callback: (action: discordGateway.ApplicationCommandPermissionsExecutionPayload) -> ()) end
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
callback: (action: discordGateway.ApplicationCommandPermissionsExecutionPayload) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="action"></div>

#### action

[discordGateway](#module.discordGateway).[ApplicationCommandPermissionsExecutionPayload](#ApplicationCommandPermissionsExecutionPayload)



