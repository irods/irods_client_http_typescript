import { AxiosInstance } from "axios";

export class DataObjectOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }
}