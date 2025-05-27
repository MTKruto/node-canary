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
import { cleanObject, decodeText } from "../1_utilities.js";
import { constructOrderInfo } from "./1_order_info.js";
import { constructUser } from "./1_user.js";
export async function constructPreCheckoutQuery(query, getEntity) {
    const user = await getEntity({ _: "peerUser", user_id: query.user_id });
    if (!user) {
        unreachable();
    }
    const from = constructUser(user);
    return cleanObject({
        id: String(query.query_id),
        from,
        currency: query.currency,
        totalAmount: Number(query.total_amount),
        invoicePayload: decodeText(query.payload),
        shippingOptionId: query.shipping_option_id,
        orderInfo: query.info ? constructOrderInfo(query.info) : undefined,
    });
}
