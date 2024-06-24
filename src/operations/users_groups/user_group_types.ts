type UserCreateParams = {
    name: string;
    zone: string;
    'user-type'?: "rodsuser" | "groupadmin" | "rodsadmin";
}

type UserRemoveParams = {
    name: string;
    zone: string;
}

type UserSetPasswordParams = {
    name: string,
    zone: string,
    "new-password": string
}

type UserSetTypeParams = {
    name: string,
    zone: string,
    "new-user-type": "rodsuser" | "groupadmin" | "rodsadmin";
}

type GroupCreateParams = {
    name: string
}

type GroupRemoveParams = {
    name: string
}

type UserAddToGroupParams = {
    user: string,
    zone: string,
    group: string
}

type UserRemoveFromGroupParams = {
    user: string,
    zone: string,
    group: string
}

type UserMemberOfGroupParams = {
    group: string,
    user: string,
    zone: string
}

type UserGroupStatParams = {
    name: string,
    zone: string
}

type UserGroupModifyMetadata = {
    name: string,
    operations: [AVUOperation]
}