import { AxiosInstance, AxiosResponse } from "axios";
import { toURLSearchParams } from "../../utils/toURLSearchParams";

export class CollectionOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async create(params: CollectionCreateParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/collections",
            toURLSearchParams({ op: "create", ...params })
        )
    }

    async remove(params: CollectionRemoveParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/collections",
            toURLSearchParams({ op: "remove", ...params })
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
            toURLSearchParams({ op: "set_permission", ...params })
        )
    }

    async set_inheritance(params: CollectionSetInheritanceParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/collections",
            toURLSearchParams({ op: "set_inheritance", ...params })
        )
    }

    async modify_permissions(params: CollectionModifyPermissionsParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/collections",
            toURLSearchParams({
                op: "modify_permissions",
                ...params
            })
        )
    }

    async modify_metadata(params: CollectionModifyMetadataParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/collections",
            toURLSearchParams({
                op: "modify_metadata",
                ...params
            })
        )
    }

    async rename(params: CollectionRenameParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/collections",
            toURLSearchParams({ op: "rename", ...params })
        )
    }

    async touch(params: CollectionTouchParams): Promise<void | AxiosResponse<any, any>> {
        return this.client.post("/collections",
            toURLSearchParams({ op: "touch", ...params })
        )
    }
}