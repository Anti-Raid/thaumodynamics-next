---
title: "@antiraid/luau"
description: "API documentation for the @antiraid/luau module, including types and Luau operations."
---

# @antiraid/luau

## Types

## LuauExecutor

<details>
<summary>Raw Type</summary>

```luau
type LuauExecutor = {
	--- @function () -> Promise<void>
	--- Executes Luau code
	execute: (self: LuauExecutor, code: string) -> Promise.LuaPromise<Record<never, never>>
}
```

</details>

### execute

Executes Luau code

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Promise<void>
--- Executes Luau code
execute: (self: LuauExecutor, code: string) -> Promise.LuaPromise<Record<never, never>>
```

</details>

#### Arguments

##### code

`string`

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of `Record`

# Functions

## new

Creates a new LuauExecutor

<details>
<summary>Function Signature</summary>

```luau
--- Creates a new LuauExecutor
function new(token: Primitives.TemplateContext, scope: ExecutorScope.ExecutorScope?) -> LuauExecutor end
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

[`LuauExecutor`](#luauexecutor)
