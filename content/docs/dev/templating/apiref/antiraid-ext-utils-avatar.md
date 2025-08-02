---
title: "@antiraid-ext/utils/avatar"
description: "API reference for @antiraid-ext/utils/avatar"
---

<div id="@antiraid-ext/utils/avatar"></div>

# @antiraid-ext/utils/avatar

<div id="Functions"></div>

# Functions

<div id="avatarUrl"></div>

## avatarUrl

Returns the avatar URL for a user or returns a default avatar URL if the user does not have a custom avatar.



<details>
<summary>Function Signature</summary>

```luau
--- Returns the avatar URL for a user or returns a default avatar URL if the user does not have a custom avatar.
---
--- @param user apiTypes.UserObject
--- @return string The URL of the user's avatar.
function avatarUrl(user: apiTypes.UserObject) end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="user"></div>

### user

apiTypes.UserObject

[apiTypes](#module.apiTypes).[UserObject](#UserObject)



<div id="guildIconUrl"></div>

## guildIconUrl

Returns the guild icon URL for a given guild object or a default avatar URL if the guild does not have an icon.



<details>
<summary>Function Signature</summary>

```luau
--- Returns the guild icon URL for a given guild object or a default avatar URL if the guild does not have an icon.
---
--- @param guild apiTypes.GuildObject
--- @return string The URL of the guild's
function guildIconUrl(guild: apiTypes.GuildObject) -> string end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="guild"></div>

### guild

apiTypes.GuildObject

[apiTypes](#module.apiTypes).[GuildObject](#GuildObject)



<div id="Returns"></div>

## Returns

<div id="string"></div>

### string

The URL of the guild's

[string](#string)