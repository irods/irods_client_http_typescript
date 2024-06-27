/* Create */

type ResourceCreateParams = {
  name: string;
  type:
    | "compound"
    | "deferred"
    | "load_balanced"
    | "mockarchive"
    | "nonblocking"
    | "passthru"
    | "random"
    | "replication"
    | "structfile"
    | "univmss"
    | "unixfilesystem";
  host?: string;
  "vault-path"?: string;
  context?: string;
};

type ResourceCreateResponse = FullIrodsResponse;

/* Remove */

type ResourceRemoveParams = {
  name: string;
};

type ResourceRemoveResponse = FullIrodsResponse;

/* Add Child */

type ResourceAddChildParams = {
  "parent-name": string;
  "child-name": string;
  context?: string;
};

type ResourceAddChildResponse = FullIrodsResponse;

/* Remove Child */

type ResourceRemoveChildParams = {
  "parent-name": string;
  "child-name": string;
};

type ResourceRemoveChildResponse = FullIrodsResponse;

/* Rebalance */

type ResourceRebalanceParams = {
  name: string;
};

type ResourceRebalanceResponse = FullIrodsResponse;

/* Stat */

// GET request
type ResourceStatParams = {
  name: string;
};

type ResourceInfo = {
  id: string;
  name: string;
  type: string;
  zone: string;
  host: string;
  vault_path: string;
  status: string;
  context: string;
  comments: string;
  information: string;
  free_space: string;
  free_space_last_modified: number;
  parent_id: string;
  created: number;
  last_modified: number;
  last_modified_millis: number;
};

type ResourceStatResponse = FullIrodsResponse & {
  exists: boolean;
  info: ResourceInfo;
};

/* ModifyMetadata */

type ResourceModifyMetadataParams = {
  name: string;
  operations: [AVUOperation];
};

type ResourceModifyMetadataResponse = IrodsResponse;
