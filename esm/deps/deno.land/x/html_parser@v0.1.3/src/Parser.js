import Tokenizer from './Tokenizer.js';
const formTags = new Set([
    'input',
    'option',
    'optgroup',
    'select',
    'button',
    'datalist',
    'textarea',
]);
const pTag = new Set(['p']);
const openImpliesClose = {
    tr: new Set(['tr', 'th', 'td']),
    th: new Set(['th']),
    td: new Set(['thead', 'th', 'td']),
    body: new Set(['head', 'link', 'script']),
    li: new Set(['li']),
    p: pTag,
    h1: pTag,
    h2: pTag,
    h3: pTag,
    h4: pTag,
    h5: pTag,
    h6: pTag,
    select: formTags,
    input: formTags,
    output: formTags,
    button: formTags,
    datalist: formTags,
    textarea: formTags,
    option: new Set(['option']),
    optgroup: new Set(['optgroup', 'option']),
    dd: new Set(['dt', 'dd']),
    dt: new Set(['dt', 'dd']),
    address: pTag,
    article: pTag,
    aside: pTag,
    blockquote: pTag,
    details: pTag,
    div: pTag,
    dl: pTag,
    fieldset: pTag,
    figcaption: pTag,
    figure: pTag,
    footer: pTag,
    form: pTag,
    header: pTag,
    hr: pTag,
    main: pTag,
    nav: pTag,
    ol: pTag,
    pre: pTag,
    section: pTag,
    table: pTag,
    ul: pTag,
    rt: new Set(['rt', 'rp']),
    rp: new Set(['rt', 'rp']),
    tbody: new Set(['thead', 'tbody']),
    tfoot: new Set(['thead', 'tbody']),
};
const voidElements = new Set([
    'area',
    'base',
    'basefont',
    'br',
    'col',
    'command',
    'embed',
    'frame',
    'hr',
    'img',
    'input',
    'isindex',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
]);
const foreignContextElements = new Set(['math', 'svg']);
const htmlIntegrationElements = new Set([
    'mi',
    'mo',
    'mn',
    'ms',
    'mtext',
    'annotation-xml',
    'foreignObject',
    'desc',
    'title',
]);
const reNameEnd = /\s|\//;
export class Parser {
    constructor(cbs, options = {}) {
        /** The start index of the last event. */
        Object.defineProperty(this, "startIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /** The end index of the last event. */
        Object.defineProperty(this, "endIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "tagname", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        Object.defineProperty(this, "attribname", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        Object.defineProperty(this, "attribvalue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        Object.defineProperty(this, "attribs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "stack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "foreignContext", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "cbs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lowerCaseTagNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lowerCaseAttributeNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tokenizer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.options = options;
        this.cbs = cbs ?? {};
        this.lowerCaseTagNames = options.lowerCaseTags ?? !options.xmlMode;
        this.lowerCaseAttributeNames =
            options.lowerCaseAttributeNames ?? !options.xmlMode;
        this.tokenizer = new (options.Tokenizer ?? Tokenizer)(this.options, this);
        this.cbs.onparserinit?.(this);
    }
    updatePosition(initialOffset) {
        if (this.endIndex === null) {
            if (this.tokenizer.sectionStart <= initialOffset) {
                this.startIndex = 0;
            }
            else {
                this.startIndex = this.tokenizer.sectionStart - initialOffset;
            }
        }
        else {
            this.startIndex = this.endIndex + 1;
        }
        this.endIndex = this.tokenizer.getAbsoluteIndex();
    }
    // Tokenizer event handlers
    ontext(data) {
        this.updatePosition(1);
        this.endIndex--;
        this.cbs.ontext?.(data);
    }
    isVoidElement(name) {
        return !this.options.xmlMode && voidElements.has(name);
    }
    onopentagname(name) {
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        this.tagname = name;
        if (!this.options.xmlMode &&
            Object.prototype.hasOwnProperty.call(openImpliesClose, name)) {
            let el;
            while (this.stack.length > 0 &&
                openImpliesClose[name]?.has((el = this.stack[this.stack.length - 1]))) {
                this.onclosetag(el);
            }
        }
        if (!this.isVoidElement(name)) {
            this.stack.push(name);
            if (foreignContextElements.has(name)) {
                this.foreignContext.push(true);
            }
            else if (htmlIntegrationElements.has(name)) {
                this.foreignContext.push(false);
            }
        }
        this.cbs.onopentagname?.(name);
        if (this.cbs.onopentag)
            this.attribs = {};
    }
    onopentagend() {
        this.updatePosition(1);
        if (this.attribs) {
            this.cbs.onopentag?.(this.tagname, this.attribs);
            this.attribs = null;
        }
        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
            this.cbs.onclosetag(this.tagname);
        }
        this.tagname = '';
    }
    onclosetag(name) {
        this.updatePosition(1);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        if (foreignContextElements.has(name) ||
            htmlIntegrationElements.has(name)) {
            this.foreignContext.pop();
        }
        if (this.stack.length && !this.isVoidElement(name)) {
            let pos = this.stack.lastIndexOf(name);
            if (pos !== -1) {
                if (this.cbs.onclosetag) {
                    pos = this.stack.length - pos;
                    while (pos--) {
                        // We know the stack has sufficient elements.
                        this.cbs.onclosetag(this.stack.pop());
                    }
                }
                else
                    this.stack.length = pos;
            }
            else if (name === 'p' && !this.options.xmlMode) {
                this.onopentagname(name);
                this.closeCurrentTag();
            }
        }
        else if (!this.options.xmlMode && (name === 'br' || name === 'p')) {
            this.onopentagname(name);
            this.closeCurrentTag();
        }
    }
    onselfclosingtag() {
        if (this.options.xmlMode ||
            this.options.recognizeSelfClosing ||
            this.foreignContext[this.foreignContext.length - 1]) {
            this.closeCurrentTag();
        }
        else {
            this.onopentagend();
        }
    }
    closeCurrentTag() {
        const name = this.tagname;
        this.onopentagend();
        /*
         * Self-closing tags will be on the top of the stack
         * (cheaper check than in onclosetag)
         */
        if (this.stack[this.stack.length - 1] === name) {
            this.cbs.onclosetag?.(name);
            this.stack.pop();
        }
    }
    onattribname(name) {
        if (this.lowerCaseAttributeNames) {
            name = name.toLowerCase();
        }
        this.attribname = name;
    }
    onattribdata(value) {
        this.attribvalue += value;
    }
    onattribend(quote) {
        this.cbs.onattribute?.(this.attribname, this.attribvalue, quote);
        if (this.attribs &&
            !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribname = '';
        this.attribvalue = '';
    }
    getInstructionName(value) {
        const idx = value.search(reNameEnd);
        let name = idx < 0 ? value : value.substr(0, idx);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        return name;
    }
    ondeclaration(value) {
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`!${name}`, `!${value}`);
        }
    }
    onprocessinginstruction(value) {
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`?${name}`, `?${value}`);
        }
    }
    oncomment(value) {
        this.updatePosition(4);
        this.cbs.oncomment?.(value);
        this.cbs.oncommentend?.();
    }
    oncdata(value) {
        this.updatePosition(1);
        if (this.options.xmlMode || this.options.recognizeCDATA) {
            this.cbs.oncdatastart?.();
            this.cbs.ontext?.(value);
            this.cbs.oncdataend?.();
        }
        else {
            this.oncomment(`[CDATA[${value}]]`);
        }
    }
    onerror(err) {
        this.cbs.onerror?.(err);
    }
    onend() {
        if (this.cbs.onclosetag) {
            for (let i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i]))
                ;
        }
        this.cbs.onend?.();
    }
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */
    reset() {
        this.cbs.onreset?.();
        this.tokenizer.reset();
        this.tagname = '';
        this.attribname = '';
        this.attribs = null;
        this.stack = [];
        this.cbs.onparserinit?.(this);
    }
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     *
     * @param data Document to parse.
     */
    parseComplete(data) {
        this.reset();
        this.end(data);
    }
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */
    write(chunk) {
        this.tokenizer.write(chunk);
    }
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */
    end(chunk) {
        this.tokenizer.end(chunk);
    }
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */
    pause() {
        this.tokenizer.pause();
    }
    /**
     * Resumes parsing after `pause` was called.
     */
    resume() {
        this.tokenizer.resume();
    }
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */
    parseChunk(chunk) {
        this.write(chunk);
    }
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */
    done(chunk) {
        this.end(chunk);
    }
}
