---
title: "@antiraid-core/plugins/datastores"
description: "API reference for @antiraid-core/plugins/datastores"
---

<div id="@antiraid-core/plugins/datastores"></div>

# @antiraid-core/plugins/datastores

<div id="Types"></div>

## Types

<div id="DataStore"></div>

## DataStore

A Base DataStore object.

<details>
<summary>Raw Type</summary>

```luau
--- A Base DataStore object.
type DataStore = {
	--- The name of the DataStore
	name: string,

	--- Whether or not a specific operation needs capabilities (either \`\`datastore:{name}\`\` or \`\`datastore:{name}:{operation}\`\`)
	needs_caps: (op: string) -> boolean,

	--- The methods exposed by the DataStore
	methods: () -> {string}
}
```

</details>

<TypeTable
	type={{
		"needs_caps": {
			type: "(op: [string](#string)) -> [boolean](#boolean)",
			description: "Whether or not a specific operation needs capabilities (either \`\`datastore:\{name\}\`\` or \`\`datastore:\{name\}:\{operation\}\`\`)",
			required: true
		},
		"methods": {
			type: "() -> \{[string](#string)\}",
			description: "The methods exposed by the DataStore",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "The name of the DataStore",
			required: true
		},
	}}
/>
<div id="CopyDataStore"></div>

## CopyDataStore

Datastore to copy a KhronosValue to another KhronosValue

<details>
<summary>Raw Type</summary>

```luau
--- Datastore to copy a KhronosValue to another KhronosValue
type CopyDataStore = DataStore & {
	copy: (...: ...khronosvalue.KhronosValue) -> khronosvalue.KhronosValue
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 1</summary>

[DataStore](#DataStore)

</details>

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"copy": {
			type: "(...: ...[khronosvalue](#module.khronosvalue).[KhronosValue](#KhronosValue)) -> [khronosvalue](#module.khronosvalue).[KhronosValue](#KhronosValue)",
			description: "",
			required: true
		},
	}}
/>
</details>

<div id="StatsStore"></div>

## StatsStore

Datastore providing basic statistics

<details>
<summary>Raw Type</summary>

```luau
--- Datastore providing basic statistics
type StatsStore = DataStore & {
	--- @yields
	---
	--- Returns the statistics of the bot.
	stats: () -> {
		total_cached_guilds: number,

		total_guilds: number,

		total_users: number,

		last_started_at: datetime.DateTime
	}
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 1</summary>

[DataStore](#DataStore)

</details>

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"stats": {
			type: "() -> \{total_cached_guilds: [number](#number), total_guilds: [number](#number), total_users: [number](#number), last_started_at: [datetime](#module.datetime).[DateTime](#DateTime)\}",
			description: "@yields Returns the statistics of the bot.",
			required: true
		},
	}}
/>
</details>

<div id="LinksStore"></div>

## LinksStore

<details>
<summary>Raw Type</summary>

```luau
type LinksStore = DataStore & {
	links: () -> {
		support_server: string,

		api_url: string,

		frontend_url: string,

		docs_url: string
	},

	event_list: () -> {string}
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 1</summary>

[DataStore](#DataStore)

</details>

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"links": {
			type: "() -> \{support_server: [string](#string), api_url: [string](#string), frontend_url: [string](#string), docs_url: [string](#string)\}",
			description: "",
			required: true
		},
		"event_list": {
			type: "() -> \{[string](#string)\}",
			description: "",
			required: true
		},
	}}
/>
</details>

<div id="Spawn"></div>

## Spawn

Jobserver

<details>
<summary>Raw Type</summary>

```luau
-- Jobserver
type Spawn = {
	--- The name of the job
	name: string,

	--- The data to be used in the job
	data: khronosvalue.KhronosValue,

	--- Whether or not to create the job if it does not exist
	create: boolean,

	--- Whether or not to execute the job immediately
	execute: boolean,

	--- If create is false, this is required
	id: string?
}
```

</details>

<TypeTable
	type={{
		"name": {
			type: "[string](#string)",
			description: "The name of the job",
			required: true
		},
		"data": {
			type: "[khronosvalue](#module.khronosvalue).[KhronosValue](#KhronosValue)",
			description: "The data to be used in the job",
			required: true
		},
		"create": {
			type: "[boolean](#boolean)",
			description: "Whether or not to create the job if it does not exist",
			required: true
		},
		"execute": {
			type: "[boolean](#boolean)",
			description: "Whether or not to execute the job immediately",
			required: true
		},
		"id": {
			type: "[string](#string)?",
			description: "If create is false, this is required",
			required: false
		},
	}}
/>
<div id="Statuses"></div>

## Statuses

Jobsrver Status

<details>
<summary>Raw Type</summary>

```luau
--- Jobsrver Status
type Statuses = {
	level: string,

	msg: string,

	--- Timestamp in seconds
	ts: number,

	--- ptional list of fields to ignore
	bot_display_ignore: {string}?,

	-- Extra information as a key-value map 
	extra_info: {
		[string]: khronosvalue.KhronosValue
	}
}
```

</details>

<TypeTable
	type={{
		"level": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"msg": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"ts": {
			type: "[number](#number)",
			description: "Timestamp in seconds",
			required: true
		},
		"bot_display_ignore": {
			type: "\{[string](#string)\}?",
			description: "ptional list of fields to ignore",
			required: false
		},
		"extra_info": {
			type: "\{[string]: [khronosvalue](#module.khronosvalue).[KhronosValue](#KhronosValue)\}",
			description: "",
			required: true
		},
	}}
/>
<div id="Output"></div>

## Output

<details>
<summary>Raw Type</summary>

```luau
type Output = {
	filename: string,

	--- Temporary flag for migrations
	perguild: boolean?
}
```

</details>

<TypeTable
	type={{
		"filename": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"perguild": {
			type: "[boolean](#boolean)?",
			description: "Temporary flag for migrations",
			required: false
		},
	}}
/>
<div id="Job"></div>

## Job

Jobserver Job

<details>
<summary>Raw Type</summary>

```luau
--- Jobserver Job
type Job = {
	id: string,

	name: string,

	output: Output?,

	fields: {
		[string]: any
	},

	statuses: {Statuses},

	guild_id: string,

	expiry: datetime.TimeDelta?,

	state: string,

	resumable: boolean,

	created_at: datetime.DateTime,

	job_path: string,

	job_file_path: string?
}
```

</details>

<TypeTable
	type={{
		"id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"name": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"output": {
			type: "[Output](#Output)?",
			description: "",
			required: false
		},
		"fields": {
			type: "\{[string]: [any](#any)\}",
			description: "",
			required: true
		},
		"statuses": {
			type: "\{[Statuses](#Statuses)\}",
			description: "",
			required: true
		},
		"guild_id": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"expiry": {
			type: "[datetime](#module.datetime).[TimeDelta](#TimeDelta)?",
			description: "",
			required: false
		},
		"state": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"resumable": {
			type: "[boolean](#boolean)",
			description: "",
			required: true
		},
		"created_at": {
			type: "[datetime](#module.datetime).[DateTime](#DateTime)",
			description: "",
			required: true
		},
		"job_path": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"job_file_path": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="JobServerStore"></div>

## JobServerStore

<details>
<summary>Raw Type</summary>

```luau
type JobServerStore = DataStore & {
	--- @yields
	---
	--- Spawns a new job on the jobserver returning the job ID.
	spawn: (spawn: Spawn) -> string,

	--- @yields
	---
	--- Lists all jobs created for this server
	---
	--- If needs_statuses is set to true, then statuses are sent, otherwise
	---- the statuses will be an empty table to reduce memory consumption
	list: (needs_statuses: boolean?) -> {Job},

	--- @yields
	---
	--- Lists all jobs created for this server with the given task name
	---
	--- If needs_statuses is set to true, then statuses are sent, otherwise
	---- the statuses will be an empty table to reduce memory consumption
	list_named: (name: string, needs_statuses: boolean?) -> {Job},

	--- @yields
	---
	--- Gets a job from jobserver given its job ID
	---
	--- If needs_statuses is set to true, then statuses are sent, otherwise
	---- the statuses will be an empty table to reduce memory consumption
	get: (id: string, needs_statuses: boolean?) -> Job,

	--- @yields
	---
	--- Deletes a job given its job ID
	delete: (id: string) -> nil
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 1</summary>

[DataStore](#DataStore)

</details>

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"spawn": {
			type: "(spawn: [Spawn](#Spawn)) -> [string](#string)",
			description: "@yields Spawns a new job on the jobserver returning the job ID.",
			required: true
		},
		"list": {
			type: "(needs_statuses: [boolean](#boolean)?) -> \{[Job](#Job)\}",
			description: "@yields Lists all jobs created for this serverIf needs_statuses is set to true, then statuses are sent, otherwise- the statuses will be an empty table to reduce memory consumption",
			required: true
		},
		"list_named": {
			type: "(name: [string](#string), needs_statuses: [boolean](#boolean)?) -> \{[Job](#Job)\}",
			description: "@yields Lists all jobs created for this server with the given task nameIf needs_statuses is set to true, then statuses are sent, otherwise- the statuses will be an empty table to reduce memory consumption",
			required: true
		},
		"get": {
			type: "(id: [string](#string), needs_statuses: [boolean](#boolean)?) -> [Job](#Job)",
			description: "@yields Gets a job from jobserver given its job IDIf needs_statuses is set to true, then statuses are sent, otherwise- the statuses will be an empty table to reduce memory consumption",
			required: true
		},
		"delete": {
			type: "(id: [string](#string)) -> [nil](#nil)",
			description: "@yields Deletes a job given its job ID",
			required: true
		},
	}}
/>
</details>

<div id="Template"></div>

## Template

A Template object.

<details>
<summary>Raw Type</summary>

```luau
--- A Template object.
type Template = {
	--- The name of the template
	name: string,

	--- The events that trigger the template
	events: {string},

	--- The channel to send errors to
	error_channel: string?,

	--- The content of the template
	content: LazyContent,

	--- The language of the template
	language: string,

	--- The capabilities allowed for this template
	allowed_caps: {string},

	--- The date and time when the template was created
	created_at: datetime.DateTime,

	--- The date and time when the template was last updated
	updated_at: datetime.DateTime,

	--- Whether or not the template is paused
	paused: boolean
}
```

</details>

<TypeTable
	type={{
		"name": {
			type: "[string](#string)",
			description: "The name of the template",
			required: true
		},
		"events": {
			type: "\{[string](#string)\}",
			description: "The events that trigger the template",
			required: true
		},
		"error_channel": {
			type: "[string](#string)?",
			description: "The channel to send errors to",
			required: false
		},
		"content": {
			type: "[LazyContent](#LazyContent)",
			description: "The content of the template",
			required: true
		},
		"language": {
			type: "[string](#string)",
			description: "The language of the template",
			required: true
		},
		"allowed_caps": {
			type: "\{[string](#string)\}",
			description: "The capabilities allowed for this template",
			required: true
		},
		"created_at": {
			type: "[datetime](#module.datetime).[DateTime](#DateTime)",
			description: "The date and time when the template was created",
			required: true
		},
		"updated_at": {
			type: "[datetime](#module.datetime).[DateTime](#DateTime)",
			description: "The date and time when the template was last updated",
			required: true
		},
		"paused": {
			type: "[boolean](#boolean)",
			description: "Whether or not the template is paused",
			required: true
		},
	}}
/>
<div id="CreateTemplate"></div>

## CreateTemplate

A CreateTemplate object.

<details>
<summary>Raw Type</summary>

```luau
--- A CreateTemplate object.
type CreateTemplate = {
	--- The name of the template
	name: string,

	--- The events that trigger the template
	events: {string},

	--- The channel to send errors to
	error_channel: string?,

	--- The content of the template
	content: {
		[string]: string
	} | LazyContent,

	--- The language of the template
	language: string,

	--- The capabilities allowed for this template
	allowed_caps: {string},

	--- Whether or not the template is paused
	paused: boolean
}
```

</details>

<TypeTable
	type={{
		"name": {
			type: "[string](#string)",
			description: "The name of the template",
			required: true
		},
		"events": {
			type: "\{[string](#string)\}",
			description: "The events that trigger the template",
			required: true
		},
		"error_channel": {
			type: "[string](#string)?",
			description: "The channel to send errors to",
			required: false
		},
		"content": {
			type: "(\{[string]: [string](#string)\} | [LazyContent](#LazyContent))",
			description: "The content of the template",
			required: true
		},
		"language": {
			type: "[string](#string)",
			description: "The language of the template",
			required: true
		},
		"allowed_caps": {
			type: "\{[string](#string)\}",
			description: "The capabilities allowed for this template",
			required: true
		},
		"paused": {
			type: "[boolean](#boolean)",
			description: "Whether or not the template is paused",
			required: true
		},
	}}
/>
<div id="TemplateStore"></div>

## TemplateStore

A TemplateStore object.

<details>
<summary>Raw Type</summary>

```luau
--- A TemplateStore object.
type TemplateStore = DataStore & {
	--- @yields
	---
	--- Lists all templates
	list: () -> {Template},

	--- @yields
	---
	--- Gets a template by name
	get: (name: string) -> Template?,

	--- @yields
	---
	--- Creates a new template
	create: (template: CreateTemplate) -> nil,

	--- @yields
	---
	--- Updates an existing template
	update: (template: CreateTemplate) -> nil,

	--- @yields
	---
	--- Deletes a template by name
	delete: (name: string) -> nil
}
```

</details>

Intersection with variants:

<details>
<summary>Variant 1</summary>

[DataStore](#DataStore)

</details>

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"list": {
			type: "() -> \{[Template](#Template)\}",
			description: "@yields Lists all templates",
			required: true
		},
		"get": {
			type: "(name: [string](#string)) -> [Template](#Template)?",
			description: "@yields Gets a template by name",
			required: true
		},
		"create": {
			type: "(template: [CreateTemplate](#CreateTemplate)) -> [nil](#nil)",
			description: "@yields Creates a new template",
			required: true
		},
		"update": {
			type: "(template: [CreateTemplate](#CreateTemplate)) -> [nil](#nil)",
			description: "@yields Updates an existing template",
			required: true
		},
		"delete": {
			type: "(name: [string](#string)) -> [nil](#nil)",
			description: "@yields Deletes a template by name",
			required: true
		},
	}}
/>
</details>

<div id="DataStoreExecutor"></div>

## DataStoreExecutor

A datastore executor holds DataStore's

<details>
<summary>Raw Type</summary>

```luau
--- A datastore executor holds DataStore's 
type DataStoreExecutor = {
	StatsStore: StatsStore?,

	-- AntiRaid bot only (CLI not supported)
	CopyDataStore: CopyDataStore?,

	-- Should be present
	LinksStore: LinksStore?,

	-- AntiRaid bot only (CLI not supported)
	JobServerStore: JobServerStore?,

	-- AntiRaid bot only (CLI not supported)
	TemplateStore: TemplateStore?
}
```

</details>

<TypeTable
	type={{
		"StatsStore": {
			type: "[StatsStore](#StatsStore)?",
			description: "",
			required: false
		},
		"CopyDataStore": {
			type: "[CopyDataStore](#CopyDataStore)?",
			description: "",
			required: false
		},
		"LinksStore": {
			type: "[LinksStore](#LinksStore)?",
			description: "",
			required: false
		},
		"JobServerStore": {
			type: "[JobServerStore](#JobServerStore)?",
			description: "",
			required: false
		},
		"TemplateStore": {
			type: "[TemplateStore](#TemplateStore)?",
			description: "",
			required: false
		},
	}}
/>
<div id="Plugin"></div>

## Plugin

<details>
<summary>Raw Type</summary>

```luau
type Plugin = DataStoreExecutor
```

</details>

[DataStoreExecutor](#DataStoreExecutor)

