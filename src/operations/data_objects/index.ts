import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import {
    DataObjectTypes,
    type HTTPResponse,
    type IrodsResponse,
} from '../../types/index.js'
import { toFormData } from '../../utils/toFormData.js'
import assert from 'assert'

export class DataObjectOperations {
    private client: AxiosInstance
    private debug: boolean | undefined

    constructor(client: AxiosInstance, debug?: boolean) {
        this.client = client
        this.debug = debug
    }

    async touch(
        params: DataObjectTypes.DataObjectTouchParams
    ): Promise<HTTPResponse<null | DataObjectTypes.DataObjectTouchResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'touch', ...params })
            )
            message = `Successfully created or updated mtime of data object '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Failed to create or update mtime of data object '${params.lpath}': ${irods_response.status_message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async remove(
        params: DataObjectTypes.DataObjectRemoveParams
    ): Promise<HTTPResponse<null | DataObjectTypes.DataObjectRemoveResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'remove', ...params })
            )
            message = `Successfully removed data object '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Failed to remove data object '${params.lpath}': ${irods_response.failed_operation}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async calculate_checksum(
        params: DataObjectTypes.DataObjectCalculateChecksumParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectCalculateChecksumResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'calculate_checksum', ...params })
            )
            message = `Successfully calculated checksum for data object '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Failed to calculate checksum for data object '${params.lpath}': ${irods_response.status_message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async verify_checksum(
        params: DataObjectTypes.DataObjectVerifyChecksumParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectVerifyChecksumResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.get('/data-objects', {
                params: { op: 'verify_checksum', ...params },
            })
            message = `Successfully verified checksum for data object '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Failed to verify checksum for data object '${params.lpath}': ${irods_response.status_message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async stat(
        params: DataObjectTypes.DataObjectStatParams
    ): Promise<HTTPResponse<null | DataObjectTypes.DataObjectStatResponse>> {
        let retData
        let message
        try {
            const res = await this.client.get('/data-objects', {
                params: { op: 'stat', ...params },
            })
            message = `Successfully retrieved information for data object '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Failed to retrieve information for data object '${params.lpath}': ${irods_response.status_message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async rename(
        params: DataObjectTypes.DataObjectRenameParams
    ): Promise<HTTPResponse<null | DataObjectTypes.DataObjectRenameResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'rename', ...params })
            )
            message = `Successfully renamed data object '${params['old-lpath']}' to '${params['old-lpath']}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Failed to rename data object '${params['old-lpath']}': ${irods_response.status_message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async copy(
        params: DataObjectTypes.DataObjectCopyParams
    ): Promise<HTTPResponse<null | DataObjectTypes.DataObjectCopyResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'copy', ...params })
            )
            message = `Successfully copied data object '${params['src-lpath']}' to '${params['dst-lpath']}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Failed to copy data object '${params['src-lpath']}' to '${params['dst-lpath']}': ${irods_response.status_message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async replicate(
        params: DataObjectTypes.DataObjectReplicateParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectReplicateResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'replicate', ...params })
            )
            message = `Successfully replicated data object '${params.lpath}' in resource '${params['src-resource']}' to resource '${params['dst-resource']}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Failed to replicate data object '${params.lpath}': ${irods_response.status_message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async trim(
        params: DataObjectTypes.DataObjectTrimParams
    ): Promise<HTTPResponse<null | DataObjectTypes.DataObjectTrimResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'trim', ...params })
            )
            message = `Successfully trimmed replica number ${params['replica-number']} of data object '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Failed to trim data object '${params.lpath}': ${irods_response.status_message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async register(
        params: DataObjectTypes.DataObjectRegisterParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectRegisterResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'register', ...params })
            )
            message = `Successfully registered physical object '${params.ppath}' to '${params.lpath}' in resource '${params.resource}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Failed to register physical object '${params.ppath}': ${irods_response.status_message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    // GET request
    async read(
        params: DataObjectTypes.DataObjectReadParams
    ): Promise<HTTPResponse<null | DataObjectTypes.DataObjectReadResponse>> {
        let retData
        let message
        try {
            const res = await this.client.get('/data-objects', {
                params: { op: 'read', ...params },
            })
            message = `Successfully read data object '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Failed to read data object '${params.lpath}'`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
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
        let retData
        let message
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
            message = `Successfully wrote to data object '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Failed to write to data object '${params.lpath}': ${irods_response.status_message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async parallel_write_init(
        params: DataObjectTypes.DataObjectParallelWriteInitParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectParallelWriteInitResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'parallel_write_init', ...params })
            )
            message = `Successfully initialized parallel write session for data object '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Failed to initialize parallel write session for data object '${params.lpath}': ${irods_response.status_message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async parallel_write_shutdown(
        params: DataObjectTypes.DataObjectParallelWriteShutdownParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectParallelWriteShutdownResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'parallel_write_shutdown', ...params })
            )
            message = `Successfully shut down parallel write session`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Failed to shut down parallel write session: ${irods_response.status_message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async modify_metadata(
        params: DataObjectTypes.DataObjectModifyMetadataParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectModifyMetadataResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'modify_metadata', ...params })
            )
            message = `Successfully modified metadata for data object '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Failed to modify metadata for data object '${params.lpath}': ${irods_response.status_message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async set_permission(
        params: DataObjectTypes.DataObjectSetPermissionParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectSetPermissionResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'set_permission', ...params })
            )
            message = `Successfully set permission for entity '${params['entity-name']}' to '${params.permission}' on data object '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Failed to set permission for entity '${params['entity-name']}' to '${params.permission}' on data object '${params.lpath}': ${irods_response.status_message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async modify_permissions(
        params: DataObjectTypes.DataObjectModifyPermissionsParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectModifyPermissionsResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'modify_permissions', ...params })
            )
            message = `Successfully modified permissions for data object '${params.lpath}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Failed to modify permissions for data object '${params.lpath}': ${irods_response.status_message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async modify_replica(
        params: DataObjectTypes.DataObjectModifyReplicaParams
    ): Promise<
        HTTPResponse<null | DataObjectTypes.DataObjectModifyReplicaResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'modify_replica', ...params })
            )
            // If params['replica-number'] doesn't exist, then params['resource-hierarchy'] does (or should, at least)
            if (params['replica-number'])
                message = `Successfully modified replica number ${params['replica-number']} of data object '${params.lpath}'`
            else
                message = `Successfully modified replica of data object '${params.lpath}' with resource hierarchy '${params['resource-hierarchy']}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            let irods_response: IrodsResponse =
                error.response?.data.irods_response
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }
}
