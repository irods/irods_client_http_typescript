import { Wrapper } from '../wrapper'
import type { URLComponentsType } from '../types'

const urlComponents: URLComponentsType = {
    host: 'localhost',
    port: '9090',
    version: '0.3.0',
}

const rodsadmin = new Wrapper(urlComponents, 'rods', 'rods')
const rodsuser = new Wrapper(urlComponents, 'alice', 'alicepass')

beforeAll(async () => {
    await rodsadmin.authenticate()
    await rodsuser.authenticate()
})

export function createClientForTesting(
    type?: 'rodsadmin' | 'rodsuser'
): Wrapper {
    if (type === 'rodsadmin' || !type) return rodsadmin
    return rodsuser
}
