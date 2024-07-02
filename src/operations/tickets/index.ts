import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import { TicketTypes } from "../../types/index.js"

export class TicketOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async create(
        params: TicketTypes.TicketCreateParams
    ): Promise<null | TicketTypes.TicketCreateResponse> {
        try {
            const res = await this.client.post(
                '/tickets',
                toURLSearchParams({
                    op: 'create',
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

    async remove(
        params: TicketTypes.TicketRemoveParams
    ): Promise<null | TicketTypes.TicketRemoveResponse> {
        try {
            const res = await this.client.post(
                '/tickets',
                toURLSearchParams({
                    op: 'remove',
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
