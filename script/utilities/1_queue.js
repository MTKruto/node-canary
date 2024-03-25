"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Queue_instances, _Queue_logger, _Queue_busy, _Queue_check;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
const _0_logger_js_1 = require("./0_logger.js");
class Queue {
    constructor(name) {
        _Queue_instances.add(this);
        _Queue_logger.set(this, void 0);
        Object.defineProperty(this, "functions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Array()
        });
        _Queue_busy.set(this, false);
        __classPrivateFieldSet(this, _Queue_logger, (0, _0_logger_js_1.getLogger)(`q/${name}`), "f");
    }
    add(fn) {
        this.functions.push(fn);
        __classPrivateFieldGet(this, _Queue_instances, "m", _Queue_check).call(this);
    }
}
exports.Queue = Queue;
_Queue_logger = new WeakMap(), _Queue_busy = new WeakMap(), _Queue_instances = new WeakSet(), _Queue_check = function _Queue_check() {
    if (__classPrivateFieldGet(this, _Queue_busy, "f")) {
        return;
    }
    else {
        __classPrivateFieldSet(this, _Queue_busy, true, "f");
    }
    const fn = this.functions.shift();
    if (fn !== undefined) {
        fn()
            .catch((err) => {
            __classPrivateFieldGet(this, _Queue_logger, "f").error((typeof err === "object" && err != null && "stack" in err) ? err.stack : err);
        })
            .finally(() => {
            __classPrivateFieldSet(this, _Queue_busy, false, "f");
            __classPrivateFieldGet(this, _Queue_instances, "m", _Queue_check).call(this);
        });
    }
    else {
        __classPrivateFieldSet(this, _Queue_busy, false, "f");
    }
};