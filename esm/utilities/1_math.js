// Source: https://github.com/tdlib/td/blob/master/tdutils/td/utils/crypto.cpp
// Copyright (C) 2014-2024 Aliaksei Levin <levlam@telegram.org>, Arseny Smirnov <arseny30@gmail.com>
import { unreachable } from "../0_deps.js";
import { getRandomId, mod } from "./0_bigint.js";
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
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
export function factorize(pq) {
    let a;
    let b;
    let p = 0n;
    let q;
    const one = 1n;
    let found = false;
    for (let i = 0, iter = 0; !found && (i < 3 || iter < 1000); i++) {
        const t = BigInt(getRandomNumberInRange(17, 32)) % (pq - 1n);
        a = getRandomId();
        b = a;
        const lim = 1 << (i + 23);
        for (let j = 1; j < lim; j++) {
            iter++;
            //   (a*b) mod m
            a = mod(a * a, pq);
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
            p = gcd(q, pq);
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
    unreachable();
}
