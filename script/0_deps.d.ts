export * from "./deps/deno.land/std@0.221.0/assert/mod.js";
export * as path from "./deps/deno.land/std@0.221.0/path/mod.js";
export { decodeBase64, encodeBase64 } from "./deps/deno.land/std@0.221.0/encoding/base64.js";
import { contentType as contentType_ } from "./deps/deno.land/std@0.221.0/media_types/content_type.js";
export declare const contentType: typeof contentType_;
export declare function extension(mimeType: string): string;
export { ctr256, ige256Decrypt, ige256Encrypt, init as initTgCrypto } from "./deps/deno.land/x/tgcrypto@0.4.0/mod.js";
export { gunzip, gzip } from "./deps/raw.githubusercontent.com/MTKruto/compress/main/mod.js";
export { Parser } from "./deps/deno.land/x/html_parser@v0.1.3/src/mod.js";
