import axios, { AxiosError, type AxiosInstance } from 'axios'
import {
    CollectionOperations,
    DataObjectOperations,
    QueryOperations,
    ResourceOperations,
    RuleOperations,
    TicketOperations,
    UserGroupOperations,
    ZoneOperations,
} from '../operations/index.js'

import type { URLComponentsType, ServerInfo } from '../types/index.js'

export class IrodsHttpClient {
    public username: string
    public password: string
    public debug: boolean | undefined

    private client: AxiosInstance
    private token: string | null = null

    public baseURL: string

    public collections: CollectionOperations
    public data_objects: DataObjectOperations
    public query: QueryOperations
    public resources: ResourceOperations
    public rules: RuleOperations
    public tickets: TicketOperations
    public users_groups: UserGroupOperations
    public zones: ZoneOperations

    constructor(
        urlComponents: URLComponentsType,
        username: string,
        password: string,
        debug?: boolean
    ) {
        this.username = username
        this.password = password
        this.debug = debug
        // Format: http://<host>:<port>/irods-http-api/<version>
        this.baseURL =
            'http://' +
            urlComponents.host +
            ':' +
            urlComponents.port +
            '/irods-http-api/' +
            urlComponents.version

        this.client = axios.create({
            baseURL: this.baseURL,
        })

        this.client.interceptors.request.use(
            (config) => {
                config.headers['Authorization'] = `Bearer ${this.token}`
                return config
            },
            (error: AxiosError) => {
                return Promise.reject(error)
            }
        )

        this.client.interceptors.response.use(
            (response) => {
                return response
            },
            (error: AxiosError) => {
                return Promise.reject(error)
            }
        )

        this.collections = new CollectionOperations(this.client, this.debug)
        this.data_objects = new DataObjectOperations(this.client, this.debug)
        this.query = new QueryOperations(this.client, this.debug)
        this.resources = new ResourceOperations(this.client, this.debug)
        this.rules = new RuleOperations(this.client, this.debug)
        this.tickets = new TicketOperations(this.client, this.debug)
        this.users_groups = new UserGroupOperations(this.client, this.debug)
        this.zones = new ZoneOperations(this.client, this.debug)
    }

    getToken() {
        return this.token
    }

    setToken(token: string) {
        this.token = token
    }

    async authenticate(): Promise<void> {
        await axios
            .post(`${this.baseURL}/authenticate`, null, {
                auth: {
                    username: this.username,
                    password: this.password,
                },
            })
            .then((response) => {
                this.token = response.data
            })
            .catch((error) => {
                this.handleError(error)
            })
    }

    async get_information(): Promise<ServerInfo> {
        return axios.get(`${this.baseURL}/info`)
    }

    private handleError(error: AxiosError): void {
        if (error.response) {
            console.error('Error response:', error.response.data)
            console.error('Status:', error.response.status)
            console.error('Headers:', error.response.headers)
        } else if (error.request) {
            console.error('Error request:', error.request)
        } else {
            console.error('Error message:', error.message)
        }
        throw error
    }
}
