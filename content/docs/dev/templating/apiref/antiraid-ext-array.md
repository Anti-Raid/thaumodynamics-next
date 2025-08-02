---
title: "@antiraid-ext/array"
description: "API reference for @antiraid-ext/array"
---

<div id="@antiraid-ext/array"></div>

# @antiraid-ext/array

<div id="Functions"></div>

# Functions

<div id="array"></div>

## array

Create new array() function to allow easily creating arrays



This function sets the array_metatable as well

<details>
<summary>Function Signature</summary>

```luau
-- Create new array() function to allow easily creating arrays
-- 
-- This function sets the array_metatable as well
function array(...) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="..."></div>

### ...

No type specified!!!

<div id="internalProtectedEquals"></div>

## internalProtectedEquals

<details>
<summary>Function Signature</summary>

```luau
function internalProtectedEquals(o1, o2, ignore_mt, callList) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="o1"></div>

### o1

No type specified!!!

<div id="o2"></div>

### o2

No type specified!!!

<div id="ignore_mt"></div>

### ignore_mt

No type specified!!!

<div id="callList"></div>

### callList

No type specified!!!

<div id="arraysEqual"></div>

## arraysEqual

Compares two objects for equality, including arrays and tables.



<details>
<summary>Function Signature</summary>

```luau
--- Compares two objects for equality, including arrays and tables.
---
---@param o1 any|table First object to compare
---@param o2 any|table Second object to compare
---@param ignore_mt boolean True to ignore metatables (a recursive function to tests tables inside tables)
function arraysEqual(o1, o2, ignore_mt) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="o1"></div>

### o1

any|table First object to compare

No type specified!!!

<div id="o2"></div>

### o2

any|table Second object to compare

No type specified!!!

<div id="ignore_mt"></div>

### ignore_mt

boolean True to ignore metatables (a recursive function to tests tables inside tables)

No type specified!!!

<div id="toArray"></div>

## toArray

Converts a value to an array.



If the value is already an array, it is returned as is with a special \`\`array_metatable\`\` set as its metatable.



If the value is not an array, it is wrapped in an array.

<details>
<summary>Function Signature</summary>

```luau
--- Converts a value to an array. 
---
--- If the value is already an array, it is returned as is with a special \`\`array_metatable\`\` set as its metatable.
---
--- If the value is not an array, it is wrapped in an array.
function toArray<T>(a: T) -> T end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="Arguments"></div>

## Arguments

<div id="a"></div>

### a

[T](#T)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[T](#T)<div id="slice"></div>

## slice

Slices a table from \`from\` to \`to\`.



If \`from\` is nil, it defaults to 1. If \`to\` is nil, it defaults to the length of the table.

Returns a new table containing the sliced elements.



Errors if \`\`to &gt; #arr\`\` or \`\`from &lt; 1\`\`



<details>
<summary>Function Signature</summary>

```luau
--- Slices a table from \`from\` to \`to\`.
---
--- If \`from\` is nil, it defaults to 1. If \`to\` is nil, it defaults to the length of the table.
--- Returns a new table containing the sliced elements.
---
--- Errors if \`\`to > #arr\`\` or \`\`from < 1\`\`
---
---@param arr table The table to slice
---@param from number? The starting index (1-based)
---@param to number? The ending index (1-based)
---@return table A new table containing the sliced elements
function slice<T>(arr: {T}, from: number?, to: number?) -> {T} end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="Arguments"></div>

## Arguments

<div id="arr"></div>

### arr

table The table to slice

\{[T](#T)\}

<div id="from"></div>

### from

number? The starting index (1-based)

*This field is optional and may not be specified*

[number](#number)?

<div id="to"></div>

### to

number? The ending index (1-based)

*This field is optional and may not be specified*

[number](#number)?

<div id="Returns"></div>

## Returns

<div id="table"></div>

### table

A new table containing the sliced elements

\{[T](#T)\}