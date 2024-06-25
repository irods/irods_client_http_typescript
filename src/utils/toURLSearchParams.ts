export function toURLSearchParams(params: Record<string, any>): URLSearchParams {
    const searchParams = new URLSearchParams();
    for (const key in params) {
        if (params[key] !== undefined) {
            // [{arrKey: arrVal,...},...]
            if (typeof params[key] === "object") {
                searchParams.append(key, JSON.stringify(params[key]))
                // for (let i = 0; i < params[key].length; i++) {
                //     for (const arrKey in params[key][i]) {
                //         searchParams.append(`${key}[${i}].${arrKey}`, params[key][i][arrKey])
                //     }
                // }
            }
            // may stomp duplicate keys - check if duplicate overrides initial value
            else
                searchParams.append(key, params[key].toString());
        }
    }
    return searchParams;
}