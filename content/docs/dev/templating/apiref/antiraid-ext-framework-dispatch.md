---
title: "@antiraid-ext/framework/dispatch"
description: "API reference for @antiraid-ext/framework/dispatch"
---

<div id="@antiraid-ext/framework/dispatch"></div>

# @antiraid-ext/framework/dispatch

<div id="Functions"></div>

# Functions

<div id="_setupFrameworkBaseData"></div>

## _setupFrameworkBaseData

<details>
<summary>Function Signature</summary>

```luau
function _setupFrameworkBaseData(ctx: Primitives.TemplateContext, framework: coretypes.Framework) -> () end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="framework"></div>

### framework

[coretypes](#module.coretypes).[Framework](#Framework)



<div id="dispatch"></div>

## dispatch

Dispatches an event to the framework.



This is the main entry point for the framework to handle events.



Currently, \`\`dispatch\`\` handles app commands, button callbacks and commands key expiration events.



@error If the framework is not set up before calling this function.

<details>
<summary>Function Signature</summary>

```luau
--- Dispatches an event to the framework.
---
--- This is the main entry point for the framework to handle events.
---
--- Currently, \`\`dispatch\`\` handles app commands, button callbacks and commands key expiration events.
---
--- @param evt Primitives.Event The event to dispatch.
--- @param ctx Primitives.TemplateContext The context to use for the event.
--- @return nil
--- @error If the framework is not set up before calling this function.
function dispatch(evt: Primitives.Event, ctx: Primitives.TemplateContext) -> any end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="evt"></div>

### evt

Primitives.Event The event to dispatch.

[Primitives](#module.Primitives).[Event](#Event)



<div id="ctx"></div>

### ctx

Primitives.TemplateContext The context to use for the event.

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[any](#any)