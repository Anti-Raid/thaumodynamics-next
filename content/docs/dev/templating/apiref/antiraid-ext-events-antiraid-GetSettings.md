---
title: "@antiraid-ext/events/antiraid/GetSettings"
description: "API reference for @antiraid-ext/events/antiraid/GetSettings"
---

<div id="@antiraid-ext/events/antiraid/GetSettings"></div>

# @antiraid-ext/events/antiraid/GetSettings

<div id="Types"></div>

## Types

<div id="Result"></div>

## Result

<details>
<summary>Raw Type</summary>

```luau
type Result = {
	isGetSettings: true,

	data: {settings.Setting}
} | {
	isGetSettings: false
}
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

<TypeTable
	type={{
		"isGetSettings": {
			type: "[true](#true)",
			description: "",
			required: true
		},
		"data": {
			type: "\{[settings](#module.settings).[Setting](#Setting)\}",
			description: "",
			required: true
		},
	}}
/>
</details>

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"isGetSettings": {
			type: "[false](#false)",
			description: "",
			required: true
		},
	}}
/>
</details>

<div id="Functions"></div>

# Functions

<div id="onGetSettings"></div>

## onGetSettings

Run a callback when the \`AntiRaid.GetSettings\` event is triggered (a user requests the list of settings from the server).

<details>
<summary>Function Signature</summary>

```luau
--- Run a callback when the \`AntiRaid.GetSettings\` event is triggered (a user requests the list of settings from the server).
--- @param event The event to listen for.
--- @param callback The callback to run when the event is triggered. The callback will receive the \`events.GetSettingsEvent\` data and is expected to return a list of settings to be displayed to the user
--- @return Result The result of the operation, containing a list of settings if successful
function onGetSettings(event: Primitives.Event, callback: (data: events.GetSettingsEvent) -> {settings.Setting}) -> Result end
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

The callback to run when the event is triggered. The callback will receive the \`events.GetSettingsEvent\` data and is expected to return a list of settings to be displayed to the user

<details>
<summary>Function Signature</summary>

```luau
callback: (data: events.GetSettingsEvent) -> {settings.Setting}
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="data"></div>

#### data

[events](#module.events).[GetSettingsEvent](#GetSettingsEvent)



<div id="Returns"></div>

### Returns

<div id="Result"></div>

#### Result

The result of the operation, containing a list of settings if successful

\{[settings](#module.settings).[Setting](#Setting)\}<div id="Returns"></div>

## Returns

<div id="Result"></div>

### Result

The result of the operation, containing a list of settings if successful

[Result](#Result)