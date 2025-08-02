---
title: "@discord-types/vendor/bit/init"
description: "API reference for @discord-types/vendor/bit/init"
---

<div id="@discord-types/vendor/bit/init"></div>

# @discord-types/vendor/bit/init

<div id="Functions"></div>

# Functions

<div id="Bit.is32Bit"></div>

## Bit.is32Bit

\[\[
    Returns true if the given value is a 32-bit integer.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
    Returns true if the given value is a 32-bit integer.
]]
function Bit.is32Bit(value: number) -> boolean end
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

[boolean](#boolean)<div id="Bit.bnot"></div>

## Bit.bnot

\[\[
    Binary NOT operation for integers
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
    Binary NOT operation for integers
]]
function Bit.bnot(value: number) -> number end
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

[number](#number)<div id="Bit.bor"></div>

## Bit.bor

\[\[
    Binary OR operation for integers
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
    Binary OR operation for integers
]]
function Bit.bor(value0: number, value1: number) -> number end
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

[number](#number)<div id="Bit.band"></div>

## Bit.band

\[\[
    Binary AND operation for integers
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
    Binary AND operation for integers
]]
function Bit.band(value0: number, value1: number) -> number end
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

[number](#number)<div id="Bit.shift"></div>

## Bit.shift

\[\[
    Binary SHIFT operation for integers
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
    Binary SHIFT operation for integers
]]
function Bit.shift(value: number, displacement: number) -> number end
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

[number](#number)<div id="Bit.lshift"></div>

## Bit.lshift

\[\[
    Binary LEFT SHIFT operation for integers
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
    Binary LEFT SHIFT operation for integers
]]
function Bit.lshift(value: number, displacement: number) -> number end
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

[number](#number)<div id="Bit.rshift"></div>

## Bit.rshift

\[\[
    Binary RIGHT SHIFT operation for integers
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
    Binary RIGHT SHIFT operation for integers
]]
function Bit.rshift(value: number, displacement: number) -> number end
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