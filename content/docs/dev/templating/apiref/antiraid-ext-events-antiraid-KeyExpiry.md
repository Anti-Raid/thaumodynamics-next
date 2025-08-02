---
title: "@antiraid-ext/events/antiraid/KeyExpiry"
description: "API reference for @antiraid-ext/events/antiraid/KeyExpiry"
---

<div id="@antiraid-ext/events/antiraid/KeyExpiry"></div>

# @antiraid-ext/events/antiraid/KeyExpiry

<div id="Functions"></div>

# Functions

<div id="onKeyExpiry"></div>

## onKeyExpiry

Run a callback when the \`AntiRaid.KeyExpiry\` event is triggered (a key is expired).

<details>
<summary>Function Signature</summary>

```luau
--- Run a callback when the \`AntiRaid.KeyExpiry\` event is triggered (a key is expired).
--- @param event The event to listen for.
--- @param callback The callback to run when the event is triggered. The callback will receive the \`events.KeyExpiryEvent\` data.
function onKeyExpiry(event: Primitives.Event, callback: (data: events.KeyExpiryEvent) -> ()) end
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

The callback to run when the event is triggered. The callback will receive the \`events.KeyExpiryEvent\` data.

<details>
<summary>Function Signature</summary>

```luau
callback: (data: events.KeyExpiryEvent) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="data"></div>

#### data

[events](#module.events).[KeyExpiryEvent](#KeyExpiryEvent)



