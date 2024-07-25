import { createClientForTesting } from './setupTests.js'

describe('QueryTests', () => {
    const api = createClientForTesting()

    let genquery =
        "SELECT USER_NAME, USER_TYPE, USER_ZONE WHERE USER_TYPE != 'RODSGROUP'"

    let specific_query =
        "select token_id from R_TOKN_MAIN where token_name = 'rodsgroup'"
    let specific_query_name = 'get_rodsgroup_token_id'

    beforeAll(async () => {
        await api.authenticate()
    })

    test('Execute genquery', async () => {
        const res = await api.query.execute_genquery({
            query: genquery,
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Add specific query', async () => {
        const res = await api.query.add_specific_query({
            name: specific_query_name,
            sql: specific_query,
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Execute specific query', async () => {
        const res = await api.query.execute_specific_query({
            name: specific_query_name,
        })
        console.log(res)
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
        expect(res.data?.rows[0][0]).toEqual('200') // The token ID of rodsgroup is always 200.
    })

    test('Remove specific query', async () => {
        const res = await api.query.remove_specific_query({
            name: specific_query_name,
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })
})
