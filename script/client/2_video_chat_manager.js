"use strict";
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
var _VideoChatManager_instances, _VideoChatManager_c, _VideoChatManager_createGroupCall, _VideoChatManager_getInputGroupCall, _VideoChatManager_getCall;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoChatManager = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_types_js_1 = require("../3_types.js");
class VideoChatManager {
    constructor(c) {
        _VideoChatManager_instances.add(this);
        _VideoChatManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _VideoChatManager_c, c, "f");
    }
    async startVideoChat(chatId, params) {
        await __classPrivateFieldGet(this, _VideoChatManager_c, "f").storage.assertUser("startVideoChat");
        return await __classPrivateFieldGet(this, _VideoChatManager_instances, "m", _VideoChatManager_createGroupCall).call(this, chatId, params?.title, params?.liveStream || undefined);
    }
    async scheduleVideoChat(chatId, startAt, params) {
        await __classPrivateFieldGet(this, _VideoChatManager_c, "f").storage.assertUser("scheduleVideoChat");
        return await __classPrivateFieldGet(this, _VideoChatManager_instances, "m", _VideoChatManager_createGroupCall).call(this, chatId, params?.title, params?.liveStream || undefined, startAt);
    }
    async joinVideoChat(id, params, params_) {
        await __classPrivateFieldGet(this, _VideoChatManager_c, "f").storage.assertUser("joinVideoChat");
        const call = await __classPrivateFieldGet(this, _VideoChatManager_instances, "m", _VideoChatManager_getInputGroupCall).call(this, id);
        const { updates } = await __classPrivateFieldGet(this, _VideoChatManager_c, "f").api.phone.joinGroupCall({
            call,
            join_as: params_?.joinAs ? await __classPrivateFieldGet(this, _VideoChatManager_c, "f").getInputPeer(params_.joinAs) : new _2_tl_js_1.types.InputPeerSelf(),
            params: new _2_tl_js_1.types.DataJSON({ data: params }),
            invite_hash: params_?.inviteHash,
            muted: params_?.audio ? undefined : true,
            video_stopped: params_?.video ? undefined : true,
        }).then((v) => v[_2_tl_js_1.as](_2_tl_js_1.types.Updates));
        const updateGroupCall = updates
            .find((v) => v instanceof _2_tl_js_1.types.UpdateGroupCallConnection);
        if (!updateGroupCall)
            (0, _0_deps_js_1.unreachable)();
        return updateGroupCall.params.data;
    }
    async leaveVideoChat(id) {
        await __classPrivateFieldGet(this, _VideoChatManager_c, "f").storage.assertUser("leaveVideoChat");
        await __classPrivateFieldGet(this, _VideoChatManager_c, "f").api.phone.leaveGroupCall({ call: await __classPrivateFieldGet(this, _VideoChatManager_instances, "m", _VideoChatManager_getInputGroupCall).call(this, id), source: 0 });
    }
    async joinLiveStream(id) {
        await __classPrivateFieldGet(this, _VideoChatManager_c, "f").storage.assertUser("joinLiveStream");
        const call = await __classPrivateFieldGet(this, _VideoChatManager_instances, "m", _VideoChatManager_getInputGroupCall).call(this, id);
        const { updates } = await __classPrivateFieldGet(this, _VideoChatManager_c, "f").api.phone.joinGroupCall({
            call,
            join_as: new _2_tl_js_1.types.InputPeerSelf(),
            params: new _2_tl_js_1.types.DataJSON({
                data: JSON.stringify({
                    fingerprints: [],
                    pwd: "",
                    ssrc: (0, _1_utilities_js_1.getRandomId)(true),
                    "ssrc-groups": [],
                    ufrag: "",
                }),
            }),
        }).then((v) => v[_2_tl_js_1.as](_2_tl_js_1.types.Updates));
        const updateGroupCall = updates
            .find((v) => v instanceof _2_tl_js_1.types.UpdateGroupCallConnection);
        if (!updateGroupCall)
            (0, _0_deps_js_1.unreachable)();
    }
    async getVideoChat(id) {
        await __classPrivateFieldGet(this, _VideoChatManager_c, "f").storage.assertUser("getVideoChat");
        return (0, _3_types_js_1.constructVideoChat)(await __classPrivateFieldGet(this, _VideoChatManager_instances, "m", _VideoChatManager_getCall).call(this, id));
    }
    static canHandleUpdate(update) {
        return update instanceof _2_tl_js_1.types.UpdateGroupCall;
    }
    async handleUpdate(update) {
        let chatId = Number(-update.chat_id);
        const fullChat = await __classPrivateFieldGet(this, _VideoChatManager_c, "f").storage.getFullChat(chatId).then((v) => v == null ? __classPrivateFieldGet(this, _VideoChatManager_c, "f").storage.getFullChat(chatId = _1_utilities_js_1.ZERO_CHANNEL_ID - Number(update.chat_id)) : v);
        let updateFullChat = false;
        if (update.call instanceof _2_tl_js_1.types.GroupCallDiscarded) {
            await __classPrivateFieldGet(this, _VideoChatManager_c, "f").storage.setGroupCall(update.call.id, null);
            await __classPrivateFieldGet(this, _VideoChatManager_c, "f").storage.setGroupCallAccessHash(update.call.id, null);
            if (fullChat != null) {
                fullChat.call = undefined;
                updateFullChat = true;
            }
        }
        else {
            await __classPrivateFieldGet(this, _VideoChatManager_c, "f").storage.setGroupCall(update.call.id, update.call);
            await __classPrivateFieldGet(this, _VideoChatManager_c, "f").storage.setGroupCallAccessHash(update.call.id, update.call.access_hash);
            if (fullChat != null) {
                if (!("call" in fullChat) || !fullChat.call || fullChat.call.id != update.call.id) {
                    fullChat.call = new _2_tl_js_1.types.InputGroupCall(update.call);
                    updateFullChat = true;
                }
            }
        }
        if (updateFullChat) {
            await __classPrivateFieldGet(this, _VideoChatManager_c, "f").storage.setFullChat(chatId, fullChat);
        }
        return { videoChat: (0, _3_types_js_1.constructVideoChat)(update.call) };
    }
    async getLiveStreamChannels(id) {
        await __classPrivateFieldGet(this, _VideoChatManager_c, "f").storage.assertUser("getLiveStreamChannels");
        const call = await __classPrivateFieldGet(this, _VideoChatManager_instances, "m", _VideoChatManager_getCall).call(this, id);
        if (!(call instanceof _2_tl_js_1.types.GroupCall) || !call.rtmp_stream) {
            throw new _0_errors_js_1.InputError("Not a live stream.");
        }
        const client = __classPrivateFieldGet(this, _VideoChatManager_c, "f").getCdnConnection(call.stream_dc_id);
        await client.connect();
        try {
            const streams = await client.api.phone.getGroupCallStreamChannels({ call: await __classPrivateFieldGet(this, _VideoChatManager_instances, "m", _VideoChatManager_getInputGroupCall).call(this, id) });
            return streams.channels.map(_3_types_js_1.constructLiveStreamChannel);
        }
        finally {
            await client.disconnect();
        }
    }
    async *downloadLiveStreamChunk(id, channel, scale, timestamp, params) {
        await __classPrivateFieldGet(this, _VideoChatManager_c, "f").storage.assertUser("downloadLiveStreamChunk");
        const call = await __classPrivateFieldGet(this, _VideoChatManager_instances, "m", _VideoChatManager_getCall).call(this, id);
        if (!(call instanceof _2_tl_js_1.types.GroupCall) || !call.rtmp_stream) {
            throw new _0_errors_js_1.InputError("Not a live stream.");
        }
        const quality = params?.quality ?? "low";
        const location = new _2_tl_js_1.types.InputGroupCallStream({
            call: new _2_tl_js_1.types.InputGroupCall(call),
            scale,
            time_ms: BigInt(timestamp),
            video_channel: channel,
            video_quality: quality == "low" ? 0 : quality == "medium" ? 1 : quality == "high" ? 2 : (() => {
                throw new _0_errors_js_1.InputError("Got invalid quality.");
            })(),
        });
        yield* __classPrivateFieldGet(this, _VideoChatManager_c, "f").fileManager.downloadInner(location, call.stream_dc_id ?? (0, _0_deps_js_1.unreachable)());
    }
}
exports.VideoChatManager = VideoChatManager;
_VideoChatManager_c = new WeakMap(), _VideoChatManager_instances = new WeakSet(), _VideoChatManager_createGroupCall = async function _VideoChatManager_createGroupCall(chatId, title, liveStream, scheduleDate) {
    const peer = await __classPrivateFieldGet(this, _VideoChatManager_c, "f").getInputPeer(chatId);
    if (peer instanceof _2_tl_js_1.types.InputPeerUser) {
        throw new _0_errors_js_1.InputError("Video chats are only available for groups and channels.");
    }
    const { updates } = await __classPrivateFieldGet(this, _VideoChatManager_c, "f").api.phone.createGroupCall({
        peer,
        random_id: (0, _1_utilities_js_1.getRandomId)(true),
        title,
        rtmp_stream: liveStream,
        schedule_date: scheduleDate ? (0, _1_utilities_js_1.toUnixTimestamp)(scheduleDate) : undefined,
    }).then((v) => v[_2_tl_js_1.as](_2_tl_js_1.types.Updates));
    const updateGroupCall = updates
        .find((v) => v instanceof _2_tl_js_1.types.UpdateGroupCall);
    if (!updateGroupCall) {
        (0, _0_deps_js_1.unreachable)();
    }
    return (0, _3_types_js_1.constructVideoChat)(updateGroupCall.call);
}, _VideoChatManager_getInputGroupCall = async function _VideoChatManager_getInputGroupCall(id_) {
    const id = BigInt(id_);
    const accessHash = await __classPrivateFieldGet(this, _VideoChatManager_c, "f").storage.getGroupCallAccessHash(id);
    if (accessHash == null) {
        throw new _0_errors_js_1.InputError("Video chat not found.");
    }
    return new _2_tl_js_1.types.InputGroupCall({ id, access_hash: accessHash });
}, _VideoChatManager_getCall = async function _VideoChatManager_getCall(id) {
    let groupCall = await __classPrivateFieldGet(this, _VideoChatManager_c, "f").storage.getGroupCall(BigInt(id));
    if (groupCall == null) {
        const call = await __classPrivateFieldGet(this, _VideoChatManager_instances, "m", _VideoChatManager_getInputGroupCall).call(this, id);
        groupCall = await __classPrivateFieldGet(this, _VideoChatManager_c, "f").api.phone.getGroupCall({ call, limit: 1 }).then((v) => v.call);
    }
    return groupCall;
};
