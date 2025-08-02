---
title: "@discord-types/interaction"
description: "API reference for @discord-types/interaction"
---

<div id="@discord-types/interaction"></div>

# @discord-types/interaction

<div id="Types"></div>

## Types

<div id="InteractionType"></div>

## InteractionType

<details>
<summary>Raw Type</summary>

```luau
type InteractionType = "Ping" | "ApplicationCommand" | "MessageComponent" | "ApplicationCommandAutocomplete" | "ModalSubmit"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Ping"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"ApplicationCommand"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"MessageComponent"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"ApplicationCommandAutocomplete"
```

</details>

<details>
<summary>Variant 5</summary>

```luau
"ModalSubmit"
```

</details>

<div id="InteractionCallbackType"></div>

## InteractionCallbackType

<details>
<summary>Raw Type</summary>

```luau
type InteractionCallbackType = "Pong" | "ChannelMessageWithSource" | "DeferredChannelMessageWithSource" | "DeferredUpdateMessage" | "UpdateMessage" | "ApplicationCommandAutocompleteResult" | "Modal" | "PremiumRequired" | "LaunchActivity"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Pong"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"ChannelMessageWithSource"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"DeferredChannelMessageWithSource"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"DeferredUpdateMessage"
```

</details>

<details>
<summary>Variant 5</summary>

```luau
"UpdateMessage"
```

</details>

<details>
<summary>Variant 6</summary>

```luau
"ApplicationCommandAutocompleteResult"
```

</details>

<details>
<summary>Variant 7</summary>

```luau
"Modal"
```

</details>

<details>
<summary>Variant 8</summary>

```luau
"PremiumRequired"
```

</details>

<details>
<summary>Variant 9</summary>

```luau
"LaunchActivity"
```

</details>

<div id="ComponentTypes"></div>

## ComponentTypes

<details>
<summary>Raw Type</summary>

```luau
type ComponentTypes = "ActionRow" | "Button" | "StringSelect" | "TextInput" | "UserSelect" | "RoleSelect" | "MentionableSelect" | "ChannelSelect"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"ActionRow"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"Button"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"StringSelect"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"TextInput"
```

</details>

<details>
<summary>Variant 5</summary>

```luau
"UserSelect"
```

</details>

<details>
<summary>Variant 6</summary>

```luau
"RoleSelect"
```

</details>

<details>
<summary>Variant 7</summary>

```luau
"MentionableSelect"
```

</details>

<details>
<summary>Variant 8</summary>

```luau
"ChannelSelect"
```

</details>

<div id="ApplicationCommandOptionType"></div>

## ApplicationCommandOptionType

<details>
<summary>Raw Type</summary>

```luau
type ApplicationCommandOptionType = "SubCommand" | "SubCommandGroup" | "String" | "Integer" | "Boolean" | "User" | "Channel" | "Role" | "Mentionable" | "Number" | "Attachment"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"SubCommand"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"SubCommandGroup"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"String"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"Integer"
```

</details>

<details>
<summary>Variant 5</summary>

```luau
"Boolean"
```

</details>

<details>
<summary>Variant 6</summary>

```luau
"User"
```

</details>

<details>
<summary>Variant 7</summary>

```luau
"Channel"
```

</details>

<details>
<summary>Variant 8</summary>

```luau
"Role"
```

</details>

<details>
<summary>Variant 9</summary>

```luau
"Mentionable"
```

</details>

<details>
<summary>Variant 10</summary>

```luau
"Number"
```

</details>

<details>
<summary>Variant 11</summary>

```luau
"Attachment"
```

</details>

<div id="ApplicationCommandType"></div>

## ApplicationCommandType

<details>
<summary>Raw Type</summary>

```luau
type ApplicationCommandType = "ChatInput" | "User" | "Message" | "PrimaryEntryPoiant"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"ChatInput"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"User"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"Message"
```

</details>

<details>
<summary>Variant 4</summary>

```luau
"PrimaryEntryPoiant"
```

</details>

<div id="InteractionContextType"></div>

## InteractionContextType

<details>
<summary>Raw Type</summary>

```luau
type InteractionContextType = "Guild" | "BotDm" | "PrivateChannel"
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

```luau
"Guild"
```

</details>

<details>
<summary>Variant 2</summary>

```luau
"BotDm"
```

</details>

<details>
<summary>Variant 3</summary>

```luau
"PrivateChannel"
```

</details>

