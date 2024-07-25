import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import { CollectionTypes, type HTTPResponse } from '../../types/index.js'
import assert from 'assert'

export class CollectionOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async create(
        params: CollectionTypes.CollectionCreateParams
    ): Promise<HTTPResponse<null | CollectionTypes.CollectionCreateResponse>> {
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'create', ...params })
            )
            const data: CollectionTypes.CollectionCreateResponse = res.data
            if (!data.created) {
                console.error(
                    `Failed to create collection: '${params.lpath}' already exists`
                )
            } else
                console.info(
                    `Collection '${params.lpath}' created successfully`
                )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error(
                `Failed to create collection '${params.lpath}': ${error.message}`
            )
            return { status: error.response?.status!, data: null }
        }
    }

    async remove(
        params: CollectionTypes.CollectionRemoveParams
    ): Promise<HTTPResponse<null | CollectionTypes.CollectionRemoveResponse>> {
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'remove', ...params })
            )
            console.log(`Collection '${params.lpath}' removed successfully`)
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.log(
                `Failed to remove collection '${params.lpath}': ${error.message}`
            )
            return { status: error.response?.status!, data: null }
        }
    }

    async stat(
        params: CollectionTypes.CollectionStatParams
    ): Promise<HTTPResponse<null | CollectionTypes.CollectionStatResponse>> {
        try {
            const res = await this.client.get('/collections', {
                params: { op: 'stat', ...params },
            })
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error(
                `Failed to retrieve information for '${params.lpath}': ${error.message}`
            )
            return {
                status: error.response?.status!,
                data: null,
            }
        }
    }

    async list(
        params: CollectionTypes.CollectionListParams
    ): Promise<HTTPResponse<null | CollectionTypes.CollectionListResponse>> {
        try {
            const res = await this.client.get('/collections', {
                params: { op: 'list', ...params },
            })
            return { status: res.status, data: res.data }
        } catch (error) {
            console.log(error)
            assert(error instanceof AxiosError)
            console.error(
                `Failed to retrieve list for '${params.lpath}': ${error.message}`
            )
            return { status: error.response?.status!, data: null }
        }
    }

    async set_permission(
        params: CollectionTypes.CollectionSetPermissionParams
    ): Promise<
        HTTPResponse<null | CollectionTypes.CollectionSetPermissionResponse>
    > {
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'set_permission', ...params })
            )
            console.log(`Permission for '${params['entity-name']}' set`)
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error(
                `Failed to set permission for '${params.lpath}': ${error.message}`
            )
            return { status: error.response?.status!, data: null }
        }
    }

    async set_inheritance(
        params: CollectionTypes.CollectionSetInheritanceParams
    ): Promise<
        HTTPResponse<null | CollectionTypes.CollectionSetInheritanceResponse>
    > {
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'set_inheritance', ...params })
            )
            console.log(
                `Inheritance for '${params.lpath}' ${
                    params.enable ? 'enabled' : 'disabled'
                }`
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error(
                `Failed to set inheritance for '${params.lpath}': ${error.message}`
            )
            return { status: error.response?.status!, data: null }
        }
    }

    async modify_permissions(
        params: CollectionTypes.CollectionModifyPermissionsParams
    ): Promise<
        HTTPResponse<null | CollectionTypes.CollectionModifyPermissionsResponse>
    > {
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'modify_permissions', ...params })
            )
            console.log(
                `Permissions for '${params.lpath}' successfully modified`
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error(
                `Failed to modify permissions for '${params.lpath}': ${error.message}`
            )
            return { status: error.response?.status!, data: null }
        }
    }

    async modify_metadata(
        params: CollectionTypes.CollectionModifyMetadataParams
    ): Promise<
        HTTPResponse<null | CollectionTypes.CollectionModifyMetadataResponse>
    > {
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'modify_metadata', ...params })
            )
            console.log(`Metadata for '${params.lpath}' successfully modified`)
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error(
                `Failed to modify metadata for '${params.lpath}': ${error.message}`
            )
            return { status: error.response?.status!, data: null }
        }
    }

    async rename(
        params: CollectionTypes.CollectionRenameParams
    ): Promise<HTTPResponse<null | CollectionTypes.CollectionRenameResponse>> {
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'rename', ...params })
            )
            console.log(
                `'${params['old-lpath']}' successfully renamed to '${params['new-lpath']}'`
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error(
                `Failed to rename '${params['old-lpath']}': ${error.message}`
            )
            return { status: error.response?.status!, data: null }
        }
    }

    async touch(
        params: CollectionTypes.CollectionTouchParams
    ): Promise<HTTPResponse<null | CollectionTypes.CollectionTouchResponse>> {
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'touch', ...params })
            )
            console.log(`Updated mtime for '${params.lpath}' successfully`)
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error(
                `Failed to update mtime for '${params.lpath}': ${error.message}`
            )
            return { status: error.response?.status!, data: null }
        }
    }
}
