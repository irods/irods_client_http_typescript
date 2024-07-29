import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import { ResourceTypes, type HTTPResponse } from '../../types/index.js'
import assert from 'assert'

export class ResourceOperations {
    private client: AxiosInstance
    private debug: boolean | undefined

    constructor(client: AxiosInstance, debug?: boolean) {
        this.client = client
        this.debug = debug
    }

    async create(
        params: ResourceTypes.ResourceCreateParams
    ): Promise<HTTPResponse<null | ResourceTypes.ResourceCreateResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'create', ...params })
            )
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async remove(
        params: ResourceTypes.ResourceRemoveParams
    ): Promise<HTTPResponse<null | ResourceTypes.ResourceRemoveResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'remove', ...params })
            )
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async add_child(
        params: ResourceTypes.ResourceAddChildParams
    ): Promise<HTTPResponse<null | ResourceTypes.ResourceAddChildResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'add_child', ...params })
            )
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async remove_child(
        params: ResourceTypes.ResourceRemoveChildParams
    ): Promise<HTTPResponse<null | ResourceTypes.ResourceRemoveChildResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'remove_child', ...params })
            )
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async rebalance(
        params: ResourceTypes.ResourceRebalanceParams
    ): Promise<HTTPResponse<null | ResourceTypes.ResourceRebalanceResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'rebalance', ...params })
            )
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async stat(
        params: ResourceTypes.ResourceStatParams
    ): Promise<HTTPResponse<null | ResourceTypes.ResourceStatResponse>> {
        let retData
        let message
        try {
            const res = await this.client.get('/resources', {
                params: { op: 'stat', ...params },
            })
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async modify_metadata(
        params: ResourceTypes.ResourceModifyMetadataParams
    ): Promise<
        HTTPResponse<null | ResourceTypes.ResourceModifyMetadataResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/resources',
                toURLSearchParams({ op: 'modify_metadata', ...params })
            )
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }
}
