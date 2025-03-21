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
exports.MSG_CONTAINER_CONSTRUCTOR = void 0;
exports.serializeMessage = serializeMessage;
exports.deserializeMessage = deserializeMessage;
exports.serializeMsgContainer = serializeMsgContainer;
exports.deserializeMsgContainer = deserializeMsgContainer;
const _1_tl_reader_js_1 = require("./1_tl_reader.js");
const _1_tl_writer_js_1 = require("./1_tl_writer.js");
async function serializeMessage(message) {
    let body;
    if (message.body instanceof Uint8Array) {
        body = message.body;
    }
    else {
        body = await serializeMsgContainer(message.body);
    }
    const writer = new _1_tl_writer_js_1.TLWriter()
        .writeInt64(message.msg_id)
        .writeInt32(message.seqno)
        .writeInt32(body.length)
        .write(body);
    return writer.buffer;
}
async function deserializeMessage(reader) {
    const id_ = reader.readInt64();
    const seqno = reader.readInt32();
    const length = reader.readInt32();
    reader = new _1_tl_reader_js_1.TLReader(reader.read(length));
    const reader2 = new _1_tl_reader_js_1.TLReader(reader.buffer);
    const id = reader2.readInt32(false);
    let body;
    {
        if (id == exports.MSG_CONTAINER_CONSTRUCTOR) {
            body = await deserializeMsgContainer(reader2.buffer);
        }
        else {
            body = reader.buffer;
        }
    }
    return { _: "message", msg_id: id_, seqno, body };
}
exports.MSG_CONTAINER_CONSTRUCTOR = 0x73F1F8DC;
async function serializeMsgContainer(msgContainer) {
    const writer = new _1_tl_writer_js_1.TLWriter();
    writer.writeInt32(exports.MSG_CONTAINER_CONSTRUCTOR, false);
    writer.writeInt32(msgContainer.messages.length);
    for (const message of msgContainer.messages) {
        writer.write(await serializeMessage(message));
    }
    return writer.buffer;
}
async function deserializeMsgContainer(buffer) {
    const reader = new _1_tl_reader_js_1.TLReader(buffer);
    const length = reader.readInt32();
    const messages = new Array();
    for (let i = 0; i < length; i++) {
        messages.push(await deserializeMessage(reader));
    }
    return { _: "msg_container", messages };
}
