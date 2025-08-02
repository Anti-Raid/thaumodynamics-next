---
title: "@discord-types/builders/embed/video"
description: "API reference for @discord-types/builders/embed/video"
---

<div id="@discord-types/builders/embed/video"></div>

# @discord-types/builders/embed/video

<div id="Types"></div>

## Types

<div id="Video"></div>

## Video

<details>
<summary>Raw Type</summary>

```luau
type Video = Video.Prototype, & {
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
type JSON = Video.Prototype.build({} :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Video.Prototype.setUrl"></div>

## Video.Prototype.setUrl

\[\[
	Set the image url for this embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the image url for this embed.
]]
function Video.Prototype.setUrl(self: Video, url: string, proxyUrl: string?) -> Video end
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

[Video](#Video)<div id="Video.Prototype.setHeight"></div>

## Video.Prototype.setHeight

\[\[
	Set the image height for this embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the image height for this embed.
]]
function Video.Prototype.setHeight(self: Video, height: number) -> Video end
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

[Video](#Video)<div id="Video.Prototype.setWidth"></div>

## Video.Prototype.setWidth

\[\[
	Set the image width for this embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the image width for this embed.
]]
function Video.Prototype.setWidth(self: Video, width: number) -> Video end
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

[Video](#Video)<div id="Video.Prototype.build"></div>

## Video.Prototype.build

\[\[
	Responsible for building the Video JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the Video JSON that can be parsed by the Discord API.
]]
function Video.Prototype.build(self: Video) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Video.Interface.new"></div>

## Video.Interface.new

\[\[
	Responsible for creating a new Video.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Video.

	\`\`\`lua
	
	\`\`\`
]]
function Video.Interface.new(resource: {
		url: string,

		proxyUrl: string?,

		height: number?,

		width: number?
	}?) -> Video end
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

[Video](#Video)