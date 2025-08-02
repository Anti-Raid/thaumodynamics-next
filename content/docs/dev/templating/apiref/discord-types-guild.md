---
title: "@discord-types/guild"
description: "API reference for @discord-types/guild"
---

<div id="@discord-types/guild"></div>

# @discord-types/guild

<div id="Types"></div>

## Types

<div id="ActionTypes"></div>

## ActionTypes

<details>
<summary>Raw Type</summary>

```luau
type ActionTypes = "BlockMessage" | "SendAlertMessage" | "Timeout" | "BlockMemberInteraction"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"BlockMessage"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"SendAlertMessage"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"Timeout"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"BlockMemberInteraction"
```

</details>

<div id="EventTypes"></div>

## EventTypes

<details>
<summary>Raw Type</summary>

```luau
type EventTypes = "MessageSend" | "MemberUpdate"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"MessageSend"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"MemberUpdate"
```

</details>

<div id="KeywordPresetType"></div>

## KeywordPresetType

<details>
<summary>Raw Type</summary>

```luau
type KeywordPresetType = "Profanity" | "SexualContent" | "Slurs"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Profanity"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"SexualContent"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"Slurs"
```

</details>

<div id="TriggerTypes"></div>

## TriggerTypes

<details>
<summary>Raw Type</summary>

```luau
type TriggerTypes = "Keyword" | "Spam" | "KeywordPreset" | "MentionSpam" | "MemberProfile"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Keyword"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Spam"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"KeywordPreset"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"MentionSpam"
```

</details>

<details>
<summary>Variant 5</summary>

```luau
"MemberProfile"
```

</details>

<div id="VerificationLevel"></div>

## VerificationLevel

<details>
<summary>Raw Type</summary>

```luau
type VerificationLevel = "None" | "Low" | "Medium" | "High" | "VeryHigh"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"None"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Low"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"Medium"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"High"
```

</details>

<details>
<summary>Variant 5</summary>

```luau
"VeryHigh"
```

</details>

<div id="DefaultMessageNotification"></div>

## DefaultMessageNotification

<details>
<summary>Raw Type</summary>

```luau
type DefaultMessageNotification = "AllMessages" | "OnlyMentions"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"AllMessages"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"OnlyMentions"
```

</details>

<div id="ExplicitContentFilterLevel"></div>

## ExplicitContentFilterLevel

<details>
<summary>Raw Type</summary>

```luau
type ExplicitContentFilterLevel = "Disabled" | "MembersWithoutRoles" | "AllMembers"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Disabled"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"MembersWithoutRoles"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"AllMembers"
```

</details>

<div id="NSFWLevel"></div>

## NSFWLevel

<details>
<summary>Raw Type</summary>

```luau
type NSFWLevel = "Default" | "Explicit" | "Safe" | "AgeRestricted"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Default"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Explicit"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"Safe"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"AgeRestricted"
```

</details>

<div id="PremiumTier"></div>

## PremiumTier

<details>
<summary>Raw Type</summary>

```luau
type PremiumTier = "None" | "Tier1" | "Tier2" | "Tier3"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"None"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Tier1"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"Tier2"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"Tier3"
```

</details>

<div id="MFALevel"></div>

## MFALevel

<details>
<summary>Raw Type</summary>

```luau
type MFALevel = "None" | "Elevated"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"None"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Elevated"
```

</details>

<div id="InviteType"></div>

## InviteType

<details>
<summary>Raw Type</summary>

```luau
type InviteType = "Guild" | "GroupDM" | "Friend"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Guild"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"GroupDM"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"Friend"
```

</details>

<div id="InviteTargetType"></div>

## InviteTargetType

<details>
<summary>Raw Type</summary>

```luau
type InviteTargetType = "Stream" | "EmbeddedApplication"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Stream"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"EmbeddedApplication"
```

</details>

<div id="ScheduledEventPrivacyLevel"></div>

## ScheduledEventPrivacyLevel

<details>
<summary>Raw Type</summary>

```luau
type ScheduledEventPrivacyLevel = "GuildOnly"
```

</details>

```luau
"GuildOnly"
```

<div id="SchedledEventEntityType"></div>

## SchedledEventEntityType

<details>
<summary>Raw Type</summary>

```luau
type SchedledEventEntityType = "StageInstance" | "Voice" | "External"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"StageInstance"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Voice"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"External"
```

</details>

<div id="SchedledEventStatus"></div>

## SchedledEventStatus

<details>
<summary>Raw Type</summary>

```luau
type SchedledEventStatus = "Scheduled" | "Active" | "Completed" | "Canceled"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Scheduled"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Active"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"Completed"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"Canceled"
```

</details>

<div id="IntegrationType"></div>

## IntegrationType

<details>
<summary>Raw Type</summary>

```luau
type IntegrationType = "Twitch" | "YouTube" | "Discord" | "GuildSubscription"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Twitch"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"YouTube"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"Discord"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"GuildSubscription"
```

</details>

<div id="IntegrationExpireBehaviour"></div>

## IntegrationExpireBehaviour

<details>
<summary>Raw Type</summary>

```luau
type IntegrationExpireBehaviour = "RemoveRole" | "Kick"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"RemoveRole"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Kick"
```

</details>

<div id="OnboardingPromptType"></div>

## OnboardingPromptType

<details>
<summary>Raw Type</summary>

```luau
type OnboardingPromptType = "MultipleChoice" | "Dropdown"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"MultipleChoice"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Dropdown"
```

</details>

<div id="OnboardingMode"></div>

## OnboardingMode

<details>
<summary>Raw Type</summary>

```luau
type OnboardingMode = "Default" | "Advanced"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Default"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Advanced"
```

</details>

<div id="OverwriteType"></div>

## OverwriteType

<details>
<summary>Raw Type</summary>

```luau
type OverwriteType = "Role" | "Member"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Role"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Member"
```

</details>

<div id="AuditLogEvent"></div>

## AuditLogEvent

<details>
<summary>Raw Type</summary>

```luau
type AuditLogEvent = "GuildUpdate" | "ChannelCreate" | "ChannelUpdate" | "ChannelDelete" | "MessageCreate" | "MessageUpdate" | "MessageDelete" | "ReactionAdd" | "ReactionRemove" | "PresenceUpdate" | "VoiceStateUpdate" | "TypingStart"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"GuildUpdate"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"ChannelCreate"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"ChannelUpdate"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"ChannelDelete"
```

</details>

<details>
<summary>Variant 5</summary>

```luau
"MessageCreate"
```

</details>

<details>
<summary>Variant 6</summary>

```luau
"MessageUpdate"
```

</details>

<details>
<summary>Variant 7</summary>

```luau
"MessageDelete"
```

</details>

<details>
<summary>Variant 8</summary>

```luau
"ReactionAdd"
```

</details>

<details>
<summary>Variant 9</summary>

```luau
"ReactionRemove"
```

</details>

<details>
<summary>Variant 10</summary>

```luau
"PresenceUpdate"
```

</details>

<details>
<summary>Variant 11</summary>

```luau
"VoiceStateUpdate"
```

</details>

<details>
<summary>Variant 12</summary>

```luau
"TypingStart"
```

</details>

