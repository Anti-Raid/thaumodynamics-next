---
title: "@antiraid/img_captcha"
description: "API documentation for the @antiraid/img_captcha module, including types and image captcha operations."
---

# @antiraid/img_captcha

## Types

## CaptchaOptions

Options for creating a captcha

<details>
<summary>Raw Type</summary>

```luau
--- Options for creating a captcha
type CaptchaOptions = {
	--- The text to use for the captcha
	text: string,

	--- The width of the captcha
	width: number,

	--- The height of the captcha
	height: number,

	--- The font size of the captcha
	font_size: number,

	--- The font family to use for the captcha
	font_family: string,

	--- The background color of the captcha
	background_color: string,

	--- The text color of the captcha
	text_color: string,

	--- The line color of the captcha
	line_color: string,

	--- The dot color of the captcha
	dot_color: string
}
```

</details>

### text

The text to use for the captcha

`string`

### width

The width of the captcha

`number`

### height

The height of the captcha

`number`

### font_size

The font size of the captcha

`number`

### font_family

The font family to use for the captcha

`string`

### background_color

The background color of the captcha

`string`

### text_color

The text color of the captcha

`string`

### line_color

The line color of the captcha

`string`

### dot_color

The dot color of the captcha

`string`

## CaptchaExecutor

<details>
<summary>Raw Type</summary>

```luau
type CaptchaExecutor = {
	--- @function () -> Promise<string>
	--- Creates a captcha with the specified options
	create: (self: CaptchaExecutor, options: CaptchaOptions) -> Promise.LuaPromise<string>
}
```

</details>

### create

Creates a captcha with the specified options

<details>
<summary>Function Signature</summary>

```luau
--- @function () -> Promise<string>
--- Creates a captcha with the specified options
create: (self: CaptchaExecutor, options: CaptchaOptions) -> Promise.LuaPromise<string>
```

</details>

#### Arguments

##### options

[`CaptchaOptions`](#captchaoptions)

#### Returns

[`Promise`](./promise.md).[`LuaPromise`](./promise.md#luapromise) of `string`

# Functions

## new

Creates a new CaptchaExecutor

<details>
<summary>Function Signature</summary>

```luau
--- Creates a new CaptchaExecutor
function new(token: Primitives.TemplateContext, scope: ExecutorScope.ExecutorScope?) -> CaptchaExecutor end
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

[`CaptchaExecutor`](#captchaexecutor)
