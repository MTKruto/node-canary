import { types } from "../2_tl.js";
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
export declare function constructLocation(geo_: types.MessageMediaGeo | types.MessageMediaGeoLive | types.GeoPoint): Location;
