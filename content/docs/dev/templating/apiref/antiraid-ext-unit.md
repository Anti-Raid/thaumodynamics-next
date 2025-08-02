---
title: "@antiraid-ext/unit"
description: "API reference for @antiraid-ext/unit"
---

<div id="@antiraid-ext/unit"></div>

# @antiraid-ext/unit

<div id="Functions"></div>

# Functions

<div id="parseToSeconds"></div>

## parseToSeconds

Parses a string to seconds



E.g. \`1 hour\` -&gt; 3600, \`1h\` -&gt; 3600, \`1 hour 30 minutes\` -&gt; 5400, \`1h30m\` -&gt; 5400, \`1h30min 1 seconds\` -&gt; 3600+1800+1=5401

<details>
<summary>Function Signature</summary>

```luau
--- Parses a string to seconds
---
--- E.g. \`1 hour\` -> 3600, \`1h\` -> 3600, \`1 hour 30 minutes\` -> 5400, \`1h30m\` -> 5400, \`1h30min 1 seconds\` -> 3600+1800+1=5401
function parseToSeconds(input: string) -> number end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="input"></div>

### input

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[number](#number)