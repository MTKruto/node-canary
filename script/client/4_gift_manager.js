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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GiftManager_c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftManager = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_types_js_1 = require("../3_types.js");
const _0_utilities_js_1 = require("./0_utilities.js");
class GiftManager {
    constructor(c) {
        _GiftManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _GiftManager_c, c, "f");
    }
    async getGifts() {
        const gifts = await __classPrivateFieldGet(this, _GiftManager_c, "f").invoke({ _: "payments.getStarGifts", hash: 0 });
        if (!(_2_tl_js_1.Api.is("payments.starGifts", gifts))) {
            (0, _0_deps_js_1.unreachable)();
        }
        return await Promise.all(gifts.gifts.map((v) => (0, _3_types_js_1.constructGift)(v, __classPrivateFieldGet(this, _GiftManager_c, "f").getEntity)));
    }
    async getClaimedGifts(chatId, params) {
        __classPrivateFieldGet(this, _GiftManager_c, "f").storage.assertUser("getClaimedGifts");
        const offset = params?.offset ?? "";
        const limit = (0, _0_utilities_js_1.getLimit)(params?.limit);
        const peer = await __classPrivateFieldGet(this, _GiftManager_c, "f").getInputPeer(chatId);
        const result = await __classPrivateFieldGet(this, _GiftManager_c, "f").invoke({ _: "payments.getSavedStarGifts", peer, offset, limit });
        return await (0, _3_types_js_1.constructClaimedGifts)(result, __classPrivateFieldGet(this, _GiftManager_c, "f").getEntity);
    }
    async sendGift(chatId, giftId, params) {
        const hide_name = params?.private ? true : undefined;
        const include_upgrade = params?.upgrade ? true : undefined;
        const peer = await __classPrivateFieldGet(this, _GiftManager_c, "f").getInputPeer(chatId);
        const gift_id = BigInt(giftId);
        let message;
        if (params?.message) {
            const parsedText = await __classPrivateFieldGet(this, _GiftManager_c, "f").messageManager.parseText(params.message, params);
            message = { _: "textWithEntities", text: parsedText[0], entities: parsedText[1] ?? [] };
        }
        const invoice = { _: "inputInvoiceStarGift", hide_name, include_upgrade, peer, gift_id, message };
        const paymentForm = await __classPrivateFieldGet(this, _GiftManager_c, "f").invoke({ _: "payments.getPaymentForm", invoice });
        await __classPrivateFieldGet(this, _GiftManager_c, "f").invoke({ _: "payments.sendStarsForm", form_id: paymentForm.form_id, invoice });
    }
    async sellGift(userId, messageId) {
        const message = await __classPrivateFieldGet(this, _GiftManager_c, "f").messageManager.getMessage(userId, messageId);
        if (message == null) {
            throw new _0_errors_js_1.InputError("Message not found.");
        }
        await __classPrivateFieldGet(this, _GiftManager_c, "f").invoke({ _: "payments.convertStarGift", stargift: { _: "inputSavedStarGiftUser", msg_id: message.id } });
    }
    async getGift(slug) {
        if (slug.length > 100) {
            throw new _0_errors_js_1.InputError("Slug too long.");
        }
        slug = slug.toLowerCase();
        if (!/^[a-z]+-[1-9][0-9]*$/.test(slug)) {
            throw new _0_errors_js_1.InputError("Invalid slug.");
        }
        const result = await __classPrivateFieldGet(this, _GiftManager_c, "f").invoke({ _: "payments.getUniqueStarGift", slug });
        return await (0, _3_types_js_1.constructGift)(result.gift, __classPrivateFieldGet(this, _GiftManager_c, "f").getEntity.bind(this));
    }
}
exports.GiftManager = GiftManager;
_GiftManager_c = new WeakMap();
