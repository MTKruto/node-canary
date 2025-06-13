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
import { unreachable } from "../0_deps.js";
import { InputError } from "../0_errors.js";
import { Api } from "../2_tl.js";
import { constructClaimedGifts, constructGift } from "../3_types.js";
export class GiftManager {
    constructor(c) {
        _GiftManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _GiftManager_c, c, "f");
    }
    async getGifts() {
        const gifts = await __classPrivateFieldGet(this, _GiftManager_c, "f").invoke({ _: "payments.getStarGifts", hash: 0 });
        if (!(Api.is("payments.starGifts", gifts))) {
            unreachable();
        }
        return await Promise.all(gifts.gifts.map((v) => constructGift(v, __classPrivateFieldGet(this, _GiftManager_c, "f").getEntity)));
    }
    async getClaimedGifts(chatId, params) {
        __classPrivateFieldGet(this, _GiftManager_c, "f").storage.assertUser("getClaimedGifts");
        const offset = params?.offset ?? "";
        let limit = params?.limit ?? 100;
        if (limit > 100) {
            limit = 100;
        }
        if (limit < 1) {
            limit = 1;
        }
        const peer = await __classPrivateFieldGet(this, _GiftManager_c, "f").getInputPeer(chatId);
        const result = await __classPrivateFieldGet(this, _GiftManager_c, "f").invoke({ _: "payments.getSavedStarGifts", peer, offset, limit });
        return await constructClaimedGifts(result, __classPrivateFieldGet(this, _GiftManager_c, "f").getEntity);
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
            throw new InputError("Message not found.");
        }
        await __classPrivateFieldGet(this, _GiftManager_c, "f").invoke({ _: "payments.convertStarGift", stargift: { _: "inputSavedStarGiftUser", msg_id: message.id } });
    }
    async getGift(slug) {
        if (slug.length > 100) {
            throw new InputError("Slug too long.");
        }
        slug = slug.toLowerCase();
        if (!/^[a-z]+-[1-9][0-9]*$/.test(slug)) {
            throw new InputError("Invalid slug.");
        }
        const result = await __classPrivateFieldGet(this, _GiftManager_c, "f").invoke({ _: "payments.getUniqueStarGift", slug });
        return await constructGift(result.gift, __classPrivateFieldGet(this, _GiftManager_c, "f").getEntity.bind(this));
    }
}
_GiftManager_c = new WeakMap();
