import { getAPI } from './setupTests.js'

describe('QueryTests', () => {
    const api = getAPI()

    let genquery =
        "SELECT USER_NAME, USER_TYPE, USER_ZONE WHERE USER_TYPE != 'RODSGROUP'"

    let specific_query =
        "select token_id from R_TOKN_MAIN where token_name = 'rodsgroup'"
    let specific_query_name = 'get_rodsgroup_token_id'

    beforeAll(async () => {
        await api.authenticate()
    })

    test('Execute genquery', async () => {
        const res = await api.queries.execute_genquery({
            query: genquery,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Add specific query', async () => {
        const res = await api.queries.add_specific_query({
            name: specific_query_name,
            sql: specific_query,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Execute specific query', async () => {
        const res = await api.queries.execute_specific_query({
            name: specific_query_name,
        })
        console.log(res)
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
        expect(res?.rows[0][0]).toEqual('200') // The token ID of rodsgroup is always 200.
    })

    test('Remove specific query', async () => {
        const res = await api.queries.remove_specific_query({
            name: specific_query_name,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })
})
