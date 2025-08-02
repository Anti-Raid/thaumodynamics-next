---
title: "@antiraid-core/plugins/objectstorage"
description: "API reference for @antiraid-core/plugins/objectstorage"
---

<div id="@antiraid-core/plugins/objectstorage"></div>

# @antiraid-core/plugins/objectstorage

<div id="Types"></div>

## Types

<div id="Bucket"></div>

## Bucket

An object storage bucket



Object storage is mainly useful over kv when dealing with blobs of data

(otherwise, kv is easier to use as it has support for serializing most AntiRaid types

etc). As an example, datetimes should be stored using object storage for automatic

conversion to/from the storage bit for you while object storage can be used for storing

compressed assets, images etc.



Object storage also works over HTTP calls and may be slower than key-value which

may use a custom binary protocol over unix socket

<details>
<summary>Raw Type</summary>

```luau
--- An object storage bucket
---
--- Object storage is mainly useful over kv when dealing with blobs of data
--- (otherwise, kv is easier to use as it has support for serializing most AntiRaid types
--- etc). As an example, datetimes should be stored using object storage for automatic
--- conversion to/from the storage bit for you while object storage can be used for storing
--- compressed assets, images etc.
---
--- Object storage also works over HTTP calls and may be slower than key-value which 
--- may use a custom binary protocol over unix socket
type Bucket = {
	--- The buckets name
	bucket_name: string,

	--- @yields
	---
	--- List all files in the bucket
	list_files: (self: Bucket, prefix: string?) -> {ObjectMetadata},

	--- @yields
	---
	--- Returns if a file exists
	file_exists: (self: Bucket, path: string) -> boolean,

	--- @yields
	---
	--- Downloads a file. The resulting file must fit into the VM's memory limit
	download_file: (self: Bucket, path: string, opts: DownloadFileOpts?) -> blob.Blob,

	--- @yields
	---
	--- Creates a presigned url for referring to the file
	get_file_url: (self: Bucket, path: string, expiry: datetime.TimeDelta) -> string,

	--- @yields
	---
	--- Upload a file to a bucket
	upload_file: (self: Bucket, path: string, data: blob.BlobTaker) -> nil,

	--- @yields
	---
	--- Deletes a file from the bucket
	delete_file: (self: Bucket, path: string) -> nil
}
```

</details>

<TypeTable
	type={{
		"list_files": {
			type: "(self, prefix: [string](#string)?) -> \{[ObjectMetadata](#ObjectMetadata)\}",
			description: "@yields List all files in the bucket",
			required: true
		},
		"file_exists": {
			type: "(self, path: [string](#string)) -> [boolean](#boolean)",
			description: "@yields Returns if a file exists",
			required: true
		},
		"download_file": {
			type: "(self, path: [string](#string), opts: [DownloadFileOpts](#DownloadFileOpts)?) -> [blob](#module.blob).[Blob](#Blob)",
			description: "@yields Downloads a file. The resulting file must fit into the VM's memory limit",
			required: true
		},
		"get_file_url": {
			type: "(self, path: [string](#string), expiry: [datetime](#module.datetime).[TimeDelta](#TimeDelta)) -> [string](#string)",
			description: "@yields Creates a presigned url for referring to the file",
			required: true
		},
		"upload_file": {
			type: "(self, path: [string](#string), data: [blob](#module.blob).[BlobTaker](#BlobTaker)) -> [nil](#nil)",
			description: "@yields Upload a file to a bucket",
			required: true
		},
		"delete_file": {
			type: "(self, path: [string](#string)) -> [nil](#nil)",
			description: "@yields Deletes a file from the bucket",
			required: true
		},
		"bucket_name": {
			type: "[string](#string)",
			description: "The buckets name",
			required: true
		},
	}}
/>
<div id="ObjectMetadata"></div>

## ObjectMetadata

Metadata about an object.

<details>
<summary>Raw Type</summary>

```luau
--- Metadata about an object.
type ObjectMetadata = {
	key: string,

	last_modified: datetime.DateTime?,

	size: number,

	etag: string?
}
```

</details>

<TypeTable
	type={{
		"key": {
			type: "[string](#string)",
			description: "",
			required: true
		},
		"last_modified": {
			type: "[datetime](#module.datetime).[DateTime](#DateTime)?",
			description: "",
			required: false
		},
		"size": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"etag": {
			type: "[string](#string)?",
			description: "",
			required: false
		},
	}}
/>
<div id="ObjectStorageReadRange"></div>

## ObjectStorageReadRange

<details>
<summary>Raw Type</summary>

```luau
type ObjectStorageReadRange = {
	read_start: number,

	read_end: number
}
```

</details>

<TypeTable
	type={{
		"read_start": {
			type: "[number](#number)",
			description: "",
			required: true
		},
		"read_end": {
			type: "[number](#number)",
			description: "",
			required: true
		},
	}}
/>
<div id="DownloadFileOpts"></div>

## DownloadFileOpts

<details>
<summary>Raw Type</summary>

```luau
type DownloadFileOpts = {
	range: ObjectStorageReadRange?
}
```

</details>

<TypeTable
	type={{
		"range": {
			type: "[ObjectStorageReadRange](#ObjectStorageReadRange)?",
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
type Plugin = Bucket
```

</details>

[Bucket](#Bucket)

