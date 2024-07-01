import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import * as UserGroupTypes from "./user_group_types.js"

export class UserGroupOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async create_user(
        params: UserGroupTypes.UserCreateParams
    ): Promise<null | UserGroupTypes.UserCreateResponse> {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'create_user',
                    ...params,
                })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async remove_user(
        params: UserGroupTypes.UserRemoveParams
    ): Promise<null | UserGroupTypes.UserRemoveResponse> {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'remove_user',
                    ...params,
                })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async set_password(
        params: UserGroupTypes.UserSetPasswordParams
    ): Promise<null | UserGroupTypes.UserSetPasswordResponse> {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'set_password',
                    ...params,
                })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async set_user_type(
        params: UserGroupTypes.UserSetTypeParams
    ): Promise<null | UserGroupTypes.UserSetTypeResponse> {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'set_user_type',
                    ...params,
                })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async create_group(
        params: UserGroupTypes.GroupCreateParams
    ): Promise<null | UserGroupTypes.GroupCreateResponse> {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'create_group',
                    ...params,
                })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async remove_group(
        params: UserGroupTypes.GroupRemoveParams
    ): Promise<null | UserGroupTypes.GroupRemoveResponse> {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'remove_group',
                    ...params,
                })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async add_to_group(
        params: UserGroupTypes.UserAddToGroupParams
    ): Promise<null | UserGroupTypes.UserAddToGroupResponse> {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'add_to_group',
                    ...params,
                })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async remove_from_group(
        params: UserGroupTypes.UserRemoveFromGroupParams
    ): Promise<null | UserGroupTypes.UserRemoveFromGroupResponse> {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'remove_from_group',
                    ...params,
                })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async users(): Promise<null | UserGroupTypes.UsersResponse> {
        try {
            const res = await this.client.get('/users-groups', {
                params: {
                    op: 'users',
                },
            })
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async groups(): Promise<null | UserGroupTypes.GroupsResponse> {
        try {
            const res = await this.client.get('/users-groups', {
                params: {
                    op: 'groups',
                },
            })
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async is_member_of_group(
        params: UserGroupTypes.UserMemberOfGroupParams
    ): Promise<null | UserGroupTypes.UserMemberOfGroupResponse> {
        try {
            const res = await this.client.get('/users-groups', {
                params: {
                    op: 'is_member_of_group',
                    ...params,
                },
            })
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async stat(
        params: UserGroupTypes.UserGroupStatParams
    ): Promise<null | UserGroupTypes.UserGroupStatResponse> {
        try {
            const res = await this.client.get('/users-groups', {
                params: {
                    op: 'stat',
                    ...params,
                },
            })
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }

    async modify_metadata(
        params: UserGroupTypes.UserGroupModifyMetadata
    ): Promise<null | UserGroupTypes.UserGroupModifyMetadataResponse> {
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'modify_metadata',
                    ...params,
                })
            )
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
                console.error('Error: ', error.response?.statusText)
            return null
        }
    }
}
