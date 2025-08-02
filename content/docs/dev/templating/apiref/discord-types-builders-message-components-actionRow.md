---
title: "@discord-types/builders/message/components/actionRow"
description: "API reference for @discord-types/builders/message/components/actionRow"
---

<div id="@discord-types/builders/message/components/actionRow"></div>

# @discord-types/builders/message/components/actionRow

<div id="Types"></div>

## Types

<div id="ActionRow"></div>

## ActionRow

<details>
<summary>Raw Type</summary>

```luau
type ActionRow = ActionRow.Prototype, & {
	components: {button.JSON | textInput.JSON | selectMenu.JSON | JSON}
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"components": {
			type: "\{([button](#module.button).[JSON](#JSON) | [textInput](#module.textInput).[JSON](#JSON) | [selectMenu](#module.selectMenu).[JSON](#JSON) | [JSON](#JSON))\}",
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
type JSON = ActionRow.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="ActionRow.Prototype.addComponent"></div>

## ActionRow.Prototype.addComponent

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function ActionRow.Prototype.addComponent(self: ActionRow, component: button.JSON | textInput.JSON | selectMenu.JSON | JSON) -> ActionRow end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="component"></div>

### component

Union with variants:

<details>
<summary>Variant 1</summary>

[button](#module.button).[JSON](#JSON)



</details>

<details>
<summary>Variant 2</summary>

[textInput](#module.textInput).[JSON](#JSON)



</details>

<details>
<summary>Variant 3</summary>

[selectMenu](#module.selectMenu).[JSON](#JSON)



</details>

<details>
<summary>Variant 4</summary>

[JSON](#JSON)

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[ActionRow](#ActionRow)<div id="ActionRow.Prototype.build"></div>

## ActionRow.Prototype.build

\[\[
	Responsible for building the ActionRow JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the ActionRow JSON that can be parsed by the Discord API.
]]
function ActionRow.Prototype.build(self: ActionRow) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="ActionRow.Interface.new"></div>

## ActionRow.Interface.new

\[\[
	Responsible for creating a new ActionRow.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new ActionRow.

	\`\`\`lua
	
	\`\`\`
]]
function ActionRow.Interface.new(resource: {
		components: {button.JSON | textInput.JSON | selectMenu.JSON | JSON}
	}?) -> ActionRow end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{components: \{([button](#module.button).[JSON](#JSON) | [textInput](#module.textInput).[JSON](#JSON) | [selectMenu](#module.selectMenu).[JSON](#JSON) | [JSON](#JSON))\}\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[ActionRow](#ActionRow)