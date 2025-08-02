---
title: "@antiraid-ext/lockdowns/priorityset"
description: "API reference for @antiraid-ext/lockdowns/priorityset"
---

<div id="@antiraid-ext/lockdowns/priorityset"></div>

# @antiraid-ext/lockdowns/priorityset

<div id="Types"></div>

## Types

<div id="PrioritySet"></div>

## PrioritySet

@internal Lockdown only

Priority sets



PrioritySet can add elements with its priority with all priorities being saved.

When removing an element, the elements prior priority will be set.



**Usage notes**



1. The elements stored must be hashable (e.g. strings, numbers, etc.).

<details>
<summary>Raw Type</summary>

```luau
--- @internal Lockdown only
--- Priority sets
---
--- PrioritySet can add elements with its priority with all priorities being saved.
--- When removing an element, the elements prior priority will be set.
---
--- **Usage notes**
---
--- 1. The elements stored must be hashable (e.g. strings, numbers, etc.).
type PrioritySet<K> = {
	--- Adds an element to the priority set with priority
	add: (element: K, priority: number) -> (),

	--- Removes an element from the priority set with priority
	remove: (element: K, priority: number) -> (),

	--- Returns the highest priority given element
	highest_priority: (element: K) -> number?,

	--- Returns the lowest priority given element
	lowest_priority: (element: K) -> number?,

	--- Returns if an element exists in the priority set or not
	exists: (element: K) -> boolean,

	-- Metatable
	__iter: (self: PrioritySet<K>) -> () -> (K?, number?)
}
```

</details>

<TypeTable
	type={{
		"add": {
			type: "(element: [K](#K), priority: [number](#number)) -> ()",
			description: "Adds an element to the priority set with priority",
			required: true
		},
		"remove": {
			type: "(element: [K](#K), priority: [number](#number)) -> ()",
			description: "Removes an element from the priority set with priority",
			required: true
		},
		"highest_priority": {
			type: "(element: [K](#K)) -> [number](#number)?",
			description: "Returns the highest priority given element",
			required: true
		},
		"lowest_priority": {
			type: "(element: [K](#K)) -> [number](#number)?",
			description: "Returns the lowest priority given element",
			required: true
		},
		"exists": {
			type: "(element: [K](#K)) -> [boolean](#boolean)",
			description: "Returns if an element exists in the priority set or not",
			required: true
		},
		"__iter": {
			type: "(self) -> () -> ([K](#K)?, [number](#number)?)",
			description: "",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="PrioritySet"></div>

## PrioritySet

<details>
<summary>Function Signature</summary>

```luau
function PrioritySet<K>() -> PrioritySet<K> end
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

[PrioritySet](#PrioritySet)&lt;[K](#K)&gt;