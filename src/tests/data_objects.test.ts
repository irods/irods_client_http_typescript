import type { HTTPResponse, IrodsResponse } from '../types/general_types.js'
import fs from 'fs'

import { createClientForTesting } from './setupTests.js'
import { DataObjectTypes } from '../types/index.js'

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
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    // https://nodejs.org/api/buffer.html#static-method-bufferfromarray

    test('Write to a data object', async () => {
        const testBuffer = Buffer.from('hello')
        const res = await api.data_objects.write({
            lpath: lpath,
            bytes: testBuffer,
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Read data object', async () => {
        const res = await api.data_objects.read({
            lpath: lpath,
        })
        console.log(res)
        expect(res.data).toBeTruthy()
    })

    test('Parallel write', async () => {
        // Parallel write init
        const initRes = await api.data_objects.parallel_write_init({
            lpath: lpath,
            'stream-count': streamCount,
        })
        parallelWriteHandle = initRes.data?.parallel_write_handle
        expect(initRes.data).toBeTruthy()
        expect(initRes.status).toEqual(200)
        expect(initRes.data?.irods_response.status_code).toEqual(0)

        if (!parallelWriteHandle) return

        // Parallel write
        let testBuffer: Buffer
        let responses: Promise<
            HTTPResponse<null | DataObjectTypes.DataObjectWriteResponse>
        >[] = []
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
        expect(shutdownRes.data).toBeTruthy()
        expect(shutdownRes.status).toEqual(200)
        expect(shutdownRes.data?.irods_response.status_code).toEqual(0)
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
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Set permission of a data object', async () => {
        const res = await api.data_objects.set_permission({
            lpath: lpath,
            'entity-name': 'alice',
            permission: 'write',
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
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
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Calculate checksum', async () => {
        const res = await api.data_objects.calculate_checksum({
            lpath: lpath,
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Verify checksum', async () => {
        const res = await api.data_objects.verify_checksum({
            lpath: lpath,
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Stat for data object', async () => {
        const res = await api.data_objects.stat({
            lpath: lpath,
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Copy data object', async () => {
        const res = await api.data_objects.copy({
            'src-lpath': lpath,
            'dst-lpath': `${baseLPath}/dataObject2.txt`,
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Rename data object', async () => {
        const res = await api.data_objects.rename({
            'old-lpath': `${baseLPath}/dataObject2.txt`,
            'new-lpath': `${baseLPath}/dataObjectCopy.txt`,
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Replicate data object', async () => {
        const res = await api.data_objects.replicate({
            lpath: lpath,
            'src-resource': 'demoResc',
            'dst-resource': 'wrapperResc',
        })
        console.log(res)
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    // Mutually exclusive fields of "replica-number" and "resource-hierarchy", at least 1 optional field must be filled
    test('Modify data object replica', async () => {
        const res = await api.data_objects.modify_replica({
            lpath: lpath,
            'replica-number': 1,
            'new-data-comments': 'test comment',
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Trim data object', async () => {
        const res = await api.data_objects.trim({
            lpath: lpath,
            'replica-number': 1,
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
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

        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
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

        expect(res1.data).toBeTruthy()
        expect(res1?.status).toEqual(200)
        expect(res1.data?.irods_response.status_code).toEqual(0)

        expect(res2.data).toBeTruthy()
        expect(res2.status).toEqual(200)
        expect(res2.data?.irods_response.status_code).toEqual(0)

        expect(res3.data).toBeTruthy()
        expect(res3.status).toEqual(200)
        expect(res3.data?.irods_response.status_code).toEqual(0)
    })
})
