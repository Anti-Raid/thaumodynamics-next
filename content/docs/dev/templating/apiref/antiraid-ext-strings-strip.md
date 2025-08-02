---
title: "@antiraid-ext/strings/strip"
description: "API reference for @antiraid-ext/strings/strip"
---

<div id="@antiraid-ext/strings/strip"></div>

# @antiraid-ext/strings/strip

<div id="Functions"></div>

# Functions

<div id="string_strip"></div>

## string_strip

Strips a set of characters from the beginning and end of a string.



<details>
<summary>Function Signature</summary>

```luau
--- Strips a set of characters from the beginning and end of a string.
---
--- @param str string The string to strip.
--- @param chars string? The characters to strip. Defaults to whitespace characters (" \t\n\r").
--- @return string The stripped string.
--- @return number The index of the last character in the stripped string.
function string_strip(str: string, chars: string?) -> (string, number) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="str"></div>

### str

string The string to strip.

[string](#string)

<div id="chars"></div>

### chars

string? The characters to strip. Defaults to whitespace characters (" \t\n\r").

*This field is optional and may not be specified*

[string](#string)?

<div id="Returns"></div>

## Returns

<div id="number"></div>

### number

The index of the last character in the stripped string.

[string](#string)

<div id="ret2"></div>

### ret2

[number](#number)

