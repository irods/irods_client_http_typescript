import { getAPI } from './setupTests.js'

describe('UserGroupTests', () => {
    const api = getAPI()

    let userName = 'testUser'
    let groupName = 'testGroup'
    let zoneName = 'tempZone'

    test('Create user', async () => {
        const res = await api.users_groups.create_user({
            name: userName,
            zone: zoneName,
            'user-type': 'rodsuser',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Set user password', async () => {
        const res = await api.users_groups.set_password({
            name: userName,
            zone: zoneName,
            'new-password': 'testPassword',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Set user type', async () => {
        const res = await api.users_groups.set_user_type({
            name: userName,
            zone: zoneName,
            'new-user-type': 'rodsadmin',
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Create group', async () => {
        const res = await api.users_groups.create_group({
            name: groupName,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Add user to group', async () => {
        const res = await api.users_groups.add_to_group({
            user: userName,
            group: groupName,
            zone: zoneName,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Is user member of group', async () => {
        const res = await api.users_groups.is_member_of_group({
            user: userName,
            group: groupName,
            zone: zoneName,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Remove user from group', async () => {
        const res = await api.users_groups.remove_from_group({
            user: userName,
            group: groupName,
            zone: zoneName,
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
            name: userName,
            zone: zoneName,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Modify metadata for a user or group', async () => {
        const res = await api.users_groups.modify_metadata({
            name: userName,
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
            name: userName,
            zone: zoneName,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })

    test('Remove group', async () => {
        const res = await api.users_groups.remove_group({
            name: groupName,
        })
        expect(res).toBeTruthy()
        expect(res?.irods_response.status_code).toEqual(0)
    })
})
