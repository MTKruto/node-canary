import DomHandler from './DomHandler.js';
import * as DomUtils from './utils/mod.js';
import { Parser } from './Parser.js';
var FeedItemMediaMedium;
(function (FeedItemMediaMedium) {
    FeedItemMediaMedium[FeedItemMediaMedium["image"] = 0] = "image";
    FeedItemMediaMedium[FeedItemMediaMedium["audio"] = 1] = "audio";
    FeedItemMediaMedium[FeedItemMediaMedium["video"] = 2] = "video";
    FeedItemMediaMedium[FeedItemMediaMedium["document"] = 3] = "document";
    FeedItemMediaMedium[FeedItemMediaMedium["executable"] = 4] = "executable";
})(FeedItemMediaMedium || (FeedItemMediaMedium = {}));
var FeedItemMediaExpression;
(function (FeedItemMediaExpression) {
    FeedItemMediaExpression[FeedItemMediaExpression["sample"] = 0] = "sample";
    FeedItemMediaExpression[FeedItemMediaExpression["full"] = 1] = "full";
    FeedItemMediaExpression[FeedItemMediaExpression["nonstop"] = 2] = "nonstop";
})(FeedItemMediaExpression || (FeedItemMediaExpression = {}));
// TODO: Consume data as it is coming in
export class FeedHandler extends DomHandler {
    /**
     *
     * @param callback
     * @param options
     */
    constructor(callback, options) {
        if (typeof callback === 'object') {
            callback = undefined;
            options = callback;
        }
        super(callback, options);
        Object.defineProperty(this, "feed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    onend() {
        const feedRoot = getOneElement(isValidFeed, this.dom);
        if (!feedRoot) {
            this.handleCallback(new Error("couldn't find root of feed"));
            return;
        }
        const feed = {};
        if (feedRoot.name === 'feed') {
            const childs = feedRoot.children;
            feed.type = 'atom';
            addConditionally(feed, 'id', 'id', childs);
            addConditionally(feed, 'title', 'title', childs);
            const href = getAttribute('href', getOneElement('link', childs));
            if (href) {
                feed.link = href;
            }
            addConditionally(feed, 'description', 'subtitle', childs);
            const updated = fetch('updated', childs);
            if (updated) {
                feed.updated = new Date(updated);
            }
            addConditionally(feed, 'author', 'email', childs, true);
            feed.items = getElements('entry', childs).map(item => {
                const entry = {};
                const { children } = item;
                addConditionally(entry, 'id', 'id', children);
                addConditionally(entry, 'title', 'title', children);
                const href = getAttribute('href', getOneElement('link', children));
                if (href) {
                    entry.link = href;
                }
                const description = fetch('summary', children) || fetch('content', children);
                if (description) {
                    entry.description = description;
                }
                const pubDate = fetch('updated', children);
                if (pubDate) {
                    entry.pubDate = new Date(pubDate);
                }
                entry.media = getMediaElements(children);
                return entry;
            });
        }
        else {
            const childs = getOneElement('channel', feedRoot.children)?.children ?? [];
            feed.type = feedRoot.name.substr(0, 3);
            feed.id = '';
            addConditionally(feed, 'title', 'title', childs);
            addConditionally(feed, 'link', 'link', childs);
            addConditionally(feed, 'description', 'description', childs);
            const updated = fetch('lastBuildDate', childs);
            if (updated) {
                feed.updated = new Date(updated);
            }
            addConditionally(feed, 'author', 'managingEditor', childs, true);
            feed.items = getElements('item', feedRoot.children).map((item) => {
                const entry = {};
                const { children } = item;
                addConditionally(entry, 'id', 'guid', children);
                addConditionally(entry, 'title', 'title', children);
                addConditionally(entry, 'link', 'link', children);
                addConditionally(entry, 'description', 'description', children);
                const pubDate = fetch('pubDate', children);
                if (pubDate)
                    entry.pubDate = new Date(pubDate);
                entry.media = getMediaElements(children);
                return entry;
            });
        }
        this.feed = feed;
        this.handleCallback(null);
    }
}
function getMediaElements(where) {
    return getElements('media:content', where).map(elem => {
        const media = {
            medium: elem.attribs.medium,
            isDefault: !!elem.attribs.isDefault,
        };
        if (elem.attribs.url) {
            media.url = elem.attribs.url;
        }
        if (elem.attribs.fileSize) {
            media.fileSize = parseInt(elem.attribs.fileSize, 10);
        }
        if (elem.attribs.type) {
            media.type = elem.attribs.type;
        }
        if (elem.attribs.expression) {
            media.expression = elem.attribs
                .expression;
        }
        if (elem.attribs.bitrate) {
            media.bitrate = parseInt(elem.attribs.bitrate, 10);
        }
        if (elem.attribs.framerate) {
            media.framerate = parseInt(elem.attribs.framerate, 10);
        }
        if (elem.attribs.samplingrate) {
            media.samplingrate = parseInt(elem.attribs.samplingrate, 10);
        }
        if (elem.attribs.channels) {
            media.channels = parseInt(elem.attribs.channels, 10);
        }
        if (elem.attribs.duration) {
            media.duration = parseInt(elem.attribs.duration, 10);
        }
        if (elem.attribs.height) {
            media.height = parseInt(elem.attribs.height, 10);
        }
        if (elem.attribs.width) {
            media.width = parseInt(elem.attribs.width, 10);
        }
        if (elem.attribs.lang) {
            media.lang = elem.attribs.lang;
        }
        return media;
    });
}
function getElements(tagName, where) {
    return DomUtils.getElementsByTagName(tagName, where, true);
}
function getOneElement(tagName, node) {
    return DomUtils.getElementsByTagName(tagName, node, true, 1)[0];
}
function fetch(tagName, where, recurse = false) {
    return DomUtils.getText(DomUtils.getElementsByTagName(tagName, where, recurse, 1)).trim();
}
function getAttribute(name, elem) {
    if (!elem) {
        return null;
    }
    const { attribs } = elem;
    return attribs[name];
}
function addConditionally(obj, prop, what, where, recurse = false) {
    const tmp = fetch(what, where, recurse);
    if (tmp)
        obj[prop] = tmp;
}
function isValidFeed(value) {
    return value === 'rss' || value === 'feed' || value === 'rdf:RDF';
}
/**
 * Parse a feed.
 *
 * @param feed The feed that should be parsed, as a string.
 * @param options Optionally, options for parsing. When using this option, you should set `xmlMode` to `true`.
 */
export function parseFeed(feed, options = { xmlMode: true }) {
    const handler = new FeedHandler(options);
    new Parser(handler, options).end(feed);
    return handler.feed;
}
