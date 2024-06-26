/* Create User */

type UserCreateParams = {
    name: string;
    zone: string;
    'user-type'?: "rodsuser" | "groupadmin" | "rodsadmin";
}

type UserCreateResponse = IrodsResponse

/* Remove User */

type UserRemoveParams = {
    name: string;
    zone: string;
}

type UserRemoveResponse = IrodsResponse


/* Set User Password */

type UserSetPasswordParams = {
    name: string,
    zone: string,
    "new-password": string
}

type UserSetPasswordResponse = IrodsResponse

/* Set User Type */

type UserSetTypeParams = {
    name: string,
    zone: string,
    "new-user-type": "rodsuser" | "groupadmin" | "rodsadmin";
}

type UserSetTypeResponse = IrodsResponse

/* Create Group */

type GroupCreateParams = {
    name: string
}

type GroupCreateResponse = IrodsResponse

/* Remove Group */

type GroupRemoveParams = {
    name: string
}

type GroupRemoveResponse = IrodsResponse

/* Add User to Group */

type UserAddToGroupParams = {
    user: string,
    zone: string,
    group: string
}

type UserAddToGroupResponse = IrodsResponse

/* Remove User from Group */

type UserRemoveFromGroupParams = {
    user: string,
    zone: string,
    group: string
}

type UserRemoveFromGroupResponse = IrodsResponse

/* List Users */

type User = {
    name: string,
    zone: string
}

type UsersResponse = IrodsResponse & {
    users: [User]
}

/* List Groups */

type Group = [string, string, string]

type GroupsResponse = IrodsResponse & {
    groups: [Group]
}

/* Is User Member of Group */

type UserMemberOfGroupParams = {
    group: string,
    user: string,
    zone: string
}

type UserMemberOfGroupResponse = IrodsResponse & {
    is_member: boolean
}

/* User/Group Stat */

type UserGroupStatParams = {
    name: string,
    zone: string
}

type UserGroupStatResponse = IrodsResponse & {
    exists: boolean,
    id: string,
    local_unique_name: string,
    type: string
}

/* Group Modify */

type UserGroupModifyMetadata = {
    name: string,
    operations: [AVUOperation]
}

type UserGroupModifyMetadataResponse = IrodsResponse