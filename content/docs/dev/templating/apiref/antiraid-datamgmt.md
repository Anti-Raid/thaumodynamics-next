---
title: "@antiraid/datamgmt"
description: "API reference for @antiraid/datamgmt"
---

<div id="@antiraid/datamgmt"></div>

# @antiraid/datamgmt

<div id="Types"></div>

## Types

<div id="TarArchive"></div>

## TarArchive

<details>
<summary>Raw Type</summary>

```luau
type TarArchive = {
	--- Takes out an entry from the tar archive by file name returning nil if not found
	takefile: (self: TarArchive, name: string) -> blob.Blob?,

	--- Adds an entry to the tar archive with the given file name and contents
	addfile: (self: TarArchive, name: string, contents: blob.BlobTaker) -> nil,

	--- Returns the names of all entries in the tar archive
	entries: (self: TarArchive) -> {string},

	--- Converts the tar archive to a Blob
	---
	--- This will destroy the tar archive (hence making it unusable for future Luau operations) 
	--- and return a Blob containing the tar archive data
	toblob: (self: TarArchive) -> blob.Blob
}
```

</details>

<TypeTable
	type={{
		"takefile": {
			type: "(self, name: [string](#string)) -> [blob](#module.blob).[Blob](#Blob)?",
			description: "Takes out an entry from the tar archive by file name returning nil if not found",
			required: true
		},
		"addfile": {
			type: "(self, name: [string](#string), contents: [blob](#module.blob).[BlobTaker](#BlobTaker)) -> [nil](#nil)",
			description: "Adds an entry to the tar archive with the given file name and contents",
			required: true
		},
		"entries": {
			type: "(self) -> \{[string](#string)\}",
			description: "Returns the names of all entries in the tar archive",
			required: true
		},
		"toblob": {
			type: "(self) -> [blob](#module.blob).[Blob](#Blob)",
			description: "Converts the tar archive to a BlobThis will destroy the tar archive (hence making it unusable for future Luau operations)and return a Blob containing the tar archive data",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="newblob"></div>

## newblob

Creates a new Blob from the given data

<details>
<summary>Function Signature</summary>

```luau
--- Creates a new Blob from the given data
function newblob(data: blob.BlobTaker) -> blob.Blob end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="data"></div>

### data

[blob](#module.blob).[BlobTaker](#BlobTaker)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[blob](#module.blob).[Blob](#Blob)<div id="base64encode"></div>

## base64encode

Encodes a Blob to a base64 string

<details>
<summary>Function Signature</summary>

```luau
--- Encodes a Blob to a base64 string
function base64encode(data: blob.BlobTaker) -> string end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="data"></div>

### data

[blob](#module.blob).[BlobTaker](#BlobTaker)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[string](#string)<div id="base64decode"></div>

## base64decode

Decodes a base64 string to a Blob

<details>
<summary>Function Signature</summary>

```luau
--- Decodes a base64 string to a Blob
function base64decode(str: string) -> blob.Blob end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="str"></div>

### str

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[blob](#module.blob).[Blob](#Blob)<div id="TarArchive"></div>

## TarArchive

Creates a new TarArchive with an optional initial data Blob to load the initial TarArchive's contents from

<details>
<summary>Function Signature</summary>

```luau
--- Creates a new TarArchive with an optional initial data Blob to load the initial TarArchive's contents from
function TarArchive(buf: blob.BlobTaker?) -> TarArchive end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="buf"></div>

### buf

*This field is optional and may not be specified*

[blob](#module.blob).[BlobTaker](#BlobTaker)?

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[TarArchive](#TarArchive)<div id="aes256encrypt"></div>

## aes256encrypt

Encrypts the Blob using AES256 encryption (Argon2id for key derivation)

Format: \`\`&lt;salt&gt;&lt;nonce&gt;&lt;ciphertext&gt;\`\`

<details>
<summary>Function Signature</summary>

```luau
--- Encrypts the Blob using AES256 encryption (Argon2id for key derivation)
--- Format: \`\`<salt><nonce><ciphertext>\`\`
function aes256encrypt(data: blob.BlobTaker, key: string) -> blob.Blob end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="data"></div>

### data

[blob](#module.blob).[BlobTaker](#BlobTaker)



<div id="key"></div>

### key

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[blob](#module.blob).[Blob](#Blob)<div id="aes256decrypt"></div>

## aes256decrypt

Decrypts the Blob using AES256 decryption (Argon2id for key derivation)

Format: \`\`&lt;salt&gt;&lt;nonce&gt;&lt;ciphertext&gt;\`\`

<details>
<summary>Function Signature</summary>

```luau
--- Decrypts the Blob using AES256 decryption (Argon2id for key derivation)
--- Format: \`\`<salt><nonce><ciphertext>\`\`
function aes256decrypt(data: blob.BlobTaker, key: string) -> blob.Blob end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="data"></div>

### data

[blob](#module.blob).[BlobTaker](#BlobTaker)



<div id="key"></div>

### key

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[blob](#module.blob).[Blob](#Blob)<div id="aes256decryptcustom"></div>

## aes256decryptcustom

Decrypts the Blob using AES256 decryption (Argon2id for key derivation)

Format: \`\`&lt;salt&gt;&lt;nonce&gt;&lt;ciphertext&gt;\`\`

<details>
<summary>Function Signature</summary>

```luau
--- Decrypts the Blob using AES256 decryption (Argon2id for key derivation)
--- Format: \`\`<salt><nonce><ciphertext>\`\`
function aes256decryptcustom(salt: blob.BlobTaker, nonce: blob.BlobTaker, ciphertext: blob.BlobTaker, key: string) -> blob.Blob end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="salt"></div>

### salt

[blob](#module.blob).[BlobTaker](#BlobTaker)



<div id="nonce"></div>

### nonce

[blob](#module.blob).[BlobTaker](#BlobTaker)



<div id="ciphertext"></div>

### ciphertext

[blob](#module.blob).[BlobTaker](#BlobTaker)



<div id="key"></div>

### key

[string](#string)

<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[blob](#module.blob).[Blob](#Blob)