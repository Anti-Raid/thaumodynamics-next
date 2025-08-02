---
title: "@discord-types/builders/automoderation/trigger/metadata"
description: "API reference for @discord-types/builders/automoderation/trigger/metadata"
---

<div id="@discord-types/builders/automoderation/trigger/metadata"></div>

# @discord-types/builders/automoderation/trigger/metadata

<div id="Types"></div>

## Types

<div id="TriggerMetadata"></div>

## TriggerMetadata

<details>
<summary>Raw Type</summary>

```luau
type TriggerMetadata = TriggerMetadata.Prototype, & {
	keywordFilter: {string},

	regexPatterns: {string},

	presets: {apiTypes.AutomoderationRuleKeywordPresetType},

	allowList: {string},

	mentionTotalLimit: number,

	mentionRaidProtectionEnabled: boolean
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"keywordFilter": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
		"regexPatterns": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
		"presets": {
			type: "\{[apiTypes](#module.apiTypes).[AutomoderationRuleKeywordPresetType](#AutomoderationRuleKeywordPresetType)\}",
			description: "",
			required: true
		},
		"allowList": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
		"mentionTotalLimit": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"mentionRaidProtectionEnabled": {
			type: "[boolean](#boolean)",
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
type JSON = TriggerMetadata.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="TriggerMetadata.Prototype.setKeywordFilter"></div>

## TriggerMetadata.Prototype.setKeywordFilter

\[\[
 	Sets the list of keywords to match.
 \]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
 	Sets the list of keywords to match.
 ]]
function TriggerMetadata.Prototype.setKeywordFilter(self: TriggerMetadata, keywordFilter: {string}) -> TriggerMetadata end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="keywordFilter"></div>

### keywordFilter

\{[string](#string)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TriggerMetadata](#TriggerMetadata)<div id="TriggerMetadata.Prototype.setRegexPatterns"></div>

## TriggerMetadata.Prototype.setRegexPatterns

\[\[
 	Sets the list of regular expressions to match.
 \]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
 	Sets the list of regular expressions to match.
 ]]
function TriggerMetadata.Prototype.setRegexPatterns(self: TriggerMetadata, regexPatterns: {string}) -> TriggerMetadata end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="regexPatterns"></div>

### regexPatterns

\{[string](#string)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TriggerMetadata](#TriggerMetadata)<div id="TriggerMetadata.Prototype.setPresets"></div>

## TriggerMetadata.Prototype.setPresets

\[\[
 	Sets the list of preset keywords to match.
 \]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
 	Sets the list of preset keywords to match.
 ]]
function TriggerMetadata.Prototype.setPresets(self: TriggerMetadata, presets: {apiTypes.AutomoderationRuleKeywordPresetType}) -> TriggerMetadata end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="presets"></div>

### presets

\{[apiTypes](#module.apiTypes).[AutomoderationRuleKeywordPresetType](#AutomoderationRuleKeywordPresetType)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TriggerMetadata](#TriggerMetadata)<div id="TriggerMetadata.Prototype.setAllowList"></div>

## TriggerMetadata.Prototype.setAllowList

\[\[
 	Sets the list of allowed keywords.
 \]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
 	Sets the list of allowed keywords.
 ]]
function TriggerMetadata.Prototype.setAllowList(self: TriggerMetadata, allowList: {string}) -> TriggerMetadata end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="allowList"></div>

### allowList

\{[string](#string)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TriggerMetadata](#TriggerMetadata)<div id="TriggerMetadata.Prototype.setMentionTotalLimit"></div>

## TriggerMetadata.Prototype.setMentionTotalLimit

\[\[
 	Sets the maximum number of mentions allowed.
 \]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
 	Sets the maximum number of mentions allowed.
 ]]
function TriggerMetadata.Prototype.setMentionTotalLimit(self: TriggerMetadata, mentionTotalLimit: number) -> TriggerMetadata end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="mentionTotalLimit"></div>

### mentionTotalLimit

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TriggerMetadata](#TriggerMetadata)<div id="TriggerMetadata.Prototype.setMentionRaidProtectionEnabled"></div>

## TriggerMetadata.Prototype.setMentionRaidProtectionEnabled

\[\[
 	Sets whether raid protection is enabled.
 \]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
 	Sets whether raid protection is enabled.
 ]]
function TriggerMetadata.Prototype.setMentionRaidProtectionEnabled(self: TriggerMetadata, mentionRaidProtectionEnabled: boolean) -> TriggerMetadata end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="mentionRaidProtectionEnabled"></div>

### mentionRaidProtectionEnabled

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TriggerMetadata](#TriggerMetadata)<div id="TriggerMetadata.Prototype.build"></div>

## TriggerMetadata.Prototype.build

\[\[
 	Builds the trigger metadata object.
 \]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
 	Builds the trigger metadata object.
 ]]
function TriggerMetadata.Prototype.build(self: TriggerMetadata) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="TriggerMetadata.Interface.new"></div>

## TriggerMetadata.Interface.new

\[\[
 	Responsible for creating a new TriggerMetadata.
 
 	\`\`\`lua
 	
 	\`\`\`
 \]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
 	Responsible for creating a new TriggerMetadata.
 
 	\`\`\`lua
 	
 	\`\`\`
 ]]
function TriggerMetadata.Interface.new(resource: {
		keywordFilter: {string}?,

		regexPatterns: {string}?,

		presets: {apiTypes.AutomoderationRuleKeywordPresetType}?,

		allowList: {string}?,

		mentionTotalLimit: number?,

		mentionRaidProtectionEnabled: boolean?
	}?) -> TriggerMetadata end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{keywordFilter: \{[string](#string)\}?, regexPatterns: \{[string](#string)\}?, presets: \{[apiTypes](#module.apiTypes).[AutomoderationRuleKeywordPresetType](#AutomoderationRuleKeywordPresetType)\}?, allowList: \{[string](#string)\}?, mentionTotalLimit: [number](#number)?, mentionRaidProtectionEnabled: [boolean](#boolean)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TriggerMetadata](#TriggerMetadata)