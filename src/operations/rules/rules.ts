import { AxiosInstance } from "axios";

export class RuleOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }
}