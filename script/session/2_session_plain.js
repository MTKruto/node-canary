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
exports.SessionPlain = void 0;
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _1_tl_reader_js_1 = require("../tl/1_tl_reader.js");
const _1_tl_writer_js_1 = require("../tl/1_tl_writer.js");
const _1_session_js_1 = require("./1_session.js");
class SessionPlain extends _1_session_js_1.Session {
    async send(data) {
        if (!this.connected) {
            throw new _0_errors_js_1.ConnectionError("Not connected.");
        }
        const messageId = this.state.nextMessageId();
        const writer = new _1_tl_writer_js_1.TLWriter();
        writer.writeInt64(0n); // auth key ID
        writer.writeInt64(messageId);
        writer.writeInt32(data.length);
        writer.write(data);
        const payload = writer.buffer;
        await this.transport.transport.send(payload);
        return messageId;
    }
    async receive() {
        if (!this.connected) {
            throw new _0_errors_js_1.ConnectionError("Not connected.");
        }
        const buffer = await this.transport.transport.receive();
        if (buffer.length == 4) {
            const int = (0, _1_utilities_js_1.bigIntFromBuffer)(buffer, true, true);
            throw new _0_errors_js_1.TransportError(Number(int));
        }
        const reader = new _1_tl_reader_js_1.TLReader(buffer);
        const _authKeyId = reader.readInt64();
        const _messageId = reader.readInt64();
        const dataLength = reader.readInt32();
        const data = reader.read(dataLength);
        return data;
    }
}
exports.SessionPlain = SessionPlain;
