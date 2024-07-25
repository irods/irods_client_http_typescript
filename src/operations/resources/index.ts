import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import { ResourceTypes, type HTTPResponse } from '../../types/index.js'
import assert from 'assert'

export class ResourceOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async create(
        params: ResourceTypes.ResourceCreateParams
    ): Promise<HTTPResponse<null | ResourceTypes.ResourceCreateResponse>> {
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'create', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async remove(
        params: ResourceTypes.ResourceRemoveParams
    ): Promise<HTTPResponse<null | ResourceTypes.ResourceRemoveResponse>> {
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'remove', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async add_child(
        params: ResourceTypes.ResourceAddChildParams
    ): Promise<HTTPResponse<null | ResourceTypes.ResourceAddChildResponse>> {
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'add_child', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async remove_child(
        params: ResourceTypes.ResourceRemoveChildParams
    ): Promise<HTTPResponse<null | ResourceTypes.ResourceRemoveChildResponse>> {
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'remove_child', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async rebalance(
        params: ResourceTypes.ResourceRebalanceParams
    ): Promise<HTTPResponse<null | ResourceTypes.ResourceRebalanceResponse>> {
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'rebalance', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async stat(
        params: ResourceTypes.ResourceStatParams
    ): Promise<HTTPResponse<null | ResourceTypes.ResourceStatResponse>> {
        try {
            const res = await this.client.get('/resources', {
                params: { op: 'stat', ...params },
            })
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async modify_metadata(
        params: ResourceTypes.ResourceModifyMetadataParams
    ): Promise<
        HTTPResponse<null | ResourceTypes.ResourceModifyMetadataResponse>
    > {
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'modify_metadata', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }
}
