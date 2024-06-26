// Resources

type ResourceCreateParams = {
    name: string,
    type: "compound" | "deferred" | "load_balanced" |
    "mockarchive" | "nonblocking" | "passthru" |
    "random" | "replication" | "structfile" |
    "univmss" | "unixfilesystem",
    host?: string,
    "vault-path"?: string,
    context?: string
}

type ResourceRemoveParams = {
    name: string
}

type ResourceAddChildParams = {
    'parent-name': string;
    'child-name': string;
    context?: string;
}

type ResourceRemoveChildParams = {
    'parent-name': string;
    'child-name': string;
}

type ResourceRebalanceParams = {
    name: string
}

// GET request
type ResourceStatParams = {
    name: string
}

type ResourceModifyMetadataParams = {
    name: string,
    operations: [AVUOperation]
}