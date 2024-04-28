import { ElementType, isTag as isTagRaw } from './ElementType.js';
const nodeTypes = new Map([
    [ElementType.Tag, 1],
    [ElementType.Script, 1],
    [ElementType.Style, 1],
    [ElementType.Directive, 1],
    [ElementType.Text, 3],
    [ElementType.CDATA, 4],
    [ElementType.Comment, 8],
    [ElementType.Root, 9],
]);
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
export class Node {
    /**
     *
     * @param type The type of the node.
     */
    constructor(type) {
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: type
        });
        /** Parent of the node */
        Object.defineProperty(this, "parent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        /** Previous sibling */
        Object.defineProperty(this, "prev", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        /** Next sibling */
        Object.defineProperty(this, "next", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        Object.defineProperty(this, "startIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        Object.defineProperty(this, "endIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
    }
    // Read-only aliases
    get nodeType() {
        return nodeTypes.get(this.type) ?? 1;
    }
    // Read-write aliases for properties
    get parentNode() {
        return this.parent;
    }
    set parentNode(parent) {
        this.parent = parent;
    }
    get previousSibling() {
        return this.prev;
    }
    set previousSibling(prev) {
        this.prev = prev;
    }
    get nextSibling() {
        return this.next;
    }
    set nextSibling(next) {
        this.next = next;
    }
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    cloneNode(recursive = false) {
        return cloneNode(this, recursive);
    }
}
/**
 * A node that contains some data.
 */
export class DataNode extends Node {
    /**
     * @param type The type of the node
     * @param data The content of the data node
     */
    constructor(type, data) {
        super(type);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: data
        });
    }
    get nodeValue() {
        return this.data;
    }
    set nodeValue(data) {
        this.data = data;
    }
}
/**
 * Text within the document.
 */
export class Text extends DataNode {
    constructor(data) {
        super(ElementType.Text, data);
    }
}
/**
 * Comments within the document.
 */
export class Comment extends DataNode {
    constructor(data) {
        super(ElementType.Comment, data);
    }
}
/**
 * Processing instructions, including doc types.
 */
export class ProcessingInstruction extends DataNode {
    constructor(name, data) {
        super(ElementType.Directive, data);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
        Object.defineProperty(this, 'x-name', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'x-publicId', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'x-systemId', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
/**
 * A `Node` that can have children.
 */
export class NodeWithChildren extends Node {
    /**
     * @param type Type of the node.
     * @param children Children of the node. Only certain node types can have children.
     */
    constructor(type, children) {
        super(type);
        Object.defineProperty(this, "children", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: children
        });
    }
    // Aliases
    get firstChild() {
        return this.children[0] ?? null;
    }
    get lastChild() {
        return this.children.length > 0
            ? this.children[this.children.length - 1]
            : null;
    }
    get childNodes() {
        return this.children;
    }
    set childNodes(children) {
        this.children = children;
    }
}
/**
 * The root node of the document.
 */
export class Document extends NodeWithChildren {
    constructor(children) {
        super(ElementType.Root, children);
        Object.defineProperty(this, 'x-mode', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
/**
 * An element within the DOM.
 */
export class Element extends NodeWithChildren {
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    constructor(name, attribs, children = [], type = name === 'script'
        ? ElementType.Script
        : name === 'style'
            ? ElementType.Style
            : ElementType.Tag) {
        super(type, children);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
        Object.defineProperty(this, "attribs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: attribs
        });
        Object.defineProperty(this, 'x-attribsNamespace', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, 'x-attribsPrefix', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    // DOM Level 1 aliases
    get tagName() {
        return this.name;
    }
    set tagName(name) {
        this.name = name;
    }
    get attributes() {
        return Object.keys(this.attribs).map(name => ({
            name,
            value: this.attribs[name],
            namespace: this['x-attribsNamespace']?.[name],
            prefix: this['x-attribsPrefix']?.[name],
        }));
    }
}
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
export function isTag(node) {
    return isTagRaw(node);
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
export function isCDATA(node) {
    return node.type === ElementType.CDATA;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
export function isText(node) {
    return node.type === ElementType.Text;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
export function isComment(node) {
    return node.type === ElementType.Comment;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
export function isDirective(node) {
    return node.type === ElementType.Directive;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
export function isDocument(node) {
    return node.type === ElementType.Root;
}
/**
 * @param node Node to check.
 * @returns `true` if the node is a `NodeWithChildren` (has children), `false` otherwise.
 */
export function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, 'children');
}
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
export function cloneNode(node, recursive = false) {
    let result;
    if (isText(node)) {
        result = new Text(node.data);
    }
    else if (isComment(node)) {
        result = new Comment(node.data);
    }
    else if (isTag(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Element(node.name, { ...node.attribs }, children);
        children.forEach(child => (child.parent = clone));
        if (node['x-attribsNamespace']) {
            clone['x-attribsNamespace'] = { ...node['x-attribsNamespace'] };
        }
        if (node['x-attribsPrefix']) {
            clone['x-attribsPrefix'] = { ...node['x-attribsPrefix'] };
        }
        result = clone;
    }
    else if (isCDATA(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new NodeWithChildren(ElementType.CDATA, children);
        children.forEach(child => (child.parent = clone));
        result = clone;
    }
    else if (isDocument(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Document(children);
        children.forEach(child => (child.parent = clone));
        if (node['x-mode']) {
            clone['x-mode'] = node['x-mode'];
        }
        result = clone;
    }
    else if (isDirective(node)) {
        const instruction = new ProcessingInstruction(node.name, node.data);
        if (node['x-name'] != null) {
            instruction['x-name'] = node['x-name'];
            instruction['x-publicId'] = node['x-publicId'];
            instruction['x-systemId'] = node['x-systemId'];
        }
        result = instruction;
    }
    else {
        throw new Error(`Not implemented yet: ${node.type}`);
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    return result;
}
function cloneChildren(childs) {
    const children = childs.map(child => cloneNode(child, true));
    for (let i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}
