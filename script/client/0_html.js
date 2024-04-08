"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHtml = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
function parseHtml(html) {
    html = html.trim();
    let text = "";
    const entities = new Array();
    const stack = new Array();
    const parser = new _0_deps_js_1.Parser({
        onopentag(name, attribs) {
            switch (name) {
                case "b":
                case "strong":
                    stack.push({ type: "bold", offset: text.length, length: 0 });
                    break;
                case "em":
                case "i":
                    stack.push({ type: "italic", offset: text.length, length: 0 });
                    break;
                case "code":
                    stack.push({ type: "code", offset: text.length, length: 0 });
                    break;
                case "pre": {
                    const language = attribs.language ?? "";
                    stack.push({ type: "pre", offset: text.length, length: 0, language });
                    break;
                }
                case "a": {
                    const url = attribs.href;
                    if (!url) {
                        throw new _0_errors_js_1.InputError("Missing attribute: href");
                    }
                    stack.push({ type: "textLink", offset: text.length, length: 0, url });
                    break;
                }
                case "ins":
                case "u":
                    stack.push({ type: "underline", offset: text.length, length: 0 });
                    break;
                case "del":
                case "strike":
                    stack.push({ type: "strikethrough", offset: text.length, length: 0 });
                    break;
                case "span":
                    if (attribs.class != "tg-spoiler") {
                        throw new _0_errors_js_1.InputError('The class attribute must be "tg-spoiler."');
                    }
                // falls through
                case "tg-spoiler":
                    stack.push({ type: "spoiler", offset: text.length, length: 0 });
                    break;
                case "tg-emoji":
                    if (!attribs["emoji-id"]) {
                        throw new _0_errors_js_1.InputError("Missing attribute: emoji-id");
                    }
                    stack.push({ type: "spoiler", offset: text.length, length: 0 });
                    break;
                case "blockquote":
                    stack.push({ type: "blockquote", offset: text.length, length: 0 });
            }
        },
        ontext(data) {
            if (!text.length) {
                data = data.trimStart();
            }
            text += data;
            for (const item of stack) {
                item.length += data.length;
            }
        },
        onclosetag() {
            const lastItem = stack.pop();
            if (lastItem) {
                entities.push(lastItem);
            }
        },
    });
    parser.write(html);
    parser.end();
    return [text, entities];
}
exports.parseHtml = parseHtml;
