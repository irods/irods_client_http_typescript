import { Wrapper } from '../wrapper/index.js'
import type { URLComponentsType } from '../types/general_types.js'

describe('TicketTests', () => {
    const urlComponents: URLComponentsType = {
        host: 'localhost',
        port: '9090',
        version: '0.3.0',
    }

    const api = new Wrapper(urlComponents, 'rods', 'rods')
    let ticketName: string | undefined

    beforeAll(async () => {
        await api.authenticate()
    })

    test('Create ticket', async () => {
        const res = await api.tickets.create({
            lpath: '/tempZone/home/rods',
        })
        expect(res).toBeTruthy()
        expect(res?.ticket).toBeTruthy()
        ticketName = res?.ticket
    })

    test('Remove ticket', async () => {
        expect(ticketName).toBeTruthy()
        if (!ticketName) return
        const res = await api.tickets.remove({
            name: ticketName,
        })
        expect(res).toBeTruthy()
    })
})
