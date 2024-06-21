export function toURLSearchParams(params: Record<string, any>): URLSearchParams {
    const searchParams = new URLSearchParams();
    for (const key in params) {
        if (params[key] !== undefined) {
            searchParams.append(key, params[key].toString());
        }
    }
    return searchParams;
}