/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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
import { cleanObject } from "../1_utilities.js";
import { Api } from "../2_tl.js";
export function constructMessageEntity(obj) {
    if (Api.is("messageEntityMention", obj)) {
        return { type: "mention", offset: obj.offset, length: obj.length };
    }
    else if (Api.is("messageEntityHashtag", obj)) {
        return { type: "hashtag", offset: obj.offset, length: obj.length };
    }
    else if (Api.is("messageEntityBotCommand", obj)) {
        return { type: "botCommand", offset: obj.offset ?? 0, length: obj.length };
    }
    else if (Api.is("messageEntityUrl", obj)) {
        return { type: "url", offset: obj.offset, length: obj.length };
    }
    else if (Api.is("messageEntityEmail", obj)) {
        return { type: "email", offset: obj.offset, length: obj.length };
    }
    else if (Api.is("messageEntityBold", obj)) {
        return { type: "bold", offset: obj.offset, length: obj.length };
    }
    else if (Api.is("messageEntityItalic", obj)) {
        return { type: "italic", offset: obj.offset, length: obj.length };
    }
    else if (Api.is("messageEntityCode", obj)) {
        return { type: "code", offset: obj.offset, length: obj.length };
    }
    else if (Api.is("messageEntityPre", obj)) {
        return { type: "pre", offset: obj.offset, length: obj.length, language: obj.language };
    }
    else if (Api.is("messageEntityTextUrl", obj)) {
        return { type: "textLink", offset: obj.offset, length: obj.length, url: obj.url };
    }
    else if (Api.is("messageEntityMentionName", obj)) {
        return { type: "textMention", offset: obj.offset, length: obj.length, userId: Number(obj.user_id) };
    }
    else if (Api.is("messageEntityCashtag", obj)) {
        return { type: "cashtag", offset: obj.offset, length: obj.length };
    }
    else if (Api.is("messageEntityPhone", obj)) {
        return { type: "phoneNumber", offset: obj.offset, length: obj.length };
    }
    else if (Api.is("messageEntityUnderline", obj)) {
        return { type: "underline", offset: obj.offset, length: obj.length };
    }
    else if (Api.is("messageEntityStrike", obj)) {
        return { type: "strikethrough", offset: obj.offset, length: obj.length };
    }
    else if (Api.is("messageEntityBlockquote", obj)) {
        return cleanObject({ type: "blockquote", offset: obj.offset, length: obj.length, collapsible: obj.collapsed ? true : undefined });
    }
    else if (Api.is("messageEntityBankCard", obj)) {
        return { type: "bankCard", offset: obj.offset, length: obj.length };
    }
    else if (Api.is("messageEntitySpoiler", obj)) {
        return { type: "spoiler", offset: obj.offset, length: obj.length };
    }
    else if (Api.is("messageEntityCustomEmoji", obj)) {
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
            return { _: "messageEntityMention", offset, length };
        case "hashtag":
            return { _: "messageEntityHashtag", offset, length };
        case "botCommand":
            return { _: "messageEntityBotCommand", offset, length };
        case "url":
            return { _: "messageEntityUrl", offset, length };
        case "email":
            return { _: "messageEntityEmail", offset, length };
        case "bold":
            return { _: "messageEntityBold", offset, length };
        case "italic":
            return { _: "messageEntityItalic", offset, length };
        case "code":
            return { _: "messageEntityCode", offset, length };
        case "pre":
            return { _: "messageEntityPre", offset, length, language: entity.language };
        case "textLink": {
            try {
                const url = new URL(entity.url);
                if (url.protocol == "tg:" && url.hostname == "user" && (url.pathname == "/" || url.pathname == "")) {
                    const id = Number(url.searchParams.get("id"));
                    if (!isNaN(id)) {
                        const entity_ = await getEntity({ _: "peerUser", user_id: BigInt(id) });
                        if (!entity_) {
                            unreachable();
                        }
                        return { _: "inputMessageEntityMentionName", offset, length, user_id: ({ _: "inputUser", user_id: entity_.id, access_hash: entity_.access_hash ?? 0n }) };
                    }
                }
            }
            catch {
                //
            }
            return { _: "messageEntityTextUrl", offset, length, url: entity.url };
        }
        case "textMention": {
            const entity_ = await getEntity({ _: "peerUser", user_id: BigInt(entity.userId) });
            if (!entity_) {
                unreachable();
            }
            return { _: "inputMessageEntityMentionName", offset, length, user_id: ({ _: "inputUser", user_id: entity_.id, access_hash: entity_.access_hash ?? 0n }) };
        }
        case "cashtag":
            return { _: "messageEntityCashtag", offset, length };
        case "phoneNumber":
            return { _: "messageEntityPhone", offset, length };
        case "underline":
            return { _: "messageEntityUnderline", offset, length };
        case "strikethrough":
            return { _: "messageEntityStrike", offset, length };
        case "blockquote":
            return { _: "messageEntityBlockquote", offset, length, collapsed: entity.collapsible };
        case "bankCard":
            return { _: "messageEntityBankCard", offset, length };
        case "spoiler":
            return { _: "messageEntitySpoiler", offset, length };
        case "customEmoji":
            return { _: "messageEntityCustomEmoji", offset, length, document_id: BigInt(entity.customEmojiId) };
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
