export function toFormData(params: Record<string, any>): FormData {
    const formData = new FormData();
    for (const key in params) {
        if (params[key] !== undefined) {
            // can only append strings and Blobs to formdata
            if (typeof params[key] !== "string" && !(params[key] instanceof Blob))
                formData.append(key, params[key].toString());
            else
                formData.append(key, params[key])
        }
    }
    return formData;
}