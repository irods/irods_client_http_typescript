import { AxiosError, type AxiosInstance } from 'axios'
import { QueryTypes } from "../../types/index.js"
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'

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

    async add_specific_query(
        params: QueryTypes.AddSpecificQueryParams
    ): Promise<null | QueryTypes.AddSpecificQueryResponse> {
        try {
            const res = await this.client.post(
                '/query',
                toURLSearchParams({
                    op: 'add_specific_query',
                    ...params,
                })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async remove_specific_query(
        params: QueryTypes.RemoveSpecificQueryParams
    ): Promise<null | QueryTypes.RemoveSpecificQueryResponse> {
        try {
            const res = await this.client.post(
                '/query',
                toURLSearchParams({
                    op: 'remove_specific_query',
                    ...params,
                })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }
}
