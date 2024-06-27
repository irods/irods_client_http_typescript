import { AxiosInstance, AxiosResponse } from "axios";
import { toURLSearchParams } from "../../utils/toURLSearchParams";

export class UserGroupOperations {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async create_user(params: UserCreateParams): Promise<UserCreateResponse> {
    return this.client.post(
      "/users-groups",
      toURLSearchParams({
        op: "create_user",
        ...params,
      }),
    );
  }

  async remove_user(params: UserRemoveParams): Promise<UserRemoveResponse> {
    return this.client.post(
      "/users-groups",
      toURLSearchParams({
        op: "remove_user",
        ...params,
      }),
    );
  }

  async set_password(
    params: UserSetPasswordParams,
  ): Promise<UserSetPasswordResponse> {
    return this.client.post(
      "/users-groups",
      toURLSearchParams({
        op: "set_password",
        ...params,
      }),
    );
  }

  async set_user_type(params: UserSetTypeParams): Promise<UserSetTypeResponse> {
    return this.client.post(
      "/users-groups",
      toURLSearchParams({
        op: "set_user_type",
        ...params,
      }),
    );
  }

  async create_group(params: GroupCreateParams): Promise<GroupCreateResponse> {
    return this.client.post(
      "/users-groups",
      toURLSearchParams({
        op: "create_group",
        ...params,
      }),
    );
  }

  async remove_group(params: GroupRemoveParams): Promise<GroupRemoveResponse> {
    return this.client.post(
      "/users-groups",
      toURLSearchParams({
        op: "remove_group",
        ...params,
      }),
    );
  }

  async add_to_group(
    params: UserAddToGroupParams,
  ): Promise<UserAddToGroupResponse> {
    return this.client.post(
      "/users-groups",
      toURLSearchParams({
        op: "add_to_group",
        ...params,
      }),
    );
  }

  async remove_from_group(
    params: UserRemoveFromGroupParams,
  ): Promise<UserRemoveFromGroupResponse> {
    return this.client.post(
      "/users-groups",
      toURLSearchParams({
        op: "remove_from_group",
        ...params,
      }),
    );
  }

  // GET request
  async users(): Promise<UsersResponse> {
    return this.client.get("/users-groups", {
      params: {
        op: "users",
      },
    });
  }

  async groups(): Promise<GroupsResponse> {
    return this.client.get("/users-groups", {
      params: {
        op: "groups",
      },
    });
  }

  // GET request
  async is_member_of_group(
    params: UserMemberOfGroupParams,
  ): Promise<UserMemberOfGroupResponse> {
    return this.client.get("/users-groups", {
      params: {
        op: "is_member_of_group",
        ...params,
      },
    });
  }

  // GET request
  async stat(params: UserGroupStatParams): Promise<UserGroupStatResponse> {
    return this.client.get("/users-groups", {
      params: {
        op: "stat",
        ...params,
      },
    });
  }

  async modify_metadata(
    params: UserGroupModifyMetadata,
  ): Promise<UserGroupModifyMetadataResponse> {
    return this.client.post(
      "/users-groups",
      toURLSearchParams({
        op: "modify_metadata",
        ...params,
      }),
    );
  }
}
