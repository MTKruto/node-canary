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
import { SECOND, unreachable } from "../0_deps.js";
export function drop(maybePromise) {
    if (maybePromise !== undefined && maybePromise != null && typeof maybePromise === "object" && maybePromise instanceof Promise) {
        maybePromise.catch(() => { });
    }
}
export function mustPrompt(message) {
    const result = dntShim.prompt(message);
    if (result == null) {
        throw unreachable();
    }
    else {
        return result;
    }
}
export function mustPromptNumber(message) {
    let result = Number(BigInt(mustPrompt(message)));
    while (isNaN(result)) {
        console.log("Expected a number.");
        result = Number(BigInt(mustPrompt(message)));
    }
    return result;
}
export function mustPromptOneOf(message, choices) {
    let result = dntShim.prompt(message);
    while (result == null || !choices.includes(result)) {
        result = dntShim.prompt(message);
    }
    return result;
}
export const ZERO_CHANNEL_ID = -1000000000000;
export function toUnixTimestamp(date) {
    return Math.floor(date.getTime() / SECOND);
}
export function fromUnixTimestamp(date) {
    return new Date(date * SECOND);
}
export async function* iterateReadableStream(stream) {
    const reader = stream.getReader();
    try {
        while (true) {
            const { done, value } = await reader.read();
            if (done)
                return;
            yield value;
        }
    }
    finally {
        reader.releaseLock();
    }
}
