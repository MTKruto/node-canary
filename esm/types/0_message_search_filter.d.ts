import { enums } from "../2_tl.js";
export type MessageSearchFilter = "empty" | "animations" | "audios" | "documents" | "photos" | "videos" | "voiceMessages" | "photosAndVideos" | "links" | "chatPhotos" | "videoNotes" | "voiceMessagesAndVideoNotes" | "mentions" | "pinned";
export declare function messageSearchFilterToTlObject(filter: MessageSearchFilter): enums.MessagesFilter;
