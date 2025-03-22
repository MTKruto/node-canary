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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidType = isValidType;
exports.assertIsValidType = assertIsValidType;
exports.is = is;
exports.isOneOf = isOneOf;
exports.isOfEnum = isOfEnum;
exports.as = as;
exports.isGenericFunction = isGenericFunction;
exports.mustGetReturnType = mustGetReturnType;
exports.getChannelChatId = getChannelChatId;
exports.peerToChatId = peerToChatId;
exports.chatIdToPeer = chatIdToPeer;
exports.chatIdToPeerId = chatIdToPeerId;
exports.getChatIdPeerType = getChatIdPeerType;
exports.inputPeerToPeer = inputPeerToPeer;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _1_api_js_1 = require("./1_api.js");
function isValidType(object, schema = _1_api_js_1.schema) {
    return object != null && typeof object === "object" && typeof object._ === "string" && schema.definitions[object._] !== undefined;
}
function assertIsValidType(object, schema = _1_api_js_1.schema) {
    if (!isValidType(object, schema)) {
        throw new Error("Invalid object");
    }
}
function is(typeName, value) {
    if (!isValidType(value)) {
        return false;
    }
    else {
        return value._ === typeName;
    }
}
function isOneOf(typeNames, value) {
    return typeNames.some((v) => is(v, value));
}
function isOfEnum(enumName, value) {
    return isValidType(value) && _1_api_js_1.schema.definitions[value._][2] == enumName;
}
function as(typeName, value) {
    if (is(typeName, value)) {
        return value;
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
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
function mustGetReturnType(name) {
    const type = _1_api_js_1.schema.definitions[name];
    if (!type || !type[2]) {
        (0, _0_deps_js_1.unreachable)();
    }
    return type[2];
}
function getChannelChatId(channelId) {
    return _1_utilities_js_1.ZERO_CHANNEL_ID + -Number(channelId);
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
    else if (chatId > _1_utilities_js_1.ZERO_CHANNEL_ID) {
        return { _: "peerChat", chat_id: BigInt(Math.abs(chatId)) };
    }
    else {
        return { _: "peerChannel", channel_id: BigInt(_1_utilities_js_1.ZERO_CHANNEL_ID - chatId) };
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
    else if (chatId > _1_utilities_js_1.ZERO_CHANNEL_ID) {
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
