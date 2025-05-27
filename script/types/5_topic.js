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
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructTopic = constructTopic;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
function constructTopic(message) {
    let forumTopicCreated;
    let forumTopicEdited;
    if ("forumTopicCreated" in message) {
        forumTopicCreated = message;
    }
    else if (message.replyToMessage && "forumTopicCreated" in message.replyToMessage) {
        forumTopicCreated = message.replyToMessage;
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
    if ("forumTopicEdited" in message) {
        forumTopicEdited = message;
    }
    const id = forumTopicCreated.id;
    const date = forumTopicCreated.date;
    const creator = forumTopicCreated.from ? forumTopicCreated.from : message.from;
    const general = forumTopicCreated.id == 1;
    const closed = false;
    const hidden = false;
    let name = forumTopicCreated.forumTopicCreated.name;
    const color = forumTopicCreated.forumTopicCreated.color;
    let customEmoijId = forumTopicCreated.forumTopicCreated.customEmojiId;
    if (forumTopicEdited) {
        name = forumTopicEdited.forumTopicEdited.name;
        customEmoijId = forumTopicEdited.forumTopicEdited.customEmojiId;
    }
    return (0, _1_utilities_js_1.cleanObject)({
        id,
        date,
        creator: creator,
        general,
        closed,
        hidden,
        name,
        color,
        customEmoijId,
    });
}
