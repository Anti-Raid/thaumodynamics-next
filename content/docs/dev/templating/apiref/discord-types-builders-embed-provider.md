---
title: "@discord-types/builders/embed/provider"
description: "API reference for @discord-types/builders/embed/provider"
---

<div id="@discord-types/builders/embed/provider"></div>

# @discord-types/builders/embed/provider

<div id="Types"></div>

## Types

<div id="Provider"></div>

## Provider

<details>
<summary>Raw Type</summary>

```luau
type Provider = Provider.Prototype, & {
	name: string?,

	url: string?
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
		"url": {
			type: "[string](#string)?",
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
type JSON = Provider.Prototype.build({} :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Provider.Prototype.setName"></div>

## Provider.Prototype.setName

\[\[
	Set the image url for this embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the image url for this embed.
]]
function Provider.Prototype.setName(self: Provider, name: string) -> Provider end
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

[Provider](#Provider)<div id="Provider.Prototype.setUrl"></div>

## Provider.Prototype.setUrl

\[\[
	Set the image height for this embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the image height for this embed.
]]
function Provider.Prototype.setUrl(self: Provider, url: string) -> Provider end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="url"></div>

### url

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Provider](#Provider)<div id="Provider.Prototype.build"></div>

## Provider.Prototype.build

\[\[
	Responsible for building the Provider JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the Provider JSON that can be parsed by the Discord API.
]]
function Provider.Prototype.build(self: Provider) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Provider.Interface.new"></div>

## Provider.Interface.new

\[\[
	Responsible for creating a new Provider.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Provider.

	\`\`\`lua
	
	\`\`\`
]]
function Provider.Interface.new(resource: {
		name: string?,

		url: string?
	}?) -> Provider end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{name: [string](#string)?, url: [string](#string)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Provider](#Provider)