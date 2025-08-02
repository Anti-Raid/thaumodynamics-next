---
title: "@antiraid-ext/collections"
description: "API reference for @antiraid-ext/collections"
---

<div id="@antiraid-ext/collections"></div>

# @antiraid-ext/collections

<div id="Functions"></div>

# Functions

<div id="map"></div>

## map

From https://github.com/luau-lang/lute/blob/primary/lute/std/libs/table.luau

<details>
<summary>Function Signature</summary>

```luau
-- From https://github.com/luau-lang/lute/blob/primary/lute/std/libs/table.luau
function map<K, A, B>(table: {
		[K]: A
	}, f: (A) -> B) -> {
		[K]: B
	} end
```

</details>

<div id="Generics"></div>

## Generics

<div id="K"></div>

### K

This generic is unconstrained and can be any type

<div id="A"></div>

### A

This generic is unconstrained and can be any type

<div id="B"></div>

### B

This generic is unconstrained and can be any type

<div id="Arguments"></div>

## Arguments

<div id="table"></div>

### table

<TypeTable
	type={{
		"[K]": {
			type: "[A](#A)",
			description: "",
			required: true
		},
	}}
/>
<div id="f"></div>

### f

<details>
<summary>Function Signature</summary>

```luau
f: (A) -> B
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="arg1"></div>

#### arg1

[A](#A)

<div id="Returns"></div>

### Returns

<div id="ret1"></div>

#### ret1

[B](#B)<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

\{[K]: [B](#B)\}<div id="filter"></div>

## filter

<details>
<summary>Function Signature</summary>

```luau
function filter<K, V>(table: {
		[K]: V
	}, predicate: (V) -> boolean) -> {
		[K]: V
	} end
```

</details>

<div id="Generics"></div>

## Generics

<div id="K"></div>

### K

This generic is unconstrained and can be any type

<div id="V"></div>

### V

This generic is unconstrained and can be any type

<div id="Arguments"></div>

## Arguments

<div id="table"></div>

### table

<TypeTable
	type={{
		"[K]": {
			type: "[V](#V)",
			description: "",
			required: true
		},
	}}
/>
<div id="predicate"></div>

### predicate

<details>
<summary>Function Signature</summary>

```luau
predicate: (V) -> boolean
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="arg1"></div>

#### arg1

[V](#V)

<div id="Returns"></div>

### Returns

<div id="ret1"></div>

#### ret1

[boolean](#boolean)<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

\{[K]: [V](#V)\}<div id="fold"></div>

## fold

<details>
<summary>Function Signature</summary>

```luau
function fold<K, V, A>(table: {
		[K]: V
	}, f: (A, V) -> A, initial: A) -> A end
```

</details>

<div id="Generics"></div>

## Generics

<div id="K"></div>

### K

This generic is unconstrained and can be any type

<div id="V"></div>

### V

This generic is unconstrained and can be any type

<div id="A"></div>

### A

This generic is unconstrained and can be any type

<div id="Arguments"></div>

## Arguments

<div id="table"></div>

### table

<TypeTable
	type={{
		"[K]": {
			type: "[V](#V)",
			description: "",
			required: true
		},
	}}
/>
<div id="f"></div>

### f

<details>
<summary>Function Signature</summary>

```luau
f: (A, V) -> A
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="arg1"></div>

#### arg1

[A](#A)

<div id="arg2"></div>

#### arg2

[V](#V)

<div id="Returns"></div>

### Returns

<div id="ret1"></div>

#### ret1

[A](#A)<div id="initial"></div>

### initial

[A](#A)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[A](#A)