"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkStatisticsManager = void 0;
class NetworkStatisticsManager {
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
exports.NetworkStatisticsManager = NetworkStatisticsManager;
_NetworkStatisticsManager_c = new WeakMap();
