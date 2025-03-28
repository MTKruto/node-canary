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
var _StoryManager_instances, _StoryManager_c, _StoryManager_updatesToStory, _StoryManager_togglePinned;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryManager = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_types_js_1 = require("../3_types.js");
const _0_utilities_js_1 = require("./0_utilities.js");
const storyManagerUpdates = [
    "updateStory",
];
class StoryManager {
    constructor(c) {
        _StoryManager_instances.add(this);
        _StoryManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _StoryManager_c, c, "f");
    }
    async createStory(chatId, content, params) {
        __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("createStory");
        let media = null;
        const source = "video" in content ? content.video : "photo" in content ? content.photo : (0, _0_deps_js_1.unreachable)();
        if (typeof source === "string") {
            const fileId = __classPrivateFieldGet(this, _StoryManager_c, "f").messageManager.resolveFileId(source, _3_types_js_1.FileType.Photo);
            if (fileId != null) {
                media = { _: "inputMediaPhoto", id: { ...fileId, _: "inputPhoto" } };
            }
        }
        if (media == null) {
            if (typeof source === "string" && (0, _0_utilities_js_1.isHttpUrl)(source)) {
                throw new _0_errors_js_1.InputError("URL not supported.");
            }
            else {
                const file = await __classPrivateFieldGet(this, _StoryManager_c, "f").fileManager.upload(source, params, null, "video" in content);
                if (_2_tl_js_1.Api.is("inputFileStoryDocument", file)) {
                    (0, _0_deps_js_1.unreachable)();
                }
                const mimeType = (0, _0_deps_js_1.contentType)(file.name.split(".").slice(-1)[0]) ?? "application/octet-stream";
                if ("video" in content) {
                    media = { _: "inputMediaUploadedDocument", file, attributes: [{ _: "documentAttributeFilename", file_name: file.name }, { _: "documentAttributeVideo", w: 720, h: 1280, duration: content.duration }], mime_type: mimeType };
                }
                else {
                    media = { _: "inputMediaUploadedPhoto", file };
                }
            }
        }
        const caption_ = params?.caption;
        const parseResult = caption_ !== undefined ? await __classPrivateFieldGet(this, _StoryManager_c, "f").messageManager.parseText(caption_, { parseMode: params?.parseMode, entities: params?.captionEntities }) : undefined;
        const caption = parseResult === undefined ? undefined : parseResult[0];
        const entities = parseResult === undefined ? undefined : parseResult[1];
        const peer = await __classPrivateFieldGet(this, _StoryManager_c, "f").getInputPeer(chatId);
        const randomId = (0, _1_utilities_js_1.getRandomId)();
        const privacyRules = await (0, _3_types_js_1.storyPrivacyToTlObject)(params?.privacy ?? { everyoneExcept: [] }, __classPrivateFieldGet(this, _StoryManager_c, "f").getEntity);
        const mediaAreas = new Array();
        if (params?.interactiveAreas?.length) {
            for (const area of params.interactiveAreas) {
                mediaAreas.push(await (0, _3_types_js_1.storyInteractiveAreaToTlObject)(area, __classPrivateFieldGet(this, _StoryManager_c, "f").getEntity));
            }
        }
        const updates = await __classPrivateFieldGet(this, _StoryManager_c, "f").invoke({ _: "stories.sendStory", peer, random_id: randomId, media, privacy_rules: privacyRules, caption, entities, noforwards: params?.protectContent ? true : undefined, period: params?.activeFor, pinned: params?.highlight ? true : undefined, media_areas: mediaAreas });
        return await __classPrivateFieldGet(this, _StoryManager_instances, "m", _StoryManager_updatesToStory).call(this, updates);
    }
    async getStories(chatId, storyIds) {
        __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("getStories");
        (0, _0_utilities_js_1.checkArray)(storyIds, _0_utilities_js_1.checkStoryId);
        const peer = await __classPrivateFieldGet(this, _StoryManager_c, "f").getInputPeer(chatId);
        const stories_ = await __classPrivateFieldGet(this, _StoryManager_c, "f").invoke({ _: "stories.getStoriesByID", peer, id: storyIds });
        const stories = new Array();
        for (const story of stories_.stories) {
            stories.push(await (0, _3_types_js_1.constructStory)(_2_tl_js_1.Api.as("storyItem", story), _2_tl_js_1.Api.inputPeerToPeer(peer), __classPrivateFieldGet(this, _StoryManager_c, "f").getEntity));
        }
        return stories;
    }
    async getStory(chatId, storyId) {
        __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("getStory");
        return (await this.getStories(chatId, [storyId]))[0] ?? null;
    }
    async deleteStories(chatId, storyIds) {
        __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("deleteStories");
        const peer = await __classPrivateFieldGet(this, _StoryManager_c, "f").getInputPeer(chatId);
        await __classPrivateFieldGet(this, _StoryManager_c, "f").invoke({ _: "stories.deleteStories", peer, id: storyIds });
    }
    async deleteStory(chatId, storyId) {
        __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("deleteStory");
        await this.deleteStories(chatId, [storyId]);
    }
    async addStoriesToHighlights(chatId, storyIds) {
        __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("addStoriesToHighlights");
        await __classPrivateFieldGet(this, _StoryManager_instances, "m", _StoryManager_togglePinned).call(this, chatId, storyIds, true);
    }
    async addStoryToHighlights(chatId, storyId) {
        __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("addStoryToHighlights");
        await this.addStoriesToHighlights(chatId, [storyId]);
    }
    async removeStoriesFromHighlights(chatId, storyIds) {
        __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("removeStoriesFromHighlights");
        await __classPrivateFieldGet(this, _StoryManager_instances, "m", _StoryManager_togglePinned).call(this, chatId, storyIds, false);
    }
    async removeStoryFromHighlights(chatId, storyId) {
        __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("removeStoryFromHighlights");
        await this.removeStoriesFromHighlights(chatId, [storyId]);
    }
    canHandleUpdate(update) {
        return _2_tl_js_1.Api.isOneOf(storyManagerUpdates, update);
    }
    async handleUpdate(update) {
        if (_2_tl_js_1.Api.is("storyItemDeleted", update.story)) {
            const chatId = _2_tl_js_1.Api.peerToChatId(update.peer);
            const storyId = update.story.id;
            return { deletedStory: { chatId, storyId } };
        }
        else if (_2_tl_js_1.Api.is("storyItem", update.story)) {
            const story = await (0, _3_types_js_1.constructStory)(update.story, update.peer, __classPrivateFieldGet(this, _StoryManager_c, "f").getEntity);
            return { story };
        }
        else {
            return null;
        }
    }
}
exports.StoryManager = StoryManager;
_StoryManager_c = new WeakMap(), _StoryManager_instances = new WeakSet(), _StoryManager_updatesToStory = async function _StoryManager_updatesToStory(updates) {
    if (_2_tl_js_1.Api.is("updates", updates)) {
        const updateStory = updates.updates.find((v) => _2_tl_js_1.Api.is("updateStory", v));
        if (updateStory && _2_tl_js_1.Api.is("storyItem", updateStory.story)) {
            return await (0, _3_types_js_1.constructStory)(updateStory.story, updateStory.peer, __classPrivateFieldGet(this, _StoryManager_c, "f").getEntity);
        }
    }
    (0, _0_deps_js_1.unreachable)();
}, _StoryManager_togglePinned = async function _StoryManager_togglePinned(chatId, storyIds, pinned) {
    (0, _0_utilities_js_1.checkArray)(storyIds, _0_utilities_js_1.checkStoryId);
    const peer = await __classPrivateFieldGet(this, _StoryManager_c, "f").getInputPeer(chatId);
    await __classPrivateFieldGet(this, _StoryManager_c, "f").invoke({ _: "stories.togglePinned", peer, id: storyIds, pinned });
};
