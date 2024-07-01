// import Wrapper from '../wrapper/wrapper'

// const urlComponents: URLComponentsType = {
//     host: 'localhost',
//     port: '9090',
//     version: '0.3.0',
// }

// const api = new Wrapper(urlComponents, 'alice', 'alicepass')

// const res = await api.data_objects.touch({
//     lpath: "/tempZone/home/alice/lemur2.jpg",
// })

// const res = await api.data_objects.remove({
//     lpath: "/tempZone/home/alice/lemur2.jpg",
//     "catalog-only": 0,
//     "no-trash": 1
// })

// const res = await api.data_objects.calculate_checksum({
//     lpath: "/tempZone/home/alice/training_jpgs/beans.jpg"
// })

// const res = await api.data_objects.verify_checksum({
//     lpath: "/tempZone/home/alice/training_jpgs/beans.jpg"
// })

// const res = await api.data_objects.stat({ lpath: "/tempZone/home/alice/training_jpgs/beans.jpg" })

// const res = await api.data_objects.rename({
//     "old-lpath": "/tempZone/home/alice/training_jpgs/beans.jpg",
//     "new-lpath": "/tempZone/home/alice/training_jpgs/beansTest.jpg"
// })

// const res = await api.data_objects.copy({
//     "src-lpath": "/tempZone/home/alice/training_jpgs/beans.jpg"
//     "dst-lpath": "/tempZone/home/alice/beans2.jpg",
// })

// { irods_response: { status_code: -1816000 } }
// const res = await api.data_objects.replicate({
//     lpath: "/tempZone/home/alice/training_jpgs/coffee.jpg",
//     "src-resource": "demoResc",
//     "dst-resource": "newResc",
// })

// { irods_response: { status_code: -164000 } }
// const res = await api.data_objects.trim({
//     lpath: "/tempZone/home/alice/training_jpgs/peanuts.jpg",
//     "replica-number": 1,
// })

// const res = await api.data_objects.register({
//     lpath: "/tempZone/home/alice/training_jpgs/peanuts.jpg",
//     ppath: "uhhh",
//     resource: "testResc"
// })

// const res = await api.data_objects.read({
//     lpath: "/tempZone/home/alice/training_jpgs/peanuts.jpg"
// })

// https://nodejs.org/api/buffer.html#static-method-bufferfromarray
// const testBuffer = Buffer.from("hello world")
// const res = await api.data_objects.write({
//     lpath: "/tempZone/home/alice/test.txt",
//     bytes: testBuffer
// })

// const res = await api.data_objects.parallel_write_init({
//     lpath: "/tempZone/home/alice/test.txt",
//     "stream-count": 1
// })

// const res = await api.data_objects.parallel_write_shutdown({
//     "parallel-write-handle": "52875525-8fe2-4013-973f-5c6448f889f5"
// })

// const res = await api.data_objects.modify_metadata({
//     lpath: "/tempZone/home/alice/test.txt",
//     operations: [
//         {
//             operation: "add",
//             attribute: "testAttr",
//             value: "testVal",
//             units: "testUnits"
//         }
//     ]
// })

// const res = await api.data_objects.set_permission({
//     lpath: "/tempZone/home/alice/test.txt",
//     "entity-name": "rods",
//     permission: "write"
// })

// const res = await api.data_objects.modify_permissions({
//     lpath: "/tempZone/home/alice/test.txt",
//     operations: [
//         {
//             acl: "read",
//             entity_name: "chris"
//         }
//     ]
// })

// Mutually exclusive fields of "replica-number" and "resource-hierarchy", at least 1 optional field must be filled
// { irods_response: { status_code: -13000 } } - don't have admin privileges
// const res = await api.data_objects.modify_replica({
//     lpath: "/tempZone/home/alice/test.txt",
//     "replica-number": 0,
//     "new-data-comments": "test comment",
// })
