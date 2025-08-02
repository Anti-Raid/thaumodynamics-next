---
title: "@antiraid-ext/events/discord/StageInstanceDelete"
description: "API reference for @antiraid-ext/events/discord/StageInstanceDelete"
---

<div id="@antiraid-ext/events/discord/StageInstanceDelete"></div>

# @antiraid-ext/events/discord/StageInstanceDelete

<div id="Functions"></div>

# Functions

<div id="onStageInstanceDelete"></div>

## onStageInstanceDelete

StageInstanceDelete



Dispatched when a stage instance is deleted.

<details>
<summary>Function Signature</summary>

```luau
--- StageInstanceDelete
---
--- Dispatched when a stage instance is deleted.
function onStageInstanceDelete(event: Primitives.Event, callback: (instance: discord.StageInstanceObject) -> ()) end
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



