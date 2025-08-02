---
title: "@discord-types/builders/message/allowedMention"
description: "API reference for @discord-types/builders/message/allowedMention"
---

<div id="@discord-types/builders/message/allowedMention"></div>

# @discord-types/builders/message/allowedMention

<div id="Types"></div>

## Types

<div id="AllowedMention"></div>

## AllowedMention

<details>
<summary>Raw Type</summary>

```luau
type AllowedMention = AllowedMention.Prototype, & {
	parse: {apiTypes.AllowedMentionTypes},

	roles: {apiTypes.Snowflake},

	users: {apiTypes.Snowflake},

	repliedUser: boolean?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"parse": {
			type: "\{[apiTypes](#module.apiTypes).[AllowedMentionTypes](#AllowedMentionTypes)\}",
			description: "",
			required: true
		},
		"roles": {
			type: "\{[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)\}",
			description: "",
			required: true
		},
		"users": {
			type: "\{[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)\}",
			description: "",
			required: true
		},
		"repliedUser": {
			type: "[boolean](#boolean)?",
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
type JSON = AllowedMention.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="AllowedMention.Prototype.addUserMention"></div>

## AllowedMention.Prototype.addUserMention

\[\[
	Add a user mention to the allowed mentions for this message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Add a user mention to the allowed mentions for this message.
]]
function AllowedMention.Prototype.addUserMention(self: AllowedMention, userId: string) -> AllowedMention end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="userId"></div>

### userId

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[AllowedMention](#AllowedMention)<div id="AllowedMention.Prototype.addRoleMention"></div>

## AllowedMention.Prototype.addRoleMention

\[\[
	Add a role mention to the allowed mentions for this message.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Add a role mention to the allowed mentions for this message.
]]
function AllowedMention.Prototype.addRoleMention(self: AllowedMention, roleId: string) -> AllowedMention end
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

[AllowedMention](#AllowedMention)<div id="AllowedMention.Prototype.setRepliedUser"></div>

## AllowedMention.Prototype.setRepliedUser

\[\[
	For replies, whether to mention the author of the message being replied to (default false)
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	For replies, whether to mention the author of the message being replied to (default false)
]]
function AllowedMention.Prototype.setRepliedUser(self: AllowedMention, repliedUser: boolean) -> AllowedMention end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="repliedUser"></div>

### repliedUser

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[AllowedMention](#AllowedMention)<div id="AllowedMention.Prototype.setMentionsEveryone"></div>

## AllowedMention.Prototype.setMentionsEveryone

\[\[
	Controls @everyone and @here mentions
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Controls @everyone and @here mentions
]]
function AllowedMention.Prototype.setMentionsEveryone(self: AllowedMention, mentionsEveryone: boolean) -> AllowedMention end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="mentionsEveryone"></div>

### mentionsEveryone

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[AllowedMention](#AllowedMention)<div id="AllowedMention.Prototype.build"></div>

## AllowedMention.Prototype.build

\[\[
	Responsible for building the AllowedMention JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the AllowedMention JSON that can be parsed by the Discord API.
]]
function AllowedMention.Prototype.build(self: AllowedMention) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="AllowedMention.Interface.new"></div>

## AllowedMention.Interface.new

\[\[
	Responsible for creating a new AllowedMention.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new AllowedMention.

	\`\`\`lua
	
	\`\`\`
]]
function AllowedMention.Interface.new(resource: {
		roles: {apiTypes.Snowflake},

		users: {apiTypes.Snowflake},

		repliedUser: boolean?,

		mentionsEveryone: boolean?
	}?) -> AllowedMention end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{roles: \{[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)\}, users: \{[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)\}, repliedUser: [boolean](#boolean)?, mentionsEveryone: [boolean](#boolean)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[AllowedMention](#AllowedMention)