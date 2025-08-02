---
title: "@antiraid-core/lazy"
description: "API reference for @antiraid-core/lazy"
---

<div id="@antiraid-core/lazy"></div>

# @antiraid-core/lazy

<div id="Types"></div>

## Types

<div id="Lazy"></div>

## Lazy

A lazy value is a value that is only serialized when accessed

<details>
<summary>Raw Type</summary>

```luau
--- A lazy value is a value that is only serialized when accessed
type Lazy<T> = {
	--- The inner value. Only serialized when accessed and then cached.
	data: T
}
```

</details>

<TypeTable
	type={{
		"data": {
			type: "[T](#T)",
			description: "The inner value. Only serialized when accessed and then cached.",
			required: true
		},
	}}
/>
