import { enums, types } from "../2_tl.js";
import { ID, Story, Update } from "../3_types.js";
import { InputStoryContent } from "../types/1_input_story_content.js";
import { CreateStoryParams } from "./0_params.js";
import { C as C_ } from "./0_types.js";
import { FileManager } from "./1_file_manager.js";
import { MessageManager } from "./2_message_manager.js";
type C = C_ & {
    fileManager: FileManager;
    messageManager: MessageManager;
};
type StoryManagerUpdate = types.UpdateStory;
export declare class StoryManager {
    #private;
    constructor(c: C);
    createStory(chatId: ID, content: InputStoryContent, params?: CreateStoryParams): Promise<Story>;
    getStories(chatId: ID, storyIds: number[]): Promise<Story[]>;
    getStory(chatId: ID, storyId: number): Promise<Story>;
    deleteStories(chatId: ID, storyIds: number[]): Promise<void>;
    deleteStory(chatId: ID, storyId: number): Promise<void>;
    addStoriesToHighlights(chatId: ID, storyIds: number[]): Promise<void>;
    addStoryToHighlights(chatId: ID, storyId: number): Promise<void>;
    removeStoriesFromHighlights(chatId: ID, storyIds: number[]): Promise<void>;
    removeStoryFromHighlights(chatId: ID, storyId: number): Promise<void>;
    static canHandleUpdate(update: enums.Update): update is StoryManagerUpdate;
    handleUpdate(update: StoryManagerUpdate): Promise<Update | null>;
}
export {};
