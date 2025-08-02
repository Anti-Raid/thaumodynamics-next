---
title: "@discord-types/builders/automoderation/action/action"
description: "API reference for @discord-types/builders/automoderation/action/action"
---

<div id="@discord-types/builders/automoderation/action/action"></div>

# @discord-types/builders/automoderation/action/action

<div id="Types"></div>

## Types

<div id="Action"></div>

## Action

<details>
<summary>Raw Type</summary>

```luau
type Action = Action.Prototype, & {
	type: apiTypes.AutomoderationActionType,

	metadata: metadata.JSON?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"type": {
			type: "[apiTypes](#module.apiTypes).[AutomoderationActionType](#AutomoderationActionType)",
			description: "",
			required: true
		},
		"metadata": {
			type: "[metadata](#module.metadata).[JSON](#JSON)?",
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
type JSON = Action.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Action.Prototype.setType"></div>

## Action.Prototype.setType

\[\[
	Sets the type of the action.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the type of the action.
]]
function Action.Prototype.setType(self: Action, type: apiTypes.AutomoderationActionType) -> Action end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="type"></div>

### type

[apiTypes](#module.apiTypes).[AutomoderationActionType](#AutomoderationActionType)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Action](#Action)<div id="Action.Prototype.setMetadata"></div>

## Action.Prototype.setMetadata

\[\[
	Sets the action metadata.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the action metadata.
]]
function Action.Prototype.setMetadata(self: Action, metadata: metadata.JSON) -> Action end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="metadata"></div>

### metadata

[metadata](#module.metadata).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Action](#Action)<div id="Action.Prototype.build"></div>

## Action.Prototype.build

\[\[
	Builds the action object.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Builds the action object.
]]
function Action.Prototype.build(self: Action) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Action.Interface.new"></div>

## Action.Interface.new

\[\[
	Responsible for creating a new Action.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Action.

	\`\`\`lua
	
	\`\`\`
]]
function Action.Interface.new(resource: {
		type: apiTypes.AutomoderationActionType?,

		metadata: metadata.JSON?
	}?) -> Action end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{type: [apiTypes](#module.apiTypes).[AutomoderationActionType](#AutomoderationActionType)?, metadata: [metadata](#module.metadata).[JSON](#JSON)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Action](#Action)