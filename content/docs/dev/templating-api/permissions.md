---
title: "@antiraid/permissions"
description: "API documentation for the @antiraid/permissions module, including types and permission operations."
---

# @antiraid/permissions

## Types

## PermissionsExecutor

<details>
<summary>Raw Type</summary>

```luau
type PermissionsExecutor = {
	--- @function () -> Promise<boolean>
	--- Checks if the user has the specified permission
	has: (self: PermissionsExecutor, permission: string) -> Promise.LuaPromise<boolean>,

	--- @function () -> Promise<void>
	--- Grants the specified permission to the user
	grant: (self: PermissionsExecutor, permission: string) -> Promise.LuaPromise<Record<never, never>>,

	--- @function () -> Promise<void>
	--- Revokes the specified permission from the user
	revoke: (self: PermissionsExecutor, permission: string) -> Promise.LuaPromise<Record<never, never>>
}
```

</details>

### has

Checks if the user has the specified permission

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Promise<boolean>
--- Checks if the user has the specified permission
has: (self: PermissionsExecutor, permission: string) -> Promise.LuaPromise<boolean>
```

</details>

#### Arguments

##### permission

`string`

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of `boolean`

### grant

Grants the specified permission to the user

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Promise<void>
--- Grants the specified permission to the user
grant: (self: PermissionsExecutor, permission: string) -> Promise.LuaPromise<Record<never, never>>
```

</details>

#### Arguments

##### permission

`string`

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of `Record`

### revoke

Revokes the specified permission from the user

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Promise<void>
--- Revokes the specified permission from the user
revoke: (self: PermissionsExecutor, permission: string) -> Promise.LuaPromise<Record<never, never>>
```

</details>

#### Arguments

##### permission

`string`

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of `Record`

# Functions

## new

Creates a new PermissionsExecutor

<details>
<summary>Function Signature</summary>

```luau
--- Creates a new PermissionsExecutor
function new(token: Primitives.TemplateContext, scope: ExecutorScope.ExecutorScope?) -> PermissionsExecutor end
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

[`PermissionsExecutor`](#permissionsexecutor)
