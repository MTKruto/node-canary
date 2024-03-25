"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gunzip = exports.Inflate = void 0;
// from https://github.com/nodeca/pako
const uint8_js_1 = require("../utils/uint8.js");
const zlibInflate = __importStar(require("./zlib/inflate.js"));
const status_js_1 = __importDefault(require("./zlib/status.js"));
const messages_js_1 = require("./zlib/messages.js");
const zstream_js_1 = __importDefault(require("./zlib/zstream.js"));
const gzheader_js_1 = __importDefault(require("./zlib/gzheader.js"));
class Inflate {
    constructor(options) {
        Object.defineProperty(this, "err", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        }); // error code, if happens (0 = Z_OK)
        Object.defineProperty(this, "msg", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        }); // error message
        Object.defineProperty(this, "ended", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        }); // used to avoid multiple onEnd() calls
        Object.defineProperty(this, "strm", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "header", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.options = {
            chunkSize: 16384,
            windowBits: 0,
            to: "",
            ...options,
        };
        const opt = this.options;
        // Force window size for `raw` data, if not set directly,
        // because we have no header for autodetect.
        if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
            opt.windowBits = -opt.windowBits;
            if (opt.windowBits === 0)
                opt.windowBits = -15;
        }
        // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
        if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
            !(options && options.windowBits)) {
            opt.windowBits += 32;
        }
        // Gzip header has no info about windows size, we can do autodetect only
        // for deflate. So, if window size not set, force it to max when gzip possible
        if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
            // bit 3 (16) -> gzipped data
            // bit 4 (32) -> autodetect gzip/deflate
            if ((opt.windowBits & 15) === 0) {
                opt.windowBits |= 15;
            }
        }
        this.strm = new zstream_js_1.default();
        this.strm.avail_out = 0;
        var status = zlibInflate.inflateInit2(this.strm, opt.windowBits);
        if (status !== status_js_1.default.Z_OK) {
            throw new Error(messages_js_1.message[status]);
        }
        this.header = new gzheader_js_1.default();
        zlibInflate.inflateGetHeader(this.strm, this.header);
        // Setup dictionary
        if (opt.dictionary) {
            if (opt.raw) { //In raw mode we need to set the dictionary early
                status = zlibInflate.inflateSetDictionary(this.strm, opt.dictionary);
                if (status !== status_js_1.default.Z_OK) {
                    throw new Error(messages_js_1.message[status]);
                }
            }
        }
    }
    push(data, mode) {
        const strm = this.strm;
        const chunkSize = this.options.chunkSize;
        const dictionary = this.options.dictionary;
        const chunks = [];
        let status;
        // Flag to properly process Z_BUF_ERROR on testing inflate call
        // when we check that all output data was flushed.
        var allowBufError = false;
        if (this.ended) {
            throw new Error("can not call after ended");
        }
        let _mode = (mode === ~~mode)
            ? mode
            : ((mode === true) ? status_js_1.default.Z_FINISH : status_js_1.default.Z_NO_FLUSH);
        strm.input = data;
        strm.next_in = 0;
        strm.avail_in = strm.input.length;
        do {
            if (strm.avail_out === 0) {
                strm.output = new Uint8Array(chunkSize);
                strm.next_out = 0;
                strm.avail_out = chunkSize;
            }
            status = zlibInflate.inflate(strm, status_js_1.default.Z_NO_FLUSH); /* no bad return value */
            if (status === status_js_1.default.Z_NEED_DICT && dictionary) {
                status = zlibInflate.inflateSetDictionary(this.strm, dictionary);
            }
            if (status === status_js_1.default.Z_BUF_ERROR && allowBufError === true) {
                status = status_js_1.default.Z_OK;
                allowBufError = false;
            }
            if (status !== status_js_1.default.Z_STREAM_END && status !== status_js_1.default.Z_OK) {
                this.ended = true;
                throw new Error(this.strm.msg);
            }
            if (strm.next_out) {
                if (strm.avail_out === 0 || status === status_js_1.default.Z_STREAM_END ||
                    (strm.avail_in === 0 &&
                        (_mode === status_js_1.default.Z_FINISH || _mode === status_js_1.default.Z_SYNC_FLUSH))) {
                    chunks.push(strm.output.subarray(0, strm.next_out));
                }
            }
            // When no more input data, we should check that internal inflate buffers
            // are flushed. The only way to do it when avail_out = 0 - run one more
            // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
            // Here we set flag to process this error properly.
            //
            // NOTE. Deflate does not return error in this case and does not needs such
            // logic.
            if (strm.avail_in === 0 && strm.avail_out === 0) {
                allowBufError = true;
            }
        } while ((strm.avail_in > 0 || strm.avail_out === 0) &&
            status !== status_js_1.default.Z_STREAM_END);
        if (status === status_js_1.default.Z_STREAM_END) {
            _mode = status_js_1.default.Z_FINISH;
        }
        // Finalize on the last chunk.
        if (_mode === status_js_1.default.Z_FINISH) {
            status = zlibInflate.inflateEnd(this.strm);
            this.ended = true;
            if (status !== status_js_1.default.Z_OK)
                throw new Error(this.strm.msg);
        }
        // callback interim results if Z_SYNC_FLUSH.
        if (_mode === status_js_1.default.Z_SYNC_FLUSH) {
            strm.avail_out = 0;
        }
        return (0, uint8_js_1.concatUint8Array)(chunks);
    }
}
exports.Inflate = Inflate;
function inflate(input, options = {}) {
    const inflator = new Inflate(options);
    const result = inflator.push(input, true);
    // That will never happens, if you don't cheat with options :)
    if (inflator.err)
        throw inflator.msg || messages_js_1.message[inflator.err];
    return result;
}
exports.gunzip = inflate;
