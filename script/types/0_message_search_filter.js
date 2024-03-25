"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageSearchFilterToTlObject = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
function messageSearchFilterToTlObject(filter) {
    switch (filter) {
        case "empty":
            return new _2_tl_js_1.types.InputMessagesFilterEmpty();
        case "animations":
            return new _2_tl_js_1.types.InputMessagesFilterGif();
        case "audios":
            return new _2_tl_js_1.types.InputMessagesFilterMusic();
        case "documents":
            return new _2_tl_js_1.types.InputMessagesFilterDocument();
        case "photos":
            return new _2_tl_js_1.types.InputMessagesFilterPhotos();
        case "videos":
            return new _2_tl_js_1.types.InputMessagesFilterVideo();
        case "voiceMessages":
            return new _2_tl_js_1.types.InputMessagesFilterVoice();
        case "photosAndVideos":
            return new _2_tl_js_1.types.InputMessagesFilterPhotoVideo();
        case "links":
            return new _2_tl_js_1.types.InputMessagesFilterUrl();
        case "chatPhotos":
            return new _2_tl_js_1.types.InputMessagesFilterChatPhotos();
        case "videoNotes":
            return new _2_tl_js_1.types.InputMessagesFilterRoundVideo();
        case "voiceMessagesAndVideoNotes":
            return new _2_tl_js_1.types.InputMessagesFilterRoundVoice();
        case "mentions":
            return new _2_tl_js_1.types.InputMessagesFilterMyMentions();
        case "pinned":
            return new _2_tl_js_1.types.InputMessagesFilterPinned();
        default:
            (0, _1_utilities_js_1.UNREACHABLE)();
    }
}
exports.messageSearchFilterToTlObject = messageSearchFilterToTlObject;
