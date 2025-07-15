---
title: "@antiraid/lockdowns"
description: "API documentation for the @antiraid/lockdowns module, including types and lockdown operations."
---

# @antiraid/lockdowns

## Types

## LockdownExecutor

<details>
<summary>Raw Type</summary>

```luau
type LockdownExecutor = {
	--- @function () -> Promise<void>
	--- Locks down the server
	lockdown: (self: LockdownExecutor) -> Promise.LuaPromise<Record<never, never>>,

	--- @function () -> Promise<void>
	--- Unlocks the server
	unlock: (self: LockdownExecutor) -> Promise.LuaPromise<Record<never, never>>
}
```

</details>

### lockdown

Locks down the server

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Promise<void>
--- Locks down the server
lockdown: (self: LockdownExecutor) -> Promise.LuaPromise<Record<never, never>>
```

</details>

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of `Record`

### unlock

Unlocks the server

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Promise<void>
--- Unlocks the server
unlock: (self: LockdownExecutor) -> Promise.LuaPromise<Record<never, never>>
```

</details>

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of `Record`

# Functions

## new

Creates a new LockdownExecutor

<details>
<summary>Function Signature</summary>

```luau
--- Creates a new LockdownExecutor
function new(token: Primitives.TemplateContext, scope: ExecutorScope.ExecutorScope?) -> LockdownExecutor end
```

</details>

## Arguments

### token

[`Primitives`](./primitives.md).[`TemplateContext`](./primitives.md#templatecontext)

### scope

_This field is optional and may not be specified_

[`ExecutorScope`](./executorscope.md).[`ExecutorScope`](./executorscope.md#executorscope)

## Returns

### ret1

[`LockdownExecutor`](#lockdownexecutor)
