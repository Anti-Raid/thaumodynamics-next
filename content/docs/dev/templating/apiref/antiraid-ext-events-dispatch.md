---
title: "@antiraid-ext/events/dispatch"
description: "API reference for @antiraid-ext/events/dispatch"
---

<div id="@antiraid-ext/events/dispatch"></div>

# @antiraid-ext/events/dispatch

<div id="Functions"></div>

# Functions

<div id="doesEventMatch"></div>

## doesEventMatch

Function that checks if the event matches the name.



An event matches name when its \`\`base_name\`\` or \`\`name\`\` is equal to the \`\`name\`\` argument or when \`\`\{base_name\}.\{name\}\`\` is equal to the \`\`name\`\` argument.



For example, using either \`\`Message\`\` or \`\`Discord.Message\`\` as name would match a Discord Message event.



**Note that this function is case-insensitive and internally converts all strings to lowercase.**

<details>
<summary>Function Signature</summary>

```luau
--- Function that checks if the event matches the name.
---
--- An event matches name when its \`\`base_name\`\` or \`\`name\`\` is equal to the \`\`name\`\` argument or when \`\`{base_name}.{name}\`\` is equal to the \`\`name\`\` argument.
--- 
--- For example, using either \`\`Message\`\` or \`\`Discord.Message\`\` as name would match a Discord Message event.
---
--- **Note that this function is case-insensitive and internally converts all strings to lowercase.**
--- @param pat string The name to match against.
--- @param event Primitives.Event The event to check.
--- @return boolean True if the event matches the name, false otherwise.
function doesEventMatch(pat: string, event: Primitives.Event) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="pat"></div>

### pat

string The name to match against.

[string](#string)

<div id="event"></div>

### event

Primitives.Event The event to check.

[Primitives](#module.Primitives).[Event](#Event)



<div id="onEvent"></div>

## onEvent

Simple helper method that calls \`\`callback\`\` when the event matches the name. See \`\`doesEventMatch\`\` for more information

on how the name is matched.



<details>
<summary>Function Signature</summary>

```luau
--- Simple helper method that calls \`\`callback\`\` when the event matches the name. See \`\`doesEventMatch\`\` for more information
--- on how the name is matched.
---
--- @param event Primitives.Event The event to listen for.
--- @param pats string | {string} The name or list of names to match against.
--- @param callback function The callback to run when the event matches the name. The callback will receive the event as an argument.
--- @return nil
function onEvent(event: Primitives.Event, pats: string | {string}, callback: (Primitives.Event) -> ()) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="event"></div>

### event

Primitives.Event The event to listen for.

[Primitives](#module.Primitives).[Event](#Event)



<div id="pats"></div>

### pats

string | \{string\} The name or list of names to match against.

Union with variants:

<details>
<summary>Variant 1</summary>

[string](#string)

</details>

<details>
<summary>Variant 2</summary>

\{[string](#string)\}

</details>

<div id="callback"></div>

### callback

function The callback to run when the event matches the name. The callback will receive the event as an argument.

<details>
<summary>Function Signature</summary>

```luau
callback: (Primitives.Event) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="arg1"></div>

#### arg1

[Primitives](#module.Primitives).[Event](#Event)



<div id="onEventGeneric"></div>

## onEventGeneric

Simple helper method that calls \`\`callback\`\` when the event matches the name. See \`\`doesEventMatch\`\` for more information

on how the name is matched.

<details>
<summary>Function Signature</summary>

```luau
--- Simple helper method that calls \`\`callback\`\` when the event matches the name. See \`\`doesEventMatch\`\` for more information
--- on how the name is matched.
function onEventGeneric<R>(event: Primitives.Event, pats: string | {string}, callback: (Primitives.Event) -> R) -> R? end
```

</details>

<div id="Generics"></div>

## Generics

<div id="R"></div>

### R

This generic is unconstrained and can be any type

<div id="Arguments"></div>

## Arguments

<div id="event"></div>

### event

[Primitives](#module.Primitives).[Event](#Event)



<div id="pats"></div>

### pats

Union with variants:

<details>
<summary>Variant 1</summary>

[string](#string)

</details>

<details>
<summary>Variant 2</summary>

\{[string](#string)\}

</details>

<div id="callback"></div>

### callback

<details>
<summary>Function Signature</summary>

```luau
callback: (Primitives.Event) -> R
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="arg1"></div>

#### arg1

[Primitives](#module.Primitives).[Event](#Event)



<div id="Returns"></div>

### Returns

<div id="ret1"></div>

#### ret1

[R](#R)<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[R](#R)?