---
title: "@discord-types/builders/defaultReaction"
description: "API reference for @discord-types/builders/defaultReaction"
---

<div id="@discord-types/builders/defaultReaction"></div>

# @discord-types/builders/defaultReaction

<div id="Types"></div>

## Types

<div id="DefaultReaction"></div>

## DefaultReaction

<details>
<summary>Raw Type</summary>

```luau
type DefaultReaction = DefaultReaction.Prototype, & {
	emojiId: apiTypes.Snowflake?,

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
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
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
type JSON = DefaultReaction.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="DefaultReaction.Prototype.build"></div>

## DefaultReaction.Prototype.build

\[\[
	Responsible for buillding the default reaction object that the Discord API can understand.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for buillding the default reaction object that the Discord API can understand.
]]
function DefaultReaction.Prototype.build(self: DefaultReaction) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="DefaultReaction.Interface.new"></div>

## DefaultReaction.Interface.new

\[\[
	Constructor for the Discord Default Reaction Builder.

	\`\`\`lua
	local defaultReaction = DefaultReaction.new("000000000000000000", "secret-emoji"):build()
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Constructor for the Discord Default Reaction Builder.

	\`\`\`lua
	local defaultReaction = DefaultReaction.new("000000000000000000", "secret-emoji"):build()
	\`\`\`
]]
function DefaultReaction.Interface.new(resource: {
		emojiId: apiTypes.Snowflake?,

		emojiName: string?
	}) -> DefaultReaction end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

<TypeTable
	type={{
		"emojiId": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
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
<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[DefaultReaction](#DefaultReaction)