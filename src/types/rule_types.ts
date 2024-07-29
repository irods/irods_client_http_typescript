import type { IrodsResponse } from './general_types.js'

/* List Rule Engines */

export type ListRuleEnginesResponse = {
    irods_response: IrodsResponse
    rule_engine_plugin_instances: [string]
}

/* Execute */

export type RuleExecuteParams = {
    'rule-text': string
    'rep-instance'?: string
}

export type RuleExecuteResponse = {
    irods_response: IrodsResponse
    stdout: string
    stderr: string
}

/* Remove Delay Rule */

export type RuleRemoveDelayRuleParams = {
    'rule-id': number
}

export type RuleRemoveDelayRuleResponse = {
    irods_response: IrodsResponse
}
