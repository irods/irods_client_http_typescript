import type { IrodsResponse } from "./general_types.js"

/* List Rule Engines */

export type ListRuleEnginesResponse = IrodsResponse & {
    rule_engine_plugin_instances: [string]
}

/* Execute */

export type RuleExecuteParams = {
    'rule-text': string
    'rep-instance'?: string
}

export type RuleExecuteResponse = IrodsResponse & {
    stdout: string
    stderr: string
}

/* Remove Delay Rule */

export type RuleRemoveDelayRuleParams = {
    'rule-id': number
}

export type RuleRemoveDelayRuleResponse = IrodsResponse
