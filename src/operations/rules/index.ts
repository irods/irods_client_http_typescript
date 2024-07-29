import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import { RuleTypes, type HTTPResponse } from '../../types/index.js'
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
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error:  ${error.response?.statusText}`
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
            retData = { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            message = `Error: ${error.response?.statusText}`
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
