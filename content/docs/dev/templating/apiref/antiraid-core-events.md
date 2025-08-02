---
title: "@antiraid-core/events"
description: "API reference for @antiraid-core/events"
---

<div id="@antiraid-core/events"></div>

# @antiraid-core/events

<div id="Types"></div>

## Types

<div id="GetSettingsEvent"></div>

## GetSettingsEvent

Get settings event

<details>
<summary>Raw Type</summary>

```luau
--- Get settings event
type GetSettingsEvent = {
	author: discord.Snowflake
}
```

</details>

<TypeTable
	type={{
		"author": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
	}}
/>
<div id="SettingExecuteEvent"></div>

## SettingExecuteEvent

Setting execute event

<details>
<summary>Raw Type</summary>

```luau
--- Setting execute event
type SettingExecuteEvent = {
	--- ID of the setting being executed
	id: string,

	--- The author of the event
	author: discord.Snowflake,

	--- The operation being performed on the setting
	op: string,

	--- The fields
	fields: {
		[string]: any
	}
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[string](#string)",
			description: "ID of the setting being executed",
			required: true
		},
		"author": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "The author of the event",
			required: true
		},
		"op": {
			type: "[string](#string)",
			description: "The operation being performed on the setting",
			required: true
		},
		"fields": {
			type: "\{[string]: [any](#any)\}",
			description: "The fields",
			required: true
		},
	}}
/>
<div id="ExternalKeyUpdateEventData"></div>

## ExternalKeyUpdateEventData

Data sent when a key is updated externally (through the web dashboard etc)



NOTE: To avoid recursive template executions, this does not trigger on in-template

key-value updates

<details>
<summary>Raw Type</summary>

```luau
--- Data sent when a key is updated externally (through the web dashboard etc)
---
--- NOTE: To avoid recursive template executions, this does not trigger on in-template
--- key-value updates
type ExternalKeyUpdateEventData = {
	key_modified: string,

	author: discord.Snowflake,

	action: "create" | "update" | "delete"
}
```

</details>

<TypeTable
	type={{
		"key_modified": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"author": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"action": {
			type: "('create' | 'update' | 'delete')",
			description: "",
			required: true
		},
	}}
/>
<div id="KeyExpiryEvent"></div>

## KeyExpiryEvent

Data sent when a key expires.

<details>
<summary>Raw Type</summary>

```luau
--- Data sent when a key expires.
type KeyExpiryEvent = {
	id: string,

	key: string,

	scopes: {string}
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"key": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"scopes": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="KeyResumeEvent"></div>

## KeyResumeEvent

Data sent when a key is resumed.



A key is resumed when it is set with the \`resume\` flag and the template is reloaded or the worker process restarted.

<details>
<summary>Raw Type</summary>

```luau
--- Data sent when a key is resumed.
---
--- A key is resumed when it is set with the \`resume\` flag and the template is reloaded or the worker process restarted.
type KeyResumeEvent = {
	id: string,

	key: string,

	scopes: {string}
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"key": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"scopes": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
	}}
/>
