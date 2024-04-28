/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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
import { Connection } from "../2_connection.js";
import { Transport } from "./0_transport.js";
export type DC = "1" | "2" | "3" | "4" | "5" | "1-test" | "2-test" | "3-test";
export declare function getDcIps(dc: DC, version: "ipv4" | "ipv6"): [string, ...string[]];
export interface TransportProviderParams {
    dc: DC;
    cdn: boolean;
}
export type TransportProvider = (params: TransportProviderParams) => {
    connection: Connection;
    transport: Transport;
    dcId: number;
};
export declare function getDcId(dc: DC, cdn: boolean): number;
//# sourceMappingURL=2_transport_provider.d.ts.map