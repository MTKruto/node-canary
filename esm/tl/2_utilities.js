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
import { unreachable } from "../0_deps.js";
import { ZERO_CHANNEL_ID } from "../1_utilities.js";
import { schema as schema_ } from "./1_api.js";
export function isValidType(object, schema = schema_) {
    return object != null && typeof object === "object" && typeof object._ === "string" && schema.definitions[object._] !== undefined;
}
export function assertIsValidType(object, schema = schema_) {
    if (!isValidType(object, schema)) {
        throw new Error("Invalid object");
    }
}
export function is(typeName, value) {
    if (!isValidType(value)) {
        return false;
    }
    else {
        return value._ === typeName;
    }
}
export function isOneOf(typeNames, value) {
    return typeNames.some((v) => is(v, value));
}
export function isOfEnum(enumName, value) {
    return !isValidType(value) || schema_.definitions[value._][2] != enumName;
}
export function as(typeName, value) {
    if (is(typeName, value)) {
        return value;
    }
    else {
        unreachable();
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
export function isGenericFunction(value) {
    return isOneOf(GENERIC_FUNCTIONS, value);
}
export function mustGetReturnType(name) {
    const type = schema_.definitions[name];
    if (!type || !type[2]) {
        unreachable();
    }
    return type[2];
}
export function getChannelChatId(channelId) {
    return ZERO_CHANNEL_ID + -Number(channelId);
}
export function peerToChatId(peer) {
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
        unreachable();
    }
}
export function chatIdToPeer(chatId) {
    if (chatId > 0) {
        return { _: "peerUser", user_id: BigInt(chatId) };
    }
    else if (chatId > ZERO_CHANNEL_ID) {
        return { _: "peerChat", chat_id: BigInt(Math.abs(chatId)) };
    }
    else {
        return { _: "peerChannel", channel_id: BigInt(ZERO_CHANNEL_ID - chatId) };
    }
}
export function chatIdToPeerId(chatId) {
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
        unreachable();
    }
}
export function getChatIdPeerType(chatId) {
    if (chatId > 0) {
        return "user";
    }
    else if (chatId > ZERO_CHANNEL_ID) {
        return "chat";
    }
    else {
        return "channel";
    }
}
export function inputPeerToPeer(inputPeer) {
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
        unreachable();
    }
}
