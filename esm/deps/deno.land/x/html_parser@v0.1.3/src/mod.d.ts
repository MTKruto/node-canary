import { Parser, ParserOptions } from './Parser.js';
export { Parser };
export type { ParserOptions };
import { Node, Element, Document } from './Node.js';
import { DomHandler, DomHandlerOptions } from './DomHandler.js';
export { DomHandler };
export type { DomHandlerOptions };
type Options = ParserOptions & DomHandlerOptions;
/**
 * Parses the data, returns the resulting document.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 */
export declare function parseDocument(data: string, options?: Options): Document;
/**
 * Parses data, returns an array of the root nodes.
 *
 * Note that the root nodes still have a `Document` node as their parent.
 * Use `parseDocument` to get the `Document` node instead.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 * @deprecated Use `parseDocument` instead.
 */
export declare function parseDOM(data: string, options?: Options): Node[];
/**
 * Creates a parser instance, with an attached DOM handler.
 *
 * @param cb A callback that will be called once parsing has been completed.
 * @param options Optional options for the parser and DOM builder.
 * @param elementCb An optional callback that will be called every time a tag has been completed inside of the DOM.
 */
export declare function createDomStream(cb: (error: Error | null, dom: Node[]) => void, options?: Options, elementCb?: (element: Element) => void): Parser;
export { default as Tokenizer } from './Tokenizer.js';
export type { Callbacks as TokenizerCallbacks } from './Tokenizer.js';
import * as ElementType from './ElementType.js';
export { ElementType };
export * from './FeedHandler.js';
export * as DomUtils from './utils/mod.js';
export { DomHandler as DefaultHandler };
export { FeedHandler as RssHandler } from './FeedHandler.js';
//# sourceMappingURL=mod.d.ts.map