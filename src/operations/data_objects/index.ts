import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import * as DataObjectTypes from "./data_object_types.js"

export class DataObjectOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async touch(
        params: DataObjectTypes.DataObjectTouchParams
    ): Promise<null | DataObjectTypes.DataObjectTouchResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'touch', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async remove(
        params: DataObjectTypes.DataObjectRemoveParams
    ): Promise<null | DataObjectTypes.DataObjectRemoveResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'remove', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async calculate_checksum(
        params: DataObjectTypes.DataObjectCalculateChecksumParams
    ): Promise<null | DataObjectTypes.DataObjectCalculateChecksumResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'calculate_checksum', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async verify_checksum(
        params: DataObjectTypes.DataObjectVerifyChecksumParams
    ): Promise<null | DataObjectTypes.DataObjectVerifyChecksumResponse> {
        try {
            const res = await this.client.get('/data-objects', {
                params: { op: 'verify_checksum', ...params },
            })
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async stat(
        params: DataObjectTypes.DataObjectStatParams
    ): Promise<null | DataObjectTypes.DataObjectStatResponse> {
        try {
            const res = await this.client.get('/data-objects', {
                params: { op: 'stat', ...params },
            })
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async rename(
        params: DataObjectTypes.DataObjectRenameParams
    ): Promise<null | DataObjectTypes.DataObjectRenameResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'rename', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async parallel_write_init(
        params: DataObjectTypes.DataObjectParallelWriteInitParams
    ): Promise<null | DataObjectTypes.DataObjectParallelWriteInitResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'parallel_write_init', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async parallel_write_shutdown(
        params: DataObjectTypes.DataObjectParallelWriteShutdownParams
    ): Promise<null | DataObjectTypes.DataObjectParallelWriteShutdownResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'parallel_write_shutdown', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async modify_metadata(
        params: DataObjectTypes.DataObjectModifyMetadataParams
    ): Promise<null | DataObjectTypes.DataObjectModifyMetadataResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'modify_metadata', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async set_permission(
        params: DataObjectTypes.DataObjectSetPermissionParams
    ): Promise<null | DataObjectTypes.DataObjectSetPermissionResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'set_permission', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async modify_permissions(
        params: DataObjectTypes.DataObjectModifyPermissionsParams
    ): Promise<null | DataObjectTypes.DataObjectModifyPermissionsResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'modify_permissions', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async modify_replica(
        params: DataObjectTypes.DataObjectModifyReplicaParams
    ): Promise<null | DataObjectTypes.DataObjectModifyReplicaResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'modify_replica', ...params })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }
}
