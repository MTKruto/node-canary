"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.functions = exports.types = exports.TLError = void 0;
var _0_tl_raw_reader_js_1 = require("./tl/0_tl_raw_reader.js");
Object.defineProperty(exports, "TLError", { enumerable: true, get: function () { return _0_tl_raw_reader_js_1.TLError; } });
__exportStar(require("./tl/1_tl_object.js"), exports);
var _2_types_js_1 = require("./tl/2_types.js");
Object.defineProperty(exports, "types", { enumerable: true, get: function () { return _2_types_js_1.types; } });
var _3_functions_js_1 = require("./tl/3_functions.js");
Object.defineProperty(exports, "functions", { enumerable: true, get: function () { return _3_functions_js_1.functions; } });
__exportStar(require("./tl/4_tl_reader.js"), exports);
__exportStar(require("./tl/3_utilities.js"), exports);
__exportStar(require("./tl/5_tl_writer.js"), exports);
__exportStar(require("./tl/6_rpc_result.js"), exports);
__exportStar(require("./tl/7_message.js"), exports);
__exportStar(require("./tl/8_message_container.js"), exports);
