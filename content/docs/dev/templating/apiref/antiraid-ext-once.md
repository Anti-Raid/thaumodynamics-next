---
title: "@antiraid-ext/once"
description: "API reference for @antiraid-ext/once"
---

<div id="@antiraid-ext/once"></div>

# @antiraid-ext/once

<div id="Functions"></div>

# Functions

<div id="once"></div>

## once

Stores local \`once\` calls to avoid re-execution

Runs a function only once, when the template is first ever

executed



\`\`@antiraid/kv\`\` is used for persistence here to avoid rerunning

the function on worker restart

<details>
<summary>Function Signature</summary>

```luau
-- Stores local \`once\` calls to avoid re-execution
--- Runs a function only once, when the template is first ever 
--- executed
---
--- \`\`@antiraid/kv\`\` is used for persistence here to avoid rerunning
--- the function on worker restart
function once<T>(ctx: Primitives.TemplateContext, globalid: string, fn: () -> T) -> T? end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="globalid"></div>

### globalid

[string](#string)

<div id="fn"></div>

### fn

<details>
<summary>Function Signature</summary>

```luau
fn: () -> T
```

</details>

<div id="Returns"></div>

### Returns

<div id="ret1"></div>

#### ret1

[T](#T)<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[T](#T)?<div id="onceLocal"></div>

## onceLocal

Runs a function only once, when the template is first ever

executed. If the function errors, it will be re-executed on future runs



Unlike \`\`once\`\`, this function is not persistent across worker restarts

<details>
<summary>Function Signature</summary>

```luau
--- Runs a function only once, when the template is first ever 
--- executed. If the function errors, it will be re-executed on future runs
---
--- Unlike \`\`once\`\`, this function is not persistent across worker restarts
function onceLocal<T>(localid: string, fn: () -> T) -> T? end
```

</details>

<div id="Generics"></div>

## Generics

<div id="T"></div>

### T

This generic is unconstrained and can be any type

<div id="Arguments"></div>

## Arguments

<div id="localid"></div>

### localid

[string](#string)

<div id="fn"></div>

### fn

<details>
<summary>Function Signature</summary>

```luau
fn: () -> T
```

</details>

<div id="Returns"></div>

### Returns

<div id="ret1"></div>

#### ret1

[T](#T)<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[T](#T)?