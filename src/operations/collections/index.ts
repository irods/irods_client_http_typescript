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
            else message = `Collection '${params.lpath}' created successfully`
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
            message = `Collection '${params.lpath}' removed successfully`
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
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to retrieve information for '${params.lpath}': ${error.message}`
            retData = {
                status: error.response?.status!,
                data: null,
            }
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
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to retrieve list for '${params.lpath}': ${error.message}`
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
            message = `Permission for '${params['entity-name']}' set`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to set permission for '${params.lpath}': ${error.message}`
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
            message = `Inheritance for '${params.lpath}' ${
                params.enable ? 'enabled' : 'disabled'
            }`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to set inheritance for '${params.lpath}': ${error.message}`
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
            message = `Permissions for '${params.lpath}' successfully modified`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to modify permissions for '${params.lpath}': ${error.message}`
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
            message = `Metadata for '${params.lpath}' successfully modified`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to modify metadata for '${params.lpath}': ${error.message}`
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
            message = `'${params['old-lpath']}' successfully renamed to '${params['new-lpath']}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to rename '${params['old-lpath']}': ${error.message}`
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
            message = `Updated mtime for '${params.lpath}' successfully`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to update mtime for '${params.lpath}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }
}
