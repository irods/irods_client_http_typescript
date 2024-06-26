// GET request
type QueryExecuteGenqueryParams = {
    query: string,
    offset?: number,
    count?: number,
    "case-sensitive"?: 0 | 1,
    distinct?: 0 | 1,
    parser?: "genquery1" | "genquery2",
    "sql-only"?: 0 | 1,
    zone?: string
}

// GET request
type QueryExecuteSpecificQueryParams = {
    name: string,
    args?: string,
    "args-delimiter"?: string,
    offset?: number,
    count?: number
}
