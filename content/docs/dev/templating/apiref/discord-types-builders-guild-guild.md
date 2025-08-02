---
title: "@discord-types/builders/guild/guild"
description: "API reference for @discord-types/builders/guild/guild"
---

<div id="@discord-types/builders/guild/guild"></div>

# @discord-types/builders/guild/guild

<div id="Types"></div>

## Types

<div id="Guild"></div>

## Guild

<details>
<summary>Raw Type</summary>

```luau
type Guild = Guild.Prototype, & {
	name: string?,

	verificationLevel: guildTypes.VerificationLevel,

	defaultMessageNotifications: guildTypes.DefaultMessageNotification,

	explicitContentFilter: guildTypes.ExplicitContentFilterLevel,

	afkChannelId: apiTypes.Snowflake?,

	afkTimeout: number?,

	icon: string?,

	ownerId: apiTypes.Snowflake?,

	splash: string?,

	discoverySplash: string?,

	banner: string?,

	systemChannelId: apiTypes.Snowflake?,

	systemChannelFlags: number?,

	rulesChannelId: apiTypes.Snowflake?,

	publicUpdatesChannelId: apiTypes.Snowflake?,

	preferredLocale: apiTypes.LanguageLocales?,

	features: {apiTypes.GuildFeature},

	description: string?,

	premiumProgressBarEnabled: boolean?,

	safetyAlertsChannelId: apiTypes.Snowflake?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"name": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"verificationLevel": {
			type: "[guildTypes](#module.guildTypes).[VerificationLevel](#VerificationLevel)",
			description: "",
			required: true
		},
		"defaultMessageNotifications": {
			type: "[guildTypes](#module.guildTypes).[DefaultMessageNotification](#DefaultMessageNotification)",
			description: "",
			required: true
		},
		"explicitContentFilter": {
			type: "[guildTypes](#module.guildTypes).[ExplicitContentFilterLevel](#ExplicitContentFilterLevel)",
			description: "",
			required: true
		},
		"afkChannelId": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"afkTimeout": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"icon": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"ownerId": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"splash": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"discoverySplash": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"banner": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"systemChannelId": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"systemChannelFlags": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"rulesChannelId": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"publicUpdatesChannelId": {
			type: "[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"preferredLocale": {
			type: "[apiTypes](#module.apiTypes).[LanguageLocales](#LanguageLocales)?",
			description: "",
			required: false
		},
		"features": {
			type: "\{[apiTypes](#module.apiTypes).[GuildFeature](#GuildFeature)\}",
			description: "",
			required: true
		},
		"description": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"premiumProgressBarEnabled": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"safetyAlertsChannelId": {
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
type JSON = Guild.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Guild.Prototype.setName"></div>

## Guild.Prototype.setName

\[\[
	set the name for this guild
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	set the name for this guild
]]
function Guild.Prototype.setName(self: Guild, name: string) -> Guild end
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

[Guild](#Guild)<div id="Guild.Prototype.setVerificationLevel"></div>

## Guild.Prototype.setVerificationLevel

\[\[
	set the explicit verification level for this guild
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	set the explicit verification level for this guild
]]
function Guild.Prototype.setVerificationLevel(self: Guild, verificationLevel: guildTypes.VerificationLevel) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="verificationLevel"></div>

### verificationLevel

[guildTypes](#module.guildTypes).[VerificationLevel](#VerificationLevel)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.setDefaultMessageNotifications"></div>

## Guild.Prototype.setDefaultMessageNotifications

\[\[
	set the explicit default message notifications for this guild
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	set the explicit default message notifications for this guild
]]
function Guild.Prototype.setDefaultMessageNotifications(self: Guild, defaultMessageNotifications: guildTypes.DefaultMessageNotification) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="defaultMessageNotifications"></div>

### defaultMessageNotifications

[guildTypes](#module.guildTypes).[DefaultMessageNotification](#DefaultMessageNotification)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.setExplicitContentFilter"></div>

## Guild.Prototype.setExplicitContentFilter

\[\[
	set the explicit content filter level for this guild
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	set the explicit content filter level for this guild
]]
function Guild.Prototype.setExplicitContentFilter(self: Guild, explicitContentFilter: guildTypes.ExplicitContentFilterLevel) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="explicitContentFilter"></div>

### explicitContentFilter

[guildTypes](#module.guildTypes).[ExplicitContentFilterLevel](#ExplicitContentFilterLevel)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.setAfkChannelId"></div>

## Guild.Prototype.setAfkChannelId

\[\[
	set the id for afk channel
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	set the id for afk channel
]]
function Guild.Prototype.setAfkChannelId(self: Guild, afkChannelId: apiTypes.Snowflake) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="afkChannelId"></div>

### afkChannelId

[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.setAfkTimeout"></div>

## Guild.Prototype.setAfkTimeout

\[\[
	afk timeout in seconds, can be set to: 60, 300, 900, 1800, 3600
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	afk timeout in seconds, can be set to: 60, 300, 900, 1800, 3600
]]
function Guild.Prototype.setAfkTimeout(self: Guild, afkTimeout: number) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="afkTimeout"></div>

### afkTimeout

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.setIcon"></div>

## Guild.Prototype.setIcon

\[\[
	base64 1024x1024 png/jpeg/gif image for the guild icon (can be animated gif when the server has
	the ANIMATED_ICON feature)
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	base64 1024x1024 png/jpeg/gif image for the guild icon (can be animated gif when the server has
	the ANIMATED_ICON feature)
]]
function Guild.Prototype.setIcon(self: Guild, source: string) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="source"></div>

### source

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.setOwnerId"></div>

## Guild.Prototype.setOwnerId

\[\[
	user id to transfer guild ownership to (must be owner)
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	user id to transfer guild ownership to (must be owner)
]]
function Guild.Prototype.setOwnerId(self: Guild, ownerId: apiTypes.Snowflake) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ownerId"></div>

### ownerId

[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.setSplash"></div>

## Guild.Prototype.setSplash

\[\[
	base64 16:9 png/jpeg image for the guild splash (when the server has the INVITE_SPLASH feature)
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	base64 16:9 png/jpeg image for the guild splash (when the server has the INVITE_SPLASH feature)
]]
function Guild.Prototype.setSplash(self: Guild, source: string) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="source"></div>

### source

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.setDiscoverySplash"></div>

## Guild.Prototype.setDiscoverySplash

\[\[
	base64 16:9 png/jpeg image for the guild discovery splash (when the server has the DISCOVERABLE feature)
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	base64 16:9 png/jpeg image for the guild discovery splash (when the server has the DISCOVERABLE feature)
]]
function Guild.Prototype.setDiscoverySplash(self: Guild, source: string) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="source"></div>

### source

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.setBanner"></div>

## Guild.Prototype.setBanner

\[\[
	base64 16:9 png/jpeg image for the guild banner (when the server has the BANNER feature; can be animated
	gif when the server has the ANIMATED_BANNER feature)
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	base64 16:9 png/jpeg image for the guild banner (when the server has the BANNER feature; can be animated
	gif when the server has the ANIMATED_BANNER feature)
]]
function Guild.Prototype.setBanner(self: Guild, source: string) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="source"></div>

### source

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.setSystemChannelId"></div>

## Guild.Prototype.setSystemChannelId

\[\[
	the id of the channel where guild notices such as welcome messages and boost events are posted
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	the id of the channel where guild notices such as welcome messages and boost events are posted
]]
function Guild.Prototype.setSystemChannelId(self: Guild, systemChannelId: apiTypes.Snowflake) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="systemChannelId"></div>

### systemChannelId

[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.setSystemChannelFlags"></div>

## Guild.Prototype.setSystemChannelFlags

\[\[
	set the system channel flags
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	set the system channel flags
]]
function Guild.Prototype.setSystemChannelFlags(self: Guild, systemChannelFlags: number) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="systemChannelFlags"></div>

### systemChannelFlags

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.setRulesChannelId"></div>

## Guild.Prototype.setRulesChannelId

\[\[
	the id of the channel where Community guilds display rules and/or guidelines
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	the id of the channel where Community guilds display rules and/or guidelines
]]
function Guild.Prototype.setRulesChannelId(self: Guild, rulesChannelId: apiTypes.Snowflake) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="rulesChannelId"></div>

### rulesChannelId

[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.setPublicUpdatesChannelId"></div>

## Guild.Prototype.setPublicUpdatesChannelId

\[\[
	the id of the channel where admins and moderators of Community guilds receive notices from Discord
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	the id of the channel where admins and moderators of Community guilds receive notices from Discord
]]
function Guild.Prototype.setPublicUpdatesChannelId(self: Guild, publicUpdatesChannelId: apiTypes.Snowflake) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="publicUpdatesChannelId"></div>

### publicUpdatesChannelId

[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.setPreferredLocale"></div>

## Guild.Prototype.setPreferredLocale

\[\[
	the preferred locale of a Community guild used in server discovery and notices from Discord; defaults to "en-US"
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	the preferred locale of a Community guild used in server discovery and notices from Discord; defaults to "en-US"
]]
function Guild.Prototype.setPreferredLocale(self: Guild, preferredLocale: apiTypes.LanguageLocales) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="preferredLocale"></div>

### preferredLocale

[apiTypes](#module.apiTypes).[LanguageLocales](#LanguageLocales)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.addFeature"></div>

## Guild.Prototype.addFeature

\[\[
	enable a specific guild feature for this guild
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	enable a specific guild feature for this guild
]]
function Guild.Prototype.addFeature(self: Guild, feature: apiTypes.GuildFeature) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="feature"></div>

### feature

[apiTypes](#module.apiTypes).[GuildFeature](#GuildFeature)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.setDescription"></div>

## Guild.Prototype.setDescription

\[\[
	the description for the guild
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	the description for the guild
]]
function Guild.Prototype.setDescription(self: Guild, description: string) -> Guild end
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

[Guild](#Guild)<div id="Guild.Prototype.setPremiumProgressBarEnabled"></div>

## Guild.Prototype.setPremiumProgressBarEnabled

\[\[
	whether the guild's boost progress bar should be enabled
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	whether the guild's boost progress bar should be enabled
]]
function Guild.Prototype.setPremiumProgressBarEnabled(self: Guild, premiumProgressBarEnabled: boolean) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="premiumProgressBarEnabled"></div>

### premiumProgressBarEnabled

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.setSafetyAlertsChannelId"></div>

## Guild.Prototype.setSafetyAlertsChannelId

\[\[
	the id of the channel where admins and moderators of Community guilds receive safety alerts from Discord
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	the id of the channel where admins and moderators of Community guilds receive safety alerts from Discord
]]
function Guild.Prototype.setSafetyAlertsChannelId(self: Guild, safetyAlertsChannelId: apiTypes.Snowflake) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="safetyAlertsChannelId"></div>

### safetyAlertsChannelId

[apiTypes](#module.apiTypes).[Snowflake](#Snowflake)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)<div id="Guild.Prototype.build"></div>

## Guild.Prototype.build

\[\[
	Responsible for building the Guild JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the Guild JSON that can be parsed by the Discord API.
]]
function Guild.Prototype.build(self: Guild) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Guild.Interface.new"></div>

## Guild.Interface.new

\[\[
	Responsible for creating a new Guild.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Guild.

	\`\`\`lua
	
	\`\`\`
]]
function Guild.Interface.new(resource: {
		name: string?,

		verificationLevel: guildTypes.VerificationLevel?,

		defaultMessageNotifications: guildTypes.DefaultMessageNotification?,

		explicitContentFilter: guildTypes.ExplicitContentFilterLevel?,

		afkChannelId: apiTypes.Snowflake?,

		afkTimeout: number?,

		icon: string?,

		ownerId: apiTypes.Snowflake?,

		splash: string?,

		discoverySplash: string?,

		banner: string?,

		systemChannelId: apiTypes.Snowflake?,

		systemChannelFlags: number?,

		rulesChannelId: apiTypes.Snowflake?,

		publicUpdatesChannelId: apiTypes.Snowflake?,

		preferredLocale: apiTypes.LanguageLocales?,

		features: {apiTypes.GuildFeature}?,

		description: string?,

		premiumProgressBarEnabled: boolean?,

		safetyAlertsChannelId: apiTypes.Snowflake?
	}?) -> Guild end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{name: [string](#string)?, verificationLevel: [guildTypes](#module.guildTypes).[VerificationLevel](#VerificationLevel)?, defaultMessageNotifications: [guildTypes](#module.guildTypes).[DefaultMessageNotification](#DefaultMessageNotification)?, explicitContentFilter: [guildTypes](#module.guildTypes).[ExplicitContentFilterLevel](#ExplicitContentFilterLevel)?, afkChannelId: [apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?, afkTimeout: [number](#number)?, icon: [string](#string)?, ownerId: [apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?, splash: [string](#string)?, discoverySplash: [string](#string)?, banner: [string](#string)?, systemChannelId: [apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?, systemChannelFlags: [number](#number)?, rulesChannelId: [apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?, publicUpdatesChannelId: [apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?, preferredLocale: [apiTypes](#module.apiTypes).[LanguageLocales](#LanguageLocales)?, features: \{[apiTypes](#module.apiTypes).[GuildFeature](#GuildFeature)\}?, description: [string](#string)?, premiumProgressBarEnabled: [boolean](#boolean)?, safetyAlertsChannelId: [apiTypes](#module.apiTypes).[Snowflake](#Snowflake)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Guild](#Guild)