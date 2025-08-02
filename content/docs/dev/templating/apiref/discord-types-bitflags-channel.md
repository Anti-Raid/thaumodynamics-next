---
title: "@discord-types/bitflags/channel"
description: "API reference for @discord-types/bitflags/channel"
---

<div id="@discord-types/bitflags/channel"></div>

# @discord-types/bitflags/channel

<div id="Types"></div>

## Types

<div id="ChannelBitflag"></div>

## ChannelBitflag

<details>
<summary>Raw Type</summary>

```luau
type ChannelBitflag = ChannelBitflag.Prototype, & {
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

<div id="ChannelBitflag.Prototype.isPinned"></div>

## ChannelBitflag.Prototype.isPinned

\[\[
	if this thread is pinned to the top of its parent GUILD_FORUM or GUILD_MEDIA channel
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	if this thread is pinned to the top of its parent GUILD_FORUM or GUILD_MEDIA channel
]]
function ChannelBitflag.Prototype.isPinned(self: ChannelBitflag) end
```

</details>

<div id="ChannelBitflag.Prototype.requiresTag"></div>

## ChannelBitflag.Prototype.requiresTag

\[\[
	whether a tag is required to be specified when creating a thread in a
	GUILD_FORUM or a GUILD_MEDIA channel. Tags are specified in the applied_tags field.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	whether a tag is required to be specified when creating a thread in a
	GUILD_FORUM or a GUILD_MEDIA channel. Tags are specified in the applied_tags field.
]]
function ChannelBitflag.Prototype.requiresTag(self: ChannelBitflag) end
```

</details>

<div id="ChannelBitflag.Prototype.hideMediaDownloadOptions"></div>

## ChannelBitflag.Prototype.hideMediaDownloadOptions

\[\[
	When set hides the embedded media download options. Available only for media channels
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	When set hides the embedded media download options. Available only for media channels
]]
function ChannelBitflag.Prototype.hideMediaDownloadOptions(self: ChannelBitflag) end
```

</details>

<div id="ChannelBitflag.Interface.new"></div>

## ChannelBitflag.Interface.new

<details>
<summary>Function Signature</summary>

```luau
function ChannelBitflag.Interface.new(flag: number) -> ChannelBitflag end
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

[ChannelBitflag](#ChannelBitflag)