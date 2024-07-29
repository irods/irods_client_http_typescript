import type { IrodsResponse, AVUOperation } from "./general_types.js"

/* Create User */

export type UserCreateParams = {
    name: string
    zone: string
    'user-type'?: 'rodsuser' | 'groupadmin' | 'rodsadmin'
}

export type UserCreateResponse = {
    irods_response: IrodsResponse
}

/* Remove User */

export type UserRemoveParams = {
    name: string
    zone: string
}

export type UserRemoveResponse = {
    irods_response: IrodsResponse
}

/* Set User Password */

export type UserSetPasswordParams = {
    name: string
    zone: string
    'new-password': string
}

export type UserSetPasswordResponse = {
    irods_response: IrodsResponse
}

/* Set User export Type */

export type UserSetTypeParams = {
    name: string
    zone: string
    'new-user-type': 'rodsuser' | 'groupadmin' | 'rodsadmin'
}

export type UserSetTypeResponse = {
    irods_response: IrodsResponse
}

/* Create Group */

export type GroupCreateParams = {
    name: string
}

export type GroupCreateResponse = {
    irods_response: IrodsResponse
}

/* Remove Group */

export type GroupRemoveParams = {
    name: string
}

export type GroupRemoveResponse = {
    irods_response: IrodsResponse
}

/* Add User to Group */

export type UserAddToGroupParams = {
    user: string
    zone: string
    group: string
}

export type UserAddToGroupResponse = {
    irods_response: IrodsResponse
}

/* Remove User from Group */

export type UserRemoveFromGroupParams = {
    user: string
    zone: string
    group: string
}

export type UserRemoveFromGroupResponse = {
    irods_response: IrodsResponse
}

/* List Users */

export type User = {
    name: string
    zone: string
}

export type UsersResponse = {
    irods_response: IrodsResponse
    users: [User]
}

/* List Groups */

export type Group = [string, string, string]

export type GroupsResponse = {
    irods_response: IrodsResponse
    groups: [Group]
}

/* Is User Member of Group */

export type UserMemberOfGroupParams = {
    group: string
    user: string
    zone: string
}

export type UserMemberOfGroupResponse = {
    irods_response: IrodsResponse
    is_member: boolean
}

/* User/Group Stat */

export type UserGroupStatParams = {
    name: string
    zone: string
}

export type UserGroupStatResponse = {
    irods_response: IrodsResponse
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

export type UserGroupModifyMetadataResponse = {
    irods_response: IrodsResponse
}
