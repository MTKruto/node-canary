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
import { Api } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { Audio } from "./1_audio.js";
import { Document } from "./1_document.js";
import { Photo } from "./1_photo.js";
import { Gift } from "./3_gift.js";
/**
 * A link preview to be passed as an input.
 * @unlisted
 */
export interface InputLinkPreview {
    /** @discriminator */
    type: "input";
    /** Whether link preview is disabled. */
    disable?: boolean;
    /** The URL of the preview. */
    url?: string;
    /** Wether the media is to be shown in a small size. */
    smallMedia?: boolean;
    /** Whether the media is to be shown in a large size. */
    largeMedia?: boolean;
    /** Whether the preview is to be shown above the message's text. */
    aboveText?: boolean;
}
/**
 * A link preview.
 * @unlisted
 */
export interface _LinkPreviewBase {
    /** The ID of the link preview. */
    id: string;
    /** Wether the media is to be shown in a small size. */
    smallMedia: boolean;
    /** Whether the media is to be shown in a large size. */
    largeMedia: boolean;
    /** Whether the preview is to be shown above the message's text. */
    aboveText: boolean;
}
/**
 * A link preview that is being loaded.
 * @unlisted
 */
export interface LinkPreviewLoading extends _LinkPreviewBase {
    /** @discriminator */
    type: "loading";
    /** The URL of the link preview. */
    url?: string;
    /** The point in time in which the link preview started to load. */
    date: number;
}
/**
 * A link preview that was not loaded.
 * @unlisted
 */
export interface LinkPreviewNotLoaded extends _LinkPreviewBase {
    /** @discriminator */
    type: "notLoaded";
    /** The URL of the link preview. */
    url?: string;
}
/** @unlisted */
export interface _LinkPreviewLoadedBase extends _LinkPreviewBase {
    /** The URL of the link preview. */
    url: string;
}
/**
 * A link preview of an unknown type.
 * @unlisted
 */
export interface LinkPreviewUnknown extends _LinkPreviewLoadedBase {
    /** @discriminator */
    type: "unknown";
}
/**
 * An embedded video link preview.
 * @unlisted
 */
export interface LinkPreviewPhoto extends _LinkPreviewLoadedBase {
    /** @discriminator */
    type: "photo";
    photo: Photo;
}
/** An embedded video link preview.
 * @unlisted
 */
export interface _LinkPreviewEmbeddedBase extends _LinkPreviewLoadedBase {
    embedUrl: string;
    width: number;
    height: number;
    duration: number;
}
/**
 *  An embedded video link preview.
 * @unlisted
 */
export interface LinkPreviewEmbeddedVideo extends _LinkPreviewEmbeddedBase {
    /** @discriminator */
    type: "embeddedVideo";
    thumbnail?: Photo;
}
/**
 * An embedded video link preview.
 * @unlisted
 */
export interface LinkPreviewExternalVideo extends _LinkPreviewEmbeddedBase {
    /** @discriminator */
    type: "externalVideo";
    mimeType: string;
    width: number;
    height: number;
    duration: number;
}
/** A video link preview.
 * @unlisted
 */
export interface LinkPreviewVideo extends _LinkPreviewLoadedBase {
    /** @discriminator */
    type: "video";
    video: Document;
    startTimestamp?: number;
    thumbnail?: Photo;
}
/**
 * An embedded audio link preview.
 * @unlisted
 */
export interface LinkPreviewEmbeddedAudio extends _LinkPreviewEmbeddedBase {
    /** @discriminator */
    type: "embeddedAudio";
    duration: number;
    width: number;
    height: number;
}
/**
 * An external audio link preview.
 * @unlisted
 */
export interface LinkPreviewExternalAudio extends _LinkPreviewEmbeddedBase {
    /** @discriminator */
    type: "externalAudio";
    mimeType: string;
    duration: number;
}
/**
 * An audio link preview.
 * @unlisted
 */
export interface LinkPreviewAudio extends _LinkPreviewLoadedBase {
    /** @discriminator */
    type: "audio";
    audio: Audio;
}
/**
 * An gift link preview.
 * @unlisted
 */
export interface LinkPreviewGift extends _LinkPreviewLoadedBase {
    /** @discriminator */
    type: "gift";
    gift: Gift;
}
/**
 * A link preview that was loaded.
 * @unlisted
 */
export type LinkPreviewLoaded = LinkPreviewUnknown | LinkPreviewPhoto | LinkPreviewEmbeddedVideo | LinkPreviewExternalVideo | LinkPreviewVideo | LinkPreviewEmbeddedAudio | LinkPreviewExternalAudio | LinkPreviewAudio | LinkPreviewGift;
export type LinkPreview = InputLinkPreview | LinkPreviewLoading | LinkPreviewNotLoaded | LinkPreviewLoaded;
export declare function constructLinkPreview(media: Api.messageMediaWebPage, invert: boolean | undefined, getEntity: EntityGetter): Promise<LinkPreview>;
//# sourceMappingURL=4_link_preview.d.ts.map