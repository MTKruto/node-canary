"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rleDecode = exports.rleEncode = void 0;
function rleEncode(s) {
    const r = new Array();
    let n = 0;
    for (const b of s) {
        if (!b) {
            if (n == 255) {
                r.push(0);
                r.push(n);
                n = 1;
            }
            else {
                n++;
            }
        }
        else {
            if (n) {
                r.push(0);
                r.push(n);
                n = 0;
            }
            r.push(b);
        }
    }
    if (n) {
        r.push(0);
        r.push(n);
    }
    return new Uint8Array(r);
}
exports.rleEncode = rleEncode;
function rleDecode(s) {
    const r = new Array();
    let z = false;
    for (const b of s) {
        if (!b) {
            z = true;
            continue;
        }
        if (z) {
            for (let i = 0; i < b; i++) {
                r.push(0);
            }
            z = false;
        }
        else {
            r.push(b);
        }
    }
    return new Uint8Array(r);
}
exports.rleDecode = rleDecode;
