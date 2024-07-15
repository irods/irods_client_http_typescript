import { Wrapper } from '../wrapper/index.js'
import type {
    IrodsResponse,
    URLComponentsType,
} from '../types/general_types.js'

describe('DataObjectTests', () => {
    const urlComponents: URLComponentsType = {
        host: 'localhost',
        port: '9090',
        version: '0.3.0',
    }

    const api = new Wrapper(urlComponents, 'alice', 'alicepass')
    let parallelWriteHandle: string | undefined
    let streamCount = 3

    beforeAll(async () => {
        await api.authenticate()
    })

    test('Touch a data object', async () => {
        const res = await api.data_objects.touch({
            lpath: '/tempZone/home/alice/test.txt',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    // https://nodejs.org/api/buffer.html#static-method-bufferfromarray

    test('Write to a data object', async () => {
        const testBuffer = Buffer.from('hello')
        const res = await api.data_objects.write({
            lpath: '/tempZone/home/alice/test.txt',
            bytes: testBuffer,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Read data object', async () => {
        const res = await api.data_objects.read({
            lpath: '/tempZone/home/alice/test.txt',
        })
        console.log(res)
        expect(res).toBeTruthy()
    })

    test('Parallel write init', async () => {
        const res = await api.data_objects.parallel_write_init({
            lpath: '/tempZone/home/alice/test.txt',
            'stream-count': streamCount,
        })
        parallelWriteHandle = res?.parallel_write_handle
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Parallel write', async () => {
        expect(parallelWriteHandle).toBeTruthy()
        if (!parallelWriteHandle) return
        let testBuffer: Buffer
        let responses: Promise<IrodsResponse | null>[] = []
        for (let i = 0; i < streamCount; i++) {
            testBuffer = Buffer.from(`hello${i}`)
            let res = api.data_objects.write({
                bytes: testBuffer,
                lpath: '/tempZone/home/alice/test.txt',
                'parallel-write-handle': parallelWriteHandle,
                'stream-index': i,
                offset: i * 6,
            })
            responses.push(res)
        }
        const res = await Promise.allSettled(responses)
        console.log(res)
    })

    test('Parallel write shutdown', async () => {
        expect(parallelWriteHandle).toBeTruthy()
        if (!parallelWriteHandle) return
        const res = await api.data_objects.parallel_write_shutdown({
            'parallel-write-handle': parallelWriteHandle,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
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
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Set permission of a data object', async () => {
        const res = await api.data_objects.set_permission({
            lpath: '/tempZone/home/alice/test.txt',
            'entity-name': 'rods',
            permission: 'write',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
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
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Calculate checksum', async () => {
        const res = await api.data_objects.calculate_checksum({
            lpath: '/tempZone/home/alice/test.txt',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Verify checksum', async () => {
        const res = await api.data_objects.verify_checksum({
            lpath: '/tempZone/home/alice/test.txt',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Stat for data object', async () => {
        const res = await api.data_objects.stat({
            lpath: '/tempZone/home/alice/test.txt',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    // All tests from here will be done on this data object copy

    test('Copy data object', async () => {
        const res = await api.data_objects.copy({
            'src-lpath': '/tempZone/home/alice/test.txt',
            'dst-lpath': '/tempZone/home/alice/test2.txt',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Rename data object', async () => {
        const res = await api.data_objects.rename({
            'old-lpath': '/tempZone/home/alice/test2.txt',
            'new-lpath': '/tempZone/home/alice/testCopy.txt',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    // //{ irods_response: { status_code: -1816000 } }
    // test('Replicate data object', async () => {
    //     const res = await api.data_objects.replicate({
    //         lpath: '/tempZone/home/alice/testCopy.txt',
    //         'src-resource': 'demoResc',
    //         'dst-resource': 'newResc',
    //     })
    //     expect(res).toBeTruthy()
    //     expect(res?.irods_response.status_code).toEqual(0)
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
    //     expect(res?.irods_response.status_code).toEqual(0)
    // })

    // // { irods_response: { status_code: -164000 } }
    // test('Trim data object', async () => {
    //     const res = await api.data_objects.trim({
    //         lpath: '/tempZone/home/alice/testCopy.txt',
    //         'replica-number': 1,
    //     })
    //     expect(res).toBeTruthy()
    //     expect(res?.irods_response.status_code).toEqual(0)
    // })

    // test('Register data object', async () => {
    //     const res = await api.data_objects.register({
    //         lpath: '/tempZone/home/alice/testCopy.txt',
    //         ppath: 'uhhh',
    //         resource: 'testResc',
    //     })
    //     expect(res).toBeTruthy()
    //     expect(res?.irods_response.status_code).toEqual(0)
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
        expect(res1?.irods_response.status_code).toEqual(0)
        expect(res2).toBeTruthy()
        expect(res2?.irods_response.status_code).toEqual(0)
    })
})
