---
title: "@discord-types/snowflake/init"
description: "API reference for @discord-types/snowflake/init"
---

<div id="@discord-types/snowflake/init"></div>

# @discord-types/snowflake/init

<div id="Types"></div>

## Types

<div id="Snowflake"></div>

## Snowflake

<details>
<summary>Raw Type</summary>

```luau
type Snowflake = Snowflake.Prototype, & {
	snowflake: string
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"snowflake": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
</details>

<div id="Functions"></div>

# Functions

<div id="Snowflake.Prototype.getTimestamp"></div>

## Snowflake.Prototype.getTimestamp

\[\[
	Returns the timestamp of the snowflake
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Returns the timestamp of the snowflake
]]
function Snowflake.Prototype.getTimestamp(self: Snowflake) end
```

</details>

<div id="Snowflake.Prototype.getInternalWorkerId"></div>

## Snowflake.Prototype.getInternalWorkerId

\[\[
	Returns the internal worker ID of the snowflake
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Returns the internal worker ID of the snowflake
]]
function Snowflake.Prototype.getInternalWorkerId(self: Snowflake) end
```

</details>

<div id="Snowflake.Prototype.getInternalProcessId"></div>

## Snowflake.Prototype.getInternalProcessId

\[\[
	Returns the internal process ID of the snowflake
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Returns the internal process ID of the snowflake
]]
function Snowflake.Prototype.getInternalProcessId(self: Snowflake) end
```

</details>

<div id="Snowflake.Prototype.getIncrement"></div>

## Snowflake.Prototype.getIncrement

\[\[
	Returns the increment of the snowflake
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Returns the increment of the snowflake
]]
function Snowflake.Prototype.getIncrement(self: Snowflake) end
```

</details>

<div id="Snowflake.Interface.new"></div>

## Snowflake.Interface.new

\[\[
	Creates a new snowflake
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Creates a new snowflake
]]
function Snowflake.Interface.new(snowflake: string) -> Snowflake end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="snowflake"></div>

### snowflake

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Snowflake](#Snowflake)