var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UpdateManager_instances, _a, _UpdateManager_c, _UpdateManager_updateState, _UpdateManager_updateHandler, _UpdateManager_LrecoverUpdateGap, _UpdateManager_LrecoverChannelUpdateGap, _UpdateManager_L$handleUpdate, _UpdateManager_L$processUpdates, _UpdateManager_LfetchState, _UpdateManager_defaultDropPendingUpdates, _UpdateManager_mustDropPendingUpdates, _UpdateManager_state, _UpdateManager_getState, _UpdateManager_setState, _UpdateManager_handleUpdateQueues, _UpdateManager_nonFirst, _UpdateManager_getChannelPtsWithDropPendingUpdatesCheck, _UpdateManager_checkGap, _UpdateManager_checkChannelGap, _UpdateManager_channelUpdateQueues, _UpdateManager_processChannelPtsUpdateInner, _UpdateManager_queueUpdate, _UpdateManager_processChannelPtsUpdate, _UpdateManager_processPtsUpdateInner, _UpdateManager_ptsUpdateQueue, _UpdateManager_processPtsUpdate, _UpdateManager_processUpdatesQueue, _UpdateManager_processUpdates, _UpdateManager_setUpdateStateDate, _UpdateManager_setUpdatePts, _UpdateManager_getLocalState, _UpdateManager_recoverChannelUpdateGap, _UpdateManager_handleUpdatesSet, _UpdateManager_handleStoredUpdates, _UpdateManager_handleUpdate;
import { getLogger, Queue, UNREACHABLE, ZERO_CHANNEL_ID } from "../1_utilities.js";
import { as, functions, inputPeerToPeer, peerToChatId, types } from "../2_tl.js";
import { CHANNEL_DIFFERENCE_LIMIT_BOT, CHANNEL_DIFFERENCE_LIMIT_USER } from "../4_constants.js";
import { isChannelPtsUpdate, isPtsUpdate } from "./0_utilities.js";
export class UpdateManager {
    constructor(c) {
        _UpdateManager_instances.add(this);
        _UpdateManager_c.set(this, void 0);
        _UpdateManager_updateState.set(this, void 0);
        _UpdateManager_updateHandler.set(this, void 0);
        _UpdateManager_LrecoverUpdateGap.set(this, void 0);
        _UpdateManager_LrecoverChannelUpdateGap.set(this, void 0);
        _UpdateManager_L$handleUpdate.set(this, void 0);
        _UpdateManager_L$processUpdates.set(this, void 0);
        _UpdateManager_LfetchState.set(this, void 0);
        _UpdateManager_defaultDropPendingUpdates.set(this, null);
        _UpdateManager_state.set(this, undefined);
        _UpdateManager_handleUpdateQueues.set(this, new Map());
        _UpdateManager_nonFirst.set(this, new Set());
        _UpdateManager_channelUpdateQueues.set(this, new Map());
        _UpdateManager_ptsUpdateQueue.set(this, new Queue("ptsUpdate"));
        _UpdateManager_processUpdatesQueue.set(this, new Queue("UpdateManager/processUpdates"));
        _UpdateManager_handleUpdatesSet.set(this, new Set());
        __classPrivateFieldSet(this, _UpdateManager_c, c, "f");
        const L = getLogger("UpdateManager").client(c.id);
        __classPrivateFieldSet(this, _UpdateManager_LrecoverUpdateGap, L.branch("recoverUpdateGap"), "f");
        __classPrivateFieldSet(this, _UpdateManager_LrecoverChannelUpdateGap, L.branch("recoverChannelUpdateGap"), "f");
        __classPrivateFieldSet(this, _UpdateManager_L$handleUpdate, L.branch("#handleUpdate"), "f");
        __classPrivateFieldSet(this, _UpdateManager_L$processUpdates, L.branch("#processUpdates"), "f");
        __classPrivateFieldSet(this, _UpdateManager_LfetchState, L.branch("fetchState"), "f");
    }
    async fetchState(source) {
        const state = await __classPrivateFieldGet(this, _UpdateManager_c, "f").api.updates.getState();
        __classPrivateFieldSet(this, _UpdateManager_updateState, state, "f");
        __classPrivateFieldGet(this, _UpdateManager_LfetchState, "f").debug(`state fetched [${source}]`);
        if (await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_mustDropPendingUpdates).call(this)) {
            await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, state);
        }
    }
    async processChats(chats) {
        for (const chat of chats) {
            if (chat instanceof types.Channel || chat instanceof types.ChannelForbidden) {
                await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.setEntity(chat);
                if ("username" in chat && chat.username) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.updateUsernames(peerToChatId(chat), [chat.username]);
                }
                if ("usernames" in chat && chat.usernames) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.updateUsernames(peerToChatId(chat), chat.usernames.map((v) => v.username));
                }
            }
            else if (chat instanceof types.Chat || chat instanceof types.ChatForbidden) {
                await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.setEntity(chat);
            }
        }
    }
    async processResult(result) {
        if (result instanceof types.account.AuthorizationForm ||
            result instanceof types.account.AutoSaveSettings ||
            result instanceof types.account.PrivacyRules ||
            result instanceof types.account.WebAuthorizations ||
            result instanceof types.AttachMenuBots ||
            result instanceof types.AttachMenuBotsBot ||
            result instanceof types.channels.AdminLogResults ||
            result instanceof types.channels.ChannelParticipant ||
            result instanceof types.channels.ChannelParticipants ||
            result instanceof types.channels.SendAsPeers ||
            result instanceof types.ChatInvite ||
            result instanceof types.chatlists.ChatlistInvite ||
            result instanceof types.chatlists.ChatlistInviteAlready ||
            result instanceof types.chatlists.ChatlistUpdates ||
            result instanceof types.chatlists.ExportedInvites ||
            result instanceof types.contacts.Blocked ||
            result instanceof types.contacts.BlockedSlice ||
            result instanceof types.contacts.Contacts ||
            result instanceof types.contacts.Found ||
            result instanceof types.contacts.ImportedContacts ||
            result instanceof types.contacts.ResolvedPeer ||
            result instanceof types.contacts.TopPeers ||
            result instanceof types.help.PromoData ||
            result instanceof types.help.RecentMeUrls ||
            result instanceof types.messages.BotResults ||
            result instanceof types.messages.ChannelMessages ||
            result instanceof types.messages.ChatAdminsWithInvites ||
            result instanceof types.messages.ChatFull ||
            result instanceof types.messages.ChatInviteImporters ||
            result instanceof types.messages.Chats ||
            result instanceof types.messages.ChatsSlice ||
            result instanceof types.messages.Dialogs ||
            result instanceof types.messages.DialogsSlice ||
            result instanceof types.messages.DiscussionMessage ||
            result instanceof types.messages.ExportedChatInvite ||
            result instanceof types.messages.ExportedChatInviteReplaced ||
            result instanceof types.messages.ExportedChatInvites ||
            result instanceof types.messages.ForumTopics ||
            result instanceof types.messages.HighScores ||
            result instanceof types.messages.InactiveChats ||
            result instanceof types.messages.MessageReactionsList ||
            result instanceof types.messages.Messages ||
            result instanceof types.messages.MessagesSlice ||
            result instanceof types.messages.MessageViews ||
            result instanceof types.messages.PeerDialogs ||
            result instanceof types.messages.PeerSettings ||
            result instanceof types.messages.SearchResultsCalendar ||
            result instanceof types.messages.SponsoredMessages ||
            result instanceof types.messages.VotesList ||
            result instanceof types.messages.WebPage ||
            result instanceof types.payments.CheckedGiftCode ||
            result instanceof types.payments.PaymentForm ||
            result instanceof types.payments.PaymentReceipt ||
            result instanceof types.phone.GroupCall ||
            result instanceof types.phone.GroupParticipants ||
            result instanceof types.phone.JoinAsPeers ||
            result instanceof types.phone.PhoneCall ||
            result instanceof types.photos.Photo ||
            result instanceof types.photos.Photos ||
            result instanceof types.photos.PhotosSlice ||
            result instanceof types.premium.BoostsList ||
            result instanceof types.premium.MyBoosts ||
            result instanceof types.stats.MegagroupStats ||
            result instanceof types.stats.PublicForwards ||
            result instanceof types.stories.AllStories ||
            result instanceof types.stories.PeerStories ||
            result instanceof types.stories.Stories ||
            result instanceof types.stories.StoryViews ||
            result instanceof types.stories.StoryViewsList ||
            result instanceof types.users.UserFull) {
            if ("chats" in result) {
                await this.processChats(result.chats);
            }
            if ("users" in result) {
                await this.processUsers(result.users);
            }
            if ("messages" in result && Array.isArray(result.messages)) {
                for (const message of result.messages) {
                    if (message instanceof types.Message || message instanceof types.MessageService) {
                        await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.setMessage(peerToChatId(message.peer_id), message.id, message);
                    }
                }
            }
        }
        if (result instanceof types.messages.Messages) {
            for (const message of result.messages) {
                if (message instanceof types.Message || message instanceof types.MessageService) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.setMessage(peerToChatId(message.peer_id), message.id, message);
                }
            }
        }
    }
    async processUsers(users) {
        for (const user of users) {
            if (user instanceof types.User && user.access_hash) {
                await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.setEntity(user);
                if (user.username) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.updateUsernames(peerToChatId(user), [user.username]);
                }
                if (user.usernames) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.updateUsernames(peerToChatId(user), user.usernames.map((v) => v.username));
                }
            }
        }
    }
    getHandleUpdateQueue(boxId) {
        let queue = __classPrivateFieldGet(this, _UpdateManager_handleUpdateQueues, "f").get(boxId);
        if (queue !== undefined) {
            return queue;
        }
        else {
            queue = new Queue(`handleUpdate-${boxId}`);
            return queue;
        }
    }
    processUpdates(updates, checkGap, call = null, callback) {
        __classPrivateFieldGet(this, _UpdateManager_processUpdatesQueue, "f").add(() => __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processUpdates).call(this, updates, checkGap, call).then(callback));
    }
    async recoverUpdateGap(source) {
        __classPrivateFieldGet(this, _UpdateManager_LrecoverUpdateGap, "f").debug(`recovering from update gap [${source}]`);
        __classPrivateFieldGet(this, _UpdateManager_c, "f").setConnectionState("updating");
        try {
            let state = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
            while (true) {
                const difference = await __classPrivateFieldGet(this, _UpdateManager_c, "f").api.updates.getDifference({ pts: state.pts, date: state.date, qts: state.qts ?? 0 });
                if (difference instanceof types.updates.Difference || difference instanceof types.updates.DifferenceSlice) {
                    await this.processChats(difference.chats);
                    await this.processUsers(difference.users);
                    for (const message of difference.new_messages) {
                        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processUpdates).call(this, new types.UpdateNewMessage({ message, pts: 0, pts_count: 0 }), false);
                    }
                    for (const update of difference.other_updates) {
                        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processUpdates).call(this, update, false);
                    }
                    if (difference instanceof types.updates.Difference) {
                        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, difference.state);
                        __classPrivateFieldGet(this, _UpdateManager_LrecoverUpdateGap, "f").debug("recovered from update gap");
                        break;
                    }
                    else if (difference instanceof types.updates.DifferenceSlice) {
                        state = difference.intermediate_state;
                    }
                    else {
                        UNREACHABLE();
                    }
                }
                else if (difference instanceof types.updates.DifferenceTooLong) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.deleteMessages();
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.removeChats(0);
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.removeChats(1);
                    state.pts = difference.pts;
                    __classPrivateFieldGet(this, _UpdateManager_LrecoverUpdateGap, "f").debug("received differenceTooLong");
                }
                else if (difference instanceof types.updates.DifferenceEmpty) {
                    await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setUpdateStateDate).call(this, difference.date);
                    __classPrivateFieldGet(this, _UpdateManager_LrecoverUpdateGap, "f").debug("there was no update gap");
                    break;
                }
                else {
                    UNREACHABLE();
                }
            }
        }
        finally {
            __classPrivateFieldGet(this, _UpdateManager_c, "f").resetConnectionState();
        }
    }
    setUpdateHandler(handler) {
        __classPrivateFieldSet(this, _UpdateManager_updateHandler, handler, "f");
    }
}
_a = UpdateManager, _UpdateManager_c = new WeakMap(), _UpdateManager_updateState = new WeakMap(), _UpdateManager_updateHandler = new WeakMap(), _UpdateManager_LrecoverUpdateGap = new WeakMap(), _UpdateManager_LrecoverChannelUpdateGap = new WeakMap(), _UpdateManager_L$handleUpdate = new WeakMap(), _UpdateManager_L$processUpdates = new WeakMap(), _UpdateManager_LfetchState = new WeakMap(), _UpdateManager_defaultDropPendingUpdates = new WeakMap(), _UpdateManager_state = new WeakMap(), _UpdateManager_handleUpdateQueues = new WeakMap(), _UpdateManager_nonFirst = new WeakMap(), _UpdateManager_channelUpdateQueues = new WeakMap(), _UpdateManager_ptsUpdateQueue = new WeakMap(), _UpdateManager_processUpdatesQueue = new WeakMap(), _UpdateManager_handleUpdatesSet = new WeakMap(), _UpdateManager_instances = new WeakSet(), _UpdateManager_mustDropPendingUpdates = async function _UpdateManager_mustDropPendingUpdates() {
    if (typeof __classPrivateFieldGet(this, _UpdateManager_c, "f").dropPendingUpdates === "boolean") {
        return __classPrivateFieldGet(this, _UpdateManager_c, "f").dropPendingUpdates;
    }
    if (__classPrivateFieldGet(this, _UpdateManager_defaultDropPendingUpdates, "f") == null) {
        __classPrivateFieldSet(this, _UpdateManager_defaultDropPendingUpdates, await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.getAccountType() == "bot", "f");
    }
    return __classPrivateFieldGet(this, _UpdateManager_defaultDropPendingUpdates, "f");
}, _UpdateManager_getState = async function _UpdateManager_getState() {
    if (await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_mustDropPendingUpdates).call(this)) {
        return __classPrivateFieldGet(this, _UpdateManager_state, "f") ?? null;
    }
    if (__classPrivateFieldGet(this, _UpdateManager_state, "f") !== undefined) {
        return __classPrivateFieldGet(this, _UpdateManager_state, "f");
    }
    const state = await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.getState();
    return __classPrivateFieldSet(this, _UpdateManager_state, state, "f");
}, _UpdateManager_setState = async function _UpdateManager_setState(state) {
    __classPrivateFieldSet(this, _UpdateManager_state, state, "f");
    if (!await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_mustDropPendingUpdates).call(this)) {
        await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.setState(state);
    }
}, _UpdateManager_getChannelPtsWithDropPendingUpdatesCheck = async function _UpdateManager_getChannelPtsWithDropPendingUpdatesCheck(channelId) {
    if (!(await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_mustDropPendingUpdates).call(this))) {
        return await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.getChannelPts(channelId);
    }
    const first = !__classPrivateFieldGet(this, _UpdateManager_nonFirst, "f").has(channelId);
    if (first) {
        __classPrivateFieldGet(this, _UpdateManager_nonFirst, "f").add(channelId);
        return null;
    }
    else {
        return await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.getChannelPts(channelId);
    }
}, _UpdateManager_checkGap = async function _UpdateManager_checkGap(pts, ptsCount) {
    const localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
    if (localState.pts + ptsCount < pts) {
        await this.recoverUpdateGap("processUpdates");
    }
}, _UpdateManager_checkChannelGap = async function _UpdateManager_checkChannelGap(channelId, pts, ptsCount) {
    let localPts = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getChannelPtsWithDropPendingUpdatesCheck).call(this, channelId);
    if (!localPts) {
        localPts = pts - ptsCount;
    }
    if (localPts + ptsCount < pts) {
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_recoverChannelUpdateGap).call(this, channelId, "processUpdates");
    }
}, _UpdateManager_processChannelPtsUpdateInner = async function _UpdateManager_processChannelPtsUpdateInner(update, checkGap) {
    const channelId = update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditChannelMessage ? update.message.peer_id[as](types.PeerChannel).channel_id : update.channel_id;
    if (update instanceof types.UpdateChannelTooLong) {
        if (update.pts != undefined) {
            await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.setChannelPts(channelId, update.pts);
        }
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_recoverChannelUpdateGap).call(this, channelId, "updateChannelTooLong");
        return;
    }
    if (update.pts != 0) {
        const ptsCount = update.pts_count;
        if (checkGap) {
            await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_checkChannelGap).call(this, channelId, update.pts, ptsCount);
        }
        let currentPts = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getChannelPtsWithDropPendingUpdatesCheck).call(this, channelId);
        currentPts ??= update.pts - ptsCount;
        if (currentPts + ptsCount > update.pts) {
            return;
        }
    }
    if (__classPrivateFieldGet(this, _UpdateManager_c, "f").guaranteeUpdateDelivery) {
        await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.setUpdate(channelId, update);
    }
    if (update.pts != 0) {
        await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.setChannelPts(channelId, update.pts);
    }
    __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_queueUpdate).call(this, update, channelId, true);
}, _UpdateManager_queueUpdate = function _UpdateManager_queueUpdate(update, boxId, pts) {
    this.getHandleUpdateQueue(boxId).add(async () => {
        if (__classPrivateFieldGet(this, _UpdateManager_c, "f").guaranteeUpdateDelivery && pts) {
            await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_handleStoredUpdates).call(this, boxId);
        }
        else {
            await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_handleUpdate).call(this, update);
        }
    });
}, _UpdateManager_processChannelPtsUpdate = function _UpdateManager_processChannelPtsUpdate(update, checkGap) {
    const channelId = update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditChannelMessage ? update.message.peer_id[as](types.PeerChannel).channel_id : update.channel_id;
    let queue = __classPrivateFieldGet(this, _UpdateManager_channelUpdateQueues, "f").get(channelId);
    if (queue == undefined) {
        queue = new Queue(`channelUpdates-${channelId}`);
        __classPrivateFieldGet(this, _UpdateManager_channelUpdateQueues, "f").set(channelId, queue);
    }
    queue.add(async () => {
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processChannelPtsUpdateInner).call(this, update, checkGap);
    });
}, _UpdateManager_processPtsUpdateInner = async function _UpdateManager_processPtsUpdateInner(update, checkGap) {
    const localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
    if (update.pts != 0) {
        if (checkGap) {
            await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_checkGap).call(this, update.pts, update.pts_count);
        }
        if (localState.pts + update.pts_count > update.pts) {
            return;
        }
    }
    if (__classPrivateFieldGet(this, _UpdateManager_c, "f").guaranteeUpdateDelivery) {
        await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.setUpdate(_a.MAIN_BOX_ID, update);
    }
    if (update.pts != 0) {
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setUpdatePts).call(this, update.pts);
    }
    __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_queueUpdate).call(this, update, 0n, true);
}, _UpdateManager_processPtsUpdate = function _UpdateManager_processPtsUpdate(update, checkGap) {
    __classPrivateFieldGet(this, _UpdateManager_ptsUpdateQueue, "f").add(async () => {
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processPtsUpdateInner).call(this, update, checkGap);
    });
}, _UpdateManager_processUpdates = async function _UpdateManager_processUpdates(updates_, checkGap, call = null) {
    /// First, individual updates (Update[1]) are extracted from Updates.[2]
    ///
    /// If an updatesTooLong[3] was received, an update gap recovery is initiated and no further action will be taken.
    ///
    /// [1]: https://core.telegram.org/type/Update
    /// [2]: https://core.telegram.org/type/Updates
    /// [3]: https://core.telegram.org/constructor/updatesTooLong
    let updates;
    if (updates_ instanceof types.UpdatesCombined || updates_ instanceof types.Updates) {
        updates = updates_.updates;
        const seq = updates_.seq;
        const seqStart = "seq_start" in updates_ ? updates_.seq_start : updates_.seq;
        if (checkGap) {
            if (seqStart == 0) {
                checkGap = false;
                __classPrivateFieldGet(this, _UpdateManager_L$processUpdates, "f").debug("seqStart=0");
            }
            else {
                const localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
                const localSeq = localState.seq;
                if (localSeq + 1 == seqStart) {
                    // The update sequence can be applied.
                    localState.seq = seq;
                    localState.date = updates_.date;
                    await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setUpdateStateDate).call(this, updates_.date);
                    await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, localState);
                }
                else if (localSeq + 1 > seqStart) {
                    // The update sequence was already applied, and must be ignored.
                    __classPrivateFieldGet(this, _UpdateManager_L$processUpdates, "f").debug("localSeq + 1 > seqStart");
                    return;
                }
                else if (localSeq + 1 < seqStart) {
                    // There's an updates gap that must be filled.
                    await this.recoverUpdateGap("localSeq + 1 < seqStart");
                }
            }
        }
    }
    else if (updates_ instanceof types.UpdateShort) {
        updates = [updates_.update];
    }
    else if (updates_ instanceof types.UpdateShortMessage) {
        updates = [
            new types.UpdateNewMessage({
                message: new types.Message({
                    out: updates_.out,
                    mentioned: updates_.mentioned,
                    media_unread: updates_.media_unread,
                    silent: updates_.silent,
                    id: updates_.id,
                    from_id: updates_.out ? new types.PeerUser({ user_id: await __classPrivateFieldGet(this, _UpdateManager_c, "f").getSelfId().then(BigInt) }) : new types.PeerUser({ user_id: updates_.user_id }),
                    peer_id: new types.PeerUser({ user_id: updates_.user_id }),
                    message: updates_.message,
                    date: updates_.date,
                    fwd_from: updates_.fwd_from,
                    via_bot_id: updates_.via_bot_id,
                    reply_to: updates_.reply_to,
                    entities: updates_.entities,
                    ttl_period: updates_.ttl_period,
                }),
                pts: updates_.pts,
                pts_count: updates_.pts_count,
            }),
        ];
    }
    else if (updates_ instanceof types.UpdateShortChatMessage) {
        updates = [
            new types.UpdateNewMessage({
                message: new types.Message({
                    out: updates_.out,
                    mentioned: updates_.mentioned,
                    media_unread: updates_.media_unread,
                    silent: updates_.silent,
                    id: updates_.id,
                    from_id: new types.PeerUser({ user_id: updates_.from_id }),
                    peer_id: new types.PeerChat({ chat_id: updates_.chat_id }),
                    fwd_from: updates_.fwd_from,
                    via_bot_id: updates_.via_bot_id,
                    reply_to: updates_.reply_to,
                    date: updates_.date,
                    message: updates_.message,
                    entities: updates_.entities,
                    ttl_period: updates_.ttl_period,
                }),
                pts: updates_.pts,
                pts_count: updates_.pts_count,
            }),
        ];
    }
    else if (updates_ instanceof types.UpdateShortSentMessage) {
        if (!(call instanceof functions.messages.sendMessage)) {
            UNREACHABLE();
        }
        updates = [
            new types.UpdateNewMessage({
                message: new types.Message({
                    out: updates_.out,
                    silent: call.silent,
                    id: updates_.id,
                    from_id: new types.PeerUser({ user_id: await __classPrivateFieldGet(this, _UpdateManager_c, "f").getSelfId().then(BigInt) }),
                    peer_id: inputPeerToPeer(call.peer),
                    message: call.message,
                    media: updates_.media,
                    date: updates_.date,
                    // reply_to: call.reply_to, // TODO?
                    entities: updates_.entities,
                    ttl_period: updates_.ttl_period,
                }),
                pts: updates_.pts,
                pts_count: updates_.pts_count,
            }),
        ];
    }
    else if (updates_ instanceof types.UpdatesTooLong) {
        await this.recoverUpdateGap("updatesTooLong");
        return;
    }
    else if (updates_ instanceof types._Update) {
        updates = [updates_];
    }
    else {
        UNREACHABLE();
    }
    /// We process the updates when we are sure there is no gap.
    if (updates_ instanceof types.Updates || updates_ instanceof types.UpdatesCombined) {
        await this.processChats(updates_.chats);
        await this.processUsers(updates_.users);
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setUpdateStateDate).call(this, updates_.date);
    }
    else if (updates_ instanceof types.UpdateShort ||
        updates_ instanceof types.UpdateShortMessage ||
        updates_ instanceof types.UpdateShortChatMessage ||
        updates_ instanceof types.UpdateShortSentMessage) {
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setUpdateStateDate).call(this, updates_.date);
    }
    for (const update of updates) {
        if (update instanceof types.UpdatePtsChanged) {
            await this.fetchState("updatePtsChanged");
            if (__classPrivateFieldGet(this, _UpdateManager_updateState, "f")) {
                await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, __classPrivateFieldGet(this, _UpdateManager_updateState, "f"));
            }
            else {
                UNREACHABLE();
            }
        }
        else if (isPtsUpdate(update)) {
            __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processPtsUpdate).call(this, update, checkGap);
        }
        else if (isChannelPtsUpdate(update)) {
            __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processChannelPtsUpdate).call(this, update, checkGap);
        }
        else {
            __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_queueUpdate).call(this, update, 0n, false);
        }
    }
}, _UpdateManager_setUpdateStateDate = async function _UpdateManager_setUpdateStateDate(date) {
    const localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
    localState.date = date;
    await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, localState);
}, _UpdateManager_setUpdatePts = async function _UpdateManager_setUpdatePts(pts) {
    const localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
    localState.pts = pts;
    await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, localState);
}, _UpdateManager_getLocalState = async function _UpdateManager_getLocalState() {
    let localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getState).call(this);
    if (!localState) {
        if (__classPrivateFieldGet(this, _UpdateManager_updateState, "f")) {
            localState = __classPrivateFieldGet(this, _UpdateManager_updateState, "f");
            await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, localState);
        }
        else {
            await this.fetchState("getLocalState");
            if (__classPrivateFieldGet(this, _UpdateManager_updateState, "f")) {
                localState = __classPrivateFieldGet(this, _UpdateManager_updateState, "f");
                await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, localState);
            }
            else {
                UNREACHABLE();
            }
        }
    }
    return localState;
}, _UpdateManager_recoverChannelUpdateGap = async function _UpdateManager_recoverChannelUpdateGap(channelId, source) {
    __classPrivateFieldGet(this, _UpdateManager_LrecoverChannelUpdateGap, "f").debug(`recovering channel update gap [${channelId}, ${source}]`);
    const pts_ = await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.getChannelPts(channelId);
    let pts = pts_ == null ? 1 : pts_;
    while (true) {
        const { access_hash } = await __classPrivateFieldGet(this, _UpdateManager_c, "f").getInputPeer(ZERO_CHANNEL_ID + -Number(channelId)).then((v) => v[as](types.InputPeerChannel));
        const difference = await __classPrivateFieldGet(this, _UpdateManager_c, "f").api.updates.getChannelDifference({
            pts,
            channel: new types.InputChannel({ channel_id: channelId, access_hash }),
            filter: new types.ChannelMessagesFilterEmpty(),
            limit: await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.getAccountType() == "user" ? CHANNEL_DIFFERENCE_LIMIT_USER : CHANNEL_DIFFERENCE_LIMIT_BOT,
        });
        if (difference instanceof types.updates.ChannelDifference) {
            await this.processChats(difference.chats);
            await this.processUsers(difference.users);
            for (const message of difference.new_messages) {
                await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processUpdates).call(this, new types.UpdateNewChannelMessage({ message, pts: 0, pts_count: 0 }), false);
            }
            for (const update of difference.other_updates) {
                await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processUpdates).call(this, update, false);
            }
            await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.setChannelPts(channelId, difference.pts);
            __classPrivateFieldGet(this, _UpdateManager_LrecoverChannelUpdateGap, "f").debug(`recovered from update gap [${channelId}, ${source}]`, channelId, source);
            break;
        }
        else if (difference instanceof types.updates.ChannelDifferenceTooLong) {
            // TODO: invalidate messages
            __classPrivateFieldGet(this, _UpdateManager_LrecoverChannelUpdateGap, "f").debug("received channelDifferenceTooLong");
            await this.processChats(difference.chats);
            await this.processUsers(difference.users);
            for (const message of difference.messages) {
                await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processUpdates).call(this, new types.UpdateNewChannelMessage({ message, pts: 0, pts_count: 0 }), false);
            }
            const pts_ = difference.dialog[as](types.Dialog).pts;
            if (pts_ != undefined) {
                pts = pts_;
            }
            else {
                UNREACHABLE();
            }
            __classPrivateFieldGet(this, _UpdateManager_LrecoverChannelUpdateGap, "f").debug("processed channelDifferenceTooLong");
        }
        else if (difference instanceof types.updates.ChannelDifferenceEmpty) {
            __classPrivateFieldGet(this, _UpdateManager_LrecoverChannelUpdateGap, "f").debug("there was no update gap");
            break;
        }
    }
}, _UpdateManager_handleStoredUpdates = async function _UpdateManager_handleStoredUpdates(boxId) {
    if (__classPrivateFieldGet(this, _UpdateManager_handleUpdatesSet, "f").has(boxId)) {
        return;
    }
    __classPrivateFieldGet(this, _UpdateManager_handleUpdatesSet, "f").add(boxId);
    do {
        const maybeUpdate = await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.getFirstUpdate(boxId);
        if (maybeUpdate == null) {
            break;
        }
        const [key, update] = maybeUpdate;
        for (let i = 0; i < 100; ++i) {
            try {
                const handle = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_handleUpdate).call(this, update);
                handle: for (let i = 0; i < 2; ++i) {
                    try {
                        await handle();
                        break handle;
                    }
                    catch {
                        continue handle;
                    }
                }
                break;
            }
            catch (err) {
                __classPrivateFieldGet(this, _UpdateManager_L$handleUpdate, "f").error(err);
            }
        }
        await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.set(key, null);
    } while (true);
    __classPrivateFieldGet(this, _UpdateManager_handleUpdatesSet, "f").delete(boxId);
}, _UpdateManager_handleUpdate = async function _UpdateManager_handleUpdate(update) {
    const handler = __classPrivateFieldGet(this, _UpdateManager_updateHandler, "f");
    if (handler) {
        return await handler(update);
    }
    else {
        return () => Promise.resolve();
    }
};
Object.defineProperty(UpdateManager, "MAIN_BOX_ID", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 0n
});
