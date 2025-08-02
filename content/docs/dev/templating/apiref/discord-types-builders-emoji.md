---
title: "@discord-types/builders/emoji"
description: "API reference for @discord-types/builders/emoji"
---

<div id="@discord-types/builders/emoji"></div>

# @discord-types/builders/emoji

<div id="Types"></div>

## Types

<div id="Emoji"></div>

## Emoji

<details>
<summary>Raw Type</summary>

```luau
type Emoji = Emoji.Prototype, & {
	emojiId: string?,

	emojiName: string?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"emojiId": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"emojiName": {
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
type JSON = Emoji.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Emoji.Prototype.setId"></div>

## Emoji.Prototype.setId

\[\[
	Set the ID of the emoji to use.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the ID of the emoji to use.
]]
function Emoji.Prototype.setId(self: Emoji, emojiId: string) -> Emoji end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="emojiId"></div>

### emojiId

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Emoji](#Emoji)<div id="Emoji.Prototype.setName"></div>

## Emoji.Prototype.setName

\[\[
	Set the name of the emoji to use.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the name of the emoji to use.
]]
function Emoji.Prototype.setName(self: Emoji, emojiName: string) -> Emoji end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="emojiName"></div>

### emojiName

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Emoji](#Emoji)<div id="Emoji.Prototype.build"></div>

## Emoji.Prototype.build

\[\[
	Responsible for building the Emoji JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the Emoji JSON that can be parsed by the Discord API.
]]
function Emoji.Prototype.build(self: Emoji) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Emoji.Interface.new"></div>

## Emoji.Interface.new

\[\[
	Responsible for creating a new Emoji.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Emoji.

	\`\`\`lua
	
	\`\`\`
]]
function Emoji.Interface.new(resource: {
		emojiId: string,

		emojiName: string
	}?) -> Emoji end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{emojiId: [string](#string), emojiName: [string](#string)\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Emoji](#Emoji)