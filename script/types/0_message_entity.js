"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortMessageEntities = exports.messageEntityToTlObject = exports.constructMessageEntity = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
function constructMessageEntity(obj) {
    if (obj instanceof _2_tl_js_1.types.MessageEntityMention) {
        return { type: "mention", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntityHashtag) {
        return { type: "hashtag", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntityBotCommand) {
        return { type: "botCommand", offset: obj.offset ?? 0, length: obj.length };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntityUrl) {
        return { type: "url", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntityEmail) {
        return { type: "email", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntityBold) {
        return { type: "bold", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntityItalic) {
        return { type: "italic", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntityCode) {
        return { type: "code", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntityPre) {
        return { type: "pre", offset: obj.offset, length: obj.length, language: obj.language };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntityTextUrl) {
        return { type: "textLink", offset: obj.offset, length: obj.length, url: obj.url };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntityMentionName) {
        return { type: "textMention", offset: obj.offset, length: obj.length, userId: Number(obj.user_id) };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntityCashtag) {
        return { type: "cashtag", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntityPhone) {
        return { type: "phoneNumber", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntityUnderline) {
        return { type: "underline", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntityStrike) {
        return { type: "strikethrough", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntityBlockquote) {
        return { type: "blockquote", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntityBankCard) {
        return { type: "bankCard", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntitySpoiler) {
        return { type: "spoiler", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof _2_tl_js_1.types.MessageEntityCustomEmoji) {
        return { type: "customEmoji", offset: obj.offset, length: obj.length, customEmojiId: String(obj.document_id) };
    }
    else {
        return null;
    }
}
exports.constructMessageEntity = constructMessageEntity;
async function messageEntityToTlObject(entity, getEntity) {
    const { offset, length } = entity;
    switch (entity.type) {
        case "mention":
            return new _2_tl_js_1.types.MessageEntityMention({ offset, length });
        case "hashtag":
            return new _2_tl_js_1.types.MessageEntityHashtag({ offset, length });
        case "botCommand":
            return new _2_tl_js_1.types.MessageEntityBotCommand({ offset, length });
        case "url":
            return new _2_tl_js_1.types.MessageEntityUrl({ offset, length });
        case "email":
            return new _2_tl_js_1.types.MessageEntityEmail({ offset, length });
        case "bold":
            return new _2_tl_js_1.types.MessageEntityBold({ offset, length });
        case "italic":
            return new _2_tl_js_1.types.MessageEntityItalic({ offset, length });
        case "code":
            return new _2_tl_js_1.types.MessageEntityCode({ offset, length });
        case "pre":
            return new _2_tl_js_1.types.MessageEntityPre({ offset, length, language: entity.language });
        case "textLink": {
            try {
                const url = new URL(entity.url);
                if (url.protocol == "tg:" && url.hostname == "user" && (url.pathname == "/" || url.pathname == "")) {
                    const id = Number(url.searchParams.get("id"));
                    if (!isNaN(id)) {
                        const entity_ = await getEntity(new _2_tl_js_1.types.PeerUser({ user_id: BigInt(id) }));
                        if (!entity_) {
                            (0, _0_deps_js_1.unreachable)();
                        }
                        return new _2_tl_js_1.types.InputMessageEntityMentionName({ offset, length, user_id: new _2_tl_js_1.types.InputUser({ user_id: entity_.id, access_hash: entity_.access_hash ?? 0n }) });
                    }
                }
            }
            catch {
                //
            }
            return new _2_tl_js_1.types.MessageEntityTextUrl({ offset, length, url: entity.url });
        }
        case "textMention": {
            const entity_ = await getEntity(new _2_tl_js_1.types.PeerUser({ user_id: BigInt(entity.userId) }));
            if (!entity_) {
                (0, _0_deps_js_1.unreachable)();
            }
            return new _2_tl_js_1.types.InputMessageEntityMentionName({ offset, length, user_id: new _2_tl_js_1.types.InputUser({ user_id: entity_.id, access_hash: entity_.access_hash ?? 0n }) });
        }
        case "cashtag":
            return new _2_tl_js_1.types.MessageEntityCashtag({ offset, length });
        case "phoneNumber":
            return new _2_tl_js_1.types.MessageEntityPhone({ offset, length });
        case "underline":
            return new _2_tl_js_1.types.MessageEntityUnderline({ offset, length });
        case "strikethrough":
            return new _2_tl_js_1.types.MessageEntityStrike({ offset, length });
        case "blockquote":
            return new _2_tl_js_1.types.MessageEntityBlockquote({ offset, length });
        case "bankCard":
            return new _2_tl_js_1.types.MessageEntityBankCard({ offset, length });
        case "spoiler":
            return new _2_tl_js_1.types.MessageEntitySpoiler({ offset, length });
        case "customEmoji":
            return new _2_tl_js_1.types.MessageEntityCustomEmoji({ offset, length, document_id: BigInt(entity.customEmojiId) });
    }
}
exports.messageEntityToTlObject = messageEntityToTlObject;
const priorities = {
    "mention": 50,
    "hashtag": 50,
    "botCommand": 50,
    "url": 50,
    "email": 50,
    "bold": 90,
    "italic": 91,
    "code": 20,
    "pre": 11,
    "textLink": 49,
    "textMention": 49,
    "cashtag": 50,
    "phoneNumber": 50,
    "underline": 92,
    "strikethrough": 93,
    "blockquote": 0,
    "bankCard": 50,
    "spoiler": 94,
    "customEmoji": 99,
};
function sortMessageEntities(entities) {
    return entities.sort(({ offset, type, length }, other) => {
        if (offset !== other.offset) {
            return offset < other.offset ? -1 : 1;
        }
        if (length !== other.length) {
            return length > other.length ? -1 : 1;
        }
        const priority = priorities[type];
        const otherPriority = priorities[other.type];
        return priority < otherPriority ? -1 : 1;
    });
}
exports.sortMessageEntities = sortMessageEntities;
