import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { saveToken, loadToken, clearToken } from './tokenStorage';
import {
    CollectionOperations,
    DataObjectOperations,
    QueryOperations,
    ResourceOperations,
    RuleOperations,
    TicketOperations,
    UserGroupOperations,
    ZoneOperations
} from "./operations"
import { toURLSearchParams } from './utils/toURLSearchParams';


class Wrapper {
    public username: string;
    public password: string;

    private client: AxiosInstance;
    private token: string | null = null;

    public baseURL: string;

    public collections: CollectionOperations;
    public data_objects: DataObjectOperations;
    public queries: QueryOperations;
    public resources: ResourceOperations;
    public rules: RuleOperations;
    public tickets: TicketOperations;
    public users_groups: UserGroupOperations;
    public zones: ZoneOperations;

    constructor(urlComponents: URLComponentsType, username: string, password: string) {
        this.username = username;
        this.password = password;
        // Format: http://<host>:<port>/irods-http-api/<version>
        this.baseURL = "http://" + urlComponents.host + ":" + urlComponents.port +
            "/irods-http-api/" + urlComponents.version

        this.client = axios.create({
            baseURL: this.baseURL,
        });

        // Add a request interceptor
        this.client.interceptors.request.use((config) => {
            this.checkToken();
            config.headers['Authorization'] = `Bearer ${this.token}`
            // Do something before request is sent
            return config;
        }, (error) => {
            // Do something with request error
            return Promise.reject(error);
        });

        // Add a response interceptor
        this.client.interceptors.response.use((response) => {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response.data;
        }, (error: AxiosError) => {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            // this.checkToken()

            this.handleError(error);
            if (error.response?.status === 502) {
                console.log("Token is expired, re-authentication needed")
            }
            return Promise.reject(error);
        });

        this.collections = new CollectionOperations(this.client);
        this.data_objects = new DataObjectOperations(this.client);
        this.queries = new QueryOperations(this.client);
        this.resources = new ResourceOperations(this.client);
        this.rules = new RuleOperations(this.client);
        this.tickets = new TicketOperations(this.client);
        this.users_groups = new UserGroupOperations(this.client);
        this.zones = new ZoneOperations(this.client);
    }

    checkToken() {
        const tokenData = loadToken();
        if (tokenData) {
            this.token = tokenData.token;
            // const isExpired = new Date(tokenData.expiry) < new Date();
            // if (!isExpired) {
            //     console.log("Re-using token, not expired")
            //     this.token = tokenData.token;
            // } else {
            //     console.log("Token is expired, renewing credentials")
            //     clearToken(); // Clear expired token
            //     this.authenticate(); // re-authenticate the user
            // }
        }
        else {
            console.log("No auth credentials, creating credentials")
            this.authenticate()
        }

        console.log("Using token: ", this.token)
    }

    async authenticate(): Promise<void> {
        try {
            await axios.post(`${this.baseURL}/authenticate`, null, {
                auth: {
                    username: this.username,
                    password: this.password
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
        } catch (error: any) {
            this.handleError(error);
        }
    }

    async get_information(): Promise<AxiosResponse<any, any>> {
        return axios.get(`${this.baseURL}/info`)
    }

    private handleError(error: AxiosError): void {
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
