import { Wrapper } from '../../src/wrapper/index.js'
import type { URLComponentsType } from '../types/general_types.js'

describe('AuthTests', () => {
    const urlComponents: URLComponentsType = {
        host: 'localhost',
        port: '9090',
        version: '0.3.0',
    }

    const api = new Wrapper(urlComponents, 'rods', 'rods')

    test('Auth token is received', async () => {
        await api.authenticate()
        expect(api.getToken()).toBeTruthy()
    })
})
