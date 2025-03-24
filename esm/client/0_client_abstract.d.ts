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
import { Connection, ConnectionCallback } from "../2_connection.js";
import { DC } from "../3_transport.js";
import { Session } from "../4_session.js";
export declare abstract class ClientAbstract {
    abstract session: Session;
    get dc(): DC;
    get cdn(): boolean;
    set serverSalt(serverSalt: bigint);
    get connected(): boolean;
    connect(): Promise<void>;
    get disconnected(): boolean;
    disconnect(): void;
    set connectionCallback(connectionCallback: ConnectionCallback | undefined);
    set onConnectionStateChange(onConnectionStateChange: Connection["stateChangeHandler"]);
}
//# sourceMappingURL=0_client_abstract.d.ts.map