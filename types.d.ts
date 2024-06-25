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

// Mutually exclusive fields: https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

// Ensure at least one field is filled in: https://learn.microsoft.com/en-us/javascript/api/@azure/keyvault-certificates/requireatleastone?view=azure-node-latest
type RequireAtLeastOne<T> = {
    [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>
}[keyof T]