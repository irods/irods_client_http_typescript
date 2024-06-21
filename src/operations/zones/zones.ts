import { AxiosInstance } from "axios";

export class ZoneOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }
}