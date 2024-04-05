import { unreachable } from "../0_deps.js";
import { types } from "../2_tl.js";
export function messageSearchFilterToTlObject(filter) {
    switch (filter) {
        case "empty":
            return new types.InputMessagesFilterEmpty();
        case "animations":
            return new types.InputMessagesFilterGif();
        case "audios":
            return new types.InputMessagesFilterMusic();
        case "documents":
            return new types.InputMessagesFilterDocument();
        case "photos":
            return new types.InputMessagesFilterPhotos();
        case "videos":
            return new types.InputMessagesFilterVideo();
        case "voiceMessages":
            return new types.InputMessagesFilterVoice();
        case "photosAndVideos":
            return new types.InputMessagesFilterPhotoVideo();
        case "links":
            return new types.InputMessagesFilterUrl();
        case "chatPhotos":
            return new types.InputMessagesFilterChatPhotos();
        case "videoNotes":
            return new types.InputMessagesFilterRoundVideo();
        case "voiceMessagesAndVideoNotes":
            return new types.InputMessagesFilterRoundVoice();
        case "mentions":
            return new types.InputMessagesFilterMyMentions();
        case "pinned":
            return new types.InputMessagesFilterPinned();
        default:
            unreachable();
    }
}
