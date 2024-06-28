import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { toURLSearchParams } from '../../utils/toURLSearchParams';

export class RuleOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async list_rule_engines(): Promise<null | ListRuleEnginesResponse> {
        try {
            const res = await this.client.get('/rules', {
                params: {
                    op: 'list_rule_engines',
                },
            });
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
                console.error("Error: ", error.response?.statusText);
            return null;
        }
    }

    async execute(params: RuleExecuteParams): Promise<null | RuleExecuteResponse> {
        try {
            const res = await this.client.post(
                '/rules',
                toURLSearchParams({
                    op: 'execute',
                    ...params,
                })
            );
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
                console.error("Error: ", error.response?.statusText);
            return null;
        }
    }

    async remove_delay_rule(
        params: RuleRemoveDelayRuleParams
    ): Promise<null | RuleRemoveDelayRuleResponse> {
        try {
            const res = await this.client.post(
                '/rules',
                toURLSearchParams({
                    op: 'remove_delay_rule',
                    ...params,
                })
            );
            return res.data;
        } catch (error) {
            if (error instanceof AxiosError)
                console.error("Error: ", error.response?.statusText);
            return null;
        }
    }
}
