type DataObjectTouchParams = {
    lpath: string,
    "no-create"?: 0 | 1,
    "replica"?: number,
    "leaf-resource"?: string,
    "seconds-since-epoch"?: number,
    "reference"?: string
}

type DataObjectRemoveParams = {
    lpath: string,
    "catalog-only": 0 | 1,

}