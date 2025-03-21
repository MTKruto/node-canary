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
import { Api } from "../2_tl.js";
import { MessageEntity } from "./0_message_entity.js";
import { Sticker } from "./1_sticker.js";
/**
 * The model of an upgraded gift.
 *
 * @unlisted
 */
export interface GiftUpgradedComponentModel {
    /** @discriminator */
    type: "model";
    /** The name of the model. */
    name: string;
    /** The sticker belonging to the model. */
    sticker: Sticker;
    /** A number determining how rare this type of model is out of a thousand of others. */
    rarityLevel: number;
}
/**
 * The pattern of an upgraded gift.
 *
 * @unlisted
 */
export interface GiftUpgradedComponentPattern {
    /** @discriminator */
    type: "pattern";
    /** The name of the pattern. */
    name: string;
    /** The sticker belonging to the pattern. */
    sticker: Sticker;
    /** A number determining how rare this type of pattern is out of a thousand of others. */
    rarityLevel: number;
}
/**
 * The backdrop of an upgraded gift.
 *
 * @unlisted
 */
export interface GiftUpgradedComponentBackdrop {
    /** @discriminator */
    type: "backdrop";
    /** The name of the backdrop. */
    name: string;
    /** The center color of the backdrop. */
    centerColor: number;
    /** The edge color of the backdrop. */
    edgeColor: number;
    /** The pattern color of the backdrop. */
    patternColor: number;
    /** The text color of the backdrop. */
    textColor: number;
    /** A number determining how rare this type of backdrop is out of a thousand of others. */
    rarityLevel: number;
}
/**
 * The original details of an upgraded gift.
 *
 * @unlisted
 */
export interface GiftUpgradedComponentOriginalDetails {
    /** @discriminator */
    type: "originalDetails";
    senderId?: number;
    recipientId: number;
    date: Date;
    message?: string;
    entities?: MessageEntity[];
}
/**
 * A component of an upgraded gift.
 *
 * @unlisted
 */
export type GiftUpgradedComponent = GiftUpgradedComponentModel | GiftUpgradedComponentPattern | GiftUpgradedComponentBackdrop | GiftUpgradedComponentOriginalDetails;
export declare function constructGiftUpgradedComponent(attribute: Api.StarGiftAttribute): GiftUpgradedComponent;
//# sourceMappingURL=2_gift_upgraded_component.d.ts.map