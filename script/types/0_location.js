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
exports.constructLocation = void 0;
const _2_tl_js_1 = require("../2_tl.js");
function constructLocation(geo_) {
    if (geo_ instanceof _2_tl_js_1.types.MessageMediaGeo) {
        const geo = geo_.geo[_2_tl_js_1.as](_2_tl_js_1.types.GeoPoint);
        return {
            latitude: geo.lat,
            longitude: geo.long,
            horizontalAccuracy: geo.accuracy_radius,
        };
    }
    else if (geo_ instanceof _2_tl_js_1.types.MessageMediaGeoLive) {
        const media = geo_;
        const geo = media.geo[_2_tl_js_1.as](_2_tl_js_1.types.GeoPoint);
        return {
            latitude: geo.lat,
            longitude: geo.long,
            horizontalAccuracy: geo.accuracy_radius,
            livePeriod: media.period,
            heading: media.heading,
            proximityAlertRadius: media.proximity_notification_radius,
        };
    }
    else {
        return {
            latitude: geo_.lat,
            longitude: geo_.long,
            horizontalAccuracy: geo_.accuracy_radius,
        };
    }
}
exports.constructLocation = constructLocation;
