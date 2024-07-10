import { Wrapper } from '../wrapper/index.js'
import type { URLComponentsType } from '../types/general_types.js'

describe('ZoneTests', () => {
    const urlComponents: URLComponentsType = {
        host: 'localhost',
        port: '9090',
        version: '0.3.0',
    }

    const api = new Wrapper(urlComponents, 'rods', 'rods')

    beforeAll(async () => {
        await api.authenticate()
    })

    test('Add zone', async () => {
        const res = await api.zones.add({
            name: 'testZone',
            comment: 'New test zone',
        })
        expect(res).toBeTruthy()
    })

    test('Modify zone', async () => {
        const res = await api.zones.modify({
            name: 'testZone',
            property: 'comment',
            value: 'Modified comment',
        })
        expect(res).toBeTruthy()
    })

    test('Set zone collection permission', async () => {
        const res = await api.zones.set_zone_collection_permission({
            name: 'testZone',
            permission: 'read',
            user: 'alice',
        })
        expect(res).toBeTruthy()
    })

    test('Zone report', async () => {
        const res = await api.zones.report()
        expect(res).toBeTruthy()
        console.log(res?.zone_report)
    })

    test('Remove zone', async () => {
        const res = await api.zones.remove({
            name: 'testZone',
        })
        expect(res).toBeTruthy()
    })
})
