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
import { Api } from "../2_tl.js";
import { FileType, serializeFileId, toUniqueFileId } from "./_file_id.js";
import { constructSticker2 } from "./1_sticker.js";
import { constructUser } from "./1_user.js";
import { constructGiftUpgradedComponent } from "./2_gift_upgraded_component.js";
export async function constructGift(gift, getEntity) {
    if (Api.is("starGiftUnique", gift)) {
        return await constructGiftUpgraded(gift, getEntity);
    }
    else {
        return constructGiftNonUpgraded(gift);
    }
}
export async function constructGiftUpgraded(gift, getEntity) {
    const id = String(gift.id);
    const title = gift.title;
    const index = gift.num;
    let owner;
    if (gift.owner_id) {
        const entity = await getEntity(gift.owner_id);
        if (Api.is("user", entity)) {
            owner = constructUser(entity);
        }
    }
    const ownerName = gift.owner_name;
    const ownerAddress = gift.owner_address;
    const currentUpgrades = gift.availability_issued;
    const maxUpgrades = gift.availability_total;
    const components = gift.attributes.map(constructGiftUpgradedComponent);
    const address = gift.gift_address;
    const price = gift.resell_stars !== undefined ? Number(gift.resell_stars) : undefined;
    return cleanObject({
        type: "upgraded",
        id,
        title,
        index,
        ownerName,
        ownerAddress,
        owner,
        currentUpgrades,
        maxUpgrades,
        components,
        address,
        price,
    });
}
export function constructGiftNonUpgraded(gift) {
    if (!Api.is("document", gift.sticker)) {
        unreachable();
    }
    const id = String(gift.id);
    const fileId = {
        type: FileType.Sticker,
        dcId: gift.sticker.dc_id,
        fileReference: gift.sticker.file_reference,
        location: { type: "common", id: gift.sticker.id, accessHash: gift.sticker.access_hash },
    };
    const sticker = constructSticker2(gift.sticker, serializeFileId(fileId), toUniqueFileId(fileId), undefined, "");
    const price = Number(gift.stars);
    const limited = !!gift.limited;
    const remaining = limited ? gift.availability_remains ?? 0 : undefined;
    const total = limited ? gift.availability_total ?? 0 : undefined;
    const soldOut = limited ? !!gift.sold_out : undefined;
    const birthday = !!gift.birthday;
    const conversionPrice = Number(gift.convert_stars);
    const firstSaleDate = limited ? gift.first_sale_date ? fromUnixTimestamp(gift.first_sale_date) : undefined : undefined;
    const lastSaleDate = limited ? gift.last_sale_date ? fromUnixTimestamp(gift.last_sale_date) : undefined : undefined;
    const upgradePrice = gift.upgrade_stars ? Number(gift.upgrade_stars) : undefined;
    return cleanObject({
        type: "nonupgraded",
        id,
        sticker,
        price,
        limited,
        remaining,
        total,
        soldOut,
        birthday,
        conversionPrice,
        firstSaleDate,
        lastSaleDate,
        upgradePrice,
    });
}
