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
exports.constructMessageReaction = constructMessageReaction;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_reaction_js_1 = require("./0_reaction.js");
function constructMessageReaction(reaction_, recentReactions) {
    const choosers = recentReactions
        .filter((v) => {
        if (_2_tl_js_1.Api.is("reactionEmoji", reaction_.reaction)) {
            return _2_tl_js_1.Api.is("reactionEmoji", v.reaction) && v.reaction.emoticon == reaction_.reaction.emoticon;
        }
        else if (_2_tl_js_1.Api.is("reactionCustomEmoji", reaction_.reaction)) {
            return _2_tl_js_1.Api.is("reactionCustomEmoji", v.reaction) && v.reaction.document_id == reaction_.reaction.document_id;
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    })
        .map((v) => _2_tl_js_1.Api.peerToChatId(v.peer_id));
    const reaction = (0, _0_reaction_js_1.constructReaction)(reaction_.reaction);
    const count = reaction_.count;
    const chosen = reaction_.chosen_order !== undefined ? true : false;
    return { reaction, count, choosers, chosen };
}
