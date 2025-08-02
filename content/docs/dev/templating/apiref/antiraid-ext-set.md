---
title: "@antiraid-ext/set"
description: "API reference for @antiraid-ext/set"
---

<div id="@antiraid-ext/set"></div>

# @antiraid-ext/set

<div id="Types"></div>

## Types

<div id="Set"></div>

## Set

Sets



Sets can add/get unique elements.



**Usage notes**



1. The elements stored must be hashable (e.g. strings, numbers, etc.).

<details>
<summary>Raw Type</summary>

```luau
--- Sets
---
--- Sets can add/get unique elements.
---
--- **Usage notes**
---
--- 1. The elements stored must be hashable (e.g. strings, numbers, etc.).
type Set<K> = {
	--- Adds an element to the set
	add: (element: K) -> (),

	--- Inserts a set of elements into the set
	insert: (elements: {K}) -> (),

	--- Removes an element from the set 
	remove: (element: K) -> (),

	--- Deletes a set of elements from the set
	delete: (elements: {K}) -> (),

	--- Returns if an element exists in the priority set or not
	exists: (element: K) -> boolean,

	--- Clears the set
	clear: () -> (),

	--- Copy of the set
	--- 
	--- **Time complexity: O(n)** where \`n\` is the number of elements in the set.
	copy: () -> Set<K>,

	-- Metatable
	__iter: (self: Set<K>) -> () -> K?,
	__len: (self: Set<K>) -> number
}
```

</details>

<TypeTable
	type={{
		"add": {
			type: "(element: [K](#K)) -> ()",
			description: "Adds an element to the set",
			required: true
		},
		"insert": {
			type: "(elements: \{[K](#K)\}) -> ()",
			description: "Inserts a set of elements into the set",
			required: true
		},
		"remove": {
			type: "(element: [K](#K)) -> ()",
			description: "Removes an element from the set",
			required: true
		},
		"delete": {
			type: "(elements: \{[K](#K)\}) -> ()",
			description: "Deletes a set of elements from the set",
			required: true
		},
		"exists": {
			type: "(element: [K](#K)) -> [boolean](#boolean)",
			description: "Returns if an element exists in the priority set or not",
			required: true
		},
		"clear": {
			type: "() -> ()",
			description: "Clears the set",
			required: true
		},
		"copy": {
			type: "() -> [Set](#Set)&lt;[K](#K)&gt;",
			description: "Copy of the set**Time complexity: O(n)** where \`n\` is the number of elements in the set.",
			required: true
		},
		"__iter": {
			type: "(self) -> () -> [K](#K)?",
			description: "",
			required: true
		},
		"__len": {
			type: "(self) -> [number](#number)",
			description: "",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="Set"></div>

## Set

<details>
<summary>Function Signature</summary>

```luau
function Set<K>() -> Set<K> end
```

</details>

<div id="Generics"></div>

## Generics

<div id="K"></div>

### K

This generic is unconstrained and can be any type

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Set](#Set)&lt;[K](#K)&gt;<div id="fromtable"></div>

## fromtable

Creates a set from a table of elements



**Time complexity: O(n)** where \`n\` is the number of elements in the table.

<details>
<summary>Function Signature</summary>

```luau
--- Creates a set from a table of elements
---
--- **Time complexity: O(n)** where \`n\` is the number of elements in the table.
function fromtable<K>(table: {K}) -> Set<K> end
```

</details>

<div id="Generics"></div>

## Generics

<div id="K"></div>

### K

This generic is unconstrained and can be any type

<div id="Arguments"></div>

## Arguments

<div id="table"></div>

### table

\{[K](#K)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Set](#Set)&lt;[K](#K)&gt;