import type { IrodsResponse, AVUOperation } from './general_types.js'

/* Create */

export type ResourceCreateParams = {
    name: string
    type: string
    host?: string
    'vault-path'?: string
    context?: string
}

export type ResourceCreateResponse = {
    irods_response: IrodsResponse
}

/* Remove */

export type ResourceRemoveParams = {
    name: string
}

export type ResourceRemoveResponse = {
    irods_response: IrodsResponse
}

/* Modify */

export type ResourceModifyProperty =
    | {
          property:
              | 'name'
              | 'type'
              | 'host'
              | 'vault_path'
              | 'context'
              | 'free_space'
              | 'comments'
              | 'information'
          value: string
      }
    | {
          property: 'status' // If modifying property "status", restrict values to only be "up" or "down"
          value: 'up' | 'down'
      }

export type ResourceModifyParams = {
    name: string
} & ResourceModifyProperty

export type ResourceModifyResponse = {
    irods_response: IrodsResponse
}

/* Add Child */

export type ResourceAddChildParams = {
    'parent-name': string
    'child-name': string
    context?: string
}

export type ResourceAddChildResponse = {
    irods_response: IrodsResponse
}

/* Remove Child */

export type ResourceRemoveChildParams = {
    'parent-name': string
    'child-name': string
}

export type ResourceRemoveChildResponse = {
    irods_response: IrodsResponse
}

/* Rebalance */

export type ResourceRebalanceParams = {
    name: string
}

export type ResourceRebalanceResponse = {
    irods_response: IrodsResponse
}

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

export type ResourceStatResponse = {
    irods_response: IrodsResponse
    exists: boolean
    info: ResourceInfo
}

/* ModifyMetadata */

export type ResourceModifyMetadataParams = {
    name: string
    operations: [AVUOperation]
}

export type ResourceModifyMetadataResponse = {
    irods_response: IrodsResponse
}
