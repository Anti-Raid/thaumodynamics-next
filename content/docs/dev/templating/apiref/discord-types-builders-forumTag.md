---
title: "@discord-types/builders/forumTag"
description: "API reference for @discord-types/builders/forumTag"
---

<div id="@discord-types/builders/forumTag"></div>

# @discord-types/builders/forumTag

<div id="Types"></div>

## Types

<div id="ForumTag"></div>

## ForumTag

<details>
<summary>Raw Type</summary>

```luau
type ForumTag = ForumTag.Prototype, & {
	emojiId: apiTypes.Snowflake?,

	emojiName: string?,

	id: apiTypes.Snowflake?,

	moderated: boolean,

	name: string
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
		"id": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"moderated": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
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
type JSON = ForumTag.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="ForumTag.Prototype.setEmoji"></div>

## ForumTag.Prototype.setEmoji

\[\[
	Sets either the id of a guilds custom emoji, or a unicode character of an emoji.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets either the id of a guilds custom emoji, or a unicode character of an emoji.
]]
function ForumTag.Prototype.setEmoji(self: ForumTag, emojiId: string?, emojiName: string?) -> ForumTag end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="emojiId"></div>

### emojiId

*This field is optional and may not be specified*

[string](#string)?

<div id="emojiName"></div>

### emojiName

*This field is optional and may not be specified*

[string](#string)?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[ForumTag](#ForumTag)<div id="ForumTag.Prototype.setModerated"></div>

## ForumTag.Prototype.setModerated

\[\[
	Sets whether this tag can only be added to or removed from threads by a member with the MANAGE_THREADS permission
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets whether this tag can only be added to or removed from threads by a member with the MANAGE_THREADS permission
]]
function ForumTag.Prototype.setModerated(self: ForumTag, isModerated: boolean) -> ForumTag end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="isModerated"></div>

### isModerated

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[ForumTag](#ForumTag)<div id="ForumTag.Prototype.setName"></div>

## ForumTag.Prototype.setName

\[\[
	Set the name of this Forum Tag.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the name of this Forum Tag.
]]
function ForumTag.Prototype.setName(self: ForumTag, tagName: string) -> ForumTag end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="tagName"></div>

### tagName

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[ForumTag](#ForumTag)<div id="ForumTag.Prototype.build"></div>

## ForumTag.Prototype.build

\[\[
	Responsible for buillding the forum tag object that the Discord API can understand.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for buillding the forum tag object that the Discord API can understand.
]]
function ForumTag.Prototype.build(self: ForumTag) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="ForumTag.Interface.new"></div>

## ForumTag.Interface.new

\[\[
	Constructs a new tag builder.

	\`\`\`lua
	local tag = ForumTag.new("tag-name")
	:setModerated(true)	
	:build()
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Constructs a new tag builder.

	\`\`\`lua
	local tag = ForumTag.new("tag-name")
	:setModerated(true)	
	:build()
	\`\`\`
]]
function ForumTag.Interface.new(resource: {
		tagName: string,

		emoji: {
			name: string,

			id: apiTypes.Snowflake
		}?
	}) -> ForumTag end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

<TypeTable
	type={{
		"tagName": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"emoji": {
			type: "\{name: [string](#string), id: [apiTypes](#module.apiTypes).[Snowflake](#Snowflake)\}?",
			description: "",
			required: false
		},
	}}
/>
<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[ForumTag](#ForumTag)<div id="ForumTag.Interface.fromId"></div>

## ForumTag.Interface.fromId

\[\[
	Enables us to construct a Tag Builder object from an existing tag object, used when modifying forum tags.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Enables us to construct a Tag Builder object from an existing tag object, used when modifying forum tags.
]]
function ForumTag.Interface.fromId(resource: {
		tagId: apiTypes.Snowflake,

		tagName: string,

		emoji: {
			name: string,

			id: apiTypes.Snowflake
		}?
	}) -> ForumTag end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

<TypeTable
	type={{
		"tagId": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"tagName": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"emoji": {
			type: "\{name: [string](#string), id: [apiTypes](#module.apiTypes).[Snowflake](#Snowflake)\}?",
			description: "",
			required: false
		},
	}}
/>
<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[ForumTag](#ForumTag)