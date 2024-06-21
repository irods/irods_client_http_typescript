import Wrapper from "./src/wrapper";

const urlComponents: URLComponentsType = {
    host: "localhost",
    port: "9090",
    version: "0.3.0"
}

const api = new Wrapper(urlComponents, "rods", "rods");

// const res = await api.resources.create({
//     name: "wrapperResc",
//     type: "unixfilesystem",
//     host: "ip-172-31-12-211",
//     "vault-path": "/var/lib/irods/new_vault"
// })
const res = await api.resources.remove({
    name: "wrapperResc"
})
console.log(res.data)

