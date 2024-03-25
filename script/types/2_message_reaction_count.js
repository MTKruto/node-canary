"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructMessageReactionCount = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
const _1_reaction_count_js_1 = require("./1_reaction_count.js");
async function constructMessageReactionCount(update, getEntity) {
    const date = (0, _1_utilities_js_1.fromUnixTimestamp)(update.date);
    const reactions = update.reactions.map((v) => (0, _1_reaction_count_js_1.constructReactionCount)(v));
    const entity = await getEntity(update.peer);
    if (entity) {
        const chat = (0, _1_chat_p_js_1.constructChatP)(entity);
        const messageId = update.msg_id;
        const messageReactionCount = { chat, messageId, date, reactions };
        return messageReactionCount;
    }
    else {
        return null;
    }
}
exports.constructMessageReactionCount = constructMessageReactionCount;
