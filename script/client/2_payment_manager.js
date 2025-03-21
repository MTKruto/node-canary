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
var _PaymentManager_c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentManager = void 0;
const _0_errors_js_1 = require("../0_errors.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_types_js_1 = require("../3_types.js");
const paymentManagerUpdates = [
    "updateBotPrecheckoutQuery",
];
class PaymentManager {
    constructor(c) {
        _PaymentManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _PaymentManager_c, c, "f");
    }
    canHandleUpdate(update) {
        return (0, _2_tl_js_1.isOneOf)(paymentManagerUpdates, update);
    }
    async handleUpdate(update) {
        if ((0, _2_tl_js_1.is)("updateBotPrecheckoutQuery", update)) {
            const preCheckoutQuery = await (0, _3_types_js_1.constructPreCheckoutQuery)(update, __classPrivateFieldGet(this, _PaymentManager_c, "f").getEntity);
            return { preCheckoutQuery };
        }
        return null;
    }
    async answerPreCheckoutQuery(preCheckoutQueryId, ok, params) {
        __classPrivateFieldGet(this, _PaymentManager_c, "f").storage.assertBot("answerPreCheckoutQuery");
        if (!ok && !params?.error) {
            throw new _0_errors_js_1.InputError("error is required when ok is false");
        }
        const queryId = BigInt(preCheckoutQueryId);
        if (!queryId) {
            throw new _0_errors_js_1.InputError("Invalid pre-checkout query ID");
        }
        await __classPrivateFieldGet(this, _PaymentManager_c, "f").invoke({ _: "messages.setBotPrecheckoutResults", query_id: queryId, error: params?.error, success: ok ? true : undefined });
    }
    async refundStarPayment(userId, telegramPaymentChargeId) {
        __classPrivateFieldGet(this, _PaymentManager_c, "f").storage.assertBot("refundStarPayment");
        await __classPrivateFieldGet(this, _PaymentManager_c, "f").invoke({ _: "payments.refundStarsCharge", user_id: await __classPrivateFieldGet(this, _PaymentManager_c, "f").getInputUser(userId), charge_id: telegramPaymentChargeId });
    }
}
exports.PaymentManager = PaymentManager;
_PaymentManager_c = new WeakMap();
