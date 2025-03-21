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
exports.transportProviderTcp = transportProviderTcp;
const _1_connection_tcp_node_js_1 = require("../connection/1_connection_tcp.node.js");
const _1_transport_abridged_js_1 = require("./1_transport_abridged.js");
const _2_transport_provider_js_1 = require("./2_transport_provider.js");
function transportProviderTcp(params) {
    return ({ dc, cdn }) => {
        const connection = new _1_connection_tcp_node_js_1.ConnectionTCP((0, _2_transport_provider_js_1.getDcIps)(dc, params?.ipv6 ? "ipv6" : "ipv4")[0], 80);
        const transport = new _1_transport_abridged_js_1.TransportAbridged(connection, params?.obfuscated);
        return { connection, transport, dcId: (0, _2_transport_provider_js_1.getDcId)(dc, cdn) };
    };
}
