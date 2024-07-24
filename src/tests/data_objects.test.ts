import type { IrodsResponse } from '../types/general_types.js'
import fs from 'fs'

import { createClientForTesting } from './setupTests.js'

describe('DataObjectTests', () => {
    const api = createClientForTesting()
    let parallelWriteHandle: string | undefined
    let streamCount = 3

    let zoneName = 'tempZone'
    let user = 'rods'
    let dataObjectName = 'dataObject.txt'
    let registerFilename = 'newly_registered_file.txt'

    let baseLPath = `/${zoneName}/home/${user}`
    let lpath = `${baseLPath}/${dataObjectName}`

    test('Touch a data object', async () => {
        const res = await api.data_objects.touch({
            lpath: lpath,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    // https://nodejs.org/api/buffer.html#static-method-bufferfromarray

    test('Write to a data object', async () => {
        const testBuffer = Buffer.from('hello')
        const res = await api.data_objects.write({
            lpath: lpath,
            bytes: testBuffer,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Read data object', async () => {
        const res = await api.data_objects.read({
            lpath: lpath,
        })
        console.log(res)
        expect(res).toBeTruthy()
    })

    test('Parallel write', async () => {
        // Parallel write init
        const initRes = await api.data_objects.parallel_write_init({
            lpath: lpath,
            'stream-count': streamCount,
        })
        parallelWriteHandle = initRes?.parallel_write_handle
        expect(initRes).toBeTruthy()
        expect(initRes?.irods_response.status_code).toEqual(0)

        if (!parallelWriteHandle) return

        // Parallel write
        let testBuffer: Buffer
        let responses: Promise<IrodsResponse | null>[] = []
        for (let i = 0; i < streamCount; i++) {
            testBuffer = Buffer.from(`hello${i}`)
            let res = api.data_objects.write({
                bytes: testBuffer,
                lpath: lpath,
                'parallel-write-handle': parallelWriteHandle,
                'stream-index': i,
                offset: i * 6,
            })
            responses.push(res)
        }
        const parallelWriteResponses = await Promise.allSettled(responses)
        expect(parallelWriteResponses).toBeTruthy()

        // Parallel write shutdown
        const shutdownRes = await api.data_objects.parallel_write_shutdown({
            'parallel-write-handle': parallelWriteHandle,
        })
        expect(shutdownRes).toBeTruthy()
        expect(shutdownRes?.irods_response.status_code).toEqual(0)
    })

    test('Modify metadata of a data object', async () => {
        const res = await api.data_objects.modify_metadata({
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
    })

    test('Set permission of a data object', async () => {
        const res = await api.data_objects.set_permission({
            lpath: lpath,
            'entity-name': 'alice',
            permission: 'write',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Modify permissions of a data object', async () => {
        const res = await api.data_objects.modify_permissions({
            lpath: lpath,
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
            lpath: lpath,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Verify checksum', async () => {
        const res = await api.data_objects.verify_checksum({
            lpath: lpath,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Stat for data object', async () => {
        const res = await api.data_objects.stat({
            lpath: lpath,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Copy data object', async () => {
        const res = await api.data_objects.copy({
            'src-lpath': lpath,
            'dst-lpath': `${baseLPath}/dataObject2.txt`,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Rename data object', async () => {
        const res = await api.data_objects.rename({
            'old-lpath': `${baseLPath}/dataObject2.txt`,
            'new-lpath': `${baseLPath}/dataObjectCopy.txt`,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Replicate data object', async () => {
        const res = await api.data_objects.replicate({
            lpath: lpath,
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
            lpath: lpath,
            'replica-number': 1,
            'new-data-comments': 'test comment',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Trim data object', async () => {
        const res = await api.data_objects.trim({
            lpath: lpath,
            'replica-number': 1,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Register data object', async () => {
        // Need to create a local file
        let physical_path = `src/tmp/${registerFilename}`
        let logical_path = `${baseLPath}/${registerFilename}`
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
            lpath: `${baseLPath}/${registerFilename}`,
            'catalog-only': 0,
            'no-trash': 1,
        })

        const res2 = await api.data_objects.remove({
            lpath: `${baseLPath}/dataObjectCopy.txt`,
            'catalog-only': 0,
            'no-trash': 1,
        })

        const res3 = await api.data_objects.remove({
            lpath: lpath,
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
