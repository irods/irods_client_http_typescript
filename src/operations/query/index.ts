import { AxiosError, type AxiosInstance } from 'axios'
import { QueryTypes, type HTTPResponse } from '../../types/index.js'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import assert from 'assert'

export class QueryOperations {
    private client: AxiosInstance
    private debug: boolean | undefined

    constructor(client: AxiosInstance, debug?: boolean) {
        this.client = client
        this.debug = debug
    }

    async execute_genquery(
        params: QueryTypes.ExecuteGenqueryParams
    ): Promise<HTTPResponse<null | QueryTypes.ExecuteGenqueryResponse>> {
        let retData
        let message
        try {
            const res = await this.client.get('/query', {
                params: {
                    op: 'execute_genquery',
                    ...params,
                },
            })
            message = `Successfully executed genquery`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to execute genquery: ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) {
            console.log(message)
        }
        return retData
    }

    async execute_specific_query(
        params: QueryTypes.ExecuteSpecificQueryParams
    ): Promise<HTTPResponse<null | QueryTypes.ExecuteSpecificQueryResponse>> {
        let retData
        let message
        try {
            const res = await this.client.get('/query', {
                params: {
                    op: 'execute_specific_query',
                    ...params,
                },
            })
            message = `Successfully executed specific query '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to execute specific query '${params.name}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) {
            console.log(message)
        }
        return retData
    }

    async add_specific_query(
        params: QueryTypes.AddSpecificQueryParams
    ): Promise<HTTPResponse<null | QueryTypes.AddSpecificQueryResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/query',
                toURLSearchParams({
                    op: 'add_specific_query',
                    ...params,
                })
            )
            message = `Successfully added specific query '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to add specific query '${params.name}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) {
            console.log(message)
        }
        return retData
    }

    async remove_specific_query(
        params: QueryTypes.RemoveSpecificQueryParams
    ): Promise<HTTPResponse<null | QueryTypes.RemoveSpecificQueryResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/query',
                toURLSearchParams({
                    op: 'remove_specific_query',
                    ...params,
                })
            )
            message = `Successfully removed specific query '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to remove specific query '${params.name}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) {
            console.log(message)
        }
        return retData
    }
}
