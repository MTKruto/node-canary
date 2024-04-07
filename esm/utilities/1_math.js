import { unreachable } from "../0_deps.js";
import { gcd, getRandomId, mod } from "./0_bigint.js";
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
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
