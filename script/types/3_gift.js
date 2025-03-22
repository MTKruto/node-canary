"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructGift = constructGift;
exports.constructGiftUpgraded = constructGiftUpgraded;
exports.constructGiftNonUpgraded = constructGiftNonUpgraded;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _file_id_js_1 = require("./_file_id.js");
const _1_sticker_js_1 = require("./1_sticker.js");
const _2_gift_upgraded_component_js_1 = require("./2_gift_upgraded_component.js");
function constructGift(gift) {
    if (_2_tl_js_1.Api.is("starGiftUnique", gift)) {
        return constructGiftUpgraded(gift);
    }
    else {
        return constructGiftNonUpgraded(gift);
    }
}
function constructGiftUpgraded(gift) {
    const id = String(gift.id);
    const title = gift.title;
    const index = gift.num;
    const ownerId = Number(gift.owner_id);
    const currentUpgrades = gift.availability_issued;
    const maxUpgrades = gift.availability_total;
    const components = gift.attributes.map(_2_gift_upgraded_component_js_1.constructGiftUpgradedComponent);
    return {
        type: "upgraded",
        id,
        title,
        index,
        ownerId,
        currentUpgrades,
        maxUpgrades,
        components,
    };
}
function constructGiftNonUpgraded(gift) {
    if (!_2_tl_js_1.Api.is("document", gift.sticker)) {
        (0, _0_deps_js_1.unreachable)();
    }
    const id = String(gift.id);
    const fileId = {
        type: _file_id_js_1.FileType.Sticker,
        dcId: gift.sticker.dc_id,
        fileReference: gift.sticker.file_reference,
        location: { type: "common", id: gift.sticker.id, accessHash: gift.sticker.access_hash },
    };
    const sticker = (0, _1_sticker_js_1.constructSticker2)(gift.sticker, (0, _file_id_js_1.serializeFileId)(fileId), (0, _file_id_js_1.toUniqueFileId)(fileId), undefined, "");
    const price = Number(gift.stars);
    const limited = !!gift.limited;
    const remaining = limited ? gift.availability_remains ?? 0 : undefined;
    const total = limited ? gift.availability_total ?? 0 : undefined;
    const soldOut = limited ? !!gift.sold_out : undefined;
    const birthday = !!gift.birthday;
    const conversionPrice = Number(gift.convert_stars);
    const firstSaleDate = limited ? gift.first_sale_date ? (0, _1_utilities_js_1.fromUnixTimestamp)(gift.first_sale_date) : undefined : undefined;
    const lastSaleDate = limited ? gift.last_sale_date ? (0, _1_utilities_js_1.fromUnixTimestamp)(gift.last_sale_date) : undefined : undefined;
    const upgradePrice = gift.upgrade_stars ? Number(gift.upgrade_stars) : undefined;
    return (0, _1_utilities_js_1.cleanObject)({
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
