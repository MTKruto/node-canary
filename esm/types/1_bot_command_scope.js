import { unreachable } from "../0_deps.js";
import { types } from "../2_tl.js";
export async function botCommandScopeToTlObject(scope, getInputPeer) {
    switch (scope.type) {
        case "default":
            return new types.BotCommandScopeDefault();
        case "allPrivateChats":
            return new types.BotCommandScopeUsers();
        case "allGroupChats":
            return new types.BotCommandScopeChats();
        case "allChatAdministrators":
            return new types.BotCommandScopeChatAdmins();
        case "chat":
            return new types.BotCommandScopePeer({ peer: await getInputPeer(scope.chatId) });
        case "chatAdministrators":
            return new types.BotCommandScopePeerAdmins({ peer: await getInputPeer(scope.chatId) });
        case "chatMember": {
            const user = await getInputPeer(scope.userId);
            if (!(user instanceof types.InputPeerUser)) {
                unreachable();
            }
            return new types.BotCommandScopePeerUser({ peer: await getInputPeer(scope.chatId), user_id: new types.InputUser({ user_id: user.user_id, access_hash: user.access_hash }) });
        }
        default:
            unreachable();
    }
}
