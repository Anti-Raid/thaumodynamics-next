---
title: "@discord-types/bitflags/attachment"
description: "API reference for @discord-types/bitflags/attachment"
---

<div id="@discord-types/bitflags/attachment"></div>

# @discord-types/bitflags/attachment

<div id="Types"></div>

## Types

<div id="AttachmentBitflag"></div>

## AttachmentBitflag

<details>
<summary>Raw Type</summary>

```luau
type AttachmentBitflag = AttachmentBitflag.Prototype, & {
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

<div id="AttachmentBitflag.Prototype.isRemix"></div>

## AttachmentBitflag.Prototype.isRemix

\[\[
	this attachment has been edited using the remix feature on mobile

\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	this attachment has been edited using the remix feature on mobile

]]
function AttachmentBitflag.Prototype.isRemix(self: AttachmentBitflag) end
```

</details>

<div id="AttachmentBitflag.Interface.new"></div>

## AttachmentBitflag.Interface.new

<details>
<summary>Function Signature</summary>

```luau
function AttachmentBitflag.Interface.new(flag: number) -> AttachmentBitflag end
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

[AttachmentBitflag](#AttachmentBitflag)