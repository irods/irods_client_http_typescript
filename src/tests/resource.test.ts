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
    })

    test('Resource stats', async () => {
        const res = await api.resources.stat({
            name: 'testResc',
        })
        expect(res).toBeTruthy()
        expect(res?.info).toBeTruthy()
    })

    test('Add child to resource', async () => {
        const res = await api.resources.add_child({
            'child-name': 'testChild',
            'parent-name': 'testResc',
        })
        expect(res).toBeTruthy()
    })

    test('Rebalance resource', async () => {
        const res = await api.resources.rebalance({
            name: 'testResc',
        })
        expect(res).toBeTruthy()
    })

    test('Remove child from resource', async () => {
        const res = await api.resources.remove_child({
            'child-name': 'testChild',
            'parent-name': 'testResc',
        })
        expect(res).toBeTruthy()
    })

    test('Remove resource', async () => {
        const res = await api.resources.remove({
            name: 'testResc',
        })
        expect(res).toBeTruthy()
    })
})
