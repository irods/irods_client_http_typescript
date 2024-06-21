// Collections

type CollectionCreateParams = {
    lpath: string,
    "create-intermediates"?: '0' | '1'
}

type CollectionRemoveParams = {
    lpath: string,
    recurse?: '0' | '1',
    "no-trash"?: '0' | '1'
}

// GET request
type CollectionStatParams = {
    lpath: string,
    ticket?: string
}

// GET request
type CollectionListParams = {
    lpath: string,
    recurse?: '0' | '1',
    ticket?: string
}

type CollectionSetPermissionParams = {
    lpath: string,
    "entity-name": string,
    permission: "null" | "read" | "write" | "own",
    admin?: '0' | '1'
}

type CollectionSetInheritanceParams = {
    lpath: string,
    enable: '0' | '1',
    admin?: '0' | '1'
}

type CollectionModifyPermissionsParams = {
    lpath: string,
    operations: [
        {
            entity_name: string,
            acl: string
        }
    ],
    admin?: '0' | '1'
}

type CollectionModifyMetadataParams = {
    lpath: string,
    operations: [
        {
            operation: "add" | "remove",
            attribute: string,
            value: string,
            units?: string
        }
    ],
    admin?: '0' | '1'
}

type CollectionRenameParams = {
    "old-lpath": string,
    "new-lpath": string
}

type CollectionTouchParams = {
    lpath: string,
    "seconds-since-epoch"?: string, // check that it's a number if exists
    reference?: string
}