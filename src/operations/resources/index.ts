import { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams'

export class ResourceOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async create(
        params: ResourceCreateParams
    ): Promise<null | ResourceCreateResponse> {
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'create', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async remove(
        params: ResourceRemoveParams
    ): Promise<null | ResourceRemoveResponse> {
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'remove', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async add_child(
        params: ResourceAddChildParams
    ): Promise<null | ResourceAddChildResponse> {
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'add_child', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async remove_child(
        params: ResourceRemoveChildParams
    ): Promise<null | ResourceRemoveChildResponse> {
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'remove_child', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async rebalance(
        params: ResourceRebalanceParams
    ): Promise<null | ResourceRebalanceResponse> {
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'rebalance', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async stat(
        params: ResourceStatParams
    ): Promise<null | ResourceStatResponse> {
        try {
            const res = await this.client.get('/resources', {
                params: { op: 'stat', ...params },
            })
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async modify_metadata(
        params: ResourceModifyMetadataParams
    ): Promise<null | ResourceModifyMetadataResponse> {
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'modify_metadata', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }
}
