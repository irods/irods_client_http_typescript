import { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams'

export class UserGroupOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async create_user(
        params: UserCreateParams
    ): Promise<null | UserCreateResponse> {
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
        params: UserRemoveParams
    ): Promise<null | UserRemoveResponse> {
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
        params: UserSetPasswordParams
    ): Promise<null | UserSetPasswordResponse> {
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
        params: UserSetTypeParams
    ): Promise<null | UserSetTypeResponse> {
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
        params: GroupCreateParams
    ): Promise<null | GroupCreateResponse> {
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
        params: GroupRemoveParams
    ): Promise<null | GroupRemoveResponse> {
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
        params: UserAddToGroupParams
    ): Promise<null | UserAddToGroupResponse> {
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
        params: UserRemoveFromGroupParams
    ): Promise<null | UserRemoveFromGroupResponse> {
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

    async users(): Promise<null | UsersResponse> {
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

    async groups(): Promise<null | GroupsResponse> {
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
        params: UserMemberOfGroupParams
    ): Promise<null | UserMemberOfGroupResponse> {
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
        params: UserGroupStatParams
    ): Promise<null | UserGroupStatResponse> {
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
        params: UserGroupModifyMetadata
    ): Promise<null | UserGroupModifyMetadataResponse> {
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
