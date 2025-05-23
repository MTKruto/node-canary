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
import { Api } from "../2_tl.js";
/** A shared location. */
export interface Location {
    /** The latitude of the location. */
    latitude: number;
    /** The longitude of the location. */
    longitude: number;
    /** The accuracy radius of the location in meters. Must be in the range of 0-1500. */
    horizontalAccuracy?: number;
    /** The duration in which the location can be updated in seconds. Must be in the range of 80-864,000. */
    livePeriod?: number;
    /** The direction which the user is moving towards. Must be in the range of 1-350. */
    heading?: number;
    /** The maximum distance for proximity alerts on approaching another chat member in meters. Must be in the range 1-100,000. */
    proximityAlertRadius?: number;
}
export declare function constructLocation(geo_: Api.messageMediaGeo | Api.messageMediaGeoLive | Api.geoPoint): Location;
//# sourceMappingURL=0_location.d.ts.map