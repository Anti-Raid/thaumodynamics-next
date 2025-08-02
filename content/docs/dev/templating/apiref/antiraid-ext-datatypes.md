---
title: "@antiraid-ext/datatypes"
description: "API reference for @antiraid-ext/datatypes"
---

<div id="@antiraid-ext/datatypes"></div>

# @antiraid-ext/datatypes

<div id="Types"></div>

## Types

<div id="Queue"></div>

## Queue

A simple queue implementation in Luau.

<details>
<summary>Raw Type</summary>

```luau
--- A simple queue implementation in Luau.
type Queue<T> = {
	_first: number,

	_last: number,

	_queue: {T},

	isEmpty: (self: Queue<T>) -> boolean,

	enqueue: (self: Queue<T>, value: T) -> (),

	dequeue: (self: Queue<T>) -> T
}
```

</details>

<TypeTable
	type={{
		"_first": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"_last": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"_queue": {
			type: "\{[T](#T)\}",
			description: "",
			required: true
		},
		"isEmpty": {
			type: "(self) -> [boolean](#boolean)",
			description: "",
			required: true
		},
		"enqueue": {
			type: "(self, value: [T](#T)) -> ()",
			description: "",
			required: true
		},
		"dequeue": {
			type: "(self) -> [T](#T)",
			description: "",
			required: true
		},
	}}
/>
<div id="Stack"></div>

## Stack

A simple stack implementation in Luau.

<details>
<summary>Raw Type</summary>

```luau
--- A simple stack implementation in Luau.
type Stack<T> = {
	_stack: {T},

	isEmpty: (self: Stack<T>) -> boolean,

	push: (self: Stack<T>, value: T) -> (),

	pop: (self: Stack<T>) -> T
}
```

</details>

<TypeTable
	type={{
		"isEmpty": {
			type: "(self) -> [boolean](#boolean)",
			description: "",
			required: true
		},
		"push": {
			type: "(self, value: [T](#T)) -> ()",
			description: "",
			required: true
		},
		"pop": {
			type: "(self) -> [T](#T)",
			description: "",
			required: true
		},
		"_stack": {
			type: "\{[T](#T)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="Queue.new"></div>

## Queue.new

Create a new queue

<details>
<summary>Function Signature</summary>

```luau
--- Create a new queue
function Queue.new<T>() -> Queue<T> end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Queue](#Queue)&lt;[T](#T)&gt;<div id="Queue.isEmpty"></div>

## Queue.isEmpty

Check if the queue is empty

<details>
<summary>Function Signature</summary>

```luau
-- Check if the queue is empty
function Queue.isEmpty<T>(self: Queue<T>) end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="Queue.enqueue"></div>

## Queue.enqueue

Add a value to the queue

<details>
<summary>Function Signature</summary>

```luau
--- Add a value to the queue
function Queue.enqueue<T>(self: Queue<T>, value: T) end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="Arguments"></div>

## Arguments

<div id="value"></div>

### value

[T](#T)

<div id="Queue.dequeue"></div>

## Queue.dequeue

Remove a value from the queue

<details>
<summary>Function Signature</summary>

```luau
--- Remove a value from the queue
function Queue.dequeue<T>(self: Queue<T>) -> T end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[T](#T)<div id="Stack.new"></div>

## Stack.new

Create a new stack

<details>
<summary>Function Signature</summary>

```luau
--- Create a new stack
function Stack.new<T>() -> Stack<T> end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Stack](#Stack)&lt;[T](#T)&gt;<div id="Stack.isEmpty"></div>

## Stack.isEmpty

Check if the stack is empty

<details>
<summary>Function Signature</summary>

```luau
--- Check if the stack is empty
function Stack.isEmpty<T>(self: Stack<T>) end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="Stack.push"></div>

## Stack.push

Put a new value onto the stack

<details>
<summary>Function Signature</summary>

```luau
--- Put a new value onto the stack
function Stack.push<T>(self: Stack<T>, value) end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="Arguments"></div>

## Arguments

<div id="value"></div>

### value

No type specified!!!

<div id="Stack.pop"></div>

## Stack.pop

Take a value off the stack

<details>
<summary>Function Signature</summary>

```luau
--- Take a value off the stack
function Stack.pop<T>(self: Stack<T>) end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

