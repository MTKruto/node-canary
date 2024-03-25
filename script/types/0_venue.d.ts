import { types } from "../2_tl.js";
import { Location } from "./0_location.js";
/** A shared venue. */
export interface Venue {
    /** The location of the venue. Cannot be a live location. */
    location: Location;
    /** The name of the venue. */
    title: string;
    /** The address of the venue. */
    address: string;
    /** The Foursquare identifier of the venue. */
    foursquareId?: string;
    /** The Foursquare type of the venue. */
    foursquareType?: string;
}
export declare function constructVenue(media_: types.MessageMediaVenue | types.MediaAreaVenue): Venue;
