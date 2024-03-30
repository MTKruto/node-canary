import * as dntShim from "../_dnt.shims.js";
import { path } from "../0_deps.js";
import { InputError } from "../0_errors.js";
import { UNREACHABLE } from "../1_utilities.js";
import { types } from "../2_tl.js";
export const resolve = () => Promise.resolve();
export function isPtsUpdate(v) {
    return v instanceof types.UpdateNewMessage ||
        v instanceof types.UpdateDeleteMessages ||
        v instanceof types.UpdateReadHistoryInbox ||
        v instanceof types.UpdateReadHistoryOutbox ||
        v instanceof types.UpdatePinnedChannelMessages ||
        v instanceof types.UpdatePinnedMessages ||
        v instanceof types.UpdateFolderPeers ||
        v instanceof types.UpdateChannelWebPage ||
        v instanceof types.UpdateEditMessage ||
        v instanceof types.UpdateReadMessagesContents ||
        v instanceof types.UpdateWebPage;
}
export function isChannelPtsUpdate(v) {
    return v instanceof types.UpdateNewChannelMessage ||
        v instanceof types.UpdateEditChannelMessage ||
        v instanceof types.UpdateDeleteChannelMessages ||
        v instanceof types.UpdateChannelTooLong;
}
export async function getFileContents(source, fileName = "") {
    fileName = fileName.trim() || "file";
    let contents;
    if (source instanceof Uint8Array) {
        contents = source;
    }
    else {
        let url;
        try {
            url = new URL(source).toString();
        }
        catch {
            if (typeof source === "string") {
                let path_;
                if (path.isAbsolute(source)) {
                    path_ = source;
                }
                else {
                    // @ts-ignore: lib
                    path_ = path.join(dntShim.Deno.cwd(), source);
                }
                url = path.toFileUrl(path_).toString();
                fileName = path.basename(path_);
            }
            else {
                UNREACHABLE();
            }
        }
        const res = await fetch(url);
        if (fileName == "file") {
            const contentType = res.headers.get("content-type");
            if (contentType?.includes("image/png")) {
                fileName += ".png";
            }
            else if (contentType?.includes("image/jpeg")) {
                fileName += ".jpg";
            }
        }
        contents = await res.arrayBuffer().then((v) => new Uint8Array(v));
    }
    return [contents, fileName];
}
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
            UNREACHABLE();
    }
}
