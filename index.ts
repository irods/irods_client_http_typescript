import Wrapper from './src/wrapper'

const urlComponents: URLComponentsType = {
    host: 'localhost',
    port: '9090',
    version: '0.3.0',
}

const api = new Wrapper(urlComponents, 'alice', 'alicepass')
const res = await api.collections.list({ lpath: '/tempZone/home/alice' })
// const res = await api.collections.remove({ lpath: "/tempZone/home/testing" })

// const res = await api.collections.stat({ lpath: "/tempZone/home/rods" })
console.log(res)
