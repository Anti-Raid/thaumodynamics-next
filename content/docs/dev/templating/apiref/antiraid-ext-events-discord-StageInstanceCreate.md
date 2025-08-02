---
title: "@antiraid-ext/events/discord/StageInstanceCreate"
description: "API reference for @antiraid-ext/events/discord/StageInstanceCreate"
---

<div id="@antiraid-ext/events/discord/StageInstanceCreate"></div>

# @antiraid-ext/events/discord/StageInstanceCreate

<div id="Functions"></div>

# Functions

<div id="onStageInstanceCreate"></div>

## onStageInstanceCreate

StageInstanceCreate



Dispatched when a stage instance is created.

<details>
<summary>Function Signature</summary>

```luau
--- StageInstanceCreate
---
--- Dispatched when a stage instance is created.
function onStageInstanceCreate(event: Primitives.Event, callback: (instance: discord.StageInstanceObject) -> ()) end
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
callback: (instance: discord.StageInstanceObject) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="instance"></div>

#### instance

[discord](#module.discord).[StageInstanceObject](#StageInstanceObject)



