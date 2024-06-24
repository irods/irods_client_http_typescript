import { AxiosInstance } from "axios";

export class ZoneOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async report() {
        return this.client.get("/zones",
            {
                params: {
                    op: "report"
                }
            }
        )
    }
}