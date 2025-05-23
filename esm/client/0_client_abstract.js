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
export class ClientAbstract {
    get dc() {
        return this.session.dc;
    }
    get cdn() {
        return this.session.cdn;
    }
    set serverSalt(serverSalt) {
        this.session.serverSalt = serverSalt;
    }
    get connected() {
        return this.session.connected;
    }
    async connect() {
        await this.session.connect();
    }
    get disconnected() {
        return this.session.disconnected;
    }
    disconnect() {
        this.session.disconnect();
    }
    set connectionCallback(connectionCallback) {
        this.session.connectionCallback = connectionCallback;
    }
    set onConnectionStateChange(onConnectionStateChange) {
        this.session.onConnectionStateChange = onConnectionStateChange;
    }
}
