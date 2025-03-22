"use strict";
/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TranslationsManager_instances, _TranslationsManager_c, _TranslationsManager_getTranslationsInner, _TranslationsManager_updateTranslationsQueue, _TranslationsManager_updateTranslations, _TranslationsManager_applyLangPackDifferenceAndSave, _TranslationsManager_applyLangPackDifference;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationsManager = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_types_js_1 = require("../3_types.js");
const translationsManagerUpdates = [
    "updateLangPackTooLong",
    "updateLangPack",
];
class TranslationsManager {
    constructor(c) {
        _TranslationsManager_instances.add(this);
        _TranslationsManager_c.set(this, void 0);
        _TranslationsManager_updateTranslationsQueue.set(this, new _1_utilities_js_1.Queue("updateTranslations"));
        __classPrivateFieldSet(this, _TranslationsManager_c, c, "f");
    }
    canHandleUpdate(update) {
        return _2_tl_js_1.Api.isOneOf(translationsManagerUpdates, update);
    }
    async getTranslations(params) {
        __classPrivateFieldGet(this, _TranslationsManager_c, "f").storage.assertUser("getTranslations");
        const platform = params?.platform ?? __classPrivateFieldGet(this, _TranslationsManager_c, "f").langPack;
        if (!platform) {
            throw new _0_errors_js_1.InputError("No platform specified.");
        }
        const language = params?.language ?? __classPrivateFieldGet(this, _TranslationsManager_c, "f").langCode;
        if (!language) {
            throw new _0_errors_js_1.InputError("No language specified.");
        }
        return await __classPrivateFieldGet(this, _TranslationsManager_instances, "m", _TranslationsManager_getTranslationsInner).call(this, platform, language);
    }
    async handleUpdate(update) {
        if (!__classPrivateFieldGet(this, _TranslationsManager_c, "f").langPack) {
            return null;
        }
        if (_2_tl_js_1.Api.is("updateLangPackTooLong", update)) {
            await __classPrivateFieldGet(this, _TranslationsManager_instances, "m", _TranslationsManager_updateTranslations).call(this, __classPrivateFieldGet(this, _TranslationsManager_c, "f").langPack, update.lang_code);
            const translations = await __classPrivateFieldGet(this, _TranslationsManager_instances, "m", _TranslationsManager_getTranslationsInner).call(this, __classPrivateFieldGet(this, _TranslationsManager_c, "f").langPack, update.lang_code, true);
            return { platform: __classPrivateFieldGet(this, _TranslationsManager_c, "f").langPack, language: update.lang_code, translations };
        }
        else if (_2_tl_js_1.Api.is("updateLangPack", update)) {
            if (!__classPrivateFieldGet(this, _TranslationsManager_c, "f").langCode) {
                return null;
            }
            const translations = await __classPrivateFieldGet(this, _TranslationsManager_instances, "m", _TranslationsManager_applyLangPackDifferenceAndSave).call(this, __classPrivateFieldGet(this, _TranslationsManager_c, "f").langPack, __classPrivateFieldGet(this, _TranslationsManager_c, "f").langCode, update.difference.version, update.difference.from_version, update.difference.strings);
            if (!translations) {
                return null;
            }
            else {
                return { platform: __classPrivateFieldGet(this, _TranslationsManager_c, "f").langPack, language: __classPrivateFieldGet(this, _TranslationsManager_c, "f").langCode, translations };
            }
        }
        return null;
    }
}
exports.TranslationsManager = TranslationsManager;
_TranslationsManager_c = new WeakMap(), _TranslationsManager_updateTranslationsQueue = new WeakMap(), _TranslationsManager_instances = new WeakSet(), _TranslationsManager_getTranslationsInner = async function _TranslationsManager_getTranslationsInner(platform, language, assert = false) {
    const maybeTranslations = await __classPrivateFieldGet(this, _TranslationsManager_c, "f").messageStorage.getTranslations(platform, language);
    if (maybeTranslations != null) {
        return maybeTranslations[1];
    }
    else if (assert) {
        (0, _0_deps_js_1.unreachable)();
    }
    else {
        await __classPrivateFieldGet(this, _TranslationsManager_instances, "m", _TranslationsManager_updateTranslations).call(this, platform, language);
        return await __classPrivateFieldGet(this, _TranslationsManager_instances, "m", _TranslationsManager_getTranslationsInner).call(this, platform, language, true);
    }
}, _TranslationsManager_updateTranslations = async function _TranslationsManager_updateTranslations(platform, language) {
    await new Promise((resolve, reject) => {
        __classPrivateFieldGet(this, _TranslationsManager_updateTranslationsQueue, "f").add(async () => {
            try {
                const maybeTranslations = await __classPrivateFieldGet(this, _TranslationsManager_c, "f").messageStorage.getTranslations(platform, language);
                if (maybeTranslations != null) {
                    const difference = await __classPrivateFieldGet(this, _TranslationsManager_c, "f").invoke({ _: "langpack.getDifference", lang_pack: platform, lang_code: language, from_version: maybeTranslations[0] });
                    const newTranslations = __classPrivateFieldGet(this, _TranslationsManager_instances, "m", _TranslationsManager_applyLangPackDifference).call(this, maybeTranslations[1], difference.strings);
                    await __classPrivateFieldGet(this, _TranslationsManager_c, "f").messageStorage.setTranslations(platform, language, difference.version, newTranslations);
                }
                else {
                    const pack = await __classPrivateFieldGet(this, _TranslationsManager_c, "f").invoke({ _: "langpack.getLangPack", lang_pack: platform, lang_code: language });
                    const version = pack.version;
                    const translations = pack.strings.map(_3_types_js_1.constructTranslation);
                    await __classPrivateFieldGet(this, _TranslationsManager_c, "f").messageStorage.setTranslations(platform, language, version, translations);
                }
                resolve();
            }
            catch (err) {
                reject(err);
            }
        });
    });
}, _TranslationsManager_applyLangPackDifferenceAndSave = async function _TranslationsManager_applyLangPackDifferenceAndSave(platform, language, version, fromVersion, strings) {
    const result = await new Promise((resolve, reject) => {
        __classPrivateFieldGet(this, _TranslationsManager_updateTranslationsQueue, "f").add(async () => {
            try {
                const maybeTranslations = await __classPrivateFieldGet(this, _TranslationsManager_c, "f").messageStorage.getTranslations(platform, language);
                let newTranslations = null;
                if (maybeTranslations) {
                    if (fromVersion != maybeTranslations[0]) {
                        resolve("mustUpdate");
                        return;
                    }
                    newTranslations = __classPrivateFieldGet(this, _TranslationsManager_instances, "m", _TranslationsManager_applyLangPackDifference).call(this, maybeTranslations[1], strings);
                    await __classPrivateFieldGet(this, _TranslationsManager_c, "f").messageStorage.setTranslations(platform, language, version, newTranslations);
                }
                resolve(newTranslations);
            }
            catch (err) {
                reject(err);
            }
        });
    });
    if (result == "mustUpdate") {
        await __classPrivateFieldGet(this, _TranslationsManager_instances, "m", _TranslationsManager_updateTranslations).call(this, platform, language);
        return await __classPrivateFieldGet(this, _TranslationsManager_instances, "m", _TranslationsManager_getTranslationsInner).call(this, platform, language, true);
    }
    else {
        return result;
    }
}, _TranslationsManager_applyLangPackDifference = function _TranslationsManager_applyLangPackDifference(translations, strings) {
    for (const string of strings) {
        if (_2_tl_js_1.Api.is("langPackStringDeleted", string)) {
            translations = translations.filter((v) => v.key != string.key);
        }
        else {
            const newTranslation = (0, _3_types_js_1.constructTranslation)(string);
            const currentTranslation = translations.find((v) => v.key == string.key);
            if (currentTranslation) {
                Object.assign(currentTranslation, newTranslation);
            }
            else {
                translations.push(newTranslation);
            }
        }
    }
    return translations;
};
