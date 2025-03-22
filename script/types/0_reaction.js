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
exports.constructReaction = constructReaction;
exports.reactionToTlObject = reactionToTlObject;
exports.reactionEqual = reactionEqual;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
function constructReaction(reaction) {
    if (_2_tl_js_1.Api.is("reactionEmoji", reaction)) {
        return { type: "emoji", emoji: reaction.emoticon };
    }
    else if (_2_tl_js_1.Api.is("reactionCustomEmoji", reaction)) {
        return { type: "custom", id: String(reaction.document_id) };
    }
    else if (_2_tl_js_1.Api.is("reactionPaid", reaction)) {
        return { type: "paid" };
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
function reactionToTlObject(reaction) {
    return reaction.type == "emoji" ? ({ _: "reactionEmoji", emoticon: reaction.emoji }) : reaction.type == "custom" ? ({ _: "reactionCustomEmoji", document_id: BigInt(reaction.id) }) : { _: "reactionPaid" };
}
function reactionEqual(left, right) {
    if (left.type == "emoji") {
        if (right.type == "emoji" && left.emoji == right.emoji) {
            return true;
        }
    }
    else if (left.type == "custom") {
        if (right.type == "custom" && left.id == right.id) {
            return true;
        }
    }
    return false;
}
