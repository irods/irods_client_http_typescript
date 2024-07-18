import { getAPI } from './setupTests.js'

describe('UserGroupTests', () => {
    const api = getAPI()

    test('Create user', async () => {
        const res = await api.users_groups.create_user({
            name: 'testUser',
            zone: 'tempZone',
            'user-type': 'rodsuser',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Set user password', async () => {
        const res = await api.users_groups.set_password({
            name: 'testUser',
            zone: 'tempZone',
            'new-password': 'testPassword',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Set user type', async () => {
        const res = await api.users_groups.set_user_type({
            name: 'testUser',
            zone: 'tempZone',
            'new-user-type': 'rodsadmin',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Create group', async () => {
        const res = await api.users_groups.create_group({
            name: 'testGroup',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Add user to group', async () => {
        const res = await api.users_groups.add_to_group({
            user: 'testUser',
            group: 'testGroup',
            zone: 'tempZone',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Is user member of group', async () => {
        const res = await api.users_groups.is_member_of_group({
            user: 'testUser',
            group: 'testGroup',
            zone: 'tempZone',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Remove user from group', async () => {
        const res = await api.users_groups.remove_from_group({
            user: 'testUser',
            group: 'testGroup',
            zone: 'tempZone',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('List users', async () => {
        const res = await api.users_groups.users()
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('List groups', async () => {
        const res = await api.users_groups.groups()
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Stat for a user or group', async () => {
        const res = await api.users_groups.stat({
            name: 'testUser',
            zone: 'tempZone',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Modify metadata for a user or group', async () => {
        const res = await api.users_groups.modify_metadata({
            name: 'testUser',
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

    test('Remove user', async () => {
        const res = await api.users_groups.remove_user({
            name: 'testUser',
            zone: 'tempZone',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Remove group', async () => {
        const res = await api.users_groups.remove_group({
            name: 'testGroup',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })
})
