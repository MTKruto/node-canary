export default class ZStream {
    constructor() {
        /* next input byte */
        Object.defineProperty(this, "input", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        }); // JS specific, because we have no pointers
        Object.defineProperty(this, "next_in", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /* number of bytes available at input */
        Object.defineProperty(this, "avail_in", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /* total number of input bytes read so far */
        Object.defineProperty(this, "total_in", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /* next output byte should be put there */
        Object.defineProperty(this, "output", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        }); // JS specific, because we have no pointers
        Object.defineProperty(this, "next_out", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /* remaining free space at output */
        Object.defineProperty(this, "avail_out", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /* total number of bytes output so far */
        Object.defineProperty(this, "total_out", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /* last error message, NULL if no error */
        Object.defineProperty(this, "msg", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "" /*Z_NULL*/
        });
        /* not visible by applications */
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        /* best guess about the data type: binary or text */
        Object.defineProperty(this, "data_type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 2 /*Z_UNKNOWN*/
        });
        /* adler32 value of the uncompressed data */
        Object.defineProperty(this, "adler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
    }
}
