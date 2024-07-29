import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import { TicketTypes, type HTTPResponse } from '../../types/index.js'
import assert from 'assert'

export class TicketOperations {
    private client: AxiosInstance
    private debug: boolean | undefined

    constructor(client: AxiosInstance, debug?: boolean) {
        this.client = client
        this.debug = debug
    }

    async create(
        params: TicketTypes.TicketCreateParams
    ): Promise<HTTPResponse<null | TicketTypes.TicketCreateResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/tickets',
                toURLSearchParams({
                    op: 'create',
                    ...params,
                })
            )
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async remove(
        params: TicketTypes.TicketRemoveParams
    ): Promise<HTTPResponse<null | TicketTypes.TicketRemoveResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/tickets',
                toURLSearchParams({
                    op: 'remove',
                    ...params,
                })
            )
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }
}
