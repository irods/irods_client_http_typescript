import { AxiosInstance, AxiosResponse } from 'axios';
import { toURLSearchParams } from '../../utils/toURLSearchParams';

export class ResourceOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async create(params: ResourceCreateParams): Promise<ResourceCreateResponse> {
        return this.client.post("/resources",
            toURLSearchParams({ op: "create", ...params })
        );
    }

    async remove(params: ResourceRemoveParams): Promise<ResourceRemoveResponse> {
        return this.client.post("/resources",
            toURLSearchParams({ op: "remove", ...params })
        );
    }

    async add_child(params: ResourceAddChildParams): Promise<ResourceAddChildResponse> {
        return this.client.post("/resources",
            toURLSearchParams({ op: "add_child", ...params })
        );
    }

    async remove_child(params: ResourceRemoveChildParams): Promise<ResourceRemoveChildResponse> {
        return this.client.post("/resources",
            toURLSearchParams({ op: "remove_child", ...params })
        );
    }

    async rebalance(params: ResourceRebalanceParams): Promise<ResourceRebalanceResponse> {
        return this.client.post("/resources",
            toURLSearchParams({ op: "rebalance", ...params })
        );
    }

    // GET request
    async stat(params: ResourceStatParams): Promise<ResourceStatResponse> {
        return this.client.get("/resources",
            { params: { op: "stat", ...params } }
        );
    }

    async modify_metadata(params: ResourceModifyMetadataParams): Promise<ResourceModifyMetadataResponse> {
        return this.client.post("/resources",
            toURLSearchParams({ op: "modify_metadata", ...params })
        );
    }
}


