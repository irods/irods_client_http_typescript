/* Execute Genquery */

// GET request
type ExecuteGenqueryParams = {
  query: string;
  offset?: number;
  count?: number;
  "case-sensitive"?: 0 | 1;
  distinct?: 0 | 1;
  parser?: "genquery1" | "genquery2";
  "sql-only"?: 0 | 1;
  zone?: string;
};

type ExecuteGenqueryResponse = {
  irods_response: IrodsResponse;
  rows: [[string, string, string]];
  sql?: string;
};

/* Execute Specific Query */

// GET request
type ExecuteSpecificQueryParams = {
  name: string;
  args?: string;
  "args-delimiter"?: string;
  offset?: number;
  count?: number;
};

type ExecuteSpecificQueryResponse = {
  irods_response: IrodsResponse;
  rows: [[string, string, string]];
};
