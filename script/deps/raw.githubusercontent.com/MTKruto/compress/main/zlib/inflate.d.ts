import STATUS from "./zlib/status.js";
import ZStream from "./zlib/zstream.js";
import GZheader from "./zlib/gzheader.js";
export interface InflateOptions {
    windowBits?: number;
    dictionary?: Uint8Array;
    chunkSize?: number;
    to?: string;
    raw?: boolean;
}
export declare class Inflate {
    err: STATUS;
    msg: string;
    ended: boolean;
    strm: ZStream;
    options: any;
    header: GZheader;
    constructor(options: InflateOptions);
    push(data: Uint8Array, mode: boolean | number): Uint8Array;
}
declare function inflate(input: Uint8Array, options?: InflateOptions): Uint8Array;
export declare const gunzip: typeof inflate;
export {};
