export declare class TLRawWriter {
    protected _buffer: Uint8Array;
    constructor();
    get buffer(): Uint8Array;
    write(buffer: Uint8Array): typeof this;
    writeInt24(int: number, signed?: boolean): typeof this;
    writeInt32(int: number, signed?: boolean): typeof this;
    writeInt64(int: bigint, signed?: boolean): typeof this;
    writeDouble(double: number): typeof this;
    writeInt128(int: bigint, signed?: boolean): typeof this;
    writeInt256(int: bigint, signed?: boolean): typeof this;
    writeBytes(bytes: Uint8Array): typeof this;
    writeString(string: string): typeof this;
}
