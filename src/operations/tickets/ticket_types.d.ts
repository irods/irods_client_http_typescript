/* Create */

export type TicketCreateParams = {
    lpath: string
    type?: string
    'use-count'?: number
    'write-data-object-count'?: number
    'write-byte-count'?: number
    'seconds-until-expiration'?: number
    users?: string
    groups?: string
    hosts?: string
}

export type TicketCreateResponse = IrodsResponse & {
    ticket: string
}

/* Remove */

export type TicketRemoveParams = {
    name: string
}

export type TicketRemoveResponse = IrodsResponse
