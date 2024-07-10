import type { IrodsResponse } from "./general_types.js"

/* Add */

export type ZoneAddParams = {
    name: string,
    "connection-info"?: string, // must be in format <host>:<port>, can this be enforced in TypeScript?
    comment?: string
}

export type ZoneAddResponse = IrodsResponse

/* Remove */

export type ZoneRemoveParams = {
    name: string
}

export type ZoneRemoveResponse = IrodsResponse

/* Modify */

export type ZoneModifyParams = {
    name: string,
    property: string,
    value: string
}

export type ZoneModifyResponse = IrodsResponse

/* Set zone collection permission */

export type SetZoneCollectionPermissionParams = {
    name: string,
    user: string,
    permission: "null" | "read"
}

export type SetZoneCollectionPermissionResponse = IrodsResponse

/* Report */

export type ZoneReportResponse = IrodsResponse & {
    zone_report: object
}
