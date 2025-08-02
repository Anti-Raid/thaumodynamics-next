---
title: "@antiraid-ext/strings/splitn"
description: "API reference for @antiraid-ext/strings/splitn"
---

<div id="@antiraid-ext/strings/splitn"></div>

# @antiraid-ext/strings/splitn

<div id="Functions"></div>

# Functions

<div id="string_splitn"></div>

## string_splitn

Splits a string into a table of substrings, using a separator string.

Stops splitting after n substrings have been found or the end of the string is reached.



<details>
<summary>Function Signature</summary>

```luau
--- Splits a string into a table of substrings, using a separator string.
--- Stops splitting after n substrings have been found or the end of the string is reached.
---
--- @param str string The string to split.
--- @param sep string The separator string to use for splitting.
--- @param n number The maximum number of substrings to return.
--- @return A table of strings containing the substrings.
function string_splitn(str: string, sep: string, n: number) -> {string} end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="str"></div>

### str

string The string to split.

[string](#string)

<div id="sep"></div>

### sep

string The separator string to use for splitting.

[string](#string)

<div id="n"></div>

### n

number The maximum number of substrings to return.

[number](#number)

<div id="Returns"></div>

## Returns

<div id="A"></div>

### A

table of strings containing the substrings.

\{[string](#string)\}