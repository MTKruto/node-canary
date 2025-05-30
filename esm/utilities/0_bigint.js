/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import * as dntShim from "../_dnt.shims.js";
export function modExp(a, b, n) {
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
export function mod(n, m) {
    // deno-lint-ignore ban-ts-comment
    // @ts-ignore
    return ((n % m) + m) % m;
}
export function bigIntFromBuffer(buffer, little = true, signed = false) {
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
export function getRandomBigInt(byteLength, little, signed) {
    const randomBytes = new Uint8Array(byteLength);
    dntShim.crypto.getRandomValues(randomBytes);
    return bigIntFromBuffer(randomBytes, little, signed);
}
export function getRandomId(number) {
    if (number) {
        return Number(getRandomBigInt(4, true, true));
    }
    else {
        return getRandomBigInt(8, true, true);
    }
}
export function gcd(a, b) {
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
