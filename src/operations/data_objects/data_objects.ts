import { AxiosInstance, AxiosResponse, toFormData } from "axios";
import { toURLSearchParams } from "../../utils/toURLSearchParams";

export class DataObjectOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async touch(params: DataObjectTouchParams): Promise<void | AxiosResponse<any, any>> {
        return this.client.post("/data-objects",
            toURLSearchParams({ op: "touch", ...params })
        )
    }

    async remove(params: DataObjectRemoveParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/data-objects",
            toURLSearchParams({ op: "remove", ...params })
        )
    }

    async calculate_checksum(params: DataObjectCalculateChecksumParams): Promise<void | AxiosResponse<any, any>> {
        return this.client.post("/data-objects",
            toURLSearchParams({ op: "calculate_checksum", ...params })
        )
    }

    // GET request
    async verify_checksum(params: DataObjectVerifyChecksumParams): Promise<void | AxiosResponse<any, any>> {
        return this.client.get("/data-objects",
            { params: { op: "verify_checksum", ...params } }
        )
    }

    async stat(params: DataObjectStatParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/data-objects",
            toURLSearchParams({ op: "stat", ...params })
        )
    }

    async rename(params: DataObjectRenameParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/data-objects",
            toURLSearchParams({ op: "rename", ...params })
        )
    }

    async copy(params: DataObjectCopyParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/data-objects",
            toURLSearchParams({ op: "copy", ...params })
        )
    }

    async replicate(params: DataObjectReplicateParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/data-objects",
            toURLSearchParams({ op: "replicate", ...params })
        )
    }

    async trim(params: DataObjectTrimParams): Promise<void | AxiosResponse<any, any>> {
        return this.client.post("/data-objects",
            toURLSearchParams({ op: "trim", ...params })
        )
    }

    async register(params: DataObjectRegisterParams): Promise<void | AxiosResponse<any, any>> {
        return this.client.post("/data-objects",
            toURLSearchParams({ op: "register", ...params })
        )
    }

    // GET request
    async read(params: DataObjectReadParams): Promise<void | AxiosResponse<any, any>> {
        return this.client.get("/data-objects",
            { params: { op: "read", ...params } }
        )
    }

    // Definitely needs testing, as it uses form data with binary data as a field
    // potential input for binary data: 
    /*
        params = {
            ...,
            bytes: new Blob([binaryData], { type: 'application/octet-stream' },
            ...
        }
    */

    async write(params: DataObjectWriteParams): Promise<void | AxiosResponse<any, any>> {
        return this.client.post("/data-objects",
            toFormData({ op: "write", ...params }),
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        )
    }

    async parallel_write_init(params: DataObjectParallelWriteInitParams): Promise<void | AxiosResponse<any, any>> {
        return this.client.post("/data-objects",
            toURLSearchParams({ op: "parallel_write_init", ...params })
        )
    }

    async parallel_write_shutdown(params: DataObjectParallelWriteShutdownParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/data-objects",
            toURLSearchParams({ op: "parallel_write_shutdown", ...params })
        )
    }

    async modify_metadata(params: DataObjectModifyMetadataParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/data-objects",
            toURLSearchParams({ op: "modify_metadata", ...params })
        )
    }

    async set_permission(params: DataObjectSetPermissionParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/data-objects",
            toURLSearchParams({ op: "set_permission", ...params })
        )
    }

    async modify_permissions(params: DataObjectModifyPermissionsParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/data-objects",
            toURLSearchParams({ op: "modify_permissions", ...params })
        )
    }

    async modify_replica(params: DataObjectModifyReplicaParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/data-objects",
            toURLSearchParams({ op: "modify_replica", ...params })
        )
    }
}