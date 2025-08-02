---
title: "@discord-types/builders/embed/author"
description: "API reference for @discord-types/builders/embed/author"
---

<div id="@discord-types/builders/embed/author"></div>

# @discord-types/builders/embed/author

<div id="Types"></div>

## Types

<div id="Author"></div>

## Author

<details>
<summary>Raw Type</summary>

```luau
type Author = Author.Prototype, & {
	name: string?,

	url: string?,

	iconUrl: string?,

	proxyIconUrl: string?
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
		"iconUrl": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"proxyIconUrl": {
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
type JSON = Author.Prototype.build({} :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Author.Prototype.setName"></div>

## Author.Prototype.setName

\[\[
	Set the image url for this embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the image url for this embed.
]]
function Author.Prototype.setName(self: Author, name: string) -> Author end
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

[Author](#Author)<div id="Author.Prototype.setUrl"></div>

## Author.Prototype.setUrl

\[\[
	Set the image height for this embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the image height for this embed.
]]
function Author.Prototype.setUrl(self: Author, url: string) -> Author end
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

[Author](#Author)<div id="Author.Prototype.setIcon"></div>

## Author.Prototype.setIcon

\[\[
	Set the image height for this embed.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the image height for this embed.
]]
function Author.Prototype.setIcon(self: Author, iconUrl: string, proxyIconUrl: string?) -> Author end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="iconUrl"></div>

### iconUrl

[string](#string)

<div id="proxyIconUrl"></div>

### proxyIconUrl

*This field is optional and may not be specified*

[string](#string)?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Author](#Author)<div id="Author.Prototype.build"></div>

## Author.Prototype.build

\[\[
	Responsible for building the Author JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the Author JSON that can be parsed by the Discord API.
]]
function Author.Prototype.build(self: Author) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Author.Interface.new"></div>

## Author.Interface.new

\[\[
	Responsible for creating a new Author.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Author.

	\`\`\`lua
	
	\`\`\`
]]
function Author.Interface.new(resource: {
		name: string?,

		url: string?,

		iconUrl: string?,

		proxyIconUrl: string?
	}?) -> Author end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{name: [string](#string)?, url: [string](#string)?, iconUrl: [string](#string)?, proxyIconUrl: [string](#string)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Author](#Author)