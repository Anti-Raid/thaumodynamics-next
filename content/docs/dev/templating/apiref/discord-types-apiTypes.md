---
title: "@discord-types/apiTypes"
description: "API reference for @discord-types/apiTypes"
---

<div id="@discord-types/apiTypes"></div>

# @discord-types/apiTypes

<div id="Types"></div>

## Types

<div id="Partial"></div>

## Partial

<details>
<summary>Raw Type</summary>

```luau
type Partial<T> = MakePartial<T>
```

</details>

[MakePartial](#MakePartial)&lt;[T](#T)&gt;<div id="Snowflake"></div>

## Snowflake

<details>
<summary>Raw Type</summary>

```luau
type Snowflake = string
```

</details>

[string](#string)

<div id="PremiumTypes"></div>

## PremiumTypes

https://discord.com/developers/docs/resources/user#user-object-premium-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#user-object-premium-types
type PremiumTypes = number
```

</details>

[number](#number)

<div id="LanguageLocales"></div>

## LanguageLocales

https://discord.com/developers/docs/reference#locales

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/reference#locales
type LanguageLocales = "id" | "da" | "de" | "en-GB" | "en-US" | "es-ES" | "fr" | "hr" | "it" | "lt" | "nl" | "no" | "pl" | "pt-BR" | "ro" | "fi" | "sv-SE" | "vi" | "tr" | "cs" | "el" | "bg" | "ru" | "uk" | "hi" | "th" | "zn-CH" | "ja" | "ko"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"id"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"da"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"de"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"en-GB"
```

</details>

<details>
<summary>Variant 5</summary>

```luau
"en-US"
```

</details>

<details>
<summary>Variant 6</summary>

```luau
"es-ES"
```

</details>

<details>
<summary>Variant 7</summary>

```luau
"fr"
```

</details>

<details>
<summary>Variant 8</summary>

```luau
"hr"
```

</details>

<details>
<summary>Variant 9</summary>

```luau
"it"
```

</details>

<details>
<summary>Variant 10</summary>

```luau
"lt"
```

</details>

<details>
<summary>Variant 11</summary>

```luau
"nl"
```

</details>

<details>
<summary>Variant 12</summary>

```luau
"no"
```

</details>

<details>
<summary>Variant 13</summary>

```luau
"pl"
```

</details>

<details>
<summary>Variant 14</summary>

```luau
"pt-BR"
```

</details>

<details>
<summary>Variant 15</summary>

```luau
"ro"
```

</details>

<details>
<summary>Variant 16</summary>

```luau
"fi"
```

</details>

<details>
<summary>Variant 17</summary>

```luau
"sv-SE"
```

</details>

<details>
<summary>Variant 18</summary>

```luau
"vi"
```

</details>

<details>
<summary>Variant 19</summary>

```luau
"tr"
```

</details>

<details>
<summary>Variant 20</summary>

```luau
"cs"
```

</details>

<details>
<summary>Variant 21</summary>

```luau
"el"
```

</details>

<details>
<summary>Variant 22</summary>

```luau
"bg"
```

</details>

<details>
<summary>Variant 23</summary>

```luau
"ru"
```

</details>

<details>
<summary>Variant 24</summary>

```luau
"uk"
```

</details>

<details>
<summary>Variant 25</summary>

```luau
"hi"
```

</details>

<details>
<summary>Variant 26</summary>

```luau
"th"
```

</details>

<details>
<summary>Variant 27</summary>

```luau
"zn-CH"
```

</details>

<details>
<summary>Variant 28</summary>

```luau
"ja"
```

</details>

<details>
<summary>Variant 29</summary>

```luau
"ko"
```

</details>

<div id="MembershipState"></div>

## MembershipState

https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum
type MembershipState = number
```

</details>

[number](#number)

<div id="TeamMemberRole"></div>

## TeamMemberRole

https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum
type TeamMemberRole = "Owner" | "Admin" | "Developer" | "Read-only"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Owner"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Admin"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"Developer"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"Read-only"
```

</details>

<div id="VerificationLevel"></div>

## VerificationLevel

https://discord.com/developers/docs/resources/guild#guild-object-verification-level

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-object-verification-level
type VerificationLevel = number
```

</details>

[number](#number)

<div id="DefaultMessageNotification"></div>

## DefaultMessageNotification

https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
type DefaultMessageNotification = number
```

</details>

[number](#number)

<div id="ExplicitContentFilterLevel"></div>

## ExplicitContentFilterLevel

https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
type ExplicitContentFilterLevel = number
```

</details>

[number](#number)

<div id="MFALevel"></div>

## MFALevel

https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
type MFALevel = number
```

</details>

[number](#number)

<div id="GuildNSFWLevel"></div>

## GuildNSFWLevel

https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
type GuildNSFWLevel = number
```

</details>

[number](#number)

<div id="PremiumTier"></div>

## PremiumTier

https://discord.com/developers/docs/resources/guild#guild-object-premium-tier

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
type PremiumTier = number
```

</details>

[number](#number)

<div id="SystemChannelFlags"></div>

## SystemChannelFlags

https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
type SystemChannelFlags = number
```

</details>

[number](#number)

<div id="GuildFeature"></div>

## GuildFeature

https://discord.com/developers/docs/resources/guild#guild-object-guild-features

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-object-guild-features
type GuildFeature = "ANIMATED_BANNER" | "ANIMATED_ICON" | "APPLICATION_COMMAND_PERMISSIONS_V2" | "AUTO_MODERATION" | "BANNER" | "COMMUNITY" | "CREATOR_MONETIZABLE_PROVISIONAL" | "CREATOR_STORE_PAGE" | "DEVELOPER_SUPPORT_SERVER" | "DISCOVERABLE" | "FEATURABLE" | "INVITES_DISABLED" | "INVITE_SPLASH" | "MEMBER_VERIFICATION_GATE_ENABLED" | "MORE_STICKERS" | "NEWS" | "PARTNERED" | "PREVIEW_ENABLED" | "RAID_ALERTS_DISABLED" | "ROLE_ICONS" | "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE" | "ROLE_SUBSCRIPTIONS_ENABLED" | "TICKETED_EVENTS_ENABLED" | "VANITY_URL" | "VERIFIED" | "VIP_REGIONS" | "WELCOME_SCREEN_ENABLED"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"ANIMATED_BANNER"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"ANIMATED_ICON"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"APPLICATION_COMMAND_PERMISSIONS_V2"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"AUTO_MODERATION"
```

</details>

<details>
<summary>Variant 5</summary>

```luau
"BANNER"
```

</details>

<details>
<summary>Variant 6</summary>

```luau
"COMMUNITY"
```

</details>

<details>
<summary>Variant 7</summary>

```luau
"CREATOR_MONETIZABLE_PROVISIONAL"
```

</details>

<details>
<summary>Variant 8</summary>

```luau
"CREATOR_STORE_PAGE"
```

</details>

<details>
<summary>Variant 9</summary>

```luau
"DEVELOPER_SUPPORT_SERVER"
```

</details>

<details>
<summary>Variant 10</summary>

```luau
"DISCOVERABLE"
```

</details>

<details>
<summary>Variant 11</summary>

```luau
"FEATURABLE"
```

</details>

<details>
<summary>Variant 12</summary>

```luau
"INVITES_DISABLED"
```

</details>

<details>
<summary>Variant 13</summary>

```luau
"INVITE_SPLASH"
```

</details>

<details>
<summary>Variant 14</summary>

```luau
"MEMBER_VERIFICATION_GATE_ENABLED"
```

</details>

<details>
<summary>Variant 15</summary>

```luau
"MORE_STICKERS"
```

</details>

<details>
<summary>Variant 16</summary>

```luau
"NEWS"
```

</details>

<details>
<summary>Variant 17</summary>

```luau
"PARTNERED"
```

</details>

<details>
<summary>Variant 18</summary>

```luau
"PREVIEW_ENABLED"
```

</details>

<details>
<summary>Variant 19</summary>

```luau
"RAID_ALERTS_DISABLED"
```

</details>

<details>
<summary>Variant 20</summary>

```luau
"ROLE_ICONS"
```

</details>

<details>
<summary>Variant 21</summary>

```luau
"ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE"
```

</details>

<details>
<summary>Variant 22</summary>

```luau
"ROLE_SUBSCRIPTIONS_ENABLED"
```

</details>

<details>
<summary>Variant 23</summary>

```luau
"TICKETED_EVENTS_ENABLED"
```

</details>

<details>
<summary>Variant 24</summary>

```luau
"VANITY_URL"
```

</details>

<details>
<summary>Variant 25</summary>

```luau
"VERIFIED"
```

</details>

<details>
<summary>Variant 26</summary>

```luau
"VIP_REGIONS"
```

</details>

<details>
<summary>Variant 27</summary>

```luau
"WELCOME_SCREEN_ENABLED"
```

</details>

<div id="MutableGuildFeatures"></div>

## MutableGuildFeatures

https://discord.com/developers/docs/resources/guild#guild-object-mutable-guild-features

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-object-mutable-guild-features
type MutableGuildFeatures = "COMMUNITY" | "DISCOVERABLE" | "INVITES_DISABLED" | "RAID_ALERTS_DISABLED"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"COMMUNITY"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"DISCOVERABLE"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"INVITES_DISABLED"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"RAID_ALERTS_DISABLED"
```

</details>

<div id="StickerType"></div>

## StickerType

https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types
type StickerType = number
```

</details>

[number](#number)

<div id="StickerFormatType"></div>

## StickerFormatType

https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types
type StickerFormatType = number
```

</details>

[number](#number)

<div id="OAuth2Scopes"></div>

## OAuth2Scopes

https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
type OAuth2Scopes = "activities.read" | "activities.write" | "applications.builds.read" | "applications.builds.upload" | "applications.commands" | "applications.commands.update" | "applications.commands.permissions.update" | "applications.entitlements" | "applications.store.update" | "bot" | "connections" | "dm_channels.read" | "email" | "gdm.join" | "guilds" | "guilds.join" | "guilds.members.read" | "identify" | "messages.read" | "relationships.read" | "role_connections.write" | "rpc" | "rpc.activities.write" | "rpc.notifications.read" | "rpc.voice.read" | "rpc.voice.write" | "voice" | "webhook.incoming"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"activities.read"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"activities.write"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"applications.builds.read"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"applications.builds.upload"
```

</details>

<details>
<summary>Variant 5</summary>

```luau
"applications.commands"
```

</details>

<details>
<summary>Variant 6</summary>

```luau
"applications.commands.update"
```

</details>

<details>
<summary>Variant 7</summary>

```luau
"applications.commands.permissions.update"
```

</details>

<details>
<summary>Variant 8</summary>

```luau
"applications.entitlements"
```

</details>

<details>
<summary>Variant 9</summary>

```luau
"applications.store.update"
```

</details>

<details>
<summary>Variant 10</summary>

```luau
"bot"
```

</details>

<details>
<summary>Variant 11</summary>

```luau
"connections"
```

</details>

<details>
<summary>Variant 12</summary>

```luau
"dm_channels.read"
```

</details>

<details>
<summary>Variant 13</summary>

```luau
"email"
```

</details>

<details>
<summary>Variant 14</summary>

```luau
"gdm.join"
```

</details>

<details>
<summary>Variant 15</summary>

```luau
"guilds"
```

</details>

<details>
<summary>Variant 16</summary>

```luau
"guilds.join"
```

</details>

<details>
<summary>Variant 17</summary>

```luau
"guilds.members.read"
```

</details>

<details>
<summary>Variant 18</summary>

```luau
"identify"
```

</details>

<details>
<summary>Variant 19</summary>

```luau
"messages.read"
```

</details>

<details>
<summary>Variant 20</summary>

```luau
"relationships.read"
```

</details>

<details>
<summary>Variant 21</summary>

```luau
"role_connections.write"
```

</details>

<details>
<summary>Variant 22</summary>

```luau
"rpc"
```

</details>

<details>
<summary>Variant 23</summary>

```luau
"rpc.activities.write"
```

</details>

<details>
<summary>Variant 24</summary>

```luau
"rpc.notifications.read"
```

</details>

<details>
<summary>Variant 25</summary>

```luau
"rpc.voice.read"
```

</details>

<details>
<summary>Variant 26</summary>

```luau
"rpc.voice.write"
```

</details>

<details>
<summary>Variant 27</summary>

```luau
"voice"
```

</details>

<details>
<summary>Variant 28</summary>

```luau
"webhook.incoming"
```

</details>

<div id="IntegrationType"></div>

## IntegrationType

https://discord.com/developers/docs/resources/guild#integration-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#integration-object
type IntegrationType = number
```

</details>

[number](#number)

<div id="ApplicationIntegrationType"></div>

## ApplicationIntegrationType

"twitch" | "youtube" | "discord" | "guild_subscriptions"

https://discord.com/developers/docs/resources/application#application-object-application-integration-types

<details>
<summary>Raw Type</summary>

```luau
-- "twitch" | "youtube" | "discord" | "guild_subscriptions"
-- https://discord.com/developers/docs/resources/application#application-object-application-integration-types
type ApplicationIntegrationType = number
```

</details>

[number](#number)

<div id="ApplicationCommandPermissionType"></div>

## ApplicationCommandPermissionType

https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-type

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-type
type ApplicationCommandPermissionType = number
```

</details>

[number](#number)

<div id="AutomoderationRuleEventType"></div>

## AutomoderationRuleEventType

https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types
type AutomoderationRuleEventType = number
```

</details>

[number](#number)

<div id="AutomoderationRuleTriggerType"></div>

## AutomoderationRuleTriggerType

https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types
type AutomoderationRuleTriggerType = number
```

</details>

[number](#number)

<div id="AutomoderationRuleKeywordPresetType"></div>

## AutomoderationRuleKeywordPresetType

https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-preset-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-preset-types
type AutomoderationRuleKeywordPresetType = number
```

</details>

[number](#number)

<div id="AutomoderationActionType"></div>

## AutomoderationActionType

https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-types
type AutomoderationActionType = number
```

</details>

[number](#number)

<div id="ChannelType"></div>

## ChannelType

https://discord.com/developers/docs/resources/channel#channel-object-channel-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#channel-object-channel-types
type ChannelType = number
```

</details>

[number](#number)

<div id="VideoQualityMode"></div>

## VideoQualityMode

https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes
type VideoQualityMode = number
```

</details>

[number](#number)

<div id="ChannelFlags"></div>

## ChannelFlags

https://discord.com/developers/docs/resources/channel#channel-object-channel-flags

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#channel-object-channel-flags
type ChannelFlags = number
```

</details>

[number](#number)

<div id="SortOrderType"></div>

## SortOrderType

https://discord.com/developers/docs/resources/channel#channel-object-sort-order-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#channel-object-sort-order-types
type SortOrderType = number
```

</details>

[number](#number)

<div id="ForumLayoutType"></div>

## ForumLayoutType

https://discord.com/developers/docs/resources/channel#channel-object-forum-layout-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#channel-object-forum-layout-types
type ForumLayoutType = number
```

</details>

[number](#number)

<div id="OverwriteObjectType"></div>

## OverwriteObjectType

https://discord.com/developers/docs/resources/channel#overwrite-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#overwrite-object
type OverwriteObjectType = number
```

</details>

[number](#number)

<div id="EntitlementType"></div>

## EntitlementType

https://discord.com/developers/docs/monetization/entitlements#entitlement-object-entitlement-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/monetization/entitlements#entitlement-object-entitlement-types
type EntitlementType = number
```

</details>

[number](#number)

<div id="ActivityType"></div>

## ActivityType

https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-types
type ActivityType = number
```

</details>

[number](#number)

<div id="PrivacyLevel"></div>

## PrivacyLevel

https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level
type PrivacyLevel = number
```

</details>

[number](#number)

<div id="GuildScheduledEventStatus"></div>

## GuildScheduledEventStatus

https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status
type GuildScheduledEventStatus = number
```

</details>

[number](#number)

<div id="GuildScheduledEventEntityType"></div>

## GuildScheduledEventEntityType

https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-types
type GuildScheduledEventEntityType = number
```

</details>

[number](#number)

<div id="IntegrationExpireBehaviours"></div>

## IntegrationExpireBehaviours

https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors
type IntegrationExpireBehaviours = number
```

</details>

[number](#number)

<div id="InteractionType"></div>

## InteractionType

https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type
type InteractionType = number
```

</details>

[number](#number)

<div id="EmbedType"></div>

## EmbedType

https://discord.com/developers/docs/resources/message#embed-object-embed-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/message#embed-object-embed-types
type EmbedType = "Rich" | "Image" | "Video" | "GIFV" | "Article" | "Link" | "PollResult"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Rich"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Image"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"Video"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"GIFV"
```

</details>

<details>
<summary>Variant 5</summary>

```luau
"Article"
```

</details>

<details>
<summary>Variant 6</summary>

```luau
"Link"
```

</details>

<details>
<summary>Variant 7</summary>

```luau
"PollResult"
```

</details>

<div id="MessageType"></div>

## MessageType

https://discord.com/developers/docs/resources/channel#message-object-message-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#message-object-message-types
type MessageType = number
```

</details>

[number](#number)

<div id="MessageActivityType"></div>

## MessageActivityType

https://discord.com/developers/docs/resources/channel#message-object-message-activity-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#message-object-message-activity-types
type MessageActivityType = number
```

</details>

[number](#number)

<div id="ButtonStyle"></div>

## ButtonStyle

https://discord.com/developers/docs/interactions/message-components#button-object-button-styles

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/message-components#button-object-button-styles
type ButtonStyle = number
```

</details>

[number](#number)

<div id="TextInputStyles"></div>

## TextInputStyles

https://discord.com/developers/docs/interactions/message-components#text-input-object-text-input-styles

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/message-components#text-input-object-text-input-styles
type TextInputStyles = number
```

</details>

[number](#number)

<div id="PollLayoutType"></div>

## PollLayoutType

https://discord.com/developers/docs/resources/poll#layout-type

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/poll#layout-type
type PollLayoutType = number
```

</details>

[number](#number)

<div id="ApplicationCommandOptionType"></div>

## ApplicationCommandOptionType

https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
type ApplicationCommandOptionType = number
```

</details>

[number](#number)

<div id="InteractionContextType"></div>

## InteractionContextType

https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-context-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-context-types
type InteractionContextType = number
```

</details>

[number](#number)

<div id="InviteTypes"></div>

## InviteTypes

https://discord.com/developers/docs/resources/invite#invite-object-invite-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/invite#invite-object-invite-types
type InviteTypes = number
```

</details>

[number](#number)

<div id="InviteTargetTypes"></div>

## InviteTargetTypes

https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types
type InviteTargetTypes = number
```

</details>

[number](#number)

<div id="ReactionType"></div>

## ReactionType

https://discord.com/developers/docs/resources/channel#get-reactions-reaction-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#get-reactions-reaction-types
type ReactionType = number
```

</details>

[number](#number)

<div id="ApplicationRoleConnectionMetadataType"></div>

## ApplicationRoleConnectionMetadataType

https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-type

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-type
type ApplicationRoleConnectionMetadataType = number
```

</details>

[number](#number)

<div id="ApplicationCommandType"></div>

## ApplicationCommandType

https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
type ApplicationCommandType = number
```

</details>

[number](#number)

<div id="AuditLogEventType"></div>

## AuditLogEventType

https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events
type AuditLogEventType = number
```

</details>

[number](#number)

<div id="WebhookType"></div>

## WebhookType

https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types
type WebhookType = number
```

</details>

[number](#number)

<div id="OnboardingMode"></div>

## OnboardingMode

https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-mode

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-mode
type OnboardingMode = number
```

</details>

[number](#number)

<div id="PromptTypes"></div>

## PromptTypes

https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-types
type PromptTypes = number
```

</details>

[number](#number)

<div id="ConnectionObjectServices"></div>

## ConnectionObjectServices

https://discord.com/developers/docs/resources/user#connection-object-services

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#connection-object-services
type ConnectionObjectServices = "battlenet" | "bungie" | "domain" | "ebay" | "epicgames" | "facebook" | "github" | "instagram" | "leagueoflegends" | "paypal" | "playstation" | "reddit" | "riotgames" | "spotify" | "skype" | "stream" | "tiktok" | "twitch" | "twitter" | "xbox" | "youtube"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"battlenet"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"bungie"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"domain"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"ebay"
```

</details>

<details>
<summary>Variant 5</summary>

```luau
"epicgames"
```

</details>

<details>
<summary>Variant 6</summary>

```luau
"facebook"
```

</details>

<details>
<summary>Variant 7</summary>

```luau
"github"
```

</details>

<details>
<summary>Variant 8</summary>

```luau
"instagram"
```

</details>

<details>
<summary>Variant 9</summary>

```luau
"leagueoflegends"
```

</details>

<details>
<summary>Variant 10</summary>

```luau
"paypal"
```

</details>

<details>
<summary>Variant 11</summary>

```luau
"playstation"
```

</details>

<details>
<summary>Variant 12</summary>

```luau
"reddit"
```

</details>

<details>
<summary>Variant 13</summary>

```luau
"riotgames"
```

</details>

<details>
<summary>Variant 14</summary>

```luau
"spotify"
```

</details>

<details>
<summary>Variant 15</summary>

```luau
"skype"
```

</details>

<details>
<summary>Variant 16</summary>

```luau
"stream"
```

</details>

<details>
<summary>Variant 17</summary>

```luau
"tiktok"
```

</details>

<details>
<summary>Variant 18</summary>

```luau
"twitch"
```

</details>

<details>
<summary>Variant 19</summary>

```luau
"twitter"
```

</details>

<details>
<summary>Variant 20</summary>

```luau
"xbox"
```

</details>

<details>
<summary>Variant 21</summary>

```luau
"youtube"
```

</details>

<div id="AllowedMentionTypes"></div>

## AllowedMentionTypes

https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types
type AllowedMentionTypes = "roles" | "users" | "everyone"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"roles"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"users"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"everyone"
```

</details>

<div id="ConnectionVisibilityTypes"></div>

## ConnectionVisibilityTypes

https://discord.com/developers/docs/resources/user#connection-object-visibility-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#connection-object-visibility-types
type ConnectionVisibilityTypes = number
```

</details>

[number](#number)

<div id="MessageReferenceType"></div>

## MessageReferenceType

https://discord.com/developers/docs/resources/channel#message-reference-types

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#message-reference-types
type MessageReferenceType = number
```

</details>

[number](#number)

<div id="GuildMemberFlags"></div>

## GuildMemberFlags

https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-flags

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-flags
type GuildMemberFlags = number
```

</details>

[number](#number)

<div id="InteractionCallbackType"></div>

## InteractionCallbackType

https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
type InteractionCallbackType = number
```

</details>

[number](#number)

<div id="ActivityTimestampObject"></div>

## ActivityTimestampObject

https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-timestamps

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-timestamps
type ActivityTimestampObject = {
	start: number,

	-- Unix time (in milliseconds) of when the activity started
	nil"end"nil: number
}
```

</details>

<TypeTable
	type={{
		"start": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"nil'end'nil": {
			type: "[number](#number)",
			description: "",
			required: true
		},
	}}
/>
<div id="ActivityEmojiObject"></div>

## ActivityEmojiObject

https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-emoji

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-emoji
type ActivityEmojiObject = {
	name: string,

	-- Name of the emoji
	id: Snowflake,

	-- ID of the emoji
	animated: boolean?
}
```

</details>

<TypeTable
	type={{
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"animated": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
	}}
/>
<div id="ActivityPartyObject"></div>

## ActivityPartyObject

https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-party

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-party
type ActivityPartyObject = {
	id: string,

	-- ID of the party
	size: {number}
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"size": {
			type: "\{[number](#number)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="ActivityAssetsObject"></div>

## ActivityAssetsObject

https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-assets

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-assets
type ActivityAssetsObject = {
	large_image: string,

	-- https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-asset-image
	large_text: string,

	-- Text displayed when hovering over the large image of the activity
	small_image: string,

	-- https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-asset-image
	small_text: string
}
```

</details>

<TypeTable
	type={{
		"large_image": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"large_text": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"small_image": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"small_text": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="ActivitySecretsObject"></div>

## ActivitySecretsObject

https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-secrets

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-secrets
type ActivitySecretsObject = {
	join: string?,

	-- Secret for joining a party
	spectate: string?,

	-- Secret for spectating a game
	match: string?
}
```

</details>

<TypeTable
	type={{
		"join": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"spectate": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"match": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="ActivityButtonsObject"></div>

## ActivityButtonsObject

https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-buttons

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-buttons
type ActivityButtonsObject = {
	label: string,

	-- Text shown on the button (1-32 characters)
	url: string
}
```

</details>

<TypeTable
	type={{
		"label": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"url": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="ActivityObject"></div>

## ActivityObject

https://discord.com/developers/docs/topics/gateway-events#activity-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#activity-object
type ActivityObject = {
	name: string,

	-- Activity's name
	type: number,

	-- Activity's type
	url: string?,

	-- Stream URL, is validated when type is 1
	created_at: number,

	-- Unix timestamp (in milliseconds) of when the activity was added to the user's session
	timestamps: ActivityTimestampObject,

	-- Unix timestamps for start and/or end of the game
	application_id: Snowflake,

	-- Application ID for the game
	details: string?,

	-- What the player is currently doing
	state: string?,

	-- User's current party status, or text used for a custom status
	emoji: ActivityEmojiObject?,

	-- Emoji used for a custom status
	party: ActivityPartyObject?,

	-- Information for the current party of the player
	assets: ActivityAssetsObject?,

	-- Images for the presence and their hover texts
	secrets: ActivitySecretsObject?,

	-- Secrets for Rich Presence joining and spectating
	instance: boolean?,

	-- Whether or not the activity is an instanced game session
	flags: number?,

	-- Activity flags ORd together, describes what the payload includes
	buttons: {ActivityButtonsObject}?
}
```

</details>

<TypeTable
	type={{
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"type": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"created_at": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"timestamps": {
			type: "[ActivityTimestampObject](#ActivityTimestampObject)",
			description: "",
			required: true
		},
		"application_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"details": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"state": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"emoji": {
			type: "[ActivityEmojiObject](#ActivityEmojiObject)?",
			description: "",
			required: false
		},
		"party": {
			type: "[ActivityPartyObject](#ActivityPartyObject)?",
			description: "",
			required: false
		},
		"assets": {
			type: "[ActivityAssetsObject](#ActivityAssetsObject)?",
			description: "",
			required: false
		},
		"secrets": {
			type: "[ActivitySecretsObject](#ActivitySecretsObject)?",
			description: "",
			required: false
		},
		"instance": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"flags": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"buttons": {
			type: "\{[ActivityButtonsObject](#ActivityButtonsObject)\}?",
			description: "",
			required: false
		},
	}}
/>
<div id="PresenceObject"></div>

## PresenceObject

https://discord.com/developers/docs/topics/gateway-events#update-presence

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#update-presence
type PresenceObject = {
	since: number,

	-- Unix time (in milliseconds) of when the client went idle, or null if the client is not idle
	activities: {ActivityObject},

	-- User's activities
	status: string,

	-- User's new status
	afk: boolean
}
```

</details>

<TypeTable
	type={{
		"since": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"activities": {
			type: "\{[ActivityObject](#ActivityObject)\}",
			description: "",
			required: true
		},
		"status": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"afk": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
	}}
/>
<div id="IdentifyPropertiesObject"></div>

## IdentifyPropertiesObject

https://discord.com/developers/docs/topics/gateway-events#identify-identify-connection-properties

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#identify-identify-connection-properties
type IdentifyPropertiesObject = {
	os: string,

	browser: string,

	device: string
}
```

</details>

<TypeTable
	type={{
		"os": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"browser": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"device": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="AvatarDecorationDataObject"></div>

## AvatarDecorationDataObject

https://discord.com/developers/docs/resources/user#avatar-decoration-data-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#avatar-decoration-data-object
type AvatarDecorationDataObject = {
	asset: string,

	-- the avatar decoration hash
	sku_id: Snowflake
}
```

</details>

<TypeTable
	type={{
		"asset": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"sku_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
	}}
/>
<div id="UserObject"></div>

## UserObject

https://discord.com/developers/docs/resources/user#user-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#user-object
type UserObject = {
	id: Snowflake,

	-- the user's id
	username: string,

	-- the user's username, not unique across the platform
	discriminator: string,

	-- the user's Discord-tag
	global_name: string,

	-- the user's display name, if it is set. For bots, this is the application name
	avatar: string,

	-- the user's avatar hash
	bot: boolean?,

	-- whether the user belongs to an OAuth2 application
	system: boolean?,

	-- whether the user is an Official Discord System user (part of the urgent message system)
	mfa_enabled: boolean?,

	-- whether the user has two factor enabled on their account
	banner: string?,

	-- the user's banner hash
	accent_color: number?,

	-- the user's banner color encoded as an integer representation of hexadecimal color code
	locale: LanguageLocales?,

	-- the user's chosen language option
	verified: boolean?,

	-- whether the email on this account has been verified
	email: string?,

	-- the user's email
	flags: number?,

	-- the flags on a user's account
	premium_type: PremiumTypes?,

	-- the type of Nitro subscription on a user's account
	public_flags: number?,

	-- the public flags on a user's account
	avatar_decoration_data: AvatarDecorationDataObject?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"username": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"discriminator": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"global_name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"avatar": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"bot": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"system": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"mfa_enabled": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"banner": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"accent_color": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"locale": {
			type: "[LanguageLocales](#LanguageLocales)?",
			description: "",
			required: false
		},
		"verified": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"email": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"flags": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"premium_type": {
			type: "[PremiumTypes](#PremiumTypes)?",
			description: "",
			required: false
		},
		"public_flags": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"avatar_decoration_data": {
			type: "[AvatarDecorationDataObject](#AvatarDecorationDataObject)?",
			description: "",
			required: false
		},
	}}
/>
<div id="UnavailableGuildObject"></div>

## UnavailableGuildObject

https://discord.com/developers/docs/resources/guild#unavailable-guild-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#unavailable-guild-object
type UnavailableGuildObject = {
	id: Snowflake,

	-- guild id
	unavailable: boolean
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"unavailable": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
	}}
/>
<div id="TeamMemberObject"></div>

## TeamMemberObject

https://discord.com/developers/docs/topics/teams#data-models-team-member-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/teams#data-models-team-member-object
type TeamMemberObject = {
	membership_state: MembershipState,

	-- User's membership state on the team
	team_id: Snowflake,

	-- ID of the parent team of which they are a member
	user: UserObject,

	-- Avatar, discriminator, ID, and username of the user
	role: TeamMemberRole
}
```

</details>

<TypeTable
	type={{
		"membership_state": {
			type: "[MembershipState](#MembershipState)",
			description: "",
			required: true
		},
		"team_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"user": {
			type: "[UserObject](#UserObject)",
			description: "",
			required: true
		},
		"role": {
			type: "[TeamMemberRole](#TeamMemberRole)",
			description: "",
			required: true
		},
	}}
/>
<div id="TeamObject"></div>

## TeamObject

https://discord.com/developers/docs/topics/teams#data-models-team-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/teams#data-models-team-object
type TeamObject = {
	icon: string,

	-- Hash of the image of the team's icon
	id: Snowflake,

	-- Unique ID of the team
	members: {TeamMemberObject},

	-- Members of the team
	name: string,

	-- Name of the team
	owner_user_id: Snowflake
}
```

</details>

<TypeTable
	type={{
		"icon": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"members": {
			type: "\{[TeamMemberObject](#TeamMemberObject)\}",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"owner_user_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
	}}
/>
<div id="GuildRoleTagObject"></div>

## GuildRoleTagObject

https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
type GuildRoleTagObject = {
	bot_id: Snowflake?,

	-- the id of the bot this role belongs to
	integration_id: Snowflake?,

	-- the id of the integration this role belongs to
	premium_subscriber: nil,

	-- whether this is the guild's Booster role
	subscription_listing_id: Snowflake,

	-- the id of this role's subscription sku and listing
	available_for_purchase: nil,

	-- whether this role is available for purchase
	guild_connections: nil
}
```

</details>

<TypeTable
	type={{
		"bot_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"integration_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"premium_subscriber": {
			type: "[nil](#nil)",
			description: "",
			required: true
		},
		"subscription_listing_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"available_for_purchase": {
			type: "[nil](#nil)",
			description: "",
			required: true
		},
		"guild_connections": {
			type: "[nil](#nil)",
			description: "",
			required: true
		},
	}}
/>
<div id="GuildRoleObject"></div>

## GuildRoleObject

https://discord.com/developers/docs/topics/permissions#role-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/permissions#role-object
type GuildRoleObject = {
	id: Snowflake,

	-- role id
	name: string,

	-- role name
	color: number,

	-- integer representation of hexadecimal color code
	hoist: boolean,

	-- if this role is pinned in the user listing
	icon: string?,

	-- role icon hash
	unicode_emoji: string?,

	-- role unicode emoji
	position: number,

	-- position of this role (roles with the same position are sorted by id)
	permissions: string,

	-- permission bit set
	managed: boolean,

	-- whether this role is managed by an integration
	mentionable: boolean,

	-- whether this role is mentionable
	tags: GuildRoleTagObject?,

	-- the tags this role has
	flags: number
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"color": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"hoist": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"icon": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"unicode_emoji": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"position": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"permissions": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"managed": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"mentionable": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"tags": {
			type: "[GuildRoleTagObject](#GuildRoleTagObject)?",
			description: "",
			required: false
		},
		"flags": {
			type: "[number](#number)",
			description: "",
			required: true
		},
	}}
/>
<div id="EmojiObject"></div>

## EmojiObject

https://discord.com/developers/docs/resources/emoji#emoji-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/emoji#emoji-object
type EmojiObject = {
	id: Snowflake?,

	-- 	emoji id
	name: string,

	-- emoji name
	roles: {Snowflake}?,

	-- roles allowed to use this emoji
	user: UserObject?,

	-- user that created this emoji
	require_colons: boolean?,

	-- whether this emoji must be wrapped in colons
	managed: boolean?,

	-- whether this emoji is managed
	animated: boolean?,

	-- whether this emoji is animated
	available: boolean?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"roles": {
			type: "\{[Snowflake](#Snowflake)\}?",
			description: "",
			required: false
		},
		"user": {
			type: "[UserObject](#UserObject)?",
			description: "",
			required: false
		},
		"require_colons": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"managed": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"animated": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"available": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
	}}
/>
<div id="WelcomeScreenChannelObject"></div>

## WelcomeScreenChannelObject

https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure
type WelcomeScreenChannelObject = {
	channel_id: Snowflake?,

	-- the channel's id
	description: string?,

	-- the description shown for the channel
	emoji_id: Snowflake?,

	-- the emoji id, if the emoji is custom
	emoji_name: string?
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"description": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"emoji_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"emoji_name": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="WelcomeScreenObject"></div>

## WelcomeScreenObject

https://discord.com/developers/docs/resources/guild#welcome-screen-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#welcome-screen-object
type WelcomeScreenObject = {
	description: string,

	-- the server description shown in the welcome screen
	welcome_channels: {WelcomeScreenChannelObject}
}
```

</details>

<TypeTable
	type={{
		"description": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"welcome_channels": {
			type: "\{[WelcomeScreenChannelObject](#WelcomeScreenChannelObject)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="StickerObject"></div>

## StickerObject

https://discord.com/developers/docs/resources/sticker#sticker-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/sticker#sticker-object
type StickerObject = {
	id: Snowflake,

	-- id of the sticker
	pack_id: Snowflake,

	-- for standard stickers, id of the pack the sticker is from
	name: string,

	-- name of the sticker
	description: string?,

	-- description of the sticker
	tags: string,

	-- autocomplete/suggestion tags for the sticker (max 200 characters)
	asset: string?,

	-- Deprecated previously the sticker asset hash, now an empty string
	type: StickerType,

	-- type of sticker
	format_type: StickerFormatType,

	-- 	type of sticker format
	available: boolean?,

	-- whether this guild sticker can be used, may be false due to loss of Server Boosts
	guild_id: Snowflake?,

	-- id of the guild that owns this sticker
	user: UserObject?,

	-- the user that uploaded the guild sticker
	sort_value: number?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"pack_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"description": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"tags": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"asset": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"type": {
			type: "[StickerType](#StickerType)",
			description: "",
			required: true
		},
		"format_type": {
			type: "[StickerFormatType](#StickerFormatType)",
			description: "",
			required: true
		},
		"available": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"guild_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"user": {
			type: "[UserObject](#UserObject)?",
			description: "",
			required: false
		},
		"sort_value": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
	}}
/>
<div id="GuildObject"></div>

## GuildObject

https://discord.com/developers/docs/resources/guild#guild-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-object
type GuildObject = {
	id: Snowflake?,

	-- guild id
	name: string?,

	-- guild name (2-100 characters, excluding trailing and leading whitespace)
	icon: string?,

	-- icon hash
	icon_hash: string?,

	-- icon hash, returned when in the template object
	splash: string?,

	-- 	splash hash
	discovery_splash: string?,

	-- discovery splash hash; only present for guilds with the "DISCOVERABLE" feature
	owner: boolean?,

	-- true if the user is the owner of the guild
	owner_id: Snowflake?,

	-- id of owner
	permissions: string?,

	-- total permissions for the user in the guild (excludes overwrites and implicit permissions)
	region: string?,

	-- voice region id for the guild (deprecated)
	afk_channel_id: Snowflake?,

	-- id of afk channel
	afk_timeout: number?,

	-- afk timeout in seconds
	widget_enabled: boolean?,

	-- true if the server widget is enabled
	widget_channel_id: Snowflake?,

	-- the channel id that the widget will generate an invite to, or null if set to no invite
	verification_level: VerificationLevel?,

	-- verification level required for the guild
	default_message_notifications: DefaultMessageNotification?,

	-- default message notifications level
	explicit_content_filter: ExplicitContentFilterLevel?,

	-- explicit content filter level
	roles: {GuildRoleObject}?,

	-- roles in the guild
	emojis: {EmojiObject}?,

	-- custom guild emojis
	features: {GuildFeature}?,

	-- enabled guild features
	mfa_level: MFALevel?,

	-- required MFA level for the guild
	application_id: Snowflake?,

	-- application id of the guild creator if it is bot-created
	system_channel_id: Snowflake?,

	-- the id of the channel where guild notices such as welcome messages and boost events are posted
	system_channel_flags: SystemChannelFlags?,

	-- system channel flags
	rules_channel_id: Snowflake?,

	-- the id of the channel where Community guilds can display rules and/or guidelines
	max_presences: number?,

	-- the maximum number of presences for the guild (null is always returned, apart from the largest of guilds)
	max_members: number?,

	-- the maximum number of members for the guild
	vanity_url_code: string?,

	-- the vanity url code for the guild
	description: string?,

	-- the description of a guild
	banner: string?,

	-- banner hash
	premium_tier: PremiumTier?,

	-- premium tier (Server Boost level)
	premium_subscription_count: number?,

	-- the number of boosts this guild currently has
	preferred_locale: LanguageLocales?,

	-- the preferred locale of a Community guild; used in server discovery and notices from Discord, and sent in interactions; defaults to "en-US"
	public_updates_channel_id: Snowflake?,

	-- the id of the channel where admins and moderators of Community guilds receive notices from Discord
	max_video_channel_users: number?,

	-- the maximum amount of users in a video channel
	max_stage_video_channel_users: number?,

	-- the maximum amount of users in a stage video channel
	approximate_member_count: number?,

	-- approximate number of members in this guild, returned from the GET /guilds/<id> and /users/@me/guilds endpoints when with_counts is true
	approximate_presence_count: number?,

	-- approximate number of non-offline members in this guild, returned from the GET /guilds/<id> and /users/@me/guilds endpoints when with_counts is true
	welcome_screen: WelcomeScreenObject?,

	-- the welcome screen of a Community guild, shown to new members, returned in an Invite's guild object
	nsfw_level: GuildNSFWLevel?,

	-- 	guild NSFW level
	stickers: {StickerObject}?,

	-- custom guild stickers
	premium_progress_bar_enabled: boolean?,

	-- whether the guild has the boost progress bar enabled
	safety_alerts_channel_id: Snowflake?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"name": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"icon": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"icon_hash": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"splash": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"discovery_splash": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"owner": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"owner_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"permissions": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"region": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"afk_channel_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"afk_timeout": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"widget_enabled": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"widget_channel_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"verification_level": {
			type: "[VerificationLevel](#VerificationLevel)?",
			description: "",
			required: false
		},
		"default_message_notifications": {
			type: "[DefaultMessageNotification](#DefaultMessageNotification)?",
			description: "",
			required: false
		},
		"explicit_content_filter": {
			type: "[ExplicitContentFilterLevel](#ExplicitContentFilterLevel)?",
			description: "",
			required: false
		},
		"roles": {
			type: "\{[GuildRoleObject](#GuildRoleObject)\}?",
			description: "",
			required: false
		},
		"emojis": {
			type: "\{[EmojiObject](#EmojiObject)\}?",
			description: "",
			required: false
		},
		"features": {
			type: "\{[GuildFeature](#GuildFeature)\}?",
			description: "",
			required: false
		},
		"mfa_level": {
			type: "[MFALevel](#MFALevel)?",
			description: "",
			required: false
		},
		"application_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"system_channel_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"system_channel_flags": {
			type: "[SystemChannelFlags](#SystemChannelFlags)?",
			description: "",
			required: false
		},
		"rules_channel_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"max_presences": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"max_members": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"vanity_url_code": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"description": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"banner": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"premium_tier": {
			type: "[PremiumTier](#PremiumTier)?",
			description: "",
			required: false
		},
		"premium_subscription_count": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"preferred_locale": {
			type: "[LanguageLocales](#LanguageLocales)?",
			description: "",
			required: false
		},
		"public_updates_channel_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"max_video_channel_users": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"max_stage_video_channel_users": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"approximate_member_count": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"approximate_presence_count": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"welcome_screen": {
			type: "[WelcomeScreenObject](#WelcomeScreenObject)?",
			description: "",
			required: false
		},
		"nsfw_level": {
			type: "[GuildNSFWLevel](#GuildNSFWLevel)?",
			description: "",
			required: false
		},
		"stickers": {
			type: "\{[StickerObject](#StickerObject)\}?",
			description: "",
			required: false
		},
		"premium_progress_bar_enabled": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"safety_alerts_channel_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
	}}
/>
<div id="InstallParamsObject"></div>

## InstallParamsObject

https://discord.com/developers/docs/resources/application#install-params-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/application#install-params-object
type InstallParamsObject = {
	scopes: {OAuth2Scopes},

	-- Scopes to add the application to the server with
	permissions: string
}
```

</details>

<TypeTable
	type={{
		"scopes": {
			type: "\{[OAuth2Scopes](#OAuth2Scopes)\}",
			description: "",
			required: true
		},
		"permissions": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="ApplicationObject"></div>

## ApplicationObject

https://discord.com/developers/docs/resources/application#application-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/application#application-object
type ApplicationObject = {
	id: Snowflake,

	-- ID of the app
	name: string,

	-- Name of the app
	icon: string?,

	-- Icon hash of the app
	description: string,

	-- Description of the app
	rpc_origins: {string}?,

	-- List of RPC origin URLs, if RPC is enabled
	bot_public: boolean,

	-- When false, only the app owner can add the app to guilds
	bot_require_code_grant: boolean,

	-- When true, the app's bot will only join upon completion of the full OAuth2 code grant flow
	bot: UserObject?,

	-- Partial user object for the bot user associated with the app
	terms_of_service_url: string?,

	-- URL of the app's Terms of Service
	privacy_policy_url: string?,

	-- URL of the app's Privacy Policy
	owner: UserObject?,

	-- Partial user object for the owner of the app
	summary: string,

	-- deprecated and will be removed in v11. An empty string.
	verify_key: string,

	-- Hex encoded key for verification in interactions and the GameSDK's GetTicket
	team: TeamObject?,

	-- If the app belongs to a team, this will be a list of the members of that team
	guild_id: Snowflake?,

	-- Guild associated with the app. For example, a developer support server.
	guild: GuildObject?,

	-- Partial object of the associated guild
	primary_sku_id: Snowflake?,

	-- If this app is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists
	slug: string?,

	-- If this app is a game sold on Discord, this field will be the URL slug that links to the store page
	cover_image: string?,

	-- App's default rich presence invite cover image hash
	flags: number?,

	-- App's public flags
	approximate_guild_count: number?,

	-- Approximate count of guilds the app has been added to
	redirect_uris: {string}?,

	-- Array of redirect URIs for the app
	interactions_endpoint_url: string?,

	-- Interactions endpoint URL for the app
	role_connections_verification_url: string?,

	-- Role connection verification URL for the app
	tags: {string}?,

	-- List of tags describing the content and functionality of the app. Max of 5 tags.
	install_params: InstallParamsObject?,

	-- Settings for the app's default in-app authorization link, if enabled
	integration_types_config: {
		[ApplicationIntegrationType]: boolean
	}?,

	-- In preview. Default scopes and permissions for each supported installation context. Value for each key is an integration type configuration object
	custom_install_url: string?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"icon": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"description": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"rpc_origins": {
			type: "\{[string](#string)\}?",
			description: "",
			required: false
		},
		"bot_public": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"bot_require_code_grant": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"bot": {
			type: "[UserObject](#UserObject)?",
			description: "",
			required: false
		},
		"terms_of_service_url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"privacy_policy_url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"owner": {
			type: "[UserObject](#UserObject)?",
			description: "",
			required: false
		},
		"summary": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"verify_key": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"team": {
			type: "[TeamObject](#TeamObject)?",
			description: "",
			required: false
		},
		"guild_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"guild": {
			type: "[GuildObject](#GuildObject)?",
			description: "",
			required: false
		},
		"primary_sku_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"slug": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"cover_image": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"flags": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"approximate_guild_count": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"redirect_uris": {
			type: "\{[string](#string)\}?",
			description: "",
			required: false
		},
		"interactions_endpoint_url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"role_connections_verification_url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"tags": {
			type: "\{[string](#string)\}?",
			description: "",
			required: false
		},
		"install_params": {
			type: "[InstallParamsObject](#InstallParamsObject)?",
			description: "",
			required: false
		},
		"integration_types_config": {
			type: "\{[ApplicationIntegrationType]: [boolean](#boolean)\}?",
			description: "",
			required: false
		},
		"custom_install_url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="GuildApplicationCommandPermissionObject"></div>

## GuildApplicationCommandPermissionObject

https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure
type GuildApplicationCommandPermissionObject = {
	id: Snowflake,

	-- ID of the role, user, or channel. It can also be a permission constant
	type: ApplicationCommandPermissionType,

	-- role (1), user (2), or channel (3)
	permission: boolean
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"type": {
			type: "[ApplicationCommandPermissionType](#ApplicationCommandPermissionType)",
			description: "",
			required: true
		},
		"permission": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
	}}
/>
<div id="GuildApplicationCommandPermissionsObject"></div>

## GuildApplicationCommandPermissionsObject

https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure
type GuildApplicationCommandPermissionsObject = {
	id: Snowflake,

	-- ID of the command or the application ID
	application_id: Snowflake,

	-- ID of the application the command belongs to
	guild_id: Snowflake,

	-- ID of the guild
	permissions: {GuildApplicationCommandPermissionObject}
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"application_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"guild_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"permissions": {
			type: "\{[GuildApplicationCommandPermissionObject](#GuildApplicationCommandPermissionObject)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="AutomoderationRuleTriggerMetadataObject"></div>

## AutomoderationRuleTriggerMetadataObject

https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-metadata

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-metadata
type AutomoderationRuleTriggerMetadataObject = {
	keyword_filter: {string},

	-- substrings which will be searched for in content (Maximum of 1000)
	regex_patterns: {string},

	-- regular expression patterns which will be matched against content (Maximum of 10)
	presets: {AutomoderationRuleKeywordPresetType},

	-- the internally pre-defined wordsets which will be searched for in content
	allow_list: {string},

	-- substrings which should not trigger the rule (Maximum of 100 or 1000)
	mention_total_limit: number,

	-- total number of unique role and user mentions allowed per message (Maximum of 50)
	mention_raid_protection_enabled: boolean
}
```

</details>

<TypeTable
	type={{
		"keyword_filter": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
		"regex_patterns": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
		"presets": {
			type: "\{[AutomoderationRuleKeywordPresetType](#AutomoderationRuleKeywordPresetType)\}",
			description: "",
			required: true
		},
		"allow_list": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
		"mention_total_limit": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"mention_raid_protection_enabled": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
	}}
/>
<div id="AutmoderationActionMetadataObject"></div>

## AutmoderationActionMetadataObject

https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata
type AutmoderationActionMetadataObject = {
	channel_id: Snowflake,

	-- channel to which user content should be logged
	duration_seconds: number,

	-- timeout duration in seconds, maximum of 2419200 seconds (4 weeks)
	custom_message: string?
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"duration_seconds": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"custom_message": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="AutomoderationActionObject"></div>

## AutomoderationActionObject

https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object
type AutomoderationActionObject = {
	type: AutomoderationActionType,

	-- the type of action
	metadata: AutmoderationActionMetadataObject?
}
```

</details>

<TypeTable
	type={{
		"type": {
			type: "[AutomoderationActionType](#AutomoderationActionType)",
			description: "",
			required: true
		},
		"metadata": {
			type: "[AutmoderationActionMetadataObject](#AutmoderationActionMetadataObject)?",
			description: "",
			required: false
		},
	}}
/>
<div id="AutomoderationRuleObject"></div>

## AutomoderationRuleObject

https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object
type AutomoderationRuleObject = {
	id: Snowflake,

	-- the id of this rule
	guild_id: Snowflake,

	-- the id of the guild which this rule belongs to
	name: string,

	-- the rule name
	creator_id: Snowflake,

	-- the user which first created this rule
	event_type: AutomoderationRuleEventType,

	-- the rule event type
	trigger_type: AutomoderationRuleTriggerType,

	-- the rule trigger type
	trigger_metadata: AutomoderationRuleTriggerMetadataObject,

	-- the rule trigger metadata
	actions: {AutomoderationActionObject},

	-- the actions which will execute when the rule is triggered
	enabled: boolean,

	-- whether the rule is enabled
	exempt_roles: {Snowflake},

	-- the role ids that should not be affected by the rule (Maximum of 20)
	exempt_channels: {Snowflake}
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"guild_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"creator_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"event_type": {
			type: "[AutomoderationRuleEventType](#AutomoderationRuleEventType)",
			description: "",
			required: true
		},
		"trigger_type": {
			type: "[AutomoderationRuleTriggerType](#AutomoderationRuleTriggerType)",
			description: "",
			required: true
		},
		"trigger_metadata": {
			type: "[AutomoderationRuleTriggerMetadataObject](#AutomoderationRuleTriggerMetadataObject)",
			description: "",
			required: true
		},
		"actions": {
			type: "\{[AutomoderationActionObject](#AutomoderationActionObject)\}",
			description: "",
			required: true
		},
		"enabled": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"exempt_roles": {
			type: "\{[Snowflake](#Snowflake)\}",
			description: "",
			required: true
		},
		"exempt_channels": {
			type: "\{[Snowflake](#Snowflake)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="OverwriteObject"></div>

## OverwriteObject

https://discord.com/developers/docs/resources/channel#overwrite-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#overwrite-object
type OverwriteObject = {
	id: Snowflake,

	-- role or user id
	type: OverwriteObjectType,

	-- either 0 (role) or 1 (member)
	allow: string,

	-- permission bit set
	deny: string
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"type": {
			type: "[OverwriteObjectType](#OverwriteObjectType)",
			description: "",
			required: true
		},
		"allow": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"deny": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="ThreadMetadataObject"></div>

## ThreadMetadataObject

https://discord.com/developers/docs/resources/channel#thread-metadata-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#thread-metadata-object
type ThreadMetadataObject = {
	archived: boolean,

	-- whether the thread is archived
	auto_archive_duration: number,

	-- the thread will stop showing in the channel list after auto_archive_duration minutes of inactivity, can be set to: 60, 1440, 4320, 10080
	archive_timestamp: string,

	-- timestamp when the thread's archive status was last changed, used for calculating recent activity
	locked: boolean,

	-- whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it
	invitable: boolean?,

	-- whether non-moderators can add other non-moderators to a thread; only available on private threads
	create_timestamp: string
}
```

</details>

<TypeTable
	type={{
		"archived": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"auto_archive_duration": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"archive_timestamp": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"locked": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"invitable": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"create_timestamp": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="GuildMemberObject"></div>

## GuildMemberObject

https://discord.com/developers/docs/resources/guild#guild-member-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-member-object
type GuildMemberObject = {
	user: UserObject?,

	-- the user this guild member represents
	nick: string?,

	-- this user's guild nickname
	avatar: string?,

	-- the member's guild avatar hash
	roles: {Snowflake},

	-- array of role object ids
	joined_at: string,

	-- when the user joined the guild
	premium_since: string?,

	-- when the user started boosting the guild
	deaf: boolean,

	-- whether the user is deafened in voice channels
	mute: boolean,

	-- whether the user is muted in voice channels
	flags: number,

	-- guild member flags represented as a bit set, defaults to 0
	pending: boolean?,

	-- whether the user has not yet passed the guild's Membership Screening requirements
	permissions: string?,

	-- total permissions of the member in the channel, including overwrites, returned when in the interaction object
	communication_disabled_until: string?,

	-- when the user's timeout will expire and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed out
	avatar_decoration_data: AvatarDecorationDataObject?
}
```

</details>

<TypeTable
	type={{
		"user": {
			type: "[UserObject](#UserObject)?",
			description: "",
			required: false
		},
		"nick": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"avatar": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"roles": {
			type: "\{[Snowflake](#Snowflake)\}",
			description: "",
			required: true
		},
		"joined_at": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"premium_since": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"deaf": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"mute": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"flags": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"pending": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"permissions": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"communication_disabled_until": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"avatar_decoration_data": {
			type: "[AvatarDecorationDataObject](#AvatarDecorationDataObject)?",
			description: "",
			required: false
		},
	}}
/>
<div id="ThreadMemberObject"></div>

## ThreadMemberObject

https://discord.com/developers/docs/resources/channel#thread-member-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#thread-member-object
type ThreadMemberObject = {
	id: Snowflake?,

	-- ID of the thread
	user_id: Snowflake?,

	-- ID of the user
	join_timestamp: string,

	-- Time the user last joined the thread
	flags: number,

	-- Any user-thread settings, currently only used for notifications
	member: GuildMemberObject?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"user_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"join_timestamp": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"flags": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"member": {
			type: "[GuildMemberObject](#GuildMemberObject)?",
			description: "",
			required: false
		},
	}}
/>
<div id="ForumTagObject"></div>

## ForumTagObject

https://discord.com/developers/docs/resources/channel#forum-tag-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#forum-tag-object
type ForumTagObject = {
	id: Snowflake,

	-- the id of the tag
	name: string,

	-- the name of the tag (0-20 characters)
	moderated: boolean,

	-- whether this tag can only be added to or removed from threads by a member with the MANAGE_THREADS permission
	emoji_id: string?,

	-- the id of a guild's custom emoji
	emoji_name: string?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"moderated": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"emoji_id": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"emoji_name": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="DefaultReactionObject"></div>

## DefaultReactionObject

https://discord.com/developers/docs/resources/channel#default-reaction-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#default-reaction-object
type DefaultReactionObject = {
	emoji_id: string?,

	-- the id of a guild's custom emoji
	emoji_name: string?
}
```

</details>

<TypeTable
	type={{
		"emoji_id": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"emoji_name": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="ChannelObject"></div>

## ChannelObject

https://discord.com/developers/docs/resources/channel#channel-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#channel-object
type ChannelObject = {
	id: Snowflake,

	-- the id of this channel
	type: ChannelType,

	-- the type of channel
	guild_id: Snowflake?,

	-- the id of the guild (may be missing for some channel objects received over gateway guild dispatches)
	position: number,

	-- sorting position of the channel (channels with the same position are sorted by id)
	permission_overwrites: {OverwriteObject},

	-- explicit permission overwrites for members and roles
	name: string,

	-- the name of the channel (1-100 characters)
	topic: string?,

	-- the channel topic (0-4096 characters for GUILD_FORUM and GUILD_MEDIA channels, 0-1024 characters for all others)
	nsfw: boolean?,

	-- whether the channel is nsfw
	last_message_id: Snowflake?,

	-- the id of the last message sent in this channel (or thread for GUILD_FORUM or GUILD_MEDIA channels) (may not point to an existing or valid message or thread)
	bitrate: number?,

	-- the bitrate (in bits) of the voice channel
	user_limit: number?,

	-- the user limit of the voice channel
	rate_limit_per_user: number?,

	-- amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected
	recipients: {UserObject}?,

	-- the recipients of the DM
	icon: string?,

	-- icon hash of the group DM
	owner_id: Snowflake?,

	-- id of the creator of the group DM or thread
	application_id: Snowflake?,

	-- application id of the group DM creator if it is bot-created
	managed: boolean?,

	-- for group DM channels: whether the channel is managed by an application via the gdm.join OAuth2 scope
	parent_id: Snowflake?,

	-- for guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created
	last_pin_timestamp: string?,

	-- when the last pinned message was pinned. This may be null in events such as GUILD_CREATE when a message is not pinned.
	rtc_region: string?,

	-- voice region id for the voice channel, automatic when set to null
	video_quality_mode: VideoQualityMode?,

	-- the camera video quality mode of the voice channel, 1 when not present
	message_count: number?,

	-- number of messages (not including the initial message or deleted messages) in a thread.
	member_count: number?,

	-- an approximate count of users in a thread, stops counting at 50
	thread_metadata: ThreadMetadataObject?,

	-- thread-specific fields not needed by other channels
	member: ThreadMemberObject?,

	-- thread member object for the current user, if they have joined the thread, only included on certain API endpoints
	default_auto_archive_duration: number?,

	-- default duration, copied onto newly created threads, in minutes, threads will stop showing in the channel list after the specified period of inactivity, can be set to: 60, 1440, 4320, 10080
	permissions: string?,

	-- computed permissions for the invoking user in the channel, including overwrites, only included when part of the resolved data received on a slash command interaction. This does not include implicit permissions, which may need to be checked separately
	flags: ChannelFlags?,

	-- channel flags combined as a bitfield
	total_message_sent: number?,

	-- number of messages ever sent in a thread, it's similar to message_count on message creation, but will not decrement the number when a message is deleted
	available_tags: {ForumTagObject}?,

	-- the set of tags that can be used in a GUILD_FORUM or a GUILD_MEDIA channel
	applied_tags: {Snowflake}?,

	-- the IDs of the set of tags that have been applied to a thread in a GUILD_FORUM or a GUILD_MEDIA channel
	default_reaction_emoji: DefaultReactionObject?,

	-- the emoji to show in the add reaction button on a thread in a GUILD_FORUM or a GUILD_MEDIA channel
	default_thread_rate_limit_per_user: number?,

	-- the initial rate_limit_per_user to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update.
	default_sort_order: SortOrderType?,

	-- the default sort order type used to order posts in GUILD_FORUM and GUILD_MEDIA channels. Defaults to null, which indicates a preferred sort order hasn't been set by a channel admin
	default_forum_layout: ForumLayoutType?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"type": {
			type: "[ChannelType](#ChannelType)",
			description: "",
			required: true
		},
		"guild_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"position": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"permission_overwrites": {
			type: "\{[OverwriteObject](#OverwriteObject)\}",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"topic": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"nsfw": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"last_message_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"bitrate": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"user_limit": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"rate_limit_per_user": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"recipients": {
			type: "\{[UserObject](#UserObject)\}?",
			description: "",
			required: false
		},
		"icon": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"owner_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"application_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"managed": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"parent_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"last_pin_timestamp": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"rtc_region": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"video_quality_mode": {
			type: "[VideoQualityMode](#VideoQualityMode)?",
			description: "",
			required: false
		},
		"message_count": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"member_count": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"thread_metadata": {
			type: "[ThreadMetadataObject](#ThreadMetadataObject)?",
			description: "",
			required: false
		},
		"member": {
			type: "[ThreadMemberObject](#ThreadMemberObject)?",
			description: "",
			required: false
		},
		"default_auto_archive_duration": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"permissions": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"flags": {
			type: "[ChannelFlags](#ChannelFlags)?",
			description: "",
			required: false
		},
		"total_message_sent": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"available_tags": {
			type: "\{[ForumTagObject](#ForumTagObject)\}?",
			description: "",
			required: false
		},
		"applied_tags": {
			type: "\{[Snowflake](#Snowflake)\}?",
			description: "",
			required: false
		},
		"default_reaction_emoji": {
			type: "[DefaultReactionObject](#DefaultReactionObject)?",
			description: "",
			required: false
		},
		"default_thread_rate_limit_per_user": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"default_sort_order": {
			type: "[SortOrderType](#SortOrderType)?",
			description: "",
			required: false
		},
		"default_forum_layout": {
			type: "[ForumLayoutType](#ForumLayoutType)?",
			description: "",
			required: false
		},
	}}
/>
<div id="EntitlementObject"></div>

## EntitlementObject

https://discord.com/developers/docs/monetization/entitlements#entitlement-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/monetization/entitlements#entitlement-object
type EntitlementObject = {
	id: Snowflake,

	-- ID of the entitlement
	sku_id: Snowflake,

	-- ID of the SKU
	application_id: Snowflake,

	-- ID of the parent application
	user_id: Snowflake?,

	-- ID of the user that is granted access to the entitlement's sku
	type: EntitlementType,

	-- Type of entitlement
	deleted: boolean,

	-- Entitlement was deleted
	starts_at: string?,

	-- Start date at which the entitlement is valid. Not present when using test entitlements.
	ends_at: string?,

	-- Date at which the entitlement is no longer valid. Not present when using test entitlements.
	guild_id: Snowflake?,

	-- ID of the guild that is granted access to the entitlement's sku
	consumed: boolean?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"sku_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"application_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"user_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"type": {
			type: "[EntitlementType](#EntitlementType)",
			description: "",
			required: true
		},
		"deleted": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"starts_at": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"ends_at": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"guild_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"consumed": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
	}}
/>
<div id="VoiceStateObject"></div>

## VoiceStateObject

https://discord.com/developers/docs/resources/voice#voice-state-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/voice#voice-state-object
type VoiceStateObject = {
	guild_id: Snowflake?,

	-- the guild id this voice state is for
	channel_id: Snowflake?,

	-- the channel id this user is connected to
	user_id: Snowflake,

	-- the user id this voice state is for
	member: GuildMemberObject?,

	-- the guild member this voice state is for
	session_id: string,

	-- the session id for this voice state
	deaf: boolean,

	-- whether this user is deafened by the server
	mute: boolean,

	-- whether this user is muted by the server
	self_deaf: boolean,

	-- whether this user is locally deafened
	self_mute: boolean,

	-- whether this user is locally muted
	self_stream: boolean?,

	-- whether this user is streaming using "Go Live"
	self_video: boolean,

	-- whether this user's camera is enabled
	suppress: boolean,

	-- whether this user's permission to speak is denied
	request_to_speak_timestamp: string?
}
```

</details>

<TypeTable
	type={{
		"guild_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"channel_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"user_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"member": {
			type: "[GuildMemberObject](#GuildMemberObject)?",
			description: "",
			required: false
		},
		"session_id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"deaf": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"mute": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"self_deaf": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"self_mute": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"self_stream": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"self_video": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"suppress": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"request_to_speak_timestamp": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="ClientStatusObject"></div>

## ClientStatusObject

https://discord.com/developers/docs/topics/gateway-events#client-status-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#client-status-object
type ClientStatusObject = {
	desktop: string?,

	-- User's status set for an active desktop (Windows, Linux, Mac) application session
	mobile: string?,

	-- User's status set for an active mobile (iOS, Android) application session
	web: string?
}
```

</details>

<TypeTable
	type={{
		"desktop": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"mobile": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"web": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="PresenceUpdateObject"></div>

## PresenceUpdateObject

https://discord.com/developers/docs/topics/gateway-events#presence-update

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway-events#presence-update
type PresenceUpdateObject = {
	user: UserObject,

	-- User whose presence is being updated
	guild_id: Snowflake,

	-- ID of the guild
	status: string,

	-- Either "idle", "dnd", "online", or "offline"
	activities: {ActivityObject},

	-- User's current activities
	client_status: ClientStatusObject
}
```

</details>

<TypeTable
	type={{
		"user": {
			type: "[UserObject](#UserObject)",
			description: "",
			required: true
		},
		"guild_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"status": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"activities": {
			type: "\{[ActivityObject](#ActivityObject)\}",
			description: "",
			required: true
		},
		"client_status": {
			type: "[ClientStatusObject](#ClientStatusObject)",
			description: "",
			required: true
		},
	}}
/>
<div id="StageInstanceObject"></div>

## StageInstanceObject

https://discord.com/developers/docs/resources/stage-instance#stage-instance-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/stage-instance#stage-instance-object
type StageInstanceObject = {
	id: Snowflake,

	-- The id of this Stage instance
	guild_id: Snowflake,

	-- The guild id of the associated Stage channel
	channel_id: Snowflake,

	-- The id of the associated Stage channel
	topic: string,

	-- The topic of the Stage instance (1-120 characters)
	privacy_level: PrivacyLevel,

	-- The privacy level of the Stage instance
	discoverable_disabled: boolean,

	-- Whether or not Stage Discovery is disabled (deprecated)
	guild_scheduled_event_id: Snowflake?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"guild_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"channel_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"topic": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"privacy_level": {
			type: "[PrivacyLevel](#PrivacyLevel)",
			description: "",
			required: true
		},
		"discoverable_disabled": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"guild_scheduled_event_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
	}}
/>
<div id="GuildScheduledEventEntityMetadata"></div>

## GuildScheduledEventEntityMetadata

https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-metadata

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-metadata
type GuildScheduledEventEntityMetadata = {
	location: string
}
```

</details>

<TypeTable
	type={{
		"location": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="GuildScheduledEventObject"></div>

## GuildScheduledEventObject

https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object
type GuildScheduledEventObject = {
	id: Snowflake,

	-- the id of the scheduled event
	guild_id: Snowflake,

	-- the guild id which the scheduled event belongs to
	channel_id: Snowflake?,

	-- the channel id in which the scheduled event will be hosted, or null if scheduled entity type is EXTERNAL
	creator_id: Snowflake?,

	-- the id of the user that created the scheduled event
	name: string,

	-- the name of the scheduled event (1-100 characters)
	description: string?,

	-- the description of the scheduled event (1-1000 characters)
	scheduled_start_time: string,

	-- the time the scheduled event will start
	scheduled_end_time: string?,

	-- the time the scheduled event will end, required if entity_type is EXTERNAL
	privacy_level: PrivacyLevel,

	-- the privacy level of the scheduled event
	status: GuildScheduledEventStatus,

	-- the status of the scheduled event
	entity_type: GuildScheduledEventEntityType,

	-- the type of the scheduled event
	entity_id: Snowflake?,

	-- the id of an entity associated with a guild scheduled event
	entity_metadata: GuildScheduledEventEntityMetadata?,

	-- additional metadata for the guild scheduled event
	creator: UserObject?,

	-- the user that created the scheduled event
	user_count: number,

	-- the number of users subscribed to the scheduled event
	image: string?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"guild_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"channel_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"creator_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"description": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"scheduled_start_time": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"scheduled_end_time": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"privacy_level": {
			type: "[PrivacyLevel](#PrivacyLevel)",
			description: "",
			required: true
		},
		"status": {
			type: "[GuildScheduledEventStatus](#GuildScheduledEventStatus)",
			description: "",
			required: true
		},
		"entity_type": {
			type: "[GuildScheduledEventEntityType](#GuildScheduledEventEntityType)",
			description: "",
			required: true
		},
		"entity_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"entity_metadata": {
			type: "[GuildScheduledEventEntityMetadata](#GuildScheduledEventEntityMetadata)?",
			description: "",
			required: false
		},
		"creator": {
			type: "[UserObject](#UserObject)?",
			description: "",
			required: false
		},
		"user_count": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"image": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="IntegrationAccountObject"></div>

## IntegrationAccountObject

https://discord.com/developers/docs/resources/guild#integration-account-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#integration-account-object
type IntegrationAccountObject = {
	id: string,

	-- id of the account
	name: string
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="IntegrationObject"></div>

## IntegrationObject

https://discord.com/developers/docs/resources/guild#integration-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#integration-object
type IntegrationObject = {
	id: Snowflake,

	-- integration id
	name: string,

	-- integration name
	type: IntegrationType,

	-- integration type (twitch, youtube, discord, or guild_subscription)
	enabled: boolean,

	-- is this integration enabled
	syncing: boolean?,

	-- is this integration syncing
	role_id: Snowflake?,

	-- id that this integration uses for "subscribers"
	enable_emoticons: boolean?,

	-- whether emoticons should be synced for this integration (twitch only currently)
	expire_behaviour: IntegrationExpireBehaviours?,

	-- the behavior of expiring subscribers
	expire_grace_period: number?,

	-- the grace period (in days) before expiring subscribers
	user: UserObject?,

	-- user for this integration
	account: IntegrationAccountObject,

	-- integration account information
	synced_at: string?,

	-- when this integration was last synced
	subscriber_count: number?,

	-- how many subscribers this integration has
	revoked: boolean?,

	-- has this integration been revoked
	application: IntegrationApplicationObject?,

	-- The bot/OAuth2 application for discord integrations
	scopes: {OAuth2Scopes}?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"type": {
			type: "[IntegrationType](#IntegrationType)",
			description: "",
			required: true
		},
		"enabled": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"syncing": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"role_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"enable_emoticons": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"expire_behaviour": {
			type: "[IntegrationExpireBehaviours](#IntegrationExpireBehaviours)?",
			description: "",
			required: false
		},
		"expire_grace_period": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"user": {
			type: "[UserObject](#UserObject)?",
			description: "",
			required: false
		},
		"account": {
			type: "[IntegrationAccountObject](#IntegrationAccountObject)",
			description: "",
			required: true
		},
		"synced_at": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"subscriber_count": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"revoked": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"application": {
			type: "[IntegrationApplicationObject](#IntegrationApplicationObject)?",
			description: "",
			required: false
		},
		"scopes": {
			type: "\{[OAuth2Scopes](#OAuth2Scopes)\}?",
			description: "",
			required: false
		},
	}}
/>
<div id="ChannelMentionObject"></div>

## ChannelMentionObject

https://discord.com/developers/docs/resources/channel#channel-mention-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#channel-mention-object
type ChannelMentionObject = {
	id: Snowflake,

	-- id of the channel
	guild_id: Snowflake,

	-- id of the guild containing the channel
	type: ChannelType,

	-- the type of channel
	name: string
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"guild_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"type": {
			type: "[ChannelType](#ChannelType)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="AttachmentObject"></div>

## AttachmentObject

https://discord.com/developers/docs/resources/channel#attachment-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#attachment-object
type AttachmentObject = Partial<{
	id: Snowflake,

	-- attachment id
	filename: string,

	-- name of file attached
	title: string?,

	-- the title of the file
	description: string?,

	-- description for the file (max 1024 characters)
	content_type: string?,

	-- the attachment's media type
	size: number,

	-- size of file in bytes
	url: string,

	-- source url of file
	proxy_url: string,

	-- a proxied url of file
	height: number?,

	-- height of file (if image)
	width: number?,

	-- width of file (if image)
	ephemeral: boolean?,

	-- whether this attachment is ephemeral
	duration_secs: number?,

	-- the duration of the audio file (currently for voice messages)
	waveform: string?,

	-- base64 encoded bytearray representing a sampled waveform (currently for voice messages)
	flags: number
}>
```

</details>

[Partial](#Partial)&lt;\{id: [Snowflake](#Snowflake), filename: [string](#string), title: [string](#string)?, description: [string](#string)?, content_type: [string](#string)?, size: [number](#number), url: [string](#string), proxy_url: [string](#string), height: [number](#number)?, width: [number](#number)?, ephemeral: [boolean](#boolean)?, duration_secs: [number](#number)?, waveform: [string](#string)?, flags: [number](#number)\}&gt;<div id="EmbedFooterObject"></div>

## EmbedFooterObject

https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure
type EmbedFooterObject = {
	text: string,

	-- footer text
	icon_url: string?,

	-- url of footer icon (only supports http(s) and attachments)
	proxy_icon_url: string?
}
```

</details>

<TypeTable
	type={{
		"text": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"icon_url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"proxy_icon_url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="EmbedImageObject"></div>

## EmbedImageObject

https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
type EmbedImageObject = {
	url: string,

	-- source url of image (only supports http(s) and attachments)
	proxy_url: string?,

	-- a proxied url of the image
	height: number?,

	-- height of image
	width: number?
}
```

</details>

<TypeTable
	type={{
		"url": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"proxy_url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"height": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"width": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
	}}
/>
<div id="EmbedProviderObject"></div>

## EmbedProviderObject

https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure
type EmbedProviderObject = {
	name: string?,

	-- name of provider
	url: string?
}
```

</details>

<TypeTable
	type={{
		"name": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="EmbedAuthorObject"></div>

## EmbedAuthorObject

https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure
type EmbedAuthorObject = {
	name: string,

	-- name of author
	url: string?,

	-- url of author (only supports http(s))
	icon_url: string?,

	-- url of author icon (only supports http(s) and attachments)
	proxy_icon_url: string?
}
```

</details>

<TypeTable
	type={{
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"icon_url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"proxy_icon_url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="EmbedFieldObject"></div>

## EmbedFieldObject

https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure
type EmbedFieldObject = {
	name: string,

	-- name of the field
	value: string,

	-- value of the field
	inline: boolean?
}
```

</details>

<TypeTable
	type={{
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"value": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"inline": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
	}}
/>
<div id="EmbedThumbnailObject"></div>

## EmbedThumbnailObject

https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
type EmbedThumbnailObject = {
	url: string,

	-- source url of thumbnail (only supports http(s) and attachments)
	proxy_url: string?,

	-- a proxied url of the thumbnail
	height: number?,

	-- height of thumbnail
	width: number?
}
```

</details>

<TypeTable
	type={{
		"url": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"proxy_url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"height": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"width": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
	}}
/>
<div id="EmbedVideoObject"></div>

## EmbedVideoObject

https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
type EmbedVideoObject = {
	url: string,

	-- source url of video
	proxy_url: string?,

	-- a proxied url of the video
	height: number?,

	-- height of video
	width: number?
}
```

</details>

<TypeTable
	type={{
		"url": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"proxy_url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"height": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"width": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
	}}
/>
<div id="EmbedObject"></div>

## EmbedObject

https://discord.com/developers/docs/resources/message#embed-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/message#embed-object
type EmbedObject = {
	title: string?,

	-- title of embed
	type: EmbedType?,

	-- type of embed (always "rich" for webhook embeds)
	description: string?,

	-- description of embed
	url: string?,

	-- url of embed
	timestamp: string?,

	-- timestamp of embed content
	color: number?,

	-- color code of the embed
	footer: EmbedFooterObject?,

	-- footer information
	image: EmbedImageObject?,

	-- image information
	thumbnail: EmbedThumbnailObject?,

	-- thumbnail information
	video: EmbedVideoObject?,

	-- video information
	provider: EmbedProviderObject?,

	-- provider information
	author: EmbedAuthorObject?,

	-- author information
	fields: {EmbedFieldObject}?
}
```

</details>

<TypeTable
	type={{
		"title": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"type": {
			type: "[EmbedType](#EmbedType)?",
			description: "",
			required: false
		},
		"description": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"timestamp": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"color": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"footer": {
			type: "[EmbedFooterObject](#EmbedFooterObject)?",
			description: "",
			required: false
		},
		"image": {
			type: "[EmbedImageObject](#EmbedImageObject)?",
			description: "",
			required: false
		},
		"thumbnail": {
			type: "[EmbedThumbnailObject](#EmbedThumbnailObject)?",
			description: "",
			required: false
		},
		"video": {
			type: "[EmbedVideoObject](#EmbedVideoObject)?",
			description: "",
			required: false
		},
		"provider": {
			type: "[EmbedProviderObject](#EmbedProviderObject)?",
			description: "",
			required: false
		},
		"author": {
			type: "[EmbedAuthorObject](#EmbedAuthorObject)?",
			description: "",
			required: false
		},
		"fields": {
			type: "\{[EmbedFieldObject](#EmbedFieldObject)\}?",
			description: "",
			required: false
		},
	}}
/>
<div id="ReactionCountDetailsObject"></div>

## ReactionCountDetailsObject

https://discord.com/developers/docs/resources/channel#reaction-count-details-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#reaction-count-details-object
type ReactionCountDetailsObject = {
	burst: number,

	-- Count of super reactions
	normal: number
}
```

</details>

<TypeTable
	type={{
		"burst": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"normal": {
			type: "[number](#number)",
			description: "",
			required: true
		},
	}}
/>
<div id="ReactionObject"></div>

## ReactionObject

https://discord.com/developers/docs/resources/channel#reaction-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#reaction-object
type ReactionObject = {
	count: number,

	-- Total number of times this emoji has been used to react (including super reacts)
	count_details: ReactionCountDetailsObject,

	-- Reaction count details object
	me: boolean,

	-- Whether the current user reacted using this emoji
	me_burst: boolean,

	-- Whether the current user super-reacted using this emoji
	emoji: EmojiObject,

	-- emoji information
	burst_colors: {string}
}
```

</details>

<TypeTable
	type={{
		"count": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"count_details": {
			type: "[ReactionCountDetailsObject](#ReactionCountDetailsObject)",
			description: "",
			required: true
		},
		"me": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"me_burst": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"emoji": {
			type: "[EmojiObject](#EmojiObject)",
			description: "",
			required: true
		},
		"burst_colors": {
			type: "\{[string](#string)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="MessageActivityObject"></div>

## MessageActivityObject

https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure
type MessageActivityObject = {
	type: MessageActivityType,

	-- 	type of message activity
	party_id: string
}
```

</details>

<TypeTable
	type={{
		"type": {
			type: "[MessageActivityType](#MessageActivityType)",
			description: "",
			required: true
		},
		"party_id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="MessageReferenceObject"></div>

## MessageReferenceObject

https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure
type MessageReferenceObject = {
	type: MessageReferenceType?,

	-- type of reference.
	message_id: Snowflake?,

	-- id of the originating message
	channel_id: Snowflake?,

	-- id of the originating message's channel
	guild_id: Snowflake?,

	-- id of the originating message's guild
	fail_if_not_exists: boolean?
}
```

</details>

<TypeTable
	type={{
		"type": {
			type: "[MessageReferenceType](#MessageReferenceType)?",
			description: "",
			required: false
		},
		"message_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"channel_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"guild_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"fail_if_not_exists": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
	}}
/>
<div id="MessageInteractionMetadatObject"></div>

## MessageInteractionMetadatObject

https://discord.com/developers/docs/resources/channel#message-interaction-metadata-object-message-interaction-metadata-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#message-interaction-metadata-object-message-interaction-metadata-structure
type MessageInteractionMetadatObject = {
	id: Snowflake,

	-- ID of the interaction
	type: InteractionType,

	-- Type of interaction
	user: UserObject,

	-- User who triggered the interaction
	authorizing_integration_owners: {
		[ApplicationIntegrationType]: Snowflake
	},

	-- IDs for installation context(s) related to an interaction. Details in Authorizing Integration Owners Object
	original_response_message_id: Snowflake?,

	-- ID of the original response message, present only on follow-up messages
	interacted_message_id: Snowflake?,

	-- ID of the message that contained interactive component, present only on messages created from component interactions
	triggering_interaction_metadata: MessageInteractionMetadatObject
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"type": {
			type: "[InteractionType](#InteractionType)",
			description: "",
			required: true
		},
		"user": {
			type: "[UserObject](#UserObject)",
			description: "",
			required: true
		},
		"authorizing_integration_owners": {
			type: "\{[ApplicationIntegrationType]: [Snowflake](#Snowflake)\}",
			description: "",
			required: true
		},
		"original_response_message_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"interacted_message_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"triggering_interaction_metadata": {
			type: "[MessageInteractionMetadatObject](#MessageInteractionMetadatObject)",
			description: "",
			required: true
		},
	}}
/>
<div id="MessageInteractionObject"></div>

## MessageInteractionObject

https://discord.com/developers/docs/interactions/receiving-and-responding#message-interaction-object-message-interaction-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#message-interaction-object-message-interaction-structure
type MessageInteractionObject = {
	id: string,

	-- ID of the interaction
	type: InteractionType,

	-- Type of interaction
	name: string,

	-- Name of the application command, including subcommands and subcommand groups
	user: UserObject,

	-- User who invoked the interaction
	member: GuildMemberObject?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"type": {
			type: "[InteractionType](#InteractionType)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"user": {
			type: "[UserObject](#UserObject)",
			description: "",
			required: true
		},
		"member": {
			type: "[GuildMemberObject](#GuildMemberObject)?",
			description: "",
			required: false
		},
	}}
/>
<div id="SelectOptionObject"></div>

## SelectOptionObject

https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure
type SelectOptionObject = {
	label: string,

	-- User-facing name of the option; max 100 characters
	value: string,

	-- Dev-defined value of the option; max 100 characters
	description: string?,

	-- Additional description of the option; max 100 characters
	emoji: EmojiObject?,

	-- id, name, and animated
	default: boolean
}
```

</details>

<TypeTable
	type={{
		"label": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"value": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"description": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"emoji": {
			type: "[EmojiObject](#EmojiObject)?",
			description: "",
			required: false
		},
		"default": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
	}}
/>
<div id="SelectDefaultValueObject"></div>

## SelectDefaultValueObject

https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-default-value-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-default-value-structure
type SelectDefaultValueObject = {
	id: Snowflake,

	-- ID of a user, role, or channel
	type: string
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"type": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="ActionRowComponentObject"></div>

## ActionRowComponentObject

https://discord.com/developers/docs/interactions/message-components#action-rows

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/message-components#action-rows
type ActionRowComponentObject = {
	type: number,

	-- 1 for an action row.
	components: {ComponentObjects}
}
```

</details>

<TypeTable
	type={{
		"type": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"components": {
			type: "\{[ComponentObjects](#ComponentObjects)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="ButtonComponentObject"></div>

## ButtonComponentObject

https://discord.com/developers/docs/interactions/message-components#button-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/message-components#button-object
type ButtonComponentObject = Partial<{
	type: number,

	-- 2 for a button
	style: ButtonStyle,

	-- A button style
	label: string?,

	-- Text that appears on the button; max 80 characters
	emoji: EmojiObject?,

	-- name, id, and animated
	custom_id: string?,

	-- Developer-defined identifier for the button; max 100 characters
	sku_id: string?,

	-- Identifier for a purchasable SKU, only available when using premium-style buttons
	url: string?,

	--  URL for link-style buttons
	disabled: boolean?
}>
```

</details>

[Partial](#Partial)&lt;\{type: [number](#number), style: [ButtonStyle](#ButtonStyle), label: [string](#string)?, emoji: [EmojiObject](#EmojiObject)?, custom_id: [string](#string)?, sku_id: [string](#string)?, url: [string](#string)?, disabled: [boolean](#boolean)?\}&gt;<div id="SelectMenuComponentObject"></div>

## SelectMenuComponentObject

https://discord.com/developers/docs/interactions/message-components#select-menu-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/message-components#select-menu-object
type SelectMenuComponentObject = {
	type: number,

	-- Type of select menu component (text: 3, user: 5, role: 6, mentionable: 7, channels: 8)
	custom_id: string,

	-- ID for the select menu; max 100 characters
	options: {SelectOptionObject}?,

	-- Specified choices in a select menu (only required and available for string selects (type 3); max 25
	channel_types: {ChannelType}?,

	-- List of channel types to include in the channel select component (type 8)
	placeholder: string?,

	-- Placeholder text if nothing is selected; max 150 characters
	default_values: {SelectDefaultValueObject}?,

	-- List of default values for auto-populated select menu components; number of default values must be in the range defined by min_values and max_values
	min_values: number?,

	-- Minimum number of items that must be chosen (defaults to 1); min 0, max 25
	max_values: number?,

	-- Maximum number of items that can be chosen (defaults to 1); max 25
	disabled: boolean?
}
```

</details>

<TypeTable
	type={{
		"type": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"custom_id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"options": {
			type: "\{[SelectOptionObject](#SelectOptionObject)\}?",
			description: "",
			required: false
		},
		"channel_types": {
			type: "\{[ChannelType](#ChannelType)\}?",
			description: "",
			required: false
		},
		"placeholder": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"default_values": {
			type: "\{[SelectDefaultValueObject](#SelectDefaultValueObject)\}?",
			description: "",
			required: false
		},
		"min_values": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"max_values": {
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
<div id="TextInputComponentObject"></div>

## TextInputComponentObject

https://discord.com/developers/docs/interactions/message-components#select-menu-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/message-components#select-menu-object
type TextInputComponentObject = {
	type: number,

	-- 4 for a text input
	custom_id: string,

	-- Developer-defined identifier for the input; max 100 characters
	style: TextInputStyles,

	-- The Text Input Style
	label: string,

	-- Label for this component; max 45 characters
	min_length: number?,

	-- Minimum input length for a text input; min 0, max 4000
	max_length: number?,

	-- Maximum input length for a text input; min 1, max 4000
	required: boolean?,

	-- Whether this component is required to be filled (defaults to true)
	value: string?,

	-- Pre-filled value for this component; max 4000 characters
	placeholder: string?
}
```

</details>

<TypeTable
	type={{
		"type": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"custom_id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"style": {
			type: "[TextInputStyles](#TextInputStyles)",
			description: "",
			required: true
		},
		"label": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"min_length": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"max_length": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"required": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"value": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"placeholder": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="ComponentObjects"></div>

## ComponentObjects

https://discord.com/developers/docs/interactions/message-components#message-components

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/message-components#message-components
type ComponentObjects = ActionRowComponentObject | ButtonComponentObject | SelectMenuComponentObject | TextInputComponentObject
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

[ActionRowComponentObject](#ActionRowComponentObject)

</details>

<details>
<summary>Variant 2</summary>

[ButtonComponentObject](#ButtonComponentObject)

</details>

<details>
<summary>Variant 3</summary>

[SelectMenuComponentObject](#SelectMenuComponentObject)

</details>

<details>
<summary>Variant 4</summary>

[TextInputComponentObject](#TextInputComponentObject)

</details>

<div id="SitckerItemObject"></div>

## SitckerItemObject

https://discord.com/developers/docs/resources/sticker#sticker-item-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/sticker#sticker-item-object
type SitckerItemObject = {
	id: Snowflake,

	-- id of the sticker
	name: string,

	-- name of the sticker
	format_type: StickerFormatType
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"format_type": {
			type: "[StickerFormatType](#StickerFormatType)",
			description: "",
			required: true
		},
	}}
/>
<div id="RoleSubscriptionDataObject"></div>

## RoleSubscriptionDataObject

https://discord.com/developers/docs/resources/channel#role-subscription-data-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#role-subscription-data-object
type RoleSubscriptionDataObject = {
	role_subscription_listing_id: Snowflake,

	-- the id of the sku and listing that the user is subscribed to
	tier_name: string,

	-- the name of the tier that the user is subscribed to
	total_months_subscribed: number,

	-- the cumulative number of months that the user has been subscribed for
	is_renewal: boolean
}
```

</details>

<TypeTable
	type={{
		"role_subscription_listing_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"tier_name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"total_months_subscribed": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"is_renewal": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
	}}
/>
<div id="PollMediaObject"></div>

## PollMediaObject

https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure
type PollMediaObject = {
	text: string?,

	-- The text of the field
	emoji: Partial<EmojiObject>?
}
```

</details>

<TypeTable
	type={{
		"text": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"emoji": {
			type: "[Partial](#Partial)&lt;[EmojiObject](#EmojiObject)&gt;?",
			description: "",
			required: false
		},
	}}
/>
<div id="PollAnswerObject"></div>

## PollAnswerObject

https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure
type PollAnswerObject = {
	answer_id: number,

	-- The ID of the answer
	poll_media: PollMediaObject
}
```

</details>

<TypeTable
	type={{
		"answer_id": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"poll_media": {
			type: "[PollMediaObject](#PollMediaObject)",
			description: "",
			required: true
		},
	}}
/>
<div id="PollAnswerCountObject"></div>

## PollAnswerCountObject

https://discord.com/developers/docs/resources/poll#poll-results-object-poll-answer-count-object-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/poll#poll-results-object-poll-answer-count-object-structure
type PollAnswerCountObject = {
	id: number,

	-- The answer_id
	count: number,

	-- The number of votes for this answer
	me_voted: boolean
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"count": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"me_voted": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
	}}
/>
<div id="PollResultObject"></div>

## PollResultObject

https://discord.com/developers/docs/resources/poll#poll-results-object-poll-results-object-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/poll#poll-results-object-poll-results-object-structure
type PollResultObject = {
	is_finalized: boolean,

	-- Whether the votes have been precisely counted
	answer_counts: {PollAnswerCountObject}
}
```

</details>

<TypeTable
	type={{
		"is_finalized": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"answer_counts": {
			type: "\{[PollAnswerCountObject](#PollAnswerCountObject)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="PollObject"></div>

## PollObject

https://discord.com/developers/docs/resources/poll#poll-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/poll#poll-object
type PollObject = {
	question: PollMediaObject,

	-- The question of the poll. Only text is supported.
	answers: {PollAnswerObject},

	-- Each of the answers available in the poll.
	expiry: string?,

	-- The time when the poll ends.
	--fixme: for some reason luau's type system doesn't like this being a \`boolean\`????
	allow_multiselect: true | false,

	-- Whether a user can select multiple answers
	layout_type: PollLayoutType,

	-- The layout type of the poll
	results: PollResultObject?
}
```

</details>

<TypeTable
	type={{
		"question": {
			type: "[PollMediaObject](#PollMediaObject)",
			description: "",
			required: true
		},
		"answers": {
			type: "\{[PollAnswerObject](#PollAnswerObject)\}",
			description: "",
			required: true
		},
		"expiry": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"allow_multiselect": {
			type: "([true](#true) | [false](#false))",
			description: "",
			required: true
		},
		"layout_type": {
			type: "[PollLayoutType](#PollLayoutType)",
			description: "",
			required: true
		},
		"results": {
			type: "[PollResultObject](#PollResultObject)?",
			description: "",
			required: false
		},
	}}
/>
<div id="MessageCallObject"></div>

## MessageCallObject

https://discord.com/developers/docs/resources/channel#message-call-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#message-call-object
type MessageCallObject = {
	participants: {UserObject},

	-- array of user object ids that participated in the call
	ended_timestamp: string
}
```

</details>

<TypeTable
	type={{
		"participants": {
			type: "\{[UserObject](#UserObject)\}",
			description: "",
			required: true
		},
		"ended_timestamp": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="MessageObject"></div>

## MessageObject

https://discord.com/developers/docs/resources/channel#message-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#message-object
type MessageObject = {
	id: Snowflake?,

	-- id of the message
	channel_id: Snowflake?,

	-- id of the channel the message was sent in
	author: UserObject?,

	-- the author of this message (not guaranteed to be a valid user, see below)
	content: string?,

	-- contents of the message
	timestamp: string?,

	-- when this message was sent
	edited_timestamp: string?,

	-- when this message was edited (or null if never)
	tts: boolean?,

	-- whether this was a TTS message
	mention_everyone: boolean?,

	-- whether this message mentions everyone
	mentions: {UserObject}?,

	-- users specifically mentioned in the message
	mention_roles: {GuildRoleObject}?,

	-- roles specifically mentioned in this message
	mention_channels: {ChannelMentionObject}?,

	-- channels specifically mentioned in this message
	attachments: {AttachmentObject}?,

	-- any attached files
	embeds: {EmbedObject}?,

	-- any embedded content
	reactions: {ReactionObject}?,

	-- reactions to the message
	nonce: string?,

	-- used for validating a message was sent
	pinned: boolean?,

	-- whether this message is pinned
	webhook_id: Snowflake?,

	-- if the message is generated by a webhook, this is the webhook's id
	type: MessageType?,

	-- type of message
	activity: MessageActivityObject?,

	-- sent with Rich Presence-related chat embeds
	application: ApplicationObject?,

	-- sent with Rich Presence-related chat embeds
	application_id: Snowflake?,

	-- if the message is an Interaction or application-owned webhook, this is the id of the application
	message_reference: MessageReferenceObject?,

	-- data showing the source of a crosspost, channel follow add, pin, or reply message
	flags: number?,

	-- message flags combined as a bitfield
	referenced_message: MessageObject?,

	-- the message associated with the message_reference
	interaction_metadata: MessageInteractionMetadatObject?,

	-- In preview. Sent if the message is sent as a result of an interaction
	interaction: MessageInteractionObject?,

	-- Deprecated in favor of interaction_metadata; sent if the message is a response to an interaction
	thread: ChannelObject?,

	-- the thread that was started from this message, includes thread member object
	components: {ComponentObjects}?,

	-- sent if the message contains components like buttons, action rows, or other interactive components
	sticker_items: {SitckerItemObject}?,

	-- sent if the message contains stickers
	stickers: {StickerObject}?,

	-- Deprecated the stickers sent with the message
	position: number?,

	-- A generally increasing integer (there may be gaps or duplicates) that represents the approximate position of the message in a thread, it can be used to estimate the relative position of the message in a thread in company with total_message_sent on parent thread
	role_subscription_data: RoleSubscriptionDataObject?,

	-- data of the role subscription purchase or renewal that prompted this ROLE_SUBSCRIPTION_PURCHASE message
	resolved: ResolvedDataStructure?,

	-- data for users, members, channels, and roles in the message's auto-populated select menus
	poll: PollObject?,

	-- the poll associated with the message
	call: MessageCallObject?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"channel_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"author": {
			type: "[UserObject](#UserObject)?",
			description: "",
			required: false
		},
		"content": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"timestamp": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"edited_timestamp": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"tts": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"mention_everyone": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"mentions": {
			type: "\{[UserObject](#UserObject)\}?",
			description: "",
			required: false
		},
		"mention_roles": {
			type: "\{[GuildRoleObject](#GuildRoleObject)\}?",
			description: "",
			required: false
		},
		"mention_channels": {
			type: "\{[ChannelMentionObject](#ChannelMentionObject)\}?",
			description: "",
			required: false
		},
		"attachments": {
			type: "\{[AttachmentObject](#AttachmentObject)\}?",
			description: "",
			required: false
		},
		"embeds": {
			type: "\{[EmbedObject](#EmbedObject)\}?",
			description: "",
			required: false
		},
		"reactions": {
			type: "\{[ReactionObject](#ReactionObject)\}?",
			description: "",
			required: false
		},
		"nonce": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"pinned": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"webhook_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"type": {
			type: "[MessageType](#MessageType)?",
			description: "",
			required: false
		},
		"activity": {
			type: "[MessageActivityObject](#MessageActivityObject)?",
			description: "",
			required: false
		},
		"application": {
			type: "[ApplicationObject](#ApplicationObject)?",
			description: "",
			required: false
		},
		"application_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"message_reference": {
			type: "[MessageReferenceObject](#MessageReferenceObject)?",
			description: "",
			required: false
		},
		"flags": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"referenced_message": {
			type: "[MessageObject](#MessageObject)?",
			description: "",
			required: false
		},
		"interaction_metadata": {
			type: "[MessageInteractionMetadatObject](#MessageInteractionMetadatObject)?",
			description: "",
			required: false
		},
		"interaction": {
			type: "[MessageInteractionObject](#MessageInteractionObject)?",
			description: "",
			required: false
		},
		"thread": {
			type: "[ChannelObject](#ChannelObject)?",
			description: "",
			required: false
		},
		"components": {
			type: "\{[ComponentObjects](#ComponentObjects)\}?",
			description: "",
			required: false
		},
		"sticker_items": {
			type: "\{[SitckerItemObject](#SitckerItemObject)\}?",
			description: "",
			required: false
		},
		"stickers": {
			type: "\{[StickerObject](#StickerObject)\}?",
			description: "",
			required: false
		},
		"position": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"role_subscription_data": {
			type: "[RoleSubscriptionDataObject](#RoleSubscriptionDataObject)?",
			description: "",
			required: false
		},
		"resolved": {
			type: "[ResolvedDataStructure](#ResolvedDataStructure)?",
			description: "",
			required: false
		},
		"poll": {
			type: "[PollObject](#PollObject)?",
			description: "",
			required: false
		},
		"call": {
			type: "[MessageCallObject](#MessageCallObject)?",
			description: "",
			required: false
		},
	}}
/>
<div id="ResolvedDataStructure"></div>

## ResolvedDataStructure

https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
type ResolvedDataStructure = {
	users: {
		[Snowflake]: UserObject
	}?,

	-- the ids and User objects
	members: {
		[Snowflake]: GuildMemberObject
	}?,

	-- the ids and partial Member objects
	roles: {
		[Snowflake]: GuildRoleObject
	}?,

	-- the ids and Role objects
	channels: {
		[Snowflake]: ChannelObject
	}?,

	-- the ids and partial Channel objects
	messages: {
		[Snowflake]: MessageObject
	}?,

	-- the ids and partial Message objects
	attachments: {
		[Snowflake]: AttachmentObject
	}?
}
```

</details>

<TypeTable
	type={{
		"users": {
			type: "\{[Snowflake]: [UserObject](#UserObject)\}?",
			description: "",
			required: false
		},
		"members": {
			type: "\{[Snowflake]: [GuildMemberObject](#GuildMemberObject)\}?",
			description: "",
			required: false
		},
		"roles": {
			type: "\{[Snowflake]: [GuildRoleObject](#GuildRoleObject)\}?",
			description: "",
			required: false
		},
		"channels": {
			type: "\{[Snowflake]: [ChannelObject](#ChannelObject)\}?",
			description: "",
			required: false
		},
		"messages": {
			type: "\{[Snowflake]: [MessageObject](#MessageObject)\}?",
			description: "",
			required: false
		},
		"attachments": {
			type: "\{[Snowflake]: [AttachmentObject](#AttachmentObject)\}?",
			description: "",
			required: false
		},
	}}
/>
<div id="ApplicationCommandInteractionDataOptionObject"></div>

## ApplicationCommandInteractionDataOptionObject

https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-interaction-data-option-structure\]

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-interaction-data-option-structure]
type ApplicationCommandInteractionDataOptionObject = {
	name: string,

	-- Name of the parameter
	type: ApplicationCommandOptionType,

	-- Value of application command option type
	value: (string | number | boolean)?,

	-- Value of the option resulting from user input
	options: {ApplicationCommandInteractionDataOptionObject},

	-- Present if this option is a group or subcommand
	focused: boolean
}
```

</details>

<TypeTable
	type={{
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"type": {
			type: "[ApplicationCommandOptionType](#ApplicationCommandOptionType)",
			description: "",
			required: true
		},
		"value": {
			type: "([string](#string) | [number](#number) | [boolean](#boolean))?",
			description: "",
			required: false
		},
		"options": {
			type: "\{[ApplicationCommandInteractionDataOptionObject](#ApplicationCommandInteractionDataOptionObject)\}",
			description: "",
			required: true
		},
		"focused": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
	}}
/>
<div id="InteractionDataObject"></div>

## InteractionDataObject

https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data
type InteractionDataObject = {
	id: Snowflake,

	-- the ID of the invoked command
	name: string,

	-- the name of the invoked command
	type: number,

	-- the type of the invoked command
	resolved: ResolvedDataStructure?,

	-- converted users + roles + channels + attachments
	options: {ApplicationCommandInteractionDataOptionObject}?,

	-- the params + values from the user
	guild_id: Snowflake?,

	-- the id of the guild the command is registered to
	target_id: Snowflake?,

	-- id of the user or message targeted by a user or message command,
	custom_id: string?,

	-- custom_id of the component
	component_type: number?,

	-- type of the component
	values: {SelectOptionObject}?,

	-- Values the user selected in a select menu component
	components: {ComponentObjects}?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"type": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"resolved": {
			type: "[ResolvedDataStructure](#ResolvedDataStructure)?",
			description: "",
			required: false
		},
		"options": {
			type: "\{[ApplicationCommandInteractionDataOptionObject](#ApplicationCommandInteractionDataOptionObject)\}?",
			description: "",
			required: false
		},
		"guild_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"target_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"custom_id": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"component_type": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"values": {
			type: "\{[SelectOptionObject](#SelectOptionObject)\}?",
			description: "",
			required: false
		},
		"components": {
			type: "\{[ComponentObjects](#ComponentObjects)\}?",
			description: "",
			required: false
		},
	}}
/>
<div id="InteractionObject"></div>

## InteractionObject

https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
type InteractionObject = {
	id: Snowflake,

	-- ID of the interaction
	application_id: Snowflake,

	-- ID of the application this interaction is for
	type: InteractionType,

	-- Type of interaction
	data: InteractionDataObject?,

	-- Interaction data payload
	guild: GuildObject?,

	-- Guild that the interaction was sent from
	guild_id: Snowflake?,

	-- Guild that the interaction was sent from
	channel: ChannelObject?,

	-- Channel that the interaction was sent from
	channel_id: Snowflake?,

	-- Channel that the interaction was sent from
	member: GuildMemberObject?,

	-- Guild member data for the invoking user, including permissions
	user: UserObject?,

	-- User object for the invoking user, if invoked in a DM
	token: string,

	-- Continuation token for responding to the interaction
	version: number,

	-- Read-only property, always 1
	message: MessageObject?,

	-- For components, the message they were attached to
	app_permissions: string,

	-- Bitwise set of permissions the app has in the source location of the interaction
	locale: LanguageLocales?,

	-- Selected language of the invoking user
	guild_locale: LanguageLocales?,

	-- Guild's preferred locale, if invoked in a guild
	entitlements: {EntitlementObject},

	-- For monetized apps, any entitlements for the invoking user, representing access to premium SKUs
	authorizing_integration_owners: {IntegrationType},

	-- Mapping of installation contexts that the interaction was authorized for to related user or guild IDs. See Authorizing Integration Owners Object for details
	context: InteractionContextType
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"application_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"type": {
			type: "[InteractionType](#InteractionType)",
			description: "",
			required: true
		},
		"data": {
			type: "[InteractionDataObject](#InteractionDataObject)?",
			description: "",
			required: false
		},
		"guild": {
			type: "[GuildObject](#GuildObject)?",
			description: "",
			required: false
		},
		"guild_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"channel": {
			type: "[ChannelObject](#ChannelObject)?",
			description: "",
			required: false
		},
		"channel_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"member": {
			type: "[GuildMemberObject](#GuildMemberObject)?",
			description: "",
			required: false
		},
		"user": {
			type: "[UserObject](#UserObject)?",
			description: "",
			required: false
		},
		"token": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"version": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"message": {
			type: "[MessageObject](#MessageObject)?",
			description: "",
			required: false
		},
		"app_permissions": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"locale": {
			type: "[LanguageLocales](#LanguageLocales)?",
			description: "",
			required: false
		},
		"guild_locale": {
			type: "[LanguageLocales](#LanguageLocales)?",
			description: "",
			required: false
		},
		"entitlements": {
			type: "\{[EntitlementObject](#EntitlementObject)\}",
			description: "",
			required: true
		},
		"authorizing_integration_owners": {
			type: "\{[IntegrationType](#IntegrationType)\}",
			description: "",
			required: true
		},
		"context": {
			type: "[InteractionContextType](#InteractionContextType)",
			description: "",
			required: true
		},
	}}
/>
<div id="ApplicationRoleConnectionMetadataObject"></div>

## ApplicationRoleConnectionMetadataObject

https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object
type ApplicationRoleConnectionMetadataObject = {
	type: ApplicationRoleConnectionMetadataType,

	-- type of metadata value
	key: string,

	-- dictionary key for the metadata field (must be a-z, 0-9, or _ characters; 1-50 characters)
	name: string,

	-- name of the metadata field (1-100 characters)
	name_localizations: {
		[LanguageLocales]: string
	}?,

	-- translations of the name
	description: string,

	-- description of the metadata field (1-200 characters)
	description_localizations: {
		[LanguageLocales]: string
	}?
}
```

</details>

<TypeTable
	type={{
		"type": {
			type: "[ApplicationRoleConnectionMetadataType](#ApplicationRoleConnectionMetadataType)",
			description: "",
			required: true
		},
		"key": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"name_localizations": {
			type: "\{[LanguageLocales]: [string](#string)\}?",
			description: "",
			required: false
		},
		"description": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"description_localizations": {
			type: "\{[LanguageLocales]: [string](#string)\}?",
			description: "",
			required: false
		},
	}}
/>
<div id="ApplicationCommandOptionChoiceObject"></div>

## ApplicationCommandOptionChoiceObject

https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
type ApplicationCommandOptionChoiceObject = {
	name: string,

	-- 1-100 character choice name
	name_localizations: {
		[LanguageLocales]: string
	}?,

	-- Localization dictionary for the name field. Values follow the same restrictions as name
	value: string | number
}
```

</details>

<TypeTable
	type={{
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"name_localizations": {
			type: "\{[LanguageLocales]: [string](#string)\}?",
			description: "",
			required: false
		},
		"value": {
			type: "([string](#string) | [number](#number))",
			description: "",
			required: true
		},
	}}
/>
<div id="ApplicationCommandOptionObject"></div>

## ApplicationCommandOptionObject

https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
type ApplicationCommandOptionObject = {
	type: ApplicationCommandOptionType,

	-- Type of option
	name: string,

	-- 1-32 character name
	name_localizations: {
		[LanguageLocales]: string
	}?,

	-- Localization dictionary for the name field. Values follow the same restrictions as name
	description: string?,

	-- 1-100 character description
	description_localizations: {
		[LanguageLocales]: string
	}?,

	-- Localization dictionary for the description field. Values follow the same restrictions as description
	required: boolean?,

	-- Whether the parameter is required or optional, default false
	choices: {ApplicationCommandOptionChoiceObject},

	-- Choices for the user to pick from, max 25
	options: {ApplicationCommandOptionObject}?,

	-- If the option is a subcommand or subcommand group type, these nested options will be the parameters or subcommands respectively; up to 25
	channel_types: {ChannelType}?,

	-- The channels shown will be restricted to these types
	min_value: number?,

	-- The minimum value permitted
	max_value: number?,

	-- The maximum value permitted
	min_length: number?,

	-- The minimum allowed length (minimum of 0, maximum of 6000)
	max_length: number?,

	-- The maximum allowed length (minimum of 1, maximum of 6000)
	autocomplete: boolean?
}
```

</details>

<TypeTable
	type={{
		"type": {
			type: "[ApplicationCommandOptionType](#ApplicationCommandOptionType)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"name_localizations": {
			type: "\{[LanguageLocales]: [string](#string)\}?",
			description: "",
			required: false
		},
		"description": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"description_localizations": {
			type: "\{[LanguageLocales]: [string](#string)\}?",
			description: "",
			required: false
		},
		"required": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"choices": {
			type: "\{[ApplicationCommandOptionChoiceObject](#ApplicationCommandOptionChoiceObject)\}",
			description: "",
			required: true
		},
		"options": {
			type: "\{[ApplicationCommandOptionObject](#ApplicationCommandOptionObject)\}?",
			description: "",
			required: false
		},
		"channel_types": {
			type: "\{[ChannelType](#ChannelType)\}?",
			description: "",
			required: false
		},
		"min_value": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"max_value": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"min_length": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"max_length": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"autocomplete": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
	}}
/>
<div id="ApplicationCommandObject"></div>

## ApplicationCommandObject

https://discord.com/developers/docs/interactions/application-commands#application-command-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/application-commands#application-command-object
type ApplicationCommandObject = {
	id: Snowflake?,

	-- Unique ID of command
	type: ApplicationCommandType?,

	-- Type of command, defaults to 1
	application_id: Snowflake?,

	-- ID of the parent application
	guild_id: Snowflake?,

	-- Guild ID of the command, if not global
	name: string,

	-- Name of command, 1-32 characters
	name_localizations: {
		[LanguageLocales]: string
	}?,

	-- Localization dictionary for name field. Values follow the same restrictions as name
	description: string,

	-- Description for CHAT_INPUT commands, 1-100 characters. Empty string for USER and MESSAGE commands
	description_localizations: {
		[LanguageLocales]: string
	}?,

	-- Localization dictionary for description field. Values follow the same restrictions as description
	options: {ApplicationCommandOptionObject}?,

	-- Parameters for the command, max of 25
	default_member_permissions: string?,

	-- Set of permissions represented as a bit set
	dm_permission: string?,

	-- Deprecated (use contexts instead); Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
	default_permission: boolean?,

	-- Not recommended for use as field will soon be deprecated. Indicates whether the command is enabled by default when the app is added to a guild, defaults to true
	nsfw: boolean?,

	-- Indicates whether the command is age-restricted, defaults to false
	integration_types: {IntegrationType}?,

	-- Installation contexts where the command is available, only for globally-scoped commands. Defaults to your app's configured contexts
	contexts: {InteractionContextType}?,

	-- Interaction context(s) where the command can be used, only for globally-scoped commands. By default, all interaction context types included for new commands.
	version: Snowflake?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"type": {
			type: "[ApplicationCommandType](#ApplicationCommandType)?",
			description: "",
			required: false
		},
		"application_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"guild_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"name_localizations": {
			type: "\{[LanguageLocales]: [string](#string)\}?",
			description: "",
			required: false
		},
		"description": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"description_localizations": {
			type: "\{[LanguageLocales]: [string](#string)\}?",
			description: "",
			required: false
		},
		"options": {
			type: "\{[ApplicationCommandOptionObject](#ApplicationCommandOptionObject)\}?",
			description: "",
			required: false
		},
		"default_member_permissions": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"dm_permission": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"default_permission": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"nsfw": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"integration_types": {
			type: "\{[IntegrationType](#IntegrationType)\}?",
			description: "",
			required: false
		},
		"contexts": {
			type: "\{[InteractionContextType](#InteractionContextType)\}?",
			description: "",
			required: false
		},
		"version": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
	}}
/>
<div id="AuditLogChangeObject"></div>

## AuditLogChangeObject

https://discord.com/developers/docs/resources/audit-log#audit-log-change-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/audit-log#audit-log-change-object
type AuditLogChangeObject = {
	new_value: any?,

	-- New value of the key
	old_value: any?,

	-- Old value of the key
	key: string
}
```

</details>

<TypeTable
	type={{
		"new_value": {
			type: "[any](#any)?",
			description: "",
			required: false
		},
		"old_value": {
			type: "[any](#any)?",
			description: "",
			required: false
		},
		"key": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="OptionalAuditEntryInfoObject"></div>

## OptionalAuditEntryInfoObject

https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info
type OptionalAuditEntryInfoObject = {
	application_id: Snowflake,

	-- ID of the app whose permissions were targeted
	auto_moderation_rule_name: string,

	-- Name of the Auto Moderation rule that was triggered
	auto_moderation_rule_trigger_type: AutomoderationRuleTriggerType,

	-- Trigger type of the Auto Moderation rule that was triggered
	channel_id: Snowflake,

	-- Channel in which the entities were targeted
	count: string,

	-- Number of entities that were targeted
	delete_member_days: string,

	-- Number of days after which inactive members were kicked
	id: Snowflake,

	-- ID of the overwritten entity
	members_removed: string,

	-- Number of members removed by the prune
	message_id: Snowflake,

	-- ID of the message that was targeted
	role_name: string,

	-- Name of the role if type is "0" (not present if type is "1")
	type: string,

	-- Type of overwritten entity - role ("0") or member ("1")
	integration_type: IntegrationType
}
```

</details>

<TypeTable
	type={{
		"application_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"auto_moderation_rule_name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"auto_moderation_rule_trigger_type": {
			type: "[AutomoderationRuleTriggerType](#AutomoderationRuleTriggerType)",
			description: "",
			required: true
		},
		"channel_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"count": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"delete_member_days": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"members_removed": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"message_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"role_name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"type": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"integration_type": {
			type: "[IntegrationType](#IntegrationType)",
			description: "",
			required: true
		},
	}}
/>
<div id="AuditLogEntryObject"></div>

## AuditLogEntryObject

https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object
type AuditLogEntryObject = {
	target_id: string?,

	-- ID of the affected entity (webhook, user, role, etc.)
	changes: {AuditLogChangeObject}?,

	-- Changes made to the target_id
	user_id: Snowflake?,

	-- User or app that made the changes
	id: Snowflake,

	-- ID of the entry
	action_type: AuditLogEventType,

	-- Type of action that occurred
	options: {OptionalAuditEntryInfoObject}?,

	-- Additional info for certain event types
	reason: string?,

	-- Reason for the change (1-512 characters)
	guild_id: Snowflake?
}
```

</details>

<TypeTable
	type={{
		"target_id": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"changes": {
			type: "\{[AuditLogChangeObject](#AuditLogChangeObject)\}?",
			description: "",
			required: false
		},
		"user_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"action_type": {
			type: "[AuditLogEventType](#AuditLogEventType)",
			description: "",
			required: true
		},
		"options": {
			type: "\{[OptionalAuditEntryInfoObject](#OptionalAuditEntryInfoObject)\}?",
			description: "",
			required: false
		},
		"reason": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"guild_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
	}}
/>
<div id="WebhookObject"></div>

## WebhookObject

https://discord.com/developers/docs/resources/webhook#webhook-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/webhook#webhook-object
type WebhookObject = {
	id: Snowflake,

	-- the id of the webhook
	type: WebhookType,

	-- the type of the webhook
	guild_id: Snowflake?,

	-- the guild id this webhook is for, if any
	channel_id: Snowflake?,

	-- the channel id this webhook is for, if any
	user: UserObject?,

	-- the user this webhook was created by (not returned when getting a webhook with its token)
	name: string?,

	-- the default name of the webhook
	avatar: string?,

	-- the default user avatar hash of the webhook
	token: string?,

	-- the secure token of the webhook (returned for Incoming Webhooks)
	application_id: Snowflake?,

	-- the bot/OAuth2 application that created this webhook
	source_guild: GuildObject?,

	-- the guild of the channel that this webhook is following (returned for Channel Follower Webhooks)
	source_channel: ChannelObject?,

	-- the channel that this webhook is following (returned for Channel Follower Webhooks)
	url: string?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"type": {
			type: "[WebhookType](#WebhookType)",
			description: "",
			required: true
		},
		"guild_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"channel_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"user": {
			type: "[UserObject](#UserObject)?",
			description: "",
			required: false
		},
		"name": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"avatar": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"token": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"application_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"source_guild": {
			type: "[GuildObject](#GuildObject)?",
			description: "",
			required: false
		},
		"source_channel": {
			type: "[ChannelObject](#ChannelObject)?",
			description: "",
			required: false
		},
		"url": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="AuditLogObject"></div>

## AuditLogObject

https://discord.com/developers/docs/resources/audit-log#audit-log-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/audit-log#audit-log-object
type AuditLogObject = {
	application_commands: {ApplicationCommandObject},

	-- List of application commands referenced in the audit log
	audit_log_entries: {AuditLogEntryObject},

	-- List of audit log entries, sorted from most to least recent
	auto_moderation_rules: {AutomoderationRuleObject},

	-- List of auto moderation rules referenced in the audit log
	guild_scheduled_events: {GuildScheduledEventObject},

	-- List of guild scheduled events referenced in the audit log
	integrations: {IntegrationObject},

	-- List of partial integration objects
	threads: {ChannelObject},

	-- List of threads referenced in the audit log*
	users: {UserObject},

	-- List of users referenced in the audit log
	webhooks: {WebhookObject}
}
```

</details>

<TypeTable
	type={{
		"application_commands": {
			type: "\{[ApplicationCommandObject](#ApplicationCommandObject)\}",
			description: "",
			required: true
		},
		"audit_log_entries": {
			type: "\{[AuditLogEntryObject](#AuditLogEntryObject)\}",
			description: "",
			required: true
		},
		"auto_moderation_rules": {
			type: "\{[AutomoderationRuleObject](#AutomoderationRuleObject)\}",
			description: "",
			required: true
		},
		"guild_scheduled_events": {
			type: "\{[GuildScheduledEventObject](#GuildScheduledEventObject)\}",
			description: "",
			required: true
		},
		"integrations": {
			type: "\{[IntegrationObject](#IntegrationObject)\}",
			description: "",
			required: true
		},
		"threads": {
			type: "\{[ChannelObject](#ChannelObject)\}",
			description: "",
			required: true
		},
		"users": {
			type: "\{[UserObject](#UserObject)\}",
			description: "",
			required: true
		},
		"webhooks": {
			type: "\{[WebhookObject](#WebhookObject)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="InviteObject"></div>

## InviteObject

https://discord.com/developers/docs/resources/invite#invite-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/invite#invite-object
type InviteObject = {
	type: InviteTypes,

	-- the type of invite
	code: string,

	-- the invite code (unique ID)
	guild: GuildObject?,

	-- the guild this invite is for
	channel: ChannelObject?,

	-- the channel this invite is for
	inviter: UserObject?,

	-- the user who created the invite
	target_type: InviteTargetTypes,

	-- the type of target for this voice channel invite
	target_user: UserObject?,

	-- the user whose stream to display for this voice channel stream invite
	target_application: ApplicationObject?,

	-- the embedded application to open for this voice channel embedded application invite
	approximate_presence_count: number?,

	-- approximate count of online members, returned from the GET /invites/<code> endpoint when with_counts is true
	approximate_member_count: number?,

	-- approximate count of total members, returned from the GET /invites/<code> endpoint when with_counts is true
	expires_at: string?,

	-- the expiration date of this invite, returned from the GET /invites/<code> endpoint when with_expiration is true
	stage_instance: StageInstanceObject?,

	-- stage instance data if there is a public Stage instance in the Stage channel this invite is for (deprecated)
	guild_scheduled_event: GuildScheduledEventObject?
}
```

</details>

<TypeTable
	type={{
		"type": {
			type: "[InviteTypes](#InviteTypes)",
			description: "",
			required: true
		},
		"code": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"guild": {
			type: "[GuildObject](#GuildObject)?",
			description: "",
			required: false
		},
		"channel": {
			type: "[ChannelObject](#ChannelObject)?",
			description: "",
			required: false
		},
		"inviter": {
			type: "[UserObject](#UserObject)?",
			description: "",
			required: false
		},
		"target_type": {
			type: "[InviteTargetTypes](#InviteTargetTypes)",
			description: "",
			required: true
		},
		"target_user": {
			type: "[UserObject](#UserObject)?",
			description: "",
			required: false
		},
		"target_application": {
			type: "[ApplicationObject](#ApplicationObject)?",
			description: "",
			required: false
		},
		"approximate_presence_count": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"approximate_member_count": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"expires_at": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"stage_instance": {
			type: "[StageInstanceObject](#StageInstanceObject)?",
			description: "",
			required: false
		},
		"guild_scheduled_event": {
			type: "[GuildScheduledEventObject](#GuildScheduledEventObject)?",
			description: "",
			required: false
		},
	}}
/>
<div id="GuildVanityUrl"></div>

## GuildVanityUrl

https://discord.com/developers/docs/resources/guild#get-guild-vanity-url

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#get-guild-vanity-url
type GuildVanityUrl = {
	code: string,

	uses: number
}
```

</details>

<TypeTable
	type={{
		"code": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"uses": {
			type: "[number](#number)",
			description: "",
			required: true
		},
	}}
/>
<div id="InviteMetadataObject"></div>

## InviteMetadataObject

https://discord.com/developers/docs/resources/invite#invite-metadata-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/invite#invite-metadata-object
type InviteMetadataObject = {
	uses: number,

	-- number of times this invite has been used
	max_uses: number,

	-- max number of times this invite can be used
	max_age: number,

	-- duration (in seconds) after which the invite expires
	temporary: boolean,

	-- whether this invite only grants temporary membership
	created_at: string
}
```

</details>

<TypeTable
	type={{
		"uses": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"max_uses": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"max_age": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"temporary": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"created_at": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="FollowedChannelObject"></div>

## FollowedChannelObject

https://discord.com/developers/docs/resources/channel#followed-channel-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#followed-channel-object
type FollowedChannelObject = {
	channel_id: Snowflake,

	-- source channel id
	webhook_id: Snowflake
}
```

</details>

<TypeTable
	type={{
		"channel_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"webhook_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
	}}
/>
<div id="GuildPreviewObject"></div>

## GuildPreviewObject

https://discord.com/developers/docs/resources/guild#guild-preview-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-preview-object
type GuildPreviewObject = {
	id: Snowflake,

	-- guild id
	name: string,

	-- guild name (2-100 characters)
	icon: string?,

	-- icon hash
	splash: string?,

	-- splash hash
	discovery_splash: string?,

	-- discovery splash hash
	emojis: {EmojiObject},

	-- custom guild emojis
	features: {GuildFeature},

	-- enabled guild features
	approximate_member_count: number,

	-- approximate number of members in this guild
	approximate_presence_count: number,

	-- approximate number of online members in this guild
	description: string?,

	-- the description for the guild
	stickers: {StickerObject}
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"icon": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"splash": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"discovery_splash": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"emojis": {
			type: "\{[EmojiObject](#EmojiObject)\}",
			description: "",
			required: true
		},
		"features": {
			type: "\{[GuildFeature](#GuildFeature)\}",
			description: "",
			required: true
		},
		"approximate_member_count": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"approximate_presence_count": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"description": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"stickers": {
			type: "\{[StickerObject](#StickerObject)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="BanObject"></div>

## BanObject

https://discord.com/developers/docs/resources/guild#ban-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#ban-object
type BanObject = {
	reason: string?,

	-- the reason for the ban
	user: UserObject
}
```

</details>

<TypeTable
	type={{
		"reason": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"user": {
			type: "[UserObject](#UserObject)",
			description: "",
			required: true
		},
	}}
/>
<div id="VoiceRegionObject"></div>

## VoiceRegionObject

https://discord.com/developers/docs/resources/voice#voice-region-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/voice#voice-region-object
type VoiceRegionObject = {
	id: string,

	-- unique ID for the region
	name: string,

	-- name of the region
	optimal: boolean,

	-- true for a single server that is closest to the current user's client
	deprecated: boolean,

	-- whether this is a deprecated voice region (avoid switching to these)
	custom: boolean
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"optimal": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"deprecated": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"custom": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
	}}
/>
<div id="GuildWidgetSettingsObject"></div>

## GuildWidgetSettingsObject

https://discord.com/developers/docs/resources/guild#guild-widget-settings-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-widget-settings-object
type GuildWidgetSettingsObject = {
	enabled: boolean?,

	-- whether the widget is enabled
	channel_id: Snowflake?
}
```

</details>

<TypeTable
	type={{
		"enabled": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"channel_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
	}}
/>
<div id="GuildWidgetObject"></div>

## GuildWidgetObject

https://discord.com/developers/docs/resources/guild#guild-widget-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-widget-object
type GuildWidgetObject = {
	id: Snowflake,

	-- guild id
	name: string,

	-- guild name (2-100 characters)
	instant_invite: string?,

	-- instant invite for the guilds specified widget invite channel
	channels: {ChannelObject},

	-- voice and stage channels which are accessible by @everyone
	members: {UserObject},

	-- special widget user objects that includes users presence (Limit 100)
	presence_count: number
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"instant_invite": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"channels": {
			type: "\{[ChannelObject](#ChannelObject)\}",
			description: "",
			required: true
		},
		"members": {
			type: "\{[UserObject](#UserObject)\}",
			description: "",
			required: true
		},
		"presence_count": {
			type: "[number](#number)",
			description: "",
			required: true
		},
	}}
/>
<div id="PromptOptionObject"></div>

## PromptOptionObject

https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-option-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-option-structure
type PromptOptionObject = {
	id: Snowflake?,

	-- ID of the prompt option
	channel_ids: {Snowflake},

	-- IDs for channels a member is added to when the option is selected
	role_ids: {Snowflake},

	-- IDs for roles assigned to a member when the option is selected
	emoji: EmojiObject | nil,

	-- Emoji of the option (see below)
	emoji_id: Snowflake?,

	-- Emoji ID of the option (see below)
	emoji_name: string?,

	-- Emoji name of the option (see below)
	emoji_animated: boolean?,

	-- Whether the emoji is animated (see below)
	title: string?,

	-- Title of the option
	description: string?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"channel_ids": {
			type: "\{[Snowflake](#Snowflake)\}",
			description: "",
			required: true
		},
		"role_ids": {
			type: "\{[Snowflake](#Snowflake)\}",
			description: "",
			required: true
		},
		"emoji": {
			type: "([EmojiObject](#EmojiObject) | [nil](#nil))",
			description: "",
			required: true
		},
		"emoji_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"emoji_name": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"emoji_animated": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"title": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"description": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="OnboardingPromptObject"></div>

## OnboardingPromptObject

https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-prompt-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-prompt-structure
type OnboardingPromptObject = {
	id: Snowflake | nil,

	-- ID of the prompt
	type: PromptTypes?,

	-- Type of prompt
	options: {PromptOptionObject},

	-- Options available within the prompt
	title: string?,

	-- Title of the prompt
	single_select: boolean?,

	-- Indicates whether users are limited to selecting one option for the prompt
	required: boolean?,

	-- Indicates whether the prompt is required before a user completes the onboarding flow
	in_onboarding: boolean?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "([Snowflake](#Snowflake) | [nil](#nil))",
			description: "",
			required: true
		},
		"type": {
			type: "[PromptTypes](#PromptTypes)?",
			description: "",
			required: false
		},
		"options": {
			type: "\{[PromptOptionObject](#PromptOptionObject)\}",
			description: "",
			required: true
		},
		"title": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"single_select": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"required": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"in_onboarding": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
	}}
/>
<div id="GuildOnboardingObject"></div>

## GuildOnboardingObject

https://discord.com/developers/docs/resources/guild#guild-onboarding-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#guild-onboarding-object
type GuildOnboardingObject = {
	guild_id: Snowflake,

	-- ID of the guild this onboarding is part of
	prompts: {OnboardingPromptObject},

	-- Prompts shown during onboarding and in customize community
	default_channel_ids: {Snowflake},

	-- Channel IDs that members get opted into automatically
	enabled: boolean,

	-- Whether onboarding is enabled in the guild
	mode: OnboardingMode
}
```

</details>

<TypeTable
	type={{
		"guild_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"prompts": {
			type: "\{[OnboardingPromptObject](#OnboardingPromptObject)\}",
			description: "",
			required: true
		},
		"default_channel_ids": {
			type: "\{[Snowflake](#Snowflake)\}",
			description: "",
			required: true
		},
		"enabled": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"mode": {
			type: "[OnboardingMode](#OnboardingMode)",
			description: "",
			required: true
		},
	}}
/>
<div id="GuildScheduledEventUserObject"></div>

## GuildScheduledEventUserObject

https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-user-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-user-object
type GuildScheduledEventUserObject = {
	guild_scheduled_event_id: Snowflake,

	-- the scheduled event id which the user subscribed to
	user: UserObject,

	-- user which subscribed to an event
	member: GuildMemberObject?
}
```

</details>

<TypeTable
	type={{
		"guild_scheduled_event_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"user": {
			type: "[UserObject](#UserObject)",
			description: "",
			required: true
		},
		"member": {
			type: "[GuildMemberObject](#GuildMemberObject)?",
			description: "",
			required: false
		},
	}}
/>
<div id="GuildTemplateObject"></div>

## GuildTemplateObject

https://discord.com/developers/docs/resources/guild-template#guild-template-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild-template#guild-template-object
type GuildTemplateObject = {
	code: string,

	-- the template code (unique ID)
	name: string,

	-- template name
	description: string?,

	-- the description for the template
	usage_count: number,

	-- number of times this template has been used
	creator_id: Snowflake,

	-- the ID of the user who created the template
	creator: UserObject,

	-- the user who created the template
	created_at: string,

	-- when this template was created
	updated_at: string,

	-- when this template was last synced to the source guild
	source_guild_id: Snowflake,

	-- the ID of the guild this template is based on
	serialized_source_guild: GuildObject,

	-- the guild snapshot this template contains
	is_dirty: boolean?
}
```

</details>

<TypeTable
	type={{
		"code": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"description": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"usage_count": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"creator_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"creator": {
			type: "[UserObject](#UserObject)",
			description: "",
			required: true
		},
		"created_at": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"updated_at": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"source_guild_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"serialized_source_guild": {
			type: "[GuildObject](#GuildObject)",
			description: "",
			required: true
		},
		"is_dirty": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
	}}
/>
<div id="StickerPackObject"></div>

## StickerPackObject

https://discord.com/developers/docs/resources/sticker#sticker-pack-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/sticker#sticker-pack-object
type StickerPackObject = {
	id: Snowflake,

	-- id of the sticker pack
	stickers: {StickerObject},

	-- the stickers in the pack
	name: string,

	-- name of the sticker pack
	sku_id: Snowflake,

	-- id of the pack's SKU
	cover_sticker_id: Snowflake?,

	-- id of a sticker in the pack which is shown as the pack's icon
	description: string,

	-- description of the sticker pack
	banner_asset_id: Snowflake?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"stickers": {
			type: "\{[StickerObject](#StickerObject)\}",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"sku_id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"cover_sticker_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
		"description": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"banner_asset_id": {
			type: "[Snowflake](#Snowflake)?",
			description: "",
			required: false
		},
	}}
/>
<div id="IntegrationApplicationObject"></div>

## IntegrationApplicationObject

https://discord.com/developers/docs/resources/guild#integration-application-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/guild#integration-application-object
type IntegrationApplicationObject = {
	id: Snowflake,

	-- the id of the app
	name: string,

	-- the name of the app
	icon: string?,

	-- the icon hash of the app
	description: string,

	-- the description of the app
	bot: UserObject?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"icon": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"description": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"bot": {
			type: "[UserObject](#UserObject)?",
			description: "",
			required: false
		},
	}}
/>
<div id="ConnectionObject"></div>

## ConnectionObject

https://discord.com/developers/docs/resources/user#connection-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#connection-object
type ConnectionObject = {
	id: string,

	-- id of the connection account
	name: string,

	-- the username of the connection account
	type: ConnectionObjectServices,

	-- the service of this connection
	revoked: boolean?,

	-- whether the connection is revoked
	integrations: {IntegrationObject}?,

	-- an array of partial server integrations
	verified: boolean,

	-- whether the connection is verified
	friend_sync: boolean,

	-- whether friend sync is enabled for this connection
	show_Activity: boolean,

	-- whether activities related to this connection will be shown in presence updates
	two_way_link: boolean,

	-- whether this connection has a corresponding third party OAuth2 token
	visibility: ConnectionVisibilityTypes
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"type": {
			type: "[ConnectionObjectServices](#ConnectionObjectServices)",
			description: "",
			required: true
		},
		"revoked": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
		"integrations": {
			type: "\{[IntegrationObject](#IntegrationObject)\}?",
			description: "",
			required: false
		},
		"verified": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"friend_sync": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"show_Activity": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"two_way_link": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"visibility": {
			type: "[ConnectionVisibilityTypes](#ConnectionVisibilityTypes)",
			description: "",
			required: true
		},
	}}
/>
<div id="ApplicationRoleConnectionObject"></div>

## ApplicationRoleConnectionObject

https://discord.com/developers/docs/resources/user#application-role-connection-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/user#application-role-connection-object
type ApplicationRoleConnectionObject = {
	platform_name: string?,

	-- the vanity name of the platform a bot has connected (max 50 characters)
	platform_username: string?,

	-- the username on the platform a bot has connected (max 100 characters)
	metadata: ApplicationRoleConnectionMetadataObject
}
```

</details>

<TypeTable
	type={{
		"platform_name": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"platform_username": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"metadata": {
			type: "[ApplicationRoleConnectionMetadataObject](#ApplicationRoleConnectionMetadataObject)",
			description: "",
			required: true
		},
	}}
/>
<div id="SessionStartLimitObject"></div>

## SessionStartLimitObject

https://discord.com/developers/docs/topics/gateway#session-start-limit-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/topics/gateway#session-start-limit-object
type SessionStartLimitObject = {
	total: number,

	-- Total number of session starts the current user is allowed
	remaining: number,

	-- Remaining number of session starts the current user is allowed
	reset_after: number,

	-- Number of milliseconds after which the limit resets
	max_concurrency: number
}
```

</details>

<TypeTable
	type={{
		"total": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"remaining": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"reset_after": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"max_concurrency": {
			type: "[number](#number)",
			description: "",
			required: true
		},
	}}
/>
<div id="AllowedMentionObject"></div>

## AllowedMentionObject

https://discord.com/developers/docs/resources/channel#allowed-mentions-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#allowed-mentions-object
type AllowedMentionObject = {
	parse: {AllowedMentionTypes}?,

	-- An array of allowed mention types to parse from the content.
	users: {string}?,

	-- Array of role_ids to mention (Max size of 100)
	roles: {string}?,

	-- Array of user_ids to mention (Max size of 100)
	replied_user: boolean?
}
```

</details>

<TypeTable
	type={{
		"parse": {
			type: "\{[AllowedMentionTypes](#AllowedMentionTypes)\}?",
			description: "",
			required: false
		},
		"users": {
			type: "\{[string](#string)\}?",
			description: "",
			required: false
		},
		"roles": {
			type: "\{[string](#string)\}?",
			description: "",
			required: false
		},
		"replied_user": {
			type: "[boolean](#boolean)?",
			description: "",
			required: false
		},
	}}
/>
<div id="ForumAndMediaThreadMessageObject"></div>

## ForumAndMediaThreadMessageObject

https://discord.com/developers/docs/resources/channel#start-thread-in-forum-or-media-channel-forum-and-media-thread-message-params-object

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/resources/channel#start-thread-in-forum-or-media-channel-forum-and-media-thread-message-params-object
type ForumAndMediaThreadMessageObject = {
	content: string?,

	-- Message contents (up to 2000 characters)
	embeds: {EmbedObject}?,

	-- Up to 10 rich embeds (up to 6000 characters)
	allowed_mentions: AllowedMentionObject?,

	-- Allowed mentions for the message
	components: {ComponentObjects}?,

	-- Components to include with the message
	sticker_ids: {Snowflake}?,

	-- IDs of up to 3 stickers in the server to send in the message
	attachments: {AttachmentObject}?,

	-- Attachment objects with filename and description. See Uploading Files
	flags: number?
}
```

</details>

<TypeTable
	type={{
		"content": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"embeds": {
			type: "\{[EmbedObject](#EmbedObject)\}?",
			description: "",
			required: false
		},
		"allowed_mentions": {
			type: "[AllowedMentionObject](#AllowedMentionObject)?",
			description: "",
			required: false
		},
		"components": {
			type: "\{[ComponentObjects](#ComponentObjects)\}?",
			description: "",
			required: false
		},
		"sticker_ids": {
			type: "\{[Snowflake](#Snowflake)\}?",
			description: "",
			required: false
		},
		"attachments": {
			type: "\{[AttachmentObject](#AttachmentObject)\}?",
			description: "",
			required: false
		},
		"flags": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
	}}
/>
<div id="InteractionCallbackAutocompleteObject"></div>

## InteractionCallbackAutocompleteObject

https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-data-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-data-structure
type InteractionCallbackAutocompleteObject = {
	choices: {ApplicationCommandOptionChoiceObject}?
}
```

</details>

<TypeTable
	type={{
		"choices": {
			type: "\{[ApplicationCommandOptionChoiceObject](#ApplicationCommandOptionChoiceObject)\}?",
			description: "",
			required: false
		},
	}}
/>
<div id="InteractionCallbackModalObject"></div>

## InteractionCallbackModalObject

https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-data-structure

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-data-structure
type InteractionCallbackModalObject = {
	custom_id: string?,

	-- Developer-defined identifier for the modal, max 100 characters
	title: string?,

	-- Title of the popup modal, max 45 characters
	components: {ComponentObjects}
}
```

</details>

<TypeTable
	type={{
		"custom_id": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"title": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"components": {
			type: "\{[ComponentObjects](#ComponentObjects)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="InteractionResponseObject"></div>

## InteractionResponseObject

https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type

<details>
<summary>Raw Type</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
type InteractionResponseObject = {
	type: InteractionCallbackType,

	-- the type of response
	data: (Partial<MessageObject> | InteractionCallbackAutocompleteObject | InteractionCallbackModalObject)?
}
```

</details>

<TypeTable
	type={{
		"type": {
			type: "[InteractionCallbackType](#InteractionCallbackType)",
			description: "",
			required: true
		},
		"data": {
			type: "([Partial](#Partial)&lt;[MessageObject](#MessageObject)&gt; | [InteractionCallbackAutocompleteObject](#InteractionCallbackAutocompleteObject) | [InteractionCallbackModalObject](#InteractionCallbackModalObject))?",
			description: "",
			required: false
		},
	}}
/>
