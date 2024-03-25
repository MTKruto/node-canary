"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputPeerToPeer = exports.getChatIdPeerType = exports.chatIdToPeerId = exports.chatIdToPeer = exports.peerToChatId = exports.getChannelChatId = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_types_js_1 = require("./2_types.js");
function getChannelChatId(channelId) {
    return _1_utilities_js_1.ZERO_CHANNEL_ID + -Number(channelId);
}
exports.getChannelChatId = getChannelChatId;
function peerToChatId(peer) {
    if (peer instanceof _2_types_js_1.types.PeerUser || peer instanceof _2_types_js_1.types.InputPeerUser || peer instanceof _2_types_js_1.types.User || "user_id" in peer) {
        return Number("id" in peer ? peer.id : peer.user_id);
    }
    else if (peer instanceof _2_types_js_1.types.PeerChat || peer instanceof _2_types_js_1.types.InputPeerChat || peer instanceof _2_types_js_1.types.Chat || peer instanceof _2_types_js_1.types.ChatForbidden || "chat_id" in peer) {
        return -Number("id" in peer ? peer.id : peer.chat_id);
    }
    else if (peer instanceof _2_types_js_1.types.PeerChannel || peer instanceof _2_types_js_1.types.InputPeerChannel || peer instanceof _2_types_js_1.types.Channel || peer instanceof _2_types_js_1.types.ChannelForbidden || "channel_id" in peer) {
        return getChannelChatId("id" in peer ? peer.id : peer.channel_id);
    }
    else {
        (0, _1_utilities_js_1.UNREACHABLE)();
    }
}
exports.peerToChatId = peerToChatId;
function chatIdToPeer(chatId) {
    if (chatId > 0) {
        return new _2_types_js_1.types.PeerUser({ user_id: BigInt(chatId) });
    }
    else if (chatId > _1_utilities_js_1.ZERO_CHANNEL_ID) {
        return new _2_types_js_1.types.PeerChat({ chat_id: BigInt(Math.abs(chatId)) });
    }
    else {
        return new _2_types_js_1.types.PeerChannel({ channel_id: BigInt(_1_utilities_js_1.ZERO_CHANNEL_ID - chatId) });
    }
}
exports.chatIdToPeer = chatIdToPeer;
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
        (0, _1_utilities_js_1.UNREACHABLE)();
    }
}
exports.chatIdToPeerId = chatIdToPeerId;
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
exports.getChatIdPeerType = getChatIdPeerType;
function inputPeerToPeer(inputPeer) {
    if ("user_id" in inputPeer) {
        return new _2_types_js_1.types.PeerUser(inputPeer);
    }
    else if ("chat_id" in inputPeer) {
        return new _2_types_js_1.types.PeerChat(inputPeer);
    }
    else if ("channel_id" in inputPeer) {
        return new _2_types_js_1.types.PeerChannel(inputPeer);
    }
    else {
        (0, _1_utilities_js_1.UNREACHABLE)();
    }
}
exports.inputPeerToPeer = inputPeerToPeer;
