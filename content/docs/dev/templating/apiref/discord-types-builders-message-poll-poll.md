---
title: "@discord-types/builders/message/poll/poll"
description: "API reference for @discord-types/builders/message/poll/poll"
---

<div id="@discord-types/builders/message/poll/poll"></div>

# @discord-types/builders/message/poll/poll

<div id="Types"></div>

## Types

<div id="Poll"></div>

## Poll

<details>
<summary>Raw Type</summary>

```luau
type Poll = Poll.Prototype, & {
	question: mediaBuilder.JSON,

	answers: {answerBuilder.JSON},

	expiry: string,

	allowMultiselect: boolean,

	layoutType: messageTypes.PollLayoutType
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"question": {
			type: "[mediaBuilder](#module.mediaBuilder).[JSON](#JSON)",
			description: "",
			required: true
		},
		"answers": {
			type: "\{[answerBuilder](#module.answerBuilder).[JSON](#JSON)\}",
			description: "",
			required: true
		},
		"expiry": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"allowMultiselect": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"layoutType": {
			type: "[messageTypes](#module.messageTypes).[PollLayoutType](#PollLayoutType)",
			description: "",
			required: true
		},
	}}
/>
</details>

<div id="JSON"></div>

## JSON

<details>
<summary>Raw Type</summary>

```luau
type JSON = Poll.Prototype.build(nil :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Poll.Prototype.addAnswer"></div>

## Poll.Prototype.addAnswer

\[\[
	Adds an answer to the poll.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Adds an answer to the poll.
]]
function Poll.Prototype.addAnswer(self: Poll, answer: answerBuilder.JSON) -> Poll end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="answer"></div>

### answer

[answerBuilder](#module.answerBuilder).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Poll](#Poll)<div id="Poll.Prototype.setQuestion"></div>

## Poll.Prototype.setQuestion

\[\[
	Sets the question for the poll.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the question for the poll.
]]
function Poll.Prototype.setQuestion(self: Poll, question: mediaBuilder.JSON) -> Poll end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="question"></div>

### question

[mediaBuilder](#module.mediaBuilder).[JSON](#JSON)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Poll](#Poll)<div id="Poll.Prototype.setExpiry"></div>

## Poll.Prototype.setExpiry

\[\[
	Sets the expiry time for the poll.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the expiry time for the poll.
]]
function Poll.Prototype.setExpiry(self: Poll, expiry: string | number | datetime.DateTime) -> Poll end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="expiry"></div>

### expiry

Union with variants:

<details>
<summary>Variant 1</summary>

[string](#string)

</details>

<details>
<summary>Variant 2</summary>

[number](#number)

</details>

<details>
<summary>Variant 3</summary>

[datetime](#module.datetime).[DateTime](#DateTime)



</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Poll](#Poll)<div id="Poll.Prototype.setMultiselect"></div>

## Poll.Prototype.setMultiselect

\[\[
	Sets whether the poll allows multiple selections.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets whether the poll allows multiple selections.
]]
function Poll.Prototype.setMultiselect(self: Poll, multiselect: boolean) -> Poll end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="multiselect"></div>

### multiselect

[boolean](#boolean)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Poll](#Poll)<div id="Poll.Prototype.setLayoutType"></div>

## Poll.Prototype.setLayoutType

\[\[
	Sets the layout type for the poll.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Sets the layout type for the poll.
]]
function Poll.Prototype.setLayoutType(self: Poll, layoutType: messageTypes.PollLayoutType) -> Poll end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="layoutType"></div>

### layoutType

[messageTypes](#module.messageTypes).[PollLayoutType](#PollLayoutType)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Poll](#Poll)<div id="Poll.Prototype.build"></div>

## Poll.Prototype.build

\[\[
	Builds and returns the Poll JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Builds and returns the Poll JSON that can be parsed by the Discord API.
]]
function Poll.Prototype.build(self: Poll) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Poll.Interface.new"></div>

## Poll.Interface.new

\[\[
	Responsible for creating a new Poll.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Poll.

	\`\`\`lua
	
	\`\`\`
]]
function Poll.Interface.new(resource: {
		question: mediaBuilder.JSON?,

		answers: {answerBuilder.JSON}?,

		expiry: number?,

		allowMultiselect: boolean?,

		layoutType: messageTypes.PollLayoutType?
	}?) -> Poll end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{question: [mediaBuilder](#module.mediaBuilder).[JSON](#JSON)?, answers: \{[answerBuilder](#module.answerBuilder).[JSON](#JSON)\}?, expiry: [number](#number)?, allowMultiselect: [boolean](#boolean)?, layoutType: [messageTypes](#module.messageTypes).[PollLayoutType](#PollLayoutType)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Poll](#Poll)