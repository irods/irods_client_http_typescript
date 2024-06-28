import { AxiosError, AxiosInstance } from 'axios';
import { toURLSearchParams } from '../../utils/toURLSearchParams';

export class DataObjectOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async touch(
        params: DataObjectTouchParams
    ): Promise<null | DataObjectTouchResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'touch', ...params })
            );
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
                console.error("Error: ", error.response?.statusText);
            return null;
        }
    }

    async remove(
        params: DataObjectRemoveParams
    ): Promise<null | DataObjectRemoveResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'remove', ...params })
            );
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
                console.error("Error: ", error.response?.statusText);
            return null;
        }
    }

    async calculate_checksum(
        params: DataObjectCalculateChecksumParams
    ): Promise<null | DataObjectCalculateChecksumResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'calculate_checksum', ...params })
            );
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
                console.error("Error: ", error.response?.statusText);
            return null;
        }
    }

    async verify_checksum(
        params: DataObjectVerifyChecksumParams
    ): Promise<null | DataObjectVerifyChecksumResponse> {
        try {
            const res = await this.client.get('/data-objects', {
                params: { op: 'verify_checksum', ...params },
            });
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
                console.error("Error: ", error.response?.statusText);
            return null;
        }
    }

    async stat(
        params: DataObjectStatParams
    ): Promise<null | DataObjectStatResponse> {
        try {
            const res = await this.client.get('/data-objects', {
                params: { op: 'stat', ...params },
            });
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
                console.error("Error: ", error.response?.statusText);
            return null;
        }
    }

    async rename(
        params: DataObjectRenameParams
    ): Promise<null | DataObjectRenameResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'rename', ...params })
            );
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
                console.error("Error: ", error.response?.statusText);
            return null;
        }
    }

    async parallel_write_init(
        params: DataObjectParallelWriteInitParams
    ): Promise<null | DataObjectParallelWriteInitResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'parallel_write_init', ...params })
            );
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
                console.error("Error: ", error.response?.statusText);
            return null;
        }
    }

    async parallel_write_shutdown(
        params: DataObjectParallelWriteShutdownParams
    ): Promise<null | DataObjectParallelWriteShutdownResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'parallel_write_shutdown', ...params })
            );
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
                console.error("Error: ", error.response?.statusText);
            return null;
        }
    }

    async modify_metadata(
        params: DataObjectModifyMetadataParams
    ): Promise<null | DataObjectModifyMetadataResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'modify_metadata', ...params })
            );
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
                console.error("Error: ", error.response?.statusText);
            return null;
        }
    }

    async set_permission(
        params: DataObjectSetPermissionParams
    ): Promise<null | DataObjectSetPermissionResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'set_permission', ...params })
            );
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
                console.error("Error: ", error.response?.statusText);
            return null;
        }
    }

    async modify_permissions(
        params: DataObjectModifyPermissionsParams
    ): Promise<null | DataObjectModifyPermissionsResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'modify_permissions', ...params })
            );
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
                console.error("Error: ", error.response?.statusText);
            return null;
        }
    }

    async modify_replica(
        params: DataObjectModifyReplicaParams
    ): Promise<null | DataObjectModifyReplicaResponse> {
        try {
            const res = await this.client.post(
                '/data-objects',
                toURLSearchParams({ op: 'modify_replica', ...params })
            );
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
                console.error("Error: ", error.response?.statusText);
            return null;
        }
    }
}
