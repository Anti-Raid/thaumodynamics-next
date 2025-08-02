---
title: "@antiraid-ext/lockdowns/guilddata"
description: "API reference for @antiraid-ext/lockdowns/guilddata"
---

<div id="@antiraid-ext/lockdowns/guilddata"></div>

# @antiraid-ext/lockdowns/guilddata

<div id="Types"></div>

## Types

<div id="GuildData"></div>

## GuildData

Base guild data

<details>
<summary>Raw Type</summary>

```luau
--- Base guild data
type GuildData = {
	guild: discord.GuildObject,

	channels: {discord.ChannelObject}
}
```

</details>

<TypeTable
	type={{
		"guild": {
			type: "[discord](#module.discord).[GuildObject](#GuildObject)",
			description: "",
			required: true
		},
		"channels": {
			type: "\{[discord](#module.discord).[ChannelObject](#ChannelObject)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="guildData"></div>

## guildData

Returns the guild data for the current context

<details>
<summary>Function Signature</summary>

```luau
--- Returns the guild data for the current context
function guildData(ctx: Primitives.TemplateContext) -> GuildData end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[GuildData](#GuildData)