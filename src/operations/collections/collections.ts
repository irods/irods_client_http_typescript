import { AxiosInstance, AxiosResponse } from "axios";
import { toURLSearchParams } from "../../utils/toURLSearchParams";

export class CollectionOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    /**
     * Creates a new collection
     * 
     * @param {CollectionCreateParams} params - The parameters for creating the resource
     * @returns Object of type CollectionCreateResponse
     */
    async create(params: CollectionCreateParams): Promise<CollectionCreateResponse> {
        return this.client.post("/collections",
            toURLSearchParams({ op: "create", ...params })
        )
    }

    async remove(params: CollectionRemoveParams): Promise<CollectionRemoveResponse> {
        return this.client.post("/collections",
            toURLSearchParams({ op: "remove", ...params })
        )
    }

    // GET request
    async stat(params: CollectionStatParams): Promise<CollectionStatResponse> {
        return this.client.get("/collections",
            { params: { op: "stat", ...params } }
        )
    }

    // GET request
    async list(params: CollectionListParams): Promise<CollectionListResponse> {
        return this.client.get("/collections",
            { params: { op: "list", ...params } }
        )
    }

    async set_permission(params: CollectionSetPermissionParams): Promise<CollectionSetPermissionResponse> {
        return this.client.post("/collections",
            toURLSearchParams({ op: "set_permission", ...params })
        )
    }

    async set_inheritance(params: CollectionSetInheritanceParams): Promise<CollectionSetInheritanceResponse> {
        return this.client.post("/collections",
            toURLSearchParams({ op: "set_inheritance", ...params })
        )
    }

    async modify_permissions(params: CollectionModifyPermissionsParams): Promise<CollectionModifyPermissionsResponse> {
        return this.client.post("/collections",
            toURLSearchParams({ op: "modify_permissions", ...params })
        )
    }

    async modify_metadata(params: CollectionModifyMetadataParams): Promise<CollectionModifyMetadataResponse> {
        return this.client.post("/collections",
            toURLSearchParams({ op: "modify_metadata", ...params })
        )
    }

    async rename(params: CollectionRenameParams): Promise<CollectionRenameResponse> {
        return this.client.post("/collections",
            toURLSearchParams({ op: "rename", ...params })
        )
    }

    async touch(params: CollectionTouchParams): Promise<CollectionTouchResponse> {
        return this.client.post("/collections",
            toURLSearchParams({ op: "touch", ...params })
        )
    }
}