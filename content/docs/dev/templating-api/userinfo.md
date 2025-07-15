---
title: "@antiraid/userinfo"
description: "API documentation for the @antiraid/userinfo module, including types and user information operations."
---

# @antiraid/userinfo

## Types

## UserInfoExecutor

<details>
<summary>Raw Type</summary>

```luau
type UserInfoExecutor = {
	--- @function () -> Promise<string>
	--- Gets information about a user
	get: (self: UserInfoExecutor, user_id: string) -> Promise.LuaPromise<string?>,

	--- @function () -> Promise<void>
	--- Sets information about a user
	set: (self: UserInfoExecutor, user_id: string, info: string) -> Promise.LuaPromise<Record<never, never>>,

	--- @function () -> Promise<void>
	--- Deletes information about a user
	delete: (self: UserInfoExecutor, user_id: string) -> Promise.LuaPromise<Record<never, never>>
}
```

</details>

### get

Gets information about a user

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Promise<string>
--- Gets information about a user
get: (self: UserInfoExecutor, user_id: string) -> Promise.LuaPromise<string?>
```

</details>

#### Arguments

##### user_id

`string`

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of `string?`

### set

Sets information about a user

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Promise<void>
--- Sets information about a user
set: (self: UserInfoExecutor, user_id: string, info: string) -> Promise.LuaPromise<Record<never, never>>
```

</details>

#### Arguments

##### user_id

`string`

##### info

`string`

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of `Record`

### delete

Deletes information about a user

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Promise<void>
--- Deletes information about a user
delete: (self: UserInfoExecutor, user_id: string) -> Promise.LuaPromise<Record<never, never>>
```

</details>

#### Arguments

##### user_id

`string`

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of `Record`

# Functions

## new

Creates a new UserInfoExecutor

<details>
<summary>Function Signature</summary>

```luau
--- Creates a new UserInfoExecutor
function new(token: Primitives.TemplateContext, scope: ExecutorScope.ExecutorScope?) -> UserInfoExecutor end
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

[`UserInfoExecutor`](#userinfoexecutor)
