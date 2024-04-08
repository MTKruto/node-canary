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
import { unreachable } from "../0_deps.js";
import { chatIdToPeer, peerToChatId, types } from "../2_tl.js";
import { constructLocation } from "./0_location.js";
import { constructReaction, reactionToTlObject } from "./0_reaction.js";
import { constructVenue } from "./1_venue.js";
function constructStoryInteractiveAreaPosition(position) {
    return {
        xPercentage: position.x,
        yPercentage: position.y,
        widthPercentage: position.w,
        heightPercentage: position.h,
        rotationAngle: position.rotation,
    };
}
export function constructStoryInteractiveArea(area) {
    const position = constructStoryInteractiveAreaPosition(area.coordinates);
    if (area instanceof types.MediaAreaGeoPoint) {
        if (area.geo instanceof types.GeoPointEmpty) {
            unreachable(); // will this ever be empty?
        }
        const location = constructLocation(area.geo);
        return { position, location };
    }
    else if (area instanceof types.MediaAreaVenue) {
        const venue = constructVenue(area);
        return { position, venue };
    }
    else if (area instanceof types.MediaAreaSuggestedReaction) {
        const reaction = constructReaction(area.reaction);
        return {
            position,
            reaction,
            count: 0,
            flipped: area.flipped ? true : false,
            dark: area.dark ? true : false,
        };
    }
    else if (area instanceof types.MediaAreaChannelPost) {
        return {
            position,
            messageReference: {
                chatId: peerToChatId(area),
                messageId: area.msg_id,
            },
        };
    }
    else {
        unreachable();
    }
}
function storyInteractiveAreaPositionToTlObject(position) {
    return new types.MediaAreaCoordinates({
        x: position.xPercentage,
        y: position.yPercentage,
        w: position.widthPercentage,
        h: position.heightPercentage,
        rotation: position.rotationAngle,
    });
}
export async function storyInteractiveAreaToTlObject(area, getEntity) {
    const coordinates = storyInteractiveAreaPositionToTlObject(area.position);
    if ("location" in area) {
        const geo = new types.GeoPoint({ lat: area.location.latitude, long: area.location.longitude, access_hash: 0n, accuracy_radius: area.location.horizontalAccuracy });
        return new types.MediaAreaGeoPoint({ coordinates, geo });
    }
    else if ("venue" in area) {
        const geo = new types.GeoPoint({ lat: area.venue.location.latitude, long: area.venue.location.longitude, access_hash: 0n, accuracy_radius: area.venue.location.horizontalAccuracy });
        return new types.MediaAreaVenue({
            coordinates,
            geo,
            address: area.venue.address,
            provider: "foursquare",
            title: area.venue.title,
            venue_id: area.venue.foursquareId || "",
            venue_type: area.venue.foursquareType || "", // TODO: require?
        });
    }
    else if ("reaction" in area) {
        const reaction = reactionToTlObject(area.reaction);
        return new types.MediaAreaSuggestedReaction({
            coordinates,
            reaction,
            dark: area.dark ? true : undefined,
            flipped: area.flipped ? true : undefined,
        });
    }
    else if ("messageReference" in area) {
        const entity = await getEntity(chatIdToPeer(area.messageReference.chatId));
        if (!(entity instanceof types.Channel)) {
            unreachable();
        }
        const channel = new types.InputChannel({ channel_id: entity.id, access_hash: entity.access_hash ?? 0n });
        return new types.InputMediaAreaChannelPost({ coordinates, channel, msg_id: area.messageReference.messageId });
    }
    else {
        unreachable();
    }
}
