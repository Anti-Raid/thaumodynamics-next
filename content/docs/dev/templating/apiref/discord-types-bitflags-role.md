---
title: "@discord-types/bitflags/role"
description: "API reference for @discord-types/bitflags/role"
---

<div id="@discord-types/bitflags/role"></div>

# @discord-types/bitflags/role

<div id="Types"></div>

## Types

<div id="RoleBitflag"></div>

## RoleBitflag

<details>
<summary>Raw Type</summary>

```luau
type RoleBitflag = RoleBitflag.Prototype, & {
	flag: number
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"flag": {
			type: "[number](#number)",
			description: "",
			required: true
		},
	}}
/>
</details>

<div id="Functions"></div>

# Functions

<div id="RoleBitflag.Prototype.isInOnboardingPrompt"></div>

## RoleBitflag.Prototype.isInOnboardingPrompt

\[\[
	Checks if the role is in an onboarding prompt.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Checks if the role is in an onboarding prompt.
]]
function RoleBitflag.Prototype.isInOnboardingPrompt(self: RoleBitflag) end
```

</details>

<div id="RoleBitflag.Interface.new"></div>

## RoleBitflag.Interface.new

<details>
<summary>Function Signature</summary>

```luau
function RoleBitflag.Interface.new(flag: number) -> RoleBitflag end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="flag"></div>

### flag

[number](#number)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[RoleBitflag](#RoleBitflag)