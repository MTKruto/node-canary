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
import { MaybePromise } from "../1_utilities.js";
import { DC, TransportProvider } from "../3_transport.js";
export interface ClientAbstractParams {
    /**
     * The first DC to connect to. This is commonly used to decide whether to connect to test or production servers. It is not necessarily the DC that the client will directly connect to or is currently connected to. Defaults to the default initial DC.
     */
    initialDc?: DC;
    /**
     * The transport provider to use. Defaults to `webSocketTransportProvider` with its default options.
     */
    transportProvider?: TransportProvider;
    /**
     * Whether the connection is with a CDN server. Defaults to false.
     */
    cdn?: boolean;
}
export declare abstract class ClientAbstract {
    #private;
    readonly initialDc: DC;
    transportProvider: TransportProvider;
    readonly cdn: boolean;
    protected transport?: ReturnType<TransportProvider>;
    constructor(params?: ClientAbstractParams);
    stateChangeHandler?: (connected: boolean) => void;
    get dc(): DC;
    get dcId(): number;
    setDc(dc: DC): MaybePromise<void>;
    get connected(): boolean;
    connect(): Promise<void>;
    reconnect(dc?: DC): Promise<void>;
    disconnect(): Promise<void>;
    get disconnected(): boolean;
}
//# sourceMappingURL=0_client_abstract.d.ts.map