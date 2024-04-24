"use strict";
/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = exports.SYSTEM_VERSION = exports.SYSTEM_LANG_CODE = exports.LAYER = exports.LANG_PACK = exports.LANG_CODE = exports.INITIAL_DC = exports.DEVICE_MODEL = exports.APP_VERSION = exports.checkPassword = exports.setLogVerbosity = exports.setLoggingProvider = exports.getRandomId = exports.getColorName = exports.getColorFromPeerId = void 0;
__exportStar(require("./0_errors.js"), exports);
var _1_utilities_js_1 = require("./1_utilities.js");
Object.defineProperty(exports, "getColorFromPeerId", { enumerable: true, get: function () { return _1_utilities_js_1.getColorFromPeerId; } });
Object.defineProperty(exports, "getColorName", { enumerable: true, get: function () { return _1_utilities_js_1.getColorName; } });
Object.defineProperty(exports, "getRandomId", { enumerable: true, get: function () { return _1_utilities_js_1.getRandomId; } });
Object.defineProperty(exports, "setLoggingProvider", { enumerable: true, get: function () { return _1_utilities_js_1.setLoggingProvider; } });
Object.defineProperty(exports, "setLogVerbosity", { enumerable: true, get: function () { return _1_utilities_js_1.setLogVerbosity; } });
var _0_password_js_1 = require("./client/0_password.js");
Object.defineProperty(exports, "checkPassword", { enumerable: true, get: function () { return _0_password_js_1.checkPassword; } });
__exportStar(require("./2_connection.js"), exports);
__exportStar(require("./2_storage.js"), exports);
__exportStar(require("./3_transport.js"), exports);
__exportStar(require("./2_tl.js"), exports);
__exportStar(require("./3_types.js"), exports);
var _4_constants_js_1 = require("./4_constants.js");
Object.defineProperty(exports, "APP_VERSION", { enumerable: true, get: function () { return _4_constants_js_1.APP_VERSION; } });
Object.defineProperty(exports, "DEVICE_MODEL", { enumerable: true, get: function () { return _4_constants_js_1.DEVICE_MODEL; } });
Object.defineProperty(exports, "INITIAL_DC", { enumerable: true, get: function () { return _4_constants_js_1.INITIAL_DC; } });
Object.defineProperty(exports, "LANG_CODE", { enumerable: true, get: function () { return _4_constants_js_1.LANG_CODE; } });
Object.defineProperty(exports, "LANG_PACK", { enumerable: true, get: function () { return _4_constants_js_1.LANG_PACK; } });
Object.defineProperty(exports, "LAYER", { enumerable: true, get: function () { return _4_constants_js_1.LAYER; } });
Object.defineProperty(exports, "SYSTEM_LANG_CODE", { enumerable: true, get: function () { return _4_constants_js_1.SYSTEM_LANG_CODE; } });
Object.defineProperty(exports, "SYSTEM_VERSION", { enumerable: true, get: function () { return _4_constants_js_1.SYSTEM_VERSION; } });
exports.errors = __importStar(require("./4_errors.js"));
__exportStar(require("./5_client.js"), exports);
