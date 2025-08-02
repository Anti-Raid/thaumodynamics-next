---
title: "@antiraid-ext/events/discord/EntitlementDelete"
description: "API reference for @antiraid-ext/events/discord/EntitlementDelete"
---

<div id="@antiraid-ext/events/discord/EntitlementDelete"></div>

# @antiraid-ext/events/discord/EntitlementDelete

<div id="Functions"></div>

# Functions

<div id="onEntitlementDelete"></div>

## onEntitlementDelete

EntitlementDelete



Provides data about the subscription. Specifically, the \`\`entitlement.deleted\`\` field will be set.

<details>
<summary>Function Signature</summary>

```luau
--- EntitlementDelete
---
--- Provides data about the subscription. Specifically, the \`\`entitlement.deleted\`\` field will be set.
function onEntitlementDelete(event: Primitives.Event, callback: (entitlement: discord.EntitlementObject) -> ()) end
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



