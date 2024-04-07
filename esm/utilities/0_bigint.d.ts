export declare function modExp(a: bigint, b: bigint, n: bigint): bigint;
export declare function mod(n: bigint, m: bigint): bigint;
export declare function mod(n: number, m: number): number;
export declare function bigIntFromBuffer(buffer: Uint8Array, little?: boolean, signed?: boolean): bigint;
export declare function getRandomBigInt(byteLength: number, little?: boolean, signed?: boolean): bigint;
/** Get a random ID. Useful when calling API functions directly. */
export declare function getRandomId(): bigint;
export declare function gcd(a: bigint, b: bigint): bigint;
