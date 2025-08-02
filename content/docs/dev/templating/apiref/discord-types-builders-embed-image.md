---
title: "@discord-types/builders/embed/image"
description: "API reference for @discord-types/builders/embed/image"
---

<div id="@discord-types/builders/embed/image"></div>

# @discord-types/builders/embed/image

<div id="Types"></div>

## Types

<div id="Image"></div>

## Image

<details>
<summary>Raw Type</summary>

```luau
type Image = Image.Prototype, & {
	url: string,

	proxyUrl: string?,

	height: number?,

	width: number?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"url": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"proxyUrl": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"height": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"width": {
			type: "[number](#number)?",
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
type JSON = Image.Prototype.build({} :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Image.Prototype.setUrl"></div>

## Image.Prototype.setUrl

\[\[
	Set the image url for this embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the image url for this embed.
]]
function Image.Prototype.setUrl(self: Image, url: string, proxyUrl: string?) -> Image end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="url"></div>

### url

[string](#string)

<div id="proxyUrl"></div>

### proxyUrl

*This field is optional and may not be specified*

[string](#string)?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Image](#Image)<div id="Image.Prototype.setHeight"></div>

## Image.Prototype.setHeight

\[\[
	Set the image height for this embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the image height for this embed.
]]
function Image.Prototype.setHeight(self: Image, height: number) -> Image end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="height"></div>

### height

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Image](#Image)<div id="Image.Prototype.setWidth"></div>

## Image.Prototype.setWidth

\[\[
	Set the image width for this embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the image width for this embed.
]]
function Image.Prototype.setWidth(self: Image, width: number) -> Image end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="width"></div>

### width

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Image](#Image)<div id="Image.Prototype.build"></div>

## Image.Prototype.build

\[\[
	Responsible for building the function Image.Prototype.build(self: Image): JSON
 JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the function Image.Prototype.build(self: Image): JSON
 JSON that can be parsed by the Discord API.
]]
function Image.Prototype.build(self: Image) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Image.Interface.new"></div>

## Image.Interface.new

\[\[
	Responsible for creating a new Image.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Image.

	\`\`\`lua
	
	\`\`\`
]]
function Image.Interface.new(resource: {
		url: string,

		proxyUrl: string?,

		height: number?,

		width: number?
	}?) -> Image end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{url: [string](#string), proxyUrl: [string](#string)?, height: [number](#number)?, width: [number](#number)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Image](#Image)