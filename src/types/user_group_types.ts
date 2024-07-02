import type { IrodsResponse, AVUOperation } from "./general_types.js"

/* Create User */

export type UserCreateParams = {
    name: string
    zone: string
    'user-export type'?: 'rodsuser' | 'groupadmin' | 'rodsadmin'
}

export type UserCreateResponse = IrodsResponse

/* Remove User */

export type UserRemoveParams = {
    name: string
    zone: string
}

export type UserRemoveResponse = IrodsResponse

/* Set User Password */

export type UserSetPasswordParams = {
    name: string
    zone: string
    'new-password': string
}

export type UserSetPasswordResponse = IrodsResponse

/* Set User export Type */

export type UserSetTypeParams = {
    name: string
    zone: string
    'new-user-export type': 'rodsuser' | 'groupadmin' | 'rodsadmin'
}

export type UserSetTypeResponse = IrodsResponse

/* Create Group */

export type GroupCreateParams = {
    name: string
}

export type GroupCreateResponse = IrodsResponse

/* Remove Group */

export type GroupRemoveParams = {
    name: string
}

export type GroupRemoveResponse = IrodsResponse

/* Add User to Group */

export type UserAddToGroupParams = {
    user: string
    zone: string
    group: string
}

export type UserAddToGroupResponse = IrodsResponse

/* Remove User from Group */

export type UserRemoveFromGroupParams = {
    user: string
    zone: string
    group: string
}

export type UserRemoveFromGroupResponse = IrodsResponse

/* List Users */

export type User = {
    name: string
    zone: string
}

export type UsersResponse = IrodsResponse & {
    users: [User]
}

/* List Groups */

export type Group = [string, string, string]

export type GroupsResponse = IrodsResponse & {
    groups: [Group]
}

/* Is User Member of Group */

export type UserMemberOfGroupParams = {
    group: string
    user: string
    zone: string
}

export type UserMemberOfGroupResponse = IrodsResponse & {
    is_member: boolean
}

/* User/Group Stat */

export type UserGroupStatParams = {
    name: string
    zone: string
}

export type UserGroupStatResponse = IrodsResponse & {
    exists: boolean
    id: string
    local_unique_name: string
    type: string
}

/* Group Modify */

export type UserGroupModifyMetadata = {
    name: string
    operations: [AVUOperation]
}

export type UserGroupModifyMetadataResponse = IrodsResponse
