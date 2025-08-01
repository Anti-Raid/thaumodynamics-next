---
title: "Events"
description: "A basic tutorial on handling events."
---

# Events

AntiRaid makes use of events for all communication between scripts. Scripts recieve events from either Discord or AntiRaid itself. This document provides a basic overview of how to handle events in AntiRaid.

## Event Registration

To register for events, you can simply provide the list of events in the Events section of the script in the website's settings UI. If you are using ``push.py`` for CLI based development, you can simply change the ``EVENTS`` variable in the ``push.py`` file to include the events you want to register for.

Syntax wise, there are two main syntaxes:

- ``{event_name}``: This will register for the event with the name ``event_name``. This is the most common syntax.
- ``{event_name}[{scope}]``: This will register for the event with the name ``event_name`` scoped to a scope called  ``scope``. This is useful for key-value related events such as ``KeyExpiry[scope]`` and ``KeyResume[scope]``. For these, the related event will only be sent to your script if the key is in the specified ``scope``. For example, a ``KeyExpiry[my_scope]`` event will only be sent to your script if the key that expired is in the ``my_scope`` scope.

<Callout title="Note" type="info">
  Event scoping is an *optional* feature to help improve the performance of your script. If you do not specify a scope to an event which supports scoping (using ``KeyExpiry`` instead of ``KeyExpiry[scope]``), the event will be sent to your script regardless of the scope of the key. This can be useful for audit-log related scripts.
</Callout>

## Base Format

All events are dispatched as a readonly/"frozen" Luau table with the following fields:

| Field         | Type                  | Description          |
| ------------- | --------------------- | -------------------- |
| `base_name`   | either `AntiRaid` or `Discord` | The base name of the event. This is either `AntiRaid` for AntiRaid events or `Discord` for Discord events. |
| `name`        | `string`              | The name of the event. This is the name of the event being dispatched. For example, `KeyExpiry` or `MESSAGE_CREATE`. |
| `data`        | `any`                 | The data associated with the event (also called the 'fields' of the event).. See the below sections for more information on the data associated with each event. |

## AntiRaid Events

AntiRaid (as of now) has 4 events that are dispatched to scripts:

### KeyExpiry

When a key in the key value store expires, a `KeyExpiry` event is dispatched to all scripts that have registered for the `KeyExpiry` event. The event contains the following fields:

| Field         | Type                  | Description          |
| ------------- | --------------------- | -------------------- |
| `id`          | `string`              | The unique ID of the key that expired |
| `key`         | `string`              | The name of the key that expired |
| `scopes`      | `{string}`            | The scopes the key belongs to |

<Callout title="Scoping Support" type="info">
  This event supports scoping. If you registered for this event using ``KeyExpiry[scope]``, the event will only be sent to your script if the key that expired is in the specified scope.
</Callout>

### KeyResume

If a key has the resume flag set to `true` (this can be done using the `set` call's resume parameter), then any restart of AntiRaid's scripting worker process or reloading of the server's Luau VM etc. will cause a `KeyResume` event to be dispatched to all scripts that have registered for the `KeyResume` event. The event contains the following fields:

| Field         | Type                  | Description          |
| ------------- | --------------------- | -------------------- |
| `id`          | `string`              | The unique ID of the key that triggered a resume |
| `key`         | `string`              | The name of the key that triggered a resume |
| `scopes`      | `{string}`            | The scopes the key belongs to |

<Callout title="Scoping Support" type="info">
  This event supports scoping. If you registered for this event using ``KeyResume[scope]``, the event will only be sent to your script if the key that triggered a resume is in the specified scope.
</Callout>

### GetSettings

If a user tries to open the dashboard or otherwise attempts to fetch the settings of a server, a ``GetSettings`` event is dispatched to all scripts that have registered for the `GetSettings` event. This can be useful for scripts that want to provide different dashboard options based on the user who is requesting. The event contains the following fields:

| Field         | Type                  | Description          |
| ------------- | --------------------- | -------------------- |
| `author`      | `string`              | The user ID of the user who is retrieving the settings list |

The script must then return a list of ``Settings`` objects.

<Callout title="No Scoping Support" type="warning">
  This event does *not* support scoping. It is always sent to all scripts that have registered for the `GetSettings` event. In particular, using the scoped event syntax for this event will not work and will be ignored by AntiRaid.
</Callout>

<Callout title="Return Required" type="info">
  This event requires the script to return a list of ``Settings`` objects. If the script does not return a list of ``Settings`` objects, AntiRaid may treat it as an error.
</Callout>

### ExecuteSetting

When a user tries to execute a setting (trying to view the setting on the dashboard or trying to create/update a setting field etc.), an ``ExecuteSetting`` event is dispatched to all scripts that have registered for the `ExecuteSetting` event. The event contains the following fields:

| Field         | Type                  | Description          |
| ------------- | --------------------- | -------------------- |
| `id`          | `string`              | The ID of the setting being executed |
| `author`      | `string`              | The user ID of the user who is executing the setting |
| `op`          | `string`              | The operation being executed (e.g., `View`, `Create`, `Update`, `Reorder` etc.) |
| `fields`        | `any`                 | The data associated with the setting being executed. |

What exactly you return here depends on the operation being executed:

#### View Operation

If the operation is `View`, you should return a list where each object in the list contains the fields and the fields value for every column listed in your setting's schema. This will then be populated/displayed in the dashboard as a list of columns. For example, if your setting defines a string column named `name` and a number column named `age`, you should return a list of objects like this:

```luau
{
    { name = "John Doe", age = 30 },
    { name = "Jane Smith", age = 25 }
}
```

#### Other Operation

In all other cases, you should return a empty table after performing the desired operation. The AntiRaid website will then send a ``View`` operation afterwards to get the latest data for the setting.

<Callout title="Scoping Support" type="info">
  This event supports scoping. If you registered for this event using ``ExecuteSetting[setting_id]``, the event will only be sent to your script if the ID of the setting being executed matches the specified `setting_id`. This is useful for (most) scripts which likely only care about setting's they directly made/manage.
</Callout>

<Callout title="Return Required" type="info">
  This event requires the script to return based on the ``op`` key (see above for more information). If the script does not return the required data, AntiRaid may treat it as an error.
</Callout>

## Discord Events

AntiRaid also directly proxies Discord gateway events to scripts. This means that you can register for any Discord event and it'll be sent to your script. The event name will be the same as the Discord event name in ``SCREAMING_SNAKE_CASE`` format. The event data will be the same as the Discord event data (the ``d`` field in the Discord event). For example, if you register for the ``MESSAGE_CREATE`` event, the event data will be the same as the data in the ``MESSAGE_CREATE`` event from Discord.

For more information on the Discord events, see the [Discord Gateway documentation](https://discord.com/developers/docs/topics/gateway#events).

<Callout title="No Scoping Support" type="warning">
  Discord events do *not* support scoping. It is always sent to all scripts as long as the script has registered for the event. Note that AntiRaid will only proxy Discord events for the Discord server the script is running on and that using the scoped event syntax for Discord events will not work and will be ignored by AntiRaid.
</Callout>
