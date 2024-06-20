import Wrapper from "./src/wrapper";

const baseURL: BaseURLType = {
    host: "localhost",
    port: "9090",
    version: "0.3.0"
}

const api = new Wrapper("http://localhost:9090/irods-http-api/0.3.0", "rods", "rods");

const res = await api.resources.create({
    op: "create",
    name: "wrapperResc",
    type: "unixfilesystem",
    host: "ip-172-31-12-211",
    "vault-path": "/var/lib/irods/new_vault"
})
console.log(res.data)

