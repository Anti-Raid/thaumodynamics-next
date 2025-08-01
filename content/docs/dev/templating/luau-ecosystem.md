---
title: "Luau Ecosystem Integration Notes"
description: "Overview of Luau libraries and their integration in AntiRaid's templating environment."
---

# Luau Ecosystem Integration Notes

At AntiRaid, we believe that bot developers should be able to access the best tools available to them. To this end, we have integrated some popular Luau libraries into our templating environment to provide a more powerful and flexible experience while taking into account security and stability of the bot. Below, we outline the libraries that are currently available for use in your Lua templates:

## Lune

AntiRaid exposes some parts of Lune based on sandboxing constraints. See the below list for the available libraries available from Lune:

- [**@lune/datetime**](https://lune-org.github.io/docs/api-reference/datetime)
- [**@lune/regex**](https://lune-org.github.io/docs/api-reference/regex)
- [**@lune/serde**](https://lune-org.github.io/docs/api-reference/serde)

Note that ``@lune/roblox`` is not currently available due to how large of an API it is. This may change in the future however.

## Legal Disclaimer

AntiRaid is not affiliated with any of the libraries mentioned above. We do not claim ownership of these libraries or their trademarks whatsoever, nor do we provide any guarantees or warranties regarding their functionality. AntiRaid absolves all liability for any damages or losses incurred through the use of these libraries, both to the libraries owner and to AntiRaid itself.
