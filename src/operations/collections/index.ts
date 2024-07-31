import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import { CollectionTypes, type HTTPResponse } from '../../types/index.js'
import assert from 'assert'

export class CollectionOperations {
    private client: AxiosInstance
    private debug: boolean | undefined

    constructor(client: AxiosInstance, debug?: boolean) {
        this.client = client
        this.debug = debug
    }

    async create(
        params: CollectionTypes.CollectionCreateParams
    ): Promise<HTTPResponse<null | CollectionTypes.CollectionCreateResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'create', ...params })
            )
            const data: CollectionTypes.CollectionCreateResponse = res.data
            if (!data.created)
                message = `Failed to create collection: '${params.lpath}' already exists`
            else message = `Successfully created collection '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to create collection '${params.lpath}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async remove(
        params: CollectionTypes.CollectionRemoveParams
    ): Promise<HTTPResponse<null | CollectionTypes.CollectionRemoveResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'remove', ...params })
            )
            message = `Successfully removed collection '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to remove collection '${params.lpath}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async stat(
        params: CollectionTypes.CollectionStatParams
    ): Promise<HTTPResponse<null | CollectionTypes.CollectionStatResponse>> {
        let retData
        let message
        try {
            const res = await this.client.get('/collections', {
                params: { op: 'stat', ...params },
            })
            message = `Successfully retrieved information for collection '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to retrieve information for collection '${params.lpath}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async list(
        params: CollectionTypes.CollectionListParams
    ): Promise<HTTPResponse<null | CollectionTypes.CollectionListResponse>> {
        let retData
        let message
        try {
            const res = await this.client.get('/collections', {
                params: { op: 'list', ...params },
            })
            message = `Successfully retrieved list for collection '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to retrieve list for collection '${params.lpath}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async set_permission(
        params: CollectionTypes.CollectionSetPermissionParams
    ): Promise<
        HTTPResponse<null | CollectionTypes.CollectionSetPermissionResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'set_permission', ...params })
            )
            message = `Successfully set permission for entity '${params['entity-name']}' to '${params.permission}' on collection '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to set permission for entity '${params['entity-name']}' to '${params.permission}' on collection '${params.lpath}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async set_inheritance(
        params: CollectionTypes.CollectionSetInheritanceParams
    ): Promise<
        HTTPResponse<null | CollectionTypes.CollectionSetInheritanceResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'set_inheritance', ...params })
            )
            message = `Successfully ${
                params.enable ? 'enabled' : 'disabled'
            } inheritance for collection '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to ${
                params.enable ? 'enable' : 'disable'
            } inheritance for collection '${params.lpath}': ${
                error.message
            }`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async modify_permissions(
        params: CollectionTypes.CollectionModifyPermissionsParams
    ): Promise<
        HTTPResponse<null | CollectionTypes.CollectionModifyPermissionsResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'modify_permissions', ...params })
            )
            message = `Successfully modified permissions for collection '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to modify permissions for collection '${params.lpath}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async modify_metadata(
        params: CollectionTypes.CollectionModifyMetadataParams
    ): Promise<
        HTTPResponse<null | CollectionTypes.CollectionModifyMetadataResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'modify_metadata', ...params })
            )
            message = `Successfully modified metadata for collection '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to modify metadata for collection '${params.lpath}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async rename(
        params: CollectionTypes.CollectionRenameParams
    ): Promise<HTTPResponse<null | CollectionTypes.CollectionRenameResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'rename', ...params })
            )
            message = `Successfully renamed collection '${params['old-lpath']}' to '${params['new-lpath']}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to rename collection '${params['old-lpath']}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async touch(
        params: CollectionTypes.CollectionTouchParams
    ): Promise<HTTPResponse<null | CollectionTypes.CollectionTouchResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'touch', ...params })
            )
            message = `Successfully updated mtime for collection '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to update mtime for collection '${params.lpath}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }
}
