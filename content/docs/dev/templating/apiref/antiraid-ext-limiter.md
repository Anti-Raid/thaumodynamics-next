---
title: "@antiraid-ext/limiter"
description: "API reference for @antiraid-ext/limiter"
---

<div id="@antiraid-ext/limiter"></div>

# @antiraid-ext/limiter

<div id="Types"></div>

## Types

<div id="LockdownActionLimiter"></div>

## LockdownActionLimiter

<details>
<summary>Raw Type</summary>

```luau
type LockdownActionLimiter = {
	--- Attempts an action, if the limit is reached, it will sleep for a penalty time
	attempt: () -> ()
}
```

</details>

<TypeTable
	type={{
		"attempt": {
			type: "() -> ()",
			description: "Attempts an action, if the limit is reached, it will sleep for a penalty time",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="ActionLimiter"></div>

## ActionLimiter

Limits to N attempted actions per time period.



After said time period, the limiter will auto sleep the thread for PENALTY times the time period.



Because of this, the limiter is a 'slowdown' mechanism, not a 'rate' limiter.

<details>
<summary>Function Signature</summary>

```luau
--- Limits to N attempted actions per time period.
---
--- After said time period, the limiter will auto sleep the thread for PENALTY times the time period.
---
--- Because of this, the limiter is a 'slowdown' mechanism, not a 'rate' limiter.
function ActionLimiter(allowed: number, timePeriod: number, penalty_multiplier_val: number?, store_multiplier_val: number?) -> LockdownActionLimiter end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="allowed"></div>

### allowed

[number](#number)

<div id="timePeriod"></div>

### timePeriod

[number](#number)

<div id="penalty_multiplier_val"></div>

### penalty_multiplier_val

*This field is optional and may not be specified*

[number](#number)?

<div id="store_multiplier_val"></div>

### store_multiplier_val

*This field is optional and may not be specified*

[number](#number)?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[LockdownActionLimiter](#LockdownActionLimiter)