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
var _FileManager_instances, _a, _FileManager_c, _FileManager_Lupload, _FileManager_UPLOAD_MAX_CHUNK_SIZE, _FileManager_DOWNLOAD_MAX_CHUNK_SIZE, _FileManager_BIG_FILE_THRESHOLD, _FileManager_UPLOAD_REQUEST_PER_CONNECTION, _FileManager_uploadStream, _FileManager_uploadBuffer, _FileManager_handleUploadError, _FileManager_getFileContents, _FileManager_downloadInner, _FileManager_CUSTOM_EMOJI_TTL;
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
import * as dntShim from "../_dnt.shims.js";
import { assert, extension, path, unreachable } from "../0_deps.js";
import { InputError } from "../0_errors.js";
import { drop, getLogger, getRandomId, iterateReadableStream, kilobyte, megabyte, minute, mod, PartStream } from "../1_utilities.js";
import { as, types } from "../2_tl.js";
import { constructSticker, deserializeFileId, FileType, PhotoSourceType, serializeFileId, toUniqueFileId } from "../3_types.js";
import { STICKER_SET_NAME_TTL } from "../4_constants.js";
import { FloodWait } from "../4_errors.js";
export class FileManager {
    constructor(c) {
        _FileManager_instances.add(this);
        _FileManager_c.set(this, void 0);
        _FileManager_Lupload.set(this, void 0);
        __classPrivateFieldSet(this, _FileManager_c, c, "f");
        const L = getLogger("FileManager").client(c.id);
        __classPrivateFieldSet(this, _FileManager_Lupload, L.branch("upload"), "f");
    }
    async upload(file, params, checkName, allowStream = true) {
        let { size, name, contents } = await __classPrivateFieldGet(_a, _a, "m", _FileManager_getFileContents).call(_a, file, params, allowStream);
        if (checkName) {
            name = checkName(name);
        }
        if (size == 0 || size < -1) {
            throw new InputError("Invalid file size.");
        }
        const chunkSize = params?.chunkSize ?? __classPrivateFieldGet(_a, _a, "f", _FileManager_UPLOAD_MAX_CHUNK_SIZE);
        _a.validateChunkSize(chunkSize, __classPrivateFieldGet(_a, _a, "f", _FileManager_UPLOAD_MAX_CHUNK_SIZE));
        const fileId = getRandomId();
        const isBig = contents instanceof Uint8Array ? contents.length > __classPrivateFieldGet(_a, _a, "f", _FileManager_BIG_FILE_THRESHOLD) : true;
        const poolSize = contents instanceof Uint8Array ? isBig ? 3 : 1 : 3;
        const pool = __classPrivateFieldGet(this, _FileManager_c, "f").getCdnConnectionPool(poolSize);
        const whatIsUploaded = contents instanceof Uint8Array ? (isBig ? "big file" : "file") + " of size " + size : "stream";
        __classPrivateFieldGet(this, _FileManager_Lupload, "f").debug("uploading " + whatIsUploaded + " with chunk size of " + chunkSize + " and pool size of " + poolSize + " and file ID of " + fileId);
        params?.signal?.addEventListener("abort", () => drop(pool.disconnect()));
        await pool.connect();
        let result;
        try {
            if (contents instanceof Uint8Array) {
                result = await __classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_uploadBuffer).call(this, contents, fileId, chunkSize, params?.signal, pool);
            }
            else {
                result = await __classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_uploadStream).call(this, contents, fileId, chunkSize, params?.signal, pool);
            }
        }
        finally {
            drop(pool.disconnect());
        }
        __classPrivateFieldGet(this, _FileManager_Lupload, "f").debug(`[${fileId}] uploaded ` + result.parts + " part(s)");
        if (result.small) {
            return new types.InputFile({ id: fileId, name, parts: result.parts, md5_checksum: "" });
        }
        else {
            return new types.InputFileBig({ id: fileId, parts: result.parts, name });
        }
    }
    static validateChunkSize(chunkSize, max) {
        if (chunkSize <= 0) {
            throw new InputError("chunkSize must be bigger than zero.");
        }
        if (chunkSize % 1 != 0) {
            throw new InputError("chunkSize must be a whole number.");
        }
        if (chunkSize > max) {
            throw new InputError("chunkSize is too big.");
        }
        if (mod(chunkSize, 1024) != 0) {
            throw new InputError("chunkSize must be divisible by 1024.");
        }
    }
    async *download(fileId, params) {
        const fileId_ = deserializeFileId(fileId);
        if (fileId_.location.type == "photo") {
            switch (fileId_.type) {
                case FileType.ProfilePhoto: {
                    if (fileId_.location.source.type != PhotoSourceType.ChatPhotoBig && fileId_.location.source.type != PhotoSourceType.ChatPhotoSmall) {
                        unreachable();
                    }
                    const big = fileId_.location.source.type == PhotoSourceType.ChatPhotoBig;
                    const peer = await __classPrivateFieldGet(this, _FileManager_c, "f").getInputPeer(Number(fileId_.location.source.chatId)); // TODO: use access hash from source?
                    const location = new types.InputPeerPhotoFileLocation({ big: big ? true : undefined, peer, photo_id: fileId_.location.id });
                    yield* __classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_downloadInner).call(this, location, fileId_.dcId, params);
                    break;
                }
                case FileType.Photo: {
                    const location = new types.InputPhotoFileLocation({
                        id: fileId_.location.id,
                        access_hash: fileId_.location.accessHash,
                        file_reference: fileId_.fileReference ?? new Uint8Array(),
                        thumb_size: "thumbnailType" in fileId_.location.source ? String.fromCharCode(fileId_.location.source.thumbnailType) : "",
                    });
                    yield* __classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_downloadInner).call(this, location, fileId_.dcId, params);
                    break;
                }
                case FileType.Thumbnail: {
                    const location = new types.InputDocumentFileLocation({
                        id: fileId_.location.id,
                        access_hash: fileId_.location.accessHash,
                        file_reference: fileId_.fileReference ?? new Uint8Array(),
                        thumb_size: "thumbnailType" in fileId_.location.source ? String.fromCharCode(fileId_.location.source.thumbnailType) : unreachable(),
                    });
                    yield* __classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_downloadInner).call(this, location, fileId_.dcId, params);
                    break;
                }
            }
        }
        else if (fileId_.location.type == "common") {
            const location = new types.InputDocumentFileLocation({
                id: fileId_.location.id,
                access_hash: fileId_.location.accessHash,
                file_reference: fileId_.fileReference ?? new Uint8Array(),
                thumb_size: "",
            });
            yield* __classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_downloadInner).call(this, location, fileId_.dcId, params);
        }
        else {
            unreachable();
        }
    }
    async getStickerSetName(inputStickerSet, hash = 0) {
        const maybeStickerSetName = await __classPrivateFieldGet(this, _FileManager_c, "f").messageStorage.getStickerSetName(inputStickerSet.id, inputStickerSet.access_hash);
        if (maybeStickerSetName != null && Date.now() - maybeStickerSetName[1].getTime() < STICKER_SET_NAME_TTL) {
            return maybeStickerSetName[0];
        }
        else {
            const stickerSet = await __classPrivateFieldGet(this, _FileManager_c, "f").api.messages.getStickerSet({ stickerset: inputStickerSet, hash });
            const name = stickerSet[as](types.messages.StickerSet).set.short_name;
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
                    type: FileType.Document,
                    dcId: document_.dc_id,
                    fileReference: document_.file_reference,
                    location: { type: "common", id: document_.id, accessHash: document_.access_hash },
                };
                const fileUniqueId = toUniqueFileId(fileId_);
                const fileId = serializeFileId(fileId_);
                const sticker = await constructSticker(document_, fileId, fileUniqueId, this.getStickerSetName.bind(this), id_);
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
        const documents_ = await __classPrivateFieldGet(this, _FileManager_c, "f").api.messages.getCustomEmojiDocuments({ document_id: id.map(BigInt) }).then((v) => v.map((v) => v[as](types.Document)));
        for (const [i, document_] of documents_.entries()) {
            await __classPrivateFieldGet(this, _FileManager_c, "f").messageStorage.setCustomEmojiDocument(document_.id, document_);
            const fileId_ = {
                type: FileType.Document,
                dcId: document_.dc_id,
                fileReference: document_.file_reference,
                location: { type: "common", id: document_.id, accessHash: document_.access_hash },
            };
            const fileUniqueId = toUniqueFileId(fileId_);
            const fileId = serializeFileId(fileId_);
            const sticker = await constructSticker(document_, fileId, fileUniqueId, this.getStickerSetName.bind(this), id[i]);
            stickers.push(sticker);
        }
        return stickers;
    }
}
_a = FileManager, _FileManager_c = new WeakMap(), _FileManager_Lupload = new WeakMap(), _FileManager_instances = new WeakSet(), _FileManager_uploadStream = async function _FileManager_uploadStream(stream, fileId, chunkSize, signal, pool) {
    let part;
    let promises = new Array();
    let api = pool.api();
    let apiPromiseCount = 0;
    for await (part of iterateReadableStream(stream.pipeThrough(new PartStream(chunkSize)))) {
        promises.push(Promise.resolve().then(async () => {
            while (true) {
                try {
                    if (part.small) {
                        await api.upload.saveFilePart({ file_id: fileId, bytes: part.bytes, file_part: part.part });
                    }
                    else {
                        await api.upload.saveBigFilePart({ file_id: fileId, file_part: part.part, bytes: part.bytes, file_total_parts: part.totalParts });
                    }
                    __classPrivateFieldGet(this, _FileManager_Lupload, "f").debug(`[${fileId}] uploaded part ` + (part.part + 1));
                    break;
                }
                catch (err) {
                    signal?.throwIfAborted();
                    __classPrivateFieldGet(this, _FileManager_Lupload, "f").debug(`[${fileId}] failed to upload part ` + (part.part + 1));
                    await __classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_handleUploadError).call(this, err);
                }
            }
        }));
        if (++apiPromiseCount >= __classPrivateFieldGet(_a, _a, "f", _FileManager_UPLOAD_REQUEST_PER_CONNECTION)) {
            api = pool.api();
            apiPromiseCount = 0;
        }
        if (promises.length == pool.size * __classPrivateFieldGet(_a, _a, "f", _FileManager_UPLOAD_REQUEST_PER_CONNECTION)) {
            await Promise.all(promises);
            promises = [];
        }
    }
    await Promise.all(promises);
    return { small: part.small, parts: part.totalParts };
}, _FileManager_uploadBuffer = async function _FileManager_uploadBuffer(buffer, fileId, chunkSize, signal, pool) {
    const isBig = buffer.byteLength > __classPrivateFieldGet(_a, _a, "f", _FileManager_BIG_FILE_THRESHOLD);
    const partCount = Math.ceil(buffer.byteLength / chunkSize);
    let promises = new Array();
    for (let part = 0; part < partCount;) {
        for (let i = 0; i < pool.size; ++i) {
            const api = pool.api();
            for (let i = 0; i < __classPrivateFieldGet(_a, _a, "f", _FileManager_UPLOAD_REQUEST_PER_CONNECTION); ++i) {
                const start = part * chunkSize;
                const end = start + chunkSize;
                const bytes = buffer.subarray(start, end);
                assert(bytes.length != 0);
                const thisPart = part++; // `thisPart` must be used instead of `part` in the promise body
                promises.push(Promise.resolve().then(async () => {
                    while (true) {
                        try {
                            signal?.throwIfAborted();
                            if (isBig) {
                                await api.upload.saveBigFilePart({ file_id: fileId, file_part: thisPart, bytes, file_total_parts: partCount });
                            }
                            else {
                                await api.upload.saveFilePart({ file_id: fileId, bytes, file_part: thisPart });
                            }
                            __classPrivateFieldGet(this, _FileManager_Lupload, "f").debug(`[${fileId}] uploaded part ` + (thisPart + 1) + " / " + partCount);
                            break;
                        }
                        catch (err) {
                            signal?.throwIfAborted();
                            __classPrivateFieldGet(this, _FileManager_Lupload, "f").debug(`[${fileId}] failed to upload part ` + (thisPart + 1) + " / " + partCount);
                            await __classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_handleUploadError).call(this, err);
                        }
                    }
                }));
            }
        }
        await Promise.all(promises);
        promises = [];
    }
    await Promise.all(promises);
    return { small: !isBig, parts: partCount };
}, _FileManager_handleUploadError = async function _FileManager_handleUploadError(err) {
    if (err instanceof FloodWait) {
        __classPrivateFieldGet(this, _FileManager_Lupload, "f").warning("got a flood wait of " + err.seconds + " seconds");
        await new Promise((r) => setTimeout(r, err.seconds * 1000));
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
            throw new InputError("Streamed upload not allowed.");
        }
        contents = source;
    }
    else if (typeof source === "object" && source != null && (Symbol.iterator in source || Symbol.asyncIterator in source)) {
        if (!allowStream) {
            throw new InputError("Streamed upload not allowed.");
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
                if (path.isAbsolute(source)) {
                    path_ = source;
                }
                else {
                    // @ts-ignore: lib
                    path_ = path.join(dntShim.Deno.cwd(), source);
                }
                url = path.toFileUrl(path_).toString();
                name = path.basename(path_);
            }
            else {
                unreachable();
            }
        }
        const response = await fetch(url);
        if (response.body == null) {
            throw new InputError("Invalid response");
        }
        if (name == "file") {
            const contentType = response.headers.get("content-type")?.split(";")[0].trim();
            if (contentType) {
                name += extension(contentType);
            }
            else {
                const maybeFileName = new URL(response.url).pathname.split("/")
                    .filter((v) => v)
                    .slice(-1)[0]
                    .trim();
                if (maybeFileName) {
                    name += extension(path.extname(maybeFileName));
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
}, _FileManager_downloadInner = async function* _FileManager_downloadInner(location, dcId, params) {
    const id = "id" in location ? location.id : "photo_id" in location ? location.photo_id : null;
    if (id != null && __classPrivateFieldGet(this, _FileManager_c, "f").storage.supportsFiles) {
        const file = await __classPrivateFieldGet(this, _FileManager_c, "f").storage.getFile(id);
        const partOffset = file == null ? 0 : params?.offset ? Math.ceil(10 / file[1]) - 1 : 0;
        if (file != null && file[0] > 0) {
            yield* __classPrivateFieldGet(this, _FileManager_c, "f").storage.iterFileParts(id, file[0], partOffset);
            return;
        }
    }
    const chunkSize = params?.chunkSize ?? __classPrivateFieldGet(_a, _a, "f", _FileManager_DOWNLOAD_MAX_CHUNK_SIZE);
    _a.validateChunkSize(chunkSize, __classPrivateFieldGet(_a, _a, "f", _FileManager_DOWNLOAD_MAX_CHUNK_SIZE));
    const connection = __classPrivateFieldGet(this, _FileManager_c, "f").getCdnConnection(dcId);
    await connection.connect();
    const limit = chunkSize;
    let offset = params?.offset ? BigInt(params.offset) : 0n;
    let part = 0;
    try {
        while (true) {
            const file = await connection.api.upload.getFile({ location, offset, limit });
            if (file instanceof types.upload.File) {
                yield file.bytes;
                if (id != null) {
                    await __classPrivateFieldGet(this, _FileManager_c, "f").storage.saveFilePart(id, part, file.bytes);
                }
                ++part;
                if (file.bytes.length < limit) {
                    if (id != null) {
                        await __classPrivateFieldGet(this, _FileManager_c, "f").storage.setFilePartCount(id, part + 1, chunkSize);
                    }
                    break;
                }
                else {
                    offset += BigInt(file.bytes.length);
                }
            }
            else {
                unreachable();
            }
        }
    }
    finally {
        drop(connection.disconnect());
    }
};
_FileManager_UPLOAD_MAX_CHUNK_SIZE = { value: 512 * kilobyte };
_FileManager_DOWNLOAD_MAX_CHUNK_SIZE = { value: 1 * megabyte };
_FileManager_BIG_FILE_THRESHOLD = { value: 10 * megabyte };
_FileManager_UPLOAD_REQUEST_PER_CONNECTION = { value: 2 };
_FileManager_CUSTOM_EMOJI_TTL = { value: 30 * minute };
