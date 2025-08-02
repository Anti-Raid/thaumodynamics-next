---
title: "@discord-types/builders/message/poll/media"
description: "API reference for @discord-types/builders/message/poll/media"
---

<div id="@discord-types/builders/message/poll/media"></div>

# @discord-types/builders/message/poll/media

<div id="Types"></div>

## Types

<div id="PollMedia"></div>

## PollMedia

<details>
<summary>Raw Type</summary>

```luau
type PollMedia = PollMedia.Prototype, & {
	text: string?,

	emoji: emojiBuilder.JSON?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"text": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"emoji": {
			type: "[emojiBuilder](#module.emojiBuilder).[JSON](#JSON)?",
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
type JSON = PollMedia.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="PollMedia.Prototype.setText"></div>

## PollMedia.Prototype.setText

\[\[
	Sets the text for the PollMedia.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the text for the PollMedia.
]]
function PollMedia.Prototype.setText(self: PollMedia, text: string) -> PollMedia end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="text"></div>

### text

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[PollMedia](#PollMedia)<div id="PollMedia.Prototype.setEmoji"></div>

## PollMedia.Prototype.setEmoji

\[\[
	Responsible for setting the emoji for the PollMedia.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for setting the emoji for the PollMedia.
]]
function PollMedia.Prototype.setEmoji(self: PollMedia, emoji: emojiBuilder.JSON) -> PollMedia end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="emoji"></div>

### emoji

[emojiBuilder](#module.emojiBuilder).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[PollMedia](#PollMedia)<div id="PollMedia.Prototype.build"></div>

## PollMedia.Prototype.build

\[\[
	Responsible for building the PollMedia JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the PollMedia JSON that can be parsed by the Discord API.
]]
function PollMedia.Prototype.build(self: PollMedia) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="PollMedia.Interface.new"></div>

## PollMedia.Interface.new

\[\[
	Responsible for creating a new PollMedia.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new PollMedia.

	\`\`\`lua
	
	\`\`\`
]]
function PollMedia.Interface.new(resource: {
		text: string?,

		emoji: emojiBuilder.JSON?
	}?) -> PollMedia end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{text: [string](#string)?, emoji: [emojiBuilder](#module.emojiBuilder).[JSON](#JSON)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[PollMedia](#PollMedia)