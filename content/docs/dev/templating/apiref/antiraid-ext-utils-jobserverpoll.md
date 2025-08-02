---
title: "@antiraid-ext/utils/jobserverpoll"
description: "API reference for @antiraid-ext/utils/jobserverpoll"
---

<div id="@antiraid-ext/utils/jobserverpoll"></div>

# @antiraid-ext/utils/jobserverpoll

<div id="Types"></div>

## Types

<div id="PollOptions"></div>

## PollOptions

<details>
<summary>Raw Type</summary>

```luau
type PollOptions = {
	jobId: string,

	timeout_nostatuschange: number?,

	callback: (dsP.Job) -> nil,

	poll_interval: number
}
```

</details>

<TypeTable
	type={{
		"callback": {
			type: "([dsP](#module.dsP).[Job](#Job)) -> [nil](#nil)",
			description: "",
			required: true
		},
		"jobId": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"timeout_nostatuschange": {
			type: "[number](#number)?",
			description: "",
			required: false
		},
		"poll_interval": {
			type: "[number](#number)",
			description: "",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="pollJobserverTillComplete"></div>

## pollJobserverTillComplete

<details>
<summary>Function Signature</summary>

```luau
function pollJobserverTillComplete(ctx: Primitives.TemplateContext, opts: PollOptions) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="opts"></div>

### opts

[PollOptions](#PollOptions)

<div id="getIconOfState"></div>

## getIconOfState

<details>
<summary>Function Signature</summary>

```luau
function getIconOfState(state: string) -> string end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="state"></div>

### state

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[string](#string)<div id="_formatValue"></div>

## _formatValue

<details>
<summary>Function Signature</summary>

```luau
function _formatValue(value: any) -> string end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="value"></div>

### value

[any](#any)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[string](#string)<div id="jobToEmbed"></div>

## jobToEmbed

<details>
<summary>Function Signature</summary>

```luau
function jobToEmbed(ctx: Primitives.TemplateContext, job: dsP.Job, showStatuses: boolean?, showDownloadLink: boolean?) -> (apitypes.EmbedObject, {apitypes.ComponentObjects}) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="job"></div>

### job

[dsP](#module.dsP).[Job](#Job)



<div id="showStatuses"></div>

### showStatuses

*This field is optional and may not be specified*

[boolean](#boolean)?

<div id="showDownloadLink"></div>

### showDownloadLink

*This field is optional and may not be specified*

[boolean](#boolean)?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[apitypes](#module.apitypes).[EmbedObject](#EmbedObject)



<div id="ret2"></div>

### ret2

\{[apitypes](#module.apitypes).[ComponentObjects](#ComponentObjects)\}

