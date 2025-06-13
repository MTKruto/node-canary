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
import { EntityGetter } from "./_getters.js";
import { Sticker } from "./1_sticker.js";
import { User } from "./1_user.js";
import { GiftUpgradedComponent } from "./2_gift_upgraded_component.js";
/**
 * An non-upgraded gift.
 *
 * @unlisted
 */
export interface GiftNonUpgraded {
    /** @discriminator */
    type: "nonupgraded";
    /** The identifier of the gift. */
    id: string;
    /** The sticker that represents the gift. */
    sticker: Sticker;
    /** The price of the sticker in Telegram Stars. */
    price: number;
    /** Whether the supply of this gift is limited. */
    limited: boolean;
    /** The remaining supply of the gift if limited. */
    remaining?: number;
    /** The total supply of the gift if limited. */
    total?: number;
    /** Whether the gift is sold out if limited. */
    soldOut?: boolean;
    /** Whether the gift is dedicated to birthdays. */
    birthday: boolean;
    /** The amount of Telegram Stars that the gift can be swapped with. */
    conversionPrice: number;
    /** The date of the first sale of the gift if sold out. */
    firstSaleDate?: Date;
    /** The date of the last sale of the gift if sold out. */
    lastSaleDate?: Date;
    /** The amount of stars required to upgrade the gift. */
    upgradePrice?: number;
}
/**
 * An upgraded gift.
 *
 * @unlisted
 */
export interface GiftUpgraded {
    /** @discriminator */
    type: "upgraded";
    /** The identifier of the gift. */
    id: string;
    /** The title of the gift. */
    title: string;
    /** The unique index of the gift among others of the same type. */
    index: number;
    /** The name of the user that owns the gift. */
    ownerName?: string;
    /** The address of the TON wallet that owns the gift. */
    ownerAddress?: string;
    /** The user that owns the gift. */
    owner?: User;
    /** The count of the amount of upgraded gifts of the same type. */
    currentUpgrades: number;
    /** The maximum count of gifts of the same type that can be upgraded. */
    maxUpgrades: number;
    /** The components of the gift. */
    components: GiftUpgradedComponent[];
}
/** A gift. */
export type Gift = GiftNonUpgraded | GiftUpgraded;
export declare function constructGift(gift: Api.StarGift, getEntity: EntityGetter): Promise<Gift>;
export declare function constructGiftUpgraded(gift: Api.starGiftUnique, getEntity: EntityGetter): Promise<GiftUpgraded>;
export declare function constructGiftNonUpgraded(gift: Api.starGift): Gift;
//# sourceMappingURL=3_gift.d.ts.map