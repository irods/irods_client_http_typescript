import { AxiosInstance, AxiosResponse } from 'axios';

export class ResourceOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async create(data: ResourceCreateData): Promise<AxiosResponse<any, any>> {
        const params = new URLSearchParams(data)
        const response = this.client.post('/resources', params);
        return response;
    }

    async remove(data: ResourceRemoveData): Promise<AxiosResponse<any, any>> {
        const params = new URLSearchParams(data);
        const response = this.client.post("/resources", params);
        return response;
    }
}


