# iRODS TypeScript HTTP API Wrapper

## Getting Started

1. Install npm package: 

```
npm install git+https://github.com/irods/irods_client_http_typescript
```

2. Import `Wrapper` class:

```
import { Wrapper } from 'irods_client_http_typescript'
```

3. Create a url configuration object, containing info about the irods http api that's running on your local machine:

```
const urlComponents: URLComponentsType = {
    host: '<host>',
    port: '<port>',
    version: '<version>',
}
```

4. Create a wrapper object, passing in the url components, as well as the username and password you want to log in with:
```
const api = new Wrapper(urlComponents, '<username>', '<password>')
```

5. Authenticate the wrapper object within an asynchronous context

```
(async () => {
    await api.authenticate()
})
```


- **Note**: This code is assuming you're not already within an asynchronous context, such as an async function. 

6. All operations of the wrapper can now be done within an asynchronous context as well, e.g.,

```
import { CollectionTypes } from "irods-http-api-wrapper";

// Declare type of res if working in typescript, otherwise just put 'let res'
let res: CollectionTypes.CollectionCreateResponse | null
let lpath = "/tempZone/home/user/newCollection"

(async () => {
    res = await api.collections.create({
        lpath: lpath
    })
})
```