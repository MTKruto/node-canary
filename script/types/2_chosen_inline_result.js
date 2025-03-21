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
exports.constructChosenInlineResult = constructChosenInlineResult;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_location_js_1 = require("./0_location.js");
const _1_user_js_1 = require("./1_user.js");
async function constructChosenInlineResult(ubis, getEntity) {
    const entity = await getEntity({ ...ubis, _: "peerUser" });
    if (!entity || !((0, _2_tl_js_1.is)("user", entity))) {
        (0, _0_deps_js_1.unreachable)();
    }
    return (0, _1_utilities_js_1.cleanObject)({
        resultId: ubis.id,
        from: (0, _1_user_js_1.constructUser)(entity),
        location: (0, _2_tl_js_1.is)("geoPoint", ubis.geo) ? (0, _0_location_js_1.constructLocation)(ubis.geo) : undefined,
        inlineMessageId: ubis.msg_id === undefined ? undefined : (0, _1_utilities_js_1.base64EncodeUrlSafe)(new _2_tl_js_1.TLWriter().serialize(ubis.msg_id).buffer),
        query: ubis.query,
    });
}
