import { Parser } from "../0_deps.js";
import { InputError } from "../0_errors.js";
export function parseHtml(html) {
    html = html.trim();
    let text = "";
    const entities = new Array();
    const stack = new Array();
    const parser = new Parser({
        onopentag(name, attribs) {
            switch (name) {
                case "b":
                case "strong":
                    stack.push({ type: "bold", offset: text.length, length: 0 });
                    break;
                case "em":
                case "i":
                    stack.push({ type: "italic", offset: text.length, length: 0 });
                    break;
                case "code":
                    stack.push({ type: "code", offset: text.length, length: 0 });
                    break;
                case "pre": {
                    const language = attribs.language ?? "";
                    stack.push({ type: "pre", offset: text.length, length: 0, language });
                    break;
                }
                case "a": {
                    const url = attribs.href;
                    if (!url) {
                        throw new InputError("Missing attribute: href");
                    }
                    stack.push({ type: "textLink", offset: text.length, length: 0, url });
                    break;
                }
                case "ins":
                case "u":
                    stack.push({ type: "underline", offset: text.length, length: 0 });
                    break;
                case "del":
                case "strike":
                    stack.push({ type: "strikethrough", offset: text.length, length: 0 });
                    break;
                case "span":
                    if (attribs.class != "tg-spoiler") {
                        throw new InputError('The class attribute must be "tg-spoiler."');
                    }
                // falls through
                case "tg-spoiler":
                    stack.push({ type: "spoiler", offset: text.length, length: 0 });
                    break;
                case "tg-emoji":
                    if (!attribs["emoji-id"]) {
                        throw new InputError("Missing attribute: emoji-id");
                    }
                    stack.push({ type: "spoiler", offset: text.length, length: 0 });
                    break;
                case "blockquote":
                    stack.push({ type: "blockquote", offset: text.length, length: 0 });
            }
        },
        ontext(data) {
            if (!text.length) {
                data = data.trimStart();
            }
            text += data;
            for (const item of stack) {
                item.length += data.length;
            }
        },
        onclosetag() {
            const lastItem = stack.pop();
            if (lastItem) {
                entities.push(lastItem);
            }
        },
    });
    parser.write(html);
    parser.end();
    return [text, entities];
}
