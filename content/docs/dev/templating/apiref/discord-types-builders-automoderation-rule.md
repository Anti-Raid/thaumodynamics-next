---
title: "@discord-types/builders/automoderation/rule"
description: "API reference for @discord-types/builders/automoderation/rule"
---

<div id="@discord-types/builders/automoderation/rule"></div>

# @discord-types/builders/automoderation/rule

<div id="Types"></div>

## Types

<div id="AutomoderationRule"></div>

## AutomoderationRule

<details>
<summary>Raw Type</summary>

```luau
type AutomoderationRule = AutomoderationRule.Prototype, & {
	name: string,

	eventType: apiTypes.AutomoderationRuleEventType,

	triggerType: apiTypes.AutomoderationRuleTriggerType,

	triggerMetadata: triggerMetadata.JSON?,

	actions: {action.JSON},

	enabled: boolean?,

	exemptRoles: {apiTypes.Snowflake}?,

	exemptChannels: {apiTypes.Snowflake}?
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
		"eventType": {
			type: "[apiTypes](#module.apiTypes).[AutomoderationRuleEventType](#AutomoderationRuleEventType)",
			description: "",
			required: true
		},
		"triggerType": {
			type: "[apiTypes](#module.apiTypes).[AutomoderationRuleTriggerType](#AutomoderationRuleTriggerType)",
			description: "",
			required: true
		},
		"triggerMetadata": {
			type: "[triggerMetadata](#module.triggerMetadata).[JSON](#JSON)?",
			description: "",
			required: false
		},
		"actions": {
			type: "\{[action](#module.action).[JSON](#JSON)\}",
			description: "",
			required: true
		},
		"enabled": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"exemptRoles": {
			type: "\{[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)\}?",
			description: "",
			required: false
		},
		"exemptChannels": {
			type: "\{[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)\}?",
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
type JSON = AutomoderationRule.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="AutomoderationRule.Prototype.setName"></div>

## AutomoderationRule.Prototype.setName

\[\[
	Sets the name of the automoderation rule.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the name of the automoderation rule.
]]
function AutomoderationRule.Prototype.setName(self: AutomoderationRule, name: string) -> AutomoderationRule end
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

[AutomoderationRule](#AutomoderationRule)<div id="AutomoderationRule.Prototype.setEventType"></div>

## AutomoderationRule.Prototype.setEventType

\[\[
	Sets the event type for the automoderation rule.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the event type for the automoderation rule.
]]
function AutomoderationRule.Prototype.setEventType(self: AutomoderationRule, eventType: apiTypes.AutomoderationRuleEventType) -> AutomoderationRule end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="eventType"></div>

### eventType

[apiTypes](#module.apiTypes).[AutomoderationRuleEventType](#AutomoderationRuleEventType)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[AutomoderationRule](#AutomoderationRule)<div id="AutomoderationRule.Prototype.setTriggerType"></div>

## AutomoderationRule.Prototype.setTriggerType

\[\[
	Sets the trigger type for the automoderation rule.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the trigger type for the automoderation rule.
]]
function AutomoderationRule.Prototype.setTriggerType(self: AutomoderationRule, triggerType: apiTypes.AutomoderationRuleTriggerType) -> AutomoderationRule end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="triggerType"></div>

### triggerType

[apiTypes](#module.apiTypes).[AutomoderationRuleTriggerType](#AutomoderationRuleTriggerType)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[AutomoderationRule](#AutomoderationRule)<div id="AutomoderationRule.Prototype.setTriggerMetadata"></div>

## AutomoderationRule.Prototype.setTriggerMetadata

\[\[
	Sets the trigger metadata for the automoderation rule.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the trigger metadata for the automoderation rule.
]]
function AutomoderationRule.Prototype.setTriggerMetadata(self: AutomoderationRule, triggerMetadata: triggerMetadata.JSON) -> AutomoderationRule end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="triggerMetadata"></div>

### triggerMetadata

[triggerMetadata](#module.triggerMetadata).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[AutomoderationRule](#AutomoderationRule)<div id="AutomoderationRule.Prototype.setActions"></div>

## AutomoderationRule.Prototype.setActions

\[\[
	Sets the actions for the automoderation rule.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the actions for the automoderation rule.
]]
function AutomoderationRule.Prototype.setActions(self: AutomoderationRule, actions: {action.JSON}) -> AutomoderationRule end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="actions"></div>

### actions

\{[action](#module.action).[JSON](#JSON)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[AutomoderationRule](#AutomoderationRule)<div id="AutomoderationRule.Prototype.setEnabled"></div>

## AutomoderationRule.Prototype.setEnabled

\[\[
	Sets whether the automoderation rule is enabled.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets whether the automoderation rule is enabled.
]]
function AutomoderationRule.Prototype.setEnabled(self: AutomoderationRule, enabled: boolean) -> AutomoderationRule end
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

[AutomoderationRule](#AutomoderationRule)<div id="AutomoderationRule.Prototype.setExemptRoles"></div>

## AutomoderationRule.Prototype.setExemptRoles

\[\[
	Sets the exempt roles for the automoderation rule.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the exempt roles for the automoderation rule.
]]
function AutomoderationRule.Prototype.setExemptRoles(self: AutomoderationRule, exemptRoles: {apiTypes.Snowflake}) -> AutomoderationRule end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="exemptRoles"></div>

### exemptRoles

\{[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[AutomoderationRule](#AutomoderationRule)<div id="AutomoderationRule.Prototype.setExemptChannels"></div>

## AutomoderationRule.Prototype.setExemptChannels

\[\[
	Sets the exempt channels for the automoderation rule.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the exempt channels for the automoderation rule.
]]
function AutomoderationRule.Prototype.setExemptChannels(self: AutomoderationRule, exemptChannels: {apiTypes.Snowflake}) -> AutomoderationRule end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="exemptChannels"></div>

### exemptChannels

\{[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[AutomoderationRule](#AutomoderationRule)<div id="AutomoderationRule.Prototype.build"></div>

## AutomoderationRule.Prototype.build

\[\[
	Builds the automoderation rule object.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Builds the automoderation rule object.
]]
function AutomoderationRule.Prototype.build(self: AutomoderationRule) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="AutomoderationRule.Interface.new"></div>

## AutomoderationRule.Interface.new

\[\[
	Responsible for creating a new AutomoderationRule.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new AutomoderationRule.

	\`\`\`lua
	
	\`\`\`
]]
function AutomoderationRule.Interface.new(resource: {
		name: string?,

		eventType: apiTypes.AutomoderationRuleEventType?,

		triggerType: apiTypes.AutomoderationRuleTriggerType?,

		triggerMetadata: triggerMetadata.JSON?,

		actions: {action.JSON}?,

		enabled: boolean?,

		exemptRoles: {apiTypes.Snowflake}?,

		exemptChannels: {apiTypes.Snowflake}?
	}?) -> AutomoderationRule end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{name: [string](#string)?, eventType: [apiTypes](#module.apiTypes).[AutomoderationRuleEventType](#AutomoderationRuleEventType)?, triggerType: [apiTypes](#module.apiTypes).[AutomoderationRuleTriggerType](#AutomoderationRuleTriggerType)?, triggerMetadata: [triggerMetadata](#module.triggerMetadata).[JSON](#JSON)?, actions: \{[action](#module.action).[JSON](#JSON)\}?, enabled: [boolean](#boolean)?, exemptRoles: \{[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)\}?, exemptChannels: \{[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)\}?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[AutomoderationRule](#AutomoderationRule)