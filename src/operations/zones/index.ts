import { AxiosError, type AxiosInstance } from 'axios'
import { ZoneTypes } from "../../types/index.js"

export class ZoneOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async report(): Promise<null | ZoneTypes.ZoneReportResponse> {
        try {
            const res = await this.client.get('/zones', {
                params: {
                    op: 'report',
                },
            })
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }
}
