---
title: "@antiraid-ext/strings/insert"
description: "API reference for @antiraid-ext/strings/insert"
---

<div id="@antiraid-ext/strings/insert"></div>

# @antiraid-ext/strings/insert

<div id="Functions"></div>

# Functions

<div id="string_insert"></div>

## string_insert

Returns a new string with \`text\` inserted at position \`pos\` in \`str\`.

<details>
<summary>Function Signature</summary>

```luau
--- Returns a new string with \`text\` inserted at position \`pos\` in \`str\`.
--- @param str string The original string.
--- @param pos number The position at which to insert \`text\` (1-based index).
--- @param text string The text to insert.
--- @return string The new string with \`text\` inserted at the specified position.
function string_insert(str: string, pos: number, text: string) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="str"></div>

### str

string The original string.

[string](#string)

<div id="pos"></div>

### pos

number The position at which to insert \`text\` (1-based index).

[number](#number)

<div id="text"></div>

### text

string The text to insert.

[string](#string)

