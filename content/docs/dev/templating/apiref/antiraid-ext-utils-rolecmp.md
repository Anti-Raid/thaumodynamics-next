---
title: "@antiraid-ext/utils/rolecmp"
description: "API reference for @antiraid-ext/utils/rolecmp"
---

<div id="@antiraid-ext/utils/rolecmp"></div>

# @antiraid-ext/utils/rolecmp

<div id="Functions"></div>

# Functions

<div id="IsRoleALessThanRoleB"></div>

## IsRoleALessThanRoleB

Returns if A is lower than B in hierarchy order.



<details>
<summary>Function Signature</summary>

```luau
--- Returns if A is lower than B in hierarchy order.
---
--- @param a discord.GuildRoleObject Role A
--- @param b discord.GuildRoleObject Role B
--- @return boolean \`\`true\`\` if A is lower than B in hierarchy order, \`\`false\`\` otherwise.
function IsRoleALessThanRoleB(a: discord.GuildRoleObject, b: discord.GuildRoleObject) -> boolean end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="a"></div>

### a

discord.GuildRoleObject Role A

[discord](#module.discord).[GuildRoleObject](#GuildRoleObject)



<div id="b"></div>

### b

discord.GuildRoleObject Role B

[discord](#module.discord).[GuildRoleObject](#GuildRoleObject)



<div id="Returns"></div>

## Returns

<div id="boolean"></div>

### boolean

\`\`true\`\` if A is lower than B in hierarchy order, \`\`false\`\` otherwise.

[boolean](#boolean)<div id="IsRoleALessThanOrEqualToRoleB"></div>

## IsRoleALessThanOrEqualToRoleB

Returns if A is less than or equal to B in hierarchy order.



<details>
<summary>Function Signature</summary>

```luau
--- Returns if A is less than or equal to B in hierarchy order.
---
--- @param a discord.GuildRoleObject Role A
--- @param b discord.GuildRoleObject Role B
--- @return boolean \`\`true\`\` if A is lower than or equal to B in hierarchy order, \`\`false\`\` otherwise.
function IsRoleALessThanOrEqualToRoleB(a: discord.GuildRoleObject, b: discord.GuildRoleObject) -> boolean end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="a"></div>

### a

discord.GuildRoleObject Role A

[discord](#module.discord).[GuildRoleObject](#GuildRoleObject)



<div id="b"></div>

### b

discord.GuildRoleObject Role B

[discord](#module.discord).[GuildRoleObject](#GuildRoleObject)



<div id="Returns"></div>

## Returns

<div id="boolean"></div>

### boolean

\`\`true\`\` if A is lower than or equal to B in hierarchy order, \`\`false\`\` otherwise.

[boolean](#boolean)<div id="IsRoleAGreaterThanRoleB"></div>

## IsRoleAGreaterThanRoleB

Returns if A is greater than B in hierarchy order.



<details>
<summary>Function Signature</summary>

```luau
--- Returns if A is greater than B in hierarchy order.
---
--- @param a discord.GuildRoleObject Role A
--- @param b discord.GuildRoleObject Role B
--- @return boolean \`\`true\`\` if A is greater than or equal to B in hierarchy order, \`\`false\`\` otherwise.
function IsRoleAGreaterThanRoleB(a: discord.GuildRoleObject, b: discord.GuildRoleObject) -> boolean end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="a"></div>

### a

discord.GuildRoleObject Role A

[discord](#module.discord).[GuildRoleObject](#GuildRoleObject)



<div id="b"></div>

### b

discord.GuildRoleObject Role B

[discord](#module.discord).[GuildRoleObject](#GuildRoleObject)



<div id="Returns"></div>

## Returns

<div id="boolean"></div>

### boolean

\`\`true\`\` if A is greater than or equal to B in hierarchy order, \`\`false\`\` otherwise.

[boolean](#boolean)<div id="IsRoleAGreaterThanOrEqualToRoleB"></div>

## IsRoleAGreaterThanOrEqualToRoleB

Returns if Role A is greater than or equal to Role B in hierarchy order.



<details>
<summary>Function Signature</summary>

```luau
--- Returns if Role A is greater than or equal to Role B in hierarchy order.
---
--- @param a discord.GuildRoleObject Role A
--- @param b discord.GuildRoleObject Role B
--- @return boolean \`\`true\`\` if A is greater than or equal to B in hierarchy order, \`\`false\`\` otherwise.
function IsRoleAGreaterThanOrEqualToRoleB(a: discord.GuildRoleObject, b: discord.GuildRoleObject) -> boolean end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="a"></div>

### a

discord.GuildRoleObject Role A

[discord](#module.discord).[GuildRoleObject](#GuildRoleObject)



<div id="b"></div>

### b

discord.GuildRoleObject Role B

[discord](#module.discord).[GuildRoleObject](#GuildRoleObject)



<div id="Returns"></div>

## Returns

<div id="boolean"></div>

### boolean

\`\`true\`\` if A is greater than or equal to B in hierarchy order, \`\`false\`\` otherwise.

[boolean](#boolean)<div id="SortRolesByHierarchyAsc"></div>

## SortRolesByHierarchyAsc

Sorts roles by hierarchy order in ascending order \[lower roles first\].

<details>
<summary>Function Signature</summary>

```luau
--- Sorts roles by hierarchy order in ascending order [lower roles first].
function SortRolesByHierarchyAsc(roles: {discord.GuildRoleObject}) -> {discord.GuildRoleObject} end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="roles"></div>

### roles

\{[discord](#module.discord).[GuildRoleObject](#GuildRoleObject)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

\{[discord](#module.discord).[GuildRoleObject](#GuildRoleObject)\}<div id="SortRolesByHierarchyDesc"></div>

## SortRolesByHierarchyDesc

Sorts roles by hierarchy order in descending order \[roles higher in hierarchy first\].

<details>
<summary>Function Signature</summary>

```luau
--- Sorts roles by hierarchy order in descending order [roles higher in hierarchy first].
function SortRolesByHierarchyDesc(roles: {discord.GuildRoleObject}) -> {discord.GuildRoleObject} end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="roles"></div>

### roles

\{[discord](#module.discord).[GuildRoleObject](#GuildRoleObject)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

\{[discord](#module.discord).[GuildRoleObject](#GuildRoleObject)\}