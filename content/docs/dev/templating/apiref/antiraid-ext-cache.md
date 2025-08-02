---
title: "@antiraid-ext/cache"
description: "API reference for @antiraid-ext/cache"
---

<div id="@antiraid-ext/cache"></div>

# @antiraid-ext/cache

<div id="Types"></div>

## Types

<div id="CachedTable"></div>

## CachedTable

A CachedTable is a table that stores key-value pairs with an expiration time.

<details>
<summary>Raw Type</summary>

```luau
--- A CachedTable is a table that stores key-value pairs with an expiration time.
type CachedTable<K, V> = {
	--- Gets a value from the cache by its key.
	--- @field {[K]: V} The table that stores the key-value pairs
	get: (self: CachedTable<K, V>, key: K) -> V?,

	--- Sets a value in the cache with an expiration time.
	--- @param key The key to set the value for
	--- @param value The value to set
	--- @param expiry The time in seconds after which the value will expire
	--- @return nil
	set: (self: CachedTable<K, V>, key: K, value: V, expiry: number) -> (),

	--- Removes a value from the cache by its key.
	--- @param key The key to remove
	--- @return nil
	remove: (self: CachedTable<K, V>, key: K) -> (),

	--- Closes the cache, removing all key-value pairs and cancelling any pending expiries.
	--- @return nil
	close: (self: CachedTable<K, V>) -> (),

	--- Gets the number of key-value pairs in the cache.
	--- @return number The number of key-value pairs in the cache
	len: (self: CachedTable<K, V>) -> number
}
```

</details>

<TypeTable
	type={{
		"get": {
			type: "(self, key: [K](#K)) -> [V](#V)?",
			description: "Gets a value from the cache by its key.",
			required: true
		},
		"set": {
			type: "(self, key: [K](#K), value: [V](#V), expiry: [number](#number)) -> ()",
			description: "Sets a value in the cache with an expiration time.",
			required: true
		},
		"remove": {
			type: "(self, key: [K](#K)) -> ()",
			description: "Removes a value from the cache by its key.",
			required: true
		},
		"close": {
			type: "(self) -> ()",
			description: "Closes the cache, removing all key-value pairs and cancelling any pending expiries.",
			required: true
		},
		"len": {
			type: "(self) -> [number](#number)",
			description: "Gets the number of key-value pairs in the cache.",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="CachedTable.new"></div>

## CachedTable.new

<details>
<summary>Function Signature</summary>

```luau
function CachedTable.new<K, V>() -> CachedTable<K, V> end
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

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[CachedTable](#CachedTable)&lt;[K](#K), [V](#V)&gt;<div id="CachedTable"></div>

## CachedTable

<details>
<summary>Function Signature</summary>

```luau
function CachedTable<K, V>(key: K) -> V? end
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

<div id="key"></div>

### key

[K](#K)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[V](#V)?<div id="CachedTable"></div>

## CachedTable

<details>
<summary>Function Signature</summary>

```luau
function CachedTable<K, V>(key: K, value: V, expiry: number) end
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

<div id="key"></div>

### key

[K](#K)

<div id="value"></div>

### value

[V](#V)

<div id="expiry"></div>

### expiry

[number](#number)

<div id="CachedTable"></div>

## CachedTable

<details>
<summary>Function Signature</summary>

```luau
function CachedTable<K, V>(key: K) end
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

<div id="key"></div>

### key

[K](#K)

<div id="CachedTable"></div>

## CachedTable

<details>
<summary>Function Signature</summary>

```luau
function CachedTable<K, V>() end
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

<div id="CachedTable"></div>

## CachedTable

<details>
<summary>Function Signature</summary>

```luau
function CachedTable<K, V>() -> number end
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

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[number](#number)