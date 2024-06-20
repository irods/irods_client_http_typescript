import { AxiosInstance } from "axios";

export class QueryOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }
}