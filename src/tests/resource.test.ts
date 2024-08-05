import { createClientForTesting } from './setupTests.js'

describe('ResourceTests', () => {
    const api = createClientForTesting()

    let parentResc = 'testParentResc'
    let childResc = 'testChildResc'

    let host = 'ip-172-31-12-211'
    let vaultPath = '/var/lib/irods/new_vault'

    beforeAll(async () => {
        await api.authenticate()
    })

    // TODO(#15): Revisit hostname used in test; if host doesn't resolve, that will lead to issues
    test('Create resource', async () => {
        const res1 = await api.resources.create({
            name: parentResc,
            type: 'unixfilesystem',
            host: host,
            'vault-path': vaultPath,
        })
        expect(res1.data).toBeTruthy()
        expect(res1.status).toEqual(200)
        expect(res1.data?.irods_response.status_code).toEqual(0)

        const res2 = await api.resources.create({
            name: childResc,
            type: 'unixfilesystem',
            host: host,
            'vault-path': vaultPath,
        })
        expect(res2.data).toBeTruthy()
        expect(res2.status).toEqual(200)
        expect(res2.data?.irods_response.status_code).toEqual(0)
    })

    test('Modify resource', async () => {
        const res = await api.resources.modify({
            name: parentResc,
            property: 'comments',
            value: 'Test comment',
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Modify resource metadata', async () => {
        const res = await api.resources.modify_metadata({
            name: parentResc,
            operations: [
                {
                    operation: 'add',
                    attribute: 'testAttr',
                    value: 'testVal',
                    units: 'testUnits',
                },
            ],
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Resource stats', async () => {
        const res = await api.resources.stat({
            name: parentResc,
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
        expect(res.data?.info).toBeTruthy()
    })

    test('Add child to resource', async () => {
        const res = await api.resources.add_child({
            'child-name': childResc,
            'parent-name': parentResc,
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Rebalance resource', async () => {
        const res = await api.resources.rebalance({
            name: parentResc,
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Remove child from resource', async () => {
        const res = await api.resources.remove_child({
            'child-name': childResc,
            'parent-name': parentResc,
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Remove resource', async () => {
        const res1 = await api.resources.remove({
            name: parentResc,
        })

        const res2 = await api.resources.remove({
            name: childResc,
        })

        expect(res1.data).toBeTruthy()
        expect(res1.status).toEqual(200)
        expect(res1.data?.irods_response.status_code).toEqual(0)

        expect(res2.data).toBeTruthy()
        expect(res2.status).toEqual(200)
        expect(res2.data?.irods_response.status_code).toEqual(0)
    })
})
