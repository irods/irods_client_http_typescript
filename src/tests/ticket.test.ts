import { getAPI } from './setupTests'

describe('TicketTests', () => {
    const api = getAPI()
    let ticketName: string | undefined

    test('Create ticket', async () => {
        const res = await api.tickets.create({
            lpath: '/tempZone/home/rods',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
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
        expect(res?.irods_response.status_code).toEqual(0)
    })
})
