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
    "entity_name": string,
    "acl": string
}