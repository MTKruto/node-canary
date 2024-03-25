"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.botCommandScopeToTlObject = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
async function botCommandScopeToTlObject(scope, getInputPeer) {
    switch (scope.type) {
        case "default":
            return new _2_tl_js_1.types.BotCommandScopeDefault();
        case "allPrivateChats":
            return new _2_tl_js_1.types.BotCommandScopeUsers();
        case "allGroupChats":
            return new _2_tl_js_1.types.BotCommandScopeChats();
        case "allChatAdministrators":
            return new _2_tl_js_1.types.BotCommandScopeChatAdmins();
        case "chat":
            return new _2_tl_js_1.types.BotCommandScopePeer({ peer: await getInputPeer(scope.chatId) });
        case "chatAdministrators":
            return new _2_tl_js_1.types.BotCommandScopePeerAdmins({ peer: await getInputPeer(scope.chatId) });
        case "chatMember": {
            const user = await getInputPeer(scope.userId);
            if (!(user instanceof _2_tl_js_1.types.InputPeerUser)) {
                (0, _1_utilities_js_1.UNREACHABLE)();
            }
            return new _2_tl_js_1.types.BotCommandScopePeerUser({ peer: await getInputPeer(scope.chatId), user_id: new _2_tl_js_1.types.InputUser({ user_id: user.user_id, access_hash: user.access_hash }) });
        }
        default:
            (0, _1_utilities_js_1.UNREACHABLE)();
    }
}
exports.botCommandScopeToTlObject = botCommandScopeToTlObject;
