---
title: "@antiraid/kv"
description: "API documentation for the @antiraid/kv module, including types and key-value operations."
---

# @antiraid/kv

## Types

## KvExecutor

<details>
<summary>Raw Type</summary>

```luau
type KvExecutor = {
	--- @function () -> Promise<string>
	--- Gets a value from the key-value store
	get: (self: KvExecutor, key: string) -> Promise.LuaPromise<string?>,

	--- @function () -> Promise<void>
	--- Sets a value in the key-value store
	set: (self: KvExecutor, key: string, value: string) -> Promise.LuaPromise<Record<never, never>>,

	--- @function () -> Promise<void>
	--- Deletes a value from the key-value store
	delete: (self: KvExecutor, key: string) -> Promise.LuaPromise<Record<never, never>>
}
```

</details>

### get

Gets a value from the key-value store

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Promise<string>
--- Gets a value from the key-value store
get: (self: KvExecutor, key: string) -> Promise.LuaPromise<string?>
```

</details>

#### Arguments

##### key

`string`

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of `string?`

### set

Sets a value in the key-value store

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Promise<void>
--- Sets a value in the key-value store
set: (self: KvExecutor, key: string, value: string) -> Promise.LuaPromise<Record<never, never>>
```

</details>

#### Arguments

##### key

`string`

##### value

`string`

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of `Record`

### delete

Deletes a value from the key-value store

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Promise<void>
--- Deletes a value from the key-value store
delete: (self: KvExecutor, key: string) -> Promise.LuaPromise<Record<never, never>>
```

</details>

#### Arguments

##### key

`string`

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of `Record`

# Functions

## new

Creates a new KvExecutor

<details>
<summary>Function Signature</summary>

```luau
--- Creates a new KvExecutor
function new(token: Primitives.TemplateContext, scope: ExecutorScope.ExecutorScope?) -> KvExecutor end
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

[`KvExecutor`](#kvexecutor)
