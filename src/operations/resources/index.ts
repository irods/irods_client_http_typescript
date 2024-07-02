import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import { ResourceTypes } from "../../types/index.js"

export class ResourceOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async create(
        params: ResourceTypes.ResourceCreateParams
    ): Promise<null | ResourceTypes.ResourceCreateResponse> {
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
        params: ResourceTypes.ResourceRemoveParams
    ): Promise<null | ResourceTypes.ResourceRemoveResponse> {
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
        params: ResourceTypes.ResourceAddChildParams
    ): Promise<null | ResourceTypes.ResourceAddChildResponse> {
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
        params: ResourceTypes.ResourceRemoveChildParams
    ): Promise<null | ResourceTypes.ResourceRemoveChildResponse> {
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
        params: ResourceTypes.ResourceRebalanceParams
    ): Promise<null | ResourceTypes.ResourceRebalanceResponse> {
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
        params: ResourceTypes.ResourceStatParams
    ): Promise<null | ResourceTypes.ResourceStatResponse> {
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
        params: ResourceTypes.ResourceModifyMetadataParams
    ): Promise<null | ResourceTypes.ResourceModifyMetadataResponse> {
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
