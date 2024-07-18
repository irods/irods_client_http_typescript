import { getAPI } from './setupTests'

describe('RuleTests', () => {
    const api = getAPI()

    test('List Rule Engines', async () => {
        const res = await api.rules.list_rule_engines()
        // console.log(res)
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    // // recommended to include rep-instance field
    // test('Execute rule', async () => {
    //     const res = await api.rules.execute({
    //         'rule-text': 'rule',
    //         'rep-instance': 'idk',
    //     })
    //     expect(res).toBeTruthy()
    //     expect(res?.irods_response.status_code).toEqual(0)
    // })

    // test('Remove delay rule', async () => {
    //     const res = await api.rules.remove_delay_rule({
    //         'rule-id': 0,
    //     })
    //     expect(res).toBeTruthy()
    //     expect(res?.irods_response.status_code).toEqual(0)
    // })
})
