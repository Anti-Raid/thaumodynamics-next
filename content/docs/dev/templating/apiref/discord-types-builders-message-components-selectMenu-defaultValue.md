---
title: "@discord-types/builders/message/components/selectMenu/defaultValue"
description: "API reference for @discord-types/builders/message/components/selectMenu/defaultValue"
---

<div id="@discord-types/builders/message/components/selectMenu/defaultValue"></div>

# @discord-types/builders/message/components/selectMenu/defaultValue

<div id="Types"></div>

## Types

<div id="DefaultValue"></div>

## DefaultValue

<details>
<summary>Raw Type</summary>

```luau
type DefaultValue = DefaultValue.Prototype, & {
	id: string,

	type: messageTypes.SelectDefaultValueType
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"type": {
			type: "[messageTypes](#module.messageTypes).[SelectDefaultValueType](#SelectDefaultValueType)",
			description: "",
			required: true
		},
	}}
/>
</details>

<div id="JSON"></div>

## JSON

<details>
<summary>Raw Type</summary>

```luau
type JSON = DefaultValue.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="DefaultValue.Prototype.setId"></div>

## DefaultValue.Prototype.setId

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function DefaultValue.Prototype.setId(self: DefaultValue, id: string) -> DefaultValue end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="id"></div>

### id

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[DefaultValue](#DefaultValue)<div id="DefaultValue.Prototype.setType"></div>

## DefaultValue.Prototype.setType

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function DefaultValue.Prototype.setType(self: DefaultValue, type: messageTypes.SelectDefaultValueType) -> DefaultValue end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="type"></div>

### type

[messageTypes](#module.messageTypes).[SelectDefaultValueType](#SelectDefaultValueType)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[DefaultValue](#DefaultValue)<div id="DefaultValue.Prototype.build"></div>

## DefaultValue.Prototype.build

\[\[
	Responsible for building the DefaultValue JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the DefaultValue JSON that can be parsed by the Discord API.
]]
function DefaultValue.Prototype.build(self: DefaultValue) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="DefaultValue.Interface.new"></div>

## DefaultValue.Interface.new

\[\[
	Responsible for creating a new DefaultValue.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new DefaultValue.

	\`\`\`lua
	
	\`\`\`
]]
function DefaultValue.Interface.new(resource: {
		id: string,

		type: messageTypes.SelectDefaultValueType
	}?) -> DefaultValue end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{id: [string](#string), type: [messageTypes](#module.messageTypes).[SelectDefaultValueType](#SelectDefaultValueType)\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[DefaultValue](#DefaultValue)