import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { URLSearchParams } from "url";

export class CollectionOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async create(params: CollectionCreateParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/collections",
            new URLSearchParams({ op: "create", ...params })
        )
    }

    async remove(params: CollectionRemoveParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/collections",
            new URLSearchParams({ op: "remove", ...params })
        )
    }

    // GET request, don't use URLSearchParams (I think)
    async stat(params: CollectionRemoveParams): Promise<AxiosResponse<any, any>> {
        return this.client.get("/collections",
            { data: { op: "stat", ...params } }
        )
    }

    // GET request
    async list(params: CollectionListParams): Promise<AxiosResponse<any, any>> {
        return this.client.get("/collections",
            { data: { op: "list", ...params } }
        )
    }

    async set_permission(params: CollectionSetPermissionParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/collections",
            new URLSearchParams({ op: "set_permission", ...params })
        )
    }

    async set_inheritance(params: CollectionSetInheritanceParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/collections",
            new URLSearchParams({ op: "set_inheritance", ...params })
        )
    }

    async modify_permissions(params: CollectionModifyPermissionsParams): Promise<AxiosResponse<any, any>> {
        let operations = params.operations.toString()
        return this.client.post("/collections",
            new URLSearchParams({
                op: "modify_permissions",
                lpath: params.lpath,
                operations: operations,
                admin: params.admin ? params.admin : "0"
            })
        )
    }

    async modify_metadata(params: CollectionModifyMetadataParams): Promise<AxiosResponse<any, any>> {
        let operations = params.operations.toString()
        return this.client.post("/collections",
            new URLSearchParams({
                op: "modify_metadata",
                lpath: params.lpath,
                operations: operations,
                admin: params.admin ? params.admin : "0"
            })
        )
    }

    async rename(params: CollectionRenameParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/collections",
            new URLSearchParams({ op: "rename", ...params })
        )
    }

    async touch(params: CollectionTouchParams): Promise<void | AxiosResponse<any, any>> {
        if (params["seconds-since-epoch"]) {
            // If input for seconds-since-epoch isn't a numeric string, return error
            if (isNaN(Number(params["seconds-since-epoch"]))) {
                return;
            }
        }
        return this.client.post("/collections",
            new URLSearchParams({ op: "touch", ...params })
        )
    }
}