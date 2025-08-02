---
title: "@discord-types/builders/interaction/interaction"
description: "API reference for @discord-types/builders/interaction/interaction"
---

<div id="@discord-types/builders/interaction/interaction"></div>

# @discord-types/builders/interaction/interaction

<div id="Types"></div>

## Types

<div id="Interaction"></div>

## Interaction

<details>
<summary>Raw Type</summary>

```luau
type Interaction = Interaction.Prototype, & {
	name: string,

	nameLocalizations: {
		[apiTypes.LanguageLocales]: string
	},

	description: string,

	descriptionLocalizations: {
		[apiTypes.LanguageLocales]: string
	},

	options: {interactionOption.JSON},

	defaultMemberPermissions: string?,

	integrationTypes: {applicationTypes.IntegrationTypesConfig},

	contexts: {interactionTypes.InteractionContextType},

	type: interactionTypes.ApplicationCommandType,

	nsfw: boolean?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"nameLocalizations": {
			type: "\{[apiTypes.LanguageLocales]: [string](#string)\}",
			description: "",
			required: true
		},
		"description": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"descriptionLocalizations": {
			type: "\{[apiTypes.LanguageLocales]: [string](#string)\}",
			description: "",
			required: true
		},
		"options": {
			type: "\{[interactionOption](#module.interactionOption).[JSON](#JSON)\}",
			description: "",
			required: true
		},
		"defaultMemberPermissions": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"integrationTypes": {
			type: "\{[applicationTypes](#module.applicationTypes).[IntegrationTypesConfig](#IntegrationTypesConfig)\}",
			description: "",
			required: true
		},
		"contexts": {
			type: "\{[interactionTypes](#module.interactionTypes).[InteractionContextType](#InteractionContextType)\}",
			description: "",
			required: true
		},
		"type": {
			type: "[interactionTypes](#module.interactionTypes).[ApplicationCommandType](#ApplicationCommandType)",
			description: "",
			required: true
		},
		"nsfw": {
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
type JSON = Interaction.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Interaction.Prototype.setName"></div>

## Interaction.Prototype.setName

\[\[
	Name of command, 1-32 characters
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Name of command, 1-32 characters
]]
function Interaction.Prototype.setName(self: Interaction, name: string) -> Interaction end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="name"></div>

### name

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Interaction](#Interaction)<div id="Interaction.Prototype.setType"></div>

## Interaction.Prototype.setType

\[\[
	Set the Type of command
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set the Type of command
]]
function Interaction.Prototype.setType(self: Interaction, commandType: interactionTypes.ApplicationCommandType) -> Interaction end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="commandType"></div>

### commandType

[interactionTypes](#module.interactionTypes).[ApplicationCommandType](#ApplicationCommandType)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Interaction](#Interaction)<div id="Interaction.Prototype.setNameLocalization"></div>

## Interaction.Prototype.setNameLocalization

\[\[
	Localization dictionary for the name field. Values follow the same restrictions as name
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Localization dictionary for the name field. Values follow the same restrictions as name
]]
function Interaction.Prototype.setNameLocalization(self: Interaction, localization: apiTypes.LanguageLocales, name: string) -> Interaction end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="localization"></div>

### localization

[apiTypes](#module.apiTypes).[LanguageLocales](#LanguageLocales)



<div id="name"></div>

### name

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Interaction](#Interaction)<div id="Interaction.Prototype.setDescription"></div>

## Interaction.Prototype.setDescription

\[\[
	1-100 character description
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	1-100 character description
]]
function Interaction.Prototype.setDescription(self: Interaction, description: string) -> Interaction end
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

[Interaction](#Interaction)<div id="Interaction.Prototype.setDescriptionLocalization"></div>

## Interaction.Prototype.setDescriptionLocalization

\[\[
	Localization dictionary for the description field. Values follow the same restrictions as description
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Localization dictionary for the description field. Values follow the same restrictions as description
]]
function Interaction.Prototype.setDescriptionLocalization(self: Interaction, localization: apiTypes.LanguageLocales, description: string) -> Interaction end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="localization"></div>

### localization

[apiTypes](#module.apiTypes).[LanguageLocales](#LanguageLocales)



<div id="description"></div>

### description

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Interaction](#Interaction)<div id="Interaction.Prototype.option"></div>

## Interaction.Prototype.option

<details>
<summary>Function Signature</summary>

```luau
function Interaction.Prototype.option(self: Interaction, fn: (interactionOption.Option) -> interactionOption.JSON) -> Interaction end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="fn"></div>

### fn

<details>
<summary>Function Signature</summary>

```luau
fn: (interactionOption.Option) -> interactionOption.JSON
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="arg1"></div>

#### arg1

[interactionOption](#module.interactionOption).[Option](#Option)



<div id="Returns"></div>

### Returns

<div id="ret1"></div>

#### ret1

[interactionOption](#module.interactionOption).[JSON](#JSON)<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Interaction](#Interaction)<div id="Interaction.Prototype.addOption"></div>

## Interaction.Prototype.addOption

\[\[
	the parameters for the command
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	the parameters for the command
]]
function Interaction.Prototype.addOption(self: Interaction, option: interactionOption.JSON) -> Interaction end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="option"></div>

### option

[interactionOption](#module.interactionOption).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Interaction](#Interaction)<div id="Interaction.Prototype.setDefaultMemberPermissions"></div>

## Interaction.Prototype.setDefaultMemberPermissions

\[\[
	Set of permissions represented as a bit set, recommended that you use the permission builder.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Set of permissions represented as a bit set, recommended that you use the permission builder.
]]
function Interaction.Prototype.setDefaultMemberPermissions(self: Interaction, permissions: string) -> Interaction end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="permissions"></div>

### permissions

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Interaction](#Interaction)<div id="Interaction.Prototype.addIntegrationType"></div>

## Interaction.Prototype.addIntegrationType

\[\[
	Installation context(s) where the command is available
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Installation context(s) where the command is available
]]
function Interaction.Prototype.addIntegrationType(self: Interaction, type: applicationTypes.IntegrationTypesConfig) -> Interaction end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="type"></div>

### type

[applicationTypes](#module.applicationTypes).[IntegrationTypesConfig](#IntegrationTypesConfig)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Interaction](#Interaction)<div id="Interaction.Prototype.addContext"></div>

## Interaction.Prototype.addContext

\[\[
	Interaction context(s) where the command can be used
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Interaction context(s) where the command can be used
]]
function Interaction.Prototype.addContext(self: Interaction, context: interactionTypes.InteractionContextType) -> Interaction end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="context"></div>

### context

[interactionTypes](#module.interactionTypes).[InteractionContextType](#InteractionContextType)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Interaction](#Interaction)<div id="Interaction.Prototype.setNsfw"></div>

## Interaction.Prototype.setNsfw

\[\[
	Indicates whether the command is age-restricted
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Indicates whether the command is age-restricted
]]
function Interaction.Prototype.setNsfw(self: Interaction, isNsfw: boolean) -> Interaction end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="isNsfw"></div>

### isNsfw

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Interaction](#Interaction)<div id="Interaction.Prototype.build"></div>

## Interaction.Prototype.build

\[\[
	Responsible for buillding the default reaction object that the Discord API can understand.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for buillding the default reaction object that the Discord API can understand.
]]
function Interaction.Prototype.build(self: Interaction) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Interaction.Interface.new"></div>

## Interaction.Interface.new

\[\[
	Constructor for the Discord Default Reaction Builder.

	\`\`\`lua
	local defaultReaction = Interaction.new("000000000000000000", "secret-emoji"):build()
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Constructor for the Discord Default Reaction Builder.

	\`\`\`lua
	local defaultReaction = Interaction.new("000000000000000000", "secret-emoji"):build()
	\`\`\`
]]
function Interaction.Interface.new(resource: {
		name: string?,

		nameLocalizations: {
			[apiTypes.LanguageLocales]: string
		}?,

		description: string?,

		descriptionLocalizations: {
			[apiTypes.LanguageLocales]: string
		}?,

		options: {interactionOption.JSON}?,

		defaultMemberPermissions: string?,

		integrationTypes: {applicationTypes.IntegrationTypesConfig}?,

		contexts: {interactionTypes.InteractionContextType}?,

		nsfw: boolean?
	}?) -> Interaction end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{name: [string](#string)?, nameLocalizations: \{[apiTypes.LanguageLocales]: [string](#string)\}?, description: [string](#string)?, descriptionLocalizations: \{[apiTypes.LanguageLocales]: [string](#string)\}?, options: \{[interactionOption](#module.interactionOption).[JSON](#JSON)\}?, defaultMemberPermissions: [string](#string)?, integrationTypes: \{[applicationTypes](#module.applicationTypes).[IntegrationTypesConfig](#IntegrationTypesConfig)\}?, contexts: \{[interactionTypes](#module.interactionTypes).[InteractionContextType](#InteractionContextType)\}?, nsfw: [boolean](#boolean)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Interaction](#Interaction)