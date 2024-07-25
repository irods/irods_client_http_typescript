// Mutually exclusive fields: https://stackoverflow.com/questions/42123407/does-export typescript-support-mutually-exclusive-export types
export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

export type XOR<T, U> = T | U extends object
    ? (Without<T, U> & U) | (Without<U, T> & T)
    : T | U

// Ensure at least one field is filled in: https://learn.microsoft.com/en-us/javascript/api/@azure/keyvault-certificates/requireatleastone?view=azure-node-latest
export type RequireAtLeastOne<T> = {
    [K in keyof T]-?: Required<Pick<T, K>> &
        Partial<Pick<T, Exclude<keyof T, K>>>
}[keyof T]

type BasicUser = {
    username: string
    password: string
}

type OidcUser = {
    oidc_token: string
}

export type User = XOR<BasicUser, OidcUser>

// Format: http://<host>:<port>/irods-http-api/<version>
export type URLComponentsType = {
    host: string
    port: string
    version: string
}

export type AVUOperation = {
    operation: 'add' | 'remove'
    attribute: string
    value: string
    units?: string
}

export type ModifyPermissionsOperation = {
    entity_name: string
    acl: 'null' | 'read' | 'write' | 'own'
}

export type IrodsResponse = {
    irods_response: {
        status_code: number
        status_message?: string
        failed_operation?: {
            operation: AVUOperation | ModifyPermissionsOperation
            operation_index: number
            status_message: string
        }
    }
}

/* 
    Generic type for wrapper responses, where T is a type parameter and can be used as follows:
        -   async operation_function(): HTTPResponse<CollectionCreateResponse> {
		        ...
	        }
    The data structure for the return type of operation_function will be equivalent to:
        {
            status: number,
            data: {
                irods_response: ...
                created?: boolean
            }
        }
*/

export type HTTPResponse<T> = {
    status: number
    data: T
}

export type StatusFields = {
    http_status: number
    message: string
}

export type Permission = {
    name: string
    zone: string
    type: string
    perm: string
}

export type ServerInfo = {
    api_version: string
    build: string
    genquery2_enabled: boolean
    irods_zone: string
    max_number_of_parallel_write_streams: number
    max_number_of_rows_per_catalog_query: number
    max_size_of_request_body_in_bytes: number
    openid_connect_enabled: boolean
}
