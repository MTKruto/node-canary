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
exports.constructPreCheckoutQuery = constructPreCheckoutQuery;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _1_order_info_js_1 = require("./1_order_info.js");
const _1_user_js_1 = require("./1_user.js");
async function constructPreCheckoutQuery(query, getEntity) {
    const user = await getEntity({ _: "peerUser", user_id: query.user_id });
    if (!user) {
        (0, _0_deps_js_1.unreachable)();
    }
    const from = (0, _1_user_js_1.constructUser)(user);
    return (0, _1_utilities_js_1.cleanObject)({
        id: String(query.query_id),
        from,
        currency: query.currency,
        totalAmount: Number(query.total_amount),
        invoicePayload: (0, _1_utilities_js_1.decodeText)(query.payload),
        shippingOptionId: query.shipping_option_id,
        orderInfo: query.info ? (0, _1_order_info_js_1.constructOrderInfo)(query.info) : undefined,
    });
}
