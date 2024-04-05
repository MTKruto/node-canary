"use strict";
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
var _UpdateManager_instances, _a, _UpdateManager_c, _UpdateManager_updateState, _UpdateManager_updateHandler, _UpdateManager_LrecoverUpdateGap, _UpdateManager_LrecoverChannelUpdateGap, _UpdateManager_L$handleUpdate, _UpdateManager_L$processUpdates, _UpdateManager_LfetchState, _UpdateManager_defaultDropPendingUpdates, _UpdateManager_mustDropPendingUpdates, _UpdateManager_state, _UpdateManager_getState, _UpdateManager_setState, _UpdateManager_handleUpdateQueues, _UpdateManager_nonFirst, _UpdateManager_getChannelPtsWithDropPendingUpdatesCheck, _UpdateManager_checkGap, _UpdateManager_checkGapQts, _UpdateManager_checkChannelGap, _UpdateManager_channelUpdateQueues, _UpdateManager_processChannelPtsUpdateInner, _UpdateManager_queueUpdate, _UpdateManager_processChannelPtsUpdate, _UpdateManager_processPtsUpdateInner, _UpdateManager_ptsUpdateQueue, _UpdateManager_processPtsUpdate, _UpdateManager_processQtsUpdateInner, _UpdateManager_qtsUpdateQueue, _UpdateManager_processQtsUpdate, _UpdateManager_processUpdatesQueue, _UpdateManager_processUpdates, _UpdateManager_setUpdateStateDate, _UpdateManager_setUpdatePts, _UpdateManager_setUpdateQts, _UpdateManager_getLocalState, _UpdateManager_recoverChannelUpdateGap, _UpdateManager_handleUpdatesSet, _UpdateManager_handleStoredUpdates, _UpdateManager_handleUpdate;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManager = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _4_constants_js_1 = require("../4_constants.js");
class UpdateManager {
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
        _UpdateManager_ptsUpdateQueue.set(this, new _1_utilities_js_1.Queue("ptsUpdate"));
        _UpdateManager_qtsUpdateQueue.set(this, new _1_utilities_js_1.Queue("qtsUpdate"));
        _UpdateManager_processUpdatesQueue.set(this, new _1_utilities_js_1.Queue("UpdateManager/processUpdates"));
        _UpdateManager_handleUpdatesSet.set(this, new Set());
        __classPrivateFieldSet(this, _UpdateManager_c, c, "f");
        const L = (0, _1_utilities_js_1.getLogger)("UpdateManager").client(c.id);
        __classPrivateFieldSet(this, _UpdateManager_LrecoverUpdateGap, L.branch("recoverUpdateGap"), "f");
        __classPrivateFieldSet(this, _UpdateManager_LrecoverChannelUpdateGap, L.branch("recoverChannelUpdateGap"), "f");
        __classPrivateFieldSet(this, _UpdateManager_L$handleUpdate, L.branch("#handleUpdate"), "f");
        __classPrivateFieldSet(this, _UpdateManager_L$processUpdates, L.branch("#processUpdates"), "f");
        __classPrivateFieldSet(this, _UpdateManager_LfetchState, L.branch("fetchState"), "f");
    }
    static isPtsUpdate(v) {
        return v instanceof _2_tl_js_1.types.UpdateNewMessage ||
            v instanceof _2_tl_js_1.types.UpdateDeleteMessages ||
            v instanceof _2_tl_js_1.types.UpdateReadHistoryInbox ||
            v instanceof _2_tl_js_1.types.UpdateReadHistoryOutbox ||
            v instanceof _2_tl_js_1.types.UpdatePinnedChannelMessages ||
            v instanceof _2_tl_js_1.types.UpdatePinnedMessages ||
            v instanceof _2_tl_js_1.types.UpdateFolderPeers ||
            v instanceof _2_tl_js_1.types.UpdateChannelWebPage ||
            v instanceof _2_tl_js_1.types.UpdateEditMessage ||
            v instanceof _2_tl_js_1.types.UpdateReadMessagesContents ||
            v instanceof _2_tl_js_1.types.UpdateWebPage;
    }
    static isQtsUpdate(v) {
        return v instanceof _2_tl_js_1.types.UpdateNewEncryptedMessage ||
            v instanceof _2_tl_js_1.types.UpdateMessagePollVote ||
            v instanceof _2_tl_js_1.types.UpdateBotStopped ||
            v instanceof _2_tl_js_1.types.UpdateChatParticipant ||
            v instanceof _2_tl_js_1.types.UpdateChannelParticipant ||
            v instanceof _2_tl_js_1.types.UpdateBotChatInviteRequester ||
            v instanceof _2_tl_js_1.types.UpdateBotChatBoost ||
            v instanceof _2_tl_js_1.types.UpdateBotMessageReaction ||
            v instanceof _2_tl_js_1.types.UpdateBotMessageReactions ||
            v instanceof _2_tl_js_1.types.UpdateBotBusinessConnect ||
            v instanceof _2_tl_js_1.types.UpdateBotNewBusinessMessage ||
            v instanceof _2_tl_js_1.types.UpdateBotEditBusinessMessage ||
            v instanceof _2_tl_js_1.types.UpdateBotDeleteBusinessMessage;
    }
    static isChannelPtsUpdate(v) {
        return v instanceof _2_tl_js_1.types.UpdateNewChannelMessage ||
            v instanceof _2_tl_js_1.types.UpdateEditChannelMessage ||
            v instanceof _2_tl_js_1.types.UpdateDeleteChannelMessages ||
            v instanceof _2_tl_js_1.types.UpdateChannelTooLong;
    }
    async fetchState(source) {
        let state = await __classPrivateFieldGet(this, _UpdateManager_c, "f").api.updates.getState();
        const difference = await __classPrivateFieldGet(this, _UpdateManager_c, "f").api.updates.getDifference(state);
        if (difference instanceof _2_tl_js_1.types.updates.Difference) {
            state = difference.state;
        }
        else if (difference instanceof _2_tl_js_1.types.updates.DifferenceSlice) {
            state = difference.intermediate_state;
        }
        __classPrivateFieldSet(this, _UpdateManager_updateState, state, "f");
        __classPrivateFieldGet(this, _UpdateManager_LfetchState, "f").debug(`state fetched [${source}]`);
        if (await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_mustDropPendingUpdates).call(this)) {
            await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, state);
        }
    }
    async processChats(chats) {
        for (const chat of chats) {
            if (chat instanceof _2_tl_js_1.types.Channel || chat instanceof _2_tl_js_1.types.ChannelForbidden) {
                await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.setEntity(chat);
                if ("username" in chat && chat.username) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.updateUsernames((0, _2_tl_js_1.peerToChatId)(chat), [chat.username]);
                }
                if ("usernames" in chat && chat.usernames) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.updateUsernames((0, _2_tl_js_1.peerToChatId)(chat), chat.usernames.map((v) => v.username));
                }
            }
            else if (chat instanceof _2_tl_js_1.types.Chat || chat instanceof _2_tl_js_1.types.ChatForbidden) {
                await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.setEntity(chat);
            }
        }
    }
    async processResult(result) {
        if (result instanceof _2_tl_js_1.types.account.AuthorizationForm ||
            result instanceof _2_tl_js_1.types.account.AutoSaveSettings ||
            result instanceof _2_tl_js_1.types.account.PrivacyRules ||
            result instanceof _2_tl_js_1.types.account.WebAuthorizations ||
            result instanceof _2_tl_js_1.types.AttachMenuBots ||
            result instanceof _2_tl_js_1.types.AttachMenuBotsBot ||
            result instanceof _2_tl_js_1.types.channels.AdminLogResults ||
            result instanceof _2_tl_js_1.types.channels.ChannelParticipant ||
            result instanceof _2_tl_js_1.types.channels.ChannelParticipants ||
            result instanceof _2_tl_js_1.types.channels.SendAsPeers ||
            result instanceof _2_tl_js_1.types.ChatInvite ||
            result instanceof _2_tl_js_1.types.chatlists.ChatlistInvite ||
            result instanceof _2_tl_js_1.types.chatlists.ChatlistInviteAlready ||
            result instanceof _2_tl_js_1.types.chatlists.ChatlistUpdates ||
            result instanceof _2_tl_js_1.types.chatlists.ExportedInvites ||
            result instanceof _2_tl_js_1.types.contacts.Blocked ||
            result instanceof _2_tl_js_1.types.contacts.BlockedSlice ||
            result instanceof _2_tl_js_1.types.contacts.Contacts ||
            result instanceof _2_tl_js_1.types.contacts.Found ||
            result instanceof _2_tl_js_1.types.contacts.ImportedContacts ||
            result instanceof _2_tl_js_1.types.contacts.ResolvedPeer ||
            result instanceof _2_tl_js_1.types.contacts.TopPeers ||
            result instanceof _2_tl_js_1.types.help.PromoData ||
            result instanceof _2_tl_js_1.types.help.RecentMeUrls ||
            result instanceof _2_tl_js_1.types.messages.BotResults ||
            result instanceof _2_tl_js_1.types.messages.ChannelMessages ||
            result instanceof _2_tl_js_1.types.messages.ChatAdminsWithInvites ||
            result instanceof _2_tl_js_1.types.messages.ChatFull ||
            result instanceof _2_tl_js_1.types.messages.ChatInviteImporters ||
            result instanceof _2_tl_js_1.types.messages.Chats ||
            result instanceof _2_tl_js_1.types.messages.ChatsSlice ||
            result instanceof _2_tl_js_1.types.messages.Dialogs ||
            result instanceof _2_tl_js_1.types.messages.DialogsSlice ||
            result instanceof _2_tl_js_1.types.messages.DiscussionMessage ||
            result instanceof _2_tl_js_1.types.messages.ExportedChatInvite ||
            result instanceof _2_tl_js_1.types.messages.ExportedChatInviteReplaced ||
            result instanceof _2_tl_js_1.types.messages.ExportedChatInvites ||
            result instanceof _2_tl_js_1.types.messages.ForumTopics ||
            result instanceof _2_tl_js_1.types.messages.HighScores ||
            result instanceof _2_tl_js_1.types.messages.InactiveChats ||
            result instanceof _2_tl_js_1.types.messages.MessageReactionsList ||
            result instanceof _2_tl_js_1.types.messages.Messages ||
            result instanceof _2_tl_js_1.types.messages.MessagesSlice ||
            result instanceof _2_tl_js_1.types.messages.MessageViews ||
            result instanceof _2_tl_js_1.types.messages.PeerDialogs ||
            result instanceof _2_tl_js_1.types.messages.PeerSettings ||
            result instanceof _2_tl_js_1.types.messages.SearchResultsCalendar ||
            result instanceof _2_tl_js_1.types.messages.SponsoredMessages ||
            result instanceof _2_tl_js_1.types.messages.VotesList ||
            result instanceof _2_tl_js_1.types.messages.WebPage ||
            result instanceof _2_tl_js_1.types.payments.CheckedGiftCode ||
            result instanceof _2_tl_js_1.types.payments.PaymentForm ||
            result instanceof _2_tl_js_1.types.payments.PaymentReceipt ||
            result instanceof _2_tl_js_1.types.phone.GroupCall ||
            result instanceof _2_tl_js_1.types.phone.GroupParticipants ||
            result instanceof _2_tl_js_1.types.phone.JoinAsPeers ||
            result instanceof _2_tl_js_1.types.phone.PhoneCall ||
            result instanceof _2_tl_js_1.types.photos.Photo ||
            result instanceof _2_tl_js_1.types.photos.Photos ||
            result instanceof _2_tl_js_1.types.photos.PhotosSlice ||
            result instanceof _2_tl_js_1.types.premium.BoostsList ||
            result instanceof _2_tl_js_1.types.premium.MyBoosts ||
            result instanceof _2_tl_js_1.types.stats.MegagroupStats ||
            result instanceof _2_tl_js_1.types.stats.PublicForwards ||
            result instanceof _2_tl_js_1.types.stories.AllStories ||
            result instanceof _2_tl_js_1.types.stories.PeerStories ||
            result instanceof _2_tl_js_1.types.stories.Stories ||
            result instanceof _2_tl_js_1.types.stories.StoryViews ||
            result instanceof _2_tl_js_1.types.stories.StoryViewsList ||
            result instanceof _2_tl_js_1.types.users.UserFull) {
            if ("chats" in result) {
                await this.processChats(result.chats);
            }
            if ("users" in result) {
                await this.processUsers(result.users);
            }
            if ("messages" in result && Array.isArray(result.messages)) {
                for (const message of result.messages) {
                    if (message instanceof _2_tl_js_1.types.Message || message instanceof _2_tl_js_1.types.MessageService) {
                        await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.setMessage((0, _2_tl_js_1.peerToChatId)(message.peer_id), message.id, message);
                    }
                }
            }
        }
        if (result instanceof _2_tl_js_1.types.messages.Messages) {
            for (const message of result.messages) {
                if (message instanceof _2_tl_js_1.types.Message || message instanceof _2_tl_js_1.types.MessageService) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.setMessage((0, _2_tl_js_1.peerToChatId)(message.peer_id), message.id, message);
                }
            }
        }
    }
    async processUsers(users) {
        for (const user of users) {
            if (user instanceof _2_tl_js_1.types.User && user.access_hash) {
                await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.setEntity(user);
                if (user.username) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.updateUsernames((0, _2_tl_js_1.peerToChatId)(user), [user.username]);
                }
                if (user.usernames) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.updateUsernames((0, _2_tl_js_1.peerToChatId)(user), user.usernames.map((v) => v.username));
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
            queue = new _1_utilities_js_1.Queue(`handleUpdate-${boxId}`);
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
                if (difference instanceof _2_tl_js_1.types.updates.Difference || difference instanceof _2_tl_js_1.types.updates.DifferenceSlice) {
                    await this.processChats(difference.chats);
                    await this.processUsers(difference.users);
                    for (const message of difference.new_messages) {
                        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processUpdates).call(this, new _2_tl_js_1.types.UpdateNewMessage({ message, pts: 0, pts_count: 0 }), false);
                    }
                    for (const update of difference.other_updates) {
                        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processUpdates).call(this, update, false);
                    }
                    if (difference instanceof _2_tl_js_1.types.updates.Difference) {
                        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, difference.state);
                        __classPrivateFieldGet(this, _UpdateManager_LrecoverUpdateGap, "f").debug("recovered from update gap");
                        break;
                    }
                    else if (difference instanceof _2_tl_js_1.types.updates.DifferenceSlice) {
                        state = difference.intermediate_state;
                    }
                    else {
                        (0, _0_deps_js_1.unreachable)();
                    }
                }
                else if (difference instanceof _2_tl_js_1.types.updates.DifferenceTooLong) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.deleteMessages();
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.removeChats(0);
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.removeChats(1);
                    state.pts = difference.pts;
                    __classPrivateFieldGet(this, _UpdateManager_LrecoverUpdateGap, "f").debug("received differenceTooLong");
                }
                else if (difference instanceof _2_tl_js_1.types.updates.DifferenceEmpty) {
                    await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setUpdateStateDate).call(this, difference.date);
                    __classPrivateFieldGet(this, _UpdateManager_LrecoverUpdateGap, "f").debug("there was no update gap");
                    break;
                }
                else {
                    (0, _0_deps_js_1.unreachable)();
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
exports.UpdateManager = UpdateManager;
_a = UpdateManager, _UpdateManager_c = new WeakMap(), _UpdateManager_updateState = new WeakMap(), _UpdateManager_updateHandler = new WeakMap(), _UpdateManager_LrecoverUpdateGap = new WeakMap(), _UpdateManager_LrecoverChannelUpdateGap = new WeakMap(), _UpdateManager_L$handleUpdate = new WeakMap(), _UpdateManager_L$processUpdates = new WeakMap(), _UpdateManager_LfetchState = new WeakMap(), _UpdateManager_defaultDropPendingUpdates = new WeakMap(), _UpdateManager_state = new WeakMap(), _UpdateManager_handleUpdateQueues = new WeakMap(), _UpdateManager_nonFirst = new WeakMap(), _UpdateManager_channelUpdateQueues = new WeakMap(), _UpdateManager_ptsUpdateQueue = new WeakMap(), _UpdateManager_qtsUpdateQueue = new WeakMap(), _UpdateManager_processUpdatesQueue = new WeakMap(), _UpdateManager_handleUpdatesSet = new WeakMap(), _UpdateManager_instances = new WeakSet(), _UpdateManager_mustDropPendingUpdates = async function _UpdateManager_mustDropPendingUpdates() {
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
        await this.recoverUpdateGap("processUpdates[pts]");
    }
}, _UpdateManager_checkGapQts = async function _UpdateManager_checkGapQts(qts) {
    const localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
    if (localState.qts + _a.QTS_COUNT < qts) {
        await this.recoverUpdateGap("processUpdates[qts]");
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
    const channelId = update instanceof _2_tl_js_1.types.UpdateNewChannelMessage || update instanceof _2_tl_js_1.types.UpdateEditChannelMessage ? update.message.peer_id[_2_tl_js_1.as](_2_tl_js_1.types.PeerChannel).channel_id : update.channel_id;
    if (update instanceof _2_tl_js_1.types.UpdateChannelTooLong) {
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
    const channelId = update instanceof _2_tl_js_1.types.UpdateNewChannelMessage || update instanceof _2_tl_js_1.types.UpdateEditChannelMessage ? update.message.peer_id[_2_tl_js_1.as](_2_tl_js_1.types.PeerChannel).channel_id : update.channel_id;
    let queue = __classPrivateFieldGet(this, _UpdateManager_channelUpdateQueues, "f").get(channelId);
    if (queue == undefined) {
        queue = new _1_utilities_js_1.Queue(`channelUpdates-${channelId}`);
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
    __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_queueUpdate).call(this, update, 1n, false);
}, _UpdateManager_processPtsUpdate = function _UpdateManager_processPtsUpdate(update, checkGap) {
    __classPrivateFieldGet(this, _UpdateManager_ptsUpdateQueue, "f").add(async () => {
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processPtsUpdateInner).call(this, update, checkGap);
    });
}, _UpdateManager_processQtsUpdateInner = async function _UpdateManager_processQtsUpdateInner(update, checkGap) {
    const localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
    if (update.qts != 0) {
        if (checkGap) {
            await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_checkGapQts).call(this, update.qts);
        }
        if (localState.qts + _a.QTS_COUNT > update.qts) {
            return;
        }
    }
    if (__classPrivateFieldGet(this, _UpdateManager_c, "f").guaranteeUpdateDelivery) {
        await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.setUpdate(_a.MAIN_BOX_ID, update);
    }
    if (update.qts != 0) {
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setUpdateQts).call(this, update.qts);
    }
    __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_queueUpdate).call(this, update, 0n, true);
}, _UpdateManager_processQtsUpdate = function _UpdateManager_processQtsUpdate(update, checkGap) {
    __classPrivateFieldGet(this, _UpdateManager_qtsUpdateQueue, "f").add(async () => {
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processQtsUpdateInner).call(this, update, checkGap);
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
    if (updates_ instanceof _2_tl_js_1.types.UpdatesCombined || updates_ instanceof _2_tl_js_1.types.Updates) {
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
    else if (updates_ instanceof _2_tl_js_1.types.UpdateShort) {
        updates = [updates_.update];
    }
    else if (updates_ instanceof _2_tl_js_1.types.UpdateShortMessage) {
        updates = [
            new _2_tl_js_1.types.UpdateNewMessage({
                message: new _2_tl_js_1.types.Message({
                    out: updates_.out,
                    mentioned: updates_.mentioned,
                    media_unread: updates_.media_unread,
                    silent: updates_.silent,
                    id: updates_.id,
                    from_id: updates_.out ? new _2_tl_js_1.types.PeerUser({ user_id: await __classPrivateFieldGet(this, _UpdateManager_c, "f").getSelfId().then(BigInt) }) : new _2_tl_js_1.types.PeerUser({ user_id: updates_.user_id }),
                    peer_id: new _2_tl_js_1.types.PeerUser({ user_id: updates_.user_id }),
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
    else if (updates_ instanceof _2_tl_js_1.types.UpdateShortChatMessage) {
        updates = [
            new _2_tl_js_1.types.UpdateNewMessage({
                message: new _2_tl_js_1.types.Message({
                    out: updates_.out,
                    mentioned: updates_.mentioned,
                    media_unread: updates_.media_unread,
                    silent: updates_.silent,
                    id: updates_.id,
                    from_id: new _2_tl_js_1.types.PeerUser({ user_id: updates_.from_id }),
                    peer_id: new _2_tl_js_1.types.PeerChat({ chat_id: updates_.chat_id }),
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
    else if (updates_ instanceof _2_tl_js_1.types.UpdateShortSentMessage) {
        if (!(call instanceof _2_tl_js_1.functions.messages.sendMessage)) {
            (0, _0_deps_js_1.unreachable)();
        }
        updates = [
            new _2_tl_js_1.types.UpdateNewMessage({
                message: new _2_tl_js_1.types.Message({
                    out: updates_.out,
                    silent: call.silent,
                    id: updates_.id,
                    from_id: new _2_tl_js_1.types.PeerUser({ user_id: await __classPrivateFieldGet(this, _UpdateManager_c, "f").getSelfId().then(BigInt) }),
                    peer_id: (0, _2_tl_js_1.inputPeerToPeer)(call.peer),
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
    else if (updates_ instanceof _2_tl_js_1.types.UpdatesTooLong) {
        await this.recoverUpdateGap("updatesTooLong");
        return;
    }
    else if (updates_ instanceof _2_tl_js_1.types._Update) {
        updates = [updates_];
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
    /// We process the updates when we are sure there is no gap.
    if (updates_ instanceof _2_tl_js_1.types.Updates || updates_ instanceof _2_tl_js_1.types.UpdatesCombined) {
        await this.processChats(updates_.chats);
        await this.processUsers(updates_.users);
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setUpdateStateDate).call(this, updates_.date);
    }
    else if (updates_ instanceof _2_tl_js_1.types.UpdateShort ||
        updates_ instanceof _2_tl_js_1.types.UpdateShortMessage ||
        updates_ instanceof _2_tl_js_1.types.UpdateShortChatMessage ||
        updates_ instanceof _2_tl_js_1.types.UpdateShortSentMessage) {
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setUpdateStateDate).call(this, updates_.date);
    }
    for (const update of updates) {
        if (update instanceof _2_tl_js_1.types.UpdatePtsChanged) {
            await this.fetchState("updatePtsChanged");
            if (__classPrivateFieldGet(this, _UpdateManager_updateState, "f")) {
                await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, __classPrivateFieldGet(this, _UpdateManager_updateState, "f"));
            }
            else {
                (0, _0_deps_js_1.unreachable)();
            }
        }
        else if (_a.isPtsUpdate(update)) {
            __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processPtsUpdate).call(this, update, checkGap);
        }
        else if (_a.isChannelPtsUpdate(update)) {
            __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processChannelPtsUpdate).call(this, update, checkGap);
        }
        else if (_a.isQtsUpdate(update)) {
            __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processQtsUpdate).call(this, update, checkGap);
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
}, _UpdateManager_setUpdateQts = async function _UpdateManager_setUpdateQts(qts) {
    const localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
    localState.qts = qts;
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
                (0, _0_deps_js_1.unreachable)();
            }
        }
    }
    return localState;
}, _UpdateManager_recoverChannelUpdateGap = async function _UpdateManager_recoverChannelUpdateGap(channelId, source) {
    __classPrivateFieldGet(this, _UpdateManager_LrecoverChannelUpdateGap, "f").debug(`recovering channel update gap [${channelId}, ${source}]`);
    const pts_ = await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.getChannelPts(channelId);
    let pts = pts_ == null ? 1 : pts_;
    while (true) {
        const { access_hash } = await __classPrivateFieldGet(this, _UpdateManager_c, "f").getInputPeer(_1_utilities_js_1.ZERO_CHANNEL_ID + -Number(channelId)).then((v) => v[_2_tl_js_1.as](_2_tl_js_1.types.InputPeerChannel));
        const difference = await __classPrivateFieldGet(this, _UpdateManager_c, "f").api.updates.getChannelDifference({
            pts,
            channel: new _2_tl_js_1.types.InputChannel({ channel_id: channelId, access_hash }),
            filter: new _2_tl_js_1.types.ChannelMessagesFilterEmpty(),
            limit: await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.getAccountType() == "user" ? _4_constants_js_1.CHANNEL_DIFFERENCE_LIMIT_USER : _4_constants_js_1.CHANNEL_DIFFERENCE_LIMIT_BOT,
        });
        if (difference instanceof _2_tl_js_1.types.updates.ChannelDifference) {
            await this.processChats(difference.chats);
            await this.processUsers(difference.users);
            for (const message of difference.new_messages) {
                await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processUpdates).call(this, new _2_tl_js_1.types.UpdateNewChannelMessage({ message, pts: 0, pts_count: 0 }), false);
            }
            for (const update of difference.other_updates) {
                await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processUpdates).call(this, update, false);
            }
            await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.setChannelPts(channelId, difference.pts);
            __classPrivateFieldGet(this, _UpdateManager_LrecoverChannelUpdateGap, "f").debug(`recovered from update gap [${channelId}, ${source}]`, channelId, source);
            break;
        }
        else if (difference instanceof _2_tl_js_1.types.updates.ChannelDifferenceTooLong) {
            // TODO: invalidate messages
            __classPrivateFieldGet(this, _UpdateManager_LrecoverChannelUpdateGap, "f").debug("received channelDifferenceTooLong");
            await this.processChats(difference.chats);
            await this.processUsers(difference.users);
            for (const message of difference.messages) {
                await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processUpdates).call(this, new _2_tl_js_1.types.UpdateNewChannelMessage({ message, pts: 0, pts_count: 0 }), false);
            }
            const pts_ = difference.dialog[_2_tl_js_1.as](_2_tl_js_1.types.Dialog).pts;
            if (pts_ != undefined) {
                pts = pts_;
            }
            else {
                (0, _0_deps_js_1.unreachable)();
            }
            __classPrivateFieldGet(this, _UpdateManager_LrecoverChannelUpdateGap, "f").debug("processed channelDifferenceTooLong");
        }
        else if (difference instanceof _2_tl_js_1.types.updates.ChannelDifferenceEmpty) {
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
Object.defineProperty(UpdateManager, "QTS_COUNT", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 1
});
Object.defineProperty(UpdateManager, "MAIN_BOX_ID", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 0n
});
