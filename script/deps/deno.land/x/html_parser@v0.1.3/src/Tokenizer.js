"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decode_codepoint_js_1 = __importDefault(require("./utils/entities/decode_codepoint.js"));
const entities_js_1 = __importDefault(require("./utils/entities/maps/entities.js"));
const legacy_js_1 = __importDefault(require("./utils/entities/maps/legacy.js"));
const xml_js_1 = __importDefault(require("./utils/entities/maps/xml.js"));
/** All the states the tokenizer can be in. */
var State;
(function (State) {
    State[State["Text"] = 1] = "Text";
    State[State["BeforeTagName"] = 2] = "BeforeTagName";
    State[State["InTagName"] = 3] = "InTagName";
    State[State["InSelfClosingTag"] = 4] = "InSelfClosingTag";
    State[State["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
    State[State["InClosingTagName"] = 6] = "InClosingTagName";
    State[State["AfterClosingTagName"] = 7] = "AfterClosingTagName";
    // Attributes
    State[State["BeforeAttributeName"] = 8] = "BeforeAttributeName";
    State[State["InAttributeName"] = 9] = "InAttributeName";
    State[State["AfterAttributeName"] = 10] = "AfterAttributeName";
    State[State["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
    State[State["InAttributeValueDq"] = 12] = "InAttributeValueDq";
    State[State["InAttributeValueSq"] = 13] = "InAttributeValueSq";
    State[State["InAttributeValueNq"] = 14] = "InAttributeValueNq";
    // Declarations
    State[State["BeforeDeclaration"] = 15] = "BeforeDeclaration";
    State[State["InDeclaration"] = 16] = "InDeclaration";
    // Processing instructions
    State[State["InProcessingInstruction"] = 17] = "InProcessingInstruction";
    // Comments
    State[State["BeforeComment"] = 18] = "BeforeComment";
    State[State["InComment"] = 19] = "InComment";
    State[State["InSpecialComment"] = 20] = "InSpecialComment";
    State[State["AfterComment1"] = 21] = "AfterComment1";
    State[State["AfterComment2"] = 22] = "AfterComment2";
    // Cdata
    State[State["BeforeCdata1"] = 23] = "BeforeCdata1";
    State[State["BeforeCdata2"] = 24] = "BeforeCdata2";
    State[State["BeforeCdata3"] = 25] = "BeforeCdata3";
    State[State["BeforeCdata4"] = 26] = "BeforeCdata4";
    State[State["BeforeCdata5"] = 27] = "BeforeCdata5";
    State[State["BeforeCdata6"] = 28] = "BeforeCdata6";
    State[State["InCdata"] = 29] = "InCdata";
    State[State["AfterCdata1"] = 30] = "AfterCdata1";
    State[State["AfterCdata2"] = 31] = "AfterCdata2";
    // Special tags
    State[State["BeforeSpecialS"] = 32] = "BeforeSpecialS";
    State[State["BeforeSpecialSEnd"] = 33] = "BeforeSpecialSEnd";
    State[State["BeforeScript1"] = 34] = "BeforeScript1";
    State[State["BeforeScript2"] = 35] = "BeforeScript2";
    State[State["BeforeScript3"] = 36] = "BeforeScript3";
    State[State["BeforeScript4"] = 37] = "BeforeScript4";
    State[State["BeforeScript5"] = 38] = "BeforeScript5";
    State[State["AfterScript1"] = 39] = "AfterScript1";
    State[State["AfterScript2"] = 40] = "AfterScript2";
    State[State["AfterScript3"] = 41] = "AfterScript3";
    State[State["AfterScript4"] = 42] = "AfterScript4";
    State[State["AfterScript5"] = 43] = "AfterScript5";
    State[State["BeforeStyle1"] = 44] = "BeforeStyle1";
    State[State["BeforeStyle2"] = 45] = "BeforeStyle2";
    State[State["BeforeStyle3"] = 46] = "BeforeStyle3";
    State[State["BeforeStyle4"] = 47] = "BeforeStyle4";
    State[State["AfterStyle1"] = 48] = "AfterStyle1";
    State[State["AfterStyle2"] = 49] = "AfterStyle2";
    State[State["AfterStyle3"] = 50] = "AfterStyle3";
    State[State["AfterStyle4"] = 51] = "AfterStyle4";
    State[State["BeforeSpecialT"] = 52] = "BeforeSpecialT";
    State[State["BeforeSpecialTEnd"] = 53] = "BeforeSpecialTEnd";
    State[State["BeforeTitle1"] = 54] = "BeforeTitle1";
    State[State["BeforeTitle2"] = 55] = "BeforeTitle2";
    State[State["BeforeTitle3"] = 56] = "BeforeTitle3";
    State[State["BeforeTitle4"] = 57] = "BeforeTitle4";
    State[State["AfterTitle1"] = 58] = "AfterTitle1";
    State[State["AfterTitle2"] = 59] = "AfterTitle2";
    State[State["AfterTitle3"] = 60] = "AfterTitle3";
    State[State["AfterTitle4"] = 61] = "AfterTitle4";
    State[State["BeforeEntity"] = 62] = "BeforeEntity";
    State[State["BeforeNumericEntity"] = 63] = "BeforeNumericEntity";
    State[State["InNamedEntity"] = 64] = "InNamedEntity";
    State[State["InNumericEntity"] = 65] = "InNumericEntity";
    State[State["InHexEntity"] = 66] = "InHexEntity";
})(State || (State = {}));
var Special;
(function (Special) {
    Special[Special["None"] = 1] = "None";
    Special[Special["Script"] = 2] = "Script";
    Special[Special["Style"] = 3] = "Style";
    Special[Special["Title"] = 4] = "Title";
})(Special || (Special = {}));
function whitespace(c) {
    return c === ' ' || c === '\n' || c === '\t' || c === '\f' || c === '\r';
}
function isASCIIAlpha(c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}
function ifElseState(upper, SUCCESS, FAILURE) {
    const lower = upper.toLowerCase();
    if (upper === lower) {
        return (t, c) => {
            if (c === lower) {
                t._state = SUCCESS;
            }
            else {
                t._state = FAILURE;
                t._index--;
            }
        };
    }
    return (t, c) => {
        if (c === lower || c === upper) {
            t._state = SUCCESS;
        }
        else {
            t._state = FAILURE;
            t._index--;
        }
    };
}
function consumeSpecialNameChar(upper, NEXT_STATE) {
    const lower = upper.toLowerCase();
    return (t, c) => {
        if (c === lower || c === upper) {
            t._state = NEXT_STATE;
        }
        else {
            t._state = State.InTagName;
            t._index--; // Consume the token again
        }
    };
}
const stateBeforeCdata1 = ifElseState('C', State.BeforeCdata2, State.InDeclaration);
const stateBeforeCdata2 = ifElseState('D', State.BeforeCdata3, State.InDeclaration);
const stateBeforeCdata3 = ifElseState('A', State.BeforeCdata4, State.InDeclaration);
const stateBeforeCdata4 = ifElseState('T', State.BeforeCdata5, State.InDeclaration);
const stateBeforeCdata5 = ifElseState('A', State.BeforeCdata6, State.InDeclaration);
const stateBeforeScript1 = consumeSpecialNameChar('R', State.BeforeScript2);
const stateBeforeScript2 = consumeSpecialNameChar('I', State.BeforeScript3);
const stateBeforeScript3 = consumeSpecialNameChar('P', State.BeforeScript4);
const stateBeforeScript4 = consumeSpecialNameChar('T', State.BeforeScript5);
const stateAfterScript1 = ifElseState('R', State.AfterScript2, State.Text);
const stateAfterScript2 = ifElseState('I', State.AfterScript3, State.Text);
const stateAfterScript3 = ifElseState('P', State.AfterScript4, State.Text);
const stateAfterScript4 = ifElseState('T', State.AfterScript5, State.Text);
const stateBeforeStyle1 = consumeSpecialNameChar('Y', State.BeforeStyle2);
const stateBeforeStyle2 = consumeSpecialNameChar('L', State.BeforeStyle3);
const stateBeforeStyle3 = consumeSpecialNameChar('E', State.BeforeStyle4);
const stateAfterStyle1 = ifElseState('Y', State.AfterStyle2, State.Text);
const stateAfterStyle2 = ifElseState('L', State.AfterStyle3, State.Text);
const stateAfterStyle3 = ifElseState('E', State.AfterStyle4, State.Text);
const stateBeforeSpecialT = consumeSpecialNameChar('I', State.BeforeTitle1);
const stateBeforeTitle1 = consumeSpecialNameChar('T', State.BeforeTitle2);
const stateBeforeTitle2 = consumeSpecialNameChar('L', State.BeforeTitle3);
const stateBeforeTitle3 = consumeSpecialNameChar('E', State.BeforeTitle4);
const stateAfterSpecialTEnd = ifElseState('I', State.AfterTitle1, State.Text);
const stateAfterTitle1 = ifElseState('T', State.AfterTitle2, State.Text);
const stateAfterTitle2 = ifElseState('L', State.AfterTitle3, State.Text);
const stateAfterTitle3 = ifElseState('E', State.AfterTitle4, State.Text);
const stateBeforeEntity = ifElseState('#', State.BeforeNumericEntity, State.InNamedEntity);
const stateBeforeNumericEntity = ifElseState('X', State.InHexEntity, State.InNumericEntity);
class Tokenizer {
    constructor(options, cbs) {
        /** The current state the tokenizer is in. */
        Object.defineProperty(this, "_state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: State.Text
        });
        /** The read buffer. */
        Object.defineProperty(this, "buffer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        /** The beginning of the section that is currently being read. */
        Object.defineProperty(this, "sectionStart", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** The index within the buffer that we are currently looking at. */
        Object.defineProperty(this, "_index", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /**
         * Data that has already been processed will be removed from the buffer occasionally.
         * `_bufferOffset` keeps track of how many characters have been removed, to make sure position information is accurate.
         */
        Object.defineProperty(this, "bufferOffset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
        Object.defineProperty(this, "baseState", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: State.Text
        });
        /** For special parsing behavior inside of script and style tags. */
        Object.defineProperty(this, "special", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Special.None
        });
        /** Indicates whether the tokenizer has been paused. */
        Object.defineProperty(this, "running", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        /** Indicates whether the tokenizer has finished running / `.end` has been called. */
        Object.defineProperty(this, "ended", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "cbs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "xmlMode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "decodeEntities", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cbs = cbs;
        this.xmlMode = !!options?.xmlMode;
        this.decodeEntities = options?.decodeEntities ?? true;
    }
    reset() {
        this._state = State.Text;
        this.buffer = '';
        this.sectionStart = 0;
        this._index = 0;
        this.bufferOffset = 0;
        this.baseState = State.Text;
        this.special = Special.None;
        this.running = true;
        this.ended = false;
    }
    write(chunk) {
        if (this.ended)
            this.cbs.onerror(Error('.write() after done!'));
        this.buffer += chunk;
        this.parse();
    }
    end(chunk) {
        if (this.ended)
            this.cbs.onerror(Error('.end() after done!'));
        if (chunk)
            this.write(chunk);
        this.ended = true;
        if (this.running)
            this.finish();
    }
    pause() {
        this.running = false;
    }
    resume() {
        this.running = true;
        if (this._index < this.buffer.length) {
            this.parse();
        }
        if (this.ended) {
            this.finish();
        }
    }
    /**
     * The current index within all of the written data.
     */
    getAbsoluteIndex() {
        return this.bufferOffset + this._index;
    }
    stateText(c) {
        if (c === '<') {
            if (this._index > this.sectionStart) {
                this.cbs.ontext(this.getSection());
            }
            this._state = State.BeforeTagName;
            this.sectionStart = this._index;
        }
        else if (this.decodeEntities &&
            c === '&' &&
            (this.special === Special.None || this.special === Special.Title)) {
            if (this._index > this.sectionStart) {
                this.cbs.ontext(this.getSection());
            }
            this.baseState = State.Text;
            this._state = State.BeforeEntity;
            this.sectionStart = this._index;
        }
    }
    /**
     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
     *
     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
     * We allow anything that wouldn't end the tag.
     */
    isTagStartChar(c) {
        return (isASCIIAlpha(c) ||
            (this.xmlMode && !whitespace(c) && c !== '/' && c !== '>'));
    }
    stateBeforeTagName(c) {
        if (c === '/') {
            this._state = State.BeforeClosingTagName;
        }
        else if (c === '<') {
            this.cbs.ontext(this.getSection());
            this.sectionStart = this._index;
        }
        else if (c === '>' ||
            this.special !== Special.None ||
            whitespace(c)) {
            this._state = State.Text;
        }
        else if (c === '!') {
            this._state = State.BeforeDeclaration;
            this.sectionStart = this._index + 1;
        }
        else if (c === '?') {
            this._state = State.InProcessingInstruction;
            this.sectionStart = this._index + 1;
        }
        else if (!this.isTagStartChar(c)) {
            this._state = State.Text;
        }
        else {
            this._state =
                !this.xmlMode && (c === 's' || c === 'S')
                    ? State.BeforeSpecialS
                    : !this.xmlMode && (c === 't' || c === 'T')
                        ? State.BeforeSpecialT
                        : State.InTagName;
            this.sectionStart = this._index;
        }
    }
    stateInTagName(c) {
        if (c === '/' || c === '>' || whitespace(c)) {
            this.emitToken('onopentagname');
            this._state = State.BeforeAttributeName;
            this._index--;
        }
    }
    stateBeforeClosingTagName(c) {
        if (whitespace(c)) {
            // Ignore
        }
        else if (c === '>') {
            this._state = State.Text;
        }
        else if (this.special !== Special.None) {
            if (this.special !== Special.Title && (c === 's' || c === 'S')) {
                this._state = State.BeforeSpecialSEnd;
            }
            else if (this.special === Special.Title &&
                (c === 't' || c === 'T')) {
                this._state = State.BeforeSpecialTEnd;
            }
            else {
                this._state = State.Text;
                this._index--;
            }
        }
        else if (!this.isTagStartChar(c)) {
            this._state = State.InSpecialComment;
            this.sectionStart = this._index;
        }
        else {
            this._state = State.InClosingTagName;
            this.sectionStart = this._index;
        }
    }
    stateInClosingTagName(c) {
        if (c === '>' || whitespace(c)) {
            this.emitToken('onclosetag');
            this._state = State.AfterClosingTagName;
            this._index--;
        }
    }
    stateAfterClosingTagName(c) {
        // Skip everything until ">"
        if (c === '>') {
            this._state = State.Text;
            this.sectionStart = this._index + 1;
        }
    }
    stateBeforeAttributeName(c) {
        if (c === '>') {
            this.cbs.onopentagend();
            this._state = State.Text;
            this.sectionStart = this._index + 1;
        }
        else if (c === '/') {
            this._state = State.InSelfClosingTag;
        }
        else if (!whitespace(c)) {
            this._state = State.InAttributeName;
            this.sectionStart = this._index;
        }
    }
    stateInSelfClosingTag(c) {
        if (c === '>') {
            this.cbs.onselfclosingtag();
            this._state = State.Text;
            this.sectionStart = this._index + 1;
            this.special = Special.None; // Reset special state, in case of self-closing special tags
        }
        else if (!whitespace(c)) {
            this._state = State.BeforeAttributeName;
            this._index--;
        }
    }
    stateInAttributeName(c) {
        if (c === '=' || c === '/' || c === '>' || whitespace(c)) {
            this.cbs.onattribname(this.getSection());
            this.sectionStart = -1;
            this._state = State.AfterAttributeName;
            this._index--;
        }
    }
    stateAfterAttributeName(c) {
        if (c === '=') {
            this._state = State.BeforeAttributeValue;
        }
        else if (c === '/' || c === '>') {
            this.cbs.onattribend(undefined);
            this._state = State.BeforeAttributeName;
            this._index--;
        }
        else if (!whitespace(c)) {
            this.cbs.onattribend(undefined);
            this._state = State.InAttributeName;
            this.sectionStart = this._index;
        }
    }
    stateBeforeAttributeValue(c) {
        if (c === '"') {
            this._state = State.InAttributeValueDq;
            this.sectionStart = this._index + 1;
        }
        else if (c === "'") {
            this._state = State.InAttributeValueSq;
            this.sectionStart = this._index + 1;
        }
        else if (!whitespace(c)) {
            this._state = State.InAttributeValueNq;
            this.sectionStart = this._index;
            this._index--; // Reconsume token
        }
    }
    handleInAttributeValue(c, quote) {
        if (c === quote) {
            this.emitToken('onattribdata');
            this.cbs.onattribend(quote);
            this._state = State.BeforeAttributeName;
        }
        else if (this.decodeEntities && c === '&') {
            this.emitToken('onattribdata');
            this.baseState = this._state;
            this._state = State.BeforeEntity;
            this.sectionStart = this._index;
        }
    }
    stateInAttributeValueDoubleQuotes(c) {
        this.handleInAttributeValue(c, '"');
    }
    stateInAttributeValueSingleQuotes(c) {
        this.handleInAttributeValue(c, "'");
    }
    stateInAttributeValueNoQuotes(c) {
        if (whitespace(c) || c === '>') {
            this.emitToken('onattribdata');
            this.cbs.onattribend(null);
            this._state = State.BeforeAttributeName;
            this._index--;
        }
        else if (this.decodeEntities && c === '&') {
            this.emitToken('onattribdata');
            this.baseState = this._state;
            this._state = State.BeforeEntity;
            this.sectionStart = this._index;
        }
    }
    stateBeforeDeclaration(c) {
        this._state =
            c === '['
                ? State.BeforeCdata1
                : c === '-'
                    ? State.BeforeComment
                    : State.InDeclaration;
    }
    stateInDeclaration(c) {
        if (c === '>') {
            this.cbs.ondeclaration(this.getSection());
            this._state = State.Text;
            this.sectionStart = this._index + 1;
        }
    }
    stateInProcessingInstruction(c) {
        if (c === '>') {
            this.cbs.onprocessinginstruction(this.getSection());
            this._state = State.Text;
            this.sectionStart = this._index + 1;
        }
    }
    stateBeforeComment(c) {
        if (c === '-') {
            this._state = State.InComment;
            this.sectionStart = this._index + 1;
        }
        else {
            this._state = State.InDeclaration;
        }
    }
    stateInComment(c) {
        if (c === '-')
            this._state = State.AfterComment1;
    }
    stateInSpecialComment(c) {
        if (c === '>') {
            this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index));
            this._state = State.Text;
            this.sectionStart = this._index + 1;
        }
    }
    stateAfterComment1(c) {
        if (c === '-') {
            this._state = State.AfterComment2;
        }
        else {
            this._state = State.InComment;
        }
    }
    stateAfterComment2(c) {
        if (c === '>') {
            // Remove 2 trailing chars
            this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index - 2));
            this._state = State.Text;
            this.sectionStart = this._index + 1;
        }
        else if (c !== '-') {
            this._state = State.InComment;
        }
        // Else: stay in AFTER_COMMENT_2 (`--->`)
    }
    stateBeforeCdata6(c) {
        if (c === '[') {
            this._state = State.InCdata;
            this.sectionStart = this._index + 1;
        }
        else {
            this._state = State.InDeclaration;
            this._index--;
        }
    }
    stateInCdata(c) {
        if (c === ']')
            this._state = State.AfterCdata1;
    }
    stateAfterCdata1(c) {
        if (c === ']')
            this._state = State.AfterCdata2;
        else
            this._state = State.InCdata;
    }
    stateAfterCdata2(c) {
        if (c === '>') {
            // Remove 2 trailing chars
            this.cbs.oncdata(this.buffer.substring(this.sectionStart, this._index - 2));
            this._state = State.Text;
            this.sectionStart = this._index + 1;
        }
        else if (c !== ']') {
            this._state = State.InCdata;
        }
        // Else: stay in AFTER_CDATA_2 (`]]]>`)
    }
    stateBeforeSpecialS(c) {
        if (c === 'c' || c === 'C') {
            this._state = State.BeforeScript1;
        }
        else if (c === 't' || c === 'T') {
            this._state = State.BeforeStyle1;
        }
        else {
            this._state = State.InTagName;
            this._index--; // Consume the token again
        }
    }
    stateBeforeSpecialSEnd(c) {
        if (this.special === Special.Script && (c === 'c' || c === 'C')) {
            this._state = State.AfterScript1;
        }
        else if (this.special === Special.Style && (c === 't' || c === 'T')) {
            this._state = State.AfterStyle1;
        }
        else
            this._state = State.Text;
    }
    stateBeforeSpecialLast(c, special) {
        if (c === '/' || c === '>' || whitespace(c)) {
            this.special = special;
        }
        this._state = State.InTagName;
        this._index--; // Consume the token again
    }
    stateAfterSpecialLast(c, sectionStartOffset) {
        if (c === '>' || whitespace(c)) {
            this.special = Special.None;
            this._state = State.InClosingTagName;
            this.sectionStart = this._index - sectionStartOffset;
            this._index--; // Reconsume the token
        }
        else
            this._state = State.Text;
    }
    // For entities terminated with a semicolon
    parseFixedEntity(map = this.xmlMode ? xml_js_1.default : entities_js_1.default) {
        // Offset = 1
        if (this.sectionStart + 1 < this._index) {
            const entity = this.buffer.substring(this.sectionStart + 1, this._index);
            if (Object.prototype.hasOwnProperty.call(map, entity)) {
                this.emitPartial(map[entity]);
                this.sectionStart = this._index + 1;
            }
        }
    }
    // Parses legacy entities (without trailing semicolon)
    parseLegacyEntity() {
        const start = this.sectionStart + 1;
        // The max length of legacy entities is 6
        let limit = Math.min(this._index - start, 6);
        while (limit >= 2) {
            // The min length of legacy entities is 2
            const entity = this.buffer.substr(start, limit);
            if (Object.prototype.hasOwnProperty.call(legacy_js_1.default, entity)) {
                this.emitPartial(legacy_js_1.default[entity]);
                this.sectionStart += limit + 1;
                return;
            }
            limit--;
        }
    }
    stateInNamedEntity(c) {
        if (c === ';') {
            this.parseFixedEntity();
            // Retry as legacy entity if entity wasn't parsed
            if (this.baseState === State.Text &&
                this.sectionStart + 1 < this._index &&
                !this.xmlMode) {
                this.parseLegacyEntity();
            }
            this._state = this.baseState;
        }
        else if ((c < '0' || c > '9') && !isASCIIAlpha(c)) {
            if (this.xmlMode || this.sectionStart + 1 === this._index) {
                // Ignore
            }
            else if (this.baseState !== State.Text) {
                if (c !== '=') {
                    // Parse as legacy entity, without allowing additional characters.
                    this.parseFixedEntity(legacy_js_1.default);
                }
            }
            else {
                this.parseLegacyEntity();
            }
            this._state = this.baseState;
            this._index--;
        }
    }
    decodeNumericEntity(offset, base, strict) {
        const sectionStart = this.sectionStart + offset;
        if (sectionStart !== this._index) {
            // Parse entity
            const entity = this.buffer.substring(sectionStart, this._index);
            const parsed = parseInt(entity, base);
            this.emitPartial((0, decode_codepoint_js_1.default)(parsed));
            this.sectionStart = strict ? this._index + 1 : this._index;
        }
        this._state = this.baseState;
    }
    stateInNumericEntity(c) {
        if (c === ';') {
            this.decodeNumericEntity(2, 10, true);
        }
        else if (c < '0' || c > '9') {
            if (!this.xmlMode) {
                this.decodeNumericEntity(2, 10, false);
            }
            else {
                this._state = this.baseState;
            }
            this._index--;
        }
    }
    stateInHexEntity(c) {
        if (c === ';') {
            this.decodeNumericEntity(3, 16, true);
        }
        else if ((c < 'a' || c > 'f') &&
            (c < 'A' || c > 'F') &&
            (c < '0' || c > '9')) {
            if (!this.xmlMode) {
                this.decodeNumericEntity(3, 16, false);
            }
            else {
                this._state = this.baseState;
            }
            this._index--;
        }
    }
    cleanup() {
        if (this.sectionStart < 0) {
            this.buffer = '';
            this.bufferOffset += this._index;
            this._index = 0;
        }
        else if (this.running) {
            if (this._state === State.Text) {
                if (this.sectionStart !== this._index) {
                    this.cbs.ontext(this.buffer.substr(this.sectionStart));
                }
                this.buffer = '';
                this.bufferOffset += this._index;
                this._index = 0;
            }
            else if (this.sectionStart === this._index) {
                // The section just started
                this.buffer = '';
                this.bufferOffset += this._index;
                this._index = 0;
            }
            else {
                // Remove everything unnecessary
                this.buffer = this.buffer.substr(this.sectionStart);
                this._index -= this.sectionStart;
                this.bufferOffset += this.sectionStart;
            }
            this.sectionStart = 0;
        }
    }
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */
    parse() {
        while (this._index < this.buffer.length && this.running) {
            const c = this.buffer.charAt(this._index);
            if (this._state === State.Text) {
                this.stateText(c);
            }
            else if (this._state === State.InAttributeValueDq) {
                this.stateInAttributeValueDoubleQuotes(c);
            }
            else if (this._state === State.InAttributeName) {
                this.stateInAttributeName(c);
            }
            else if (this._state === State.InComment) {
                this.stateInComment(c);
            }
            else if (this._state === State.InSpecialComment) {
                this.stateInSpecialComment(c);
            }
            else if (this._state === State.BeforeAttributeName) {
                this.stateBeforeAttributeName(c);
            }
            else if (this._state === State.InTagName) {
                this.stateInTagName(c);
            }
            else if (this._state === State.InClosingTagName) {
                this.stateInClosingTagName(c);
            }
            else if (this._state === State.BeforeTagName) {
                this.stateBeforeTagName(c);
            }
            else if (this._state === State.AfterAttributeName) {
                this.stateAfterAttributeName(c);
            }
            else if (this._state === State.InAttributeValueSq) {
                this.stateInAttributeValueSingleQuotes(c);
            }
            else if (this._state === State.BeforeAttributeValue) {
                this.stateBeforeAttributeValue(c);
            }
            else if (this._state === State.BeforeClosingTagName) {
                this.stateBeforeClosingTagName(c);
            }
            else if (this._state === State.AfterClosingTagName) {
                this.stateAfterClosingTagName(c);
            }
            else if (this._state === State.BeforeSpecialS) {
                this.stateBeforeSpecialS(c);
            }
            else if (this._state === State.AfterComment1) {
                this.stateAfterComment1(c);
            }
            else if (this._state === State.InAttributeValueNq) {
                this.stateInAttributeValueNoQuotes(c);
            }
            else if (this._state === State.InSelfClosingTag) {
                this.stateInSelfClosingTag(c);
            }
            else if (this._state === State.InDeclaration) {
                this.stateInDeclaration(c);
            }
            else if (this._state === State.BeforeDeclaration) {
                this.stateBeforeDeclaration(c);
            }
            else if (this._state === State.AfterComment2) {
                this.stateAfterComment2(c);
            }
            else if (this._state === State.BeforeComment) {
                this.stateBeforeComment(c);
            }
            else if (this._state === State.BeforeSpecialSEnd) {
                this.stateBeforeSpecialSEnd(c);
            }
            else if (this._state === State.BeforeSpecialTEnd) {
                stateAfterSpecialTEnd(this, c);
            }
            else if (this._state === State.AfterScript1) {
                stateAfterScript1(this, c);
            }
            else if (this._state === State.AfterScript2) {
                stateAfterScript2(this, c);
            }
            else if (this._state === State.AfterScript3) {
                stateAfterScript3(this, c);
            }
            else if (this._state === State.BeforeScript1) {
                stateBeforeScript1(this, c);
            }
            else if (this._state === State.BeforeScript2) {
                stateBeforeScript2(this, c);
            }
            else if (this._state === State.BeforeScript3) {
                stateBeforeScript3(this, c);
            }
            else if (this._state === State.BeforeScript4) {
                stateBeforeScript4(this, c);
            }
            else if (this._state === State.BeforeScript5) {
                this.stateBeforeSpecialLast(c, Special.Script);
            }
            else if (this._state === State.AfterScript4) {
                stateAfterScript4(this, c);
            }
            else if (this._state === State.AfterScript5) {
                this.stateAfterSpecialLast(c, 6);
            }
            else if (this._state === State.BeforeStyle1) {
                stateBeforeStyle1(this, c);
            }
            else if (this._state === State.InCdata) {
                this.stateInCdata(c);
            }
            else if (this._state === State.BeforeStyle2) {
                stateBeforeStyle2(this, c);
            }
            else if (this._state === State.BeforeStyle3) {
                stateBeforeStyle3(this, c);
            }
            else if (this._state === State.BeforeStyle4) {
                this.stateBeforeSpecialLast(c, Special.Style);
            }
            else if (this._state === State.AfterStyle1) {
                stateAfterStyle1(this, c);
            }
            else if (this._state === State.AfterStyle2) {
                stateAfterStyle2(this, c);
            }
            else if (this._state === State.AfterStyle3) {
                stateAfterStyle3(this, c);
            }
            else if (this._state === State.AfterStyle4) {
                this.stateAfterSpecialLast(c, 5);
            }
            else if (this._state === State.BeforeSpecialT) {
                stateBeforeSpecialT(this, c);
            }
            else if (this._state === State.BeforeTitle1) {
                stateBeforeTitle1(this, c);
            }
            else if (this._state === State.BeforeTitle2) {
                stateBeforeTitle2(this, c);
            }
            else if (this._state === State.BeforeTitle3) {
                stateBeforeTitle3(this, c);
            }
            else if (this._state === State.BeforeTitle4) {
                this.stateBeforeSpecialLast(c, Special.Title);
            }
            else if (this._state === State.AfterTitle1) {
                stateAfterTitle1(this, c);
            }
            else if (this._state === State.AfterTitle2) {
                stateAfterTitle2(this, c);
            }
            else if (this._state === State.AfterTitle3) {
                stateAfterTitle3(this, c);
            }
            else if (this._state === State.AfterTitle4) {
                this.stateAfterSpecialLast(c, 5);
            }
            else if (this._state === State.InProcessingInstruction) {
                this.stateInProcessingInstruction(c);
            }
            else if (this._state === State.InNamedEntity) {
                this.stateInNamedEntity(c);
            }
            else if (this._state === State.BeforeCdata1) {
                stateBeforeCdata1(this, c);
            }
            else if (this._state === State.BeforeEntity) {
                stateBeforeEntity(this, c);
            }
            else if (this._state === State.BeforeCdata2) {
                stateBeforeCdata2(this, c);
            }
            else if (this._state === State.BeforeCdata3) {
                stateBeforeCdata3(this, c);
            }
            else if (this._state === State.AfterCdata1) {
                this.stateAfterCdata1(c);
            }
            else if (this._state === State.AfterCdata2) {
                this.stateAfterCdata2(c);
            }
            else if (this._state === State.BeforeCdata4) {
                stateBeforeCdata4(this, c);
            }
            else if (this._state === State.BeforeCdata5) {
                stateBeforeCdata5(this, c);
            }
            else if (this._state === State.BeforeCdata6) {
                this.stateBeforeCdata6(c);
            }
            else if (this._state === State.InHexEntity) {
                this.stateInHexEntity(c);
            }
            else if (this._state === State.InNumericEntity) {
                this.stateInNumericEntity(c);
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            }
            else if (this._state === State.BeforeNumericEntity) {
                stateBeforeNumericEntity(this, c);
            }
            else {
                this.cbs.onerror(Error('unknown _state'), this._state);
            }
            this._index++;
        }
        this.cleanup();
    }
    finish() {
        // If there is remaining data, emit it in a reasonable way
        if (this.sectionStart < this._index) {
            this.handleTrailingData();
        }
        this.cbs.onend();
    }
    handleTrailingData() {
        const data = this.buffer.substr(this.sectionStart);
        if (this._state === State.InCdata ||
            this._state === State.AfterCdata1 ||
            this._state === State.AfterCdata2) {
            this.cbs.oncdata(data);
        }
        else if (this._state === State.InComment ||
            this._state === State.AfterComment1 ||
            this._state === State.AfterComment2) {
            this.cbs.oncomment(data);
        }
        else if (this._state === State.InNamedEntity && !this.xmlMode) {
            this.parseLegacyEntity();
            if (this.sectionStart < this._index) {
                this._state = this.baseState;
                this.handleTrailingData();
            }
        }
        else if (this._state === State.InNumericEntity && !this.xmlMode) {
            this.decodeNumericEntity(2, 10, false);
            if (this.sectionStart < this._index) {
                this._state = this.baseState;
                this.handleTrailingData();
            }
        }
        else if (this._state === State.InHexEntity && !this.xmlMode) {
            this.decodeNumericEntity(3, 16, false);
            if (this.sectionStart < this._index) {
                this._state = this.baseState;
                this.handleTrailingData();
            }
        }
        else if (this._state !== State.InTagName &&
            this._state !== State.BeforeAttributeName &&
            this._state !== State.BeforeAttributeValue &&
            this._state !== State.AfterAttributeName &&
            this._state !== State.InAttributeName &&
            this._state !== State.InAttributeValueSq &&
            this._state !== State.InAttributeValueDq &&
            this._state !== State.InAttributeValueNq &&
            this._state !== State.InClosingTagName) {
            this.cbs.ontext(data);
        }
        /*
         * Else, ignore remaining data
         * TODO add a way to remove current tag
         */
    }
    getSection() {
        return this.buffer.substring(this.sectionStart, this._index);
    }
    emitToken(name) {
        this.cbs[name](this.getSection());
        this.sectionStart = -1;
    }
    emitPartial(value) {
        if (this.baseState !== State.Text) {
            this.cbs.onattribdata(value); // TODO implement the new event
        }
        else {
            this.cbs.ontext(value);
        }
    }
}
exports.default = Tokenizer;
