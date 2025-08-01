---
title: "Lua Templating"
description: "Introduction and overview of Lua templating in AntiRaid, including language choice, getting started, and limitations."
---

# Lua Templating

At AntiRaid, we prioritize flexibility and customization for our users. To this end, our bot supports advanced templating to allow for extensive personalization of embeds and messages. While many bots utilize proprietary languages or templating engines, we have chosen to leverage Lua—a renowned scripting language widely used in game development and other applications. This decision ensures that our users benefit from a powerful, well-documented, and versatile language, enhancing the capability and ease of customizing their AntiRaid experience.

Specifically, Anti Raid uses a variant of Lua called Luau. If you've ever used Roblox before, this is the same variant of Lua used there too (which is why Luau is also known as Roblox Lua in many places). You can check out the [Luau docs](https://luau-lang.org/) for more information on the language itself. Unlike PUC Lua (the reference implementation), Luau is both faster and offers robust sandboxing capabilities allowing AntiRaid to run scripts in as safe an environment as possible.

## Getting Started

Note that the remainder of these docs will cover AntiRaids Lua SDKs. To learn more about Lua itself, please checkout Lua's official tutorial for Lua 5.0 [here](https://www.lua.org/pil/1.html). Other resources for Lua exist (Lua is very popular after all), including [Roblox's tutorial](https://devforum.roblox.com/t/lua-scripting-starter-guide/394618#print-5) (ignore the Studio bits), [TutorialPoint](https://www.tutorialspoint.com/lua/lua_quick_guide.htm) and [Codecademy](https://www.codecademy.com/learn/learn-lua).

## Limitations

AntiRaid applies the following 3 global limits to all Lua templates:

```rust
pub const MAX_TEMPLATE_MEMORY_USAGE: usize = 1024 * 1024 * 20; // 20MB maximum memory
pub const MAX_VM_THREAD_STACK_SIZE: usize = 1024 * 1024 * 20; // 20MB maximum memory
pub const MAX_TEMPLATES_EXECUTION_TIME: std::time::Duration =
    std::time::Duration::from_secs(60 * 10); // 10 minute maximum execution time
pub const MAX_TEMPLATES_RETURN_WAIT_TIME: std::time::Duration = std::time::Duration::from_secs(60); // 60 seconds maximum execution time before return will be ignored.
```

Note that the above limits are designed to be generous and allow for complex templates to run/work while trying to limit abuse as far as possible. If we notice abuse, we may reduce the limits either for you or globally. For this reason, we will probably not increase the limits for individual servers without good reason.

## Some key notes

- Each guild is assigned a dedicated Lua(u) VM. This VM is used to execute Lua code that is used in the templates.
- A guilds Lua(u) VM will persist until marked as broken (either by explicitly requesting it, by exceeding memory limits, through internal errors or if required by our infrastructure). This means that templates can be run multiple times without needing to reinitialize the VM.
- While a guilds Lua(u) VM will internally have a read-only shared global table for the Luau standard library, AntiRaid provides a special global table that is isolated at the template/script level with a custom `__index` and `__metatable` set to proxy writes (similar to Roblox's setup). This means that builtins will remain read-only, but templates can still use ``_G`` to store/retrieve their own data globally.
- The standard `require` statement can be used to either import AntiRaid plugins or to import other Luau assets that belong to the template. AntiRaid internally uses standard Luau require-by-string semantics with full support for `init.luau` files for requires.
- Note that plugins are read-only/sandboxed and cannot be monkey-patched etc.
- All events are dispatched by making a Luau thread and then passing the event data (and template context) to the thread. This means that events are dispatched asynchronously (meaning things like the ``task`` library will work as expected in events). See the [Events](./events.md) documentation for more information on the events that are dispatched.

In general, all AntiRaid templates should start with the following:

```luau
local evt, ctx = ...
-- Do something
return output -- Optionally return something here
```

## Interop

Many features of Lua don't work so well when calling functions within the AntiRaid SDK. For example, both arrays and maps are expressed as tables in Lua. However, AntiRaid, being written in Rust, doesn't know this and hance needs some help to convert certain types for FFI. This is where the `@antiraid/interop` module comes in.

### Arrays

To pass arrays to modules within the AntiRaid SDK, you may need to set the metatable to `@antiraid/interop#array_metatable`. This will allow AntiRaid to convert the array to a Rust `Vec` internally.

```lua
local interop = require '@antiraid/interop'
setmetatable({}, interop.array_metatable)
```

<Callout title="Note" type="info">
  This should only be needed for empty tables. AntiRaid is usually good at determining whether a table is an array or not. Setting the array metatable on a table with a hash table part will strip out the non-array part of the table, so be careful when using this.
</Callout>

### Null

In some instances, interactions with AntiRaid may yield a special `null` lightuserdata value (a ``lightuserdata`` is a special lightweight ``userdata`` value managed by AntiRaid internally). This value is exposed under `@antiraid/interop#null` and can also be used template-side as desired:

```lua
local interop = require '@antiraid/interop'
local null = interop.null -- This is the null value
```

### Memory Usage

While not strictly useful for interop, it is often desirable to know the memory usage of a Lua template as AntiRaid will kill your template if it exceeds the memory limit. For this, you can use the `@antiraid/interop#memusage` function.

```lua
local interop = require '@antiraid/interop'
print(interop.memusage())
```

## Events

All Lua templates are invoked via events. As such, the first argument to the template is an `Event`. See the [Events](./events.md) documentation for more information on the events that are dispatched. The second argument will be the ``TemplateContext`` which is a userdata that provides access to the rest of the AntiRaid Luau API.

## Template Context

Note that unlike `Event`, `TemplateContext` is a _userdata_ (not a table). As such, they cannot be manually constructed in templates whatsoever. A `TemplateContext` is guaranteed to be valid while accessible in the VM.

The ``TemplateContext`` provides access to AntiRaid plugins such as the Discord plugin (`ctx.Discord`) and the key-value store plugin (`ctx.KV`). It also provides basic info about the bot itself (via ``ctx.current_user``), a global store table to share data across scripts (``ctx.store``), the server ID (``ctx.guild_id``) the script is running on, the server ID that owns the template on the shop if a shop template (``ctx.owner_guild_id``), the template's name (``ctx.template_name``), basic data about the template (``ctx.data``), the allowed capabilities the template has access to (``ctx.allowed_caps``) and a way to create a new ``TemplateContext`` with more strict limits/capabilities (``ctx:withlimits({capabilities = {"newcaps"}})``).

### Example

```lua
local args, ctx = ...
print(ctx)
```
