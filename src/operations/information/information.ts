import { AxiosInstance } from "axios";

export class InformationOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }
}