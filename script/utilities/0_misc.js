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
exports.ZERO_CHANNEL_ID = void 0;
exports.drop = drop;
exports.mustPrompt = mustPrompt;
exports.mustPromptNumber = mustPromptNumber;
exports.mustPromptOneOf = mustPromptOneOf;
exports.toUnixTimestamp = toUnixTimestamp;
exports.fromUnixTimestamp = fromUnixTimestamp;
exports.iterateReadableStream = iterateReadableStream;
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
const dntShim = __importStar(require("../_dnt.shims.js"));
const _0_deps_js_1 = require("../0_deps.js");
function drop(maybePromise) {
    if (maybePromise !== undefined && maybePromise != null && typeof maybePromise === "object" && maybePromise instanceof Promise) {
        maybePromise.catch(() => { });
    }
}
function mustPrompt(message) {
    const result = dntShim.prompt(message);
    if (result == null) {
        throw (0, _0_deps_js_1.unreachable)();
    }
    else {
        return result;
    }
}
function mustPromptNumber(message) {
    let result = Number(BigInt(mustPrompt(message)));
    while (isNaN(result)) {
        console.log("Expected a number.");
        result = Number(BigInt(mustPrompt(message)));
    }
    return result;
}
function mustPromptOneOf(message, choices) {
    let result = dntShim.prompt(message);
    while (result == null || !choices.includes(result)) {
        result = dntShim.prompt(message);
    }
    return result;
}
exports.ZERO_CHANNEL_ID = -1000000000000;
function toUnixTimestamp(date) {
    return Math.floor(date.getTime() / _0_deps_js_1.SECOND);
}
function fromUnixTimestamp(date) {
    return new Date(date * _0_deps_js_1.SECOND);
}
async function* iterateReadableStream(stream) {
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
