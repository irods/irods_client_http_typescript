import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { toURLSearchParams } from '../../utils/toURLSearchParams';

export class TicketOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async create(params: TicketCreateParams): Promise<null | TicketCreateResponse> {
        try {
            const res = await this.client.post(
                '/tickets',
                toURLSearchParams({
                    op: 'create',
                    ...params,
                })
            );
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
                console.error("Error: ", error.response?.statusText);
            return null;
        }
    }

    async remove(params: TicketRemoveParams): Promise<null | TicketRemoveResponse> {
        try {
            const res = await this.client.post(
                '/tickets',
                toURLSearchParams({
                    op: 'remove',
                    ...params,
                })
            );
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
                console.error("Error: ", error.response?.statusText);
            return null;
        }
    }
}
