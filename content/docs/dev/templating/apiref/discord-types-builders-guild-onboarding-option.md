---
title: "@discord-types/builders/guild/onboarding/option"
description: "API reference for @discord-types/builders/guild/onboarding/option"
---

<div id="@discord-types/builders/guild/onboarding/option"></div>

# @discord-types/builders/guild/onboarding/option

<div id="Types"></div>

## Types

<div id="Option"></div>

## Option

<details>
<summary>Raw Type</summary>

```luau
type Option = Option.Prototype, & {
	channelIds: {string},

	roleIds: {string},

	emojiId: string?,

	emojiName: string?,

	emojiAnimated: boolean?,

	title: string,

	description: string?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"channelIds": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
		"roleIds": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
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
		"emojiAnimated": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"title": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"description": {
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
type JSON = Option.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Option.Prototype.addChannelId"></div>

## Option.Prototype.addChannelId

\[\[
	Add a Channel to this option
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Add a Channel to this option
]]
function Option.Prototype.addChannelId(self: Option, channelId: string) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="channelId"></div>

### channelId

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)<div id="Option.Prototype.addRoleId"></div>

## Option.Prototype.addRoleId

\[\[
	Add a Role to this option
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Add a Role to this option
]]
function Option.Prototype.addRoleId(self: Option, roleId: string) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="roleId"></div>

### roleId

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)<div id="Option.Prototype.setEmoji"></div>

## Option.Prototype.setEmoji

\[\[
	Sets the emoji of this option.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the emoji of this option.
]]
function Option.Prototype.setEmoji(self: Option, emojiId: string, emojiName: string, isAnimated: boolean?) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="emojiId"></div>

### emojiId

[string](#string)

<div id="emojiName"></div>

### emojiName

[string](#string)

<div id="isAnimated"></div>

### isAnimated

*This field is optional and may not be specified*

[boolean](#boolean)?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)<div id="Option.Prototype.setTitle"></div>

## Option.Prototype.setTitle

\[\[
	Sets the title of this option.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the title of this option.
]]
function Option.Prototype.setTitle(self: Option, title: string) -> Option end
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

[Option](#Option)<div id="Option.Prototype.setDescription"></div>

## Option.Prototype.setDescription

\[\[
	Sets the description of this option.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the description of this option.
]]
function Option.Prototype.setDescription(self: Option, description: string) -> Option end
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

[Option](#Option)<div id="Option.Prototype.build"></div>

## Option.Prototype.build

\[\[
	Responsible for building the OptionObject JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the OptionObject JSON that can be parsed by the Discord API.
]]
function Option.Prototype.build(self: Option) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Option.Interface.new"></div>

## Option.Interface.new

\[\[
	Responsible for creating a new Option.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Option.

	\`\`\`lua
	
	\`\`\`
]]
function Option.Interface.new(resource: {
		channelIds: {string}?,

		roleIds: {string}?,

		emojiId: string?,

		emojiName: string?,

		emojiAnimated: boolean?,

		title: string?,

		description: string?
	}?) -> Option end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{channelIds: \{[string](#string)\}?, roleIds: \{[string](#string)\}?, emojiId: [string](#string)?, emojiName: [string](#string)?, emojiAnimated: [boolean](#boolean)?, title: [string](#string)?, description: [string](#string)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Option](#Option)