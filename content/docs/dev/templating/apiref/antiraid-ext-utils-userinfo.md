---
title: "@antiraid-ext/utils/userinfo"
description: "API reference for @antiraid-ext/utils/userinfo"
---

<div id="@antiraid-ext/utils/userinfo"></div>

# @antiraid-ext/utils/userinfo

<div id="Types"></div>

## Types

<div id="GuildRolePermission"></div>

## GuildRolePermission

<details>
<summary>Raw Type</summary>

```luau
type GuildRolePermission = {
	position: Kittycat.PartialStaffPosition,

	raw: kv.KvRecord
}
```

</details>

<TypeTable
	type={{
		"position": {
			type: "[Kittycat](#module.Kittycat).[PartialStaffPosition](#PartialStaffPosition)",
			description: "",
			required: true
		},
		"raw": {
			type: "[kv](#module.kv).[KvRecord](#KvRecord)",
			description: "",
			required: true
		},
	}}
/>
<div id="UserInfo"></div>

## UserInfo

@class UserInfo



Represents a summary of a users permission related

information on AntiRaid



<details>
<summary>Raw Type</summary>

```luau
--- @class UserInfo
---
--- Represents a summary of a users permission related 
--- information on AntiRaid
---
--- @field userid discord.Snowflake The ID of the user
--- @field discord_permissions discord.Snowflake The users discord permissions
--- @field kittycat_staff_permissions Kittycat.StaffPermissions The users kittycat staff permissions
--- @field kittycat_resolved_permissions {Kittycat.Permission} The users resolved kittycat permissions
--- @field guild_owner_id discord.Snowflake The ID of the guild owner
--- @field guild_roles {[discord.Snowflake]: discord.GuildRoleObject} The users guild roles (may not be present if guildRolesNeeded is not set)
--- @field member_roles {discord.Snowflake} The users member roles
--- @field guild_permissions {Kittycat.PartialStaffPosition} The guild permissions configured on the server
type UserInfo = {
	userid: discord.Snowflake,

	discord_permissions: discord.Snowflake,

	kittycat_staff_permissions: Kittycat.StaffPermissions,

	kittycat_resolved_permissions: {Kittycat.Permission},

	guild_owner_id: discord.Snowflake,

	guild_roles: {
		[discord.Snowflake]: discord.GuildRoleObject
	}?,

	member_roles: {discord.Snowflake},

	guild_permissions: {
		[discord.Snowflake]: GuildRolePermission
	},

	permission_override_entry: MemberPermissionOverrideEntry
}
```

</details>

<TypeTable
	type={{
		"userid": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"discord_permissions": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"kittycat_staff_permissions": {
			type: "[Kittycat](#module.Kittycat).[StaffPermissions](#StaffPermissions)",
			description: "",
			required: true
		},
		"kittycat_resolved_permissions": {
			type: "\{[Kittycat](#module.Kittycat).[Permission](#Permission)\}",
			description: "",
			required: true
		},
		"guild_owner_id": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"guild_roles": {
			type: "\{[discord.Snowflake]: [discord](#module.discord).[GuildRoleObject](#GuildRoleObject)\}?",
			description: "",
			required: false
		},
		"member_roles": {
			type: "\{[discord](#module.discord).[Snowflake](#Snowflake)\}",
			description: "",
			required: true
		},
		"guild_permissions": {
			type: "\{[discord.Snowflake]: [GuildRolePermission](#GuildRolePermission)\}",
			description: "",
			required: true
		},
		"permission_override_entry": {
			type: "[MemberPermissionOverrideEntry](#MemberPermissionOverrideEntry)",
			description: "",
			required: true
		},
	}}
/>
<div id="Stage1Data"></div>

## Stage1Data

Stage1Data is a basic collation of user info that can then be cheaply expanded into a full UserInfo object

<details>
<summary>Raw Type</summary>

```luau
--- Stage1Data is a basic collation of user info that can then be cheaply expanded into a full UserInfo object
type Stage1Data = {
	resolvedPerms: discord.Snowflake,

	memberRoles: {discord.Snowflake},

	guildRoles: {discord.GuildRoleObject},

	guildOwnerId: discord.Snowflake,

	pathUsed: string
}
```

</details>

<TypeTable
	type={{
		"resolvedPerms": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"memberRoles": {
			type: "\{[discord](#module.discord).[Snowflake](#Snowflake)\}",
			description: "",
			required: true
		},
		"guildRoles": {
			type: "\{[discord](#module.discord).[GuildRoleObject](#GuildRoleObject)\}",
			description: "",
			required: true
		},
		"guildOwnerId": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"pathUsed": {
			type: "[string](#string)",
			description: "",
			required: true
		},
	}}
/>
<div id="MemberPermissionOverrideEntry"></div>

## MemberPermissionOverrideEntry

<details>
<summary>Raw Type</summary>

```luau
type MemberPermissionOverrideEntry = {
	userid: discord.Snowflake,

	perm_overrides: {Kittycat.Permission},

	raw: kv.KvRecord
}
```

</details>

<TypeTable
	type={{
		"userid": {
			type: "[discord](#module.discord).[Snowflake](#Snowflake)",
			description: "",
			required: true
		},
		"perm_overrides": {
			type: "\{[Kittycat](#module.Kittycat).[Permission](#Permission)\}",
			description: "",
			required: true
		},
		"raw": {
			type: "[kv](#module.kv).[KvRecord](#KvRecord)",
			description: "",
			required: true
		},
	}}
/>
<div id="UserInfoManager"></div>

## UserInfoManager

UserInfoManager is a utility for fetching user info in a performant way

<details>
<summary>Raw Type</summary>

```luau
--- UserInfoManager is a utility for fetching user info in a performant way
type UserInfoManager = {
	--- Gets the Stage1Data for a user (basic collation of user info)
	--- @param user_id discord.Snowflake The ID of the user to get the UserInfo for
	--- @param interaction? discord.InteractionObject Optional interaction object to use for fetching permissions (can speed up fetching/remove unnecessary API calls)
	--- @return Stage1Data The Stage1Data for the user
	getStage1Data: (user_id: discord.Snowflake, interaction: discord.InteractionObject?) -> Stage1Data,

	--- Gets the UserInfo for a user (expansion of Stage1Data)
	--- @param user_id discord.Snowflake The ID of the user to get the UserInfo for
	--- @param interaction? discord.InteractionObject Optional interaction object to use for fetching permissions (can speed up fetching/remove unnecessary API calls)
	--- @return UserInfo The UserInfo for the user
	get: (user_id: discord.Snowflake, interaction: discord.InteractionObject?) -> UserInfo,

	--- Gets the guild permissions configured
	--- @return {Kittycat.PartialStaffPosition} The permissions globally set for the guild
	getGuildPermissions: () -> {GuildRolePermission},

	--- Returns the data of a single role
	--- @return GuildRolePermission The permissions globally set for the specific role on the guild
	getGuildPermissionForRole: (roleid: discord.Snowflake) -> GuildRolePermission?,

	--- Sets the guild permission for a position
	--- @param position Kittycat.PartialStaffPosition The position to set the permissions for
	--- @return nil
	setGuildPermission: (position: Kittycat.PartialStaffPosition) -> nil,

	--- Reorders the guild permissions for a list of roles
	--- @param reorderList { {role_id: discord.Snowflake, index: number} } The list of roles to reorder with their new indices
	--- @return nil
	applyReorder: (reorderList: {{
		role_id: discord.Snowflake,

		index: number
	}}) -> nil,

	--- Deletes the guild permission for a role
	--- @param roleid discord.Snowflake The ID of the role to delete the permissions
	--- @return nil
	deleteGuildPermission: (roleid: discord.Snowflake) -> nil,

	--- Gets all member permission overrides available
	---
	--- @return {MemberPermissionOverwriteEntry} The permission overrides available on the server
	getMemberPermissionOverrides: () -> {MemberPermissionOverrideEntry},

	--- Gets the member permission overrides for a user
	--- @param userid discord.Snowflake The ID of the user to get the overrides for
	--- @return {Kittycat.Permission} The member permission overrides for the user
	getMemberPermissionOverridesForUser: (userid: discord.Snowflake) -> MemberPermissionOverrideEntry,

	--- Sets the member permission overrides for a user
	--- @param userid discord.Snowflake The ID of the user to set the overrides for
	--- @param permissions {Kittycat.Permission} The permissions to set for the user
	--- @return nil
	setMemberPermissionOverrides: (userid: discord.Snowflake, permissions: {Kittycat.Permission}) -> nil,

	--- Deletes the member permission overrides for a user
	--- @param userid discord.Snowflake The ID of the user to delete the overrides for
	--- @return nil
	deleteMemberPermissionOverrides: (userid: discord.Snowflake) -> nil
}
```

</details>

<TypeTable
	type={{
		"getStage1Data": {
			type: "(user_id: [discord](#module.discord).[Snowflake](#Snowflake), interaction: [discord](#module.discord).[InteractionObject](#InteractionObject)?) -> [Stage1Data](#Stage1Data)",
			description: "Gets the Stage1Data for a user (basic collation of user info)",
			required: true
		},
		"get": {
			type: "(user_id: [discord](#module.discord).[Snowflake](#Snowflake), interaction: [discord](#module.discord).[InteractionObject](#InteractionObject)?) -> [UserInfo](#UserInfo)",
			description: "Gets the UserInfo for a user (expansion of Stage1Data)",
			required: true
		},
		"getGuildPermissions": {
			type: "() -> \{[GuildRolePermission](#GuildRolePermission)\}",
			description: "Gets the guild permissions configured",
			required: true
		},
		"getGuildPermissionForRole": {
			type: "(roleid: [discord](#module.discord).[Snowflake](#Snowflake)) -> [GuildRolePermission](#GuildRolePermission)?",
			description: "Returns the data of a single role",
			required: true
		},
		"setGuildPermission": {
			type: "(position: [Kittycat](#module.Kittycat).[PartialStaffPosition](#PartialStaffPosition)) -> [nil](#nil)",
			description: "Sets the guild permission for a position",
			required: true
		},
		"applyReorder": {
			type: "(reorderList: \{\{role_id: [discord](#module.discord).[Snowflake](#Snowflake), index: [number](#number)\}\}) -> [nil](#nil)",
			description: "Reorders the guild permissions for a list of roles",
			required: true
		},
		"deleteGuildPermission": {
			type: "(roleid: [discord](#module.discord).[Snowflake](#Snowflake)) -> [nil](#nil)",
			description: "Deletes the guild permission for a role",
			required: true
		},
		"getMemberPermissionOverrides": {
			type: "() -> \{[MemberPermissionOverrideEntry](#MemberPermissionOverrideEntry)\}",
			description: "Gets all member permission overrides available",
			required: true
		},
		"getMemberPermissionOverridesForUser": {
			type: "(userid: [discord](#module.discord).[Snowflake](#Snowflake)) -> [MemberPermissionOverrideEntry](#MemberPermissionOverrideEntry)",
			description: "Gets the member permission overrides for a user",
			required: true
		},
		"setMemberPermissionOverrides": {
			type: "(userid: [discord](#module.discord).[Snowflake](#Snowflake), permissions: \{[Kittycat](#module.Kittycat).[Permission](#Permission)\}) -> [nil](#nil)",
			description: "Sets the member permission overrides for a user",
			required: true
		},
		"deleteMemberPermissionOverrides": {
			type: "(userid: [discord](#module.discord).[Snowflake](#Snowflake)) -> [nil](#nil)",
			description: "Deletes the member permission overrides for a user",
			required: true
		},
	}}
/>
<div id="Functions"></div>

# Functions

<div id="UserInfoManager"></div>

## UserInfoManager

<details>
<summary>Function Signature</summary>

```luau
function UserInfoManager(ctx: Primitives.TemplateContext) -> UserInfoManager end
```

</details>

<div id="Arguments"></div>

## Arguments

<div id="ctx"></div>

### ctx

[Primitives](#module.Primitives).[TemplateContext](#TemplateContext)



<div id="Returns"></div>

## Returns

<div id="ret1"></div>

### ret1

[UserInfoManager](#UserInfoManager)