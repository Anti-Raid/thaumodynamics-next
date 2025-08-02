---
title: "@antiraid-ext/utils/eventmgmt"
description: "API reference for @antiraid-ext/utils/eventmgmt"
---

<div id="@antiraid-ext/utils/eventmgmt"></div>

# @antiraid-ext/utils/eventmgmt

<div id="Functions"></div>

# Functions

<div id="getSubscribedEvents"></div>

## getSubscribedEvents

Returns the exact set of events that builtins has access to

<details>
<summary>Function Signature</summary>

```luau
--- Returns the exact set of events that builtins has access to
function getSubscribedEvents(ctx: Primitives.TemplateContext) -> {string} end
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

\{[string](#string)\}<div id="_cloneTableDespiteMetatable"></div>

## _cloneTableDespiteMetatable

<details>
<summary>Function Signature</summary>

```luau
function _cloneTableDespiteMetatable(t: {string}) -> {string} end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="t"></div>

### t

\{[string](#string)\}

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

\{[string](#string)\}<div id="registerEvent"></div>

## registerEvent

Registers a event

<details>
<summary>Function Signature</summary>

```luau
--- Registers a event
function registerEvent(ctx: Primitives.TemplateContext, event: string) -> () end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="event"></div>

### event

[string](#string)

