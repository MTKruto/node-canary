import { unreachable } from "../0_deps.js";
import { types } from "../2_tl.js";
async function resolveUsers(ids, getEntity) {
    const users = new Array();
    for (const id of ids) {
        const entity = await getEntity(new types.PeerUser({ user_id: BigInt(id) }));
        if (!(entity instanceof types.User)) {
            unreachable();
        }
        else {
            users.push(new types.InputUser({ user_id: entity.id, access_hash: entity.access_hash ?? 0n }));
        }
    }
    return users;
}
async function restrict(users_, rules, getEntity) {
    if (users_.length) {
        const users = await resolveUsers(users_, getEntity);
        rules.push(new types.InputPrivacyValueDisallowUsers({ users }));
    }
}
export async function storyPrivacyToTlObject(privacy, getEntity) {
    const rules = new Array();
    if ("everyoneExcept" in privacy) {
        await restrict(privacy.everyoneExcept, rules, getEntity);
        rules.push(new types.InputPrivacyValueAllowAll());
    }
    else if ("contactsExcept" in privacy) {
        await restrict(privacy.contactsExcept, rules, getEntity);
        rules.push(new types.InputPrivacyValueAllowContacts());
    }
    else if ("closeFriends" in privacy) {
        rules.push(new types.InputPrivacyValueAllowCloseFriends());
    }
    else if ("only" in privacy) {
        if (!privacy.only.length) {
            unreachable();
        }
        const users = await resolveUsers(privacy.only, getEntity);
        rules.push(new types.InputPrivacyValueAllowUsers({ users }));
    }
    return rules;
}
export function constructStoryPrivacy(privacy) {
    const except = privacy.find((v) => v instanceof types.PrivacyValueDisallowUsers)?.users?.map(Number) ?? [];
    if (privacy.some((v) => v instanceof types.PrivacyValueAllowAll)) {
        return { everyoneExcept: except };
    }
    else if (privacy.some((v) => v instanceof types.PrivacyValueAllowContacts)) {
        return { contactsExcept: except };
    }
    else if (privacy.some((v) => v instanceof types.PrivacyValueAllowCloseFriends)) {
        return { closeFriends: true };
    }
    const only = privacy.find((v) => v instanceof types.PrivacyValueAllowUsers)?.users?.map(Number) ?? [];
    return { only };
}
