---
title: "@discord-types/bitflags/systemchannel"
description: "API reference for @discord-types/bitflags/systemchannel"
---

<div id="@discord-types/bitflags/systemchannel"></div>

# @discord-types/bitflags/systemchannel

<div id="Types"></div>

## Types

<div id="SystemChannelBitflag"></div>

## SystemChannelBitflag

<details>
<summary>Raw Type</summary>

```luau
type SystemChannelBitflag = SystemChannelBitflag.Prototype, & {
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

<div id="SystemChannelBitflag.Prototype.suppressJoinNotifications"></div>

## SystemChannelBitflag.Prototype.suppressJoinNotifications

\[\[
	Returns if the system channel has the suppress join notifications bitflag set.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Returns if the system channel has the suppress join notifications bitflag set.
]]
function SystemChannelBitflag.Prototype.suppressJoinNotifications(self: SystemChannelBitflag) end
```

</details>

<div id="SystemChannelBitflag.Prototype.suppressPremiumSubscriptions"></div>

## SystemChannelBitflag.Prototype.suppressPremiumSubscriptions

\[\[
	Returns if the system channel has the suppress premium subscriptions bitflag set.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Returns if the system channel has the suppress premium subscriptions bitflag set.
]]
function SystemChannelBitflag.Prototype.suppressPremiumSubscriptions(self: SystemChannelBitflag) end
```

</details>

<div id="SystemChannelBitflag.Prototype.suppressGuildReminderNotifications"></div>

## SystemChannelBitflag.Prototype.suppressGuildReminderNotifications

\[\[
	Returns if the system channel has the suppress guild reminder notifications bitflag set.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Returns if the system channel has the suppress guild reminder notifications bitflag set.
]]
function SystemChannelBitflag.Prototype.suppressGuildReminderNotifications(self: SystemChannelBitflag) end
```

</details>

<div id="SystemChannelBitflag.Prototype.suppressJoinNotificationReplies"></div>

## SystemChannelBitflag.Prototype.suppressJoinNotificationReplies

\[\[
	Returns if the system channel has the suppress join notification replies bitflag set.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Returns if the system channel has the suppress join notification replies bitflag set.
]]
function SystemChannelBitflag.Prototype.suppressJoinNotificationReplies(self: SystemChannelBitflag) end
```

</details>

<div id="SystemChannelBitflag.Prototype.suppressRoleSubscriptionPurchaseNotifications"></div>

## SystemChannelBitflag.Prototype.suppressRoleSubscriptionPurchaseNotifications

\[\[
	Returns if the system channel has the suppress role subscriptions purchase notifications bitflag set.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Returns if the system channel has the suppress role subscriptions purchase notifications bitflag set.
]]
function SystemChannelBitflag.Prototype.suppressRoleSubscriptionPurchaseNotifications(self: SystemChannelBitflag) end
```

</details>

<div id="SystemChannelBitflag.Prototype.suppressRoleSubscriptionPurchaseNotificationReplies"></div>

## SystemChannelBitflag.Prototype.suppressRoleSubscriptionPurchaseNotificationReplies

\[\[
	Returns if the system channel has the suppress role subscriptions purchase notification replies bitflag set.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Returns if the system channel has the suppress role subscriptions purchase notification replies bitflag set.
]]
function SystemChannelBitflag.Prototype.suppressRoleSubscriptionPurchaseNotificationReplies(self: SystemChannelBitflag) end
```

</details>

<div id="SystemChannelBitflag.Interface.new"></div>

## SystemChannelBitflag.Interface.new

<details>
<summary>Function Signature</summary>

```luau
function SystemChannelBitflag.Interface.new(flag: number) -> SystemChannelBitflag end
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

[SystemChannelBitflag](#SystemChannelBitflag)