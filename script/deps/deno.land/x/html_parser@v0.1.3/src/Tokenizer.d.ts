/** All the states the tokenizer can be in. */
declare const enum State {
    Text = 1,
    BeforeTagName = 2,// After <
    InTagName = 3,
    InSelfClosingTag = 4,
    BeforeClosingTagName = 5,
    InClosingTagName = 6,
    AfterClosingTagName = 7,
    BeforeAttributeName = 8,
    InAttributeName = 9,
    AfterAttributeName = 10,
    BeforeAttributeValue = 11,
    InAttributeValueDq = 12,// "
    InAttributeValueSq = 13,// '
    InAttributeValueNq = 14,
    BeforeDeclaration = 15,// !
    InDeclaration = 16,
    InProcessingInstruction = 17,// ?
    BeforeComment = 18,
    InComment = 19,
    InSpecialComment = 20,
    AfterComment1 = 21,
    AfterComment2 = 22,
    BeforeCdata1 = 23,// [
    BeforeCdata2 = 24,// C
    BeforeCdata3 = 25,// D
    BeforeCdata4 = 26,// A
    BeforeCdata5 = 27,// T
    BeforeCdata6 = 28,// A
    InCdata = 29,// [
    AfterCdata1 = 30,// ]
    AfterCdata2 = 31,// ]
    BeforeSpecialS = 32,// S
    BeforeSpecialSEnd = 33,// S
    BeforeScript1 = 34,// C
    BeforeScript2 = 35,// R
    BeforeScript3 = 36,// I
    BeforeScript4 = 37,// P
    BeforeScript5 = 38,// T
    AfterScript1 = 39,// C
    AfterScript2 = 40,// R
    AfterScript3 = 41,// I
    AfterScript4 = 42,// P
    AfterScript5 = 43,// T
    BeforeStyle1 = 44,// T
    BeforeStyle2 = 45,// Y
    BeforeStyle3 = 46,// L
    BeforeStyle4 = 47,// E
    AfterStyle1 = 48,// T
    AfterStyle2 = 49,// Y
    AfterStyle3 = 50,// L
    AfterStyle4 = 51,// E
    BeforeSpecialT = 52,// T
    BeforeSpecialTEnd = 53,// T
    BeforeTitle1 = 54,// I
    BeforeTitle2 = 55,// T
    BeforeTitle3 = 56,// L
    BeforeTitle4 = 57,// E
    AfterTitle1 = 58,// I
    AfterTitle2 = 59,// T
    AfterTitle3 = 60,// L
    AfterTitle4 = 61,// E
    BeforeEntity = 62,// &
    BeforeNumericEntity = 63,// #
    InNamedEntity = 64,
    InNumericEntity = 65,
    InHexEntity = 66
}
export interface Callbacks {
    onattribdata(value: string): void;
    onattribend(quote: string | undefined | null): void;
    onattribname(name: string): void;
    oncdata(data: string): void;
    onclosetag(name: string): void;
    oncomment(data: string): void;
    ondeclaration(content: string): void;
    onend(): void;
    onerror(error: Error, state?: State): void;
    onopentagend(): void;
    onopentagname(name: string): void;
    onprocessinginstruction(instruction: string): void;
    onselfclosingtag(): void;
    ontext(value: string): void;
}
export default class Tokenizer {
    /** The current state the tokenizer is in. */
    _state: State;
    /** The read buffer. */
    private buffer;
    /** The beginning of the section that is currently being read. */
    sectionStart: number;
    /** The index within the buffer that we are currently looking at. */
    _index: number;
    /**
     * Data that has already been processed will be removed from the buffer occasionally.
     * `_bufferOffset` keeps track of how many characters have been removed, to make sure position information is accurate.
     */
    private bufferOffset;
    /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
    private baseState;
    /** For special parsing behavior inside of script and style tags. */
    private special;
    /** Indicates whether the tokenizer has been paused. */
    private running;
    /** Indicates whether the tokenizer has finished running / `.end` has been called. */
    private ended;
    private readonly cbs;
    private readonly xmlMode;
    private readonly decodeEntities;
    constructor(options: {
        xmlMode?: boolean;
        decodeEntities?: boolean;
    } | null, cbs: Callbacks);
    reset(): void;
    write(chunk: string): void;
    end(chunk?: string): void;
    pause(): void;
    resume(): void;
    /**
     * The current index within all of the written data.
     */
    getAbsoluteIndex(): number;
    private stateText;
    /**
     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
     *
     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
     * We allow anything that wouldn't end the tag.
     */
    private isTagStartChar;
    private stateBeforeTagName;
    private stateInTagName;
    private stateBeforeClosingTagName;
    private stateInClosingTagName;
    private stateAfterClosingTagName;
    private stateBeforeAttributeName;
    private stateInSelfClosingTag;
    private stateInAttributeName;
    private stateAfterAttributeName;
    private stateBeforeAttributeValue;
    private handleInAttributeValue;
    private stateInAttributeValueDoubleQuotes;
    private stateInAttributeValueSingleQuotes;
    private stateInAttributeValueNoQuotes;
    private stateBeforeDeclaration;
    private stateInDeclaration;
    private stateInProcessingInstruction;
    private stateBeforeComment;
    private stateInComment;
    private stateInSpecialComment;
    private stateAfterComment1;
    private stateAfterComment2;
    private stateBeforeCdata6;
    private stateInCdata;
    private stateAfterCdata1;
    private stateAfterCdata2;
    private stateBeforeSpecialS;
    private stateBeforeSpecialSEnd;
    private stateBeforeSpecialLast;
    private stateAfterSpecialLast;
    private parseFixedEntity;
    private parseLegacyEntity;
    private stateInNamedEntity;
    private decodeNumericEntity;
    private stateInNumericEntity;
    private stateInHexEntity;
    private cleanup;
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */
    private parse;
    private finish;
    private handleTrailingData;
    private getSection;
    private emitToken;
    private emitPartial;
}
export {};
//# sourceMappingURL=Tokenizer.d.ts.map