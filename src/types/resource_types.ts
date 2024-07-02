import type { IrodsResponse, AVUOperation } from "./general_types.js"

/* Create */

export type ResourceCreateParams = {
    name: string
    type:
        | 'compound'
        | 'deferred'
        | 'load_balanced'
        | 'mockarchive'
        | 'nonblocking'
        | 'passthru'
        | 'random'
        | 'replication'
        | 'structfile'
        | 'univmss'
        | 'unixfilesystem'
    host?: string
    'vault-path'?: string
    context?: string
}

export type ResourceCreateResponse = IrodsResponse

/* Remove */

export type ResourceRemoveParams = {
    name: string
}

export type ResourceRemoveResponse = IrodsResponse

/* Add Child */

export type ResourceAddChildParams = {
    'parent-name': string
    'child-name': string
    context?: string
}

export type ResourceAddChildResponse = IrodsResponse

/* Remove Child */

export type ResourceRemoveChildParams = {
    'parent-name': string
    'child-name': string
}

export type ResourceRemoveChildResponse = IrodsResponse

/* Rebalance */

export type ResourceRebalanceParams = {
    name: string
}

export type ResourceRebalanceResponse = IrodsResponse

/* Stat */

// GET request
export type ResourceStatParams = {
    name: string
}

export type ResourceInfo = {
    id: string
    name: string
    type: string
    zone: string
    host: string
    vault_path: string
    status: string
    context: string
    comments: string
    information: string
    free_space: string
    free_space_last_modified: number
    parent_id: string
    created: number
    last_modified: number
    last_modified_millis: number
}

export type ResourceStatResponse = IrodsResponse & {
    exists: boolean
    info: ResourceInfo
}

/* ModifyMetadata */

export type ResourceModifyMetadataParams = {
    name: string
    operations: [AVUOperation]
}

export type ResourceModifyMetadataResponse = IrodsResponse
