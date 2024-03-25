"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionFramed = exports.ConnectionUnframed = void 0;
class Foundation {
    constructor() {
        Object.defineProperty(this, "stateChangeHandler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "callback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
class ConnectionUnframed extends Foundation {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "framed"
        });
    }
}
exports.ConnectionUnframed = ConnectionUnframed;
class ConnectionFramed extends Foundation {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "framed"
        });
    }
}
exports.ConnectionFramed = ConnectionFramed;
