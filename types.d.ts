// Format: http://<host>:<port>/irods-http-api/<version>
type URLComponentsType = {
    host: string,
    port: string,
    version: string
}

type ResourceCreateData = {
    op: "create",
    name: string,
    type: "compound" | "deferred" | "load_balanced" |
    "mockarchive" | "nonblocking" | "passthru" |
    "random" | "replication" | "structfile" |
    "univmss" | "unixfilesystem",
    host?: string,
    "vault-path"?: string,
    context?: string
}

type ResourceRemoveData = {
    op: "remove",
    name: string
}