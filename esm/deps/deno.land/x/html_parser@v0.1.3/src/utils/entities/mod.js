import { decodeXML, decodeHTML, decodeHTMLStrict } from './decode.js';
import { encodeXML, encodeHTML, encodeNonAsciiHTML } from './encode.js';
/** The level of entities to support. */
export var EntityLevel;
(function (EntityLevel) {
    /** Support only XML entities. */
    EntityLevel[EntityLevel["XML"] = 0] = "XML";
    /** Support HTML entities, which are a superset of XML entities. */
    EntityLevel[EntityLevel["HTML"] = 1] = "HTML";
})(EntityLevel || (EntityLevel = {}));
/** Determines whether some entities are allowed to be written without a trailing `;`. */
export var DecodingMode;
(function (DecodingMode) {
    /** Support legacy HTML entities. */
    DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
    /** Do not support legacy HTML entities. */
    DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
})(DecodingMode || (DecodingMode = {}));
export var EncodingMode;
(function (EncodingMode) {
    /**
     * The output is UTF-8 encoded. Only characters that need escaping within
     * HTML will be escaped.
     */
    EncodingMode[EncodingMode["UTF8"] = 0] = "UTF8";
    /**
     * The output consists only of ASCII characters. Characters that need
     * escaping within HTML, and characters that aren't ASCII characters will
     * be escaped.
     */
    EncodingMode[EncodingMode["ASCII"] = 1] = "ASCII";
    /**
     * Encode all characters that have an equivalent entity, as well as all
     * characters that are not ASCII characters.
     */
    EncodingMode[EncodingMode["Extensive"] = 2] = "Extensive";
})(EncodingMode || (EncodingMode = {}));
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param options Decoding options.
 */
export function decode(data, options = EntityLevel.XML) {
    const opts = typeof options === 'number' ? { level: options } : options;
    if (opts.level === EntityLevel.HTML) {
        if (opts.mode === DecodingMode.Strict) {
            return decodeHTMLStrict(data);
        }
        return decodeHTML(data);
    }
    return decodeXML(data);
}
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param options Decoding options.
 * @deprecated Use `decode` with the `mode` set to `Strict`.
 */
export function decodeStrict(data, options = EntityLevel.XML) {
    const opts = typeof options === 'number' ? { level: options } : options;
    if (opts.level === EntityLevel.HTML) {
        if (opts.mode === DecodingMode.Legacy) {
            return decodeHTML(data);
        }
        return decodeHTMLStrict(data);
    }
    return decodeXML(data);
}
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param options Encoding options.
 */
export function encode(data, options = EntityLevel.XML) {
    const opts = typeof options === 'number' ? { level: options } : options;
    if (opts.level === EntityLevel.HTML) {
        if (opts.mode === EncodingMode.ASCII) {
            return encodeNonAsciiHTML(data);
        }
        // TODO Support opts.mode === 'UTF8'
        return encodeHTML(data);
    }
    // TODO Support opts.mode === 'UTF8'
    // ASCII and Extensive are equivalent
    return encodeXML(data);
}
export { encodeXML, encodeHTML, encodeNonAsciiHTML, escape, escapeUTF8, 
// Legacy aliases (deprecated)
encodeHTML as encodeHTML4, encodeHTML as encodeHTML5, } from './encode.js';
export { decodeXML, decodeHTML, decodeHTMLStrict, 
// Legacy aliases (deprecated)
decodeHTML as decodeHTML4, decodeHTML as decodeHTML5, decodeHTMLStrict as decodeHTML4Strict, decodeHTMLStrict as decodeHTML5Strict, decodeXML as decodeXMLStrict, } from './decode.js';
