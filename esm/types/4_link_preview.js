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
import { unreachable } from "../0_deps.js";
import { cleanObject } from "../1_utilities.js";
import { Api } from "../2_tl.js";
import { FileType, serializeFileId, toUniqueFileId } from "./_file_id.js";
import { constructAudio } from "./1_audio.js";
import { constructDocument } from "./1_document.js";
import { constructPhoto } from "./1_photo.js";
import { constructGift } from "./3_gift.js";
export async function constructLinkPreview(media, invert, getEntity) {
    if (Api.is("webPageNotModified", media.webpage)) {
        unreachable();
    }
    const id = String(media.webpage.id);
    const smallMedia = !!media.force_small_media;
    const largeMedia = !!media.force_large_media;
    const aboveText = !!invert;
    switch (media.webpage._) {
        case "webPagePending":
            return cleanObject({
                type: "loading",
                id,
                date: media.webpage.date,
                url: media.webpage.url,
                smallMedia,
                largeMedia,
                aboveText,
            });
        case "webPageEmpty":
            return cleanObject({
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
                    thumbnail: media.webpage.photo ? constructPhoto(Api.as("photo", media.webpage.photo)) : undefined,
                };
                break;
            }
            else if (media.webpage.document) {
                const document = Api.as("document", media.webpage.document);
                const fileId = {
                    type: FileType.Video,
                    dcId: document.dc_id,
                    fileReference: document.file_reference,
                    location: { type: "common", id: document.id, accessHash: document.access_hash },
                };
                const startTimestamp = Number(new URL(media.webpage.url).searchParams.get("t")) || undefined;
                const fileName = document.attributes.find((v) => Api.is("documentAttributeFilename", v));
                linkPreview = {
                    type: "video",
                    id,
                    url,
                    smallMedia,
                    largeMedia,
                    aboveText,
                    video: constructDocument(document, fileName ?? { _: "documentAttributeFilename", file_name: "Unknown" }, serializeFileId(fileId), toUniqueFileId(fileId)),
                    startTimestamp,
                    thumbnail: media.webpage.video_cover_photo ? media.webpage.photo ? constructPhoto(Api.as("photo", media.webpage.photo)) : undefined : undefined,
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
                    photo: constructPhoto(Api.as("photo", media.webpage.photo)),
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
                const document = Api.as("document", media.webpage.document);
                const fileId = {
                    type: FileType.Audio,
                    dcId: document.dc_id,
                    fileReference: document.file_reference,
                    location: { type: "common", id: document.id, accessHash: document.access_hash },
                };
                const audio = document.attributes.find((v) => Api.is("documentAttributeAudio", v));
                linkPreview = {
                    type: "audio",
                    id,
                    url,
                    smallMedia,
                    largeMedia,
                    aboveText,
                    audio: constructAudio(document, audio, serializeFileId(fileId), toUniqueFileId(fileId)),
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
                    photo: constructPhoto(Api.as("photo", media.webpage.photo)),
                };
                break;
            }
            break;
        case "telegram_nft": {
            const gift = media.webpage.attributes?.find((v) => Api.is("webPageAttributeUniqueStarGift", v))?.gift;
            if (gift) {
                linkPreview = {
                    type: "gift",
                    id,
                    url,
                    smallMedia,
                    largeMedia,
                    aboveText,
                    gift: await constructGift(gift, getEntity),
                };
                break;
            }
        }
    }
    return cleanObject(linkPreview);
}
