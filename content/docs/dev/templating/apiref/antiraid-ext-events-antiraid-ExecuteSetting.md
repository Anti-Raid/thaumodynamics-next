---
title: "@antiraid-ext/events/antiraid/ExecuteSetting"
description: "API reference for @antiraid-ext/events/antiraid/ExecuteSetting"
---

<div id="@antiraid-ext/events/antiraid/ExecuteSetting"></div>

# @antiraid-ext/events/antiraid/ExecuteSetting

<div id="Functions"></div>

# Functions

<div id="onExecuteSetting"></div>

## onExecuteSetting

Run a callback when the \`AntiRaid.ExecuteSetting\` event is triggered.

<details>
<summary>Function Signature</summary>

```luau
--- Run a callback when the \`AntiRaid.ExecuteSetting\` event is triggered.
--- @param event The event to listen for.
--- @param callback The callback to run when the event is triggered. The callback will receive the \`events.SettingExecuteEvent\` data.
--- @return data The data returned by the callback.
function onExecuteSetting(event: Primitives.Event, callback: (data: events.SettingExecuteEvent) -> any) end
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

The callback to run when the event is triggered. The callback will receive the \`events.SettingExecuteEvent\` data.

<details>
<summary>Function Signature</summary>

```luau
callback: (data: events.SettingExecuteEvent) -> any
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="data"></div>

#### data

[events](#module.events).[SettingExecuteEvent](#SettingExecuteEvent)



<div id="Returns"></div>

### Returns

<div id="data"></div>

#### data

The data returned by the callback.

[any](#any)