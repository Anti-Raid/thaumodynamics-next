---
title: "@antiraid-ext/framework/storage"
description: "API reference for @antiraid-ext/framework/storage"
---

<div id="@antiraid-ext/framework/storage"></div>

# @antiraid-ext/framework/storage

<div id="Functions"></div>

# Functions

<div id="get"></div>

## get

Upvalue to store the framework

Returns the current framework instance if it exists.

If it does not exist, returns nil.

<details>
<summary>Function Signature</summary>

```luau
-- Upvalue to store the framework
--- Returns the current framework instance if it exists.
--- If it does not exist, returns nil.
function get() -> coretypes.Framework? end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[coretypes](#module.coretypes).[Framework](#Framework)?<div id="set"></div>

## set

Sets the framework instance.

If it is already set, it will throw an error.

<details>
<summary>Function Signature</summary>

```luau
--- Sets the framework instance.
--- If it is already set, it will throw an error.
function set(framework: coretypes.Framework) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="framework"></div>

### framework

[coretypes](#module.coretypes).[Framework](#Framework)



<div id="replace"></div>

## replace

Replaces any current framework instance with a new one.

Unlike set, this does not throw an error if the framework is already set.

<details>
<summary>Function Signature</summary>

```luau
--- Replaces any current framework instance with a new one.
--- Unlike set, this does not throw an error if the framework is already set.
function replace(newFramework: coretypes.Framework) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="newFramework"></div>

### newFramework

[coretypes](#module.coretypes).[Framework](#Framework)



<div id="share"></div>

## share

Helper method to share a framework with all other templates.

<details>
<summary>Function Signature</summary>

```luau
--- Helper method to share a framework with all other templates.
function share(ctx: Primitives.TemplateContext, framework: coretypes.Framework) end
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



<div id="getShared"></div>

## getShared

Helper method to return all shared frameworks.

<details>
<summary>Function Signature</summary>

```luau
--- Helper method to return all shared frameworks.
function getShared(ctx: Primitives.TemplateContext) -> {
		[string]: coretypes.Framework
	} end
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

\{[string]: [coretypes](#module.coretypes).[Framework](#Framework)\}