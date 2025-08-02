---
title: "@antiraid-ext/events/discord/InteractionCreate"
description: "API reference for @antiraid-ext/events/discord/InteractionCreate"
---

<div id="@antiraid-ext/events/discord/InteractionCreate"></div>

# @antiraid-ext/events/discord/InteractionCreate

<div id="Functions"></div>

# Functions

<div id="onInteractionCreate"></div>

## onInteractionCreate

InteractionCreate



Run an event on interaction create (e.g a slash command was used or a button was clicked)

<details>
<summary>Function Signature</summary>

```luau
--- InteractionCreate
---
--- Run an event on interaction create (e.g a slash command was used or a button was clicked)
function onInteractionCreate(event: Primitives.Event, callback: (interaction: discord.InteractionObject) -> ()) end
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
callback: (interaction: discord.InteractionObject) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="interaction"></div>

#### interaction

[discord](#module.discord).[InteractionObject](#InteractionObject)



