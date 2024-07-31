import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import {
    UserGroupTypes,
    type HTTPResponse,
    type IrodsResponse,
} from '../../types/index.js'
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
            message = `Successfully created user '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to create user '${params.name}': ${error.message}`
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
            message = `Successfully removed user '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to remove user '${params.name}': ${error.message}`
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
            message = `Successfully set password for user '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to set password for user '${params.name}': ${error.message}`
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
            message = `Successfully set user type of '${params.name}' to '${params['new-user-type']}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to set user type of '${params.name}' to '${params['new-user-type']}': ${error.message}`
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
            message = `Successfully created group '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to create group '${params.name}': ${error.message}`
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
            message = `Successfully removed group '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to remove group '${params.name}': ${error.message}`
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
            message = `Successfully added user '${params.user}' to group '${params.group}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to add user '${params.user}' to group '${params.group}': ${error.message}`
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
            message = `Successfully removed user '${params.user}' from group '${params.group}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to remove user '${params.user}' from group '${params.group}': ${error.message}`
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
            message = `Successfully retrieved list of users`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to retrieve list of users: ${error.message}`
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
            message = `Successfully retrieved list of groups`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to retrieve list of groups: ${error.message}`
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
            let data: UserGroupTypes.UserMemberOfGroupResponse = res.data
            message = `Successfully determined that user '${params.user}' ${
                data.is_member ? 'is' : 'is not'
            } member of group '${params.group}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to determine whether user '${params.user}' is member of group '${params.group}': ${error.message}`
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
            message = `Successfully retrieved information for '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to retrieve information for '${params.name}': ${error.message}`
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
            message = `Successfully modified metadata of '${params.name}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to modify metadata of '${params.name}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }
}
