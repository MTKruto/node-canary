// connection/1_connection_tcp.ts must be updated too when updating std.
export * from "./deps/deno.land/std@0.221.0/assert/mod.js";
export * as path from "./deps/deno.land/std@0.221.0/path/mod.js";
export { decodeBase64, encodeBase64 } from "./deps/deno.land/std@0.221.0/encoding/base64.js";
import { contentType as contentType_ } from "./deps/deno.land/std@0.221.0/media_types/content_type.js";
export const contentType = (extentionOrType) => {
    if (extentionOrType == "tgs") {
        return "application/x-tgsticker";
    }
    else {
        return contentType_(extentionOrType);
    }
};
import { extension as extension_ } from "./deps/deno.land/std@0.221.0/media_types/extension.js";
export function extension(mimeType) {
    if (mimeType == "application/x-tgsticker") {
        return "tgs";
    }
    else {
        return extension_(mimeType) || "unknown";
    }
}
export { ctr256, factorize, ige256Decrypt, ige256Encrypt, init as initTgCrypto } from "./deps/deno.land/x/tgcrypto@0.3.3/mod.js";
export { gunzip, gzip } from "./deps/raw.githubusercontent.com/MTKruto/compress/main/mod.js";
export { Parser } from "./deps/deno.land/x/html_parser@v0.1.3/src/mod.js";
