import { AxiosError, type AxiosInstance } from 'axios'
import * as QueryTypes from "./query_types.js"

export class QueryOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async execute_genquery(
        params: QueryTypes.ExecuteGenqueryParams
    ): Promise<null | QueryTypes.ExecuteGenqueryResponse> {
        try {
            const res = await this.client.get('/query', {
                params: {
                    op: 'execute_genquery',
                    ...params,
                },
            })
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async execute_specific_query(
        params: QueryTypes.ExecuteSpecificQueryParams
    ): Promise<null | QueryTypes.ExecuteSpecificQueryResponse> {
        try {
            const res = await this.client.get('/query', {
                params: {
                    op: 'execute_specific_query',
                    ...params,
                },
            })
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }
}
