---
title: "@antiraid/pages"
description: "API documentation for the @antiraid/pages module, including types and page operations."
---

# @antiraid/pages

## Types

## SettingOperations

Supported setting operations for a setting

<details>
<summary>Raw Type</summary>

```luau
--- Supported setting operations for a setting
type SettingOperations = {
	--- @field boolean Can the setting be viewed?
	view: boolean,

	--- @field boolean Can the setting be created?
	create: boolean,

	--- @field boolean Can the setting be updated?
	update: boolean,

	--- @field boolean Can the setting be deleted?
	delete: boolean
}
```

</details>

### view

`boolean`

### create

`boolean`

### update

`boolean`

### delete

`boolean`

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

_This is an inline table type with the following fields_

#### type

```luau
"None"
```

</details>

<details>
<summary>Variant 2</summary>

_This is an inline table type with the following fields_

#### type

```luau
"Static"
```

#### suggestions

`{string}`

</details>

## ColumnType

The type-specific data about a column

<details>
<summary>Raw Type</summary>

```luau
--- The type-specific data about a column
type ColumnType = {
	type: "Scalar" | "Array",

	inner: "String",

	--- @field number The minimum length of the string
	min_length: number?,

	--- @field number The maximum length of the string
	max_length: number?,

	--- @field {string} The allowed values for the string (will be rendered as either a select menu or otherwise)
	---
	--- If empty, all values are allowed.
	allowed_values: {string},

	--- @field string The kind of string this is. This will be used to determine how the string is rendered client-side.
	--- e.g. textarea, channel, user, role, kittycat-permission, uuid, interval, timestamp etc.
	kind: string
} | {
	type: "Scalar" | "Array",

	inner: "Integer"
} | {
	type: "Scalar" | "Array",

	inner: "Float"
} | {
	type: "Scalar" | "Array",

	inner: "BitFlag",

	--- @field {string} The bitflag values as a hashmap
	values: {
		[string]: number
	}
} | {
	type: "Scalar" | "Array",

	inner: "Boolean"
} | {
	type: "Scalar" | "Array",

	inner: "Json",

	--- @field The maximum size, in bytes, of the JSON object
	max_bytes: number?
}
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

_This is an inline table type with the following fields_

#### type

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Scalar"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Array"
```

</details>

#### inner

```luau
"String"
```

#### min_length

_This field is optional and may not be specified_

`number`

#### max_length

_This field is optional and may not be specified_

`number`

#### allowed_values

If empty, all values are allowed.

`{string}`

#### kind

e.g. textarea, channel, user, role, kittycat-permission, uuid, interval, timestamp etc.

`string`

</details>

<details>
<summary>Variant 2</summary>

_This is an inline table type with the following fields_

#### type

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Scalar"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Array"
```

</details>

#### inner

```luau
"Integer"
```

</details>

<details>
<summary>Variant 3</summary>

_This is an inline table type with the following fields_

#### type

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Scalar"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Array"
```

</details>

#### inner

```luau
"Float"
```

</details>

<details>
<summary>Variant 4</summary>

_This is an inline table type with the following fields_

#### type

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Scalar"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Array"
```

</details>

#### inner

```luau
"BitFlag"
```

#### values

_This is an inline table type with the following fields_

##### [string]

`number`

</details>

<details>
<summary>Variant 5</summary>

_This is an inline table type with the following fields_

#### type

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Scalar"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Array"
```

</details>

#### inner

```luau
"Boolean"
```

</details>

<details>
<summary>Variant 6</summary>

_This is an inline table type with the following fields_

#### type

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Scalar"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Array"
```

</details>

#### inner

```luau
"Json"
```

#### max_bytes

_This field is optional and may not be specified_

`number`

</details>

## OperationType

<details>
<summary>Raw Type</summary>

```luau
type OperationType = "View" | "Create" | "Update" | "Delete"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"View"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Create"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"Update"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"Delete"
```

</details>

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

	--- @field boolean Whether or not the column is nullable
	nullable: boolean,

	--- @field ColumnSuggestion The suggestions for the column
	suggestions: ColumnSuggestion,

	--- @field boolean Whether or not the column is a secret field
	secret: boolean,

	--- @field {string} The operations for which the field should be ignored (essentially, read only)
	---
	--- Semantics are defined by the template.
	ignored_for: {OperationType}
}
```

</details>

### id

`string`

### name

`string`

### description

`string`

### column_type

[`ColumnType`](#columntype)

### nullable

`boolean`

### suggestions

[`ColumnSuggestion`](#columnsuggestion)

### secret

`boolean`

### ignored_for

Semantics are defined by the template.

`{OperationType}`

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

	--- @field string The primary key of the table. This *should* be present in user responses to page settings
	--- as well but this is not guaranteed and must be checked for by the template.
	primary_key: string,

	--- @field string Title template, used for the title of the embed
	title_template: string,

	--- @field {Column} The columns for this option
	columns: {Column},

	--- @field SettingOperations The supported operations for this option
	supported_operations: SettingOperations
}
```

</details>

### id

`string`

### name

`string`

### description

`string`

### primary_key

as well but this is not guaranteed and must be checked for by the template.

`string`

### title_template

`string`

### columns

`{Column}`

### supported_operations

[`SettingOperations`](#settingoperations)

## Page

<details>
<summary>Raw Type</summary>

```luau
type Page = {
	--- @field string The title of the page.
	title: string,

	--- @field string The description of the page.
	description: string,

	--- @field {Setting} The settings of the page.
	settings: {Setting}
}
```

</details>

### title

`string`

### description

`string`

### settings

`{Setting}`

## PageExecutor

<details>
<summary>Raw Type</summary>

```luau
type PageExecutor = {
	--- @function () -> Page
	--- Returns the current page.
	get: (self: PageExecutor) -> Promise.LuaPromise<Page?>,

	--- @function () -> Promise<void>
	--- Sets a page to be the templates page. This will overwrite any existing page if one exists.
	set: (self: PageExecutor, page: Page) -> Promise.LuaPromise<Record<never, never>>,

	--- @function () -> Promise<void>
	--- Deletes the templates page. This will not delete the page itself, but will remove it from the server's list of custom pages.
	delete: (self: PageExecutor) -> Promise.LuaPromise<Record<never, never>>
}
```

</details>

### get

Returns the current page.

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Page
--- Returns the current page.
get: (self: PageExecutor) -> Promise.LuaPromise<Page?>
```

</details>

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of [`Page`](#page)

### set

Sets a page to be the templates page. This will overwrite any existing page if one exists.

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Promise<void>
--- Sets a page to be the templates page. This will overwrite any existing page if one exists.
set: (self: PageExecutor, page: Page) -> Promise.LuaPromise<Record<never, never>>
```

</details>

#### Arguments

##### page

[`Page`](#page)

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of `Record`

### delete

Deletes the templates page. This will not delete the page itself, but will remove it from the server's list of custom pages.

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Promise<void>
--- Deletes the templates page. This will not delete the page itself, but will remove it from the server's list of custom pages.
delete: (self: PageExecutor) -> Promise.LuaPromise<Record<never, never>>
```

</details>

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of `Record`

# Functions

## new

Creates a new PageExecutor

<details>
<summary>Function Signature</summary>

```luau
--- Creates a new PageExecutor
function new(token: Primitives.TemplateContext, scope: ExecutorScope.ExecutorScope?) -> PageExecutor end
```

</details>

## Arguments

### token

[`Primitives`](./primitives.md).[`TemplateContext`](./primitives.md#templatecontext)

### scope

_This field is optional and may not be specified_

[`ExecutorScope`](./executorscope.md).[`ExecutorScope`](./executorscope.md#executorscope)

## Returns

### ret1

[`PageExecutor`](#pageexecutor)
