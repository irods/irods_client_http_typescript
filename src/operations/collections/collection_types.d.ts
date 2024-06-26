/* Create */

/**
 * @param {string} lpath - The logical path to the collection
 * @param {boolean} create-intermediates
 */
type CollectionCreateParams = {
    lpath: string,
    "create-intermediates"?: 0 | 1
}

type CollectionCreateResponse = IrodsResponse & {
    created?: 0 | 1
}

/* Remove */

type CollectionRemoveParams = {
    lpath: string,
    recurse?: 0 | 1,
    "no-trash"?: 0 | 1
}

type CollectionRemoveResponse = IrodsResponse

/* Stat */

// GET request
type CollectionStatParams = {
    lpath: string,
    ticket?: string
}

type CollectionStatResponse = IrodsResponse & {
    type: string,
    inheritance_enabled: boolean,
    permissions: [Permission],
    registered: boolean,
    modified_at: number
}

/* List */

// GET request
type CollectionListParams = {
    lpath: string,
    recurse?: 0 | 1,
    ticket?: string
}

type CollectionListResponse = IrodsResponse & {
    entries: [string]
}

/* Set Permission */

type CollectionSetPermissionParams = {
    lpath: string,
    "entity-name": string,
    permission: "null" | "read" | "write" | "own",
    admin?: 0 | 1
}

type CollectionSetPermissionResponse = IrodsResponse

/* Set Inheritance */

type CollectionSetInheritanceParams = {
    lpath: string,
    enable: 0 | 1,
    admin?: 0 | 1
}

type CollectionSetInheritanceResponse = IrodsResponse

/* Modify Permissions */

type CollectionModifyPermissionsParams = {
    lpath: string,
    operations: [ModifyPermissionsOperation],
    admin?: 0 | 1
}

type CollectionModifyPermissionsResponse = IrodsResponse

/* Modify Metadata */

type CollectionModifyMetadataParams = {
    lpath: string,
    operations: [AVUOperation],
    admin?: 0 | 1
}

type CollectionModifyMetadataResponse = IrodsResponse

/* Rename */

type CollectionRenameParams = {
    "old-lpath": string,
    "new-lpath": string
}

type CollectionRenameResponse = IrodsResponse

/* Touch */

type CollectionTouchParams = {
    lpath: string,
    "seconds-since-epoch"?: number,
    reference?: string
}

type CollectionTouchResponse = IrodsResponse