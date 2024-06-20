import { AxiosInstance } from "axios";

export class CollectionOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }
}