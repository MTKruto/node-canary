/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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
import { unreachable } from "../0_deps.js";
import { types } from "../2_tl.js";
export function constructMessageEntity(obj) {
    if (obj instanceof types.MessageEntityMention) {
        return { type: "mention", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof types.MessageEntityHashtag) {
        return { type: "hashtag", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof types.MessageEntityBotCommand) {
        return { type: "botCommand", offset: obj.offset ?? 0, length: obj.length };
    }
    else if (obj instanceof types.MessageEntityUrl) {
        return { type: "url", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof types.MessageEntityEmail) {
        return { type: "email", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof types.MessageEntityBold) {
        return { type: "bold", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof types.MessageEntityItalic) {
        return { type: "italic", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof types.MessageEntityCode) {
        return { type: "code", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof types.MessageEntityPre) {
        return { type: "pre", offset: obj.offset, length: obj.length, language: obj.language };
    }
    else if (obj instanceof types.MessageEntityTextUrl) {
        return { type: "textLink", offset: obj.offset, length: obj.length, url: obj.url };
    }
    else if (obj instanceof types.MessageEntityMentionName) {
        return { type: "textMention", offset: obj.offset, length: obj.length, userId: Number(obj.user_id) };
    }
    else if (obj instanceof types.MessageEntityCashtag) {
        return { type: "cashtag", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof types.MessageEntityPhone) {
        return { type: "phoneNumber", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof types.MessageEntityUnderline) {
        return { type: "underline", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof types.MessageEntityStrike) {
        return { type: "strikethrough", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof types.MessageEntityBlockquote) {
        return { type: "blockquote", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof types.MessageEntityBankCard) {
        return { type: "bankCard", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof types.MessageEntitySpoiler) {
        return { type: "spoiler", offset: obj.offset, length: obj.length };
    }
    else if (obj instanceof types.MessageEntityCustomEmoji) {
        return { type: "customEmoji", offset: obj.offset, length: obj.length, customEmojiId: String(obj.document_id) };
    }
    else {
        return null;
    }
}
export async function messageEntityToTlObject(entity, getEntity) {
    const { offset, length } = entity;
    switch (entity.type) {
        case "mention":
            return new types.MessageEntityMention({ offset, length });
        case "hashtag":
            return new types.MessageEntityHashtag({ offset, length });
        case "botCommand":
            return new types.MessageEntityBotCommand({ offset, length });
        case "url":
            return new types.MessageEntityUrl({ offset, length });
        case "email":
            return new types.MessageEntityEmail({ offset, length });
        case "bold":
            return new types.MessageEntityBold({ offset, length });
        case "italic":
            return new types.MessageEntityItalic({ offset, length });
        case "code":
            return new types.MessageEntityCode({ offset, length });
        case "pre":
            return new types.MessageEntityPre({ offset, length, language: entity.language });
        case "textLink": {
            try {
                const url = new URL(entity.url);
                if (url.protocol == "tg:" && url.hostname == "user" && (url.pathname == "/" || url.pathname == "")) {
                    const id = Number(url.searchParams.get("id"));
                    if (!isNaN(id)) {
                        const entity_ = await getEntity(new types.PeerUser({ user_id: BigInt(id) }));
                        if (!entity_) {
                            unreachable();
                        }
                        return new types.InputMessageEntityMentionName({ offset, length, user_id: new types.InputUser({ user_id: entity_.id, access_hash: entity_.access_hash ?? 0n }) });
                    }
                }
            }
            catch {
                //
            }
            return new types.MessageEntityTextUrl({ offset, length, url: entity.url });
        }
        case "textMention": {
            const entity_ = await getEntity(new types.PeerUser({ user_id: BigInt(entity.userId) }));
            if (!entity_) {
                unreachable();
            }
            return new types.InputMessageEntityMentionName({ offset, length, user_id: new types.InputUser({ user_id: entity_.id, access_hash: entity_.access_hash ?? 0n }) });
        }
        case "cashtag":
            return new types.MessageEntityCashtag({ offset, length });
        case "phoneNumber":
            return new types.MessageEntityPhone({ offset, length });
        case "underline":
            return new types.MessageEntityUnderline({ offset, length });
        case "strikethrough":
            return new types.MessageEntityStrike({ offset, length });
        case "blockquote":
            return new types.MessageEntityBlockquote({ offset, length });
        case "bankCard":
            return new types.MessageEntityBankCard({ offset, length });
        case "spoiler":
            return new types.MessageEntitySpoiler({ offset, length });
        case "customEmoji":
            return new types.MessageEntityCustomEmoji({ offset, length, document_id: BigInt(entity.customEmojiId) });
    }
}
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
export function sortMessageEntities(entities) {
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
