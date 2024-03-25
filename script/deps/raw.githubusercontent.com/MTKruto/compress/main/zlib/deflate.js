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
exports.gzip = exports.Deflate = void 0;
// from https://github.com/nodeca/pako
const zlibDeflate = __importStar(require("./zlib/deflate.js"));
const uint8_js_1 = require("../utils/uint8.js");
const messages_js_1 = require("./zlib/messages.js");
const zstream_js_1 = __importDefault(require("./zlib/zstream.js"));
const status_js_1 = __importDefault(require("./zlib/status.js"));
class Deflate {
    constructor(options = {}) {
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
        Object.defineProperty(this, "_dict_set", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.options = Object.assign({
            level: status_js_1.default.Z_DEFAULT_COMPRESSION,
            method: status_js_1.default.Z_DEFLATED,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: status_js_1.default.Z_DEFAULT_STRATEGY,
            to: "",
        }, options);
        const opt = this.options;
        if (opt.raw && (opt.windowBits > 0)) {
            opt.windowBits = -opt.windowBits;
        }
        else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
            opt.windowBits += 16;
        }
        this.strm = new zstream_js_1.default();
        this.strm.avail_out = 0;
        let status = zlibDeflate.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);
        if (status !== status_js_1.default.Z_OK) {
            throw new Error(messages_js_1.message[status]);
        }
        if (opt.header) {
            zlibDeflate.deflateSetHeader(this.strm, opt.header);
        }
        if (opt.dictionary) {
            status = zlibDeflate.deflateSetDictionary(this.strm, opt.dictionary);
            if (status !== status_js_1.default.Z_OK) {
                throw new Error(messages_js_1.message[status]);
            }
            this._dict_set = true;
        }
    }
    push(data, mode) {
        const strm = this.strm;
        const chunkSize = this.options.chunkSize;
        const chunks = [];
        let status;
        if (this.ended) {
            throw new Error("can not call after ended");
        }
        const _mode = mode === ~~mode
            ? mode
            : (mode === true ? status_js_1.default.Z_FINISH : status_js_1.default.Z_NO_FLUSH);
        strm.input = data;
        strm.next_in = 0;
        strm.avail_in = strm.input.length;
        do {
            if (strm.avail_out === 0) {
                strm.output = new Uint8Array(chunkSize);
                strm.next_out = 0;
                strm.avail_out = chunkSize;
            }
            status = zlibDeflate.deflate(strm, _mode); /* no bad return value */
            if (status !== status_js_1.default.Z_STREAM_END && status !== status_js_1.default.Z_OK) {
                this.ended = true;
                throw new Error(this.strm.msg);
            }
            if (strm.avail_out === 0 ||
                (strm.avail_in === 0 &&
                    (_mode === status_js_1.default.Z_FINISH || _mode === status_js_1.default.Z_SYNC_FLUSH))) {
                chunks.push(strm.output.subarray(0, strm.next_out));
            }
        } while ((strm.avail_in > 0 || strm.avail_out === 0) &&
            status !== status_js_1.default.Z_STREAM_END);
        // Finalize on the last chunk.
        if (_mode === status_js_1.default.Z_FINISH) {
            status = zlibDeflate.deflateEnd(this.strm);
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
exports.Deflate = Deflate;
function deflate(input, options = {}) {
    const deflator = new Deflate(options);
    const result = deflator.push(input, true);
    // That will never happens, if you don't cheat with options :)
    if (deflator.err)
        throw deflator.msg || messages_js_1.message[deflator.err];
    return result;
}
function gzip(input, options = {}) {
    options.gzip = true;
    return deflate(input, options);
}
exports.gzip = gzip;
