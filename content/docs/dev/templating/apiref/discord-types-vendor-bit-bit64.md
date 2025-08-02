---
title: "@discord-types/vendor/bit/bit64"
description: "API reference for @discord-types/vendor/bit/bit64"
---

<div id="@discord-types/vendor/bit/bit64"></div>

# @discord-types/vendor/bit/bit64

<div id="Functions"></div>

# Functions

<div id="split64"></div>

## split64

\[\[
	Splits a 64-bit integer into high and low 32-bit integers
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Splits a 64-bit integer into high and low 32-bit integers
]]
function split64(value: number) -> (number, number) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="value"></div>

### value

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[number](#number)

<div id="ret2"></div>

### ret2

[number](#number)

<div id="combine64"></div>

## combine64

\[\[
	Combines high and low 32-bit integers into a 64-bit integer
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Combines high and low 32-bit integers into a 64-bit integer
]]
function combine64(low: number, high: number) -> number end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="low"></div>

### low

[number](#number)

<div id="high"></div>

### high

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[number](#number)<div id="Bit64.bnot"></div>

## Bit64.bnot

\[\[
	Binary NOT operation
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Binary NOT operation
]]
function Bit64.bnot(value: number) -> number end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="value"></div>

### value

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[number](#number)<div id="Bit64.bor"></div>

## Bit64.bor

\[\[
	Binary OR operation
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Binary OR operation
]]
function Bit64.bor(value0: number, value1: number) -> number end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="value0"></div>

### value0

[number](#number)

<div id="value1"></div>

### value1

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[number](#number)<div id="Bit64.band"></div>

## Bit64.band

\[\[
	Binary AND operation
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Binary AND operation
]]
function Bit64.band(value0: number, value1: number) -> number end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="value0"></div>

### value0

[number](#number)

<div id="value1"></div>

### value1

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[number](#number)<div id="Bit64.shift"></div>

## Bit64.shift

\[\[
	Binary SHIFT operation
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Binary SHIFT operation
]]
function Bit64.shift(value: number, displacement: number) -> number end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="value"></div>

### value

[number](#number)

<div id="displacement"></div>

### displacement

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[number](#number)