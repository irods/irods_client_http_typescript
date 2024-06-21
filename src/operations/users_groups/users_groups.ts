import { AxiosInstance } from "axios";

export class UserGroupOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }
}