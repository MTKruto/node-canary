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
Object.defineProperty(exports, "__esModule", { value: true });
exports.storyInteractiveAreaToTlObject = exports.constructStoryInteractiveArea = void 0;
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
    if (area instanceof _2_tl_js_1.types.MediaAreaGeoPoint) {
        if (area.geo instanceof _2_tl_js_1.types.GeoPointEmpty) {
            (0, _0_deps_js_1.unreachable)(); // will this ever be empty?
        }
        const location = (0, _0_location_js_1.constructLocation)(area.geo);
        return { position, location };
    }
    else if (area instanceof _2_tl_js_1.types.MediaAreaVenue) {
        const venue = (0, _1_venue_js_1.constructVenue)(area);
        return { position, venue };
    }
    else if (area instanceof _2_tl_js_1.types.MediaAreaSuggestedReaction) {
        const reaction = (0, _0_reaction_js_1.constructReaction)(area.reaction);
        return {
            position,
            reaction,
            count: 0, // TODO: count
            flipped: area.flipped ? true : false,
            dark: area.dark ? true : false,
        };
    }
    else if (area instanceof _2_tl_js_1.types.MediaAreaChannelPost) {
        return {
            position,
            messageReference: {
                chatId: (0, _2_tl_js_1.peerToChatId)(area),
                messageId: area.msg_id,
            },
        };
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
exports.constructStoryInteractiveArea = constructStoryInteractiveArea;
function storyInteractiveAreaPositionToTlObject(position) {
    return new _2_tl_js_1.types.MediaAreaCoordinates({
        x: position.xPercentage,
        y: position.yPercentage,
        w: position.widthPercentage,
        h: position.heightPercentage,
        rotation: position.rotationAngle,
    });
}
async function storyInteractiveAreaToTlObject(area, getEntity) {
    const coordinates = storyInteractiveAreaPositionToTlObject(area.position);
    if ("location" in area) {
        const geo = new _2_tl_js_1.types.GeoPoint({ lat: area.location.latitude, long: area.location.longitude, access_hash: 0n, accuracy_radius: area.location.horizontalAccuracy });
        return new _2_tl_js_1.types.MediaAreaGeoPoint({ coordinates, geo });
    }
    else if ("venue" in area) {
        const geo = new _2_tl_js_1.types.GeoPoint({ lat: area.venue.location.latitude, long: area.venue.location.longitude, access_hash: 0n, accuracy_radius: area.venue.location.horizontalAccuracy });
        return new _2_tl_js_1.types.MediaAreaVenue({
            coordinates,
            geo,
            address: area.venue.address,
            provider: "foursquare",
            title: area.venue.title,
            venue_id: area.venue.foursquareId || "", // TODO: require?
            venue_type: area.venue.foursquareType || "", // TODO: require?
        });
    }
    else if ("reaction" in area) {
        const reaction = (0, _0_reaction_js_1.reactionToTlObject)(area.reaction);
        return new _2_tl_js_1.types.MediaAreaSuggestedReaction({
            coordinates,
            reaction,
            dark: area.dark ? true : undefined,
            flipped: area.flipped ? true : undefined,
        });
    }
    else if ("messageReference" in area) {
        const entity = await getEntity((0, _2_tl_js_1.chatIdToPeer)(area.messageReference.chatId));
        if (!(entity instanceof _2_tl_js_1.types.Channel)) {
            (0, _0_deps_js_1.unreachable)();
        }
        const channel = new _2_tl_js_1.types.InputChannel({ channel_id: entity.id, access_hash: entity.access_hash ?? 0n });
        return new _2_tl_js_1.types.InputMediaAreaChannelPost({ coordinates, channel, msg_id: area.messageReference.messageId });
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
exports.storyInteractiveAreaToTlObject = storyInteractiveAreaToTlObject;
