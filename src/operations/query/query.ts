import { AxiosInstance, AxiosResponse } from 'axios'

export class QueryOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async execute_genquery(
        params: ExecuteGenqueryParams
    ): Promise<AxiosResponse<any, any>> {
        return this.client.get('/query', {
            params: {
                op: 'execute_genquery',
                ...params,
            },
        })
    }

    async execute_specific_query(
        params: ExecuteSpecificQueryParams
    ): Promise<AxiosResponse<any, any>> {
        return this.client.get('/query', {
            params: {
                op: 'execute_specific_query',
                ...params,
            },
        })
    }
}
