import { createClientForTesting } from './setupTests'

describe('TicketTests', () => {
    const api = createClientForTesting()
    let ticketName: string | undefined

    test('Create and remove ticket', async () => {
        const createRes = await api.tickets.create({
            lpath: '/tempZone/home/rods',
        })
        expect(createRes).toBeTruthy()
        expect(createRes?.irods_response.status_code).toEqual(0)
        expect(createRes?.ticket).toBeTruthy()
        ticketName = createRes!.ticket

        const removeRes = await api.tickets.remove({
            name: ticketName,
        })
        expect(removeRes).toBeTruthy()
        expect(removeRes?.irods_response.status_code).toEqual(0)
    })
})
