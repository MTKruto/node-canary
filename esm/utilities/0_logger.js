// deno-lint-ignore-file no-explicit-any
import * as dntShim from "../_dnt.shims.js";
let verbosity = Number("LOG_VERBOSITY" in dntShim.dntGlobalThis ? dntShim.dntGlobalThis.LOG_VERBOSITY : "Deno" in dntShim.dntGlobalThis ? dntShim.dntGlobalThis.Deno.env.get("LOG_VERBOSITY") : "process" in dntShim.dntGlobalThis ? dntShim.dntGlobalThis.process.env.LOG : "") || 0;
export function setLogVerbosity(verbosity_) {
    verbosity = verbosity_;
}
export const ERROR = 1;
export const WARNING = 2;
export const INFO = 3;
export const DEBUG = 4;
export const TRACE = 5;
export const IN = 10;
export const OUT = 10;
export const IN_BIN = 20;
export const OUT_BIN = 20;
const INA = ">".repeat(6);
const OUTA = "<".repeat(6);
function toHex(p) {
    let s = "";
    for (const b of p) {
        s += b.toString(16).toUpperCase().padStart(2, "0");
    }
    return s;
}
export function getLogger(scope) {
    return {
        client(id) {
            return getLogger(`${id.toString().padStart(2)} ${scope}`);
        },
        branch(name) {
            return getLogger(`${scope}::${name}`);
        },
        error(...args) {
            this.log(ERROR, ...args);
        },
        warning(...args) {
            this.log(WARNING, ...args);
        },
        info(...args) {
            this.log(INFO, ...args);
        },
        debug(...args) {
            this.log(DEBUG, ...args);
        },
        trace(...args) {
            this.log(TRACE, ...args);
        },
        in(...args) {
            this.log(IN, INA, ...args);
        },
        out(...args) {
            this.log(OUT, OUTA, ...args);
        },
        inBin(p) {
            if (verbosity < IN_BIN) { // So it is not converted to hex
                return;
            }
            this.log(IN_BIN, INA, toHex(p));
        },
        outBin(p) {
            if (verbosity < OUT_BIN) { // So it is not unnecessarilly converted to hex
                return;
            }
            this.log(OUT_BIN, OUTA, toHex(p));
        },
        log(verbosity_, ...args) {
            if (verbosity < verbosity_) {
                return;
            }
            let fn;
            switch (verbosity_) {
                case ERROR:
                    fn = console.error;
                    break;
                case WARNING:
                    fn = console.warn;
                    break;
                case INFO:
                    fn = console.info;
                    break;
                case DEBUG:
                    fn = console.debug;
                    break;
                default:
                    fn = console.log;
            }
            fn(`[${verbosity_} ${scope}]`, ...args);
        },
    };
}
