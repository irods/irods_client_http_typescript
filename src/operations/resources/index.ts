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
            message = `Successfully created resource '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to create resource '${params.name}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) {
            console.log(message)
        }
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
            message = `Successfully removed resource '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to remove resource '${params.name}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) {
            console.log(message)
        }
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
            message = `Successfully added child '${params['child-name']}' to parent '${params['parent-name']}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to add child '${params['child-name']}' to parent '${params['parent-name']}: ${error.message}'`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) {
            console.log(message)
        }
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
            message = `Successfully removed child '${params['child-name']}' from parent '${params['parent-name']}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to remove child '${params['child-name']}' from parent '${params['parent-name']}: ${error.message}'`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) {
            console.log(message)
        }
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
            message = `Successfully rebalanced resource '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to rebalance resource '${params.name}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) {
            console.log(message)
        }
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
            message = `Successfully retrieved information for resource '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to retrieve information for resource '${params.name}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) {
            console.log(message)
        }
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
            message = `Successfully modified metadata of resource '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to modify metadata of resource '${params.name}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) {
            console.log(message)
        }
        return retData
    }
}
