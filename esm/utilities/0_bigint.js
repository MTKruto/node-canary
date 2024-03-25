import * as dntShim from "../_dnt.shims.js";
export function modExp(a, b, n) {
    a %= n;
    let result = 1n;
    let x = a;
    while (b > 0n) {
        const leastSignificantBit = b % 2n;
        b /= 2n;
        if (leastSignificantBit == 1n) {
            result *= x;
            result %= n;
        }
        x *= x;
        x %= n;
    }
    return result;
}
export function mod(n, m) {
    // deno-lint-ignore ban-ts-comment
    // @ts-ignore
    return ((n % m) + m) % m;
}
export function bigIntFromBuffer(buffer, little = true, signed = false) {
    let randomBuffer = buffer;
    const bytesLength = randomBuffer.length;
    if (little) {
        randomBuffer = randomBuffer.reverse();
    }
    let bigIntVar = BigInt("0x" + [...randomBuffer].map((v) => v.toString(16).padStart(2, "0")).join(""));
    if (signed && Math.floor(bigIntVar.toString(2).length / 8) >= bytesLength) {
        bigIntVar = bigIntVar - (2n ** (BigInt(bytesLength * 8)));
    }
    return bigIntVar;
}
export function getRandomBigInt(byteLength, little, signed) {
    const randomBytes = new Uint8Array(byteLength);
    dntShim.crypto.getRandomValues(randomBytes);
    return bigIntFromBuffer(randomBytes, little, signed);
}
/** Get a random ID. Useful when calling API functions directly. */
export function getRandomId() {
    return getRandomBigInt(8, true, true);
}
