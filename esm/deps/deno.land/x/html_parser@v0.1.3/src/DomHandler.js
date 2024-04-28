import { Element, Document, NodeWithChildren, Comment, Text, ProcessingInstruction, } from './Node.js';
import { ElementType } from './ElementType.js';
const reWhitespace = /\s+/g;
// Default options
const defaultOpts = {
    normalizeWhitespace: false,
    withStartIndices: false,
    withEndIndices: false,
};
export class DomHandler {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */
    constructor(callback, options, elementCB) {
        /** The elements of the DOM */
        Object.defineProperty(this, "dom", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        /** The root element for the DOM */
        Object.defineProperty(this, "root", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Document(this.dom)
        });
        /** Called once parsing has completed. */
        Object.defineProperty(this, "callback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Settings for the handler. */
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Callback whenever a tag is closed. */
        Object.defineProperty(this, "elementCB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Indicated whether parsing has been completed. */
        Object.defineProperty(this, "done", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /** Stack of open tags. */
        Object.defineProperty(this, "tagStack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: [this.root]
        });
        /** A data node that is still being written to. */
        Object.defineProperty(this, "lastNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        /** Reference to the parser instance. Used for location information. */
        Object.defineProperty(this, "parser", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === 'function') {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === 'object') {
            options = callback;
            callback = undefined;
        }
        this.callback = callback ?? null;
        this.options = options ?? defaultOpts;
        this.elementCB = elementCB ?? null;
    }
    onparserinit(parser) {
        this.parser = parser;
    }
    // Resets the handler back to starting state
    onreset() {
        this.dom = [];
        this.root = new Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = this.parser ?? null;
    }
    // Signals the handler that parsing is done
    onend() {
        if (this.done)
            return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    }
    onerror(error) {
        this.handleCallback(error);
    }
    onclosetag() {
        this.lastNode = null;
        const elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
            this.elementCB(elem);
    }
    onopentag(name, attribs) {
        const type = this.options.xmlMode ? ElementType.Tag : undefined;
        const element = new Element(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    }
    ontext(data) {
        const { normalizeWhitespace } = this.options;
        const { lastNode } = this;
        if (lastNode && lastNode.type === ElementType.Text) {
            if (normalizeWhitespace) {
                lastNode.data = (lastNode.data + data).replace(reWhitespace, ' ');
            }
            else {
                lastNode.data += data;
            }
        }
        else {
            if (normalizeWhitespace) {
                data = data.replace(reWhitespace, ' ');
            }
            const node = new Text(data);
            this.addNode(node);
            this.lastNode = node;
        }
    }
    oncomment(data) {
        if (this.lastNode && this.lastNode.type === ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        const node = new Comment(data);
        this.addNode(node);
        this.lastNode = node;
    }
    oncommentend() {
        this.lastNode = null;
    }
    oncdatastart() {
        const text = new Text('');
        const node = new NodeWithChildren(ElementType.CDATA, [text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    }
    oncdataend() {
        this.lastNode = null;
    }
    onprocessinginstruction(name, data) {
        const node = new ProcessingInstruction(name, data);
        this.addNode(node);
    }
    handleCallback(error) {
        if (typeof this.callback === 'function') {
            this.callback(error, this.dom);
        }
        else if (error) {
            throw error;
        }
    }
    addNode(node) {
        const parent = this.tagStack[this.tagStack.length - 1];
        const previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    }
}
export default DomHandler;
