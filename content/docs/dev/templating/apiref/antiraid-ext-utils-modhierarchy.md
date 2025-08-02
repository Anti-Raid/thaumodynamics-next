---
title: "@antiraid-ext/utils/modhierarchy"
description: "API reference for @antiraid-ext/utils/modhierarchy"
---

<div id="@antiraid-ext/utils/modhierarchy"></div>

# @antiraid-ext/utils/modhierarchy

<div id="Functions"></div>

# Functions

<div id="canModeratorDo"></div>

## canModeratorDo

<details>
<summary>Function Signature</summary>

```luau
function canModeratorDo(userinfo: userinfo.UserInfo, cap: string) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="userinfo"></div>

### userinfo

[userinfo](#module.userinfo).[UserInfo](#UserInfo)



<div id="cap"></div>

### cap

[string](#string)

<div id="canBotDoInChannel"></div>

## canBotDoInChannel

<details>
<summary>Function Signature</summary>

```luau
function canBotDoInChannel(channelId: string, ctx: Primitives.TemplateContext, botNeededPerms: typesext.U64Convertibles) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="channelId"></div>

### channelId

[string](#string)

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="botNeededPerms"></div>

### botNeededPerms

[typesext](#module.typesext).[U64Convertibles](#U64Convertibles)



<div id="canModeratorAffectTarget"></div>

## canModeratorAffectTarget

<details>
<summary>Function Signature</summary>

```luau
function canModeratorAffectTarget(ctx: Primitives.TemplateContext, userinfo: userinfo.UserInfo, targetId: string, cap: string) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="userinfo"></div>

### userinfo

[userinfo](#module.userinfo).[UserInfo](#UserInfo)



<div id="targetId"></div>

### targetId

[string](#string)

<div id="cap"></div>

### cap

[string](#string)

<div id="extractUserIdFromInteraction"></div>

## extractUserIdFromInteraction

<details>
<summary>Function Signature</summary>

```luau
function extractUserIdFromInteraction(interaction: apitypes.InteractionObject) -> string end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="interaction"></div>

### interaction

[apitypes](#module.apitypes).[InteractionObject](#InteractionObject)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[string](#string)