---
title: "@antiraid-core/settings"
description: "API reference for @antiraid-core/settings"
---

<div id="@antiraid-core/settings"></div>

# @antiraid-core/settings

<div id="Types"></div>

## Types

<div id="ColumnSuggestion"></div>

## ColumnSuggestion

A suggestion for a column. Can either be a static set of suggestions or no suggestions at all.

<details>
<summary>Raw Type</summary>

```luau
--- A suggestion for a column. Can either be a static set of suggestions or no suggestions at all.
type ColumnSuggestion = {
	type: "None"
} | {
	type: "Static",

	suggestions: {string}
}
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

<TypeTable
	type={{
		"type": {
			type: "'None'",
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
		"type": {
			type: "'Static'",
			description: "",
			required: true
		},
		"suggestions": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
	}}
/>
</details>

<div id="ColumnType"></div>

## ColumnType

The type-specific data about a column

<details>
<summary>Raw Type</summary>

```luau
--- The type-specific data about a column
type ColumnType = {
	type: "Scalar" | "Array",

	inner: InnerColumnType
}
```

</details>

<TypeTable
	type={{
		"type": {
			type: "('Scalar' | 'Array')",
			description: "",
			required: true
		},
		"inner": {
			type: "[InnerColumnType](#InnerColumnType)",
			description: "",
			required: true
		},
	}}
/>
<div id="InnerColumnType"></div>

## InnerColumnType

<details>
<summary>Raw Type</summary>

```luau
type InnerColumnType = {
	type: "String",

	--- @field number The minimum length of the string
	min_length: number?,

	--- @field number The maximum length of the string
	max_length: number?,

	--- @field {string} The allowed values for the string (will be rendered as either a select menu or otherwise)
	---
	--- If empty, all values are allowed.
	allowed_values: {string},

	--- @field {string}? The suggestions for the string. If not set, no suggestions will be shown.
	suggestions: {string}?,

	--- @field string The kind of string this is. This will be used to determine how the string is rendered client-side.
	--- e.g. textarea, channel, user, role, kittycat-permission, uuid, interval, timestamp etc.
	kind: string
} | {
	type: "Integer"
} | {
	type: "Float"
} | {
	type: "BitFlag",

	--- @field {string} The bitflag values as a hashmap
	values: {
		[string]: number
	}
} | {
	type: "Boolean"
} | {
	type: "Json",

	--- @field Style to use when rendering the JSON object
	style: string
}
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

<TypeTable
	type={{
		"type": {
			type: "'String'",
			description: "",
			required: true
		},
		"min_length": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"max_length": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"allowed_values": {
			type: "\{[string](#string)\}",
			description: "If empty, all values are allowed.",
			required: true
		},
		"suggestions": {
			type: "\{[string](#string)\}?",
			description: "",
			required: false
		},
		"kind": {
			type: "[string](#string)",
			description: "e.g. textarea, channel, user, role, kittycat-permission, uuid, interval, timestamp etc.",
			required: true
		},
	}}
/>
</details>

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"type": {
			type: "'Integer'",
			description: "",
			required: true
		},
	}}
/>
</details>

<details>
<summary>Variant 3</summary>

<TypeTable
	type={{
		"type": {
			type: "'Float'",
			description: "",
			required: true
		},
	}}
/>
</details>

<details>
<summary>Variant 4</summary>

<TypeTable
	type={{
		"type": {
			type: "'BitFlag'",
			description: "",
			required: true
		},
		"values": {
			type: "\{[string]: [number](#number)\}",
			description: "",
			required: true
		},
	}}
/>
</details>

<details>
<summary>Variant 5</summary>

<TypeTable
	type={{
		"type": {
			type: "'Boolean'",
			description: "",
			required: true
		},
	}}
/>
</details>

<details>
<summary>Variant 6</summary>

<TypeTable
	type={{
		"type": {
			type: "'Json'",
			description: "",
			required: true
		},
		"style": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
</details>

<div id="Column"></div>

## Column

A column in a setting

<details>
<summary>Raw Type</summary>

```luau
--- A column in a setting
type Column = {
	--- @field string The ID of the column
	id: string,

	--- @field string The friendly name of the column
	name: string,

	--- @field string The description of the column
	description: string,

	--- @field ColumnType The type of the column
	column_type: ColumnType,

	--- @field string Is this column a primary key? This can be used when rendering the column in the UI.
	primary_key: boolean,

	--- @field boolean Whether or not the column is nullable
	nullable: boolean,

	--- @field {string} The operations for which the field should be hidden (essentially, not shown in the UI)
	hidden: {string}?,

	--- @field {string} The operations for which the field should be read only in the UI
	readonly: {string}
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
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"description": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"column_type": {
			type: "[ColumnType](#ColumnType)",
			description: "",
			required: true
		},
		"primary_key": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"nullable": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"hidden": {
			type: "\{[string](#string)\}?",
			description: "",
			required: false
		},
		"readonly": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="Setting"></div>

## Setting

<details>
<summary>Raw Type</summary>

```luau
type Setting = {
	--- @field string The ID of the option
	id: string,

	--- @field string The name of the option
	name: string,

	--- @field string The description of the option
	description: string,

	--- @field string View template, used for setting the title of the embed and handling client side errors etc.
	view_template: string?,

	--- @field {Column} The columns for this option
	columns: {Column},

	--- @field string? Index by
	---
	--- If set, all options within the setting will be draggable with the provided index field (must be
	--- a integer being set to the position of the item in the list)
	index_by: string?,

	--- @field SettingOperations The supported operations for this option
	operations: {string},

	--- Icon to use for the setting
	icon: string?,

	--- Client side validation script
	validation_template: string?,

	--- Post-send script to run after the setting has been sent to the server
	postsend_template: string?,

	--- DEPRACRATED, but still used in production badgerfang (TO REMOVE)
	title_template: string?
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
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"description": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"view_template": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"columns": {
			type: "\{[Column](#Column)\}",
			description: "",
			required: true
		},
		"index_by": {
			type: "[string](#string)?",
			description: "If set, all options within the setting will be draggable with the provided index field (must bea integer being set to the position of the item in the list)",
			required: false
		},
		"operations": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
		"icon": {
			type: "[string](#string)?",
			description: "Icon to use for the setting",
			required: false
		},
		"validation_template": {
			type: "[string](#string)?",
			description: "Client side validation script",
			required: false
		},
		"postsend_template": {
			type: "[string](#string)?",
			description: "Post-send script to run after the setting has been sent to the server",
			required: false
		},
		"title_template": {
			type: "[string](#string)?",
			description: "DEPRACRATED, but still used in production badgerfang (TO REMOVE)",
			required: false
		},
	}}
/>
