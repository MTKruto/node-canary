"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptMessage = exports.encryptMessage = exports.unpackUnencryptedMessage = exports.packUnencryptedMessage = exports.getMessageId = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
function getMessageId(lastMsgId) {
    const now = (0, _1_utilities_js_1.toUnixTimestamp)(new Date()) + 0;
    const nanoseconds = Math.floor((now - Math.floor(now)) * 1e9);
    let newMsgId = (BigInt(Math.floor(now)) <<
        32n) ||
        (BigInt(nanoseconds) << 2n);
    if (lastMsgId >= newMsgId) {
        newMsgId = lastMsgId + 4n;
    }
    return newMsgId;
}
exports.getMessageId = getMessageId;
function packUnencryptedMessage(data, messageId) {
    const writer = new _2_tl_js_1.TLWriter();
    writer.writeInt64(0n); // auth key
    writer.writeInt64(messageId);
    writer.writeInt32(data.length);
    writer.write(data);
    return writer.buffer;
}
exports.packUnencryptedMessage = packUnencryptedMessage;
function unpackUnencryptedMessage(buffer) {
    const reader = new _2_tl_js_1.TLReader(buffer);
    const _authKeyId = reader.readInt64();
    const messageId = reader.readInt64();
    const messageLength = reader.readInt32();
    const message = reader.read(messageLength);
    return { messageId, message };
}
exports.unpackUnencryptedMessage = unpackUnencryptedMessage;
async function encryptMessage(message, authKey, authKeyId, salt, sessionId) {
    const payloadWriter = new _2_tl_js_1.TLWriter();
    payloadWriter.writeInt64(salt);
    payloadWriter.writeInt64(sessionId);
    payloadWriter.write(message[_2_tl_js_1.serialize]());
    payloadWriter.write(new Uint8Array((0, _1_utilities_js_1.mod)(-(payloadWriter.buffer.length + 12), 16) + 12));
    const payload = payloadWriter.buffer;
    const messageKey = (await (0, _1_utilities_js_1.sha256)((0, _1_utilities_js_1.concat)(authKey.subarray(88, 120), payload))).subarray(8, 24);
    const a = await (0, _1_utilities_js_1.sha256)((0, _1_utilities_js_1.concat)(messageKey, authKey.subarray(0, 36)));
    const b = await (0, _1_utilities_js_1.sha256)((0, _1_utilities_js_1.concat)(authKey.subarray(40, 76), messageKey));
    const aesKey = (0, _1_utilities_js_1.concat)(a.subarray(0, 8), b.subarray(8, 24), a.subarray(24, 32));
    const aesIV = (0, _1_utilities_js_1.concat)(b.subarray(0, 8), a.subarray(8, 24), b.subarray(24, 32));
    const messageWriter = new _2_tl_js_1.TLWriter();
    messageWriter.writeInt64(authKeyId);
    messageWriter.write(messageKey);
    messageWriter.write((0, _0_deps_js_1.ige256Encrypt)(payload, aesKey, aesIV));
    return messageWriter.buffer;
}
exports.encryptMessage = encryptMessage;
async function decryptMessage(buffer, authKey, authKeyId, _sessionId) {
    const reader = new _2_tl_js_1.TLReader(buffer);
    (0, _0_deps_js_1.assertEquals)(reader.readInt64(false), authKeyId);
    const messageKey_ = reader.readInt128();
    const messageKey = (0, _1_utilities_js_1.bufferFromBigInt)(messageKey_, 16, true, true);
    const a = await (0, _1_utilities_js_1.sha256)((0, _1_utilities_js_1.concat)(messageKey, authKey.subarray(8, 44)));
    const b = await (0, _1_utilities_js_1.sha256)((0, _1_utilities_js_1.concat)(authKey.subarray(48, 84), messageKey));
    const aesKey = (0, _1_utilities_js_1.concat)(a.subarray(0, 8), b.subarray(8, 24), a.subarray(24, 32));
    const aesIv = (0, _1_utilities_js_1.concat)(b.subarray(0, 8), a.subarray(8, 24), b.subarray(24, 32));
    const plaintext = (0, _0_deps_js_1.ige256Decrypt)(reader.buffer, aesKey, aesIv);
    (0, _0_deps_js_1.assertEquals)(plaintext.buffer.byteLength % 4, 0);
    let plainReader = new _2_tl_js_1.TLReader(plaintext);
    const _salt = plainReader.readInt64();
    const _sessionId_ = plainReader.readInt64(false);
    const mid = plainReader.readInt64();
    const seqno = plainReader.readInt32();
    const length = plainReader.readInt32();
    plainReader = new _2_tl_js_1.TLReader(plainReader.read(length));
    const cid = plainReader.readInt32(false);
    if (cid == _2_tl_js_1.MessageContainer[_2_tl_js_1.id]) {
        const messages = _2_tl_js_1.MessageContainer.deserialize(plainReader.buffer);
        return new _2_tl_js_1.MessageContainer(mid, seqno, messages);
    }
    else if (cid == _2_tl_js_1.RPCResult[_2_tl_js_1.id]) {
        const body = _2_tl_js_1.RPCResult.deserialize(plainReader.buffer);
        return new _2_tl_js_1.Message_(mid, seqno, body);
    }
    else {
        const body = plainReader.readObject(cid);
        return new _2_tl_js_1.Message_(mid, seqno, body);
    }
}
exports.decryptMessage = decryptMessage;
