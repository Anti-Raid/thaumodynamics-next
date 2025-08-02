---
title: "@discord-types/bitflags/guildmember"
description: "API reference for @discord-types/bitflags/guildmember"
---

<div id="@discord-types/bitflags/guildmember"></div>

# @discord-types/bitflags/guildmember

<div id="Types"></div>

## Types

<div id="GuildMemberBitflag"></div>

## GuildMemberBitflag

<details>
<summary>Raw Type</summary>

```luau
type GuildMemberBitflag = GuildMemberBitflag.Prototype, & {
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

<div id="GuildMemberBitflag.Prototype.didRejoin"></div>

## GuildMemberBitflag.Prototype.didRejoin

\[\[
	Member has left and rejoined the guild	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Member has left and rejoined the guild	
]]
function GuildMemberBitflag.Prototype.didRejoin(self: GuildMemberBitflag) end
```

</details>

<div id="GuildMemberBitflag.Prototype.completedOnboarding"></div>

## GuildMemberBitflag.Prototype.completedOnboarding

\[\[
	Member has completed onboarding	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Member has completed onboarding	
]]
function GuildMemberBitflag.Prototype.completedOnboarding(self: GuildMemberBitflag) end
```

</details>

<div id="GuildMemberBitflag.Prototype.bypassesVerification"></div>

## GuildMemberBitflag.Prototype.bypassesVerification

\[\[
	Member is exempt from guild verification requirements	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Member is exempt from guild verification requirements	
]]
function GuildMemberBitflag.Prototype.bypassesVerification(self: GuildMemberBitflag) end
```

</details>

<div id="GuildMemberBitflag.Prototype.startedOnboarding"></div>

## GuildMemberBitflag.Prototype.startedOnboarding

\[\[
	Member has started onboarding	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Member has started onboarding	
]]
function GuildMemberBitflag.Prototype.startedOnboarding(self: GuildMemberBitflag) end
```

</details>

<div id="GuildMemberBitflag.Interface.new"></div>

## GuildMemberBitflag.Interface.new

<details>
<summary>Function Signature</summary>

```luau
function GuildMemberBitflag.Interface.new(flag: number) -> GuildMemberBitflag end
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

[GuildMemberBitflag](#GuildMemberBitflag)