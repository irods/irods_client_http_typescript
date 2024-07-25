import { createClientForTesting } from './setupTests'

describe('TicketTests', () => {
    const api = createClientForTesting()
    let ticketName: string | undefined

    test('Create and remove ticket', async () => {
        const createRes = await api.tickets.create({
            lpath: '/tempZone/home/rods',
        })
        expect(createRes.data).toBeTruthy()
        expect(createRes.status).toEqual(200)
        expect(createRes.data?.irods_response.status_code).toEqual(0)
        expect(createRes.data?.ticket).toBeTruthy()
        ticketName = createRes.data!.ticket

        const removeRes = await api.tickets.remove({
            name: ticketName,
        })
        expect(removeRes).toBeTruthy()
        expect(removeRes.status).toEqual(200)
        expect(removeRes.data?.irods_response.status_code).toEqual(0)
    })
})
