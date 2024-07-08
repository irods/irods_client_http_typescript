import type { IrodsResponse, ModifyPermissionsOperation, Permission, AVUOperation, XOR, RequireAtLeastOne } from "./general_types.js"

/* Touch */

export type DataObjectTouchParams = {
    lpath: string
    'no-create'?: 0 | 1
    'replica-number'?: number
    'leaf-resource'?: string
    'seconds-since-epoch'?: number
    reference?: string
}

export type DataObjectTouchResponse = IrodsResponse

/* Remove */

export type DataObjectRemoveParams = {
    lpath: string
    'catalog-only': 0 | 1
    'no-trash'?: 0 | 1
    admin?: 0 | 1
}

export type DataObjectRemoveResponse = IrodsResponse

/* Calculate Checksum */

export type DataObjectCalculateChecksumParams = {
    lpath: string
    resource?: string
    'replica-number'?: number
    force?: 0 | 1
    all?: 0 | 1
    admin?: 0 | 1
}

export type DataObjectCalculateChecksumResponse = IrodsResponse & {
    checksum: string
}

/* Verify Checksum */

export type DataObjectVerifyChecksumParams = {
    lpath: string
    resource?: string
    'replica-number'?: number
    'compute-checksums'?: 0 | 1
    admin?: 0 | 1
}

export type DataObjectVerifyChecksumResponse = IrodsResponse & {
    results?: object
    r_error_info: [{ status: number; message: string }]
}

/* Stat */

export type DataObjectStatParams = {
    lpath: string
    ticket?: string
}

export type DataObjectStatResponse = IrodsResponse & {
    type: string
    permissions: [Permission]
    size: number
    checksum: string
    registered: boolean
    modified_at: number
}

/* Rename */

export type DataObjectRenameParams = {
    'old-lpath': string
    'new-lpath': string
}

export type DataObjectRenameResponse = IrodsResponse

/* Copy */

export type DataObjectCopyParams = {
    'src-lpath': string
    'dst-lpath': string
    'src-resource'?: string
    'dst-resource'?: string
    overwrite?: 0 | 1
}

export type DataObjectCopyResponse = IrodsResponse

/* Replicate */

export type DataObjectReplicateParams = {
    lpath: string
    'src-resource': string
    'dst-resource': string
    admin?: 0 | 1
}

export type DataObjectReplicateResponse = IrodsResponse

/* Trim */

export type DataObjectTrimParams = {
    lpath: string
    'replica-number': number
    'catalog-only'?: 0 | 1
    admin?: 0 | 1
}

export type DataObjectTrimResponse = IrodsResponse

/* Register */

export type DataObjectRegisterParams = {
    lpath: string
    ppath: string
    resource: string
    'as-additional-replica'?: 0 | 1
    'data-size'?: number
    checksum?: string
}

export type DataObjectRegisterResponse = IrodsResponse

/* Read */

export type DataObjectReadParams = {
    lpath: string
    offset?: number
    count?: number
    ticket?: string
}

export type DataObjectReadResponse = string

/* Write */

export type DataObjectWriteParams = {
    lpath: string
    resource?: string
    offset?: number
    truncate?: 0 | 1
    append?: 0 | 1
    bytes: Buffer // You can use Buffer for binary data
    'parallel-write-handle'?: string
    'stream-index'?: number
}

export type DataObjectWriteResponse = IrodsResponse

/* Parallel Write Init */

export type DataObjectParallelWriteInitParams = {
    lpath: string
    'stream-count': number
    truncate?: 0 | 1
    append?: 0 | 1
    ticket?: string
}

export type DataObjectParallelWriteInitResponse = IrodsResponse & {
    parallel_write_handle: string
}

/* Parallel Write Shutdown */

export type DataObjectParallelWriteShutdownParams = {
    'parallel-write-handle': string
}

export type DataObjectParallelWriteShutdownResponse = IrodsResponse

/* Modify Metadata */

export type DataObjectModifyMetadataParams = {
    lpath: string
    operations: [AVUOperation]
    admin?: 0 | 1
}

export type DataObjectModifyMetadataResponse = IrodsResponse

/* Set Permission */

export type DataObjectSetPermissionParams = {
    lpath: string
    'entity-name': string
    permission: 'null' | 'read' | 'write' | 'own'
    admin?: 0 | 1
}

export type DataObjectSetPermissionResponse = IrodsResponse

/* Modify Permissions */

export type DataObjectModifyPermissionsParams = {
    lpath: string
    operations: [ModifyPermissionsOperation]
    admin?: 0 | 1
}

export type DataObjectModifyPermissionsResponse = IrodsResponse

/* Modify Replica */

// Separate resource hierarchy and replica number, make them mutually exclusive fields

export type ResourceHierarchyexportType = {
    'resource-hierarchy': string
}

export type ReplicaNumberexportType = {
    'replica-number': number
}

export type DataObjectModifyReplicaOptionalParams = {
    'new-data-checksum'?: string
    'new-data-comments'?: string
    'new-data-create-time'?: number
    'new-data-expiry'?: number
    'new-data-mode'?: string
    'new-data-modify-time'?: string
    'new-data-path'?: string
    'new-data-replica-number'?: number
    'new-data-replica-status'?: number
    'new-data-resource-id'?: number
    'new-data-size'?: number
    'new-data-status'?: string
    'new-data-export type-name'?: string
    'new-data-version'?: string
}

export type DataObjectModifyReplicaBaseParams = {
    lpath: string
}

// Ensure mutually exclusive fields of "resource-hierarchy" and "replica-number", and that at least one optional field is filled in
export type DataObjectModifyReplicaParams = DataObjectModifyReplicaBaseParams &
    XOR<ResourceHierarchyexportType, ReplicaNumberexportType> &
    RequireAtLeastOne<DataObjectModifyReplicaOptionalParams>

export type DataObjectModifyReplicaResponse = IrodsResponse
