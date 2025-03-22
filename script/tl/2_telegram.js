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
// deno-lint-ignore-file no-explicit-any
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RPC_RESULT = exports.GZIP_PACKED = void 0;
exports.deserializeType = deserializeType;
exports.serializeObject = serializeObject;
exports.isValidObject = isValidObject;
exports.assertIsValidObject = assertIsValidObject;
exports.is = is;
exports.isOneOf = isOneOf;
exports.isOfEnum = isOfEnum;
exports.as = as;
exports.mustGetReturnType = mustGetReturnType;
exports.isGenericFunction = isGenericFunction;
exports.getChannelChatId = getChannelChatId;
exports.peerToChatId = peerToChatId;
exports.chatIdToPeer = chatIdToPeer;
exports.chatIdToPeerId = chatIdToPeerId;
exports.getChatIdPeerType = getChatIdPeerType;
exports.inputPeerToPeer = inputPeerToPeer;
const _1_utilities_js_1 = require("../1_utilities.js");
const _1_telegram_api_js_1 = require("./1_telegram_api.js");
const _1_tl_reader_js_1 = require("./1_tl_reader.js");
const _1_tl_writer_js_1 = require("./1_tl_writer.js");
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_2 = require("../1_utilities.js");
const _1_utilities_js_3 = require("./1_utilities.js");
__exportStar(require("./1_telegram_api.js"), exports);
async function deserializeType(name, bufferOrReader) {
    const reader = bufferOrReader instanceof Uint8Array ? new _1_tl_reader_js_1.TLReader(bufferOrReader) : bufferOrReader;
    const id = reader.readInt32(false);
    if (id == exports.GZIP_PACKED) {
        const buffer = await (0, _1_utilities_js_1.gunzip)(reader.readBytes());
        return await deserializeType(name, buffer);
    }
    reader.unreadInt32();
    return await reader.readType(name, _1_telegram_api_js_1.schema);
}
exports.GZIP_PACKED = 0x3072CFA1;
exports.RPC_RESULT = 0xF35C6D01;
function serializeObject(object) {
    return new _1_tl_writer_js_1.TLWriter().writeObject(object, _1_telegram_api_js_1.schema).buffer;
}
function isValidObject(object) {
    return (0, _1_utilities_js_3.isValidObject)(object, _1_telegram_api_js_1.schema);
}
function assertIsValidObject(object) {
    return (0, _1_utilities_js_3.assertIsValidObject)(object, _1_telegram_api_js_1.schema);
}
function is(name, value) {
    return (0, _1_utilities_js_3.is)(name, value, _1_telegram_api_js_1.schema);
}
function isOneOf(names, value) {
    return (0, _1_utilities_js_3.isOneOf)(names, value, _1_telegram_api_js_1.schema);
}
function isOfEnum(name, value) {
    return (0, _1_utilities_js_3.isOfEnum)(name, value, _1_telegram_api_js_1.schema);
}
function as(name, value) {
    return (0, _1_utilities_js_3.as)(name, value, _1_telegram_api_js_1.schema);
}
function mustGetReturnType(name) {
    return (0, _1_utilities_js_3.mustGetReturnType)(name, _1_telegram_api_js_1.schema);
}
const GENERIC_FUNCTIONS = [
    "invokeAfterMsg",
    "invokeAfterMsgs",
    "initConnection",
    "invokeWithLayer",
    "invokeWithoutUpdates",
    "invokeWithMessagesRange",
    "invokeWithTakeout",
];
function isGenericFunction(value) {
    return isOneOf(GENERIC_FUNCTIONS, value);
}
function getChannelChatId(channelId) {
    return _1_utilities_js_2.ZERO_CHANNEL_ID + -Number(channelId);
}
function peerToChatId(peer) {
    if (isOneOf(["peerUser", "inputPeerUser", "inputPeerUserFromMessage", "user", "userFull"], peer) || "user_id" in peer) {
        return Number("user_id" in peer ? peer.user_id : peer.id);
    }
    else if ("chat_id" in peer || isOneOf(["peerChat", "inputPeerChat", "chat", "chatForbidden", "chatFull"], peer)) {
        return -Number("chat_id" in peer ? peer.chat_id : peer.id);
    }
    else if ("channel_id" in peer || isOneOf(["peerChannel", "inputPeerChannel", "inputPeerChannelFromMessage", "channel", "channelForbidden", "channelFull"], peer)) {
        return getChannelChatId("channel_id" in peer ? peer.channel_id : peer.id);
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
function chatIdToPeer(chatId) {
    if (chatId > 0) {
        return { _: "peerUser", user_id: BigInt(chatId) };
    }
    else if (chatId > _1_utilities_js_2.ZERO_CHANNEL_ID) {
        return { _: "peerChat", chat_id: BigInt(Math.abs(chatId)) };
    }
    else {
        return { _: "peerChannel", channel_id: BigInt(_1_utilities_js_2.ZERO_CHANNEL_ID - chatId) };
    }
}
function chatIdToPeerId(chatId) {
    const peer = chatIdToPeer(chatId);
    if ("user_id" in peer) {
        return peer.user_id;
    }
    else if ("chat_id" in peer) {
        return peer.chat_id;
    }
    else if ("channel_id" in peer) {
        return peer.channel_id;
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
function getChatIdPeerType(chatId) {
    if (chatId > 0) {
        return "user";
    }
    else if (chatId > _1_utilities_js_2.ZERO_CHANNEL_ID) {
        return "chat";
    }
    else {
        return "channel";
    }
}
function inputPeerToPeer(inputPeer) {
    if ("user_id" in inputPeer) {
        return { ...inputPeer, _: "peerUser" };
    }
    else if ("chat_id" in inputPeer) {
        return { ...inputPeer, _: "peerChat" };
    }
    else if ("channel_id" in inputPeer) {
        return { ...inputPeer, _: "peerChannel" };
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
