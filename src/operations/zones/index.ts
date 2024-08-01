import { AxiosError, type AxiosInstance } from 'axios'
import { ZoneTypes, type HTTPResponse } from '../../types/index.js'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import assert from 'assert'

export class ZoneOperations {
    private client: AxiosInstance
    private debug: boolean | undefined

    constructor(client: AxiosInstance, debug?: boolean) {
        this.client = client
        this.debug = debug
    }

    async add(
        params: ZoneTypes.ZoneAddParams
    ): Promise<HTTPResponse<null | ZoneTypes.ZoneAddResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/zones',
                toURLSearchParams({
                    op: 'add',
                    ...params,
                })
            )
            message = `Successfully added zone '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to add zone '${params.name}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) {
            console.log(message)
        }
        return retData
    }

    async remove(
        params: ZoneTypes.ZoneRemoveParams
    ): Promise<HTTPResponse<null | ZoneTypes.ZoneRemoveResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/zones',
                toURLSearchParams({
                    op: 'remove',
                    ...params,
                })
            )
            message = `Successfully removed zone '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to remove zone '${params.name}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) {
            console.log(message)
        }
        return retData
    }

    async modify(
        params: ZoneTypes.ZoneModifyParams
    ): Promise<HTTPResponse<null | ZoneTypes.ZoneModifyResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/zones',
                toURLSearchParams({
                    op: 'modify',
                    ...params,
                })
            )
            message = `Successfully modified zone '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to modify zone '${params.name}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) {
            console.log(message)
        }
        return retData
    }

    async report(): Promise<HTTPResponse<null | ZoneTypes.ZoneReportResponse>> {
        let retData
        let message
        try {
            const res = await this.client.get('/zones', {
                params: {
                    op: 'report',
                },
            })
            message = `Successfully retrieved zone report`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to retrieve zone report: ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) {
            console.log(message)
        }
        return retData
    }
}
