---
title: "@discord-types/builders/automoderation/action/metadata"
description: "API reference for @discord-types/builders/automoderation/action/metadata"
---

<div id="@discord-types/builders/automoderation/action/metadata"></div>

# @discord-types/builders/automoderation/action/metadata

<div id="Types"></div>

## Types

<div id="ActionMetadata"></div>

## ActionMetadata

<details>
<summary>Raw Type</summary>

```luau
type ActionMetadata = ActionMetadata.Prototype, & {
	channelId: apiTypes.Snowflake,

	durationSeconds: number,

	customMessage: string?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"channelId": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"durationSeconds": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"customMessage": {
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
type JSON = ActionMetadata.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="ActionMetadata.Prototype.setChannelId"></div>

## ActionMetadata.Prototype.setChannelId

\[\[
	Sets the ID of the channel where the action should be taken.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the ID of the channel where the action should be taken.
]]
function ActionMetadata.Prototype.setChannelId(self: ActionMetadata, channelId: apiTypes.Snowflake) -> ActionMetadata end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="channelId"></div>

### channelId

[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[ActionMetadata](#ActionMetadata)<div id="ActionMetadata.Prototype.setDurationSeconds"></div>

## ActionMetadata.Prototype.setDurationSeconds

\[\[
	Sets the duration of the action in seconds.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the duration of the action in seconds.
]]
function ActionMetadata.Prototype.setDurationSeconds(self: ActionMetadata, durationSeconds: number) -> ActionMetadata end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="durationSeconds"></div>

### durationSeconds

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[ActionMetadata](#ActionMetadata)<div id="ActionMetadata.Prototype.setCustomMessage"></div>

## ActionMetadata.Prototype.setCustomMessage

\[\[
	Sets a custom message to be sent with the action.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets a custom message to be sent with the action.
]]
function ActionMetadata.Prototype.setCustomMessage(self: ActionMetadata, customMessage: string) -> ActionMetadata end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="customMessage"></div>

### customMessage

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[ActionMetadata](#ActionMetadata)<div id="ActionMetadata.Prototype.build"></div>

## ActionMetadata.Prototype.build

\[\[
	Builds the action metadata object.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Builds the action metadata object.
]]
function ActionMetadata.Prototype.build(self: ActionMetadata) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="ActionMetadata.Interface.new"></div>

## ActionMetadata.Interface.new

\[\[
	Responsible for creating a new ActionMetadata.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new ActionMetadata.

	\`\`\`lua
	
	\`\`\`
]]
function ActionMetadata.Interface.new(resource: {
		channelId: apiTypes.Snowflake?,

		durationSeconds: number?,

		customMessage: string?
	}?) -> ActionMetadata end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{channelId: [apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?, durationSeconds: [number](#number)?, customMessage: [string](#string)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[ActionMetadata](#ActionMetadata)