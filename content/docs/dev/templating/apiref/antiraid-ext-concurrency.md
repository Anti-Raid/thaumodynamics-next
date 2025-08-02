---
title: "@antiraid-ext/concurrency"
description: "API reference for @antiraid-ext/concurrency"
---

<div id="@antiraid-ext/concurrency"></div>

# @antiraid-ext/concurrency

<div id="Functions"></div>

# Functions

<div id="setTimeout"></div>

## setTimeout

Implementation of setTimeout for the AntiRaid runtime.



Functions like JavaScript's setTimeout.



<details>
<summary>Function Signature</summary>

```luau
--- Implementation of setTimeout for the AntiRaid runtime.
---
--- Functions like JavaScript's setTimeout.
---
--- @param callback The function to call after the delay.
--- @param delay The delay in milliseconds. If a string is passed, it will be converted to a number.
--- @param ... Additional arguments to pass to the callback function.
--- @return tid The timeout ID, which can be used to cancel the timeout with \`clearTimeout\`.
function setTimeout(callback: (any) -> (), delay: number?, ...) -> number end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="callback"></div>

### callback

The function to call after the delay.

<details>
<summary>Function Signature</summary>

```luau
callback: (any) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="arg1"></div>

#### arg1

[any](#any)

<div id="delay"></div>

### delay

The delay in milliseconds. If a string is passed, it will be converted to a number.

*This field is optional and may not be specified*

[number](#number)?

<div id="..."></div>

### ...

Additional arguments to pass to the callback function.

No type specified!!!

<div id="Returns"></div>

## Returns

<div id="tid"></div>

### tid

The timeout ID, which can be used to cancel the timeout with \`clearTimeout\`.

[number](#number)<div id="clearTimeout"></div>

## clearTimeout

Implementation of clearTimeout for the AntiRaid runtime.



Functions like JavaScript's clearTimeout.



<details>
<summary>Function Signature</summary>

```luau
--- Implementation of clearTimeout for the AntiRaid runtime.
---
--- Functions like JavaScript's clearTimeout.
---
--- @param tid The timeout ID to cancel.
--- @return nil
function clearTimeout(tid: number) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="tid"></div>

### tid

The timeout ID to cancel.

[number](#number)

<div id="setInterval"></div>

## setInterval

Implementation of setInterval for the AntiRaid runtime.



Functions like JavaScript's setInterval.



<details>
<summary>Function Signature</summary>

```luau
--- Implementation of setInterval for the AntiRaid runtime.
---
--- Functions like JavaScript's setInterval.
---
--- @param callback The function to call at each interval.
--- @param delay The delay in milliseconds. If a string is passed, it will be converted to a number.
--- @param ... Additional arguments to pass to the callback function.
--- @return tid The interval ID, which can be used to cancel the interval with \`clear
function setInterval(callback: (any) -> (), delay: number?, ...) -> number end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="callback"></div>

### callback

The function to call at each interval.

<details>
<summary>Function Signature</summary>

```luau
callback: (any) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="arg1"></div>

#### arg1

[any](#any)

<div id="delay"></div>

### delay

The delay in milliseconds. If a string is passed, it will be converted to a number.

*This field is optional and may not be specified*

[number](#number)?

<div id="..."></div>

### ...

Additional arguments to pass to the callback function.

No type specified!!!

<div id="Returns"></div>

## Returns

<div id="tid"></div>

### tid

The interval ID, which can be used to cancel the interval with \`clear

[number](#number)<div id="clearInterval"></div>

## clearInterval

Implementation of clearInterval for the AntiRaid runtime.



Functions like JavaScript's clearInterval.



<details>
<summary>Function Signature</summary>

```luau
--- Implementation of clearInterval for the AntiRaid runtime.
---
--- Functions like JavaScript's clearInterval.
---
--- @param tid The interval ID to cancel.
--- @return nil
function clearInterval(tid: number) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="tid"></div>

### tid

The interval ID to cancel.

[number](#number)

