"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GZheader {
    constructor() {
        /* true if compressed data believed to be text */
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /* modification time */
        Object.defineProperty(this, "time", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /* extra flags (not used when writing a gzip file) */
        Object.defineProperty(this, "xflags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /* operating system */
        Object.defineProperty(this, "os", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /* pointer to extra field or Z_NULL if none */
        Object.defineProperty(this, "extra", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        /* extra field length (valid if extra != Z_NULL) */
        Object.defineProperty(this, "extra_len", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        }); // Actually, we don't need it in JS,
        // but leave for few code modifications
        //
        // Setup limits is not necessary because in js we should not preallocate memory
        // for inflate use constant limit in 65536 bytes
        //
        /* space at extra (only when reading header) */
        // extra_max  = 0;
        /* pointer to zero-terminated file name or Z_NULL */
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        /* space at name (only when reading header) */
        // name_max   = 0;
        /* pointer to zero-terminated comment or Z_NULL */
        Object.defineProperty(this, "comment", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        /* space at comment (only when reading header) */
        // comm_max   = 0;
        /* true if there was or will be a header crc */
        Object.defineProperty(this, "hcrc", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /* true when done reading gzip header (not used when writing a gzip file) */
        Object.defineProperty(this, "done", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
}
exports.default = GZheader;
