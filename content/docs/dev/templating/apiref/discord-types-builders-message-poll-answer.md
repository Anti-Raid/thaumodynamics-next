---
title: "@discord-types/builders/message/poll/answer"
description: "API reference for @discord-types/builders/message/poll/answer"
---

<div id="@discord-types/builders/message/poll/answer"></div>

# @discord-types/builders/message/poll/answer

<div id="Types"></div>

## Types

<div id="PollAnswer"></div>

## PollAnswer

<details>
<summary>Raw Type</summary>

```luau
type PollAnswer = PollAnswer.Prototype, & {
	answerId: number?,

	pollMedia: mediaBuilder.JSON?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"answerId": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"pollMedia": {
			type: "[mediaBuilder](#module.mediaBuilder).[JSON](#JSON)?",
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
type JSON = PollAnswer.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="PollAnswer.Prototype.setId"></div>

## PollAnswer.Prototype.setId

\[\[
	Sets the ID for the poll answer.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the ID for the poll answer.
]]
function PollAnswer.Prototype.setId(self: PollAnswer, id: number) -> PollAnswer end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="id"></div>

### id

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[PollAnswer](#PollAnswer)<div id="PollAnswer.Prototype.setMedia"></div>

## PollAnswer.Prototype.setMedia

\[\[
	Sets the media for the poll answer.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the media for the poll answer.
]]
function PollAnswer.Prototype.setMedia(self: PollAnswer, media: mediaBuilder.JSON) -> PollAnswer end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="media"></div>

### media

[mediaBuilder](#module.mediaBuilder).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[PollAnswer](#PollAnswer)<div id="PollAnswer.Prototype.build"></div>

## PollAnswer.Prototype.build

\[\[
	Responsible for building the PollAnswer JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the PollAnswer JSON that can be parsed by the Discord API.
]]
function PollAnswer.Prototype.build(self: PollAnswer) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="PollAnswer.Interface.new"></div>

## PollAnswer.Interface.new

\[\[
	Responsible for creating a new PollAnswer.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new PollAnswer.

	\`\`\`lua
	
	\`\`\`
]]
function PollAnswer.Interface.new(resource: {
		answerId: number?,

		pollMedia: mediaBuilder.JSON?
	}?) -> PollAnswer end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{answerId: [number](#number)?, pollMedia: [mediaBuilder](#module.mediaBuilder).[JSON](#JSON)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[PollAnswer](#PollAnswer)