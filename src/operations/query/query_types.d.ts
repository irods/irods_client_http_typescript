/* Execute Genquery */

// GET request
export type ExecuteGenqueryParams = {
    query: string
    offset?: number
    count?: number
    'case-sensitive'?: 0 | 1
    distinct?: 0 | 1
    parser?: 'genquery1' | 'genquery2'
    'sql-only'?: 0 | 1
    zone?: string
}

export type ExecuteGenqueryResponse = {
    irods_response: IrodsResponse
    rows: [[string, string, string]]
    sql?: string
}

/* Execute Specific Query */

// GET request
export type ExecuteSpecificQueryParams = {
    name: string
    args?: string
    'args-delimiter'?: string
    offset?: number
    count?: number
}

export type ExecuteSpecificQueryResponse = {
    irods_response: IrodsResponse
    rows: [[string, string, string]]
}
