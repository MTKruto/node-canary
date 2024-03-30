"use strict";
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
class StoryManager {
    constructor(c) {
        _StoryManager_instances.add(this);
        _StoryManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _StoryManager_c, c, "f");
    }
    async createStory(chatId, content, params) {
        await __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("createStory");
        let media = null;
        const source = "video" in content ? content.video : "photo" in content ? content.photo : (0, _1_utilities_js_1.UNREACHABLE)();
        if (typeof source === "string") {
            const fileId = __classPrivateFieldGet(this, _StoryManager_c, "f").messageManager.resolveFileId(source, _3_types_js_1.FileType.Photo);
            if (fileId != null) {
                media = new _2_tl_js_1.types.InputMediaPhoto({
                    id: new _2_tl_js_1.types.InputPhoto(fileId),
                });
            }
        }
        if (media == null) {
            if (typeof source === "string" && (0, _0_utilities_js_1.isHttpUrl)(source)) {
                throw new _0_errors_js_1.InputError("URL not supported.");
            }
            else {
                const [contents, fileName_] = await (0, _0_utilities_js_1.getFileContents)(source);
                const fileName = params?.fileName ?? fileName_;
                const mimeType = (0, _0_deps_js_1.contentType)(fileName.split(".").slice(-1)[0]) ?? "application/octet-stream";
                const file = await __classPrivateFieldGet(this, _StoryManager_c, "f").fileManager.upload(contents, { fileName, chunkSize: params?.chunkSize, signal: params?.signal });
                if ("video" in content) {
                    media = new _2_tl_js_1.types.InputMediaUploadedDocument({
                        file,
                        attributes: [new _2_tl_js_1.types.DocumentAttributeFilename({ file_name: fileName }), new _2_tl_js_1.types.DocumentAttributeVideo({ w: 720, h: 1280, duration: content.duration })],
                        mime_type: mimeType,
                    });
                }
                else {
                    media = new _2_tl_js_1.types.InputMediaUploadedPhoto({ file });
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
        const updates = await __classPrivateFieldGet(this, _StoryManager_c, "f").api.stories.sendStory({
            peer,
            random_id: randomId,
            media,
            privacy_rules: privacyRules,
            caption,
            entities,
            noforwards: params?.protectContent ? true : undefined,
            period: params?.activeFor,
            pinned: params?.highlight ? true : undefined,
            media_areas: mediaAreas,
        });
        return await __classPrivateFieldGet(this, _StoryManager_instances, "m", _StoryManager_updatesToStory).call(this, updates);
    }
    async getStories(chatId, storyIds) {
        await __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("getStories");
        const peer = await __classPrivateFieldGet(this, _StoryManager_c, "f").getInputPeer(chatId);
        const stories_ = await __classPrivateFieldGet(this, _StoryManager_c, "f").api.stories.getStoriesByID({ peer, id: storyIds });
        const stories = new Array();
        for (const story of stories_.stories) {
            stories.push(await (0, _3_types_js_1.constructStory)(story[_2_tl_js_1.as](_2_tl_js_1.types.StoryItem), (0, _2_tl_js_1.inputPeerToPeer)(peer), __classPrivateFieldGet(this, _StoryManager_c, "f").getEntity));
        }
        return stories;
    }
    async getStory(chatId, storyId) {
        await __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("getStory");
        return await this.getStories(chatId, [storyId]).then((v) => v[0] ?? null);
    }
    async deleteStories(chatId, storyIds) {
        await __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("deleteStories");
        const peer = await __classPrivateFieldGet(this, _StoryManager_c, "f").getInputPeer(chatId);
        await __classPrivateFieldGet(this, _StoryManager_c, "f").api.stories.deleteStories({ peer, id: storyIds });
    }
    async deleteStory(chatId, storyId) {
        await __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("deleteStory");
        await this.deleteStories(chatId, [storyId]);
    }
    async addStoriesToHighlights(chatId, storyIds) {
        await __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("addStoriesToHighlights");
        await __classPrivateFieldGet(this, _StoryManager_instances, "m", _StoryManager_togglePinned).call(this, chatId, storyIds, true);
    }
    async addStoryToHighlights(chatId, storyId) {
        await __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("addStoryToHighlights");
        await this.addStoriesToHighlights(chatId, [storyId]);
    }
    async removeStoriesFromHighlights(chatId, storyIds) {
        await __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("removeStoriesFromHighlights");
        await __classPrivateFieldGet(this, _StoryManager_instances, "m", _StoryManager_togglePinned).call(this, chatId, storyIds, false);
    }
    async removeStoryFromHighlights(chatId, storyId) {
        await __classPrivateFieldGet(this, _StoryManager_c, "f").storage.assertUser("removeStoryFromHighlights");
        await this.removeStoriesFromHighlights(chatId, [storyId]);
    }
    static canHandleUpdate(update) {
        return update instanceof _2_tl_js_1.types.UpdateStory;
    }
    async handleUpdate(update) {
        if (update.story instanceof _2_tl_js_1.types.StoryItemDeleted) {
            const chatId = (0, _2_tl_js_1.peerToChatId)(update.peer);
            const storyId = update.story.id;
            return { deletedStory: { chatId, storyId } };
        }
        else if (update.story instanceof _2_tl_js_1.types.StoryItem) {
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
    if (updates instanceof _2_tl_js_1.types.Updates) {
        const updateStory = updates.updates.find((v) => v instanceof _2_tl_js_1.types.UpdateStory);
        if (updateStory && updateStory.story instanceof _2_tl_js_1.types.StoryItem) {
            return await (0, _3_types_js_1.constructStory)(updateStory.story, updateStory.peer, __classPrivateFieldGet(this, _StoryManager_c, "f").getEntity);
        }
    }
    (0, _1_utilities_js_1.UNREACHABLE)();
}, _StoryManager_togglePinned = async function _StoryManager_togglePinned(chatId, storyIds, pinned) {
    const peer = await __classPrivateFieldGet(this, _StoryManager_c, "f").getInputPeer(chatId);
    await __classPrivateFieldGet(this, _StoryManager_c, "f").api.stories.togglePinned({ peer, id: storyIds, pinned });
};
