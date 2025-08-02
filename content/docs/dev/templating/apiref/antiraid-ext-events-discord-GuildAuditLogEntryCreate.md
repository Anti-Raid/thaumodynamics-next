---
title: "@antiraid-ext/events/discord/GuildAuditLogEntryCreate"
description: "API reference for @antiraid-ext/events/discord/GuildAuditLogEntryCreate"
---

<div id="@antiraid-ext/events/discord/GuildAuditLogEntryCreate"></div>

# @antiraid-ext/events/discord/GuildAuditLogEntryCreate

<div id="Functions"></div>

# Functions

<div id="onGuildAuditLogEntryCreate"></div>

## onGuildAuditLogEntryCreate

GuildAuditLogEntryCreate



Dispatched when a new audit log entry is created.



Provides said entry’s data and the id of the guild where it was created.

<details>
<summary>Function Signature</summary>

```luau
--- GuildAuditLogEntryCreate
---
--- Dispatched when a new audit log entry is created.
---
--- Provides said entry’s data and the id of the guild where it was created.
function onGuildAuditLogEntryCreate(event: Primitives.Event, callback: (entry: discord.AuditLogEntryObject) -> ()) end
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
callback: (entry: discord.AuditLogEntryObject) -> ()
```

</details>

<div id="Arguments"></div>

### Arguments

<div id="entry"></div>

#### entry

[discord](#module.discord).[AuditLogEntryObject](#AuditLogEntryObject)



