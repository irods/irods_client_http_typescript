import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import {
    RuleTypes,
    type HTTPResponse,
    type IrodsResponse,
} from '../../types/index.js'
import assert from 'assert'

export class RuleOperations {
    private client: AxiosInstance
    private debug: boolean | undefined

    constructor(client: AxiosInstance, debug?: boolean) {
        this.client = client
        this.debug = debug
    }

    async list_rule_engines(): Promise<
        HTTPResponse<null | RuleTypes.ListRuleEnginesResponse>
    > {
        let retData
        let message
        try {
            const res = await this.client.get('/rules', {
                params: {
                    op: 'list_rule_engines',
                },
            })
            message = `Successfully listed rule engines`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to list rule engines: ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async execute(
        params: RuleTypes.RuleExecuteParams
    ): Promise<HTTPResponse<null | RuleTypes.RuleExecuteResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/rules',
                toURLSearchParams({
                    op: 'execute',
                    ...params,
                })
            )
            message = `Successfully executed rule`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to execute rule: ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }

    async remove_delay_rule(
        params: RuleTypes.RuleRemoveDelayRuleParams
    ): Promise<HTTPResponse<null | RuleTypes.RuleRemoveDelayRuleResponse>> {
        let retData
        let message
        try {
            const res = await this.client.post(
                '/rules',
                toURLSearchParams({
                    op: 'remove_delay_rule',
                    ...params,
                })
            )
            message = `Successfully removed delay rule '${params['rule-id']}'`
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Failed to remove delay rule '${params['rule-id']}': ${error.message}`
            retData = { status: error.response?.status!, data: null }
        }
        if (this.debug) console.log(message)
        return retData
    }
}
