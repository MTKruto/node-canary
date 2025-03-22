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
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructStoryInteractiveArea = constructStoryInteractiveArea;
exports.storyInteractiveAreaToTlObject = storyInteractiveAreaToTlObject;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_location_js_1 = require("./0_location.js");
const _0_reaction_js_1 = require("./0_reaction.js");
const _1_venue_js_1 = require("./1_venue.js");
function constructStoryInteractiveAreaPosition(position) {
    return {
        xPercentage: position.x,
        yPercentage: position.y,
        widthPercentage: position.w,
        heightPercentage: position.h,
        rotationAngle: position.rotation,
    };
}
function constructStoryInteractiveArea(area) {
    const position = constructStoryInteractiveAreaPosition(area.coordinates);
    if (_2_tl_js_1.Api.is("mediaAreaGeoPoint", area)) {
        if (_2_tl_js_1.Api.is("geoPointEmpty", area.geo)) {
            (0, _0_deps_js_1.unreachable)(); // will this ever be empty?
        }
        const location = (0, _0_location_js_1.constructLocation)(area.geo);
        return { position, location };
    }
    else if (_2_tl_js_1.Api.is("mediaAreaVenue", area)) {
        const venue = (0, _1_venue_js_1.constructVenue)(area);
        return { position, venue };
    }
    else if (_2_tl_js_1.Api.is("mediaAreaSuggestedReaction", area)) {
        const reaction = (0, _0_reaction_js_1.constructReaction)(area.reaction);
        return {
            position,
            reaction,
            count: 0, // TODO: count
            flipped: area.flipped ? true : false,
            dark: area.dark ? true : false,
        };
    }
    else if (_2_tl_js_1.Api.is("mediaAreaChannelPost", area)) {
        return {
            position,
            messageReference: {
                chatId: _2_tl_js_1.Api.peerToChatId(area),
                messageId: area.msg_id,
            },
        };
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
function storyInteractiveAreaPositionToTlObject(position) {
    return { _: "mediaAreaCoordinates", x: position.xPercentage, y: position.yPercentage, w: position.widthPercentage, h: position.heightPercentage, rotation: position.rotationAngle };
}
async function storyInteractiveAreaToTlObject(area, getEntity) {
    const coordinates = storyInteractiveAreaPositionToTlObject(area.position);
    if ("location" in area) {
        const geo = { _: "geoPoint", lat: area.location.latitude, long: area.location.longitude, access_hash: 0n, accuracy_radius: area.location.horizontalAccuracy };
        return { _: "mediaAreaGeoPoint", coordinates, geo };
    }
    else if ("venue" in area) {
        const geo = { _: "geoPoint", lat: area.venue.location.latitude, long: area.venue.location.longitude, access_hash: 0n, accuracy_radius: area.venue.location.horizontalAccuracy };
        return {
            _: "mediaAreaVenue",
            coordinates,
            geo,
            address: area.venue.address,
            provider: "foursquare",
            title: area.venue.title,
            venue_id: area.venue.foursquareId || "",
            venue_type: area.venue.foursquareType || "",
        };
    }
    else if ("reaction" in area) {
        const reaction = (0, _0_reaction_js_1.reactionToTlObject)(area.reaction);
        return { _: "mediaAreaSuggestedReaction", coordinates, reaction, dark: area.dark ? true : undefined, flipped: area.flipped ? true : undefined };
    }
    else if ("messageReference" in area) {
        const entity = await getEntity(_2_tl_js_1.Api.chatIdToPeer(area.messageReference.chatId));
        if (!(_2_tl_js_1.Api.is("channel", entity))) {
            (0, _0_deps_js_1.unreachable)();
        }
        const channel = { _: "inputChannel", channel_id: entity.id, access_hash: entity.access_hash ?? 0n };
        return { _: "inputMediaAreaChannelPost", coordinates, channel, msg_id: area.messageReference.messageId };
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
