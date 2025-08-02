---
title: "@discord-types/builders/guild/welcomeScreen/welcomeScreen"
description: "API reference for @discord-types/builders/guild/welcomeScreen/welcomeScreen"
---

<div id="@discord-types/builders/guild/welcomeScreen/welcomeScreen"></div>

# @discord-types/builders/guild/welcomeScreen/welcomeScreen

<div id="Types"></div>

## Types

<div id="WelcomeScreen"></div>

## WelcomeScreen

<details>
<summary>Raw Type</summary>

```luau
type WelcomeScreen = WelcomeScreen.Prototype, & {
	enabled: boolean?,

	description: string?,

	welcomeChannels: {WelcomeScreenChannel.JSON}
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
		"description": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"welcomeChannels": {
			type: "\{[WelcomeScreenChannel](#module.WelcomeScreenChannel).[JSON](#JSON)\}",
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
type JSON = WelcomeScreen.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="WelcomeScreen.Prototype.setEnabled"></div>

## WelcomeScreen.Prototype.setEnabled

\[\[
	Set weather the welcome screen is enabled or not.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set weather the welcome screen is enabled or not.
]]
function WelcomeScreen.Prototype.setEnabled(self: WelcomeScreen, enabled: boolean) -> WelcomeScreen end
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

[WelcomeScreen](#WelcomeScreen)<div id="WelcomeScreen.Prototype.setDescription"></div>

## WelcomeScreen.Prototype.setDescription

\[\[
	Set the description of the welcome screen.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the description of the welcome screen.
]]
function WelcomeScreen.Prototype.setDescription(self: WelcomeScreen, description: string) -> WelcomeScreen end
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

[WelcomeScreen](#WelcomeScreen)<div id="WelcomeScreen.Prototype.addChannel"></div>

## WelcomeScreen.Prototype.addChannel

\[\[
	Add an welcome screen channel to the welcome screen
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Add an welcome screen channel to the welcome screen
]]
function WelcomeScreen.Prototype.addChannel(self: WelcomeScreen, channel: WelcomeScreenChannel.JSON) -> WelcomeScreen end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="channel"></div>

### channel

[WelcomeScreenChannel](#module.WelcomeScreenChannel).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[WelcomeScreen](#WelcomeScreen)<div id="WelcomeScreen.Prototype.build"></div>

## WelcomeScreen.Prototype.build

\[\[
	Responsible for building the WelcomeScreenObject JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the WelcomeScreenObject JSON that can be parsed by the Discord API.
]]
function WelcomeScreen.Prototype.build(self: WelcomeScreen) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="WelcomeScreen.Interface.new"></div>

## WelcomeScreen.Interface.new

\[\[
	Responsible for creating a new WelcomeScreen.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new WelcomeScreen.

	\`\`\`lua
	
	\`\`\`
]]
function WelcomeScreen.Interface.new(resource: {
		enabled: boolean?,

		description: string?,

		welcomeChannels: {WelcomeScreenChannel.JSON}?
	}?) -> WelcomeScreen end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{enabled: [boolean](#boolean)?, description: [string](#string)?, welcomeChannels: \{[WelcomeScreenChannel](#module.WelcomeScreenChannel).[JSON](#JSON)\}?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[WelcomeScreen](#WelcomeScreen)