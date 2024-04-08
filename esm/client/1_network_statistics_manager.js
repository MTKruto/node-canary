/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NetworkStatisticsManager_c;
export class NetworkStatisticsManager {
    constructor(c) {
        _NetworkStatisticsManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _NetworkStatisticsManager_c, c, "f");
    }
    async getNetworkStatistics() {
        const [messagesRead, messagesWrite, cdnRead, cdnWrite] = await Promise.all([
            __classPrivateFieldGet(this, _NetworkStatisticsManager_c, "f").storage.get(["netstat_messages_read"]),
            __classPrivateFieldGet(this, _NetworkStatisticsManager_c, "f").storage.get(["netstat_messages_write"]),
            __classPrivateFieldGet(this, _NetworkStatisticsManager_c, "f").storage.get(["netstat_cdn_read"]),
            __classPrivateFieldGet(this, _NetworkStatisticsManager_c, "f").storage.get(["netstat_cdn_write"]),
        ]);
        const messages = {
            sent: Number(messagesWrite || 0),
            received: Number(messagesRead || 0),
        };
        const cdn = {
            sent: Number(cdnWrite || 0),
            received: Number(cdnRead || 0),
        };
        return { messages, cdn };
    }
    getTransportReadWriteCallback() {
        return {
            read: async (count) => {
                const key = __classPrivateFieldGet(this, _NetworkStatisticsManager_c, "f").cdn ? "netstat_cdn_read" : "netstat_messages_read";
                await __classPrivateFieldGet(this, _NetworkStatisticsManager_c, "f").storage.incr([key], count);
            },
            write: async (count) => {
                const key = __classPrivateFieldGet(this, _NetworkStatisticsManager_c, "f").cdn ? "netstat_cdn_write" : "netstat_messages_write";
                await __classPrivateFieldGet(this, _NetworkStatisticsManager_c, "f").storage.incr([key], count);
            },
        };
    }
}
_NetworkStatisticsManager_c = new WeakMap();
