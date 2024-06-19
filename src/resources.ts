import { AxiosInstance } from 'axios';

export async function resource_create(this: { client: AxiosInstance }, data: ResourceCreateData): Promise<any> {
    try {
        const params = new URLSearchParams(data)
        console.log(params)
        const response = await this.client.post('/resources', params);
        console.log("Response:", response)
        return response.data;
        return params;
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
