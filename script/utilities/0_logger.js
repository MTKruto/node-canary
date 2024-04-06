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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogger = exports.OUT_BIN = exports.IN_BIN = exports.OUT = exports.IN = exports.TRACE = exports.DEBUG = exports.INFO = exports.WARNING = exports.ERROR = exports.setLoggingProvider = exports.setLogVerbosity = void 0;
// deno-lint-ignore-file no-explicit-any
const dntShim = __importStar(require("../_dnt.shims.js"));
let verbosity = Number("LOG_VERBOSITY" in dntShim.dntGlobalThis ? dntShim.dntGlobalThis.LOG_VERBOSITY : "Deno" in dntShim.dntGlobalThis ? dntShim.dntGlobalThis.Deno.env.get("LOG_VERBOSITY") : "process" in dntShim.dntGlobalThis ? dntShim.dntGlobalThis.process.env.LOG : "") || 0;
function setLogVerbosity(verbosity_) {
    verbosity = verbosity_;
}
exports.setLogVerbosity = setLogVerbosity;
let provider = console;
function setLoggingProvider(provider_) {
    provider = provider_;
}
exports.setLoggingProvider = setLoggingProvider;
exports.ERROR = 1;
exports.WARNING = 2;
exports.INFO = 3;
exports.DEBUG = 4;
exports.TRACE = 5;
exports.IN = 10;
exports.OUT = 10;
exports.IN_BIN = 20;
exports.OUT_BIN = 20;
const INA = ">".repeat(6);
const OUTA = "<".repeat(6);
function toHex(p) {
    let s = "";
    for (const b of p) {
        s += b.toString(16).toUpperCase().padStart(2, "0");
    }
    return s;
}
function getLogger(scope) {
    return {
        client(id) {
            return getLogger(`${id.toString().padStart(2)} ${scope}`);
        },
        branch(name) {
            return getLogger(`${scope}::${name}`);
        },
        error(...args) {
            this.log(exports.ERROR, ...args);
        },
        warning(...args) {
            this.log(exports.WARNING, ...args);
        },
        info(...args) {
            this.log(exports.INFO, ...args);
        },
        debug(...args) {
            this.log(exports.DEBUG, ...args);
        },
        trace(...args) {
            this.log(exports.TRACE, ...args);
        },
        in(...args) {
            this.log(exports.IN, INA, ...args);
        },
        out(...args) {
            this.log(exports.OUT, OUTA, ...args);
        },
        inBin(p) {
            if (verbosity < exports.IN_BIN) { // So it is not converted to hex
                return;
            }
            this.log(exports.IN_BIN, INA, toHex(p));
        },
        outBin(p) {
            if (verbosity < exports.OUT_BIN) { // So it is not unnecessarilly converted to hex
                return;
            }
            this.log(exports.OUT_BIN, OUTA, toHex(p));
        },
        log(verbosity_, ...args) {
            if (verbosity < verbosity_) {
                return;
            }
            let fn;
            switch (verbosity_) {
                case exports.ERROR:
                    fn = provider.error;
                    break;
                case exports.WARNING:
                    fn = provider.warn;
                    break;
                case exports.INFO:
                    fn = provider.info;
                    break;
                case exports.DEBUG:
                    fn = provider.debug;
                    break;
                default:
                    fn = provider.log;
            }
            fn(`[${verbosity_} ${scope}]`, ...args);
        },
    };
}
exports.getLogger = getLogger;
