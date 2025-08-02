---
title: "@antiraid-core/plugins/img_captcha"
description: "API reference for @antiraid-core/plugins/img_captcha"
---

<div id="@antiraid-core/plugins/img_captcha"></div>

# @antiraid-core/plugins/img_captcha

<div id="Types"></div>

## Types

<div id="Geometry"></div>

## Geometry

Represents the area which contains text in a CAPTCHA.

<details>
<summary>Raw Type</summary>

```luau
--- Represents the area which contains text in a CAPTCHA.
type Geometry = {
	--- The minimum x coordinate of the area which contains text (inclusive).
	---
	--- Max size: u32
	left: number,

	--- The maximum x coordinate of the area which contains text (inclusive).
	---
	--- Max size: u32
	right: number,

	--- The minimum y coordinate of the area which contains text (inclusive).
	---
	--- Max size: u32
	top: number,

	--- The maximum y coordinate of the area which contains text (inclusive).
	--- 
	--- Max size: u32
	bottom: number
}
```

</details>

<TypeTable
	type={{
		"left": {
			type: "[number](#number)",
			description: "The minimum x coordinate of the area which contains text (inclusive).Max size: u32",
			required: true
		},
		"right": {
			type: "[number](#number)",
			description: "The maximum x coordinate of the area which contains text (inclusive).Max size: u32",
			required: true
		},
		"top": {
			type: "[number](#number)",
			description: "The minimum y coordinate of the area which contains text (inclusive).Max size: u32",
			required: true
		},
		"bottom": {
			type: "[number](#number)",
			description: "The maximum y coordinate of the area which contains text (inclusive).Max size: u32",
			required: true
		},
	}}
/>
<div id="SerdeColor"></div>

## SerdeColor

Represents a color in RGB format.

<details>
<summary>Raw Type</summary>

```luau
--- Represents a color in RGB format.
type SerdeColor = {
	--- The red component of the color (0-255)
	r: number,

	--- The green component of the color (0-255)
	g: number,

	--- The blue component of the color (0-255)
	b: number
}
```

</details>

<TypeTable
	type={{
		"r": {
			type: "[number](#number)",
			description: "The red component of the color (0-255)",
			required: true
		},
		"g": {
			type: "[number](#number)",
			description: "The green component of the color (0-255)",
			required: true
		},
		"b": {
			type: "[number](#number)",
			description: "The blue component of the color (0-255)",
			required: true
		},
	}}
/>
<div id="ColorInvertFilter"></div>

## ColorInvertFilter

Filter that inverts the colors of an image.

<details>
<summary>Raw Type</summary>

```luau
--- Filter that inverts the colors of an image.
type ColorInvertFilter = {
	filter: "ColorInvert"
}
```

</details>

<TypeTable
	type={{
		"filter": {
			type: "'ColorInvert'",
			description: "",
			required: true
		},
	}}
/>
<div id="CowFilter"></div>

## CowFilter

Filter that generates a CAPTCHA with a specified number of cows (circles/other curvical noise)

<details>
<summary>Raw Type</summary>

```luau
--- Filter that generates a CAPTCHA with a specified number of cows (circles/other curvical noise)
type CowFilter = {
	filter: "Cow",

	--- The minimum radius of the cows
	---
	--- Max size: u32
	min_radius: number,

	--- The maximum radius of the cows
	---
	--- Max size: u32
	max_radius: number,

	--- The number of cows to generate
	---
	--- Max size: u32
	n: number,

	--- Whether to allow duplicate cows
	allow_duplicates: boolean,

	--- The geometry of the area which contains text
	geometry: Geometry?
}
```

</details>

<TypeTable
	type={{
		"filter": {
			type: "'Cow'",
			description: "",
			required: true
		},
		"min_radius": {
			type: "[number](#number)",
			description: "The minimum radius of the cowsMax size: u32",
			required: true
		},
		"max_radius": {
			type: "[number](#number)",
			description: "The maximum radius of the cowsMax size: u32",
			required: true
		},
		"n": {
			type: "[number](#number)",
			description: "The number of cows to generateMax size: u32",
			required: true
		},
		"allow_duplicates": {
			type: "[boolean](#boolean)",
			description: "Whether to allow duplicate cows",
			required: true
		},
		"geometry": {
			type: "[Geometry](#Geometry)?",
			description: "The geometry of the area which contains text",
			required: false
		},
	}}
/>
<div id="DotFilter"></div>

## DotFilter

Filter that creates a specified number of dots

<details>
<summary>Raw Type</summary>

```luau
--- Filter that creates a specified number of dots
type DotFilter = {
	filter: "Dot",

	--- The number of dots to generate
	---
	--- Max size: u32
	n: number,

	--- The minimum radius of the dots
	---
	--- Max size: u32
	min_radius: number,

	--- The maximum radius of the dots
	---
	--- Max size: u32
	max_radius: number
}
```

</details>

<TypeTable
	type={{
		"filter": {
			type: "'Dot'",
			description: "",
			required: true
		},
		"n": {
			type: "[number](#number)",
			description: "The number of dots to generateMax size: u32",
			required: true
		},
		"min_radius": {
			type: "[number](#number)",
			description: "The minimum radius of the dotsMax size: u32",
			required: true
		},
		"max_radius": {
			type: "[number](#number)",
			description: "The maximum radius of the dotsMax size: u32",
			required: true
		},
	}}
/>
<div id="GridFilter"></div>

## GridFilter

Filter that creates a grid (horizontal/vertical lines with a specified gap in X and Y direction)



(think graph paper)

<details>
<summary>Raw Type</summary>

```luau
--- Filter that creates a grid (horizontal/vertical lines with a specified gap in X and Y direction)
---
--- (think graph paper)
type GridFilter = {
	filter: "Grid",

	--- The Y gap between the vertical lines
	---
	--- Max size: u32
	y_gap: number,

	--- The X gap between the horizontal linesPrimitives.u32
	---
	--- Max size: u32
	x_gap: number
}
```

</details>

<TypeTable
	type={{
		"filter": {
			type: "'Grid'",
			description: "",
			required: true
		},
		"y_gap": {
			type: "[number](#number)",
			description: "The Y gap between the vertical linesMax size: u32",
			required: true
		},
		"x_gap": {
			type: "[number](#number)",
			description: "The X gap between the horizontal linesPrimitives.u32Max size: u32",
			required: true
		},
	}}
/>
<div id="LineFilter"></div>

## LineFilter

Draw lines/rectangles on the screen

<details>
<summary>Raw Type</summary>

```luau
--- Draw lines/rectangles on the screen
type LineFilter = {
	filter: "Line",

	--- Point 1, must be an array of two numbers
	---
	--- Max size: f32
	p1: {number},

	--- Point 2, must be an array of two numbers
	---
	--- Max size: f32
	p2: {number},

	--- The thickness of the line
	---
	--- Max size: u32
	thickness: number,

	--- The color of the line
	color: SerdeColor
}
```

</details>

<TypeTable
	type={{
		"filter": {
			type: "'Line'",
			description: "",
			required: true
		},
		"p1": {
			type: "\{[number](#number)\}",
			description: "Point 1, must be an array of two numbersMax size: f32",
			required: true
		},
		"p2": {
			type: "\{[number](#number)\}",
			description: "Point 2, must be an array of two numbersMax size: f32",
			required: true
		},
		"thickness": {
			type: "[number](#number)",
			description: "The thickness of the lineMax size: u32",
			required: true
		},
		"color": {
			type: "[SerdeColor](#SerdeColor)",
			description: "The color of the line",
			required: true
		},
	}}
/>
<div id="NoiseFilter"></div>

## NoiseFilter

Adds some random noise at a specified probability

<details>
<summary>Raw Type</summary>

```luau
--- Adds some random noise at a specified probability
type NoiseFilter = {
	filter: "Noise",

	--- The probability of adding noise
	---
	--- Max size: f32
	prob: number
}
```

</details>

<TypeTable
	type={{
		"filter": {
			type: "'Noise'",
			description: "",
			required: true
		},
		"prob": {
			type: "[number](#number)",
			description: "The probability of adding noiseMax size: f32",
			required: true
		},
	}}
/>
<div id="RandomLineFilter"></div>

## RandomLineFilter

Creates a random line somewhere

<details>
<summary>Raw Type</summary>

```luau
--- Creates a random line somewhere
type RandomLineFilter = {
	filter: "RandomLine"
}
```

</details>

<TypeTable
	type={{
		"filter": {
			type: "'RandomLine'",
			description: "",
			required: true
		},
	}}
/>
<div id="WaveFilter"></div>

## WaveFilter

Creates a wave in a given direction (horizontal/vertical)

<details>
<summary>Raw Type</summary>

```luau
--- Creates a wave in a given direction (horizontal/vertical)
type WaveFilter = {
	filter: "Wave",

	--- The frequency of the wave
	---
	--- Max size: f32
	f: number,

	--- The amplitude of the wave
	---
	--- Max size: f32
	amp: number,

	--- The direction of the wave
	d: "horizontal" | "vertical"
}
```

</details>

<TypeTable
	type={{
		"filter": {
			type: "'Wave'",
			description: "",
			required: true
		},
		"f": {
			type: "[number](#number)",
			description: "The frequency of the waveMax size: f32",
			required: true
		},
		"amp": {
			type: "[number](#number)",
			description: "The amplitude of the waveMax size: f32",
			required: true
		},
		"d": {
			type: "('horizontal' | 'vertical')",
			description: "The direction of the wave",
			required: true
		},
	}}
/>
<div id="Filter"></div>

## Filter

Represents a filter that can be applied to an image.

<details>
<summary>Raw Type</summary>

```luau
--- Represents a filter that can be applied to an image.
type Filter = ColorInvertFilter | CowFilter | DotFilter | GridFilter | LineFilter | NoiseFilter | RandomLineFilter | WaveFilter
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

[ColorInvertFilter](#ColorInvertFilter)

</details>

<details>
<summary>Variant 2</summary>

[CowFilter](#CowFilter)

</details>

<details>
<summary>Variant 3</summary>

[DotFilter](#DotFilter)

</details>

<details>
<summary>Variant 4</summary>

[GridFilter](#GridFilter)

</details>

<details>
<summary>Variant 5</summary>

[LineFilter](#LineFilter)

</details>

<details>
<summary>Variant 6</summary>

[NoiseFilter](#NoiseFilter)

</details>

<details>
<summary>Variant 7</summary>

[RandomLineFilter](#RandomLineFilter)

</details>

<details>
<summary>Variant 8</summary>

[WaveFilter](#WaveFilter)

</details>

<div id="CaptchaConfig"></div>

## CaptchaConfig

Captcha configuration

<details>
<summary>Raw Type</summary>

```luau
--- Captcha configuration
type CaptchaConfig = {
	--- The number of characters the CAPTCHA should have (0-255)
	char_count: number,

	--- The list of filters
	filters: {Filter},

	--- The size of the viewbox to render the CAPTCHA in.
	--- (first element is width, second element is height)
	---
	--- Max size: u32
	viewbox_size: {number},

	--- At what index of CAPTCHA generation should a viewbox be created at.
	---
	--- Max size: u32
	set_viewbox_at_idx: number
}
```

</details>

<TypeTable
	type={{
		"char_count": {
			type: "[number](#number)",
			description: "The number of characters the CAPTCHA should have (0-255)",
			required: true
		},
		"filters": {
			type: "\{[Filter](#Filter)\}",
			description: "The list of filters",
			required: true
		},
		"viewbox_size": {
			type: "\{[number](#number)\}",
			description: "The size of the viewbox to render the CAPTCHA in.(first element is width, second element is height)Max size: u32",
			required: true
		},
		"set_viewbox_at_idx": {
			type: "[number](#number)",
			description: "At what index of CAPTCHA generation should a viewbox be created at.Max size: u32",
			required: true
		},
	}}
/>
<div id="Captcha"></div>

## Captcha

<details>
<summary>Raw Type</summary>

```luau
type Captcha = {
	--- The text of the CAPTCHA.
	text: string,

	--- The image of the CAPTCHA (Luau buffer).
	image: buffer
}
```

</details>

<TypeTable
	type={{
		"text": {
			type: "[string](#string)",
			description: "The text of the CAPTCHA.",
			required: true
		},
		"image": {
			type: "[buffer](#buffer)",
			description: "The image of the CAPTCHA (Luau buffer).",
			required: true
		},
	}}
/>
<div id="Plugin"></div>

## Plugin

<details>
<summary>Raw Type</summary>

```luau
type Plugin = {
	--- @yields
	---
	--- Creates a new CAPTCHA with the given configuration.
	Create: (config: CaptchaConfig) -> Captcha
}
```

</details>

<TypeTable
	type={{
		"Create": {
			type: "(config: [CaptchaConfig](#CaptchaConfig)) -> [Captcha](#Captcha)",
			description: "@yields Creates a new CAPTCHA with the given configuration.",
			required: true
		},
	}}
/>
