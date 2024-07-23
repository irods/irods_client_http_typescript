import { createClientForTesting } from './setupTests.js'

describe('CollectionTests', () => {
    const api = createClientForTesting()

    let zoneName = 'tempZone'
    let user = 'rods'
    let collectionName = 'testing'

    let lpath = `/${zoneName}/home/${user}/${collectionName}`
    let renamedLPath = `/${zoneName}/home/${user}/renamed`

    test('Create a new collection', async () => {
        const res = await api.collections.create({
            lpath: lpath,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Stat for a collection', async () => {
        const res = await api.collections.stat({
            lpath: lpath,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('List contents of a collection', async () => {
        const res = await api.collections.list({
            lpath: `/${zoneName}/home`,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Set permission of a collection', async () => {
        const res = await api.collections.set_permission({
            lpath: lpath,
            'entity-name': 'alice',
            permission: 'read',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Set inheritance of a collection', async () => {
        const res = await api.collections.set_inheritance({
            lpath: lpath,
            enable: 1,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Modify permissions of a collection', async () => {
        const res = await api.collections.modify_permissions({
            lpath: lpath,
            operations: [
                {
                    entity_name: 'alice',
                    acl: 'write',
                },
            ],
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
        expect(res?.irods_response.failed_operation).toEqual({})
    })

    test('Modify metadata of a collection', async () => {
        const res = await api.collections.modify_metadata({
            lpath: lpath,
            operations: [
                {
                    operation: 'add',
                    attribute: 'testAttr',
                    value: 'testVal',
                    units: 'testUnits',
                },
            ],
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
        expect(res?.irods_response.failed_operation).toEqual({})
    })

    test('Rename a collection', async () => {
        const res = await api.collections.rename({
            'old-lpath': lpath,
            'new-lpath': renamedLPath,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Touch a collection', async () => {
        const res = await api.collections.touch({
            lpath: renamedLPath,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Remove a collection', async () => {
        const res = await api.collections.remove({
            lpath: renamedLPath,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })
})
