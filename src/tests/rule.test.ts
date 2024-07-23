import { createClientForTesting } from './setupTests'

describe('RuleTests', () => {
    const api = createClientForTesting()
    let rep_instance = 'irods_rule_engine_plugin-irods_rule_language-instance'

    test('List Rule Engines', async () => {
        const res = await api.rules.list_rule_engines()
        console.log(res)
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    // recommended to include rep-instance field
    test('Execute rule', async () => {
        let test_msg = 'This was run by the iRODS HTTP API test suite!'
        const res = await api.rules.execute({
            'rep-instance': rep_instance,
            'rule-text': `writeLine("stdout", "${test_msg}")`,
        })
        console.log(res)
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
        expect(res?.stderr).toBeFalsy()
        expect(res?.stdout).toEqual(test_msg + '\n')
    })

    test('Remove delay rule', async () => {
        // Schedule a delay rule to execute in the distant future.
        const delayRes = await api.rules.execute({
            'rep-instance': rep_instance,
            'rule-text': `delay("<INST_NAME>${rep_instance}</INST_NAME><PLUSET>1h</PLUSET>") { writeLine("serverLog", "iRODS HTTP API"); }`,
        })
        expect(delayRes).toBeTruthy()
        expect(delayRes?.irods_response.status_code).toEqual(0)

        // Find the delay rule we just created.
        // This query assumes the test suite is running on a system where no other delay
        // rules are being created.
        const findDelayRuleRes = await api.queries.execute_genquery({
            query: 'select max(RULE_EXEC_ID)',
        })
        expect(findDelayRuleRes).toBeTruthy()
        expect(findDelayRuleRes?.rows.length).toEqual(1)

        // Remove delay rule
        let ruleID: string | undefined = findDelayRuleRes?.rows[0][0]
        if (!ruleID) return
        const res = await api.rules.remove_delay_rule({
            'rule-id': parseInt(ruleID),
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })
})
