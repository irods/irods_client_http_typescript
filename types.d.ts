// Format: http://<host>:<port>/irods-http-api/<version>
type URLComponentsType = {
    host: string,
    port: string,
    version: string
}

type AVUOperation = {
    operation: "add" | "remove",
    attribute: string,
    value: string,
    units?: string
}

type ModifyPermissionsOperation = {
    entity_name: string,
    acl: "null" | "read" | "write" | "own"
}

type IrodsResponse = {
    irods_response: {
        status_code: number,
        status_message?: string,
        failed_operation?: {
            operation: AVUOperation | ModifyPermissionsOperation,
            operation_index: number,
            status_message: string
        }
    }
}

type Permission = {
    name: string,
    zone: string,
    type: string,
    perm: string
}

type ServerInfo = {
    api_version: string,
    build: string,
    genquery2_enabled: boolean,
    irods_zone: string,
    max_number_of_parallel_write_streams: number,
    max_number_of_rows_per_catalog_query: number,
    max_size_of_request_body_in_bytes: number,
    openid_connect_enabled: boolean
}

// Mutually exclusive fields: https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

// Ensure at least one field is filled in: https://learn.microsoft.com/en-us/javascript/api/@azure/keyvault-certificates/requireatleastone?view=azure-node-latest
type RequireAtLeastOne<T> = {
    [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>
}[keyof T]