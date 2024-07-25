import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import { DataObjectTypes, type HTTPResponse } from '../../types/index.js'
import { toFormData } from '../../utils/toFormData.js'
import assert from 'assert'

export class DataObjectOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async touch(
        params: DataObjectTypes.DataObjectTouchParams
    ): Promise<HTTPResponse<null | DataObjectTypes.DataObjectTouchResponse>> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'touch', ...params })
            )
            console.log(
                `Successfully created or updated mtime of '${params.lpath}'`
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async remove(
        params: DataObjectTypes.DataObjectRemoveParams
    ): Promise<HTTPResponse<null | DataObjectTypes.DataObjectRemoveResponse>> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'remove', ...params })
            )
            console.log(`Successfully removed data object '${params.lpath}'`)
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async calculate_checksum(
        params: DataObjectTypes.DataObjectCalculateChecksumParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectCalculateChecksumResponse>
    > {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'calculate_checksum', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async verify_checksum(
        params: DataObjectTypes.DataObjectVerifyChecksumParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectVerifyChecksumResponse>
    > {
        try {
            const res = await this.client.get('/data-objects', {
                params: { op: 'verify_checksum', ...params },
            })
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async stat(
        params: DataObjectTypes.DataObjectStatParams
    ): Promise<HTTPResponse<null | DataObjectTypes.DataObjectStatResponse>> {
        try {
            const res = await this.client.get('/data-objects', {
                params: { op: 'stat', ...params },
            })
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async rename(
        params: DataObjectTypes.DataObjectRenameParams
    ): Promise<HTTPResponse<null | DataObjectTypes.DataObjectRenameResponse>> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'rename', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async copy(
        params: DataObjectTypes.DataObjectCopyParams
    ): Promise<HTTPResponse<null | DataObjectTypes.DataObjectCopyResponse>> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'copy', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async replicate(
        params: DataObjectTypes.DataObjectReplicateParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectReplicateResponse>
    > {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'replicate', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async trim(
        params: DataObjectTypes.DataObjectTrimParams
    ): Promise<HTTPResponse<null | DataObjectTypes.DataObjectTrimResponse>> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'trim', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async register(
        params: DataObjectTypes.DataObjectRegisterParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectRegisterResponse>
    > {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'register', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    // GET request
    async read(
        params: DataObjectTypes.DataObjectReadParams
    ): Promise<HTTPResponse<null | DataObjectTypes.DataObjectReadResponse>> {
        try {
            const res = await this.client.get('/data-objects', {
                params: { op: 'read', ...params },
            })
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    // Definitely needs testing, as it uses form data with binary data as a field
    // potential input for binary data:
    /*
        params = {
            ...,
            bytes: new Blob([binaryData], { type: 'application/octet-stream' }),
            ...
        }
    */

    async write(
        params: DataObjectTypes.DataObjectWriteParams
    ): Promise<HTTPResponse<null | DataObjectTypes.DataObjectWriteResponse>> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toFormData({ op: 'write', ...params }),
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async parallel_write_init(
        params: DataObjectTypes.DataObjectParallelWriteInitParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectParallelWriteInitResponse>
    > {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'parallel_write_init', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async parallel_write_shutdown(
        params: DataObjectTypes.DataObjectParallelWriteShutdownParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectParallelWriteShutdownResponse>
    > {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'parallel_write_shutdown', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async modify_metadata(
        params: DataObjectTypes.DataObjectModifyMetadataParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectModifyMetadataResponse>
    > {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'modify_metadata', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async set_permission(
        params: DataObjectTypes.DataObjectSetPermissionParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectSetPermissionResponse>
    > {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'set_permission', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async modify_permissions(
        params: DataObjectTypes.DataObjectModifyPermissionsParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectModifyPermissionsResponse>
    > {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'modify_permissions', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async modify_replica(
        params: DataObjectTypes.DataObjectModifyReplicaParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectModifyReplicaResponse>
    > {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'modify_replica', ...params })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }
}
