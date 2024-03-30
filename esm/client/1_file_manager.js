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
var _FileManager_instances, _FileManager_c, _FileManager_Lupload, _FileManager_downloadInner;
import { ConnectionError, InputError } from "../0_errors.js";
import { drop, getLogger, getRandomId, mod, UNREACHABLE } from "../1_utilities.js";
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
    async upload(contents, params) {
        const isBig = contents.length > 1048576; // 10 MB
        const chunkSize = params?.chunkSize ?? 512 * 1024;
        if (mod(chunkSize, 1024) != 0) {
            throw new InputError("chunkSize must be divisible by 1024.");
        }
        const signal = params?.signal;
        __classPrivateFieldGet(this, _FileManager_Lupload, "f").debug("uploading " + (isBig ? "big " : "") + "file of size " + contents.length + " with chunk size of " + chunkSize);
        const fileId = getRandomId();
        const name = params?.fileName ?? fileId.toString();
        const { api, disconnect, connect } = __classPrivateFieldGet(this, _FileManager_c, "f").apiFactory();
        signal?.addEventListener("abort", () => drop(disconnect()));
        await connect();
        let part = 0;
        const partCount = Math.ceil(contents.length / chunkSize);
        try {
            main: for (; part < partCount; part++) {
                chunk: while (true) {
                    try {
                        const start = part * chunkSize;
                        const end = start + chunkSize;
                        const bytes = contents.subarray(start, end);
                        if (bytes.length == 0) {
                            continue main;
                        }
                        if (isBig) {
                            await api.upload.saveBigFilePart({ file_id: fileId, file_part: part, bytes, file_total_parts: partCount });
                        }
                        else {
                            await api.upload.saveFilePart({ file_id: fileId, bytes, file_part: part });
                        }
                        __classPrivateFieldGet(this, _FileManager_Lupload, "f").debug((part + 1) + " out of " + partCount + " chunks have been uploaded so far");
                        break chunk;
                    }
                    catch (err) {
                        if (signal?.aborted) {
                            break main;
                        }
                        if (err instanceof FloodWait) { // TODO: should this be removed?
                            __classPrivateFieldGet(this, _FileManager_Lupload, "f").warning("got a flood wait of " + err.seconds + " seconds");
                            await new Promise((r) => setTimeout(r, err.seconds * 1000));
                        }
                        else if (err instanceof ConnectionError) {
                            while (true) {
                                try {
                                    await new Promise((r) => setTimeout(r, 3000));
                                    await connect();
                                }
                                catch {
                                    if (signal?.aborted) {
                                        break main;
                                    }
                                }
                            }
                        }
                        else {
                            throw err;
                        }
                    }
                }
            }
        }
        finally {
            drop(disconnect());
        }
        __classPrivateFieldGet(this, _FileManager_Lupload, "f").debug("uploaded all " + partCount + " chunk(s)");
        if (isBig) {
            return new types.InputFileBig({ id: fileId, parts: contents.length / chunkSize, name });
        }
        else {
            return new types.InputFile({ id: fileId, name, parts: part, md5_checksum: "" });
        }
    }
    async *download(fileId, params) {
        const fileId_ = deserializeFileId(fileId);
        if (fileId_.location.type == "photo") {
            switch (fileId_.type) {
                case FileType.ProfilePhoto: {
                    if (fileId_.location.source.type != PhotoSourceType.ChatPhotoBig && fileId_.location.source.type != PhotoSourceType.ChatPhotoSmall) {
                        UNREACHABLE();
                    }
                    const big = fileId_.location.source.type == PhotoSourceType.ChatPhotoBig;
                    const peer = await __classPrivateFieldGet(this, _FileManager_c, "f").getInputPeer(Number(fileId_.location.source.chatId)); // TODO: use access hash from source?
                    const location = new types.InputPeerPhotoFileLocation({ big: big ? true : undefined, peer, photo_id: fileId_.location.id });
                    for await (const chunk of __classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_downloadInner).call(this, location, fileId_.dcId, params)) {
                        yield chunk;
                    }
                    break;
                }
                case FileType.Photo: {
                    const location = new types.InputPhotoFileLocation({
                        id: fileId_.location.id,
                        access_hash: fileId_.location.accessHash,
                        file_reference: fileId_.fileReference ?? new Uint8Array(),
                        thumb_size: "thumbnailType" in fileId_.location.source ? String.fromCharCode(fileId_.location.source.thumbnailType) : "",
                    });
                    for await (const chunk of __classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_downloadInner).call(this, location, fileId_.dcId, params)) {
                        yield chunk;
                    }
                    break;
                }
                case FileType.Thumbnail: {
                    const location = new types.InputDocumentFileLocation({
                        id: fileId_.location.id,
                        access_hash: fileId_.location.accessHash,
                        file_reference: fileId_.fileReference ?? new Uint8Array(),
                        thumb_size: "thumbnailType" in fileId_.location.source ? String.fromCharCode(fileId_.location.source.thumbnailType) : UNREACHABLE(),
                    });
                    for await (const chunk of __classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_downloadInner).call(this, location, fileId_.dcId, params)) {
                        yield chunk;
                    }
                    break;
                }
            }
        }
        else if (fileId_.location.type == "common") {
            const location = new types.InputDocumentFileLocation({
                id: fileId_.location.id,
                access_hash: fileId_.location.accessHash,
                file_reference: fileId_.fileReference ?? new Uint8Array(),
                thumb_size: "", // TODO?
            });
            for await (const chunk of __classPrivateFieldGet(this, _FileManager_instances, "m", _FileManager_downloadInner).call(this, location, fileId_.dcId, params)) {
                yield chunk;
            }
        }
        else {
            UNREACHABLE();
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
            if (maybeDocument != null && Date.now() - maybeDocument[1].getTime() <= 30 * 60 * 1000) {
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
_FileManager_c = new WeakMap(), _FileManager_Lupload = new WeakMap(), _FileManager_instances = new WeakSet(), _FileManager_downloadInner = async function* _FileManager_downloadInner(location, dcId, params) {
    const id = "id" in location ? location.id : "photo_id" in location ? location.photo_id : null;
    if (id != null) {
        const file = await __classPrivateFieldGet(this, _FileManager_c, "f").storage.getFile(id);
        const partOffset = file == null ? 0 : params?.offset ? Math.ceil(10 / file[1]) - 1 : 0;
        if (file != null && file[0] > 0) {
            for await (const part of __classPrivateFieldGet(this, _FileManager_c, "f").storage.iterFileParts(id, file[0], partOffset)) {
                yield part;
            }
            return;
        }
    }
    const chunkSize = params?.chunkSize ?? 1024 * 1024;
    if (mod(chunkSize, 1024) != 0) {
        throw new InputError("chunkSize must be divisible by 1024.");
    }
    const { api, connect, disconnect } = __classPrivateFieldGet(this, _FileManager_c, "f").apiFactory(dcId);
    await connect();
    const limit = chunkSize;
    let offset = params?.offset ? BigInt(params.offset) : 0n;
    let part = 0;
    try {
        while (true) {
            const file = await api.upload.getFile({ location, offset, limit });
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
                UNREACHABLE();
            }
        }
    }
    finally {
        drop(disconnect());
    }
};
