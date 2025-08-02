---
title: "@antiraid-ext/events/discord/EntitlementUpdate"
description: "API reference for @antiraid-ext/events/discord/EntitlementUpdate"
---

<div id="@antiraid-ext/events/discord/EntitlementUpdate"></div>

# @antiraid-ext/events/discord/EntitlementUpdate

<div id="Functions"></div>

# Functions

<div id="onEntitlementUpdate"></div>

## onEntitlementUpdate

EntitlementUpdate



Provides data abut the updated subscription. If the entitlement is renewed, the \`\`entitlement.ends_at\`\` field will have changed.

<details>
<summary>Function Signature</summary>

```luau
--- EntitlementUpdate
---
--- Provides data abut the updated subscription. If the entitlement is renewed, the \`\`entitlement.ends_at\`\` field will have changed.
function onEntitlementUpdate(event: Primitives.Event, callback: (entitlement: discord.EntitlementObject) -> ()) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="event"></div>

### event

[Primitives](#module.Primitives).[Event](#Event)



<div id="callback"></div>

### callback

<details>
<summary>Function Signature</summary>

```luau
callback: (entitlement: discord.EntitlementObject) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="entitlement"></div>

#### entitlement

[discord](#module.discord).[EntitlementObject](#EntitlementObject)



