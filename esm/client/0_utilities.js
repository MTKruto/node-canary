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
import { unreachable } from "../0_deps.js";
import { InputError } from "../0_errors.js";
import { functions } from "../2_tl.js";
export const resolve = () => Promise.resolve();
export function isHttpUrl(string) {
    try {
        return new URL(string).protocol.startsWith("http");
    }
    catch {
        return false;
    }
}
function isAlpha(string) {
    const c = string.charCodeAt(0) | 0x20;
    return "a".charCodeAt(0) <= c && c <= "z".charCodeAt(0);
}
function isDigit(string) {
    const c = string.charCodeAt(0);
    return "0".charCodeAt(0) <= c && c <= "9".charCodeAt(0);
}
const errInvalidUsername = (u) => new InputError(`Invalid username: ${u}`);
function validateUsername(string, ignoreAt = false) {
    string = string.trim();
    if (ignoreAt && string.startsWith("@")) {
        string = string.slice(1);
    }
    if (string.length == 0 || string.length > 32) {
        throw errInvalidUsername(string);
    }
    if (!isAlpha(string[0])) {
        throw errInvalidUsername(string);
    }
    for (const c of string) {
        if (!isAlpha(c) && !isDigit(c) && c != "_") {
            throw errInvalidUsername(string);
        }
    }
    if (string[string.length - 1] == "_") {
        throw errInvalidUsername(string);
    }
    for (let i = 1; i < string.length; ++i) {
        if (string[i - 1] == "_" && string[i] == "_") {
            throw errInvalidUsername(string);
        }
    }
    return string;
}
export function getUsername(string) {
    let url = null;
    try {
        url = new URL(string);
    }
    catch {
        try {
            url = new URL("https://" + string);
        }
        catch {
            //
        }
    }
    if (url === null || (url.protocol != "http:" && url.protocol != "https:")) {
        return validateUsername(string, true);
    }
    if (url.hostname != "telegram.dog" && url.hostname != "telegram.me" && url.hostname != "t.me" && !url.hostname.endsWith(".t.me")) {
        return validateUsername(string, true);
    }
    if (url.hostname == "telegram.dog" || url.hostname == "telegram.me" || url.hostname == "t.me") {
        return validateUsername(url.pathname.split("/")[1]);
    }
    const parts = url.hostname.split(".");
    if (parts.length != 3) {
        return validateUsername(string);
    }
    return validateUsername(parts[0]);
}
export function getChatListId(chatList) {
    switch (chatList) {
        case "main":
            return 0;
        case "archived":
            return 1;
        default:
            unreachable();
    }
}
export function checkMessageId(messageId) {
    if (typeof messageId !== "number" || isNaN(messageId) || messageId <= 0) {
        throw new InputError("Invalid message ID");
    }
    return messageId;
}
export function checkStoryId(storyId) {
    if (typeof storyId !== "number" || isNaN(storyId) || !storyId) {
        throw new InputError("Invalid story ID");
    }
    return storyId;
}
export function checkPollOption(option) {
    if (!option.trim()) {
        throw new InputError("Poll option must not be empty.");
    }
}
export function checkArray(array, check) {
    for (const item of array) {
        check(item);
    }
}
export function checkCallbackQueryId(id) {
    if (typeof id !== "string" || !id.trim()) {
        throw new InputError("Invalid callback query ID.");
    }
}
export function checkInlineQueryId(id) {
    if (typeof id !== "string" || !id.trim()) {
        throw new InputError("Invalid inline query ID.");
    }
}
export function isMtprotoFunction(value) {
    return value instanceof functions.ping ||
        value instanceof functions.ping_delay_disconnect ||
        value instanceof functions.req_pq_multi ||
        value instanceof functions.rpc_drop_answer ||
        value instanceof functions.get_future_salts ||
        value instanceof functions.destroy_session ||
        value instanceof functions.destroy_auth_key ||
        value instanceof functions.req_DH_params ||
        value instanceof functions.set_client_DH_params;
}
