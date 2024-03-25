"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanObject = void 0;
// deno-lint-ignore no-explicit-any
function cleanObject(object) {
    for (const [k, v] of Object.entries(object)) {
        switch (typeof v) {
            case "undefined":
                delete object[k];
                break;
        }
    }
    return object;
}
exports.cleanObject = cleanObject;
