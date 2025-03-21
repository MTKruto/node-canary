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
var _PollManager_instances, _PollManager_c, _PollManager_voteInner;
import { unreachable } from "../0_deps.js";
import { InputError } from "../0_errors.js";
import { is, isOneOf, peerToChatId } from "../2_tl.js";
import { constructPoll } from "../3_types.js";
const pollManagerUpdates = [
    "updateMessagePoll",
];
export class PollManager {
    constructor(c) {
        _PollManager_instances.add(this);
        _PollManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _PollManager_c, c, "f");
    }
    async vote(chatId, messageId, optionIndexes) {
        __classPrivateFieldGet(this, _PollManager_c, "f").storage.assertUser("vote");
        if (!optionIndexes.length) {
            throw new InputError("No options provided.");
        }
        await __classPrivateFieldGet(this, _PollManager_instances, "m", _PollManager_voteInner).call(this, chatId, messageId, optionIndexes);
    }
    async retractVote(chatId, messageId) {
        __classPrivateFieldGet(this, _PollManager_c, "f").storage.assertUser("retractVote");
        await __classPrivateFieldGet(this, _PollManager_instances, "m", _PollManager_voteInner).call(this, chatId, messageId, []);
    }
    canHandleUpdate(update) {
        return isOneOf(pollManagerUpdates, update);
    }
    async handleUpdate(update) {
        await __classPrivateFieldGet(this, _PollManager_c, "f").storage.setPollResults(update.poll_id, update.results);
        let poll = null;
        if (update.poll) {
            poll = update.poll;
            await __classPrivateFieldGet(this, _PollManager_c, "f").storage.setPoll(poll.id, poll);
        }
        else {
            poll = await __classPrivateFieldGet(this, _PollManager_c, "f").storage.getPoll(update.poll_id);
        }
        if (poll) {
            const messageMediaPoll = { _: "messageMediaPoll", poll, results: update.results };
            return { poll: constructPoll(messageMediaPoll) };
        }
        else {
            return null;
        }
    }
}
_PollManager_c = new WeakMap(), _PollManager_instances = new WeakSet(), _PollManager_voteInner = async function _PollManager_voteInner(chatId, messageId, optionIndexes) {
    const message = await __classPrivateFieldGet(this, _PollManager_c, "f").messageManager.getMessage(chatId, messageId);
    if (!("poll" in message)) {
        throw new InputError("Message not a poll.");
    }
    if (message.poll.options.filter((v) => v.chosen).length == 0 && optionIndexes.length == 0) {
        throw new InputError("No vote has been casted.");
    }
    if (!message.poll.allowMultipleAnswers && optionIndexes.length > 1) {
        throw new InputError("Cannot cast multiple options for this vote.");
    }
    for (const optionIndex of optionIndexes) {
        if (optionIndex + 1 > message.poll.options.length) {
            throw new InputError("Got invalid option index.");
        }
    }
    if (optionIndexes.length > 0 && message.poll.options.map((v, i) => [i, v.chosen]).filter((v) => v[1]).every(([v]) => optionIndexes.includes(v))) {
        throw new InputError("The same options are already casted.");
    }
    const peer = await __classPrivateFieldGet(this, _PollManager_c, "f").getInputPeer(chatId);
    const chatId_ = peerToChatId(peer);
    const message_ = await __classPrivateFieldGet(this, _PollManager_c, "f").messageStorage.getMessage(chatId_, messageId);
    if (!is("message", message_)) {
        unreachable();
    }
    const media = message_.media;
    if (!is("messageMediaPoll", media)) {
        unreachable();
    }
    const poll = media.poll;
    optionIndexes = Array.from(new Set(optionIndexes));
    const options = optionIndexes.map((i) => poll.answers[i].option);
    await __classPrivateFieldGet(this, _PollManager_c, "f").invoke({ _: "messages.sendVote", peer, msg_id: messageId, options });
};
