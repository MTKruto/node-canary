import { unreachable } from "../0_deps.js";
import { cleanObject, fromUnixTimestamp } from "../1_utilities.js";
import { constructMessageEntity } from "./0_message_entity.js";
import { constructChatP } from "./1_chat_p.js";
import { constructStoryPrivacy } from "./1_story_privacy.js";
import { constructStoryContent } from "./2_story_content.js";
import { constructStoryInteractions } from "./2_story_interactions.js";
import { constructStoryInteractiveArea } from "./2_story_interactive_area.js";
export async function constructStory(story, peer, getEntity) {
    const id = story.id;
    const entity = await getEntity(peer);
    if (!entity) {
        unreachable();
    }
    const chat = constructChatP(entity);
    const date = fromUnixTimestamp(story.date);
    const interactiveAreas = (story.media_areas ?? []).map(constructStoryInteractiveArea);
    const highlighted = story.pinned ? true : false;
    const content = constructStoryContent(story.media);
    const caption = story.caption;
    const captionEntities = story.entities?.map(constructMessageEntity).filter((v) => !!v);
    const privacy = story.privacy ? constructStoryPrivacy(story.privacy) : undefined;
    const interactions = story.views ? constructStoryInteractions(story.views) : undefined;
    return cleanObject({
        out: story.out ? true : false,
        id,
        chat,
        date,
        content,
        edited: story.edited ? true : false,
        interactiveAreas,
        highlighted,
        interactions,
        privacy,
        caption,
        captionEntities,
    });
}
