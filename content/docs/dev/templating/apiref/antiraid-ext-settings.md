---
title: "@antiraid-ext/settings"
description: "API reference for @antiraid-ext/settings"
---

<div id="@antiraid-ext/settings"></div>

# @antiraid-ext/settings

<div id="Functions"></div>

# Functions

<div id="stringColumnType"></div>

## stringColumnType

<details>
<summary>Function Signature</summary>

```luau
function stringColumnType(type: "Scalar" | "Array", min_length: number?, max_length: number?, allowed_values: {string}, kind: string, suggestions: {string}?) -> settings.ColumnType end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="type"></div>

### type

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

<div id="min_length"></div>

### min_length

*This field is optional and may not be specified*

[number](#number)?

<div id="max_length"></div>

### max_length

*This field is optional and may not be specified*

[number](#number)?

<div id="allowed_values"></div>

### allowed_values

\{[string](#string)\}

<div id="kind"></div>

### kind

[string](#string)

<div id="suggestions"></div>

### suggestions

*This field is optional and may not be specified*

\{[string](#string)\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[settings](#module.settings).[ColumnType](#ColumnType)<div id="integerColumnType"></div>

## integerColumnType

<details>
<summary>Function Signature</summary>

```luau
function integerColumnType(type: "Scalar" | "Array") -> settings.ColumnType end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="type"></div>

### type

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

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[settings](#module.settings).[ColumnType](#ColumnType)<div id="floatColumnType"></div>

## floatColumnType

<details>
<summary>Function Signature</summary>

```luau
function floatColumnType(type: "Scalar" | "Array") -> settings.ColumnType end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="type"></div>

### type

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

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[settings](#module.settings).[ColumnType](#ColumnType)<div id="bitFlagColumnType"></div>

## bitFlagColumnType

<details>
<summary>Function Signature</summary>

```luau
function bitFlagColumnType(type: "Scalar" | "Array", values: {
		[string]: number
	}) -> settings.ColumnType end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="type"></div>

### type

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

<div id="values"></div>

### values

<TypeTable
	type={{
		"[string]": {
			type: "[number](#number)",
			description: "",
			required: true
		},
	}}
/>
<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[settings](#module.settings).[ColumnType](#ColumnType)<div id="booleanColumnType"></div>

## booleanColumnType

<details>
<summary>Function Signature</summary>

```luau
function booleanColumnType(type: "Scalar" | "Array") -> settings.ColumnType end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="type"></div>

### type

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

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[settings](#module.settings).[ColumnType](#ColumnType)<div id="jsonColumnType"></div>

## jsonColumnType

<details>
<summary>Function Signature</summary>

```luau
function jsonColumnType(type: "Scalar" | "Array", style: string?) -> settings.ColumnType end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="type"></div>

### type

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

<div id="style"></div>

### style

*This field is optional and may not be specified*

[string](#string)?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[settings](#module.settings).[ColumnType](#ColumnType)<div id="columnCreatedAt"></div>

## columnCreatedAt

Common fields

<details>
<summary>Function Signature</summary>

```luau
-- Common fields
function columnCreatedAt() -> settings.Column end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[settings](#module.settings).[Column](#Column)<div id="columnCreatedBy"></div>

## columnCreatedBy

<details>
<summary>Function Signature</summary>

```luau
function columnCreatedBy() -> settings.Column end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[settings](#module.settings).[Column](#Column)<div id="columnLastUpdatedAt"></div>

## columnLastUpdatedAt

<details>
<summary>Function Signature</summary>

```luau
function columnLastUpdatedAt() -> settings.Column end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[settings](#module.settings).[Column](#Column)<div id="columnLastUpdatedBy"></div>

## columnLastUpdatedBy

<details>
<summary>Function Signature</summary>

```luau
function columnLastUpdatedBy() -> settings.Column end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[settings](#module.settings).[Column](#Column)<div id="assertString"></div>

## assertString

assertX functions

Asserts that the value is a string and returns it.

<details>
<summary>Function Signature</summary>

```luau
-- assertX functions
--- Asserts that the value is a string and returns it.
function assertString(what: string, value: any) -> string end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="what"></div>

### what

[string](#string)

<div id="value"></div>

### value

[any](#any)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[string](#string)<div id="assertStringChoices"></div>

## assertStringChoices

Asserts that the value is a string and one of the choices.

<details>
<summary>Function Signature</summary>

```luau
--- Asserts that the value is a string and one of the choices.
function assertStringChoices(what: string, value: any, choices: {string}) -> string end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="what"></div>

### what

[string](#string)

<div id="value"></div>

### value

[any](#any)

<div id="choices"></div>

### choices

\{[string](#string)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[string](#string)<div id="assertInteger"></div>

## assertInteger

Asserts that the value is an integer and returns it.

<details>
<summary>Function Signature</summary>

```luau
--- Asserts that the value is an integer and returns it.
function assertInteger(what: string, value: any) -> number end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="what"></div>

### what

[string](#string)

<div id="value"></div>

### value

[any](#any)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[number](#number)<div id="assertFloat"></div>

## assertFloat

Asserts that the value is a float and returns it.

<details>
<summary>Function Signature</summary>

```luau
--- Asserts that the value is a float and returns it.
function assertFloat(what: string, value: any) -> number end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="what"></div>

### what

[string](#string)

<div id="value"></div>

### value

[any](#any)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[number](#number)<div id="assertBoolean"></div>

## assertBoolean

Asserts that the value is a boolean and returns it.

<details>
<summary>Function Signature</summary>

```luau
--- Asserts that the value is a boolean and returns it.
function assertBoolean(what: string, value: any) -> boolean end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="what"></div>

### what

[string](#string)

<div id="value"></div>

### value

[any](#any)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[boolean](#boolean)<div id="assertStringArray"></div>

## assertStringArray

Asserts that the value is an array of strings and returns it.

<details>
<summary>Function Signature</summary>

```luau
--- Asserts that the value is an array of strings and returns it.
function assertStringArray(what: string, value: any) -> {string} end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="what"></div>

### what

[string](#string)

<div id="value"></div>

### value

[any](#any)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

\{[string](#string)\}<div id="assertIntegerArray"></div>

## assertIntegerArray

Asserts that the value is an array of integers and returns it.

<details>
<summary>Function Signature</summary>

```luau
--- Asserts that the value is an array of integers and returns it.
function assertIntegerArray(what: string, value: any) -> {number} end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="what"></div>

### what

[string](#string)

<div id="value"></div>

### value

[any](#any)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

\{[number](#number)\}<div id="assertFloatArray"></div>

## assertFloatArray

Asserts that the value is an array of floats and returns it.

<details>
<summary>Function Signature</summary>

```luau
--- Asserts that the value is an array of floats and returns it.
function assertFloatArray(what: string, value: any) -> {number} end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="what"></div>

### what

[string](#string)

<div id="value"></div>

### value

[any](#any)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

\{[number](#number)\}<div id="assertBooleanArray"></div>

## assertBooleanArray

Asserts that the value is an array of booleans and returns it.

<details>
<summary>Function Signature</summary>

```luau
--- Asserts that the value is an array of booleans and returns it.
function assertBooleanArray(what: string, value: any) -> {boolean} end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="what"></div>

### what

[string](#string)

<div id="value"></div>

### value

[any](#any)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

\{[boolean](#boolean)\}