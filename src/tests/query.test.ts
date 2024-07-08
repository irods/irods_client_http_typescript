import type { URLComponentsType } from '../types/general_types.js'
import { Wrapper } from '../wrapper/index.js'

describe('QueryTests', () => {
    const urlComponents: URLComponentsType = {
        host: 'localhost',
        port: '9090',
        version: '0.3.0',
    }

    const api = new Wrapper(urlComponents, 'rods', 'rods')

    beforeAll(async () => {
        await api.authenticate()
    })

    test('Execute genquery', async () => {
        let query =
            "SELECT USER_NAME, USER_TYPE, USER_ZONE WHERE USER_TYPE != 'RODSGROUP"
        const res = await api.queries.execute_genquery({
            query: query,
        })
        expect(res).toBeTruthy()
    })
})
