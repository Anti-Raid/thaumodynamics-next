---
title: "@discord-types/builders/guild/widgetSettings"
description: "API reference for @discord-types/builders/guild/widgetSettings"
---

<div id="@discord-types/builders/guild/widgetSettings"></div>

# @discord-types/builders/guild/widgetSettings

<div id="Types"></div>

## Types

<div id="WidgetSettings"></div>

## WidgetSettings

<details>
<summary>Raw Type</summary>

```luau
type WidgetSettings = WidgetSettings.Prototype, & {
	enabled: boolean?,

	channelId: apiTypes.Snowflake?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"enabled": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"channelId": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
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
type JSON = WidgetSettings.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="WidgetSettings.Prototype.setEnabled"></div>

## WidgetSettings.Prototype.setEnabled

\[\[
	Set whether the widget is enabled
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set whether the widget is enabled
]]
function WidgetSettings.Prototype.setEnabled(self: WidgetSettings, enabled: boolean) -> WidgetSettings end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="enabled"></div>

### enabled

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[WidgetSettings](#WidgetSettings)<div id="WidgetSettings.Prototype.setChannelId"></div>

## WidgetSettings.Prototype.setChannelId

\[\[
	Set the widget channel id
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the widget channel id
]]
function WidgetSettings.Prototype.setChannelId(self: WidgetSettings, channelId: string) -> WidgetSettings end
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

[WidgetSettings](#WidgetSettings)<div id="WidgetSettings.Prototype.build"></div>

## WidgetSettings.Prototype.build

\[\[
	Responsible for building the WidgetSettingsObject JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the WidgetSettingsObject JSON that can be parsed by the Discord API.
]]
function WidgetSettings.Prototype.build(self: WidgetSettings) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="WidgetSettings.Interface.new"></div>

## WidgetSettings.Interface.new

\[\[
	Responsible for creating a new WidgetSettings.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new WidgetSettings.

	\`\`\`lua
	
	\`\`\`
]]
function WidgetSettings.Interface.new(resource: {
		enabled: boolean?,

		channelId: string?
	}?) -> WidgetSettings end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{enabled: [boolean](#boolean)?, channelId: [string](#string)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[WidgetSettings](#WidgetSettings)