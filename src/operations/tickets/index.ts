import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import { TicketTypes, type HTTPResponse } from '../../types/index.js'
import assert from 'assert'

export class TicketOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async create(
        params: TicketTypes.TicketCreateParams
    ): Promise<HTTPResponse<null | TicketTypes.TicketCreateResponse>> {
        try {
            const res = await this.client.post(
                '/tickets',
                toURLSearchParams({
                    op: 'create',
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
        params: TicketTypes.TicketRemoveParams
    ): Promise<HTTPResponse<null | TicketTypes.TicketRemoveResponse>> {
        try {
            const res = await this.client.post(
                '/tickets',
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
}
