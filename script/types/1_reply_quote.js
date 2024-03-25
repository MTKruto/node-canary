"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructReplyQuote = void 0;
const _0_message_entity_js_1 = require("./0_message_entity.js");
function constructReplyQuote(quoteText, quoteOffset, quoteEntities) {
    quoteText ??= "";
    quoteOffset ??= 0;
    quoteEntities ??= [];
    return {
        offset: quoteOffset,
        text: quoteText,
        entities: quoteEntities.map(_0_message_entity_js_1.constructMessageEntity).filter((v) => !!v),
    };
}
exports.constructReplyQuote = constructReplyQuote;
