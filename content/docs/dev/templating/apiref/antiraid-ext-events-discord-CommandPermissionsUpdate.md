---
title: "@antiraid-ext/events/discord/CommandPermissionsUpdate"
description: "API reference for @antiraid-ext/events/discord/CommandPermissionsUpdate"
---

<div id="@antiraid-ext/events/discord/CommandPermissionsUpdate"></div>

# @antiraid-ext/events/discord/CommandPermissionsUpdate

<div id="Functions"></div>

# Functions

<div id="onCommandPermissionsUpdate"></div>

## onCommandPermissionsUpdate

CommandPermissionsUpdate

<details>
<summary>Function Signature</summary>

```luau
--- CommandPermissionsUpdate
function onCommandPermissionsUpdate(event: Primitives.Event, callback: (permission: discord.GuildApplicationCommandPermissionsObject) -> ()) end
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
callback: (permission: discord.GuildApplicationCommandPermissionsObject) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="permission"></div>

#### permission

[discord](#module.discord).[GuildApplicationCommandPermissionsObject](#GuildApplicationCommandPermissionsObject)



