---
title: "@antiraid-core/primitives"
description: "API reference for @antiraid-core/primitives"
---

<div id="@antiraid-core/primitives"></div>

# @antiraid-core/primitives

<div id="Types"></div>

## Types

<div id="u8"></div>

## u8

AntiRaid primitives



Last updated: June 22nd 2025

Core types

<details>
<summary>Raw Type</summary>

```luau
-- AntiRaid primitives
-- 
-- Last updated: June 22nd 2025
-- Core types
type u8 = number
```

</details>

[number](#number)

<div id="u16"></div>

## u16

<details>
<summary>Raw Type</summary>

```luau
type u16 = number
```

</details>

[number](#number)

<div id="u32"></div>

## u32

<details>
<summary>Raw Type</summary>

```luau
type u32 = number
```

</details>

[number](#number)

<div id="u64"></div>

## u64

<details>
<summary>Raw Type</summary>

```luau
type u64 = number
```

</details>

[number](#number)

<div id="i8"></div>

## i8

<details>
<summary>Raw Type</summary>

```luau
type i8 = number
```

</details>

[number](#number)

<div id="i16"></div>

## i16

<details>
<summary>Raw Type</summary>

```luau
type i16 = number
```

</details>

[number](#number)

<div id="i32"></div>

## i32

<details>
<summary>Raw Type</summary>

```luau
type i32 = number
```

</details>

[number](#number)

<div id="i64"></div>

## i64

<details>
<summary>Raw Type</summary>

```luau
type i64 = number
```

</details>

[number](#number)

<div id="f32"></div>

## f32

<details>
<summary>Raw Type</summary>

```luau
type f32 = number
```

</details>

[number](#number)

<div id="f64"></div>

## f64

<details>
<summary>Raw Type</summary>

```luau
type f64 = number
```

</details>

[number](#number)

<div id="bool"></div>

## bool

<details>
<summary>Raw Type</summary>

```luau
type bool = boolean
```

</details>

[boolean](#boolean)

<div id="char"></div>

## char

<details>
<summary>Raw Type</summary>

```luau
type char = string
```

</details>

[string](#string)

<div id="byte"></div>

## byte

<details>
<summary>Raw Type</summary>

```luau
type byte = number
```

</details>

[number](#number)

<div id="Event"></div>

## Event

An event that has been dispatched to the template.



In templates, this is \`\`arg\`\`.

<details>
<summary>Raw Type</summary>

```luau
--- An event that has been dispatched to the template. 
--- 
--- In templates, this is \`\`arg\`\`.
type Event = {
	--- The base name of the event.
	base_name: string,

	--- The name of the event.
	name: string,

	--- The data of the event.
	data: any,

	--- The author of the event, if any.
	author: string?
}
```

</details>

<TypeTable
	type={{
		"base_name": {
			type: "[string](#string)",
			description: "The base name of the event.",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "The name of the event.",
			required: true
		},
		"data": {
			type: "[any](#any)",
			description: "The data of the event.",
			required: true
		},
		"author": {
			type: "[string](#string)?",
			description: "The author of the event, if any.",
			required: false
		},
	}}
/>
<div id="ScriptData"></div>

## ScriptData

Information about a script

<details>
<summary>Raw Type</summary>

```luau
--- Information about a script
type ScriptData = {
	--- The guild ID the template is in.
	guild_id: string,

	--- The name of the template.
	name: string,

	--- The description of the template.
	description: string?,

	--- The name of the template as it appears on the template shop listing.
	shop_name: string?,

	--- The owner of the template on the template shop.
	shop_owner: string?,

	--- The events that this template listens to.
	events: {string},

	--- The channel to send errors to.
	error_channel: string?,

	--- The language of the template.
	lang: string,

	--- The allowed capabilities the template has access to.
	allowed_caps: {string},

	--- The user who created the template.
	created_by: string,

	--- The time the template was created.
	created_at: string,

	--- The user who last updated the template.
	updated_by: string,

	--- The time the template was last updated.
	updated_at: string
}
```

</details>

<TypeTable
	type={{
		"guild_id": {
			type: "[string](#string)",
			description: "The guild ID the template is in.",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "The name of the template.",
			required: true
		},
		"description": {
			type: "[string](#string)?",
			description: "The description of the template.",
			required: false
		},
		"shop_name": {
			type: "[string](#string)?",
			description: "The name of the template as it appears on the template shop listing.",
			required: false
		},
		"shop_owner": {
			type: "[string](#string)?",
			description: "The owner of the template on the template shop.",
			required: false
		},
		"events": {
			type: "\{[string](#string)\}",
			description: "The events that this template listens to.",
			required: true
		},
		"error_channel": {
			type: "[string](#string)?",
			description: "The channel to send errors to.",
			required: false
		},
		"lang": {
			type: "[string](#string)",
			description: "The language of the template.",
			required: true
		},
		"allowed_caps": {
			type: "\{[string](#string)\}",
			description: "The allowed capabilities the template has access to.",
			required: true
		},
		"created_by": {
			type: "[string](#string)",
			description: "The user who created the template.",
			required: true
		},
		"created_at": {
			type: "[string](#string)",
			description: "The time the template was created.",
			required: true
		},
		"updated_by": {
			type: "[string](#string)",
			description: "The user who last updated the template.",
			required: true
		},
		"updated_at": {
			type: "[string](#string)",
			description: "The time the template was last updated.",
			required: true
		},
	}}
/>
<div id="Limitations"></div>

## Limitations

<details>
<summary>Raw Type</summary>

```luau
type Limitations = {
	--- Capabilities that the template has access to.
	capabilities: {string}
}
```

</details>

<TypeTable
	type={{
		"capabilities": {
			type: "\{[string](#string)\}",
			description: "Capabilities that the template has access to.",
			required: true
		},
	}}
/>
<div id="TemplateContext"></div>

## TemplateContext

TemplateContext is a struct that represents the context of a template.



Stores key data including the templates data, pragma and what capabilities it should have access to.



Passing a TemplateContext is often required when using AntiRaid plugins for getting the inner context

of a template.

<details>
<summary>Raw Type</summary>

```luau
--- TemplateContext is a struct that represents the context of a template. 
--- 
--- Stores key data including the templates data, pragma and what capabilities it should have access to. 
---
--- Passing a TemplateContext is often required when using AntiRaid plugins for getting the inner context
--- of a template.
type TemplateContext = {
	--- DataStores plugin
	DataStores: datastoresP.Plugin,

	--- Discord plugin
	Discord: discordP.Plugin,

	--- Image Captcha plugin
	ImageCaptcha: imgcaptchaP.Plugin,

	--- Key-Value plugin
	KV: kvP.Plugin,

	--- Object Storage plugin
	ObjectStorage: objectstorageP.Plugin,

	--- HTTP Client plugin
	HTTPClient: httpclientP.Plugin,

	--- The public data associated with the script.
	data: ScriptData,

	--- Returns the memory limit the VM has/the amount of memory the VM is allowed to use
	memory_limit: u64,

	--- The current guild ID the template is running on.
	guild_id: string,

	--- The owner guild ID of the template, if any. For shop templates, this will be the guild ID of the guild which owns the template on the shop
	--- For guild-owned templates, this will be the guild ID of the guild which owns the template [the same as guild_id]
	owner_guild_id: string,

	--- The name of the template itself
	template_name: string,

	--- The capabilities the template has access to.   
	allowed_caps: {string},

	--- Returns AntiRaid's discord user object [the current discord bot user driving the template].
	current_user: discord.UserObject,

	--- Returns if a template has a specific capability.
	has_cap: (self: TemplateContext, cap: string) -> boolean,

	--- Returns if a template has any of the specified capabilities.
	has_any_cap: (self: TemplateContext, caps: {string}) -> boolean,

	--- Returns a new TemplateContext with the specified limits which must be a strict subset
	--- of the current context's limits.
	withlimits: (self: TemplateContext, limits: Limitations) -> TemplateContext,

	--- The global/common store table shared across all templates within the same
	--- server
	store: {}
}
```

</details>

<TypeTable
	type={{
		"has_cap": {
			type: "(self, cap: [string](#string)) -> [boolean](#boolean)",
			description: "Returns if a template has a specific capability.",
			required: true
		},
		"has_any_cap": {
			type: "(self, caps: \{[string](#string)\}) -> [boolean](#boolean)",
			description: "Returns if a template has any of the specified capabilities.",
			required: true
		},
		"withlimits": {
			type: "(self, limits: [Limitations](#Limitations)) -> [TemplateContext](#TemplateContext)",
			description: "Returns a new TemplateContext with the specified limits which must be a strict subsetof the current context's limits.",
			required: true
		},
		"DataStores": {
			type: "[datastoresP](#module.datastoresP).[Plugin](#Plugin)",
			description: "DataStores plugin",
			required: true
		},
		"Discord": {
			type: "[discordP](#module.discordP).[Plugin](#Plugin)",
			description: "Discord plugin",
			required: true
		},
		"ImageCaptcha": {
			type: "[imgcaptchaP](#module.imgcaptchaP).[Plugin](#Plugin)",
			description: "Image Captcha plugin",
			required: true
		},
		"KV": {
			type: "[kvP](#module.kvP).[Plugin](#Plugin)",
			description: "Key-Value plugin",
			required: true
		},
		"ObjectStorage": {
			type: "[objectstorageP](#module.objectstorageP).[Plugin](#Plugin)",
			description: "Object Storage plugin",
			required: true
		},
		"HTTPClient": {
			type: "[httpclientP](#module.httpclientP).[Plugin](#Plugin)",
			description: "HTTP Client plugin",
			required: true
		},
		"data": {
			type: "[ScriptData](#ScriptData)",
			description: "The public data associated with the script.",
			required: true
		},
		"memory_limit": {
			type: "[u64](#u64)",
			description: "Returns the memory limit the VM has/the amount of memory the VM is allowed to use",
			required: true
		},
		"guild_id": {
			type: "[string](#string)",
			description: "The current guild ID the template is running on.",
			required: true
		},
		"owner_guild_id": {
			type: "[string](#string)",
			description: "The owner guild ID of the template, if any. For shop templates, this will be the guild ID of the guild which owns the template on the shopFor guild-owned templates, this will be the guild ID of the guild which owns the template \[the same as guild_id\]",
			required: true
		},
		"template_name": {
			type: "[string](#string)",
			description: "The name of the template itself",
			required: true
		},
		"allowed_caps": {
			type: "\{[string](#string)\}",
			description: "The capabilities the template has access to.",
			required: true
		},
		"current_user": {
			type: "[discord](#module.discord).[UserObject](#UserObject)",
			description: "Returns AntiRaid's discord user object \[the current discord bot user driving the template\].",
			required: true
		},
		"store": {
			type: "\{\}",
			description: "The global/common store table shared across all templates within the sameserver",
			required: true
		},
	}}
/>
