import Wrapper from "./src/wrapper";

const urlComponents: URLComponentsType = {
    host: "localhost",
    port: "9090",
    version: "0.3.0"
}

const api = new Wrapper(urlComponents, "rods", "rods");

const res = await api.resources.remove({
    op: "remove",
    name: "wrapperResc"
})
console.log(res.data)

