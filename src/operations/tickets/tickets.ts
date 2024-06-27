import { AxiosInstance, AxiosResponse } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams'

export class TicketOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async create(params: TicketCreateParams): Promise<TicketCreateResponse> {
        return this.client.post(
            '/tickets',
            toURLSearchParams({
                op: 'create',
                ...params,
            })
        )
    }

    async remove(params: TicketRemoveParams): Promise<TicketRemoveResponse> {
        return this.client.post(
            '/tickets',
            toURLSearchParams({
                op: 'remove',
                ...params,
            })
        )
    }
}
