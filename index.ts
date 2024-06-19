import Wrapper from "./src/wrapper";

const api = new Wrapper("http://localhost:9090/irods-http-api/0.3.0", "rods", "rods");
const res = api.resource_create({
    op: "create",
    name: "wrapperResc",
    type: "unixfilesystem",
    host: "ip-172-31-12-211",
    "vault-path": "/var/lib/irods/new_vault"
})
console.log(res)