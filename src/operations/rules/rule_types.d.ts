/* List Rule Engines */

type ListRuleEnginesResponse = IrodsResponse & {
    rule_engine_plugin_instances: [string]
}

/* Execute */

type RuleExecuteParams = {
    'rule-text': string
    'rep-instance'?: string
}

type RuleExecuteResponse = IrodsResponse & {
    stdout: string
    stderr: string
}

/* Remove Delay Rule */

type RuleRemoveDelayRuleParams = {
    'rule-id': number
}

type RuleRemoveDelayRuleResponse = IrodsResponse
