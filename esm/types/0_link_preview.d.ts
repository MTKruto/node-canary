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
/** A link preview. */
export interface LinkPreview {
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
export declare function constructLinkPreview(media: Api.messageMediaWebPage, invert?: boolean): LinkPreview;
//# sourceMappingURL=0_link_preview.d.ts.map