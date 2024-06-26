// Collections

/* Create */

/**
 * @param {string} lpath - The logical path to the collection
 * @param {boolean} create-intermediates
 */
type CollectionCreateParams = {
    lpath: string,
    "create-intermediates"?: 0 | 1
}

type CollectionCreateResponse = {
    irods_response: IrodsResponse
    created?: 0 | 1
}

/* Remove */

type CollectionRemoveParams = {
    lpath: string,
    recurse?: 0 | 1,
    "no-trash"?: 0 | 1
}

type CollectionRemoveResponse = {
    irods_response: IrodsResponse
}

/* Stat */

// GET request
type CollectionStatParams = {
    lpath: string,
    ticket?: string
}

type CollectionStatResponse = {
    irods_response: IrodsResponse,
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

type CollectionListResponse = {
    irods_response: IrodsResponse,
    entries: [string]
}

/* Set Permission */

type CollectionSetPermissionParams = {
    lpath: string,
    "entity-name": string,
    permission: "null" | "read" | "write" | "own",
    admin?: 0 | 1
}

type CollectionSetPermissionResponse = {
    irods_response: IrodsResponse
}

/* Set Inheritance */

type CollectionSetInheritanceParams = {
    lpath: string,
    enable: 0 | 1,
    admin?: 0 | 1
}

type CollectionSetInheritanceResponse = {
    irods_response: IrodsResponse
}

/* Modify Permissions */

type CollectionModifyPermissionsParams = {
    lpath: string,
    operations: [ModifyPermissionsOperation],
    admin?: 0 | 1
}

type CollectionModifyFailure = {
    failed_operation?: {
        operation: ModifyPermissionsOperation
    },
    operation_index?: number
    status_message?: string
}

type CollectionModifyPermissionsResponse = {
    irods_response: IrodsResponse & CollectionModifyFailure
}

/* Modify Metadata */

type CollectionModifyMetadataParams = {
    lpath: string,
    operations: [AVUOperation],
    admin?: 0 | 1
}

type CollectionModifyMetadataFailure = {
    failed_operation?: {
        operation: AVUOperation
    },
    operation_index?: number,
    status_message?: string
}

type CollectionModifyMetadataResponse = {
    irods_response: IrodsResponse & CollectionModifyMetadataFailure
}

/* Rename */

type CollectionRenameParams = {
    "old-lpath": string,
    "new-lpath": string
}

type CollectionRenameResponse = {
    irods_response: IrodsResponse
}

/* Touch */

type CollectionTouchParams = {
    lpath: string,
    "seconds-since-epoch"?: number,
    reference?: string
}

type CollectionTouchResponse = {
    irods_response: IrodsResponse
}