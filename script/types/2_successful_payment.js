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
exports.constructSuccessfulPayment = constructSuccessfulPayment;
const _1_utilities_js_1 = require("../1_utilities.js");
const _1_order_info_js_1 = require("./1_order_info.js");
function constructSuccessfulPayment(action) {
    return (0, _1_utilities_js_1.cleanObject)({
        currency: action.currency,
        totalAmount: Number(action.total_amount),
        invoicePayload: new TextDecoder().decode(action.payload),
        telegramPaymentChargeId: action.charge.id,
        providerPaymentChargeId: action.charge.provider_charge_id,
        shippingOptionId: action.shipping_option_id,
        orderInfo: action.info ? (0, _1_order_info_js_1.constructOrderInfo)(action.info) : undefined,
    });
}
