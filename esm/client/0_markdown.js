/**
 * Copyright (c) 2023 Dunkan
 * Copyright (c) 2024 Roj
 */
import { UNREACHABLE } from "../1_utilities.js";
const enc = new TextEncoder();
const dec = new TextDecoder();
export const CODEPOINTS = {
    "\t": 9,
    "\r": 13,
    "\0": 0,
    "\v": 11,
    "\n": 10,
    "<": 60,
    ">": 62,
    '"': 34,
    " ": 32,
    "@": 64,
    "_": 95,
    "[": 91,
    "]": 93,
    "(": 40,
    ")": 41,
    "`": 96,
    "\\": 92,
    "*": 42,
};
function isUtf8CharacterFirstCodeUnit(c) {
    return (c & 0xC0) !== 0x80;
}
function isWhitespace(codepoint) {
    return (codepoint === CODEPOINTS[" "] || codepoint === CODEPOINTS["\t"] || codepoint === CODEPOINTS["\r"] ||
        codepoint === CODEPOINTS["\n"] || codepoint === CODEPOINTS["\0"] || codepoint === CODEPOINTS["\v"]);
}
function getUrl(url_) {
    try {
        const url = new URL(url_);
        if (url.protocol != "http:" && url.protocol != "https:" && url.protocol != "tg:" && url.protocol != "ton:") {
            return "";
        }
        else {
            return url.href;
        }
    }
    catch {
        return "";
    }
}
function getLinkUserId(url_) {
    try {
        const url = new URL(url_);
        if (url.protocol != "tg:" || url.hostname != "user" || url.pathname.slice(1) != "" || url.port != "") {
            return 0;
        }
        return Number(url.searchParams.get("id")) || 0;
    }
    catch {
        return 0;
    }
}
export function parseMarkdown(text_) {
    const text = enc.encode(text_);
    let resultSize = 0;
    const entities = [];
    const size = text.length;
    let utf16Offset = 0;
    for (let i = 0; i < size; ++i) {
        const c = text[i], next = text[i + 1];
        if (c === CODEPOINTS["\\"] &&
            (next === CODEPOINTS["_"] || next === CODEPOINTS["*"] || next === CODEPOINTS["`"] || next === CODEPOINTS["["])) {
            ++i;
            text[resultSize++] = text[i];
            utf16Offset++;
            continue;
        }
        if (c != null && c !== CODEPOINTS["_"] && c !== CODEPOINTS["*"] && c !== CODEPOINTS["`"] && c !== CODEPOINTS["["]) {
            if (isUtf8CharacterFirstCodeUnit(c)) {
                utf16Offset += 1 + ((c >= 0xf0) ? 1 : 0);
            }
            text[resultSize++] = text[i];
            continue;
        }
        const beginPos = i;
        let endCharacter = text[i];
        let isPre = false;
        if (c === CODEPOINTS["["])
            endCharacter = CODEPOINTS["]"];
        ++i;
        let language = undefined;
        if (c === CODEPOINTS["`"] && text[i] === CODEPOINTS["`"] && text[i + 1] === CODEPOINTS["`"]) {
            i += 2;
            isPre = true;
            let languageEnd = i;
            while (text[languageEnd] != null && !isWhitespace(text[languageEnd]) && text[languageEnd] !== CODEPOINTS["`"]) {
                languageEnd++;
            }
            if (i !== languageEnd && languageEnd < size && text[languageEnd] !== CODEPOINTS["`"]) {
                language = text.slice(i, languageEnd);
                i = languageEnd;
            }
            const current = text[i], next = text[i + 1];
            if (current === CODEPOINTS["\n"] || current === CODEPOINTS["\r"]) {
                if ((next === CODEPOINTS["\n"] || next === CODEPOINTS["\r"]) && current !== next) {
                    i += 2;
                }
                else {
                    ++i;
                }
            }
        }
        const entityOffset = utf16Offset;
        while (i < size &&
            (text[i] !== endCharacter ||
                (isPre && !(text[i + 1] === CODEPOINTS["`"] && text[i + 2] === CODEPOINTS["`"])))) {
            const curCh = text[i];
            if (isUtf8CharacterFirstCodeUnit(curCh)) {
                utf16Offset += 1 + (curCh >= 0xf0 ? 1 : 0);
            }
            text[resultSize++] = text[i++];
        }
        if (i === size) {
            throw new Error("Can't find end of the entity starting at byte offset " + beginPos);
        }
        if (entityOffset !== utf16Offset) {
            const entityLength = utf16Offset - entityOffset;
            switch (c) {
                case CODEPOINTS["_"]:
                    entities.push({ type: "italic", offset: entityOffset, length: entityLength });
                    break;
                case CODEPOINTS["*"]:
                    entities.push({ type: "bold", offset: entityOffset, length: entityLength });
                    break;
                case CODEPOINTS["["]: {
                    let url;
                    if (text[i + 1] !== CODEPOINTS["("]) {
                        url = text.slice(beginPos + 1, i);
                    }
                    else {
                        i += 2;
                        const url_ = [];
                        while (i < size && text[i] !== CODEPOINTS[")"]) {
                            url_.push(text[i++]);
                        }
                        url = Uint8Array.from(url_);
                    }
                    const userId = getLinkUserId(dec.decode(url));
                    if (userId) {
                        entities.push({ type: "textMention", offset: entityOffset, length: entityLength, userId });
                    }
                    else {
                        const url_ = getUrl(dec.decode(url));
                        if (url_) {
                            entities.push({ type: "textLink", offset: entityOffset, length: entityLength, url: url_ });
                        }
                    }
                    break;
                }
                case CODEPOINTS["`"]:
                    if (isPre) {
                        entities.push({ type: "pre", offset: entityOffset, length: entityLength, language: language ? dec.decode(language) : "" });
                    }
                    else {
                        entities.push({ type: "code", offset: entityOffset, length: entityLength });
                    }
                    break;
                default:
                    UNREACHABLE();
            }
        }
        if (isPre) {
            i += 2;
        }
    }
    return [dec.decode(text.slice(0, resultSize)), entities];
}
