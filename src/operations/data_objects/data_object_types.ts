type DataObjectTouchParams = {
    lpath: string,
    "no-create"?: 0 | 1,
    "replica-number"?: number,
    "leaf-resource"?: string,
    "seconds-since-epoch"?: number,
    "reference"?: string
}

type DataObjectRemoveParams = {
    lpath: string,
    "catalog-only": 0 | 1,
    "no-trash": 0 | 1,
    admin?: 0 | 1
}

type DataObjectCalculateChecksumParams = {
    lpath: string,
    resource?: string,
    "replica-number"?: number,
    force?: 0 | 1,
    all?: 0 | 1,
    admin?: 0 | 1
}

type DataObjectVerifyChecksumParams = {
    lpath: string,
    resource?: string,
    "replica-number"?: number,
    "compute-checksums"?: 0 | 1,
    admin?: 0 | 1
}

type DataObjectStatParams = {
    lpath: string,
    ticket?: string
}

type DataObjectRenameParams = {
    "old-lpath": string,
    "new-lpath": string
}

type DataObjectCopyParams = {
    "src-lpath": string,
    "dst-lpath": string,
    "src-resource"?: string
    "dst-resource"?: string,
    overwrite?: 0 | 1
}

type DataObjectReplicateParams = {
    lpath: string,
    "src-resource": string,
    "dst-resource": string,
    admin?: 0 | 1
}

type DataObjectTrimParams = {
    lpath: string,
    "replica-number": number,
    "catalog-only"?: 0 | 1,
    admin?: 0 | 1
}

type DataObjectRegisterParams = {
    lpath: string,
    ppath: string,
    resource: string,
    "as-additional-replica"?: 0 | 1,
    "data-size"?: number,
    checksum?: string
}

type DataObjectReadParams = {
    lpath: string,
    offset?: number,
    count?: number,
    ticket?: string
}

type DataObjectWriteParams = {
    lpath: string,
    resource?: string,
    offset?: number,
    truncate?: 0 | 1,
    append?: 0 | 1,
    bytes: Blob, // You can use Blob for binary data
    "parallel-write-handle"?: string,
    "stream-index"?: number
};

type DataObjectParallelWriteInitParams = {
    lpath: string,
    "stream-count": number,
    truncate?: 0 | 1,
    append?: 0 | 1,
    ticket?: string
}

type DataObjectParallelWriteShutdownParams = {
    "parallel-write-handle": string
}

type DataObjectModifyMetadataParams = {
    lpath: string,
    operations: [AVUOperation],
    admin?: 0 | 1
}

type DataObjectSetPermissionParams = {
    lpath: string,
    "entity-name": string,
    permission: "null" | "read" | "write" | "own",
    admin: 0 | 1
}

type DataObjectModifyPermissionsParams = {
    lpath: string,
    operations: [ModifyPermissionsOperation],
    admin: 0 | 1
}

type DataObjectModifyReplicaParams = {
    lpath: string;
    'resource-hierarchy': string;
    'replica-number': number;
    'new-data-checksum'?: string;
    'new-data-comments'?: string;
    'new-data-create-time'?: number;
    'new-data-expiry'?: number;
    'new-data-mode'?: string;
    'new-data-modify-time'?: string;
    'new-data-path'?: string;
    'new-data-replica-number'?: number;
    'new-data-replica-status'?: number;
    'new-data-resource-id'?: number;
    'new-data-size'?: number;
    'new-data-status'?: string;
    'new-data-type-name'?: string;
    'new-data-version'?: string;
}
