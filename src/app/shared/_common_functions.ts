export function checkEmpty(value: any) {
    return value !== '' && value !== null && value !== undefined && value.length !== 0 && JSON.stringify(value) != '{}';
}