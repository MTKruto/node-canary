"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructInactiveChat = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
function constructInactiveChat(chat_, lastActivity) {
    if (chat_ instanceof _2_tl_js_1.types.ChatEmpty) {
        (0, _0_deps_js_1.unreachable)();
    }
    const chat = (0, _1_chat_p_js_1.constructChatP)(chat_);
    return {
        lastActivity: (0, _1_utilities_js_1.fromUnixTimestamp)(lastActivity),
        chat,
    };
}
exports.constructInactiveChat = constructInactiveChat;
