---
title: "@discord-types/builders/embed/footer"
description: "API reference for @discord-types/builders/embed/footer"
---

<div id="@discord-types/builders/embed/footer"></div>

# @discord-types/builders/embed/footer

<div id="Types"></div>

## Types

<div id="Footer"></div>

## Footer

<details>
<summary>Raw Type</summary>

```luau
type Footer = Footer.Prototype, & {
	text: string?,

	iconUrl: string?,

	proxyIconUrl: string?
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"text": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"iconUrl": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
		"proxyIconUrl": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
</details>

<div id="JSON"></div>

## JSON

<details>
<summary>Raw Type</summary>

```luau
type JSON = Footer.Prototype.build({} :: any),
```

</details>

<div id="Functions"></div>

# Functions

<div id="Footer.Prototype.setText"></div>

## Footer.Prototype.setText

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function Footer.Prototype.setText(self: Footer, text: string) -> Footer end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="text"></div>

### text

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Footer](#Footer)<div id="Footer.Prototype.setIcon"></div>

## Footer.Prototype.setIcon

\[\[
	
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	
]]
function Footer.Prototype.setIcon(self: Footer, iconUrl: string, proxyIconUrl: string?) -> Footer end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="iconUrl"></div>

### iconUrl

[string](#string)

<div id="proxyIconUrl"></div>

### proxyIconUrl

*This field is optional and may not be specified*

[string](#string)?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Footer](#Footer)<div id="Footer.Prototype.build"></div>

## Footer.Prototype.build

\[\[
	Responsible for building the Footer JSON that can be parsed by the Discord API.
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for building the Footer JSON that can be parsed by the Discord API.
]]
function Footer.Prototype.build(self: Footer) -> JSON end
```

</details>

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[JSON](#JSON)<div id="Footer.Interface.new"></div>

## Footer.Interface.new

\[\[
	Responsible for creating a new Footer.

	\`\`\`lua
	
	\`\`\`
\]\]

<details>
<summary>Function Signature</summary>

```luau
--[[
	Responsible for creating a new Footer.

	\`\`\`lua
	
	\`\`\`
]]
function Footer.Interface.new(resource: {
		text: string?,

		iconUrl: string?,

		proxyIconUrl: string?
	}?) -> Footer end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="resource"></div>

### resource

*This field is optional and may not be specified*

\{text: [string](#string)?, iconUrl: [string](#string)?, proxyIconUrl: [string](#string)?\}?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[Footer](#Footer)