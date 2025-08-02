---
title: "@antiraid-ext/gcra"
description: "API reference for @antiraid-ext/gcra"
---

<div id="@antiraid-ext/gcra"></div>

# @antiraid-ext/gcra

<div id="Types"></div>

## Types

<div id="RateLimiter"></div>

## RateLimiter

Provides a simple ratelimiter using the GCRA algorithm

<details>
<summary>Raw Type</summary>

```luau
--- Provides a simple ratelimiter using the GCRA algorithm
type RateLimiter<BucketKey> = {
	--- Maximum number of actions allowed
	getCount: () -> number,

	--- Time period for the rate limit in seconds
	getPeriod: () -> number,

	--- Time interval between allowed actions in seconds
	--- This is calculated as period / count
	getEmissionInterval: () -> number,

	--- Buckets for different keys, where each key has a time after which the next action is allowed
	getBuckets: () -> {
		[BucketKey]: number
	},

	--- Attempt to perform an action
	--- @param key The key for which the action is being attempted
	--- @return boolean \`\`true\`\` if the action is allowed, \`\`false\`\` if it is denied (rate limited)
	attemptAction: (key: BucketKey) -> boolean
}
```

</details>

<TypeTable
	type={{
		"getCount": {
			type: "() -> [number](#number)",
			description: "Maximum number of actions allowed",
			required: true
		},
		"getPeriod": {
			type: "() -> [number](#number)",
			description: "Time period for the rate limit in seconds",
			required: true
		},
		"getEmissionInterval": {
			type: "() -> [number](#number)",
			description: "Time interval between allowed actions in secondsThis is calculated as period / count",
			required: true
		},
		"getBuckets": {
			type: "() -> \{[BucketKey]: [number](#number)\}",
			description: "Buckets for different keys, where each key has a time after which the next action is allowed",
			required: true
		},
		"attemptAction": {
			type: "(key: [BucketKey](#BucketKey)) -> [boolean](#boolean)",
			description: "Attempt to perform an action",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="RateLimiter"></div>

## RateLimiter

Return a new rate limiter instance

<details>
<summary>Function Signature</summary>

```luau
--- Return a new rate limiter instance
--- @param count Maximum number of actions allowed in the period
--- @param period Time period for the rate limit in seconds
--- @return RateLimiter<BucketKey> A new rate limiter instance
function RateLimiter<BucketKey>(count: number, period: number) -> RateLimiter<BucketKey> end
```

</details>

<div id="Generics"></div>

## Generics

<div id="BucketKey"></div>

### BucketKey

This generic is unconstrained and can be any type

<div id="Arguments"></div>

## Arguments

<div id="count"></div>

### count

Maximum number of actions allowed in the period

[number](#number)

<div id="period"></div>

### period

Time period for the rate limit in seconds

[number](#number)

<div id="Returns"></div>

## Returns

<div id="RateLimiter&lt;BucketKey&gt;"></div>

### RateLimiter&lt;BucketKey&gt;

A new rate limiter instance

[RateLimiter](#RateLimiter)&lt;[BucketKey](#BucketKey)&gt;