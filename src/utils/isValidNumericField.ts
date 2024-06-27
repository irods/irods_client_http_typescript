// For fields that can be any number (and are optional, which all of them are),
// they are valid if either it doesn't exist or if it is a numeric string
export function isValidNumericField(str: string | undefined): boolean {
    return str === undefined || (str !== undefined && !isNaN(Number(str)))
}
