import { IrodsHttpClient } from '../irods_http_client'
import type { URLComponentsType } from '../types'

const urlComponents: URLComponentsType = {
    host: 'localhost',
    port: '9090',
    version: '0.3.0',
}

const rodsadmin = new IrodsHttpClient(urlComponents, 'rods', 'rods')
const rodsuser = new IrodsHttpClient(urlComponents, 'alice', 'alicepass')

/*
    As specified in jest.config.cjs, in the field "setupFilesAfterEnv",
    this file will be ran before each test suite.
    The beforeAll(...) below sets up both IrodsHttpClient instances for usage within a test,
    ensuring both are authenticated before tests begin running.
*/

beforeAll(async () => {
    await rodsadmin.authenticate()
    await rodsuser.authenticate()
})

/*
    Allows IrodsHttpClient instances to be imported into a test suite for usage.
    The 'type' parameter is optional, and if not specified, the function returns the rodsadmin
    instance by default.
*/

export function createClientForTesting(
    type?: 'rodsadmin' | 'rodsuser'
): IrodsHttpClient {
    if (type === 'rodsadmin' || !type) return rodsadmin
    return rodsuser
}
