"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorize = factorize;
const _0_deps_js_1 = require("../0_deps.js");
const _0_bigint_js_1 = require("./0_bigint.js");
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function factorize(pq) {
    let a;
    let b;
    let p = 0n;
    let q;
    const one = 1n;
    let found = false;
    for (let i = 0, iter = 0; !found && (i < 3 || iter < 1000); i++) {
        const t = BigInt(getRandomNumberInRange(17, 32)) % (pq - 1n);
        a = (0, _0_bigint_js_1.getRandomId)();
        b = a;
        const lim = 1 << (i + 23);
        for (let j = 1; j < lim; j++) {
            iter++;
            a = (0, _0_bigint_js_1.mod)(a * a, pq);
            a += t;
            if (a >= pq) {
                a = a - pq;
            }
            if (a > b) {
                q = a - b;
            }
            else {
                q = b - a;
            }
            p = (0, _0_bigint_js_1.gcd)(q, pq);
            if (p != one) {
                found = true;
                break;
            }
            if ((j & (j - 1)) == 0) {
                b = a;
            }
        }
    }
    if (found) {
        q = pq / p;
        if (p > q) {
            return [q, p];
        }
        else {
            return [p, q];
        }
    }
    (0, _0_deps_js_1.unreachable)();
}
