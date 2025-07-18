---
title: "Anti-Raid Templating System"
description: "Overview and rationale for the AntiRaid templating system, supported languages, and developer notes."
---

# Anti-Raid Templating System

## Supported Languages

- Lua (luau / Roblox Lua) - Tier 1

Lua is the recommended language for templating

## WIP/Potential Languages

- JavaScript (see `lang_javascript_quickjs` and `lang_javascript_v8` for the current load experiments + integration experiments), potential but unlikely unless someone finds a solution
- WebAssembly (potential, not yet decided)

## Language Requirements

1. All languages must export the following modules/helpers to the extent required as per the templating documentation. (TODO: Improve this spec)

- Messages
- Permissions
- Captcha
- Actions
- Key Value API

2. All languages must provide a way to sandbox the execution of the code. This is a security requirement. In particular, timeouts and heap/stack/memory limits are required.
3. Callers must use the abstracted out function calls from `lib.rs`

## My language vent

**For reference on my discord vents: https://discord.com/channels/763812938875535361/1040734156327501905/1267195190100361440**

Why is lua the only sane language for embedding
V8 has big ffi problems with rust. If you try spawning too many isolates, you have a 100% chance of aborting your process and this issue can only be resolved by performing unsafe void\* pointer casts
Quickjs is a bit too slow and poorly documented
Rhai is good but it’s a custom language and it’s sandboxing abilities need unsafe code to fully work (and said unsafe code involves pointer arithmetic that is not thread safe) and heap memory limits require you to manually calculate the heap usage
Tera has virtually no safety features and will gladly execute an infinite recursion
For starlark/skylark, go to the point on rhai but hopefully without the unsafe bits
I can understand now why the game modding industry uses lua, it’s basically the only sane language for handling user input
Lua is legit the only sane scripting language on this entire list

[rhai is not only slower than lua, its sandboxing (i said it above here too in a vent i think) requires actual pointer arithmetic that isnt thread safe, its also a custom lang no one knows while lua is well known in the game community. Luau is used in Roblox games so it caters to Discords target market as well]

# AntiRaid Templating Developer Docs

This folder documents the AntiRaid templating system, which allows users to write custom logic for moderation, automation, and more using embedded scripting languages.

## Supported Languages

- **Lua (Luau/Roblox Lua):** Tier 1, recommended and fully supported

## WIP/Potential Languages

- JavaScript (QuickJS/V8 experiments)
- WebAssembly (potential)

## Files

- `1-intro.md`: Introduction to the templating system
- `2-example.md`: Example templates
- `3-luau-ecosystem.md`: Luau ecosystem notes
- `4-events.md`: Event system for templates
- `5-archnotes.md`: Architectural notes
- `README.md`: Overview and language rationale

## Key Points

- All languages must provide sandboxing, timeouts, and memory limits
- Lua is chosen for its safety, performance, and ecosystem
- See each file for details on API, events, and best practices

---

For API reference, see the [`../templating-api/`](../templating-api/) folder.
