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

type TicketRemoveParams = {
    name: string
}