import { fromUnixTimestamp } from "../1_utilities.js";
import { types } from "../2_tl.js";
import { constructUser } from "./1_user.js";
export async function constructBusinessConnection(connection, getEntity) {
    return {
        id: connection.connection_id,
        user: constructUser((await getEntity(new types.PeerUser(connection)))),
        date: fromUnixTimestamp(connection.date),
        canReply: !!connection.can_reply,
        isEnabled: !connection.disabled,
    };
}
