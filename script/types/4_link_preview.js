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
exports.constructLinkPreview = constructLinkPreview;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _file_id_js_1 = require("./_file_id.js");
const _1_audio_js_1 = require("./1_audio.js");
const _1_document_js_1 = require("./1_document.js");
const _1_photo_js_1 = require("./1_photo.js");
const _3_gift_js_1 = require("./3_gift.js");
async function constructLinkPreview(media, invert, getEntity) {
    if (_2_tl_js_1.Api.is("webPageNotModified", media.webpage)) {
        (0, _0_deps_js_1.unreachable)();
    }
    const id = String(media.webpage.id);
    const smallMedia = !!media.force_small_media;
    const largeMedia = !!media.force_large_media;
    const aboveText = !!invert;
    switch (media.webpage._) {
        case "webPagePending":
            return (0, _1_utilities_js_1.cleanObject)({
                type: "loading",
                id,
                date: (0, _1_utilities_js_1.fromUnixTimestamp)(media.webpage.date),
                url: media.webpage.url,
                smallMedia,
                largeMedia,
                aboveText,
            });
        case "webPageEmpty":
            return (0, _1_utilities_js_1.cleanObject)({
                type: "notLoaded",
                id,
                url: media.webpage.url,
                smallMedia,
                largeMedia,
                aboveText,
            });
    }
    const url = media.webpage.url;
    let linkPreview = {
        type: "unknown",
        id,
        url,
        smallMedia,
        largeMedia,
        aboveText,
    };
    switch (media.webpage.type) {
        case "video":
            if (media.webpage.embed_type === "iframe") {
                linkPreview = {
                    type: "embeddedVideo",
                    id,
                    url,
                    smallMedia,
                    largeMedia,
                    aboveText,
                    embedUrl: media.webpage.embed_url ?? "",
                    width: media.webpage.embed_width ?? 0,
                    height: media.webpage.embed_height ?? 0,
                    duration: media.webpage.duration ?? 0,
                    thumbnail: media.webpage.photo ? (0, _1_photo_js_1.constructPhoto)(_2_tl_js_1.Api.as("photo", media.webpage.photo)) : undefined,
                };
                break;
            }
            else if (media.webpage.document) {
                const document = _2_tl_js_1.Api.as("document", media.webpage.document);
                const fileId = {
                    type: _file_id_js_1.FileType.Video,
                    dcId: document.dc_id,
                    fileReference: document.file_reference,
                    location: { type: "common", id: document.id, accessHash: document.access_hash },
                };
                const startTimestamp = Number(new URL(media.webpage.url).searchParams.get("t")) || undefined;
                const fileName = document.attributes.find((v) => _2_tl_js_1.Api.is("documentAttributeFilename", v));
                linkPreview = {
                    type: "video",
                    id,
                    url,
                    smallMedia,
                    largeMedia,
                    aboveText,
                    video: (0, _1_document_js_1.constructDocument)(document, fileName ?? { _: "documentAttributeFilename", file_name: "Unknown" }, (0, _file_id_js_1.serializeFileId)(fileId), (0, _file_id_js_1.toUniqueFileId)(fileId)),
                    startTimestamp,
                    thumbnail: media.webpage.video_cover_photo ? media.webpage.photo ? (0, _1_photo_js_1.constructPhoto)(_2_tl_js_1.Api.as("photo", media.webpage.photo)) : undefined : undefined,
                };
                break;
            }
            else if (media.webpage.embed_url) {
                linkPreview = {
                    type: "externalVideo",
                    id,
                    url,
                    smallMedia,
                    largeMedia,
                    aboveText,
                    embedUrl: media.webpage.embed_url ?? "",
                    mimeType: media.webpage.embed_type ?? "",
                    width: media.webpage.embed_width ?? 0,
                    height: media.webpage.embed_height ?? 0,
                    duration: media.webpage.duration ?? 0,
                };
                break;
            }
            else if (media.webpage.photo) {
                linkPreview = {
                    type: "photo",
                    id,
                    url,
                    smallMedia,
                    largeMedia,
                    aboveText,
                    photo: (0, _1_photo_js_1.constructPhoto)(_2_tl_js_1.Api.as("photo", media.webpage.photo)),
                };
                break;
            }
        /* falls through */
        case "audio":
            if (media.webpage.embed_type === "iframe") {
                linkPreview = {
                    type: "embeddedAudio",
                    id,
                    url,
                    smallMedia,
                    largeMedia,
                    aboveText,
                    embedUrl: media.webpage.embed_url ?? "",
                    width: media.webpage.embed_width ?? 0,
                    height: media.webpage.embed_height ?? 0,
                    duration: media.webpage.duration ?? 0,
                };
                break;
            }
            else if (media.webpage.document) {
                const document = _2_tl_js_1.Api.as("document", media.webpage.document);
                const fileId = {
                    type: _file_id_js_1.FileType.Audio,
                    dcId: document.dc_id,
                    fileReference: document.file_reference,
                    location: { type: "common", id: document.id, accessHash: document.access_hash },
                };
                const audio = document.attributes.find((v) => _2_tl_js_1.Api.is("documentAttributeAudio", v));
                linkPreview = {
                    type: "audio",
                    id,
                    url,
                    smallMedia,
                    largeMedia,
                    aboveText,
                    audio: (0, _1_audio_js_1.constructAudio)(document, audio, (0, _file_id_js_1.serializeFileId)(fileId), (0, _file_id_js_1.toUniqueFileId)(fileId)),
                };
                break;
            }
            else if (media.webpage.embed_url) {
                linkPreview = {
                    type: "externalAudio",
                    id,
                    url,
                    smallMedia,
                    largeMedia,
                    aboveText,
                    embedUrl: media.webpage.embed_url,
                    mimeType: media.webpage.embed_type ?? "",
                    width: media.webpage.embed_width ?? 0,
                    height: media.webpage.embed_height ?? 0,
                    duration: media.webpage.duration ?? 0,
                };
                break;
            }
            else if (media.webpage.photo) {
                linkPreview = {
                    type: "photo",
                    id,
                    url,
                    smallMedia,
                    largeMedia,
                    aboveText,
                    photo: (0, _1_photo_js_1.constructPhoto)(_2_tl_js_1.Api.as("photo", media.webpage.photo)),
                };
                break;
            }
            break;
        case "telegram_nft": {
            const gift = media.webpage.attributes?.find((v) => _2_tl_js_1.Api.is("webPageAttributeUniqueStarGift", v))?.gift;
            if (gift) {
                linkPreview = {
                    type: "gift",
                    id,
                    url,
                    smallMedia,
                    largeMedia,
                    aboveText,
                    gift: await (0, _3_gift_js_1.constructGift)(gift, getEntity),
                };
                break;
            }
        }
    }
    return (0, _1_utilities_js_1.cleanObject)(linkPreview);
}
