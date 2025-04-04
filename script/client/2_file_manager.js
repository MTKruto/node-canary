"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FileManager_instances, _a, _FileManager_c, _FileManager_Lupload, _FileManager_UPLOAD_MAX_CHUNK_SIZE, _FileManager_DOWNLOAD_MAX_CHUNK_SIZE, _FileManager_BIG_FILE_THRESHOLD, _FileManager_uploadStream, _FileManager_uploadBuffer, _FileManager_uploadPart, _FileManager_handleError, _FileManager_getFileContents, _FileManager_CUSTOM_EMOJI_TTL;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileManager = void 0;
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
const dntShim = __importStar(require("../_dnt.shims.js"));
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_transport_js_1 = require("../3_transport.js");
const _3_types_js_1 = require("../3_types.js");
const _4_constants_js_1 = require("../4_constants.js");
const _0_utilities_js_1 = require("./0_utilities.js");
class FileManager {
    constructor(c) {
        _FileManager_instances.add(this);
        _FileManager_c.set(this, void 0);
        _FileManager_Lupload.set(this, void 0);
        __classPrivateFieldSet(this, _FileManager_c, c, "f");
        const L = (0, _1_utilities_js_1.getLogger)("FileManager").client(c.id);
        __classPrivateFieldSet(this, _FileManager_Lupload, L.branch("upload"), "f");
    }
    async upload(file, params, checkName, allowStream = true) {
        let { size, name, contents } = await __classPrivateFieldGet(_a, _a, "m", _FileManager_getFileContents).call(_a, file, params, allowStream);
        if (checkName) {
            name = checkName(name);
        }
        if (size == 0 || size < -1) {
            throw new _0_errors_js_1.InputError("Invalid file size.");
        }
        const poolSize = await __classPrivateFieldGet(this, _FileManager_c, "f").getUploadPoolSize();
        const chunkSize = params?.chunkSize ?? __classPrivateFieldGet(_a, _a, "f", _FileManager_UPLOAD_MAX_CHUNK_SIZE);
        _a.validateChunkSize(chunkSize, __classPrivateFieldGet(_a, _a, "f", _FileManager_UPLOAD_MAX_CHUNK_SIZE));
        const fileId = (0, _1_utilities_js_1.getRandomId)();
        const isBig = contents instanceof Uint8Array ? contents.length > __classPrivateFieldGet(_a, _a, "f", _FileManager_BIG_FILE_THRESHOLD) : true;
        const whatIsUploaded = contents instanceof Uint8Array ? (isBig ? "big file" : "file") + " of size " + size : "stream";
        __classPrivateFieldGet(this, _FileManager_Lupload, "f").debug("uploading " + whatIsUploaded + " with chunk size of " + chunkSize + " and pool size of " + poolSize + " and file ID of " + fileId);
        let result;
        if (contents instanceof Uint8Array) {
            result = await __classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_uploadBuffer).call(this, contents, fileId, chunkSize, poolSize, params?.signal);
        }
        else {
            result = await __classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_uploadStream).call(this, contents, fileId, chunkSize, poolSize, params?.signal);
        }
        __classPrivateFieldGet(this, _FileManager_Lupload, "f").debug(`[${fileId}] uploaded ` + result.parts + " part(s)");
        if (result.small) {
            return { _: "inputFile", id: fileId, name, parts: result.parts, md5_checksum: "" };
        }
        else {
            return { _: "inputFileBig", id: fileId, name, parts: result.parts };
        }
    }
    async *downloadInner(location, dcId, params) {
        const signal = params?.signal;
        signal?.throwIfAborted();
        const id = "id" in location ? location.id : "photo_id" in location ? location.photo_id : null;
        if (id != null && __classPrivateFieldGet(this, _FileManager_c, "f").storage.supportsFiles) {
            const file = await __classPrivateFieldGet(this, _FileManager_c, "f").storage.getFile(id);
            const partOffset = file == null ? 0 : params?.offset ? Math.ceil(10 / file[1]) - 1 : 0;
            if (file != null && file[0] > 0) {
                yield* __classPrivateFieldGet(this, _FileManager_c, "f").storage.iterFileParts(id, file[0], partOffset, signal);
                return;
            }
        }
        const chunkSize = params?.chunkSize ?? __classPrivateFieldGet(_a, _a, "f", _FileManager_DOWNLOAD_MAX_CHUNK_SIZE);
        _a.validateChunkSize(chunkSize, __classPrivateFieldGet(_a, _a, "f", _FileManager_DOWNLOAD_MAX_CHUNK_SIZE));
        if (params?.offset !== undefined) {
            _a.validateOffset(params.offset);
        }
        const dc = (0, _3_transport_js_1.getDc)(dcId);
        signal?.throwIfAborted();
        const limit = chunkSize;
        let offset = params?.offset ? BigInt(params.offset) : 0n;
        let part = 0;
        let ms = 0.05;
        while (true) {
            signal?.throwIfAborted();
            let retryIn = 1;
            let errorCount = 0;
            try {
                const file = await __classPrivateFieldGet(this, _FileManager_c, "f").invoke({ _: "upload.getFile", location, offset, limit }, { dc, type: "download" });
                signal?.throwIfAborted();
                if (_2_tl_js_1.Api.is("upload.file", file)) {
                    yield file.bytes;
                    if (id != null) {
                        await __classPrivateFieldGet(this, _FileManager_c, "f").storage.saveFilePart(id, part, file.bytes);
                        signal?.throwIfAborted();
                    }
                    ++part;
                    if (file.bytes.length < limit) {
                        if (id != null) {
                            await __classPrivateFieldGet(this, _FileManager_c, "f").storage.setFilePartCount(id, part + 1, chunkSize);
                            signal?.throwIfAborted();
                        }
                        break;
                    }
                    else {
                        offset += BigInt(file.bytes.length);
                    }
                }
                else {
                    (0, _0_deps_js_1.unreachable)();
                }
                await (0, _0_deps_js_1.delay)(ms);
                ms = Math.max(ms * .8, 0.003);
            }
            catch (err) {
                if (typeof err === "object" && err instanceof _0_deps_js_1.AssertionError) {
                    throw err;
                }
                ++errorCount;
                if (errorCount > 20) {
                    retryIn = 0;
                    errorCount = 0;
                }
                await __classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_handleError).call(this, err, retryIn, `[${id}-${part + 1}]`);
                signal?.throwIfAborted();
                retryIn += 2;
                if (retryIn > 11) {
                    retryIn = 11;
                }
            }
        }
    }
    static validateChunkSize(chunkSize, max) {
        if (chunkSize <= 0) {
            throw new _0_errors_js_1.InputError("chunkSize must be bigger than zero.");
        }
        if (chunkSize % 1 != 0) {
            throw new _0_errors_js_1.InputError("chunkSize must be a whole number.");
        }
        if (chunkSize > max) {
            throw new _0_errors_js_1.InputError("chunkSize is too big.");
        }
        if ((0, _1_utilities_js_1.mod)(chunkSize, 1024) != 0) {
            throw new _0_errors_js_1.InputError("chunkSize must be divisible by 1024.");
        }
    }
    static validateOffset(offset) {
        if (offset < 0) {
            throw new _0_errors_js_1.InputError("offset must not be smaller than zero.");
        }
        if (offset % 1 != 0) {
            throw new _0_errors_js_1.InputError("offset must be a whole number.");
        }
        if ((0, _1_utilities_js_1.mod)(offset, 1024) != 0) {
            throw new _0_errors_js_1.InputError("offset must be divisible by 1024.");
        }
    }
    async *download(fileId, params) {
        const fileId_ = (0, _3_types_js_1.deserializeFileId)(fileId);
        if (fileId_.location.type == "photo") {
            switch (fileId_.type) {
                case _3_types_js_1.FileType.ProfilePhoto: {
                    if (fileId_.location.source.type != _3_types_js_1.PhotoSourceType.ChatPhotoBig && fileId_.location.source.type != _3_types_js_1.PhotoSourceType.ChatPhotoSmall) {
                        (0, _0_deps_js_1.unreachable)();
                    }
                    const big = fileId_.location.source.type == _3_types_js_1.PhotoSourceType.ChatPhotoBig;
                    const peer = await __classPrivateFieldGet(this, _FileManager_c, "f").getInputPeer(Number(fileId_.location.source.chatId));
                    const location = { _: "inputPeerPhotoFileLocation", big: big ? true : undefined, peer, photo_id: fileId_.location.id };
                    yield* this.downloadInner(location, fileId_.dcId, params);
                    break;
                }
                case _3_types_js_1.FileType.Photo: {
                    const location = {
                        _: "inputPhotoFileLocation",
                        id: fileId_.location.id,
                        access_hash: fileId_.location.accessHash,
                        file_reference: fileId_.fileReference ?? new Uint8Array(),
                        thumb_size: "thumbnailType" in fileId_.location.source ? String.fromCharCode(fileId_.location.source.thumbnailType) : "",
                    };
                    yield* this.downloadInner(location, fileId_.dcId, params);
                    break;
                }
                case _3_types_js_1.FileType.Thumbnail: {
                    const location = {
                        _: "inputDocumentFileLocation",
                        id: fileId_.location.id,
                        access_hash: fileId_.location.accessHash,
                        file_reference: fileId_.fileReference ?? new Uint8Array(),
                        thumb_size: "thumbnailType" in fileId_.location.source ? String.fromCharCode(fileId_.location.source.thumbnailType) : (0, _0_deps_js_1.unreachable)(),
                    };
                    yield* this.downloadInner(location, fileId_.dcId, params);
                    break;
                }
            }
        }
        else if (fileId_.location.type == "common") {
            const location = {
                _: "inputDocumentFileLocation",
                id: fileId_.location.id,
                access_hash: fileId_.location.accessHash,
                file_reference: fileId_.fileReference ?? new Uint8Array(),
                thumb_size: "",
            };
            yield* this.downloadInner(location, fileId_.dcId, params);
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    async getStickerSetName(inputStickerSet, hash = 0) {
        const maybeStickerSetName = await __classPrivateFieldGet(this, _FileManager_c, "f").messageStorage.getStickerSetName(inputStickerSet.id, inputStickerSet.access_hash);
        if (maybeStickerSetName != null && Date.now() - maybeStickerSetName[1].getTime() < _4_constants_js_1.STICKER_SET_NAME_TTL) {
            return maybeStickerSetName[0];
        }
        else {
            const stickerSet = await __classPrivateFieldGet(this, _FileManager_c, "f").invoke({ _: "messages.getStickerSet", stickerset: inputStickerSet, hash });
            const name = _2_tl_js_1.Api.as("messages.stickerSet", stickerSet).set.short_name;
            await __classPrivateFieldGet(this, _FileManager_c, "f").messageStorage.updateStickerSetName(inputStickerSet.id, inputStickerSet.access_hash, name);
            return name;
        }
    }
    async getCustomEmojiStickers(id) {
        id = Array.isArray(id) ? id : [id];
        if (!id.length) {
            return [];
        }
        const stickers = new Array();
        let shouldFetch = false;
        for (const id_ of id) {
            const maybeDocument = await __classPrivateFieldGet(this, _FileManager_c, "f").messageStorage.getCustomEmojiDocument(BigInt(id_));
            if (maybeDocument != null && Date.now() - maybeDocument[1].getTime() <= __classPrivateFieldGet(_a, _a, "f", _FileManager_CUSTOM_EMOJI_TTL)) {
                const document_ = maybeDocument[0];
                const fileId_ = {
                    type: _3_types_js_1.FileType.Document,
                    dcId: document_.dc_id,
                    fileReference: document_.file_reference,
                    location: { type: "common", id: document_.id, accessHash: document_.access_hash },
                };
                const fileUniqueId = (0, _3_types_js_1.toUniqueFileId)(fileId_);
                const fileId = (0, _3_types_js_1.serializeFileId)(fileId_);
                const sticker = await (0, _3_types_js_1.constructSticker)(document_, fileId, fileUniqueId, this.getStickerSetName.bind(this), id_);
                stickers.push(sticker);
            }
            else {
                shouldFetch = true;
                break;
            }
        }
        if (!shouldFetch) {
            return stickers;
        }
        const documents_ = (await __classPrivateFieldGet(this, _FileManager_c, "f").invoke({ _: "messages.getCustomEmojiDocuments", document_id: id.map(BigInt) })).map((v) => _2_tl_js_1.Api.as("document", v));
        for (const [i, document_] of documents_.entries()) {
            await __classPrivateFieldGet(this, _FileManager_c, "f").messageStorage.setCustomEmojiDocument(document_.id, document_);
            const fileId_ = {
                type: _3_types_js_1.FileType.Document,
                dcId: document_.dc_id,
                fileReference: document_.file_reference,
                location: { type: "common", id: document_.id, accessHash: document_.access_hash },
            };
            const fileUniqueId = (0, _3_types_js_1.toUniqueFileId)(fileId_);
            const fileId = (0, _3_types_js_1.serializeFileId)(fileId_);
            const sticker = await (0, _3_types_js_1.constructSticker)(document_, fileId, fileUniqueId, this.getStickerSetName.bind(this), id[i]);
            stickers.push(sticker);
        }
        return stickers;
    }
}
exports.FileManager = FileManager;
_a = FileManager, _FileManager_c = new WeakMap(), _FileManager_Lupload = new WeakMap(), _FileManager_instances = new WeakSet(), _FileManager_uploadStream = async function _FileManager_uploadStream(stream, fileId, chunkSize, poolSize, signal) {
    let part;
    let promises = new Array();
    let ms = 0.05;
    for await (part of (0, _1_utilities_js_1.iterateReadableStream)(stream.pipeThrough(new _1_utilities_js_1.PartStream(chunkSize)))) {
        if (!part.small && part.part > 0) {
            await (0, _0_deps_js_1.delay)(ms);
            ms = Math.max(ms * .8, 0.003);
        }
        promises.push(__classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_uploadPart).call(this, fileId, part.totalParts, !part.small, part.part, part.bytes, signal));
        if (promises.length == poolSize * _0_utilities_js_1.UPLOAD_REQUEST_PER_CONNECTION) {
            await Promise.all(promises);
            promises = [];
        }
    }
    await Promise.all(promises);
    return { small: part.small, parts: part.totalParts };
}, _FileManager_uploadBuffer = async function _FileManager_uploadBuffer(buffer, fileId, chunkSize, poolSize, signal) {
    const isBig = buffer.byteLength > __classPrivateFieldGet(_a, _a, "f", _FileManager_BIG_FILE_THRESHOLD);
    const partCount = Math.ceil(buffer.byteLength / chunkSize);
    let promises = new Array();
    let started = false;
    let ms = 0.05;
    main: for (let part = 0; part < partCount;) {
        for (let i = 0; i < poolSize; ++i) {
            for (let i = 0; i < _0_utilities_js_1.UPLOAD_REQUEST_PER_CONNECTION; ++i) {
                const start = part * chunkSize;
                const end = start + chunkSize;
                const bytes = buffer.subarray(start, end);
                if (!bytes.length) {
                    break main;
                }
                if (!started) {
                    started = true;
                }
                else if (isBig && part > 0) {
                    await (0, _0_deps_js_1.delay)(ms);
                    ms = Math.max(ms * .8, 0.003);
                }
                promises.push(__classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_uploadPart).call(this, fileId, partCount, isBig, part++, bytes, signal));
                if (promises.length == poolSize * _0_utilities_js_1.UPLOAD_REQUEST_PER_CONNECTION) {
                    await Promise.all(promises);
                    promises = [];
                }
            }
        }
        await Promise.all(promises);
        promises = [];
    }
    await Promise.all(promises);
    return { small: !isBig, parts: partCount };
}, _FileManager_uploadPart = async function _FileManager_uploadPart(fileId, partCount, isBig, index, bytes, signal) {
    let retryIn = 1;
    let errorCount = 0;
    while (true) {
        try {
            signal?.throwIfAborted();
            __classPrivateFieldGet(this, _FileManager_Lupload, "f").debug(`[${fileId}] uploading part ` + (index + 1));
            if (isBig) {
                await __classPrivateFieldGet(this, _FileManager_c, "f").invoke({ _: "upload.saveBigFilePart", file_id: fileId, file_part: index, bytes: bytes, file_total_parts: partCount }, { type: "upload" });
            }
            else {
                await __classPrivateFieldGet(this, _FileManager_c, "f").invoke({ _: "upload.saveFilePart", file_id: fileId, bytes: bytes, file_part: index }, { type: "upload" });
            }
            __classPrivateFieldGet(this, _FileManager_Lupload, "f").debug(`[${fileId}] uploaded part ` + (index + 1));
            break;
        }
        catch (err) {
            signal?.throwIfAborted();
            __classPrivateFieldGet(this, _FileManager_Lupload, "f").debug(`[${fileId}] failed to upload part ` + (index + 1));
            ++errorCount;
            if (errorCount > 20) {
                retryIn = 0;
                errorCount = 20;
            }
            await __classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_handleError).call(this, err, retryIn, `[${fileId}-${index + 1}]`);
            retryIn += 2;
            if (retryIn > 11) {
                retryIn = 11;
            }
        }
    }
}, _FileManager_handleError = async function _FileManager_handleError(err, retryIn, logPrefix) {
    if (retryIn > 0) {
        __classPrivateFieldGet(this, _FileManager_Lupload, "f").warning(`${logPrefix} retrying in ${retryIn} seconds`);
        await (0, _0_deps_js_1.delay)(retryIn * _0_deps_js_1.SECOND);
    }
    else {
        throw err;
    }
}, _FileManager_getFileContents = async function _FileManager_getFileContents(source, params, allowStream) {
    let name = params?.fileName?.trim() || "file";
    let contents;
    let size = -1;
    if (source instanceof Uint8Array) {
        contents = source;
        size = source.byteLength;
    }
    else if (source instanceof ReadableStream) {
        if (!allowStream) {
            throw new _0_errors_js_1.InputError("Streamed upload not allowed.");
        }
        contents = source;
    }
    else if (typeof source === "object" && source != null && (Symbol.iterator in source || Symbol.asyncIterator in source)) {
        if (!allowStream) {
            throw new _0_errors_js_1.InputError("Streamed upload not allowed.");
        }
        contents = new ReadableStream({
            pull: Symbol.asyncIterator in source
                ? async (controller) => {
                    const { value, done } = await source.next();
                    done ? controller.close() : controller.enqueue(value);
                }
                : (controller) => {
                    const { value, done } = source.next();
                    done ? controller.close() : controller.enqueue(value);
                },
        });
    }
    else {
        let url;
        try {
            url = new URL(source).toString();
        }
        catch {
            let path_;
            if (typeof source === "string") {
                if ((0, _0_deps_js_1.isAbsolute)(source)) {
                    path_ = source;
                }
                else {
                    // @ts-ignore: lib
                    path_ = join(dntShim.Deno.cwd(), source);
                }
                url = (0, _0_deps_js_1.toFileUrl)(path_).toString();
                name = (0, _0_deps_js_1.basename)(path_);
            }
            else {
                (0, _0_deps_js_1.unreachable)();
            }
        }
        const response = await fetch(url);
        if (response.body == null) {
            throw new _0_errors_js_1.InputError("Invalid response");
        }
        if (name == "file") {
            const contentType = response.headers.get("content-type")?.split(";")[0].trim();
            if (contentType) {
                name += (0, _0_deps_js_1.extension)(contentType);
            }
            else {
                const maybeFileName = new URL(response.url).pathname.split("/")
                    .filter((v) => v)
                    .slice(-1)[0]
                    .trim();
                if (maybeFileName) {
                    name += (0, _0_deps_js_1.extension)((0, _0_deps_js_1.extname)(maybeFileName));
                }
            }
        }
        const contentLength = Number(response.headers.get("content-length"));
        if (!isNaN(contentLength)) {
            size = contentLength;
        }
        if (allowStream) {
            contents = response.body;
        }
        else {
            contents = new Uint8Array(await response.arrayBuffer());
        }
    }
    return { size: params?.fileSize ? params.fileSize : size, name, contents };
};
_FileManager_UPLOAD_MAX_CHUNK_SIZE = { value: 512 * _1_utilities_js_1.kilobyte };
_FileManager_DOWNLOAD_MAX_CHUNK_SIZE = { value: 1 * _1_utilities_js_1.megabyte };
_FileManager_BIG_FILE_THRESHOLD = { value: 10 * _1_utilities_js_1.megabyte };
_FileManager_CUSTOM_EMOJI_TTL = { value: 30 * _0_deps_js_1.MINUTE };
