---
title: "@antiraid-ext/events/antiraid/KeyResume"
description: "API reference for @antiraid-ext/events/antiraid/KeyResume"
---

<div id="@antiraid-ext/events/antiraid/KeyResume"></div>

# @antiraid-ext/events/antiraid/KeyResume

<div id="Functions"></div>

# Functions

<div id="keyResume"></div>

## keyResume

Run a callback when the \`AntiRaid.KeyResume\` event is triggered (a key is resumed).



A key is resumed when it is set with the \`resume\` flag and the template is reloaded or the worker process restarted.

<details>
<summary>Function Signature</summary>

```luau
--- Run a callback when the \`AntiRaid.KeyResume\` event is triggered (a key is resumed).
---
--- A key is resumed when it is set with the \`resume\` flag and the template is reloaded or the worker process restarted.
--- @param event The event to listen for.
--- @param callback The callback to run when the event is triggered. The callback will receive a key resume event
function keyResume(event: Primitives.Event, callback: (events.KeyResumeEvent) -> ()) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="event"></div>

### event

The event to listen for.

[Primitives](#module.Primitives).[Event](#Event)



<div id="callback"></div>

### callback

The callback to run when the event is triggered. The callback will receive a key resume event

<details>
<summary>Function Signature</summary>

```luau
callback: (events.KeyResumeEvent) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="arg1"></div>

#### arg1

[events](#module.events).[KeyResumeEvent](#KeyResumeEvent)



