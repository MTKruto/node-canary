"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChatListId = exports.getUsername = exports.isHttpUrl = exports.getFileContents = exports.isChannelPtsUpdate = exports.isPtsUpdate = exports.resolve = void 0;
const dntShim = __importStar(require("../_dnt.shims.js"));
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const resolve = () => Promise.resolve();
exports.resolve = resolve;
function isPtsUpdate(v) {
    return v instanceof _2_tl_js_1.types.UpdateNewMessage ||
        v instanceof _2_tl_js_1.types.UpdateDeleteMessages ||
        v instanceof _2_tl_js_1.types.UpdateReadHistoryInbox ||
        v instanceof _2_tl_js_1.types.UpdateReadHistoryOutbox ||
        v instanceof _2_tl_js_1.types.UpdatePinnedChannelMessages ||
        v instanceof _2_tl_js_1.types.UpdatePinnedMessages ||
        v instanceof _2_tl_js_1.types.UpdateFolderPeers ||
        v instanceof _2_tl_js_1.types.UpdateChannelWebPage ||
        v instanceof _2_tl_js_1.types.UpdateEditMessage ||
        v instanceof _2_tl_js_1.types.UpdateReadMessagesContents ||
        v instanceof _2_tl_js_1.types.UpdateWebPage;
}
exports.isPtsUpdate = isPtsUpdate;
function isChannelPtsUpdate(v) {
    return v instanceof _2_tl_js_1.types.UpdateNewChannelMessage ||
        v instanceof _2_tl_js_1.types.UpdateEditChannelMessage ||
        v instanceof _2_tl_js_1.types.UpdateDeleteChannelMessages ||
        v instanceof _2_tl_js_1.types.UpdateChannelTooLong;
}
exports.isChannelPtsUpdate = isChannelPtsUpdate;
async function getFileContents(source, fileName = "") {
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
                if (_0_deps_js_1.path.isAbsolute(source)) {
                    path_ = source;
                }
                else {
                    // @ts-ignore: lib
                    path_ = _0_deps_js_1.path.join(dntShim.Deno.cwd(), source);
                }
                url = _0_deps_js_1.path.toFileUrl(path_).toString();
                fileName = _0_deps_js_1.path.basename(path_);
            }
            else {
                (0, _1_utilities_js_1.UNREACHABLE)();
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
exports.getFileContents = getFileContents;
function isHttpUrl(string) {
    try {
        return new URL(string).protocol.startsWith("http");
    }
    catch {
        return false;
    }
}
exports.isHttpUrl = isHttpUrl;
function isAlpha(string) {
    const c = string.charCodeAt(0) | 0x20;
    return "a".charCodeAt(0) <= c && c <= "z".charCodeAt(0);
}
function isDigit(string) {
    const c = string.charCodeAt(0);
    return "0".charCodeAt(0) <= c && c <= "9".charCodeAt(0);
}
const errInvalidUsername = (u) => new Error("Invalid username: " + u);
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
function getUsername(string) {
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
exports.getUsername = getUsername;
function getChatListId(chatList) {
    switch (chatList) {
        case "main":
            return 0;
        case "archived":
            return 1;
        default:
            (0, _1_utilities_js_1.UNREACHABLE)();
    }
}
exports.getChatListId = getChatListId;