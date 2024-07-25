import { AxiosError, type AxiosInstance } from 'axios'
import { ZoneTypes, type HTTPResponse } from '../../types/index.js'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import assert from 'assert'

export class ZoneOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async add(
        params: ZoneTypes.ZoneAddParams
    ): Promise<HTTPResponse<null | ZoneTypes.ZoneAddResponse>> {
        try {
            const res = await this.client.post(
                '/zones',
                toURLSearchParams({
                    op: 'add',
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

    async remove(
        params: ZoneTypes.ZoneRemoveParams
    ): Promise<HTTPResponse<null | ZoneTypes.ZoneRemoveResponse>> {
        try {
            const res = await this.client.post(
                '/zones',
                toURLSearchParams({
                    op: 'remove',
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

    async modify(
        params: ZoneTypes.ZoneModifyParams
    ): Promise<HTTPResponse<null | ZoneTypes.ZoneModifyResponse>> {
        try {
            const res = await this.client.post(
                '/zones',
                toURLSearchParams({
                    op: 'modify',
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

    async report(): Promise<HTTPResponse<null | ZoneTypes.ZoneReportResponse>> {
        try {
            const res = await this.client.get('/zones', {
                params: {
                    op: 'report',
                },
            })
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }
}
