/* Create */

type TicketCreateParams = {
    lpath: string;
    type?: string;
    'use-count'?: number;
    'write-data-object-count'?: number;
    'write-byte-count'?: number;
    'seconds-until-expiration'?: number;
    users?: string;
    groups?: string;
    hosts?: string;
}

type TicketCreateResponse = IrodsResponse & {
    ticket: string
}

/* Remove */

type TicketRemoveParams = {
    name: string
}

type TicketRemoveResponse = IrodsResponse