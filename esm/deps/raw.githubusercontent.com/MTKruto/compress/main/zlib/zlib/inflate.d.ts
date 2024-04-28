import type ZStream from "./zstream.js";
export declare class InflateState {
    mode: number;
    last: boolean;
    wrap: number;
    havedict: boolean;
    flags: number;
    dmax: number;
    check: number;
    total: number;
    head: null;
    wbits: number;
    wsize: number;
    whave: number;
    wnext: number;
    window: null;
    hold: number;
    bits: number;
    length: number;
    offset: number;
    extra: number;
    lencode: null;
    distcode: null;
    lenbits: number;
    distbits: number;
    ncode: number;
    nlen: number;
    ndist: number;
    have: number;
    next: null;
    lens: Uint16Array;
    work: Uint16Array;
    lendyn: null;
    distdyn: null;
    sane: number;
    back: number;
    was: number;
}
export declare function inflateResetKeep(strm: ZStream): 0 | -2;
export declare function inflateReset(strm: ZStream): 0 | -2;
export declare function inflateReset2(strm: any, windowBits: any): 0 | -2;
export declare function inflateInit2(strm: ZStream, windowBits: any): number;
export declare function inflateInit(strm: ZStream): number;
export declare function inflate(strm: ZStream, flush: any): number;
export declare function inflateEnd(strm: ZStream): 0 | -2;
export declare function inflateGetHeader(strm: ZStream, head: any): 0 | -2;
export declare function inflateSetDictionary(strm: ZStream, dictionary: any): 0 | -2 | -3 | -4;
//# sourceMappingURL=inflate.d.ts.map