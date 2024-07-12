import type { URLComponentsType } from '../types/general_types.js'
import { Wrapper } from '../wrapper/index.js'

describe('QueryTests', () => {
    const urlComponents: URLComponentsType = {
        host: 'localhost',
        port: '9090',
        version: '0.3.0',
    }

    const api = new Wrapper(urlComponents, 'rods', 'rods')

    let query =
        "SELECT USER_NAME, USER_TYPE, USER_ZONE WHERE USER_TYPE != 'RODSGROUP"

    beforeAll(async () => {
        await api.authenticate()
    })

    test('Execute genquery', async () => {
        const res = await api.queries.execute_genquery({
            query: query,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Add specific query', async () => {
        const res = await api.queries.add_specific_query({
            name: 'list_users',
            sql: query,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Execute specific query', async () => {
        const res = await api.queries.execute_specific_query({
            name: 'list_users',
        })
        console.log(res)
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Remove specific query', async () => {
        const res = await api.queries.remove_specific_query({
            name: 'list_users',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })
})
