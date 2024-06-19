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