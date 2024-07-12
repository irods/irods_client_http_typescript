import type { URLComponentsType } from '../types/general_types.js'
import { Wrapper } from '../wrapper/index.js'

describe('CollectionTests', () => {
    const urlComponents: URLComponentsType = {
        host: 'localhost',
        port: '9090',
        version: '0.3.0',
    }

    const api = new Wrapper(urlComponents, 'rods', 'rods')

    beforeAll(async () => {
        await api.authenticate()
    })

    test('Create a new collection', async () => {
        // const mockData: CollectionTypes.CollectionCreateResponse = {
        //     irods_response: {
        //         status_code: 0,
        //     },
        //     created: true,
        // }
        const res = await api.collections.create({
            lpath: '/tempZone/home/testing',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
        // expect(res).toEqual(mockData)
    })

    test('Stat for a collection', async () => {
        const res = await api.collections.stat({
            lpath: '/tempZone/home/testing',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('List contents of a collection', async () => {
        const res = await api.collections.list({
            lpath: '/tempZone/home',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Set permission of a collection', async () => {
        const res = await api.collections.set_permission({
            lpath: '/tempZone/home/testing',
            'entity-name': 'alice',
            permission: 'read',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Set inheritance of a collection', async () => {
        const res = await api.collections.set_inheritance({
            lpath: '/tempZone/home/testing',
            enable: 1,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Modify permissions of a collection', async () => {
        const res = await api.collections.modify_permissions({
            lpath: '/tempZone/home/testing',
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
            lpath: '/tempZone/home/testing',
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
            'old-lpath': '/tempZone/home/testing',
            'new-lpath': '/tempZone/home/renamed',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Touch a collection', async () => {
        const res = await api.collections.touch({
            lpath: '/tempZone/home/renamed',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Remove a collection', async () => {
        // const mockData: CollectionTypes.CollectionRemoveResponse = {
        //     irods_response: {
        //         status_code: 0,
        //     },
        // }
        const res = await api.collections.remove({
            lpath: '/tempZone/home/renamed',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
        // expect(res).toEqual(mockData)
    })
})
