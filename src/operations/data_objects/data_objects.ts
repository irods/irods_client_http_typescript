import { AxiosInstance, AxiosResponse, toFormData } from "axios";
import { toURLSearchParams } from "../../utils/toURLSearchParams";

export class DataObjectOperations {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async touch(params: DataObjectTouchParams): Promise<DataObjectTouchResponse> {
    return this.client.post(
      "/data-objects",
      toURLSearchParams({ op: "touch", ...params }),
    );
  }

  async remove(
    params: DataObjectRemoveParams,
  ): Promise<DataObjectRemoveResponse> {
    return this.client.post(
      "/data-objects",
      toURLSearchParams({ op: "remove", ...params }),
    );
  }

  async calculate_checksum(
    params: DataObjectCalculateChecksumParams,
  ): Promise<DataObjectCalculateChecksumResponse> {
    return this.client.post(
      "/data-objects",
      toURLSearchParams({ op: "calculate_checksum", ...params }),
    );
  }

  // GET request
  async verify_checksum(
    params: DataObjectVerifyChecksumParams,
  ): Promise<DataObjectVerifyChecksumResponse> {
    return this.client.get("/data-objects", {
      params: { op: "verify_checksum", ...params },
    });
  }

  // GET request
  async stat(params: DataObjectStatParams): Promise<DataObjectStatResponse> {
    return this.client.get("/data-objects", {
      params: { op: "stat", ...params },
    });
  }

  async rename(
    params: DataObjectRenameParams,
  ): Promise<DataObjectRenameResponse> {
    return this.client.post(
      "/data-objects",
      toURLSearchParams({ op: "rename", ...params }),
    );
  }

  async copy(params: DataObjectCopyParams): Promise<DataObjectCopyResponse> {
    return this.client.post(
      "/data-objects",
      toURLSearchParams({ op: "copy", ...params }),
    );
  }

  async replicate(
    params: DataObjectReplicateParams,
  ): Promise<DataObjectReplicateResponse> {
    return this.client.post(
      "/data-objects",
      toURLSearchParams({ op: "replicate", ...params }),
    );
  }

  async trim(params: DataObjectTrimParams): Promise<DataObjectTrimResponse> {
    return this.client.post(
      "/data-objects",
      toURLSearchParams({ op: "trim", ...params }),
    );
  }

  async register(
    params: DataObjectRegisterParams,
  ): Promise<DataObjectRegisterResponse> {
    return this.client.post(
      "/data-objects",
      toURLSearchParams({ op: "register", ...params }),
    );
  }

  // GET request
  async read(params: DataObjectReadParams): Promise<DataObjectReadResponse> {
    return this.client.get("/data-objects", {
      params: { op: "read", ...params },
    });
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

  async write(params: DataObjectWriteParams): Promise<DataObjectWriteResponse> {
    return this.client.post(
      "/data-objects",
      toFormData({ op: "write", ...params }),
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  }

  async parallel_write_init(
    params: DataObjectParallelWriteInitParams,
  ): Promise<DataObjectParallelWriteInitResponse> {
    return this.client.post(
      "/data-objects",
      toURLSearchParams({ op: "parallel_write_init", ...params }),
    );
  }

  async parallel_write_shutdown(
    params: DataObjectParallelWriteShutdownParams,
  ): Promise<DataObjectParallelWriteShutdownResponse> {
    return this.client.post(
      "/data-objects",
      toURLSearchParams({ op: "parallel_write_shutdown", ...params }),
    );
  }

  async modify_metadata(
    params: DataObjectModifyMetadataParams,
  ): Promise<DataObjectModifyMetadataResponse> {
    return this.client.post(
      "/data-objects",
      toURLSearchParams({ op: "modify_metadata", ...params }),
    );
  }

  async set_permission(
    params: DataObjectSetPermissionParams,
  ): Promise<DataObjectSetPermissionResponse> {
    return this.client.post(
      "/data-objects",
      toURLSearchParams({ op: "set_permission", ...params }),
    );
  }

  async modify_permissions(
    params: DataObjectModifyPermissionsParams,
  ): Promise<DataObjectModifyPermissionsResponse> {
    return this.client.post(
      "/data-objects",
      toURLSearchParams({ op: "modify_permissions", ...params }),
    );
  }

  async modify_replica(
    params: DataObjectModifyReplicaParams,
  ): Promise<DataObjectModifyReplicaResponse> {
    return this.client.post(
      "/data-objects",
      toURLSearchParams({ op: "modify_replica", ...params }),
    );
  }
}
