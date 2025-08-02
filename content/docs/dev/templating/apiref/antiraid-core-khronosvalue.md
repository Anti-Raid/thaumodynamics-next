---
title: "@antiraid-core/khronosvalue"
description: "API reference for @antiraid-core/khronosvalue"
---

<div id="@antiraid-core/khronosvalue"></div>

# @antiraid-core/khronosvalue

<div id="Types"></div>

## Types

<div id="KhronosValue"></div>

## KhronosValue

\[\[
A number, I64, U64, boolean, vector, string, map, list, DateTime, TimeDelta, TimeZone or nil
\]\]

<details>
<summary>Raw Type</summary>

```luau
--[[
A number, I64, U64, boolean, vector, string, map, list, DateTime, TimeDelta, TimeZone or nil
]]
type KhronosValue = string | number | typesext.I64 | typesext.U64 | boolean | vector | {
	[string]: KhronosValue
} | {KhronosValue} | datetime.DateTime | datetime.TimeDelta | datetime.TimeZone | nil | any
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

[string](#string)

</details>

<details>
<summary>Variant 2</summary>

[number](#number)

</details>

<details>
<summary>Variant 3</summary>

[typesext](#module.typesext).[I64](#I64)



</details>

<details>
<summary>Variant 4</summary>

[typesext](#module.typesext).[U64](#U64)



</details>

<details>
<summary>Variant 5</summary>

[boolean](#boolean)

</details>

<details>
<summary>Variant 6</summary>

[vector](#vector)

</details>

<details>
<summary>Variant 7</summary>

<TypeTable
	type={{
		"[string]": {
			type: "[KhronosValue](#KhronosValue)",
			description: "",
			required: true
		},
	}}
/>
</details>

<details>
<summary>Variant 8</summary>

\{[KhronosValue](#KhronosValue)\}

</details>

<details>
<summary>Variant 9</summary>

[datetime](#module.datetime).[DateTime](#DateTime)



</details>

<details>
<summary>Variant 10</summary>

[datetime](#module.datetime).[TimeDelta](#TimeDelta)



</details>

<details>
<summary>Variant 11</summary>

[datetime](#module.datetime).[TimeZone](#TimeZone)



</details>

<details>
<summary>Variant 12</summary>

[nil](#nil)

</details>

<details>
<summary>Variant 13</summary>

[any](#any)

</details>

