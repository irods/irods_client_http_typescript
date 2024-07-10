import { Wrapper } from '../wrapper/index.js'
import type { URLComponentsType } from '../types/general_types.js'

describe('RuleTests', () => {
    const urlComponents: URLComponentsType = {
        host: 'localhost',
        port: '9090',
        version: '0.3.0',
    }

    const api = new Wrapper(urlComponents, 'rods', 'rods')

    beforeAll(async () => {
        await api.authenticate()
    })

    test('List Rule Engines', async () => {
        const res = await api.rules.list_rule_engines()
        // console.log(res)
        expect(res).toBeTruthy()
    })

    // // recommended to include rep-instance field
    // test('Execute rule', async () => {
    //     const res = await api.rules.execute({
    //         'rule-text': 'rule',
    //         'rep-instance': 'idk',
    //     })
    //     expect(res).toBeTruthy()
    // })

    // test('Remove delay rule', async () => {
    //     const res = await api.rules.remove_delay_rule({
    //         'rule-id': 0,
    //     })
    //     expect(res).toBeTruthy()
    // })
})
