import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { saveToken, loadToken, clearToken } from './tokenStorage';
import {
    CollectionOperations,
    DataObjectOperations,
    InformationOperations,
    QueryOperations,
    ResourceOperations,
    RuleOperations,
    TicketOperations,
    UserGroupOperations,
    ZoneOperations
} from "./operations"


class Wrapper {
    private client: AxiosInstance;
    private token: string | null = null;

    public collections: CollectionOperations;
    public data_objects: DataObjectOperations;
    public information: InformationOperations;
    public queries: QueryOperations;
    public resources: ResourceOperations;
    public rules: RuleOperations;
    public tickets: TicketOperations;
    public users_groups: UserGroupOperations;
    public zones: ZoneOperations;

    constructor(private baseURL: string, username: string, password: string) {
        const tokenData = loadToken();
        if (tokenData) {
            const isExpired = new Date(tokenData.expiry) < new Date();
            if (!isExpired) {
                console.log("Re-using token, not expired")
                this.token = tokenData.token;
            } else {
                console.log("Token is expired, renewing credentials")
                clearToken(); // Clear expired token
                this.authenticate(baseURL, username, password); // re-authenticate the user
            }
        }
        else {
            console.log("No auth credentials, creating credentials")
            this.authenticate(baseURL, username, password)
        }

        console.log("Using token: ", this.token)

        this.client = axios.create({
            baseURL: baseURL,
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });

        this.collections = new CollectionOperations(this.client);
        this.data_objects = new DataObjectOperations(this.client);
        this.information = new InformationOperations(this.client);
        this.queries = new QueryOperations(this.client);
        this.resources = new ResourceOperations(this.client);
        this.rules = new RuleOperations(this.client);
        this.tickets = new TicketOperations(this.client);
        this.users_groups = new UserGroupOperations(this.client);
        this.zones = new ZoneOperations(this.client);
    }

    async authenticate(baseURL: string, username: string, password: string): Promise<void> {
        try {
            await axios.post(`${baseURL}/authenticate`, null, {
                auth: {
                    username: username,
                    password: password
                }
            })
                .then((response) => {
                    this.token = response.data;
                    if (this.token !== null) {
                        console.log("Saving token: ", this.token)
                        saveToken(this.token);
                    }
                    else
                        console.log("Error getting auth token.")
                })
        } catch (error) {
            this.handleError(error);
        }
    }

    private handleError(error: any): void {
        if (error.response) {
            console.error('Error response:', error.response.data);
            console.error('Status:', error.response.status);
            console.error('Headers:', error.response.headers);
        } else if (error.request) {
            console.error('Error request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        throw error;
    }
}

export default Wrapper;
