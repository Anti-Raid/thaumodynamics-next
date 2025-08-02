---
title: "@discord-types/builders/guild/onboarding/onboarding"
description: "API reference for @discord-types/builders/guild/onboarding/onboarding"
---

<div id="@discord-types/builders/guild/onboarding/onboarding"></div>

# @discord-types/builders/guild/onboarding/onboarding

<div id="Types"></div>

## Types

<div id="Onboarding"></div>

## Onboarding

<details>
<summary>Raw Type</summary>

```luau
type Onboarding = Onboarding.Prototype, & {
	prompts: {prompt.JSON},

	defaultChannelIds: {string},

	enabled: boolean,

	mode: guildTypes.OnboardingMode
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"prompts": {
			type: "\{[prompt](#module.prompt).[JSON](#JSON)\}",
			description: "",
			required: true
		},
		"defaultChannelIds": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
		"enabled": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"mode": {
			type: "[guildTypes](#module.guildTypes).[OnboardingMode](#OnboardingMode)",
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
type JSON = Onboarding.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Onboarding.Prototype.addPrompt"></div>

## Onboarding.Prototype.addPrompt

\[\[
	Add a prompt to this onboarding
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Add a prompt to this onboarding
]]
function Onboarding.Prototype.addPrompt(self: Onboarding, prompt: prompt.JSON) -> Onboarding end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="prompt"></div>

### prompt

[prompt](#module.prompt).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Onboarding](#Onboarding)<div id="Onboarding.Prototype.addDefaultChannelId"></div>

## Onboarding.Prototype.addDefaultChannelId

\[\[
	Add a default channel to this onboarding
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Add a default channel to this onboarding
]]
function Onboarding.Prototype.addDefaultChannelId(self: Onboarding, channelId: string) -> Onboarding end
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

[Onboarding](#Onboarding)<div id="Onboarding.Prototype.setEnabled"></div>

## Onboarding.Prototype.setEnabled

\[\[
	Set weather this onboarding is enabled or not.	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set weather this onboarding is enabled or not.	
]]
function Onboarding.Prototype.setEnabled(self: Onboarding, enabled: boolean) -> Onboarding end
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

[Onboarding](#Onboarding)<div id="Onboarding.Prototype.setMode"></div>

## Onboarding.Prototype.setMode

\[\[
	Set the mode of this onboarding.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the mode of this onboarding.
]]
function Onboarding.Prototype.setMode(self: Onboarding, mode: guildTypes.OnboardingMode) -> Onboarding end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="mode"></div>

### mode

[guildTypes](#module.guildTypes).[OnboardingMode](#OnboardingMode)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Onboarding](#Onboarding)<div id="Onboarding.Prototype.build"></div>

## Onboarding.Prototype.build

\[\[
	Responsible for building the OnboardingObject JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the OnboardingObject JSON that can be parsed by the Discord API.
]]
function Onboarding.Prototype.build(self: Onboarding) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Onboarding.Interface.new"></div>

## Onboarding.Interface.new

\[\[
	Responsible for creating a new Onboarding.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Onboarding.

	\`\`\`lua
	
	\`\`\`
]]
function Onboarding.Interface.new(resource: {
		prompts: {prompt.JSON}?,

		defaultChannelIds: {string}?,

		enabled: boolean?,

		mode: guildTypes.OnboardingMode?
	}?) -> Onboarding end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{prompts: \{[prompt](#module.prompt).[JSON](#JSON)\}?, defaultChannelIds: \{[string](#string)\}?, enabled: [boolean](#boolean)?, mode: [guildTypes](#module.guildTypes).[OnboardingMode](#OnboardingMode)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Onboarding](#Onboarding)