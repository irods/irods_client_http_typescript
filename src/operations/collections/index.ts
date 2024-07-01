import { AxiosError, AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams'

export class CollectionOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async create(
        params: CollectionCreateParams
    ): Promise<null | CollectionCreateResponse> {
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'create', ...params })
            )
            const data: CollectionCreateResponse = res.data;
            if (!data.created) {
                console.error(`Failed to create collection: '${params.lpath}' already exists`)
            }
            else
                console.info(`Collection '${params.lpath}' created successfully`)
            return data
        } catch (error) {
            if (error instanceof AxiosError) {
                console.error(`Failed to create collection '${params.lpath}': ${error.message}`)
                // console.error('Error: ', error.response?.statusText)
            }
            return null
        }
    }

    async remove(
        params: CollectionRemoveParams
    ): Promise<null | CollectionRemoveResponse> {
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'remove', ...params })
            )
            console.log(`Collection '${params.lpath}' removed successfully`)
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.log(`Failed to remove collection '${params.lpath}': ${error.message}`)
            return null
        }
    }

    async stat(
        params: CollectionStatParams
    ): Promise<null | CollectionStatResponse> {
        try {
            const res = await this.client.get('/collections', {
                params: { op: 'stat', ...params },
            })
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async list(
        params: CollectionListParams
    ): Promise<null | CollectionListResponse> {
        try {
            const res = await this.client.get('/collections', {
                params: { op: 'list', ...params },
            })
            return res.data
        } catch (error) {
            console.log(error)
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async set_permission(
        params: CollectionSetPermissionParams
    ): Promise<null | CollectionSetPermissionResponse> {
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'set_permission', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async set_inheritance(
        params: CollectionSetInheritanceParams
    ): Promise<null | CollectionSetInheritanceResponse> {
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'set_inheritance', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async modify_permissions(
        params: CollectionModifyPermissionsParams
    ): Promise<null | CollectionModifyPermissionsResponse> {
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'modify_permissions', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async modify_metadata(
        params: CollectionModifyMetadataParams
    ): Promise<null | CollectionModifyMetadataResponse> {
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'modify_metadata', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async rename(
        params: CollectionRenameParams
    ): Promise<null | CollectionRenameResponse> {
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'rename', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async touch(
        params: CollectionTouchParams
    ): Promise<null | CollectionTouchResponse> {
        try {
            const res = await this.client.post(
                '/collections',
                toURLSearchParams({ op: 'touch', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }
}
