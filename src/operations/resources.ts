import { AxiosInstance, AxiosResponse } from 'axios';

export class ResourceOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async create(data: ResourceCreateData): Promise<AxiosResponse<any, any>> {
        try {
            const params = new URLSearchParams(data)
            const response = this.client.post('/resources', params);
            return response;
        } catch (error: any) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                console.error('Status:', error.response.status);
                console.error('Headers:', error.response.headers);
            } else if (error.request) {
                console.error('Error request:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
            throw error;
        }
    }
}


