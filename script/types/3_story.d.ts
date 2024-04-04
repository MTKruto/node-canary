import { types } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { MessageEntity } from "./0_message_entity.js";
import { ChatP } from "./1_chat_p.js";
import { StoryPrivacy } from "./1_story_privacy.js";
import { StoryContent } from "./2_story_content.js";
import { StoryInteractions } from "./2_story_interactions.js";
import { StoryInteractiveArea } from "./2_story_interactive_area.js";
/** A story. */
export interface Story {
    out: boolean;
    id: number;
    chat: ChatP;
    date: Date;
    edited: boolean;
    content: StoryContent;
    interactiveAreas: StoryInteractiveArea[];
    highlighted: boolean;
    interactions?: StoryInteractions;
    privacy?: StoryPrivacy;
    caption?: string;
    captionEntities?: MessageEntity[];
}
export declare function constructStory(story: types.StoryItem, peer: types.PeerUser | types.PeerChat | types.PeerChannel, getEntity: EntityGetter): Promise<Story>;
