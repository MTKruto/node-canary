import { types } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { User } from "./1_user.js";
export interface BusinessConnection {
    id: string;
    user: User;
    date: Date;
    canReply: boolean;
    isEnabled: boolean;
}
export declare function constructBusinessConnection(connection: types.BotBusinessConnection, getEntity: EntityGetter): Promise<BusinessConnection>;
