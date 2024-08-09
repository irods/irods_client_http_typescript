# iRODS TypeScript HTTP API Wrapper

## Installation

```
npm install git+https://github.com/irods/irods_client_http_typescript
```

## Usage

The following example demonstrates how the client can be used to create a new collection.

```js
import { IrodsHttpClient } from 'irods_client_http_typescript'
import type { URLComponentsType } from 'irods_client_http_typescript'
import assert from 'assert'

// Create a url configuration object, containing info about
// the irods http api that's running on your local machine.
const urlComponents: URLComponentsType = {
    host: '<host>',
    port: '<port>',
    version: '<version>',
}

// Create an IrodsHttpClient object.
// <username> and <password> are placeholders.
const api = new IrodsHttpClient(urlComponents, '<username>', '<password>')

// <username> is the same placeholder value used above.
let lpath = "/tempZone/home/<username>/newCollection"

// After authenticating the client in an asynchronous context,
// any operations of the api can be done.
async function authenticateAndCreateCollection(lpath: string) {
    try {
        await api.authenticate()
        let res = await api.collections.create({lpath: lpath})

        // res.status contains the http status code of the response.
        // If res.status >= 400, then res.data is null and there was an error.
        assert(res.status < 400, 'Error obtaining response!')

        // At this point, the response went through, so res.data shouldn't be null.
        // If the irods_response status code is non-zero, there was an error.
        assert(
            res.data !== null && res.data.irods_response.status_code >= 0, 
            'Error with response data!'
        )

        console.log('Response obtained:', res)
    }
    catch (e) {
        if (e instanceof AssertionError) {
            console.log(e.message)
        }
        else {
            console.log('Unexpected error:', e)
        }
    }
}

authenticateAndCreateCollection(lpath);
```

## Contributing

### Documentation

This repository utilizes the `typedoc` package to auto-generate documentation.

If a change has been made to the codebase, the typedocs can be updated by running `npx typedoc` from the root of the repository.