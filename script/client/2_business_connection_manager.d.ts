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
import { Api } from "../2_tl.js";
import { Update } from "../3_types.js";
import { UpdateProcessor } from "./0_update_processor.js";
import { C } from "./1_types.js";
declare const businessConnectionManagerUpdates: readonly ["updateBotBusinessConnect"];
type BusinessConnectionManagerUpdate = Api.Types[(typeof businessConnectionManagerUpdates)[number]];
export declare class BusinessConnectionManager implements UpdateProcessor<BusinessConnectionManagerUpdate> {
    #private;
    constructor(c: C);
    getBusinessConnection(id: string): Promise<import("../3_types.js").BusinessConnection>;
    canHandleUpdate(update: Api.Update): update is BusinessConnectionManagerUpdate;
    handleUpdate(update: BusinessConnectionManagerUpdate): Promise<Update>;
}
export {};
//# sourceMappingURL=2_business_connection_manager.d.ts.map