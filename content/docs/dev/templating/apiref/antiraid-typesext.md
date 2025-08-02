---
title: "@antiraid/typesext"
description: "API reference for @antiraid/typesext"
---

<div id="@antiraid/typesext"></div>

# @antiraid/typesext

<div id="Types"></div>

## Types

<div id="MultiOption"></div>

## MultiOption

A multi option is either T (Some(Some(T)), a empty table (Some(None)), or nil (None)

<details>
<summary>Raw Type</summary>

```luau
--- A multi option is either T (Some(Some(T)), a empty table (Some(None)), or nil (None)
type MultiOption<T> = T | {} | nil
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

[T](#T)

</details>

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
	}}
/>
</details>

<details>
<summary>Variant 3</summary>

[nil](#nil)

</details>

<div id="U64Convertibles"></div>

## U64Convertibles

<details>
<summary>Raw Type</summary>

```luau
type U64Convertibles = U64 | string | number
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

[U64](#U64)

</details>

<details>
<summary>Variant 2</summary>

[string](#string)

</details>

<details>
<summary>Variant 3</summary>

[number](#number)

</details>

<div id="U64"></div>

## U64

A U64 is a 64 bit unsigned integer. A U64 can be implicitly created from a number or a string



Note: A U64

<details>
<summary>Raw Type</summary>

```luau
--- A U64 is a 64 bit unsigned integer. A U64 can be implicitly created from a number or a string
---
--- Note: A U64
type U64 = {
	to_ne_bytes: (self: U64) -> {number},

	from_ne_bytes: (self: U64, bytes: {number}) -> U64,

	to_le_bytes: (self: U64) -> {number},

	from_le_bytes: (self: U64, bytes: {number}) -> U64,

	to_be_bytes: (self: U64) -> {number},

	from_be_bytes: (self: U64, bytes: {number}) -> U64,

	to_i64: (self: U64) -> I64,

	-- Metatable
	__add: (self: U64, other: U64Convertibles) -> U64,
	__sub: (self: U64, other: U64Convertibles) -> U64,
	__mul: (self: U64, other: U64Convertibles) -> U64,
	__div: (self: U64, other: U64Convertibles) -> U64,
	-- This is the same as IDiv right now
	__mod: (self: U64, other: number) -> U64,
	__pow: (self: U64, other: U64Convertibles) -> U64,
	__idiv: (self: U64, other: U64Convertibles) -> U64,
	-- This is the same as Div right now
	__eq: (self: U64, other: U64Convertibles) -> boolean,
	__lt: (self: U64, other: U64Convertibles) -> boolean,
	__le: (self: U64, other: U64Convertibles) -> boolean,
	__tostring: (self: U64) -> string,
	__type: "U64"
}
```

</details>

<TypeTable
	type={{
		"to_ne_bytes": {
			type: "(self) -> \{[number](#number)\}",
			description: "",
			required: true
		},
		"from_ne_bytes": {
			type: "(self, bytes: \{[number](#number)\}) -> [U64](#U64)",
			description: "",
			required: true
		},
		"to_le_bytes": {
			type: "(self) -> \{[number](#number)\}",
			description: "",
			required: true
		},
		"from_le_bytes": {
			type: "(self, bytes: \{[number](#number)\}) -> [U64](#U64)",
			description: "",
			required: true
		},
		"to_be_bytes": {
			type: "(self) -> \{[number](#number)\}",
			description: "",
			required: true
		},
		"from_be_bytes": {
			type: "(self, bytes: \{[number](#number)\}) -> [U64](#U64)",
			description: "",
			required: true
		},
		"to_i64": {
			type: "(self) -> [I64](#I64)",
			description: "",
			required: true
		},
		"__add": {
			type: "(self, other: [U64Convertibles](#U64Convertibles)) -> [U64](#U64)",
			description: "",
			required: true
		},
		"__sub": {
			type: "(self, other: [U64Convertibles](#U64Convertibles)) -> [U64](#U64)",
			description: "",
			required: true
		},
		"__mul": {
			type: "(self, other: [U64Convertibles](#U64Convertibles)) -> [U64](#U64)",
			description: "",
			required: true
		},
		"__div": {
			type: "(self, other: [U64Convertibles](#U64Convertibles)) -> [U64](#U64)",
			description: "",
			required: true
		},
		"__mod": {
			type: "(self, other: [number](#number)) -> [U64](#U64)",
			description: "",
			required: true
		},
		"__pow": {
			type: "(self, other: [U64Convertibles](#U64Convertibles)) -> [U64](#U64)",
			description: "",
			required: true
		},
		"__idiv": {
			type: "(self, other: [U64Convertibles](#U64Convertibles)) -> [U64](#U64)",
			description: "",
			required: true
		},
		"__eq": {
			type: "(self, other: [U64Convertibles](#U64Convertibles)) -> [boolean](#boolean)",
			description: "",
			required: true
		},
		"__lt": {
			type: "(self, other: [U64Convertibles](#U64Convertibles)) -> [boolean](#boolean)",
			description: "",
			required: true
		},
		"__le": {
			type: "(self, other: [U64Convertibles](#U64Convertibles)) -> [boolean](#boolean)",
			description: "",
			required: true
		},
		"__tostring": {
			type: "(self) -> [string](#string)",
			description: "",
			required: true
		},
		"__type": {
			type: "'U64'",
			description: "",
			required: true
		},
	}}
/>
<div id="I64Convertibles"></div>

## I64Convertibles

<details>
<summary>Raw Type</summary>

```luau
type I64Convertibles = U64 | I64 | string | number
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

[U64](#U64)

</details>

<details>
<summary>Variant 2</summary>

[I64](#I64)

</details>

<details>
<summary>Variant 3</summary>

[string](#string)

</details>

<details>
<summary>Variant 4</summary>

[number](#number)

</details>

<div id="I64"></div>

## I64

<details>
<summary>Raw Type</summary>

```luau
type I64 = {
	to_ne_bytes: (self: I64) -> {number},

	from_ne_bytes: (self: I64, bytes: {number}) -> I64,

	to_le_bytes: (self: I64) -> {number},

	from_le_bytes: (self: I64, bytes: {number}) -> I64,

	to_be_bytes: (self: I64) -> {number},

	from_be_bytes: (self: I64, bytes: {number}) -> I64,

	to_u64: (self: I64) -> U64,

	-- Metatable
	__add: (self: I64, other: I64 | string | number) -> I64,
	__sub: (self: I64, other: I64 | string | number) -> I64,
	__mul: (self: I64, other: I64 | string | number) -> I64,
	__div: (self: I64, other: I64 | string | number) -> I64,
	__mod: (self: I64, other: number) -> I64,
	__pow: (self: I64, other: I64 | string | number) -> I64,
	__idiv: (self: I64, other: I64 | string | number) -> I64,
	__eq: (self: I64, other: I64 | string | number) -> boolean,
	__lt: (self: I64, other: I64 | string | number) -> boolean,
	__le: (self: I64, other: I64 | string | number) -> boolean,
	__tostring: (self: I64) -> string,
	__type: "I64"
}
```

</details>

<TypeTable
	type={{
		"to_ne_bytes": {
			type: "(self) -> \{[number](#number)\}",
			description: "",
			required: true
		},
		"from_ne_bytes": {
			type: "(self, bytes: \{[number](#number)\}) -> [I64](#I64)",
			description: "",
			required: true
		},
		"to_le_bytes": {
			type: "(self) -> \{[number](#number)\}",
			description: "",
			required: true
		},
		"from_le_bytes": {
			type: "(self, bytes: \{[number](#number)\}) -> [I64](#I64)",
			description: "",
			required: true
		},
		"to_be_bytes": {
			type: "(self) -> \{[number](#number)\}",
			description: "",
			required: true
		},
		"from_be_bytes": {
			type: "(self, bytes: \{[number](#number)\}) -> [I64](#I64)",
			description: "",
			required: true
		},
		"to_u64": {
			type: "(self) -> [U64](#U64)",
			description: "",
			required: true
		},
		"__add": {
			type: "(self, other: ([I64](#I64) | [string](#string) | [number](#number))) -> [I64](#I64)",
			description: "",
			required: true
		},
		"__sub": {
			type: "(self, other: ([I64](#I64) | [string](#string) | [number](#number))) -> [I64](#I64)",
			description: "",
			required: true
		},
		"__mul": {
			type: "(self, other: ([I64](#I64) | [string](#string) | [number](#number))) -> [I64](#I64)",
			description: "",
			required: true
		},
		"__div": {
			type: "(self, other: ([I64](#I64) | [string](#string) | [number](#number))) -> [I64](#I64)",
			description: "",
			required: true
		},
		"__mod": {
			type: "(self, other: [number](#number)) -> [I64](#I64)",
			description: "",
			required: true
		},
		"__pow": {
			type: "(self, other: ([I64](#I64) | [string](#string) | [number](#number))) -> [I64](#I64)",
			description: "",
			required: true
		},
		"__idiv": {
			type: "(self, other: ([I64](#I64) | [string](#string) | [number](#number))) -> [I64](#I64)",
			description: "",
			required: true
		},
		"__eq": {
			type: "(self, other: ([I64](#I64) | [string](#string) | [number](#number))) -> [boolean](#boolean)",
			description: "",
			required: true
		},
		"__lt": {
			type: "(self, other: ([I64](#I64) | [string](#string) | [number](#number))) -> [boolean](#boolean)",
			description: "",
			required: true
		},
		"__le": {
			type: "(self, other: ([I64](#I64) | [string](#string) | [number](#number))) -> [boolean](#boolean)",
			description: "",
			required: true
		},
		"__tostring": {
			type: "(self) -> [string](#string)",
			description: "",
			required: true
		},
		"__type": {
			type: "'I64'",
			description: "",
			required: true
		},
	}}
/>
<div id="BitU64"></div>

## BitU64

\[\[
/// Aim is to implement as many functions from https://luau.org/library#bit32-library as possible but for 64 bit unsigned integers
///
/// arshift, band, bnot, bor, bxor, btest, extract, lrotate, lshift, replace, rrotate, rshift, countlz
/// countrz, byteswap
///
/// Implemented:
/// - band
/// - bnot
/// - bor
/// - bxor
/// - btest
/// - extract
/// - lrotate
/// - lshift
/// - replace
/// - rrotate
/// - rshift
/// - countlz
/// - countrz
/// - byteswap
///
/// Not yet implemented due to spec difficulties:
/// - arshift
\]\]

<details>
<summary>Raw Type</summary>

```luau
--[[
/// Aim is to implement as many functions from https://luau.org/library#bit32-library as possible but for 64 bit unsigned integers
///
/// arshift, band, bnot, bor, bxor, btest, extract, lrotate, lshift, replace, rrotate, rshift, countlz
/// countrz, byteswap
///
/// Implemented:
/// - band
/// - bnot
/// - bor
/// - bxor
/// - btest
/// - extract
/// - lrotate
/// - lshift
/// - replace
/// - rrotate
/// - rshift
/// - countlz
/// - countrz
/// - byteswap
///
/// Not yet implemented due to spec difficulties:
/// - arshift
]]
type BitU64 = {
	band: (...: ...U64Convertibles) -> U64,

	bnot: (U64Convertibles) -> U64,

	bor: (...: ...U64Convertibles) -> U64,

	bxor: (...: ...U64Convertibles) -> U64,

	btest: (...: ...U64Convertibles) -> boolean,

	--- Untested and might not work yet. f must be less than 64
	extract: (n: U64Convertibles, f: number, w: number?) -> U64,

	lrotate: (n: U64Convertibles, i: number) -> U64,

	lshift: (n: U64Convertibles, i: number) -> U64,

	--- Untested and might not work yet. f must be less than 64
	replace: (n: U64Convertibles, r: number, f: number, w: number?) -> U64,

	rrotate: (n: U64Convertibles, i: number) -> U64,

	rshift: (n: U64Convertibles, i: number) -> U64,

	countlz: (n: U64Convertibles) -> number,

	countrz: (n: U64Convertibles) -> number,

	byteswap: (n: U64Convertibles) -> U64
}
```

</details>

<TypeTable
	type={{
		"band": {
			type: "(...: ...[U64Convertibles](#U64Convertibles)) -> [U64](#U64)",
			description: "",
			required: true
		},
		"bnot": {
			type: "([U64Convertibles](#U64Convertibles)) -> [U64](#U64)",
			description: "",
			required: true
		},
		"bor": {
			type: "(...: ...[U64Convertibles](#U64Convertibles)) -> [U64](#U64)",
			description: "",
			required: true
		},
		"bxor": {
			type: "(...: ...[U64Convertibles](#U64Convertibles)) -> [U64](#U64)",
			description: "",
			required: true
		},
		"btest": {
			type: "(...: ...[U64Convertibles](#U64Convertibles)) -> [boolean](#boolean)",
			description: "",
			required: true
		},
		"extract": {
			type: "(n: [U64Convertibles](#U64Convertibles), f: [number](#number), w: [number](#number)?) -> [U64](#U64)",
			description: "Untested and might not work yet. f must be less than 64",
			required: true
		},
		"lrotate": {
			type: "(n: [U64Convertibles](#U64Convertibles), i: [number](#number)) -> [U64](#U64)",
			description: "",
			required: true
		},
		"lshift": {
			type: "(n: [U64Convertibles](#U64Convertibles), i: [number](#number)) -> [U64](#U64)",
			description: "",
			required: true
		},
		"replace": {
			type: "(n: [U64Convertibles](#U64Convertibles), r: [number](#number), f: [number](#number), w: [number](#number)?) -> [U64](#U64)",
			description: "Untested and might not work yet. f must be less than 64",
			required: true
		},
		"rrotate": {
			type: "(n: [U64Convertibles](#U64Convertibles), i: [number](#number)) -> [U64](#U64)",
			description: "",
			required: true
		},
		"rshift": {
			type: "(n: [U64Convertibles](#U64Convertibles), i: [number](#number)) -> [U64](#U64)",
			description: "",
			required: true
		},
		"countlz": {
			type: "(n: [U64Convertibles](#U64Convertibles)) -> [number](#number)",
			description: "",
			required: true
		},
		"countrz": {
			type: "(n: [U64Convertibles](#U64Convertibles)) -> [number](#number)",
			description: "",
			required: true
		},
		"byteswap": {
			type: "(n: [U64Convertibles](#U64Convertibles)) -> [U64](#U64)",
			description: "",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="U64"></div>

## U64

Creates a U64 from a number or string



If nil is passed, 0 is used as default

<details>
<summary>Function Signature</summary>

```luau
--- Creates a U64 from a number or string
---
--- If nil is passed, 0 is used as default
function U64(value: U64Convertibles | nil) -> U64 end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="value"></div>

### value

Union with variants:

<details>
<summary>Variant 1</summary>

[U64Convertibles](#U64Convertibles)

</details>

<details>
<summary>Variant 2</summary>

[nil](#nil)

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[U64](#U64)<div id="I64"></div>

## I64

Creates a I64 from a number or string



If nil is passed, 0 is used as default

<details>
<summary>Function Signature</summary>

```luau
--- Creates a I64 from a number or string
---
--- If nil is passed, 0 is used as default
function I64(value: I64 | string | number | nil) -> I64 end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="value"></div>

### value

Union with variants:

<details>
<summary>Variant 1</summary>

[I64](#I64)

</details>

<details>
<summary>Variant 2</summary>

[string](#string)

</details>

<details>
<summary>Variant 3</summary>

[number](#number)

</details>

<details>
<summary>Variant 4</summary>

[nil](#nil)

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[I64](#I64)<div id="randstring"></div>

## randstring

Generates a random string of length \`length\`

<details>
<summary>Function Signature</summary>

```luau
--- Generates a random string of length \`length\`
function randstring(length: number) -> string end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="length"></div>

### length

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[string](#string)