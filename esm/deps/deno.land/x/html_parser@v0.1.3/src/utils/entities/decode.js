import entityMap from './maps/entities.js';
import legacyMap from './maps/legacy.js';
import xmlMap from './maps/xml.js';
import decodeCodePoint from './decode_codepoint.js';
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
            return decodeCodePoint(parsed);
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
export const xmlTrie = { next: getTrie(xmlMap) };
export const decodeXML = getTrieReplacer(xmlTrie, false);
export const htmlTrie = {
    next: markLegacyEntries(getTrie(entityMap), legacyMap),
};
export const decodeHTMLStrict = getTrieReplacer(htmlTrie, false);
export const decodeHTML = getTrieReplacer(htmlTrie, true);
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
