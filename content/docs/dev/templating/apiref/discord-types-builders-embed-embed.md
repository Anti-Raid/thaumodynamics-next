---
title: "@discord-types/builders/embed/embed"
description: "API reference for @discord-types/builders/embed/embed"
---

<div id="@discord-types/builders/embed/embed"></div>

# @discord-types/builders/embed/embed

<div id="Types"></div>

## Types

<div id="Embed"></div>

## Embed

<details>
<summary>Raw Type</summary>

```luau
type Embed = Embed.Prototype, & {
	title: string?,

	type: embedTypes.EmbedType?,

	description: string?,

	url: string?,

	timestamp: number?,

	color: number?,

	footer: embedFooter.JSON?,

	image: embedImage.JSON?,

	thumbnail: embedThumbnail.JSON?,

	video: embedVideo.JSON?,

	provider: embedProvider.JSON?,

	author: embedAuthor.JSON?,

	fields: {embedField.JSON}
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"title": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"type": {
			type: "[embedTypes](#module.embedTypes).[EmbedType](#EmbedType)?",
			description: "",
			required: false
		},
		"description": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"timestamp": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"color": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"footer": {
			type: "[embedFooter](#module.embedFooter).[JSON](#JSON)?",
			description: "",
			required: false
		},
		"image": {
			type: "[embedImage](#module.embedImage).[JSON](#JSON)?",
			description: "",
			required: false
		},
		"thumbnail": {
			type: "[embedThumbnail](#module.embedThumbnail).[JSON](#JSON)?",
			description: "",
			required: false
		},
		"video": {
			type: "[embedVideo](#module.embedVideo).[JSON](#JSON)?",
			description: "",
			required: false
		},
		"provider": {
			type: "[embedProvider](#module.embedProvider).[JSON](#JSON)?",
			description: "",
			required: false
		},
		"author": {
			type: "[embedAuthor](#module.embedAuthor).[JSON](#JSON)?",
			description: "",
			required: false
		},
		"fields": {
			type: "\{[embedField](#module.embedField).[JSON](#JSON)\}",
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
type JSON = Embed.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Embed.Prototype.setTitle"></div>

## Embed.Prototype.setTitle

\[\[
	Set the title of the embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the title of the embed.
]]
function Embed.Prototype.setTitle(self: Embed, title: string) -> Embed end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="title"></div>

### title

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Embed](#Embed)<div id="Embed.Prototype.setType"></div>

## Embed.Prototype.setType

\[\[
	Sets the Type of the embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the Type of the embed.
]]
function Embed.Prototype.setType(self: Embed, type: embedTypes.EmbedType) -> Embed end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="type"></div>

### type

[embedTypes](#module.embedTypes).[EmbedType](#EmbedType)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Embed](#Embed)<div id="Embed.Prototype.setDescription"></div>

## Embed.Prototype.setDescription

\[\[
	Set the description of the embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the description of the embed.
]]
function Embed.Prototype.setDescription(self: Embed, description: string) -> Embed end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="description"></div>

### description

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Embed](#Embed)<div id="Embed.Prototype.setUrl"></div>

## Embed.Prototype.setUrl

\[\[
	Set the URL of the embed, URL will provide a hyperlinked title.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the URL of the embed, URL will provide a hyperlinked title.
]]
function Embed.Prototype.setUrl(self: Embed, url: string) -> Embed end
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

[Embed](#Embed)<div id="Embed.Prototype.setTimestamp"></div>

## Embed.Prototype.setTimestamp

\[\[
	Set the timestamp of the embed, timestamps will exist at the bottom/footer of the embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the timestamp of the embed, timestamps will exist at the bottom/footer of the embed.
]]
function Embed.Prototype.setTimestamp(self: Embed, timestamp: datetime.DateTime) -> Embed end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="timestamp"></div>

### timestamp

[datetime](#module.datetime).[DateTime](#DateTime)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Embed](#Embed)<div id="Embed.Prototype.setColor"></div>

## Embed.Prototype.setColor

\[\[
	Set the color of the embed, colors are numbers and in luau you can render hex as: 0x&lt;HEX&gt;

	example:
		- Red Color: 0xFF0000
		- Green Color: 0x00FF00
		- Blue Clor: 0x0000FF
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the color of the embed, colors are numbers and in luau you can render hex as: 0x<HEX>

	example:
		- Red Color: 0xFF0000
		- Green Color: 0x00FF00
		- Blue Clor: 0x0000FF
]]
function Embed.Prototype.setColor(self: Embed, color: number) -> Embed end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="color"></div>

### color

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Embed](#Embed)<div id="Embed.Prototype.setFooter"></div>

## Embed.Prototype.setFooter

\[\[
	Set the footer of the embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the footer of the embed.
]]
function Embed.Prototype.setFooter(self: Embed, footer: embedFooter.JSON) -> Embed end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="footer"></div>

### footer

[embedFooter](#module.embedFooter).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Embed](#Embed)<div id="Embed.Prototype.setImage"></div>

## Embed.Prototype.setImage

\[\[
	Set the image of the embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the image of the embed.
]]
function Embed.Prototype.setImage(self: Embed, image: embedImage.JSON) -> Embed end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="image"></div>

### image

[embedImage](#module.embedImage).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Embed](#Embed)<div id="Embed.Prototype.setThumbnail"></div>

## Embed.Prototype.setThumbnail

\[\[
	Set the thumbnail of the embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the thumbnail of the embed.
]]
function Embed.Prototype.setThumbnail(self: Embed, thumbnail: embedThumbnail.JSON) -> Embed end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="thumbnail"></div>

### thumbnail

[embedThumbnail](#module.embedThumbnail).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Embed](#Embed)<div id="Embed.Prototype.setVideo"></div>

## Embed.Prototype.setVideo

\[\[
	Set the video of the embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the video of the embed.
]]
function Embed.Prototype.setVideo(self: Embed, video: embedVideo.JSON) -> Embed end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="video"></div>

### video

[embedVideo](#module.embedVideo).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Embed](#Embed)<div id="Embed.Prototype.setProvider"></div>

## Embed.Prototype.setProvider

\[\[
	Set the provider of the embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the provider of the embed.
]]
function Embed.Prototype.setProvider(self: Embed, provider: embedProvider.JSON) -> Embed end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="provider"></div>

### provider

[embedProvider](#module.embedProvider).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Embed](#Embed)<div id="Embed.Prototype.setAuthor"></div>

## Embed.Prototype.setAuthor

\[\[
	Set the author of the embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the author of the embed.
]]
function Embed.Prototype.setAuthor(self: Embed, author: embedAuthor.JSON) -> Embed end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="author"></div>

### author

[embedAuthor](#module.embedAuthor).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Embed](#Embed)<div id="Embed.Prototype.addField"></div>

## Embed.Prototype.addField

\[\[
	Add a field to the embeds.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Add a field to the embeds.
]]
function Embed.Prototype.addField(self: Embed, field: embedField.JSON) -> Embed end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="field"></div>

### field

[embedField](#module.embedField).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Embed](#Embed)<div id="Embed.Prototype.build"></div>

## Embed.Prototype.build

\[\[
	Responsible for building the Embed JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the Embed JSON that can be parsed by the Discord API.
]]
function Embed.Prototype.build(self: Embed) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Embed.Interface.new"></div>

## Embed.Interface.new

\[\[
	Responsible for creating a new Embed.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Embed.

	\`\`\`lua
	
	\`\`\`
]]
function Embed.Interface.new(resource: {
		title: string?,

		type: embedTypes.EmbedType?,

		description: string?,

		url: string?,

		timestamp: datetime.DateTime?,

		color: number?,

		footer: embedFooter.JSON?,

		image: embedImage.JSON?,

		thumbnail: embedThumbnail.JSON?,

		video: embedVideo.JSON?,

		provider: embedProvider.JSON?,

		author: embedAuthor.JSON?,

		fields: {embedField.JSON}
	}?) -> Embed end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{title: [string](#string)?, type: [embedTypes](#module.embedTypes).[EmbedType](#EmbedType)?, description: [string](#string)?, url: [string](#string)?, timestamp: [datetime](#module.datetime).[DateTime](#DateTime)?, color: [number](#number)?, footer: [embedFooter](#module.embedFooter).[JSON](#JSON)?, image: [embedImage](#module.embedImage).[JSON](#JSON)?, thumbnail: [embedThumbnail](#module.embedThumbnail).[JSON](#JSON)?, video: [embedVideo](#module.embedVideo).[JSON](#JSON)?, provider: [embedProvider](#module.embedProvider).[JSON](#JSON)?, author: [embedAuthor](#module.embedAuthor).[JSON](#JSON)?, fields: \{[embedField](#module.embedField).[JSON](#JSON)\}\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Embed](#Embed)