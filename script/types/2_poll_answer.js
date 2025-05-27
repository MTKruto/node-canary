"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructPollAnswer = constructPollAnswer;
const _0_deps_js_1 = require("../0_deps.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
async function constructPollAnswer(update, getEntity) {
    const pollId = String(update.poll_id);
    const entity = await getEntity(update.peer);
    if (!entity) {
        (0, _0_deps_js_1.unreachable)();
    }
    const from = (0, _1_chat_p_js_1.constructChatP)(entity);
    const optionIndexes = update.options.map((v) => v[0]);
    return {
        pollId,
        from,
        optionIndexes,
    };
}
