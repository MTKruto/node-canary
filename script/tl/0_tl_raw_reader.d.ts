export declare class TLError extends Error {
}
export declare class TLRawReader {
    protected _buffer: Uint8Array;
    constructor(_buffer: Uint8Array);
    get buffer(): Uint8Array;
    read(count: number): Uint8Array;
    readInt24(signed?: boolean): number;
    readInt32(signed?: boolean): number;
    readInt64(signed?: boolean): bigint;
    readDouble(): number;
    readInt128(signed?: boolean): bigint;
    readInt256(signed?: boolean): bigint;
    readBytes(): Uint8Array;
    readString(): string;
}
