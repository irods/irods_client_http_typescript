import { Wrapper } from '../wrapper/index.js'
import type { URLComponentsType } from '../types/general_types.js'

describe('ResourceTests', () => {
    const urlComponents: URLComponentsType = {
        host: 'localhost',
        port: '9090',
        version: '0.3.0',
    }

    const api = new Wrapper(urlComponents, 'rods', 'rods')

    beforeAll(async () => {
        await api.authenticate()
    })

    test('Create resource', async () => {
        const res = await api.resources.create({
            name: 'testResc',
            type: 'unixfilesystem',
            host: 'ip-172-31-12-211',
            'vault-path': '/var/lib/irods/new_vault',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Modify resource metadata', async () => {
        const res = await api.resources.modify_metadata({
            name: 'testResc',
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
    })

    test('Resource stats', async () => {
        const res = await api.resources.stat({
            name: 'testResc',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
        expect(res?.info).toBeTruthy()
    })

    test('Add child to resource', async () => {
        const res = await api.resources.add_child({
            'child-name': 'testChild',
            'parent-name': 'testResc',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Rebalance resource', async () => {
        const res = await api.resources.rebalance({
            name: 'testResc',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Remove child from resource', async () => {
        const res = await api.resources.remove_child({
            'child-name': 'testChild',
            'parent-name': 'testResc',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Remove resource', async () => {
        const res = await api.resources.remove({
            name: 'testResc',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })
})
