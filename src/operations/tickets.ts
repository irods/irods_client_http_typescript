import { AxiosInstance } from "axios";

export class TicketOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }
}