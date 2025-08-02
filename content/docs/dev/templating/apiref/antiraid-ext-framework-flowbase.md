---
title: "@antiraid-ext/framework/flowbase"
description: "API reference for @antiraid-ext/framework/flowbase"
---

<div id="@antiraid-ext/framework/flowbase"></div>

# @antiraid-ext/framework/flowbase

<div id="Functions"></div>

# Functions

<div id="BaseFramework"></div>

## BaseFramework

FlowFramework provides a Framework interface with the following special features:



1. Commands can be registered directly as full name, e.g: "test foo bar" with the

commands being automatically compiled into a single command with subcommands.

2. Subcommands and subcommand groups are automatically handled, with the base command

being created if it does not exist.

3. getcommand returns either the full command (if registered as such) or the base command

if the command was registered as one monolithic unit.

<details>
<summary>Function Signature</summary>

```luau
--- FlowFramework provides a Framework interface with the following special features:
---
--- 1. Commands can be registered directly as full name, e.g: "test foo bar" with the
--- commands being automatically compiled into a single command with subcommands.
--- 2. Subcommands and subcommand groups are automatically handled, with the base command
--- being created if it does not exist.
--- 3. getcommand returns either the full command (if registered as such) or the base command
--- if the command was registered as one monolithic unit.
function BaseFramework(strict_val: boolean?) -> coretypes.BaseFramework end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="strict_val"></div>

### strict_val

*This field is optional and may not be specified*

[boolean](#boolean)?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[coretypes](#module.coretypes).[BaseFramework](#BaseFramework)