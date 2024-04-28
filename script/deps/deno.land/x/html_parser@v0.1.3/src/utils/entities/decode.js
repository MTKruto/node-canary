"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeHTML = exports.decodeHTMLStrict = exports.htmlTrie = exports.decodeXML = exports.xmlTrie = void 0;
const entities_js_1 = __importDefault(require("./maps/entities.js"));
const legacy_js_1 = __importDefault(require("./maps/legacy.js"));
const xml_js_1 = __importDefault(require("./maps/xml.js"));
const decode_codepoint_js_1 = __importDefault(require("./decode_codepoint.js"));
const numStart = (function () {
    const numStart = new Map();
    const numRecurse = new Map();
    const numValue = { next: numRecurse, base: 10 };
    for (let i = 0; i <= 9; i++) {
        numStart.set(i.toString(10), numValue);
        numRecurse.set(i.toString(10), numValue);
    }
    const hexRecurse = new Map();
    const hexValue = { next: hexRecurse, base: 16 };
    for (let i = 0; i <= 15; i++) {
        hexRecurse.set(i.toString(16), hexValue);
        hexRecurse.set(i.toString(16).toUpperCase(), hexValue);
    }
    const hexStart = { next: hexRecurse };
    numStart.set('x', hexStart);
    numStart.set('X', hexStart);
    return { next: numStart };
})();
function getTrieReplacer(trieStart, legacyEntities) {
    return (str) => {
        let ret = '';
        let lastIdx = 0;
        let legacyTrieIndex = 0;
        let idx = 0;
        function decodeNumeric(base) {
            const entity = str.substring(
            // Skip the leading "&#". For hex entities, also skip the leading "x".
            lastIdx + 2 + (base >>> 4), idx);
            const parsed = parseInt(entity, base);
            return (0, decode_codepoint_js_1.default)(parsed);
        }
        entityLoop: while ((idx = str.indexOf('&', idx)) >= 0) {
            ret += str.slice(lastIdx, idx);
            lastIdx = idx;
            let trieNode = trieStart;
            let legacyTrie;
            while (++idx < str.length) {
                const c = str.charAt(idx);
                if (c === ';') {
                    if (trieNode.value) {
                        ret += trieNode.value;
                    }
                    else if (trieNode.base) {
                        ret += decodeNumeric(trieNode.base);
                    }
                    else
                        break;
                    idx += 1;
                    lastIdx = idx;
                    continue entityLoop;
                }
                else {
                    const next = trieNode.next?.get(c);
                    if (next) {
                        trieNode = next;
                        if (legacyEntities && next.legacy) {
                            legacyTrie = next;
                            legacyTrieIndex = idx;
                        }
                    }
                    else
                        break;
                }
            }
            if (legacyEntities) {
                if (legacyTrie) {
                    ret += legacyTrie.value;
                    lastIdx = legacyTrieIndex + 1;
                }
                else if (trieNode.base) {
                    ret += decodeNumeric(trieNode.base);
                    lastIdx = idx;
                }
            }
        }
        return ret + str.substr(lastIdx);
    };
}
exports.xmlTrie = { next: getTrie(xml_js_1.default) };
exports.decodeXML = getTrieReplacer(exports.xmlTrie, false);
exports.htmlTrie = {
    next: markLegacyEntries(getTrie(entities_js_1.default), legacy_js_1.default),
};
exports.decodeHTMLStrict = getTrieReplacer(exports.htmlTrie, false);
exports.decodeHTML = getTrieReplacer(exports.htmlTrie, true);
function getTrie(map) {
    const trie = new Map();
    for (const key of Object.keys(map)) {
        // Resolve the key
        let lastMap = trie;
        for (const char of key.slice(0, -1)) {
            const next = lastMap.get(char) ?? {};
            lastMap.set(char, next);
            lastMap = next.next ??= new Map();
        }
        const val = lastMap.get(key.slice(-1)) ?? {};
        val.value = map[key];
        lastMap.set(key.slice(-1), val);
    }
    // Add numeric values
    trie.set('#', numStart);
    return trie;
}
function markLegacyEntries(trie, legacy) {
    for (const key of Object.keys(legacy)) {
        // Resolve the key
        let lastMap = { next: trie };
        for (const char of key) {
            const next = lastMap.next?.get(char);
            if (!next)
                throw new Error(`Could not find ${key} at ${char}`);
            lastMap = next;
        }
        lastMap.legacy = true;
    }
    return trie;
}
