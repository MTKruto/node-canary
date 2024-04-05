"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructStoryPrivacy = exports.storyPrivacyToTlObject = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
async function resolveUsers(ids, getEntity) {
    const users = new Array();
    for (const id of ids) {
        const entity = await getEntity(new _2_tl_js_1.types.PeerUser({ user_id: BigInt(id) }));
        if (!(entity instanceof _2_tl_js_1.types.User)) {
            (0, _0_deps_js_1.unreachable)();
        }
        else {
            users.push(new _2_tl_js_1.types.InputUser({ user_id: entity.id, access_hash: entity.access_hash ?? 0n }));
        }
    }
    return users;
}
async function restrict(users_, rules, getEntity) {
    if (users_.length) {
        const users = await resolveUsers(users_, getEntity);
        rules.push(new _2_tl_js_1.types.InputPrivacyValueDisallowUsers({ users }));
    }
}
async function storyPrivacyToTlObject(privacy, getEntity) {
    const rules = new Array();
    if ("everyoneExcept" in privacy) {
        await restrict(privacy.everyoneExcept, rules, getEntity);
        rules.push(new _2_tl_js_1.types.InputPrivacyValueAllowAll());
    }
    else if ("contactsExcept" in privacy) {
        await restrict(privacy.contactsExcept, rules, getEntity);
        rules.push(new _2_tl_js_1.types.InputPrivacyValueAllowContacts());
    }
    else if ("closeFriends" in privacy) {
        rules.push(new _2_tl_js_1.types.InputPrivacyValueAllowCloseFriends());
    }
    else if ("only" in privacy) {
        if (!privacy.only.length) {
            (0, _0_deps_js_1.unreachable)();
        }
        const users = await resolveUsers(privacy.only, getEntity);
        rules.push(new _2_tl_js_1.types.InputPrivacyValueAllowUsers({ users }));
    }
    return rules;
}
exports.storyPrivacyToTlObject = storyPrivacyToTlObject;
function constructStoryPrivacy(privacy) {
    const except = privacy.find((v) => v instanceof _2_tl_js_1.types.PrivacyValueDisallowUsers)?.users?.map(Number) ?? [];
    if (privacy.some((v) => v instanceof _2_tl_js_1.types.PrivacyValueAllowAll)) {
        return { everyoneExcept: except };
    }
    else if (privacy.some((v) => v instanceof _2_tl_js_1.types.PrivacyValueAllowContacts)) {
        return { contactsExcept: except };
    }
    else if (privacy.some((v) => v instanceof _2_tl_js_1.types.PrivacyValueAllowCloseFriends)) {
        return { closeFriends: true };
    }
    const only = privacy.find((v) => v instanceof _2_tl_js_1.types.PrivacyValueAllowUsers)?.users?.map(Number) ?? [];
    return { only };
}
exports.constructStoryPrivacy = constructStoryPrivacy;
