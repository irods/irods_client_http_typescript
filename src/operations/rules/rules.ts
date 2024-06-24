import { AxiosInstance, AxiosResponse } from "axios";
import { toURLSearchParams } from "../../utils/toURLSearchParams";

export class RuleOperations {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    // GET request
    async list_rule_engines() {
        return this.client.get("/rules", {
            params: {
                op: "list_rule_engines"
            }
        })
    }

    async execute(params: RuleExecuteParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/rules",
            toURLSearchParams({
                op: 'execute',
                ...params
            })
        );
    }

    async remove_delay_rule(params: RuleRemoveDelayRuleParams): Promise<AxiosResponse<any, any>> {
        return this.client.post("/rules",
            toURLSearchParams({
                op: 'remove_delay_rule',
                ...params
            })
        );
    }
}