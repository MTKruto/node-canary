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
exports.storyPrivacyToTlObject = storyPrivacyToTlObject;
exports.constructStoryPrivacy = constructStoryPrivacy;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
async function resolveUsers(ids, getEntity) {
    const users = new Array();
    for (const id of ids) {
        const entity = await getEntity({ _: "peerUser", user_id: BigInt(id) });
        if (!(_2_tl_js_1.Api.is("user", entity))) {
            (0, _0_deps_js_1.unreachable)();
        }
        else {
            users.push({ _: "inputUser", user_id: entity.id, access_hash: entity.access_hash ?? 0n });
        }
    }
    return users;
}
async function restrict(users_, rules, getEntity) {
    if (users_.length) {
        const users = await resolveUsers(users_, getEntity);
        rules.push({ _: "inputPrivacyValueDisallowUsers", users });
    }
}
async function storyPrivacyToTlObject(privacy, getEntity) {
    const rules = new Array();
    if ("everyoneExcept" in privacy) {
        await restrict(privacy.everyoneExcept, rules, getEntity);
        rules.push({ _: "inputPrivacyValueAllowAll" });
    }
    else if ("contactsExcept" in privacy) {
        await restrict(privacy.contactsExcept, rules, getEntity);
        rules.push({ _: "inputPrivacyValueAllowContacts" });
    }
    else if ("closeFriends" in privacy) {
        rules.push({ _: "inputPrivacyValueAllowCloseFriends" });
    }
    else if ("only" in privacy) {
        if (!privacy.only.length) {
            (0, _0_deps_js_1.unreachable)();
        }
        const users = await resolveUsers(privacy.only, getEntity);
        rules.push({ _: "inputPrivacyValueAllowUsers", users });
    }
    return rules;
}
function constructStoryPrivacy(privacy) {
    const except = privacy.find((v) => _2_tl_js_1.Api.is("privacyValueDisallowUsers", v))?.users?.map(Number) ?? [];
    if (privacy.some((v) => _2_tl_js_1.Api.is("privacyValueAllowAll", v))) {
        return { everyoneExcept: except };
    }
    else if (privacy.some((v) => _2_tl_js_1.Api.is("privacyValueAllowContacts", v))) {
        return { contactsExcept: except };
    }
    else if (privacy.some((v) => _2_tl_js_1.Api.is("privacyValueAllowCloseFriends", v))) {
        return { closeFriends: true };
    }
    const only = privacy.find((v) => _2_tl_js_1.Api.is("privacyValueAllowUsers", v))?.users?.map(Number) ?? [];
    return { only };
}
