import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import { UserGroupTypes, type HTTPResponse } from '../../types/index.js'
import assert from 'assert'

export class UserGroupOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async create_user(
        params: UserGroupTypes.UserCreateParams
    ): Promise<HTTPResponse<null | UserGroupTypes.UserCreateResponse>> {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'create_user',
                    ...params,
                })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async remove_user(
        params: UserGroupTypes.UserRemoveParams
    ): Promise<HTTPResponse<null | UserGroupTypes.UserRemoveResponse>> {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'remove_user',
                    ...params,
                })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async set_password(
        params: UserGroupTypes.UserSetPasswordParams
    ): Promise<HTTPResponse<null | UserGroupTypes.UserSetPasswordResponse>> {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'set_password',
                    ...params,
                })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async set_user_type(
        params: UserGroupTypes.UserSetTypeParams
    ): Promise<HTTPResponse<null | UserGroupTypes.UserSetTypeResponse>> {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'set_user_type',
                    ...params,
                })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async create_group(
        params: UserGroupTypes.GroupCreateParams
    ): Promise<HTTPResponse<null | UserGroupTypes.GroupCreateResponse>> {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'create_group',
                    ...params,
                })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async remove_group(
        params: UserGroupTypes.GroupRemoveParams
    ): Promise<HTTPResponse<null | UserGroupTypes.GroupRemoveResponse>> {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'remove_group',
                    ...params,
                })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async add_to_group(
        params: UserGroupTypes.UserAddToGroupParams
    ): Promise<HTTPResponse<null | UserGroupTypes.UserAddToGroupResponse>> {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'add_to_group',
                    ...params,
                })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async remove_from_group(
        params: UserGroupTypes.UserRemoveFromGroupParams
    ): Promise<
        HTTPResponse<null | UserGroupTypes.UserRemoveFromGroupResponse>
    > {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'remove_from_group',
                    ...params,
                })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async users(): Promise<HTTPResponse<null | UserGroupTypes.UsersResponse>> {
        try {
            const res = await this.client.get('/users-groups', {
                params: {
                    op: 'users',
                },
            })
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async groups(): Promise<
        HTTPResponse<null | UserGroupTypes.GroupsResponse>
    > {
        try {
            const res = await this.client.get('/users-groups', {
                params: {
                    op: 'groups',
                },
            })
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async is_member_of_group(
        params: UserGroupTypes.UserMemberOfGroupParams
    ): Promise<HTTPResponse<null | UserGroupTypes.UserMemberOfGroupResponse>> {
        try {
            const res = await this.client.get('/users-groups', {
                params: {
                    op: 'is_member_of_group',
                    ...params,
                },
            })
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async stat(
        params: UserGroupTypes.UserGroupStatParams
    ): Promise<HTTPResponse<null | UserGroupTypes.UserGroupStatResponse>> {
        try {
            const res = await this.client.get('/users-groups', {
                params: {
                    op: 'stat',
                    ...params,
                },
            })
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async modify_metadata(
        params: UserGroupTypes.UserGroupModifyMetadata
    ): Promise<
        HTTPResponse<null | UserGroupTypes.UserGroupModifyMetadataResponse>
    > {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'modify_metadata',
                    ...params,
                })
            )
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }
}
