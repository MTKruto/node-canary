import * as zlibDeflate from "./zlib/deflate.js";
import ZStream from "./zlib/zstream.js";
import STATUS from "./zlib/status.js";
export interface DeflateOptions {
    level?: number;
    method?: number;
    chunkSize?: number;
    windowBits?: number;
    memLevel?: number;
    strategy?: number;
    to?: string;
    raw?: boolean;
    gzip?: boolean;
    dictionary?: Uint8Array;
    header?: zlibDeflate.Header;
}
export declare class Deflate {
    err: STATUS;
    msg: string;
    ended: boolean;
    strm: ZStream;
    _dict_set: boolean;
    options: any;
    constructor(options?: DeflateOptions);
    push(data: Uint8Array, mode: boolean | number): Uint8Array;
}
export declare function gzip(input: Uint8Array, options?: DeflateOptions): Uint8Array;
//# sourceMappingURL=deflate.d.ts.map