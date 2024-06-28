import { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

export class QueryOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async execute_genquery(
        params: ExecuteGenqueryParams
    ): Promise<null | AxiosResponse<any, any>> {
        try {
            const res = await this.client.get('/query', {
                params: {
                    op: 'execute_genquery',
                    ...params,
                },
            })
            return res
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async execute_specific_query(
        params: ExecuteSpecificQueryParams
    ): Promise<null | AxiosResponse<any, any>> {
        try {
            const res = await this.client.get('/query', {
                params: {
                    op: 'execute_specific_query',
                    ...params,
                },
            })
            return res
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }
}
