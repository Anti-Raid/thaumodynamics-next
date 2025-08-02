---
title: "@discord-types/builders/embed/field"
description: "API reference for @discord-types/builders/embed/field"
---

<div id="@discord-types/builders/embed/field"></div>

# @discord-types/builders/embed/field

<div id="Types"></div>

## Types

<div id="Field"></div>

## Field

<details>
<summary>Raw Type</summary>

```luau
type Field = Field.Prototype, & {
	name: string?,

	value: string?,

	inline: boolean?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"name": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"value": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"inline": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
	}}
/>
</details>

<div id="JSON"></div>

## JSON

<details>
<summary>Raw Type</summary>

```luau
type JSON = Field.Prototype.build({} :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Field.Prototype.setName"></div>

## Field.Prototype.setName

\[\[
	Set the name of the field
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the name of the field
]]
function Field.Prototype.setName(self: Field, name: string) -> Field end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="name"></div>

### name

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Field](#Field)<div id="Field.Prototype.setValue"></div>

## Field.Prototype.setValue

\[\[
	Set the value of the field
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the value of the field
]]
function Field.Prototype.setValue(self: Field, value: string) -> Field end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="value"></div>

### value

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Field](#Field)<div id="Field.Prototype.setIsInline"></div>

## Field.Prototype.setIsInline

\[\[
	Set if the field is inline.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set if the field is inline.
]]
function Field.Prototype.setIsInline(self: Field, isInline: boolean) -> Field end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="isInline"></div>

### isInline

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Field](#Field)<div id="Field.Prototype.build"></div>

## Field.Prototype.build

\[\[
	Responsible for building the Field JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the Field JSON that can be parsed by the Discord API.
]]
function Field.Prototype.build(self: Field) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Field.Interface.new"></div>

## Field.Interface.new

\[\[
	Responsible for creating a new Field.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Field.

	\`\`\`lua
	
	\`\`\`
]]
function Field.Interface.new(resource: {
		name: string?,

		value: string?,

		inline: boolean?
	}?) -> Field end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{name: [string](#string)?, value: [string](#string)?, inline: [boolean](#boolean)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Field](#Field)