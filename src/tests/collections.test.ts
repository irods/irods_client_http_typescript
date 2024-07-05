import type { URLComponentsType } from '../types/general_types.js'
import { CollectionTypes } from '../types/index.js'
import { Wrapper } from '../wrapper/index.js'

describe('CollectionOperationsTest', () => {
    const urlComponents: URLComponentsType = {
        host: 'localhost',
        port: '9090',
        version: '0.3.0',
    }

    const api = new Wrapper(urlComponents, 'rods', 'rods')

    beforeAll(async () => {
        await api.authenticate()
        await api.collections.remove({
            lpath: '/tempZone/home/testing',
        })
    })

    test('create a new collection', async () => {
        const mockData: CollectionTypes.CollectionCreateResponse = {
            irods_response: {
                status_code: 0,
            },
            created: 1,
        }
        const res = await api.collections.create({
            lpath: '/tempZone/home/testing',
        })
        expect(res).toBe(mockData)
        // expect(mockData).toBe(mockData)
    })

    test('remove a collection', async () => {
        const mockData: CollectionTypes.CollectionRemoveResponse = {
            irods_response: {
                status_code: 0,
            },
        }
        const res = await api.collections.remove({
            lpath: '/tempZone/home/testing',
        })
        expect(res).toBe(mockData)
    })

    // const res = await api.collections.stat({ lpath: "/tempZone/home/rods" })

    // const res = await api.collections.list({ lpath: "/tempZone/home" })

    // const res = await api.collections.set_permission({ lpath: "/tempZone/home/rods", "entity-name": "alice", permission: "read" })

    // const res = await api.collections.set_inheritance({ lpath: "/tempZone/home/rods", enable: 1 })

    // const res = await api.collections.modify_permissions({
    //     lpath: "/tempZone/home/chris",
    //     operations: [
    //         {
    //             entity_name: "rods",
    //             acl: "write"
    //         }
    //     ]
    // })

    // const res = await api.collections.modify_metadata({
    //     lpath: "/tempZone/home/rods",
    //     operations: [
    //         {
    //             operation: "remove",
    //             attribute: "testAttr",
    //             value: "testVal",
    //             units: "testUnits"
    //         }
    //     ]
    // })

    // const res = await api.collections.rename({ "old-lpath": "/tempZone/home/rodsTest", "new-lpath": "/tempZone/home/rods" })

    // const res = await api.collections.touch({
    //     lpath: "/tempZone/home/rods"
    // })

    // console.log(res?.data)
})
