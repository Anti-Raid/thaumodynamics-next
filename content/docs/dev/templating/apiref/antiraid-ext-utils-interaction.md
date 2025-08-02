---
title: "@antiraid-ext/utils/interaction"
description: "API reference for @antiraid-ext/utils/interaction"
---

<div id="@antiraid-ext/utils/interaction"></div>

# @antiraid-ext/utils/interaction

<div id="Functions"></div>

# Functions

<div id="edit"></div>

## edit

<details>
<summary>Function Signature</summary>

```luau
function edit(ctx: Primitives.TemplateContext, interaction: discord.InteractionObject, data: discordRestTypes.EditWebhookMessageRequest) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="interaction"></div>

### interaction

[discord](#module.discord).[InteractionObject](#InteractionObject)



<div id="data"></div>

### data

[discordRestTypes](#module.discordRestTypes).[EditWebhookMessageRequest](#EditWebhookMessageRequest)



<div id="reply"></div>

## reply

<details>
<summary>Function Signature</summary>

```luau
function reply(ctx: Primitives.TemplateContext, interaction: discord.InteractionObject, data: discordRestTypes.CreateInteractionRequest) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="interaction"></div>

### interaction

[discord](#module.discord).[InteractionObject](#InteractionObject)



<div id="data"></div>

### data

[discordRestTypes](#module.discordRestTypes).[CreateInteractionRequest](#CreateInteractionRequest)



<div id="replySimple"></div>

## replySimple

<details>
<summary>Function Signature</summary>

```luau
function replySimple(ctx: Primitives.TemplateContext, interaction: discord.InteractionObject, content: string?, embeds: {discord.EmbedObject}?, ephemeral: boolean?, components: {discord.ComponentObjects}?) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="interaction"></div>

### interaction

[discord](#module.discord).[InteractionObject](#InteractionObject)



<div id="content"></div>

### content

*This field is optional and may not be specified*

[string](#string)?

<div id="embeds"></div>

### embeds

*This field is optional and may not be specified*

\{[discord](#module.discord).[EmbedObject](#EmbedObject)\}?

<div id="ephemeral"></div>

### ephemeral

*This field is optional and may not be specified*

[boolean](#boolean)?

<div id="components"></div>

### components

*This field is optional and may not be specified*

\{[discord](#module.discord).[ComponentObjects](#ComponentObjects)\}?

<div id="replyAck"></div>

## replyAck

<details>
<summary>Function Signature</summary>

```luau
function replyAck(ctx: Primitives.TemplateContext, interaction: discord.InteractionObject) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="interaction"></div>

### interaction

[discord](#module.discord).[InteractionObject](#InteractionObject)



<div id="replyUpdate"></div>

## replyUpdate

<details>
<summary>Function Signature</summary>

```luau
function replyUpdate(ctx: Primitives.TemplateContext, interaction: discord.InteractionObject, content: string?, embeds: {discord.EmbedObject}?, components: {discord.ComponentObjects}?) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="interaction"></div>

### interaction

[discord](#module.discord).[InteractionObject](#InteractionObject)



<div id="content"></div>

### content

*This field is optional and may not be specified*

[string](#string)?

<div id="embeds"></div>

### embeds

*This field is optional and may not be specified*

\{[discord](#module.discord).[EmbedObject](#EmbedObject)\}?

<div id="components"></div>

### components

*This field is optional and may not be specified*

\{[discord](#module.discord).[ComponentObjects](#ComponentObjects)\}?

<div id="replyAutocomplete"></div>

## replyAutocomplete

https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete

<details>
<summary>Function Signature</summary>

```luau
-- https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete
function replyAutocomplete(ctx: Primitives.TemplateContext, interaction: discord.InteractionObject, choices: {discord.ApplicationCommandOptionChoiceObject}) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="interaction"></div>

### interaction

[discord](#module.discord).[InteractionObject](#InteractionObject)



<div id="choices"></div>

### choices

\{[discord](#module.discord).[ApplicationCommandOptionChoiceObject](#ApplicationCommandOptionChoiceObject)\}

<div id="editSimple"></div>

## editSimple

<details>
<summary>Function Signature</summary>

```luau
function editSimple(ctx: Primitives.TemplateContext, interaction: discord.InteractionObject, content: string?, embeds: {discord.EmbedObject}?, components: {discord.ComponentObjects}?) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="interaction"></div>

### interaction

[discord](#module.discord).[InteractionObject](#InteractionObject)



<div id="content"></div>

### content

*This field is optional and may not be specified*

[string](#string)?

<div id="embeds"></div>

### embeds

*This field is optional and may not be specified*

\{[discord](#module.discord).[EmbedObject](#EmbedObject)\}?

<div id="components"></div>

### components

*This field is optional and may not be specified*

\{[discord](#module.discord).[ComponentObjects](#ComponentObjects)\}?

