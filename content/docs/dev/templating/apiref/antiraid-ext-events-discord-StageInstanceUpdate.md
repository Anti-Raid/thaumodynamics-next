---
title: "@antiraid-ext/events/discord/StageInstanceUpdate"
description: "API reference for @antiraid-ext/events/discord/StageInstanceUpdate"
---

<div id="@antiraid-ext/events/discord/StageInstanceUpdate"></div>

# @antiraid-ext/events/discord/StageInstanceUpdate

<div id="Functions"></div>

# Functions

<div id="onStageInstanceUpdate"></div>

## onStageInstanceUpdate

StageInstanceUpdate



Dispatched when a stage instance is updated.

<details>
<summary>Function Signature</summary>

```luau
--- StageInstanceUpdate
---
--- Dispatched when a stage instance is updated.
function onStageInstanceUpdate(event: Primitives.Event, callback: (new: discord.StageInstanceObject) -> ()) end
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
callback: (new: discord.StageInstanceObject) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="new"></div>

#### new

[discord](#module.discord).[StageInstanceObject](#StageInstanceObject)



