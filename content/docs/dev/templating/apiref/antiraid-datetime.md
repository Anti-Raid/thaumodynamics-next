---
title: "@antiraid/datetime"
description: "API reference for @antiraid/datetime"
---

<div id="@antiraid/datetime"></div>

# @antiraid/datetime

<div id="Types"></div>

## Types

<div id="TimeDelta"></div>

## TimeDelta

<details>
<summary>Raw Type</summary>

```luau
type TimeDelta = {
	--- @field nanos: The number of nanoseconds in the time delta.
	nanos: number,

	--- @field micros: The number of microseconds in the time delta.
	micros: number,

	--- @field millis: The number of milliseconds in the time delta.
	millis: number,

	--- @field seconds: The number of seconds in the time delta.
	seconds: number,

	--- @field minutes: The number of minutes in the time delta.
	minutes: number,

	--- @field hours: The number of hours in the time delta.
	hours: number,

	--- @field days: The number of days in the time delta.
	days: number,

	--- @field weeks: The number of weeks in the time delta.
	weeks: number,

	--- @field as_secs: The total fractional seconds in the time delta (not yet released)
	as_secs: number,

	--- @function () -> string
	--- Returns an 'offset' string representation of the time delta.
	--- E.g. "+05:30" for 5 hours and 30 minutes.
	offset_string: (self: TimeDelta) -> string,

	-- Metatable
	__add: (TimeDelta, TimeDelta) -> TimeDelta,
	__sub: (TimeDelta, TimeDelta) -> TimeDelta,
	__le: (TimeDelta, TimeDelta) -> boolean,
	__lt: (TimeDelta, TimeDelta) -> boolean,
	__tostring: (TimeDelta) -> string
}
```

</details>

<TypeTable
	type={{
		"nanos": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"micros": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"millis": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"seconds": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"minutes": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"hours": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"days": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"weeks": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"as_secs": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"offset_string": {
			type: "(self) -> [string](#string)",
			description: "@function () -&gt; stringReturns an 'offset' string representation of the time delta.E.g. '+05:30' for 5 hours and 30 minutes.",
			required: true
		},
		"__add": {
			type: "([TimeDelta](#TimeDelta), [TimeDelta](#TimeDelta)) -> [TimeDelta](#TimeDelta)",
			description: "",
			required: true
		},
		"__sub": {
			type: "([TimeDelta](#TimeDelta), [TimeDelta](#TimeDelta)) -> [TimeDelta](#TimeDelta)",
			description: "",
			required: true
		},
		"__le": {
			type: "([TimeDelta](#TimeDelta), [TimeDelta](#TimeDelta)) -> [boolean](#boolean)",
			description: "",
			required: true
		},
		"__lt": {
			type: "([TimeDelta](#TimeDelta), [TimeDelta](#TimeDelta)) -> [boolean](#boolean)",
			description: "",
			required: true
		},
		"__tostring": {
			type: "([TimeDelta](#TimeDelta)) -> [string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="TimeZone"></div>

## TimeZone

@class TimeZone

@within TimeZone

A timezone object.

<details>
<summary>Raw Type</summary>

```luau
--- @class TimeZone
--- @within TimeZone
--- A timezone object.
type TimeZone = {
	--- Parses a datetime string and returns a DateTime object.
	fromString: (self: TimeZone, datetime: string) -> DateTime,

	--- @function (year: number, month: number, day: number, hour: number, minute: number, second: number, all: boolean?) -> DateTime
	--- Translates a timestamp in UTC time to a datetime in the said specific timezone. If \`all\` is set to true, then multiple times
	--- may be returned in the case of ambiguous times, otherwise the first time is returned.
	utcToTz: (self: TimeZone, year: number, month: number, day: number, hours: number, minutes: number, secs: number) -> DateTime,

	--- @function (year: number, month: number, day: number, hour: number, minute: number, second: number, all: boolean?) -> DateTime
	--- Translates a timestamp in the specified timezone to a datetime in UTC. If \`all\` is set to true, then multiple times
	--- may be returned in the case of ambiguous times, otherwise the first time is returned.
	tzToUtc: (self: TimeZone, year: number, month: number, day: number, hours: number, minutes: number, secs: number) -> DateTime,

	--- @function (hour: number, minute: number, second: number) -> DateTime
	--- Translates a time of the current day in UTC time to a datetime in the said specific timezone
	timeUtcToTz: (self: TimeZone, hours: number, minutes: number, secs: number) -> DateTime,

	--- @function (hour: number, minute: number, second: number) -> DateTime
	--- Translates a time of the current day in the said specific timezone to a datetime in UTC
	timeTzToUtc: (self: TimeZone, hours: number, minutes: number, secs: number) -> DateTime,

	--- @function () -> DateTime
	--- Translates the current timestamp to a datetime in the said specific timezone
	now: (self: TimeZone) -> DateTime,

	--- Converts a unix timestamp to a datetime in the said specific timezone
	fromTime: (self: TimeZone, timestamp: typesext.I64Convertibles) -> DateTime,

	--- Converts a unix timestamp in milliseconds to a datetime in the said specific timezone
	fromTimeMillis: (self: TimeZone, timestamp: typesext.I64Convertibles) -> DateTime,

	--- Converts a unix timestamp in microseconds to a datetime in the said specific timezone
	fromTimeMicros: (self: TimeZone, timestamp: typesext.I64Convertibles) -> DateTime,

	-- Metatable
	__tostring: (TimeZone) -> string,
	__eq: (TimeZone, TimeZone) -> boolean
}
```

</details>

<TypeTable
	type={{
		"fromString": {
			type: "(self, datetime: [string](#string)) -> [DateTime](#DateTime)",
			description: "Parses a datetime string and returns a DateTime object.",
			required: true
		},
		"utcToTz": {
			type: "(self, year: [number](#number), month: [number](#number), day: [number](#number), hours: [number](#number), minutes: [number](#number), secs: [number](#number)) -> [DateTime](#DateTime)",
			description: "@function (year: number, month: number, day: number, hour: number, minute: number, second: number, all: boolean?) -&gt; DateTimeTranslates a timestamp in UTC time to a datetime in the said specific timezone. If \`all\` is set to true, then multiple timesmay be returned in the case of ambiguous times, otherwise the first time is returned.",
			required: true
		},
		"tzToUtc": {
			type: "(self, year: [number](#number), month: [number](#number), day: [number](#number), hours: [number](#number), minutes: [number](#number), secs: [number](#number)) -> [DateTime](#DateTime)",
			description: "@function (year: number, month: number, day: number, hour: number, minute: number, second: number, all: boolean?) -&gt; DateTimeTranslates a timestamp in the specified timezone to a datetime in UTC. If \`all\` is set to true, then multiple timesmay be returned in the case of ambiguous times, otherwise the first time is returned.",
			required: true
		},
		"timeUtcToTz": {
			type: "(self, hours: [number](#number), minutes: [number](#number), secs: [number](#number)) -> [DateTime](#DateTime)",
			description: "@function (hour: number, minute: number, second: number) -&gt; DateTimeTranslates a time of the current day in UTC time to a datetime in the said specific timezone",
			required: true
		},
		"timeTzToUtc": {
			type: "(self, hours: [number](#number), minutes: [number](#number), secs: [number](#number)) -> [DateTime](#DateTime)",
			description: "@function (hour: number, minute: number, second: number) -&gt; DateTimeTranslates a time of the current day in the said specific timezone to a datetime in UTC",
			required: true
		},
		"now": {
			type: "(self) -> [DateTime](#DateTime)",
			description: "@function () -&gt; DateTimeTranslates the current timestamp to a datetime in the said specific timezone",
			required: true
		},
		"fromTime": {
			type: "(self, timestamp: [typesext](#module.typesext).[I64Convertibles](#I64Convertibles)) -> [DateTime](#DateTime)",
			description: "Converts a unix timestamp to a datetime in the said specific timezone",
			required: true
		},
		"fromTimeMillis": {
			type: "(self, timestamp: [typesext](#module.typesext).[I64Convertibles](#I64Convertibles)) -> [DateTime](#DateTime)",
			description: "Converts a unix timestamp in milliseconds to a datetime in the said specific timezone",
			required: true
		},
		"fromTimeMicros": {
			type: "(self, timestamp: [typesext](#module.typesext).[I64Convertibles](#I64Convertibles)) -> [DateTime](#DateTime)",
			description: "Converts a unix timestamp in microseconds to a datetime in the said specific timezone",
			required: true
		},
		"__tostring": {
			type: "([TimeZone](#TimeZone)) -> [string](#string)",
			description: "",
			required: true
		},
		"__eq": {
			type: "([TimeZone](#TimeZone), [TimeZone](#TimeZone)) -> [boolean](#boolean)",
			description: "",
			required: true
		},
	}}
/>
<div id="DateTime"></div>

## DateTime

@class DateTime

@within DateTime

A datetime object.



Supports addition/subtraction/equality with TimeDelta objects as well as comparisons with other DateTime objects.

<details>
<summary>Raw Type</summary>

```luau
--- @class DateTime
--- @within DateTime
--- A datetime object. 
---
--- Supports addition/subtraction/equality with TimeDelta objects as well as comparisons with other DateTime objects.
type DateTime = {
	--- @field year
	--- The year of the datetime.
	year: number,

	--- @field month
	--- The month of the datetime.
	month: number,

	--- @field day
	--- The day of the datetime.
	day: number,

	--- @field hour
	--- The hour of the datetime.
	hour: number,

	--- @field minute
	--- The minute of the datetime.
	minute: number,

	--- @field second
	--- The second of the datetime.
	second: number,

	--- @field timestamp_seconds
	--- The timestamp in seconds of the datetime from the Unix epoch.
	timestamp_seconds: number,

	--- @field timestamp_millis
	--- The timestamp in milliseconds of the datetime from the Unix epoch.
	timestamp_millis: number,

	--- @field timestamp_micros
	--- The timestamp in microseconds of the datetime from the Unix epoch.
	timestamp_micros: number,

	--- @field timestamp_nanos
	--- The timestamp in nanoseconds of the datetime from the Unix epoch.
	timestamp_nanos: number,

	--- @field timezone: TimeZone
	--- The timezone of the datetime.
	timezone: TimeZone,

	--- @field base_offset: TimeDelta
	--- The base (non-DST) offset of the datetime.
	base_offset: TimeDelta,

	--- @field dst_offset: TimeDelta
	--- The additional DST offset of the datetime.
	dst_offset: TimeDelta,

	--- @function (TimeZone) -> DateTime
	--- Converts the datetime to the specified timezone.
	with_timezone: (self: DateTime, TimeZone) -> DateTime,

	--- @function (string) -> string
	--- Formats the datetime using the specified format string.
	format: (self: DateTime, string) -> string,

	--- @function (DateTime) -> TimeDelta
	--- Calculates the duration between the current datetime and another datetime.
	duration_since: (self: DateTime, DateTime) -> TimeDelta,

	-- Metatable
	__add: (DateTime, TimeDelta) -> DateTime,
	__sub: (DateTime, TimeDelta) -> DateTime,
	__le: (DateTime, DateTime) -> boolean,
	__lt: (DateTime, DateTime) -> boolean,
	__eq: (DateTime, DateTime) -> boolean,
	__tostring: (DateTime) -> string
}
```

</details>

<TypeTable
	type={{
		"year": {
			type: "[number](#number)",
			description: "The year of the datetime.",
			required: true
		},
		"month": {
			type: "[number](#number)",
			description: "The month of the datetime.",
			required: true
		},
		"day": {
			type: "[number](#number)",
			description: "The day of the datetime.",
			required: true
		},
		"hour": {
			type: "[number](#number)",
			description: "The hour of the datetime.",
			required: true
		},
		"minute": {
			type: "[number](#number)",
			description: "The minute of the datetime.",
			required: true
		},
		"second": {
			type: "[number](#number)",
			description: "The second of the datetime.",
			required: true
		},
		"timestamp_seconds": {
			type: "[number](#number)",
			description: "The timestamp in seconds of the datetime from the Unix epoch.",
			required: true
		},
		"timestamp_millis": {
			type: "[number](#number)",
			description: "The timestamp in milliseconds of the datetime from the Unix epoch.",
			required: true
		},
		"timestamp_micros": {
			type: "[number](#number)",
			description: "The timestamp in microseconds of the datetime from the Unix epoch.",
			required: true
		},
		"timestamp_nanos": {
			type: "[number](#number)",
			description: "The timestamp in nanoseconds of the datetime from the Unix epoch.",
			required: true
		},
		"timezone": {
			type: "[TimeZone](#TimeZone)",
			description: "The timezone of the datetime.",
			required: true
		},
		"base_offset": {
			type: "[TimeDelta](#TimeDelta)",
			description: "The base (non-DST) offset of the datetime.",
			required: true
		},
		"dst_offset": {
			type: "[TimeDelta](#TimeDelta)",
			description: "The additional DST offset of the datetime.",
			required: true
		},
		"with_timezone": {
			type: "(self, [TimeZone](#TimeZone)) -> [DateTime](#DateTime)",
			description: "@function (TimeZone) -&gt; DateTimeConverts the datetime to the specified timezone.",
			required: true
		},
		"format": {
			type: "(self, [string](#string)) -> [string](#string)",
			description: "@function (string) -&gt; stringFormats the datetime using the specified format string.",
			required: true
		},
		"duration_since": {
			type: "(self, [DateTime](#DateTime)) -> [TimeDelta](#TimeDelta)",
			description: "@function (DateTime) -&gt; TimeDeltaCalculates the duration between the current datetime and another datetime.",
			required: true
		},
		"__add": {
			type: "([DateTime](#DateTime), [TimeDelta](#TimeDelta)) -> [DateTime](#DateTime)",
			description: "",
			required: true
		},
		"__sub": {
			type: "([DateTime](#DateTime), [TimeDelta](#TimeDelta)) -> [DateTime](#DateTime)",
			description: "",
			required: true
		},
		"__le": {
			type: "([DateTime](#DateTime), [DateTime](#DateTime)) -> [boolean](#boolean)",
			description: "",
			required: true
		},
		"__lt": {
			type: "([DateTime](#DateTime), [DateTime](#DateTime)) -> [boolean](#boolean)",
			description: "",
			required: true
		},
		"__eq": {
			type: "([DateTime](#DateTime), [DateTime](#DateTime)) -> [boolean](#boolean)",
			description: "",
			required: true
		},
		"__tostring": {
			type: "([DateTime](#DateTime)) -> [string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="new"></div>

## new

@function (timezone: string) -&gt; TimeZone

Returns a new Timezone object if the timezone is recognized/supported.

<details>
<summary>Function Signature</summary>

```luau
--- @function (timezone: string) -> TimeZone
--- @param timezone: string (The timezone to get the offset for.)
--- @return TimeZone (The timezone object.)
--- Returns a new Timezone object if the timezone is recognized/supported.
function new(timezone: string) -> TimeZone end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="timezone"></div>

### timezone

[string](#string)

<div id="Returns"></div>

## Returns

<div id="TimeZone"></div>

### TimeZone

(The timezone object.)

[TimeZone](#TimeZone)<div id="timedelta_weeks"></div>

## timedelta_weeks

@function (weeks: number) -&gt; TimeDelta

Creates a new TimeDelta object with the specified number of weeks.

<details>
<summary>Function Signature</summary>

```luau
--- @function (weeks: number) -> TimeDelta
--- @param weeks: number (The number of weeks to create the TimeDelta object with.)
--- @return TimeDelta
--- Creates a new TimeDelta object with the specified number of weeks.
function timedelta_weeks(weeks: typesext.I64Convertibles) -> TimeDelta end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="weeks"></div>

### weeks

[typesext](#module.typesext).[I64Convertibles](#I64Convertibles)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TimeDelta](#TimeDelta)<div id="timedelta_days"></div>

## timedelta_days

@function (days: number) -&gt; TimeDelta

Creates a new TimeDelta object with the specified number of days.

<details>
<summary>Function Signature</summary>

```luau
--- @function (days: number) -> TimeDelta
--- @param days: number (The number of days to create the TimeDelta object with.)
--- @return TimeDelta
--- Creates a new TimeDelta object with the specified number of days.
function timedelta_days(days: typesext.I64Convertibles) -> TimeDelta end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="days"></div>

### days

[typesext](#module.typesext).[I64Convertibles](#I64Convertibles)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TimeDelta](#TimeDelta)<div id="timedelta_hours"></div>

## timedelta_hours

@function (hours: number) -&gt; TimeDelta

Creates a new TimeDelta object with the specified number of hours.

<details>
<summary>Function Signature</summary>

```luau
--- @function (hours: number) -> TimeDelta
--- @param hours: number (The number of hours to create the TimeDelta object with.)
--- @return TimeDelta
--- Creates a new TimeDelta object with the specified number of hours.
function timedelta_hours(hours: typesext.I64Convertibles) -> TimeDelta end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="hours"></div>

### hours

[typesext](#module.typesext).[I64Convertibles](#I64Convertibles)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TimeDelta](#TimeDelta)<div id="timedelta_minutes"></div>

## timedelta_minutes

@function (minutes: number) -&gt; TimeDelta

Creates a new TimeDelta object with the specified number of minutes.

<details>
<summary>Function Signature</summary>

```luau
--- @function (minutes: number) -> TimeDelta
--- @param minutes: number (The number of minutes to create the TimeDelta object with.)
--- @return TimeDelta
--- Creates a new TimeDelta object with the specified number of minutes.
function timedelta_minutes(minutes: typesext.I64Convertibles) -> TimeDelta end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="minutes"></div>

### minutes

[typesext](#module.typesext).[I64Convertibles](#I64Convertibles)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TimeDelta](#TimeDelta)<div id="timedelta_seconds"></div>

## timedelta_seconds

@function (seconds: number) -&gt; TimeDelta

Creates a new TimeDelta object with the specified number of seconds.

<details>
<summary>Function Signature</summary>

```luau
--- @function (seconds: number) -> TimeDelta
--- @param seconds: number (The number of seconds to create the TimeDelta object with.)
--- @return TimeDelta
--- Creates a new TimeDelta object with the specified number of seconds.
function timedelta_seconds(seconds: typesext.I64Convertibles) -> TimeDelta end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="seconds"></div>

### seconds

[typesext](#module.typesext).[I64Convertibles](#I64Convertibles)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TimeDelta](#TimeDelta)<div id="timedelta_millis"></div>

## timedelta_millis

@function (millis: number) -&gt; TimeDelta

Creates a new TimeDelta object with the specified number of milliseconds.

<details>
<summary>Function Signature</summary>

```luau
--- @function (millis: number) -> TimeDelta
--- @param millis: number (The number of milliseconds to create the TimeDelta object with.)
--- @return TimeDelta
--- Creates a new TimeDelta object with the specified number of milliseconds.
function timedelta_millis(millis: typesext.I64Convertibles) -> TimeDelta end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="millis"></div>

### millis

[typesext](#module.typesext).[I64Convertibles](#I64Convertibles)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TimeDelta](#TimeDelta)<div id="timedelta_micros"></div>

## timedelta_micros

@function (micros: number) -&gt; TimeDelta

Creates a new TimeDelta object with the specified number of microseconds.

<details>
<summary>Function Signature</summary>

```luau
--- @function (micros: number) -> TimeDelta
--- @param micros: number (The number of microseconds to create the TimeDelta object with.)
--- @return TimeDelta
--- Creates a new TimeDelta object with the specified number of microseconds.
function timedelta_micros(micros: typesext.I64Convertibles) -> TimeDelta end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="micros"></div>

### micros

[typesext](#module.typesext).[I64Convertibles](#I64Convertibles)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TimeDelta](#TimeDelta)<div id="timedelta_nanos"></div>

## timedelta_nanos

@function (nanos: number) -&gt; TimeDelta

Creates a new TimeDelta object with the specified number of nanoseconds.

<details>
<summary>Function Signature</summary>

```luau
--- @function (nanos: number) -> TimeDelta
--- @param nanos: number (The number of nanoseconds to create the TimeDelta object with.)
--- @return TimeDelta
--- Creates a new TimeDelta object with the specified number of nanoseconds.
function timedelta_nanos(nanos: typesext.I64Convertibles) -> TimeDelta end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="nanos"></div>

### nanos

[typesext](#module.typesext).[I64Convertibles](#I64Convertibles)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TimeDelta](#TimeDelta)