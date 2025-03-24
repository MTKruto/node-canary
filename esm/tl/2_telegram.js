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
import { schema } from "./1_telegram_api.js";
import { TLReader } from "./1_tl_reader.js";
import { TLWriter } from "./1_tl_writer.js";
import { unreachable } from "../0_deps.js";
import { ZERO_CHANNEL_ID } from "../1_utilities.js";
import { as as as_, assertIsValidObject as assertIsValidObject_, is as is_, isOfEnum as isOfEnum_, isOneOf as isOneOf_, isValidObject as isValidObject_, mustGetReturnType as mustGetReturnType_ } from "./1_utilities.js";
export * from "./1_telegram_api.js";
export async function deserializeType(name, bufferOrReader) {
    const reader = bufferOrReader instanceof Uint8Array ? new TLReader(bufferOrReader) : bufferOrReader;
    return await reader.readType(name, schema);
}
export function serializeObject(object) {
    return new TLWriter().writeObject(object, schema).buffer;
}
export function isValidObject(object) {
    return isValidObject_(object, schema);
}
export function assertIsValidObject(object) {
    return assertIsValidObject_(object, schema);
}
export function is(name, value) {
    return is_(name, value, schema);
}
export function isOneOf(names, value) {
    return isOneOf_(names, value, schema);
}
export function isOfEnum(name, value) {
    return isOfEnum_(name, value, schema);
}
export function as(name, value) {
    return as_(name, value, schema);
}
export function mustGetReturnType(name) {
    return mustGetReturnType_(name, schema);
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
