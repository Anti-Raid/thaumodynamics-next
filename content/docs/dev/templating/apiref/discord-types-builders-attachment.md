---
title: "@discord-types/builders/attachment"
description: "API reference for @discord-types/builders/attachment"
---

<div id="@discord-types/builders/attachment"></div>

# @discord-types/builders/attachment

<div id="Types"></div>

## Types

<div id="Attachment"></div>

## Attachment

<details>
<summary>Raw Type</summary>

```luau
type Attachment = Attachment.Prototype, & {
	attachmentId: string?,

	filename: string?,

	description: string?,

	content: {Primitives.u8}?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"attachmentId": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"filename": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"description": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"content": {
			type: "\{[Primitives](#module.Primitives).[u8](#u8)\}?",
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
type JSON = Attachment.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Attachment.Prototype.setId"></div>

## Attachment.Prototype.setId

\[\[
	Set the ID of the Attachment to use.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the ID of the Attachment to use.
]]
function Attachment.Prototype.setId(self: Attachment, attachmentId: string?) -> Attachment end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="attachmentId"></div>

### attachmentId

*This field is optional and may not be specified*

[string](#string)?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Attachment](#Attachment)<div id="Attachment.Prototype.setFilename"></div>

## Attachment.Prototype.setFilename

\[\[
    pub filename: String,
    pub description: Option&lt;String&gt;,
    pub content: Vec&lt;u8&gt;,
\]\]



\[\[
	Set the filename of the Attachment to use.
\]\]



<details>
<summary>Function Signature</summary>

```luau
--[[
    pub filename: String,
    pub description: Option<String>,
    pub content: Vec<u8>,
]]
--[[
	Set the filename of the Attachment to use.
]]
function Attachment.Prototype.setFilename(self: Attachment, filename: string) -> Attachment end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="filename"></div>

### filename

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Attachment](#Attachment)<div id="Attachment.Prototype.setDescription"></div>

## Attachment.Prototype.setDescription

\[\[
	Set the description of the Attachment to use.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the description of the Attachment to use.
]]
function Attachment.Prototype.setDescription(self: Attachment, description: string?) -> Attachment end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="description"></div>

### description

*This field is optional and may not be specified*

[string](#string)?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Attachment](#Attachment)<div id="Attachment.Prototype.setContent"></div>

## Attachment.Prototype.setContent

\[\[
	Set the content of the Attachment to use.
\]\]



<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the content of the Attachment to use.
]]
function Attachment.Prototype.setContent(self: Attachment, content: {Primitives.u8}) -> Attachment end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="content"></div>

### content

\{[Primitives](#module.Primitives).[u8](#u8)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Attachment](#Attachment)<div id="Attachment.Prototype.build"></div>

## Attachment.Prototype.build

\[\[
	Responsible for building the Attachment JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the Attachment JSON that can be parsed by the Discord API.
]]
function Attachment.Prototype.build(self: Attachment) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Attachment.Interface.new"></div>

## Attachment.Interface.new

\[\[
	Responsible for creating a new Attachment.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Attachment.

	\`\`\`lua
	
	\`\`\`
]]
function Attachment.Interface.new(resource: {
		attachmentId: string?,

		filename: string?,

		description: string?,

		content: {u8}?
	}?) -> Attachment end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{attachmentId: [string](#string)?, filename: [string](#string)?, description: [string](#string)?, content: \{[u8](#u8)\}?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Attachment](#Attachment)