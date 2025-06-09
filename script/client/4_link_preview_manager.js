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
var _LinkPreviewManager_c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkPreviewManager = void 0;
const _2_tl_js_1 = require("../2_tl.js");
const _3_types_js_1 = require("../3_types.js");
const linkPreviewManagerUpdates = [
    "updateWebPage",
];
class LinkPreviewManager {
    constructor(c) {
        _LinkPreviewManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _LinkPreviewManager_c, c, "f");
    }
    async getLinkPreview(text, params) {
        const [text_, entities_] = await __classPrivateFieldGet(this, _LinkPreviewManager_c, "f").messageManager.parseText(text, params);
        const result = await __classPrivateFieldGet(this, _LinkPreviewManager_c, "f").invoke({
            _: "messages.getWebPagePreview",
            message: text_,
            entities: entities_,
        });
        if (_2_tl_js_1.Api.is("messageMediaWebPage", result.media)) {
            return (0, _3_types_js_1.constructLinkPreview)(result.media);
        }
        else {
            return null;
        }
    }
    canHandleUpdate(update) {
        return _2_tl_js_1.Api.isOneOf(linkPreviewManagerUpdates, update);
    }
    handleUpdate(update) {
        const linkPreview = (0, _3_types_js_1.constructLinkPreview)({ _: "messageMediaWebPage", webpage: update.webpage });
        return Promise.resolve({ linkPreview });
    }
}
exports.LinkPreviewManager = LinkPreviewManager;
_LinkPreviewManager_c = new WeakMap();
