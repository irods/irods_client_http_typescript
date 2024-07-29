import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import { UserGroupTypes, type HTTPResponse } from '../../types/index.js'
import assert from 'assert'

export class UserGroupOperations {
    private client: AxiosInstance
    private debug: boolean | undefined

    constructor(client: AxiosInstance, debug?: boolean) {
        this.client = client
        this.debug = debug
    }

    async create_user(
        params: UserGroupTypes.UserCreateParams
    ): Promise<HTTPResponse<null | UserGroupTypes.UserCreateResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'create_user',
                    ...params,
                })
            )
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async remove_user(
        params: UserGroupTypes.UserRemoveParams
    ): Promise<HTTPResponse<null | UserGroupTypes.UserRemoveResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'remove_user',
                    ...params,
                })
            )
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async set_password(
        params: UserGroupTypes.UserSetPasswordParams
    ): Promise<HTTPResponse<null | UserGroupTypes.UserSetPasswordResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'set_password',
                    ...params,
                })
            )
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async set_user_type(
        params: UserGroupTypes.UserSetTypeParams
    ): Promise<HTTPResponse<null | UserGroupTypes.UserSetTypeResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'set_user_type',
                    ...params,
                })
            )
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async create_group(
        params: UserGroupTypes.GroupCreateParams
    ): Promise<HTTPResponse<null | UserGroupTypes.GroupCreateResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'create_group',
                    ...params,
                })
            )
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async remove_group(
        params: UserGroupTypes.GroupRemoveParams
    ): Promise<HTTPResponse<null | UserGroupTypes.GroupRemoveResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'remove_group',
                    ...params,
                })
            )
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async add_to_group(
        params: UserGroupTypes.UserAddToGroupParams
    ): Promise<HTTPResponse<null | UserGroupTypes.UserAddToGroupResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'add_to_group',
                    ...params,
                })
            )
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async remove_from_group(
        params: UserGroupTypes.UserRemoveFromGroupParams
    ): Promise<
        HTTPResponse<null | UserGroupTypes.UserRemoveFromGroupResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'remove_from_group',
                    ...params,
                })
            )
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async users(): Promise<HTTPResponse<null | UserGroupTypes.UsersResponse>> {
        let retData
        let message
        try {
            const res = await this.client.get('/users-groups', {
                params: {
                    op: 'users',
                },
            })
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async groups(): Promise<
        HTTPResponse<null | UserGroupTypes.GroupsResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.get('/users-groups', {
                params: {
                    op: 'groups',
                },
            })
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async is_member_of_group(
        params: UserGroupTypes.UserMemberOfGroupParams
    ): Promise<HTTPResponse<null | UserGroupTypes.UserMemberOfGroupResponse>> {
        let retData
        let message
        try {
            const res = await this.client.get('/users-groups', {
                params: {
                    op: 'is_member_of_group',
                    ...params,
                },
            })
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async stat(
        params: UserGroupTypes.UserGroupStatParams
    ): Promise<HTTPResponse<null | UserGroupTypes.UserGroupStatResponse>> {
        let retData
        let message
        try {
            const res = await this.client.get('/users-groups', {
                params: {
                    op: 'stat',
                    ...params,
                },
            })
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async modify_metadata(
        params: UserGroupTypes.UserGroupModifyMetadata
    ): Promise<
        HTTPResponse<null | UserGroupTypes.UserGroupModifyMetadataResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/users-groups',
                toURLSearchParams({
                    op: 'modify_metadata',
                    ...params,
                })
            )
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }
}
