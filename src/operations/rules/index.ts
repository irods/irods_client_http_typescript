import { AxiosError, type AxiosInstance } from 'axios'
import { toURLSearchParams } from '../../utils/toURLSearchParams.js'
import { RuleTypes, type HTTPResponse } from '../../types/index.js'
import assert from 'assert'

export class RuleOperations {
    private client: AxiosInstance

    constructor(client: AxiosInstance) {
        this.client = client
    }

    async list_rule_engines(): Promise<
        HTTPResponse<null | RuleTypes.ListRuleEnginesResponse>
    > {
        try {
            const res = await this.client.get('/rules', {
                params: {
                    op: 'list_rule_engines',
                },
            })
            return { status: res.status, data: res.data }
        } catch (error) {
            assert(error instanceof AxiosError)
            console.error('Error: ', error.response?.statusText)
            return { status: error.response?.status!, data: null }
        }
    }

    async execute(
        params: RuleTypes.RuleExecuteParams
    ): Promise<HTTPResponse<null | RuleTypes.RuleExecuteResponse>> {
        try {
            const res = await this.client.post(
                '/rules',
                toURLSearchParams({
                    op: 'execute',
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

    async remove_delay_rule(
        params: RuleTypes.RuleRemoveDelayRuleParams
    ): Promise<HTTPResponse<null | RuleTypes.RuleRemoveDelayRuleResponse>> {
        try {
            const res = await this.client.post(
                '/rules',
                toURLSearchParams({
                    op: 'remove_delay_rule',
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
