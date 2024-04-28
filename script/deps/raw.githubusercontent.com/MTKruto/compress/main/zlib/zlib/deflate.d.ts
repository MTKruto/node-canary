import { CODE } from "./messages.js";
import type ZStream from "./zstream.js";
import STATUS from "./status.js";
export interface Header {
    text: boolean;
    time: number;
    os: number;
    extra: string[];
    name: string;
    comment: string;
    hcrc: boolean;
}
export declare class DeflateState {
    strm: ZStream | null;
    status: number;
    pending_buf: any;
    pending_buf_size: number;
    pending_out: number;
    pending: number;
    wrap: number;
    gzhead: Header | null;
    gzindex: number;
    method: number;
    last_flush: number;
    w_size: number;
    w_bits: number;
    w_mask: number;
    window: any;
    window_size: number;
    prev: any;
    head: any;
    ins_h: number;
    hash_size: number;
    hash_bits: number;
    hash_mask: number;
    hash_shift: number;
    block_start: number;
    match_length: number;
    prev_match: number;
    match_available: number;
    strstart: number;
    match_start: number;
    lookahead: number;
    prev_length: number;
    max_chain_length: number;
    max_lazy_match: number;
    level: number;
    strategy: number;
    good_match: number;
    nice_match: number;
    dyn_ltree: Uint16Array;
    dyn_dtree: Uint16Array;
    bl_tree: Uint16Array;
    l_desc: null;
    d_desc: null;
    bl_desc: null;
    bl_count: Uint16Array;
    heap: Uint16Array;
    heap_len: number;
    heap_max: number;
    depth: Uint16Array;
    l_buf: number;
    lit_bufsize: number;
    last_lit: number;
    d_buf: number;
    opt_len: number;
    static_len: number;
    matches: number;
    insert: number;
    bi_buf: number;
    bi_valid: number;
    constructor();
}
export declare function deflateSetHeader(strm: ZStream, head: Header): 0 | -2;
export declare function deflateInit2(strm: ZStream, level: number, method: number, windowBits: number, memLevel: number, strategy: number): CODE;
export declare function deflate(strm: ZStream, flush: number): CODE | -2 | STATUS.Z_NO_FLUSH | STATUS.Z_PARTIAL_FLUSH;
export declare function deflateEnd(strm: ZStream): any;
export declare function deflateSetDictionary(strm: ZStream, dictionary: Uint8Array): any;
//# sourceMappingURL=deflate.d.ts.map