---
title: "@antiraid-core/plugins/kv"
description: "API reference for @antiraid-core/plugins/kv"
---

<div id="@antiraid-core/plugins/kv"></div>

# @antiraid-core/plugins/kv

<div id="Types"></div>

## Types

<div id="SetResult"></div>

## SetResult

Result from a set operation

<details>
<summary>Raw Type</summary>

```luau
--- Result from a set operation
type SetResult = {
	--- Whether or not the key previously existed.
	exists: boolean,

	--- The ID of the record that was set.
	id: string
}
```

</details>

<TypeTable
	type={{
		"exists": {
			type: "[boolean](#boolean)",
			description: "Whether or not the key previously existed.",
			required: true
		},
		"id": {
			type: "[string](#string)",
			description: "The ID of the record that was set.",
			required: true
		},
	}}
/>
<div id="KvRecord"></div>

## KvRecord

KvRecord represents a key-value record with metadata.

@class KvRecord

<details>
<summary>Raw Type</summary>

```luau
--- KvRecord represents a key-value record with metadata.
---@class KvRecord
type KvRecord = {
	--- The ID of the record
	id: string,

	--- The key of the record.
	key: string,

	--- The value of the record. This can be any type, depending on what was stored.
	value: khronosvalue.KhronosValue,

	--- Indicates whether the record exists in the key-value store.
	exists: true,

	--- The scopes the key has
	scopes: {string},

	--- The timestamp when the record was created, in ISO 8601 format (e.g., "2023-10-01T12:00:00Z").
	created_at: datetime.DateTime,

	--- The timestamp when the record was last updated, in ISO 8601 format (e.g., "2023-10-01T12:00:00Z").
	last_updated_at: datetime.DateTime,

	--- When the record will expire, if any
	expires_at: datetime.DateTime?
} | {
	--- The key of the record.
	key: string,

	--- Indicates whether the record exists in the key-value store.
	exists: false
}
```

</details>

Union with variants:

<details>
<summary>Variant 1</summary>

<TypeTable
	type={{
		"id": {
			type: "[string](#string)",
			description: "The ID of the record",
			required: true
		},
		"key": {
			type: "[string](#string)",
			description: "The key of the record.",
			required: true
		},
		"value": {
			type: "[khronosvalue](#module.khronosvalue).[KhronosValue](#KhronosValue)",
			description: "The value of the record. This can be any type, depending on what was stored.",
			required: true
		},
		"exists": {
			type: "[true](#true)",
			description: "Indicates whether the record exists in the key-value store.",
			required: true
		},
		"scopes": {
			type: "\{[string](#string)\}",
			description: "The scopes the key has",
			required: true
		},
		"created_at": {
			type: "[datetime](#module.datetime).[DateTime](#DateTime)",
			description: "The timestamp when the record was created, in ISO 8601 format (e.g., '2023-10-01T12:00:00Z').",
			required: true
		},
		"last_updated_at": {
			type: "[datetime](#module.datetime).[DateTime](#DateTime)",
			description: "The timestamp when the record was last updated, in ISO 8601 format (e.g., '2023-10-01T12:00:00Z').",
			required: true
		},
		"expires_at": {
			type: "[datetime](#module.datetime).[DateTime](#DateTime)?",
			description: "When the record will expire, if any",
			required: false
		},
	}}
/>
</details>

<details>
<summary>Variant 2</summary>

<TypeTable
	type={{
		"key": {
			type: "[string](#string)",
			description: "The key of the record.",
			required: true
		},
		"exists": {
			type: "[false](#false)",
			description: "Indicates whether the record exists in the key-value store.",
			required: true
		},
	}}
/>
</details>

<div id="KvRecordList"></div>

## KvRecordList

A list of KvRecords

<details>
<summary>Raw Type</summary>

```luau
--- A list of KvRecords
type KvRecordList = {KvRecord}
```

</details>

\{[KvRecord](#KvRecord)\}

<div id="KvExecutor"></div>

## KvExecutor

KvExecutor allows templates to get, store and find persistent data within a server.

@class KvExecutor

<details>
<summary>Raw Type</summary>

```luau
--- KvExecutor allows templates to get, store and find persistent data within a server.
---@class KvExecutor
type KvExecutor = {
	--- The guild ID the executor will perform key-value operations on.
	guild_id: string,

	--- The originating guild ID (the guild ID of the template itself).
	origin_guild_id: string,

	--- @yields
	---
	--- Returns a list of all key-value scopes/
	--- This is only guaranteed to return scopes that actually have at least one key inside it.
	---
	--- Needs the \`kv.meta:list_scopes\` capability to use
	list_scopes: (self: KvExecutor) -> {string},

	--- @yields
	---
	--- Finds matching records in this key-value scope.
	--- @param query string The key to search for. % matches zero or more characters; _ matches a single character. To search anywhere in a string, surround {KEY} with %, e.g. %{KEY}%
	--- @return {KvRecord} The records.
	find: (self: KvExecutor, query: string, scopes: {string}) -> KvRecordList,

	--- @yields
	---
	--- Returns if a key exists in this key-value scope.
	--- @param key string The key to check for.
	--- @return boolean True if the key exists, false otherwise.
	exists: (self: KvExecutor, key: string, scopes: {string}) -> boolean,

	--- @yields
	---
	--- Gets a value from this key-value scope.
	--- @param key string The key of the record.
	--- @return any The value of the record.
	get: (self: KvExecutor, key: string, scopes: {string}) -> khronosvalue.KhronosValue,

	--- @yields
	---
	--- Gets a value by ID
	--- @param id string The ID of the record.
	--- @return any The value of the record.
	getbyid: (self: KvExecutor, id: string) -> khronosvalue.KhronosValue,

	--- @yields
	---
	--- Gets a record from this key-value scope.
	--- @param key string The key of the record.
	--- @return KvRecord The record.
	getrecord: (self: KvExecutor, key: string, scopes: {string}) -> KvRecord,

	--- @yields
	---
	--- Gets a record by ID
	--- @param id string The ID of the record.
	--- @return KvRecord The record.
	getrecordbyid: (self: KvExecutor, id: string) -> KvRecord,

	--- @yields
	---
	--- Returns all keys present in this key-value scope.
	---
	--- This needs the \`\`kv.meta[SCOPE]:keys\`\` capability for all scopes provided.
	keys: (self: KvExecutor, scopes: {string}) -> KvRecordList,

	--- @yields
	---
	--- Sets a record in the key-value store.
	--- @param key string The key of the record.
	--- @param value any The value of the record.
	--- @param scopes {string} The scopes to set the record in. If not provided, the record will be set in the unscoped scope.
	--- @param expires_at datetime.DateTime? The expiration time of the record, if any
	--- @param resume boolean? If set, dispatches a \`\`KeyResume\`\` event anytime the key is set and the template is reloaded or the worker process restarted. Defaults to false.
	--- @return The result of the set operation, containing whether the key previously existed and the ID of the record.
	set: (self: KvExecutor, key: string, value: khronosvalue.KhronosValue, scopes: {string}, expires_at: datetime.DateTime?, resume: boolean?) -> SetResult,

	--- @yields
	--- Sets a record in the key-value store by ID.
	--- @param id string The ID of the record.
	--- @param value any The value of the record.
	--- @param expires_at datetime.DateTime? The expiration time of the record, if any.
	--- @param resume boolean? If set, dispatches a \`\`KeyResume\`\` event anytime the key is set and the template is reloaded or the worker process restarted. Defaults to false.
	--- @return nil
	setbyid: (self: KvExecutor, id: string, value: khronosvalue.KhronosValue, expires_at: datetime.DateTime?, resume: boolean?) -> nil,

	--- @yields
	---
	--- Sets the expiry time of a record.
	--- @param key string The key of the record.
	--- @param expires_at datetime.DateTime The new expiration time of the record.
	setexpiry: (self: KvExecutor, key: string, scopes: {string}, expires_at: datetime.DateTime?) -> nil,

	--- @yields
	---
	--- Sets the expiry time of a record by ID.
	--- @param id string The ID of the record.
	--- @param expires_at datetime.DateTime The new expiration time of the record.
	setexpirybyid: (self: KvExecutor, id: string, expires_at: datetime.DateTime?) -> nil,

	--- @yields
	---
	--- Deletes a record from this key-value scope
	--- @param key string The key of the record.
	delete: (self: KvExecutor, key: string, scopes: {string}) -> nil,

	--- @yields
	---
	--- Deletes a record by ID.
	--- @param id string The ID of the record.
	deletebyid: (self: KvExecutor, id: string) -> nil
}
```

</details>

<TypeTable
	type={{
		"list_scopes": {
			type: "(self) -> \{[string](#string)\}",
			description: "@yields Returns a list of all key-value scopes/This is only guaranteed to return scopes that actually have at least one key inside it.Needs the \`kv.meta:list_scopes\` capability to use",
			required: true
		},
		"find": {
			type: "(self, query: [string](#string), scopes: \{[string](#string)\}) -> [KvRecordList](#KvRecordList)",
			description: "@yields Finds matching records in this key-value scope.",
			required: true
		},
		"exists": {
			type: "(self, key: [string](#string), scopes: \{[string](#string)\}) -> [boolean](#boolean)",
			description: "@yields Returns if a key exists in this key-value scope.",
			required: true
		},
		"get": {
			type: "(self, key: [string](#string), scopes: \{[string](#string)\}) -> [khronosvalue](#module.khronosvalue).[KhronosValue](#KhronosValue)",
			description: "@yields Gets a value from this key-value scope.",
			required: true
		},
		"getbyid": {
			type: "(self, id: [string](#string)) -> [khronosvalue](#module.khronosvalue).[KhronosValue](#KhronosValue)",
			description: "@yields Gets a value by ID",
			required: true
		},
		"getrecord": {
			type: "(self, key: [string](#string), scopes: \{[string](#string)\}) -> [KvRecord](#KvRecord)",
			description: "@yields Gets a record from this key-value scope.",
			required: true
		},
		"getrecordbyid": {
			type: "(self, id: [string](#string)) -> [KvRecord](#KvRecord)",
			description: "@yields Gets a record by ID",
			required: true
		},
		"keys": {
			type: "(self, scopes: \{[string](#string)\}) -> [KvRecordList](#KvRecordList)",
			description: "@yields Returns all keys present in this key-value scope.This needs the \`\`kv.meta\[SCOPE\]:keys\`\` capability for all scopes provided.",
			required: true
		},
		"set": {
			type: "(self, key: [string](#string), value: [khronosvalue](#module.khronosvalue).[KhronosValue](#KhronosValue), scopes: \{[string](#string)\}, expires_at: [datetime](#module.datetime).[DateTime](#DateTime)?, resume: [boolean](#boolean)?) -> [SetResult](#SetResult)",
			description: "@yields Sets a record in the key-value store.",
			required: true
		},
		"setbyid": {
			type: "(self, id: [string](#string), value: [khronosvalue](#module.khronosvalue).[KhronosValue](#KhronosValue), expires_at: [datetime](#module.datetime).[DateTime](#DateTime)?, resume: [boolean](#boolean)?) -> [nil](#nil)",
			description: "@yields Sets a record in the key-value store by ID.",
			required: true
		},
		"setexpiry": {
			type: "(self, key: [string](#string), scopes: \{[string](#string)\}, expires_at: [datetime](#module.datetime).[DateTime](#DateTime)?) -> [nil](#nil)",
			description: "@yields Sets the expiry time of a record.",
			required: true
		},
		"setexpirybyid": {
			type: "(self, id: [string](#string), expires_at: [datetime](#module.datetime).[DateTime](#DateTime)?) -> [nil](#nil)",
			description: "@yields Sets the expiry time of a record by ID.",
			required: true
		},
		"delete": {
			type: "(self, key: [string](#string), scopes: \{[string](#string)\}) -> [nil](#nil)",
			description: "@yields Deletes a record from this key-value scope",
			required: true
		},
		"deletebyid": {
			type: "(self, id: [string](#string)) -> [nil](#nil)",
			description: "@yields Deletes a record by ID.",
			required: true
		},
		"guild_id": {
			type: "[string](#string)",
			description: "The guild ID the executor will perform key-value operations on.",
			required: true
		},
		"origin_guild_id": {
			type: "[string](#string)",
			description: "The originating guild ID (the guild ID of the template itself).",
			required: true
		},
	}}
/>
<div id="Plugin"></div>

## Plugin

<details>
<summary>Raw Type</summary>

```luau
type Plugin = KvExecutor
```

</details>

[KvExecutor](#KvExecutor)

