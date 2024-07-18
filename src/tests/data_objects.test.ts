import type { IrodsResponse } from '../types/general_types.js'
import fs from 'fs'

import { getAPI } from './setupTests.js'

describe('DataObjectTests', () => {
    const api = getAPI()
    let parallelWriteHandle: string | undefined
    let streamCount = 3

    test('Touch a data object', async () => {
        const res = await api.data_objects.touch({
            lpath: '/tempZone/home/rods/dataObject.txt',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    // https://nodejs.org/api/buffer.html#static-method-bufferfromarray

    test('Write to a data object', async () => {
        const testBuffer = Buffer.from('hello')
        const res = await api.data_objects.write({
            lpath: '/tempZone/home/rods/dataObject.txt',
            bytes: testBuffer,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Read data object', async () => {
        const res = await api.data_objects.read({
            lpath: '/tempZone/home/rods/dataObject.txt',
        })
        console.log(res)
        expect(res).toBeTruthy()
    })

    test('Parallel write init', async () => {
        const res = await api.data_objects.parallel_write_init({
            lpath: '/tempZone/home/rods/dataObject.txt',
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
                lpath: '/tempZone/home/rods/dataObject.txt',
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
            lpath: '/tempZone/home/rods/dataObject.txt',
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
            lpath: '/tempZone/home/rods/dataObject.txt',
            'entity-name': 'alice',
            permission: 'write',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Modify permissions of a data object', async () => {
        const res = await api.data_objects.modify_permissions({
            lpath: '/tempZone/home/rods/dataObject.txt',
            operations: [
                {
                    acl: 'read',
                    entity_name: 'alice',
                },
            ],
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Calculate checksum', async () => {
        const res = await api.data_objects.calculate_checksum({
            lpath: '/tempZone/home/rods/dataObject.txt',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Verify checksum', async () => {
        const res = await api.data_objects.verify_checksum({
            lpath: '/tempZone/home/rods/dataObject.txt',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Stat for data object', async () => {
        const res = await api.data_objects.stat({
            lpath: '/tempZone/home/rods/dataObject.txt',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    // All tests from here will be done on this data object copy

    test('Copy data object', async () => {
        const res = await api.data_objects.copy({
            'src-lpath': '/tempZone/home/rods/dataObject.txt',
            'dst-lpath': '/tempZone/home/rods/dataObject2.txt',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Rename data object', async () => {
        const res = await api.data_objects.rename({
            'old-lpath': '/tempZone/home/rods/dataObject2.txt',
            'new-lpath': '/tempZone/home/rods/dataObjectCopy.txt',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    //{ irods_response: { status_code: -1816000 } }
    test('Replicate data object', async () => {
        const res = await api.data_objects.replicate({
            lpath: '/tempZone/home/rods/dataObject.txt',
            'src-resource': 'demoResc',
            'dst-resource': 'wrapperResc',
        })
        console.log(res)
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    // Mutually exclusive fields of "replica-number" and "resource-hierarchy", at least 1 optional field must be filled
    test('Modify data object replica', async () => {
        const res = await api.data_objects.modify_replica({
            lpath: '/tempZone/home/rods/dataObject.txt',
            'replica-number': 1,
            'new-data-comments': 'test comment',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Trim data object', async () => {
        const res = await api.data_objects.trim({
            lpath: '/tempZone/home/rods/dataObject.txt',
            'replica-number': 1,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Register data object', async () => {
        // Need to create a local file
        let filename = 'newly_registered_file.txt'
        let physical_path = `src/tmp/${filename}`
        let logical_path = `/tempZone/home/rods/${filename}`
        let content = 'data'
        try {
            fs.writeFileSync(physical_path, content)
        } catch (error) {
            console.log('Error writing to file: ', error)
        }

        const res = await api.data_objects.register({
            ppath: physical_path,
            lpath: logical_path,
            resource: 'demoResc',
            'data-size': content.length,
        })

        try {
            fs.rmSync(physical_path)
        } catch (error) {
            console.log('Error deleting file: ', error)
        }

        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Remove data object', async () => {
        const res1 = await api.data_objects.remove({
            lpath: '/tempZone/home/rods/newly_registered_file.txt',
            'catalog-only': 0,
            'no-trash': 1,
        })

        const res2 = await api.data_objects.remove({
            lpath: '/tempZone/home/rods/dataObjectCopy.txt',
            'catalog-only': 0,
            'no-trash': 1,
        })

        const res3 = await api.data_objects.remove({
            lpath: '/tempZone/home/rods/dataObject.txt',
            'catalog-only': 0,
            'no-trash': 1,
        })

        expect(res1).toBeTruthy()
        expect(res1?.irods_response.status_code).toEqual(0)

        expect(res2).toBeTruthy()
        expect(res2?.irods_response.status_code).toEqual(0)

        expect(res3).toBeTruthy()
        expect(res3?.irods_response.status_code).toEqual(0)
    })
})
