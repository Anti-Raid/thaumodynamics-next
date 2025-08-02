---
title: "@antiraid-ext/interactions"
description: "API reference for @antiraid-ext/interactions"
---

<div id="@antiraid-ext/interactions"></div>

# @antiraid-ext/interactions

<div id="Functions"></div>

# Functions

<div id="ApplicationCommandOptionType"></div>

## ApplicationCommandOptionType

Converts a string representation of an application command option type to its corresponding numeric value.

<details>
<summary>Function Signature</summary>

```luau
--- Converts a string representation of an application command option type to its corresponding numeric value.
--- @param type The string representation of the application command option type.
--- @return The numeric value corresponding to the application command option type.
function ApplicationCommandOptionType(type: "SubCommand" | "SubCommandGroup" | "String" | "Integer" | "Boolean" | "User" | "Channel" | "Role" | "Mentionable" | "Number" | "Attachment") -> number end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="type"></div>

### type

The string representation of the application command option type.

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"SubCommand"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"SubCommandGroup"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"String"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"Integer"
```

</details>

<details>
<summary>Variant 5</summary>

```luau
"Boolean"
```

</details>

<details>
<summary>Variant 6</summary>

```luau
"User"
```

</details>

<details>
<summary>Variant 7</summary>

```luau
"Channel"
```

</details>

<details>
<summary>Variant 8</summary>

```luau
"Role"
```

</details>

<details>
<summary>Variant 9</summary>

```luau
"Mentionable"
```

</details>

<details>
<summary>Variant 10</summary>

```luau
"Number"
```

</details>

<details>
<summary>Variant 11</summary>

```luau
"Attachment"
```

</details>

<div id="Returns"></div>

## Returns

<div id="The"></div>

### The

numeric value corresponding to the application command option type.

[number](#number)<div id="IntegrationType"></div>

## IntegrationType

<details>
<summary>Function Signature</summary>

```luau
function IntegrationType(type: "GuildInstall" | "UserInstall") -> number end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="type"></div>

### type

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"GuildInstall"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"UserInstall"
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[number](#number)