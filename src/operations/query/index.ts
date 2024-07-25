import { AxiosError, type AxiosInstance } from 'axios'
import { QueryTypes, type HTTPResponse } from '../../types/index.js'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import assert from 'assert'

export class QueryOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async execute_genquery(
        params: QueryTypes.ExecuteGenqueryParams
    ): Promise<HTTPResponse<null | QueryTypes.ExecuteGenqueryResponse>> {
        try {
            const res = await this.client.get('/query', {
                params: {
                    op: 'execute_genquery',
                    ...params,
                },
            })
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async execute_specific_query(
        params: QueryTypes.ExecuteSpecificQueryParams
    ): Promise<HTTPResponse<null | QueryTypes.ExecuteSpecificQueryResponse>> {
        try {
            const res = await this.client.get('/query', {
                params: {
                    op: 'execute_specific_query',
                    ...params,
                },
            })
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async add_specific_query(
        params: QueryTypes.AddSpecificQueryParams
    ): Promise<HTTPResponse<null | QueryTypes.AddSpecificQueryResponse>> {
        try {
            const res = await this.client.post(
                '/query',
                toURLSearchParams({
                    op: 'add_specific_query',
                    ...params,
                })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async remove_specific_query(
        params: QueryTypes.RemoveSpecificQueryParams
    ): Promise<HTTPResponse<null | QueryTypes.RemoveSpecificQueryResponse>> {
        try {
            const res = await this.client.post(
                '/query',
                toURLSearchParams({
                    op: 'remove_specific_query',
                    ...params,
                })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }
}
