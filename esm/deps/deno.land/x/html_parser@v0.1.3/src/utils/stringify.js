import { isTag, isCDATA, isText, hasChildren, isComment, } from '../Node.js';
import renderHTML from '../DomSerializer.js';
import { ElementType } from '../ElementType.js';
/**
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @deprecated Use the `dom-serializer` module directly.
 * @returns `node`'s outer HTML.
 */
export function getOuterHTML(node, options) {
    return renderHTML(node, options);
}
/**
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @deprecated Use the `dom-serializer` module directly.
 * @returns `node`'s inner HTML.
 */
export function getInnerHTML(node, options) {
    return hasChildren(node)
        ? node.children.map(node => getOuterHTML(node, options)).join('')
        : '';
}
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags.
 *
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */
export function getText(node) {
    if (Array.isArray(node))
        return node.map(getText).join('');
    if (isTag(node))
        return node.name === 'br' ? '\n' : getText(node.children);
    if (isCDATA(node))
        return getText(node.children);
    if (isText(node))
        return node.data;
    return '';
}
/**
 * Get a node's text content.
 *
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */
export function textContent(node) {
    if (Array.isArray(node))
        return node.map(textContent).join('');
    if (hasChildren(node) && !isComment(node)) {
        return textContent(node.children);
    }
    if (isText(node))
        return node.data;
    return '';
}
/**
 * Get a node's inner text.
 *
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */
export function innerText(node) {
    if (Array.isArray(node))
        return node.map(innerText).join('');
    if (hasChildren(node) && (node.type === ElementType.Tag || isCDATA(node))) {
        return innerText(node.children);
    }
    if (isText(node))
        return node.data;
    return '';
}
