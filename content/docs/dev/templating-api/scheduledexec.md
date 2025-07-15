---
title: "@antiraid/scheduledexec"
description: "API documentation for the @antiraid/scheduledexec module, including types and scheduled execution operations."
---

# @antiraid/scheduledexec

## Types

## ScheduledExecution

Represents a scheduled execution

<details>
<summary>Raw Type</summary>

```luau
--- Represents a scheduled execution
type ScheduledExecution = {
	id: string,

	data: any,

	template_name: string,

	--- String representation of the time the event is scheduled to run at
	---
	--- This can be converted to an ``@antiraid/datetime`` using Timezone:fromString
	run_at: string
}
```

</details>

### id

`string`

### data

`any`

### template_name

`string`

### run_at

String representation of the time the event is scheduled to run at

This can be converted to an `@antiraid/datetime` using Timezone:fromString

`string`

## ScheduledExecutionList

<details>
<summary>Raw Type</summary>

```luau
type ScheduledExecutionList = {ScheduledExecution}
```

</details>

`{`[`ScheduledExecution`](#scheduledexecution)`}`

## CreateScheduledExecution

<details>
<summary>Raw Type</summary>

```luau
type CreateScheduledExecution = {
	id: string,

	data: any,

	--- String representation of the time the event is scheduled to run at
	---
	--- This can be converted from an ``@antiraid/datetime`` using tostring
	run_at: string
}
```

</details>

### id

`string`

### data

`any`

### run_at

String representation of the time the event is scheduled to run at

This can be converted from an `@antiraid/datetime` using tostring

`string`

## ScheduledExecExecutor

<details>
<summary>Raw Type</summary>

```luau
type ScheduledExecExecutor = {
	--- @function () -> Promise<void>
	--- Schedules a task to be executed at a later time
	schedule: (self: ScheduledExecExecutor, task: string, time: string) -> Promise.LuaPromise<Record<never, never>>,

	--- @function () -> Promise<void>
	--- Cancels a scheduled task
	cancel: (self: ScheduledExecExecutor, task: string) -> Promise.LuaPromise<Record<never, never>>
}
```

</details>

### schedule

Schedules a task to be executed at a later time

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Promise<void>
--- Schedules a task to be executed at a later time
schedule: (self: ScheduledExecExecutor, task: string, time: string) -> Promise.LuaPromise<Record<never, never>>
```

</details>

#### Arguments

##### task

`string`

##### time

`string`

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of `Record`

### cancel

Cancels a scheduled task

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Promise<void>
--- Cancels a scheduled task
cancel: (self: ScheduledExecExecutor, task: string) -> Promise.LuaPromise<Record<never, never>>
```

</details>

#### Arguments

##### task

`string`

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of `Record`

# Functions

## new

Creates a new ScheduledExecExecutor

<details>
<summary>Function Signature</summary>

```luau
--- Creates a new ScheduledExecExecutor
function new(token: Primitives.TemplateContext, scope: ExecutorScope.ExecutorScope?) -> ScheduledExecExecutor end
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

[`ScheduledExecExecutor`](#scheduledexecexecutor)
