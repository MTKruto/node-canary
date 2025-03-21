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
import { cleanObject, fromUnixTimestamp } from "../1_utilities.js";
import { is } from "../2_tl.js";
import { FileType, serializeFileId, toUniqueFileId } from "./_file_id.js";
import { constructMessageEntity } from "./0_message_entity.js";
import { constructSticker2 } from "./1_sticker.js";
export function constructGiftUpgradedComponent(attribute) {
    const name = "name" in attribute ? attribute.name : "";
    const rarityLevel = "rarity_permille" in attribute ? attribute.rarity_permille : 0;
    switch (attribute._) {
        case "starGiftAttributeModel": {
            if (!is("document", attribute.document)) {
                unreachable();
            }
            const fileId = {
                type: FileType.Sticker,
                dcId: attribute.document.dc_id,
                fileReference: attribute.document.file_reference,
                location: { type: "common", id: attribute.document.id, accessHash: attribute.document.access_hash },
            };
            const sticker = constructSticker2(attribute.document, serializeFileId(fileId), toUniqueFileId(fileId), undefined, "");
            return {
                type: "model",
                name,
                sticker,
                rarityLevel,
            };
        }
        case "starGiftAttributePattern": {
            if (!is("document", attribute.document)) {
                unreachable();
            }
            const fileId = {
                type: FileType.Sticker,
                dcId: attribute.document.dc_id,
                fileReference: attribute.document.file_reference,
                location: { type: "common", id: attribute.document.id, accessHash: attribute.document.access_hash },
            };
            const sticker = constructSticker2(attribute.document, serializeFileId(fileId), toUniqueFileId(fileId), undefined, "");
            return {
                type: "pattern",
                name,
                sticker,
                rarityLevel,
            };
        }
        case "starGiftAttributeBackdrop":
            return {
                type: "backdrop",
                name,
                centerColor: attribute.center_color,
                edgeColor: attribute.edge_color,
                patternColor: attribute.pattern_color,
                textColor: attribute.text_color,
                rarityLevel,
            };
        case "starGiftAttributeOriginalDetails":
            return cleanObject({
                type: "originalDetails",
                senderId: attribute.sender_id ? Number(attribute.sender_id) : undefined,
                recipientId: Number(attribute.recipient_id),
                date: fromUnixTimestamp(attribute.date),
                message: attribute.message?.text,
                entities: attribute.message ? attribute.message.entities.map(constructMessageEntity).filter((v) => !!v) : undefined,
            });
        default:
            unreachable();
    }
}
