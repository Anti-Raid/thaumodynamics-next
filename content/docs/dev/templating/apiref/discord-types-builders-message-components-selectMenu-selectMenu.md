---
title: "@discord-types/builders/message/components/selectMenu/selectMenu"
description: "API reference for @discord-types/builders/message/components/selectMenu/selectMenu"
---

<div id="@discord-types/builders/message/components/selectMenu/selectMenu"></div>

# @discord-types/builders/message/components/selectMenu/selectMenu

<div id="Types"></div>

## Types

<div id="SelectMenu"></div>

## SelectMenu

<details>
<summary>Raw Type</summary>

```luau
type SelectMenu = SelectMenu.Prototype, & {
	type: channelTypes.SelectMenuType?,

	customId: string?,

	options: {option.JSON},

	channelTypes: {channelTypes.ChannelType},

	placeholder: string?,

	defaultValues: {defaultValue.JSON},

	minValues: number?,

	maxValues: number?,

	disabled: boolean?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"type": {
			type: "[channelTypes](#module.channelTypes).[SelectMenuType](#SelectMenuType)?",
			description: "",
			required: false
		},
		"customId": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"options": {
			type: "\{[option](#module.option).[JSON](#JSON)\}",
			description: "",
			required: true
		},
		"channelTypes": {
			type: "\{[channelTypes](#module.channelTypes).[ChannelType](#ChannelType)\}",
			description: "",
			required: true
		},
		"placeholder": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"defaultValues": {
			type: "\{[defaultValue](#module.defaultValue).[JSON](#JSON)\}",
			description: "",
			required: true
		},
		"minValues": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"maxValues": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"disabled": {
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
type JSON = SelectMenu.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="SelectMenu.Prototype.setType"></div>

## SelectMenu.Prototype.setType

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function SelectMenu.Prototype.setType(self: SelectMenu, selectMenuType: channelTypes.SelectMenuType) -> SelectMenu end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="selectMenuType"></div>

### selectMenuType

[channelTypes](#module.channelTypes).[SelectMenuType](#SelectMenuType)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[SelectMenu](#SelectMenu)<div id="SelectMenu.Prototype.setCustomId"></div>

## SelectMenu.Prototype.setCustomId

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function SelectMenu.Prototype.setCustomId(self: SelectMenu, customId: string) -> SelectMenu end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="customId"></div>

### customId

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[SelectMenu](#SelectMenu)<div id="SelectMenu.Prototype.setPlaceholder"></div>

## SelectMenu.Prototype.setPlaceholder

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function SelectMenu.Prototype.setPlaceholder(self: SelectMenu, placeholder: string) -> SelectMenu end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="placeholder"></div>

### placeholder

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[SelectMenu](#SelectMenu)<div id="SelectMenu.Prototype.setMinValues"></div>

## SelectMenu.Prototype.setMinValues

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function SelectMenu.Prototype.setMinValues(self: SelectMenu, minValueCount: number) -> SelectMenu end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="minValueCount"></div>

### minValueCount

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[SelectMenu](#SelectMenu)<div id="SelectMenu.Prototype.setMaxValues"></div>

## SelectMenu.Prototype.setMaxValues

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function SelectMenu.Prototype.setMaxValues(self: SelectMenu, maxValueCount: number) -> SelectMenu end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="maxValueCount"></div>

### maxValueCount

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[SelectMenu](#SelectMenu)<div id="SelectMenu.Prototype.setDisabled"></div>

## SelectMenu.Prototype.setDisabled

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function SelectMenu.Prototype.setDisabled(self: SelectMenu, disabled: boolean) -> SelectMenu end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="disabled"></div>

### disabled

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[SelectMenu](#SelectMenu)<div id="SelectMenu.Prototype.addDefaultValue"></div>

## SelectMenu.Prototype.addDefaultValue

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function SelectMenu.Prototype.addDefaultValue(self: SelectMenu, defaultValue: defaultValue.JSON) -> SelectMenu end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="defaultValue"></div>

### defaultValue

[defaultValue](#module.defaultValue).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[SelectMenu](#SelectMenu)<div id="SelectMenu.Prototype.addChannelType"></div>

## SelectMenu.Prototype.addChannelType

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function SelectMenu.Prototype.addChannelType(self: SelectMenu, channelType: channelTypes.ChannelType) -> SelectMenu end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="channelType"></div>

### channelType

[channelTypes](#module.channelTypes).[ChannelType](#ChannelType)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[SelectMenu](#SelectMenu)<div id="SelectMenu.Prototype.addOption"></div>

## SelectMenu.Prototype.addOption

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function SelectMenu.Prototype.addOption(self: SelectMenu, option: option.JSON) -> SelectMenu end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="option"></div>

### option

[option](#module.option).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[SelectMenu](#SelectMenu)<div id="SelectMenu.Prototype.build"></div>

## SelectMenu.Prototype.build

\[\[
	Responsible for building the SelectMenu JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the SelectMenu JSON that can be parsed by the Discord API.
]]
function SelectMenu.Prototype.build(self: SelectMenu) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="SelectMenu.Interface.new"></div>

## SelectMenu.Interface.new

\[\[
	Responsible for creating a new SelectMenu.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new SelectMenu.

	\`\`\`lua
	
	\`\`\`
]]
function SelectMenu.Interface.new(resource: {
		type: channelTypes.SelectMenuType?,

		customId: string?,

		options: {option.JSON},

		channelTypes: {channelTypes.ChannelType},

		placeholder: string?,

		defaultValues: {defaultValue.JSON},

		minValues: number?,

		maxValues: number?,

		disabled: boolean?
	}?) -> SelectMenu end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{type: [channelTypes](#module.channelTypes).[SelectMenuType](#SelectMenuType)?, customId: [string](#string)?, options: \{[option](#module.option).[JSON](#JSON)\}, channelTypes: \{[channelTypes](#module.channelTypes).[ChannelType](#ChannelType)\}, placeholder: [string](#string)?, defaultValues: \{[defaultValue](#module.defaultValue).[JSON](#JSON)\}, minValues: [number](#number)?, maxValues: [number](#number)?, disabled: [boolean](#boolean)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[SelectMenu](#SelectMenu)