// import Wrapper from '../wrapper/wrapper'

// const urlComponents: URLComponentsType = {
//     host: 'localhost',
//     port: '9090',
//     version: '0.3.0',
// }

// const api = new Wrapper(urlComponents, 'alice', 'alicepass')

// const res = await api.collections.create({ lpath: "/tempZone/home/testing", "create-intermediates": 0 })

// const res = await api.collections.remove({ lpath: "/tempZone/home/testing" })

// const res = await api.collections.stat({ lpath: "/tempZone/home/rods" })

// const res = await api.collections.list({ lpath: "/tempZone/home" })

// const res = await api.collections.set_permission({ lpath: "/tempZone/home/rods", "entity-name": "alice", permission: "read" })

// const res = await api.collections.set_inheritance({ lpath: "/tempZone/home/rods", enable: 1 })

// const res = await api.collections.modify_permissions({
//     lpath: "/tempZone/home/chris",
//     operations: [
//         {
//             entity_name: "rods",
//             acl: "write"
//         }
//     ]
// })

// const res = await api.collections.modify_metadata({
//     lpath: "/tempZone/home/rods",
//     operations: [
//         {
//             operation: "remove",
//             attribute: "testAttr",
//             value: "testVal",
//             units: "testUnits"
//         }
//     ]
// })

// const res = await api.collections.rename({ "old-lpath": "/tempZone/home/rodsTest", "new-lpath": "/tempZone/home/rods" })

// const res = await api.collections.touch({
//     lpath: "/tempZone/home/rods"
// })

// console.log(res?.data)
