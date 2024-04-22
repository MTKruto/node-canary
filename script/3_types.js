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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./types/_file_id.js"), exports);
__exportStar(require("./types/_getters.js"), exports);
__exportStar(require("./types/0_authorization_state.js"), exports);
__exportStar(require("./types/0_birthday.js"), exports);
__exportStar(require("./types/0_bot_command.js"), exports);
__exportStar(require("./types/0_callback_query_answer.js"), exports);
__exportStar(require("./types/0_callback_query_question.js"), exports);
__exportStar(require("./types/0_chat_action.js"), exports);
__exportStar(require("./types/0_chat_administrator_rights.js"), exports);
__exportStar(require("./types/0_chat_member_rights.js"), exports);
__exportStar(require("./types/0_chat_photo.js"), exports);
__exportStar(require("./types/0_connection_state.js"), exports);
__exportStar(require("./types/0_contact.js"), exports);
__exportStar(require("./types/0_dice.js"), exports);
__exportStar(require("./types/0_file_source.js"), exports);
__exportStar(require("./types/0_giveaway_parameters.js"), exports);
__exportStar(require("./types/0_id.js"), exports);
__exportStar(require("./types/0_keyboard_button_poll_type.js"), exports);
__exportStar(require("./types/0_link_preview.js"), exports);
__exportStar(require("./types/0_location.js"), exports);
__exportStar(require("./types/0_login_url.js"), exports);
__exportStar(require("./types/0_mask_position.js"), exports);
__exportStar(require("./types/0_message_entity.js"), exports);
__exportStar(require("./types/0_message_reference.js"), exports);
__exportStar(require("./types/0_message_search_filter.js"), exports);
__exportStar(require("./types/0_mini_app_info.js"), exports);
__exportStar(require("./types/0_network_statistics_entry.js"), exports);
__exportStar(require("./types/0_opening_hours.js"), exports);
__exportStar(require("./types/0_parse_mode.js"), exports);
__exportStar(require("./types/0_poll_option.js"), exports);
__exportStar(require("./types/0_price_tag.js"), exports);
__exportStar(require("./types/0_reaction.js"), exports);
__exportStar(require("./types/0_restriction_reason.js"), exports);
__exportStar(require("./types/0_self_destruct_option.js"), exports);
__exportStar(require("./types/0_story_reference.js"), exports);
__exportStar(require("./types/0_thumbnail.js"), exports);
__exportStar(require("./types/0_voice.js"), exports);
__exportStar(require("./types/1_animation.js"), exports);
__exportStar(require("./types/1_audio.js"), exports);
__exportStar(require("./types/1_bot_command_scope.js"), exports);
__exportStar(require("./types/1_chat_p.js"), exports);
__exportStar(require("./types/1_document.js"), exports);
__exportStar(require("./types/1_giveaway.js"), exports);
__exportStar(require("./types/1_inline_query_result_button.js"), exports);
__exportStar(require("./types/1_input_media.js"), exports);
__exportStar(require("./types/1_input_story_content.js"), exports);
__exportStar(require("./types/1_keyboard_button.js"), exports);
__exportStar(require("./types/1_message_content.js"), exports);
__exportStar(require("./types/1_message_reaction.js"), exports);
__exportStar(require("./types/1_network_statistics.js"), exports);
__exportStar(require("./types/1_photo.js"), exports);
__exportStar(require("./types/1_poll.js"), exports);
__exportStar(require("./types/1_reaction_count.js"), exports);
__exportStar(require("./types/1_reply_quote.js"), exports);
__exportStar(require("./types/1_sticker.js"), exports);
__exportStar(require("./types/1_story_privacy.js"), exports);
__exportStar(require("./types/1_story_reaction.js"), exports);
__exportStar(require("./types/1_user.js"), exports);
__exportStar(require("./types/1_venue.js"), exports);
__exportStar(require("./types/1_video.js"), exports);
__exportStar(require("./types/1_video_note.js"), exports);
__exportStar(require("./types/2_business_connection.js"), exports);
__exportStar(require("./types/2_chat_member.js"), exports);
__exportStar(require("./types/2_chosen_inline_result.js"), exports);
__exportStar(require("./types/2_game.js"), exports);
__exportStar(require("./types/2_inactive_chat.js"), exports);
__exportStar(require("./types/2_inline_keyboard_button.js"), exports);
__exportStar(require("./types/2_inline_query.js"), exports);
__exportStar(require("./types/2_invite_link.js"), exports);
__exportStar(require("./types/2_message_interactions.js"), exports);
__exportStar(require("./types/2_message_reaction_count.js"), exports);
__exportStar(require("./types/2_message_reactions.js"), exports);
__exportStar(require("./types/2_story_content.js"), exports);
__exportStar(require("./types/2_story_interactions.js"), exports);
__exportStar(require("./types/2_story_interactive_area.js"), exports);
__exportStar(require("./types/3_chat_member_updated.js"), exports);
__exportStar(require("./types/3_reply_markup.js"), exports);
__exportStar(require("./types/3_story.js"), exports);
__exportStar(require("./types/4_inline_query_result.js"), exports);
__exportStar(require("./types/4_message.js"), exports);
__exportStar(require("./types/5_callback_query.js"), exports);
__exportStar(require("./types/5_chat_list_item.js"), exports);
__exportStar(require("./types/2_chat.js"), exports);
__exportStar(require("./types/5_inline_query_answer.js"), exports);
__exportStar(require("./types/6_update.js"), exports);
