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
exports.gcd = exports.getRandomId = exports.getRandomBigInt = exports.bigIntFromBuffer = exports.mod = exports.modExp = void 0;
const dntShim = __importStar(require("../_dnt.shims.js"));
function modExp(a, b, n) {
    a %= n;
    let result = 1n;
    let x = a;
    while (b > 0n) {
        const leastSignificantBit = b % 2n;
        b /= 2n;
        if (leastSignificantBit == 1n) {
            result *= x;
            result %= n;
        }
        x *= x;
        x %= n;
    }
    return result;
}
exports.modExp = modExp;
function mod(n, m) {
    // deno-lint-ignore ban-ts-comment
    // @ts-ignore
    return ((n % m) + m) % m;
}
exports.mod = mod;
function bigIntFromBuffer(buffer, little = true, signed = false) {
    let randomBuffer = buffer;
    const bytesLength = randomBuffer.length;
    if (little) {
        randomBuffer = randomBuffer.reverse();
    }
    let bigIntVar = BigInt("0x" + [...randomBuffer].map((v) => v.toString(16).padStart(2, "0")).join(""));
    if (signed && Math.floor(bigIntVar.toString(2).length / 8) >= bytesLength) {
        bigIntVar = bigIntVar - (2n ** (BigInt(bytesLength * 8)));
    }
    return bigIntVar;
}
exports.bigIntFromBuffer = bigIntFromBuffer;
function getRandomBigInt(byteLength, little, signed) {
    const randomBytes = new Uint8Array(byteLength);
    dntShim.crypto.getRandomValues(randomBytes);
    return bigIntFromBuffer(randomBytes, little, signed);
}
exports.getRandomBigInt = getRandomBigInt;
/** Get a random ID. Useful when calling API functions directly. */
function getRandomId() {
    return getRandomBigInt(8, true, true);
}
exports.getRandomId = getRandomId;
function gcd(a, b) {
    if (a == 0n) {
        return b;
    }
    while ((a & 1n) == 0n) {
        a >>= 1n;
    }
    while (true) {
        if (a > b) {
            a = (a - b) >> 1n;
            while ((a & 1n) == 0n) {
                a >>= 1n;
            }
        }
        else if (b > a) {
            b = (b - a) >> 1n;
            while ((b & 1n) == 0n) {
                b >>= 1n;
            }
        }
        else {
            return a;
        }
    }
}
exports.gcd = gcd;
