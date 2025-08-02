---
title: "Templating Architecture"
description: "Architecture and VM distribution strategies for AntiRaid's templating system."
---

# Templating Architecture

## My language vent

**For reference on my discord vents: https://discord.com/channels/763812938875535361/1040734156327501905/1267195190100361440**

Why is lua the only sane language for embedding

- V8 has big ffi problems with Rust. If you try spawning too many isolates, you have a 100% chance of aborting your process and this issue can only be resolved by performing unsafe void\* pointer casts (although I hear rustyscript has gotten through many of these (?))
- QuickJS is a bit too slow and not very well documented and maintained
- Rhai is good but it’s a custom language and it’s sandboxing abilities need unsafe code to fully work and heap memory limits require you to manually calculate the heap usage (which is hard on multi-tenant systems like AntiRaid)
- Tera has virtually no safety features and will gladly execute an infinite recursion that brings down the whole infrastructure
- For starlark/skylark, go to the point on rhai but (hopefully) without the unsafe bits

I can understand now why the game modding industry uses lua, it’s basically the only sane language for handling user input

Lua is legit the only sane scripting language on this entire list

In addition, Luau is used in Roblox games so it caters to one of Discord's target markets as well

## Distribution of VMs

A _VM distribution strategy_ defines how guild VMs should be distributed out. There are two strategies right now: thread per guild and threadpool. With thread per guild, each guild is given its own thread and with threadpool, a set of guilds share a thread. Thread per guild is considered legacy and internally uses thread pool itself now (it used to be its own strategy). A third strategy of process pooling is being considered for addition in the future but more work is needed in the sandwich daemon layer (and other layers) for process pooling to become a reality. When either strategy encounters a panic, a per thread panic hook is triggered/fired to clean up all current guild templatingrt handles so future dispatches to a guild start a fresh new guild vm on a different (non-panicking) thread.

The actual contents of a vm distribution strategy is simple, do any setup needed (to init guild state, the tokio runtime and the khronos runtime). Then run a loop listening on a request channel for `LuaVmAction` messages. When a action is recieved with its (optional) associated callback channel, simply call the `handle` method of `LuaVmAction` which will handle the execution layer. To simplify things, a `ThreadEntry` structure is provided which provides a generic abstract implementation that does all of this work in a way that can be used by any VM distribution strategy.

## VM Notes

Each lua vm is owned by a single struct called a KhronosRuntime (which is provided by the `khronos` runtime). It is considered a logic bug to attempt to clone the lua vm handle. Instead, a WeakLua (weak ref to lua vm handle) should be used with the resulting lua vm handle being held for as little time as possible in all uses.
