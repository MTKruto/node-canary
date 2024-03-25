export function concatUint8Array(arr) {
    const length = arr.reduce((pre, next) => pre + next.length, 0);
    const result = new Uint8Array(length);
    let offset = 0;
    for (const v of arr) {
        result.set(v, offset);
        offset += v.length;
    }
    return result;
}
