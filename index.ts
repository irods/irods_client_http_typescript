import Wrapper from './src/wrapper'

const urlComponents: URLComponentsType = {
    host: 'localhost',
    port: '9090',
    version: '0.3.0',
}

const api = new Wrapper(urlComponents, 'rods', 'rods')
// api.authenticate();

const res = await api.collections.create({ lpath: '/tempZone/home/testing' })


// const res = await api.collections.remove({ lpath: "/tempZone/home/testing" })

// const res = await api.collections.stat({ lpath: "/tempZone/home/rods" })

console.log('Response: ', res)
