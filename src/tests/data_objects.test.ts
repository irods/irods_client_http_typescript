import { Wrapper } from '../wrapper/index.js'
import type { URLComponentsType } from '../types/general_types.js'

describe('DataObjectTests', () => {
    const urlComponents: URLComponentsType = {
        host: 'localhost',
        port: '9090',
        version: '0.3.0',
    }

    const api = new Wrapper(urlComponents, 'alice', 'alicepass')
    let parallelWriteHandle: string | undefined

    beforeAll(async () => {
        await api.authenticate()
    })

    // https://nodejs.org/api/buffer.html#static-method-bufferfromarray

    test('Write to a data object', async () => {
        const testBuffer = Buffer.from('hello world')
        const res = await api.data_objects.write({
            lpath: '/tempZone/home/alice/test.txt',
            bytes: testBuffer,
        })
        expect(res).toBeTruthy()
    })

    test('Read data object', async () => {
        const res = await api.data_objects.read({
            lpath: '/tempZone/home/alice/test.txt',
        })
        expect(res).toBeTruthy()
    })

    test('Parallel write init', async () => {
        const res = await api.data_objects.parallel_write_init({
            lpath: '/tempZone/home/alice/test.txt',
            'stream-count': 1,
        })
        parallelWriteHandle = res?.parallel_write_handle
        expect(res).toBeTruthy()
    })

    test('Parallel write shutdown', async () => {
        expect(parallelWriteHandle).toBeTruthy()
        if (!parallelWriteHandle) return
        const res = await api.data_objects.parallel_write_shutdown({
            'parallel-write-handle': parallelWriteHandle,
        })
        expect(res).toBeTruthy()
    })

    test('Modify metadata of a data object', async () => {
        const res = await api.data_objects.modify_metadata({
            lpath: '/tempZone/home/alice/test.txt',
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

    test('Set permission of a data object', async () => {
        const res = await api.data_objects.set_permission({
            lpath: '/tempZone/home/alice/test.txt',
            'entity-name': 'rods',
            permission: 'write',
        })
        expect(res).toBeTruthy()
    })

    test('Modify permissions of a data object', async () => {
        const res = await api.data_objects.modify_permissions({
            lpath: '/tempZone/home/alice/test.txt',
            operations: [
                {
                    acl: 'read',
                    entity_name: 'chris',
                },
            ],
        })
        expect(res).toBeTruthy()
    })

    test('Calculate checksum', async () => {
        const res = await api.data_objects.calculate_checksum({
            lpath: '/tempZone/home/alice/test.txt',
        })
        expect(res).toBeTruthy()
    })

    test('Verify checksum', async () => {
        const res = await api.data_objects.verify_checksum({
            lpath: '/tempZone/home/alice/test.txt',
        })
        expect(res).toBeTruthy()
    })

    test('Stat for data object', async () => {
        const res = await api.data_objects.stat({
            lpath: '/tempZone/home/alice/test.txt',
        })
        expect(res).toBeTruthy()
    })

    // All tests from here will be done on this data object copy

    test('Copy data object', async () => {
        const res = await api.data_objects.copy({
            'src-lpath': '/tempZone/home/alice/test.txt',
            'dst-lpath': '/tempZone/home/alice/test2.txt',
        })
        expect(res).toBeTruthy()
    })

    test('Rename data object', async () => {
        const res = await api.data_objects.rename({
            'old-lpath': '/tempZone/home/alice/test2.txt',
            'new-lpath': '/tempZone/home/alice/testCopy.txt',
        })
        expect(res).toBeTruthy()
    })

    // //{ irods_response: { status_code: -1816000 } }
    // test('Replicate data object', async () => {
    //     const res = await api.data_objects.replicate({
    //         lpath: '/tempZone/home/alice/testCopy.txt',
    //         'src-resource': 'demoResc',
    //         'dst-resource': 'newResc',
    //     })
    //     expect(res).toBeTruthy()
    // })

    // // Mutually exclusive fields of "replica-number" and "resource-hierarchy", at least 1 optional field must be filled
    // // { irods_response: { status_code: -13000 } } - don't have admin privileges
    // test('Modify data object replica', async () => {
    //     const res = await api.data_objects.modify_replica({
    //         lpath: '/tempZone/home/alice/testCopy.txt',
    //         'replica-number': 1,
    //         'new-data-comments': 'test comment',
    //     })
    //     expect(res).toBeTruthy()
    // })

    // // { irods_response: { status_code: -164000 } }
    // test('Trim data object', async () => {
    //     const res = await api.data_objects.trim({
    //         lpath: '/tempZone/home/alice/testCopy.txt',
    //         'replica-number': 1,
    //     })
    //     expect(res).toBeTruthy()
    // })

    // test('Register data object', async () => {
    //     const res = await api.data_objects.register({
    //         lpath: '/tempZone/home/alice/testCopy.txt',
    //         ppath: 'uhhh',
    //         resource: 'testResc',
    //     })
    //     expect(res).toBeTruthy()
    // })

    test('Remove data object', async () => {
        const res1 = await api.data_objects.remove({
            lpath: '/tempZone/home/alice/testCopy.txt',
            'catalog-only': 0,
            'no-trash': 1,
        })

        const res2 = await api.data_objects.remove({
            lpath: '/tempZone/home/alice/test.txt',
            'catalog-only': 0,
            'no-trash': 1,
        })

        expect(res1).toBeTruthy()
        expect(res2).toBeTruthy()
    })
})
