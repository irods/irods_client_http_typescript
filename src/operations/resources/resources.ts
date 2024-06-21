import { AxiosInstance, AxiosResponse } from 'axios';

export class ResourceOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async create(data: ResourceCreateParams): Promise<AxiosResponse<any, any>> {
        const params = new URLSearchParams({ op: "create", ...data })
        const response = this.client.post('/resources', params);
        return response;
    }

    async remove(data: ResourceRemoveParams): Promise<AxiosResponse<any, any>> {
        const params = new URLSearchParams({ op: "remove", ...data });
        const response = this.client.post("/resources", params);
        return response;
    }

    async add_child(data: ResourceAddChildParams): Promise<AxiosResponse<any, any>> {

    }
}


