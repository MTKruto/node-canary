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
exports.BroadcastRequired = exports.BroadcastPublicVotersForbidden = exports.BroadcastIdInvalid = exports.BroadcastForbidden = exports.BroadcastCallsDisabled = exports.BotScoreNotModified = exports.BotResponseTimeout = exports.BotPollsDisabled = exports.BotPaymentsDisabled = exports.BotOnesideNotAvail = exports.BotMissing = exports.BotMethodInvalid = exports.BotInvalid = exports.BotInlineDisabled = exports.BotGroupsBlocked = exports.BotGamesDisabled = exports.BotDomainInvalid = exports.BotCommandInvalid = exports.BotCommandDescriptionInvalid = exports.BotChannelsNa = exports.BotsTooMuch = exports.BasePortLocInvalid = exports.BannedRightsInvalid = exports.BankCardNumberInvalid = exports.AutoarchiveNotAvailable = exports.AuthTokenInvalid = exports.AuthTokenExpired = exports.AuthTokenException = exports.AuthTokenAlreadyAccepted = exports.AuthRestart = exports.AuthKeyUnregistered = exports.AuthKeyPermEmpty = exports.AuthKeyInvalid = exports.AuthKeyDuplicated = exports.AuthBytesInvalid = exports.AudioTitleEmpty = exports.AudioContentUrlEmpty = exports.ArticleTitleEmpty = exports.ApiIdPublishedFlood = exports.ApiIdInvalid = exports.AlbumPhotosTooMany = exports.AdminRankInvalid = exports.AdminRankEmojiNotAllowed = exports.AdminIdInvalid = exports.AdminsTooMuch = exports.ActiveUserRequired = exports.AccessTokenInvalid = exports.AccessTokenExpired = exports.AboutTooLong = exports.ErrorWithCall = void 0;
exports.ChatTooBig = exports.ChatTitleEmpty = exports.ChatSendStickersForbidden = exports.ChatSendPollForbidden = exports.ChatSendMediaForbidden = exports.ChatSendInlineForbidden = exports.ChatSendGifsForbidden = exports.ChatSendGameForbidden = exports.ChatRevokeDateUnsupported = exports.ChatRestricted = exports.ChatNotModified = exports.ChatLinkExists = exports.ChatInvitePermanent = exports.ChatInvalid = exports.ChatIdInvalid = exports.ChatIdGenerateFailed = exports.ChatIdEmpty = exports.ChatGuestSendForbidden = exports.ChatGetFailed = exports.ChatForwardsRestricted = exports.ChatForbidden = exports.ChatDiscussionUnallowed = exports.ChatAdminRequired = exports.ChatAdminInviteRequired = exports.ChatAboutTooLong = exports.ChatAboutNotModified = exports.ChannelTooLarge = exports.ChannelTooBig = exports.ChannelPublicGroupNa = exports.ChannelPrivate = exports.ChannelParicipantMissing = exports.ChannelInvalid = exports.ChannelIdInvalid = exports.ChannelForumMissing = exports.ChannelBanned = exports.ChannelsTooMuch = exports.ChannelsAdminPublicTooMuch = exports.ChannelsAdminLocatedTooMuch = exports.CdnUploadTimeout = exports.CdnMethodInvalid = exports.CallProtocolFlagsInvalid = exports.CallPeerInvalid = exports.CallOccupyFailed = exports.CallAlreadyDeclined = exports.CallAlreadyAccepted = exports.ButtonUserPrivacyRestricted = exports.ButtonUrlInvalid = exports.ButtonTypeInvalid = exports.ButtonTextInvalid = exports.ButtonDataInvalid = void 0;
exports.ExternalUrlInvalid = exports.ExportCardInvalid = exports.ExpireForbidden = exports.ExpireDateInvalid = exports.ErrorTextEmpty = exports.EntityMentionUserInvalid = exports.EntityBoundsInvalid = exports.EntitiesTooLong = exports.EncryptionOccupyFailed = exports.EncryptionIdInvalid = exports.EncryptionDeclined = exports.EncryptionAlreadyDeclined = exports.EncryptionAlreadyAccepted = exports.EncryptedMessageInvalid = exports.EmoticonStickerpackMissing = exports.EmoticonInvalid = exports.EmoticonEmpty = exports.EmojiNotModified = exports.EmojiInvalid = exports.EmailVerifyExpired = exports.EmailUnconfirmed = exports.EmailInvalid = exports.EmailHashExpired = exports.EditBotInviteForbidden = exports.DocumentInvalid = exports.DhGAInvalid = exports.DcIdInvalid = exports.DateEmpty = exports.DataTooLong = exports.DataJsonInvalid = exports.DataInvalid = exports.CurrencyTotalAmountInvalid = exports.CreateCallFailed = exports.ContactReqMissing = exports.ContactNameEmpty = exports.ContactIdInvalid = exports.ContactAddMissing = exports.ConnectionSystemLangCodeEmpty = exports.ConnectionSystemEmpty = exports.ConnectionNotInited = exports.ConnectionLayerInvalid = exports.ConnectionLangPackInvalid = exports.ConnectionDeviceModelEmpty = exports.ConnectionAppVersionEmpty = exports.ConnectionApiIdInvalid = exports.CodeInvalid = exports.CodeHashInvalid = exports.CodeEmpty = exports.ChpCallFail = exports.ChatWriteForbidden = void 0;
exports.HideRequesterMissing = exports.HashInvalid = exports.GroupCallInvalid = exports.GroupedMediaInvalid = exports.GroupcallSsrcDuplicateMuch = exports.GroupcallNotModified = exports.GroupcallJoinMissing = exports.GroupcallInvalid = exports.GroupcallForbidden = exports.GroupcallAlreadyStarted = exports.GroupcallAlreadyDiscarded = exports.GroupcallAddParticipantsFailed = exports.GraphOutdatedReload = exports.GraphInvalidReload = exports.GraphExpiredReload = exports.GifIdInvalid = exports.GifContentTypeInvalid = exports.GeoPointInvalid = exports.GameBotInvalid = exports.FromPeerInvalid = exports.FromMessageBotDisabled = exports.FreshResetAuthorisationForbidden = exports.FreshChangePhoneForbidden = exports.FreshChangeAdminsForbidden = exports.FolderIdInvalid = exports.FolderIdEmpty = exports.FirstnameInvalid = exports.FilterTitleEmpty = exports.FilterNotSupported = exports.FilterIncludeEmpty = exports.FilterIdInvalid = exports.FileTitleEmpty = exports.FileReferenceInvalid = exports.FileReferenceExpired = exports.FileReferenceEmpty = exports.FilePartXMissing = exports.FilePartTooBig = exports.FilePartSizeInvalid = exports.FilePartSizeChanged = exports.FilePartLengthInvalid = exports.FilePartInvalid = exports.FilePartEmpty = exports.FilePart_0Missing = exports.FilePartsInvalid = exports.FileIdInvalid = exports.FileEmtpy = exports.FileContentTypeInvalid = exports.FilerefUpgradeNeeded = exports.FieldNameInvalid = exports.FieldNameEmpty = void 0;
exports.MessageAuthorRequired = exports.MemberOccupyPrimaryLocFailed = exports.MemberNoLocation = exports.MegagroupRequired = exports.MegagroupPrehistoryHidden = exports.MegagroupIdInvalid = exports.MediaTtlInvalid = exports.MediaPrevInvalid = exports.MediaNewInvalid = exports.MediaInvalid = exports.MediaGroupedInvalid = exports.MediaEmpty = exports.MediaCaptionTooLong = exports.Md5ChecksumInvalid = exports.MaxQtsInvalid = exports.MaxIdInvalid = exports.MaxDateInvalid = exports.LocationInvalid = exports.LinkNotModified = exports.LimitInvalid = exports.LastnameInvalid = exports.LangPackInvalid = exports.LangCodeNotSupported = exports.LangCodeInvalid = exports.JoinAsPeerInvalid = exports.InvoicePayloadInvalid = exports.InviteRevokedMissing = exports.InviteRequestSent = exports.InviteHashInvalid = exports.InviteHashExpired = exports.InviteHashEmpty = exports.InviteForbiddenWithJoinas = exports.InterdcXCallRichError = exports.InterdcXCallError = exports.InputUserDeactivated = exports.InputTextEmpty = exports.InputRequestTooLong = exports.InputMethodInvalid = exports.InputLayerInvalid = exports.InputFilterInvalid = exports.InputFetchFail = exports.InputFetchError = exports.InputConstructorInvalid = exports.InlineResultExpired = exports.InlineBotRequired = exports.ImportIdInvalid = exports.ImportFormatUnrecognized = exports.ImportFileInvalid = exports.ImageProcessFailed = exports.HistoryGetFailed = void 0;
exports.PhoneCodeEmpty = exports.PersistentTimestampOutdated = exports.PersistentTimestampInvalid = exports.PersistentTimestampEmpty = exports.PeerIdNotSupported = exports.PeerIdInvalid = exports.PeerHistoryEmpty = exports.PeerFlood = exports.PaymentProviderInvalid = exports.PasswordRequired = exports.PasswordRecoveryNa = exports.PasswordRecoveryExpired = exports.PasswordMissing = exports.PasswordHashInvalid = exports.PasswordEmpty = exports.ParticipantVersionOutdated = exports.ParticipantJoinMissing = exports.ParticipantIdInvalid = exports.ParticipantCallFailed = exports.ParticipantsTooFew = exports.PackTitleInvalid = exports.PackShortNameOccupied = exports.PackShortNameInvalid = exports.OptionInvalid = exports.OptionsTooMuch = exports.OffsetPeerIdInvalid = exports.OffsetInvalid = exports.NotAllowed = exports.NextOffsetInvalid = exports.NewSettingsInvalid = exports.NewSettingsEmpty = exports.NewSaltInvalid = exports.NeedMemberInvalid = exports.NeedChatInvalid = exports.MultiMediaTooLong = exports.MtSendQueueTooLong = exports.MsgWaitFailed = exports.MsgTooOld = exports.MsgIdInvalid = exports.MsgidDecreaseRetry = exports.MinDateInvalid = exports.MethodInvalid = exports.MessageTooLong = exports.MessagePollClosed = exports.MessageNotModified = exports.MessageIdInvalid = exports.MessageIdsEmpty = exports.MessageEmpty = exports.MessageEditTimeExpired = exports.MessageDeleteForbidden = void 0;
exports.QuizCorrectAnswerInvalid = exports.QuizCorrectAnswersTooMuch = exports.QuizCorrectAnswersEmpty = exports.QuizAnswerMissing = exports.QueryTooShort = exports.QueryIdInvalid = exports.QueryIdEmpty = exports.PublicKeyRequired = exports.PublicChannelMissing = exports.PtsChangeEmpty = exports.PrivacyValueInvalid = exports.PrivacyTooLong = exports.PrivacyKeyInvalid = exports.PreviousChatImportActiveWaitXmin = exports.PremiumCurrentlyUnavailable = exports.PremiumAccountRequired = exports.PostponedTimeout = exports.PollVoteRequired = exports.PollUnsupported = exports.PollQuestionInvalid = exports.PollOptionInvalid = exports.PollOptionDuplicate = exports.PollAnswerInvalid = exports.PollAnswersInvalid = exports.PinRestricted = exports.PinnedDialogsTooMuch = exports.PhotoThumbUrlEmpty = exports.PhotoSaveFileInvalid = exports.PhotoInvalidDimensions = exports.PhotoInvalid = exports.PhotoIdInvalid = exports.PhotoFileMissing = exports.PhotoExtInvalid = exports.PhotoCropSizeSmall = exports.PhotoCropFileMissing = exports.PhotoContentUrlEmpty = exports.PhotoContentTypeInvalid = exports.PhonePasswordProtected = exports.PhonePasswordFlood = exports.PhoneNumberUnoccupied = exports.PhoneNumberOccupied = exports.PhoneNumberInvalid = exports.PhoneNumberFlood = exports.PhoneNumberBanned = exports.PhoneNumberAppSignupForbidden = exports.PhoneNotOccupied = exports.PhoneHashExpired = exports.PhoneCodeInvalid = exports.PhoneCodeHashEmpty = exports.PhoneCodeExpired = void 0;
exports.SignInFailed = exports.ShortNameOccupied = exports.ShortNameInvalid = exports.ShortnameOccupyFailed = exports.Sha256HashInvalid = exports.SettingsInvalid = exports.SessionRevoked = exports.SessionPasswordNeeded = exports.SessionExpired = exports.SensitiveChangeForbidden = exports.SendMessageTypeInvalid = exports.SendMessageMediaInvalid = exports.SendCodeUnavailable = exports.SendAsPeerInvalid = exports.SecondsInvalid = exports.SearchWithLinkNotSupported = exports.SearchQueryEmpty = exports.ScoreInvalid = exports.ScheduleTooMuch = exports.ScheduleStatusPrivate = exports.ScheduleDateTooLate = exports.ScheduleDateInvalid = exports.ScheduleBotNotAllowed = exports.RsaDecryptFailed = exports.RpcMcgetFail = exports.RpcCallFail = exports.RightForbidden = exports.RightsNotModified = exports.RevoteNotAllowed = exports.ResultTypeInvalid = exports.ResultIdInvalid = exports.ResultIdEmpty = exports.ResultIdDuplicate = exports.ResultsTooMuch = exports.ResetRequestMissing = exports.ReplyMarkupTooLong = exports.ReplyMarkupInvalid = exports.ReplyMarkupGameEmpty = exports.ReplyMarkupBuyEmpty = exports.RegIdGenerateFailed = exports.ReflectorNotAvailable = exports.ReactionInvalid = exports.ReactionEmpty = exports.ReactionsTooMany = exports.RangesInvalid = exports.RandomLengthInvalid = exports.RandomIdInvalid = exports.RandomIdEmpty = exports.RandomIdDuplicate = exports.QuizMultipleInvalid = void 0;
exports.TtlPeriodInvalid = exports.TtlMediaInvalid = exports.TtlDaysInvalid = exports.ToLangInvalid = exports.TopicDeleted = exports.TokenInvalid = exports.TmpPasswordInvalid = exports.TmpPasswordDisabled = exports.TitleInvalid = exports.Timeout = exports.ThemeTitleInvalid = exports.ThemeMimeInvalid = exports.ThemeInvalid = exports.ThemeFormatInvalid = exports.ThemeFileInvalid = exports.TempAuthKeyEmpty = exports.TempAuthKeyAlreadyBound = exports.TakeoutRequired = exports.TakeoutInvalid = exports.SwitchPmTextEmpty = exports.StoreInvalidScalarType = exports.StorageCheckFailed = exports.StickerVideoNowebm = exports.StickerVideoNodoc = exports.StickerVideoBig = exports.StickerThumbTgsNotgs = exports.StickerThumbPngNopng = exports.StickerTgsNotgs = exports.StickerTgsNodoc = exports.StickerPngNopng = exports.StickerPngDimensions = exports.StickerMimeInvalid = exports.StickerInvalid = exports.StickerIdInvalid = exports.StickerGifDimensions = exports.StickerFileInvalid = exports.StickerEmojiInvalid = exports.StickerDocumentInvalid = exports.StickersTooMuch = exports.StickersEmpty = exports.StickersetOwnerAnonymous = exports.StickersetInvalid = exports.StickerpackStickersTooMuch = exports.StartParamTooLong = exports.StartParamInvalid = exports.StartParamEmpty = exports.SrpPasswordChanged = exports.SrpIdInvalid = exports.SmsCodeCreateFailed = exports.SlowmodeMultiMsgsDisabled = void 0;
exports.WebdocumentInvalid = exports.WcConvertUrlInvalid = exports.WallpaperMimeInvalid = exports.WallpaperInvalid = exports.WallpaperFileInvalid = exports.VoiceMessagesForbidden = exports.VideoTitleEmpty = exports.VideoFileInvalid = exports.VideoContentTypeInvalid = exports.UserVolumeInvalid = exports.UserRestricted = exports.UserPrivacyRestricted = exports.UserNotParticipant = exports.UserNotMutualContact = exports.UserKicked = exports.UserIsBot = exports.UserIsBlocked = exports.UserInvalid = exports.UserIdInvalid = exports.UserDeleted = exports.UserDeactivatedBan = exports.UserDeactivated = exports.UserCreator = exports.UserChannelsTooMuch = exports.UserBotRequired = exports.UserBotInvalid = exports.UserBot = exports.UserBlocked = exports.UserBannedInChannel = exports.UserAlreadyParticipant = exports.UserAlreadyInvited = exports.UserAdminInvalid = exports.UsersTooMuch = exports.UsersTooFew = exports.UserpicUploadRequired = exports.UserpicPrivacyRequired = exports.UsernamePurchaseAvailable = exports.UsernameOccupied = exports.UsernameNotOccupied = exports.UsernameNotModified = exports.UsernameInvalid = exports.UsageLimitInvalid = exports.UrlInvalid = exports.UpdateAppToLogin = exports.UntilDateInvalid = exports.UnknownMethod = exports.UnknownError = exports.Timedout = exports.TypeConstructorInvalid = exports.TypesEmpty = void 0;
exports.map = exports.YouBlockedUser = exports.WorkerBusyTooLongRetry = exports.WebpushTokenInvalid = exports.WebpushKeyInvalid = exports.WebpushAuthInvalid = exports.WebpageMediaEmpty = exports.WebpageCurlFailed = exports.WebdocumentUrlInvalid = exports.WebdocumentSizeTooBig = exports.WebdocumentMimeInvalid = void 0;
const _2_tl_js_1 = require("./2_tl.js");
class ErrorWithCall extends _2_tl_js_1.types.Rpc_error {
    constructor(params) {
        super(params);
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.call = params.call;
    }
}
exports.ErrorWithCall = ErrorWithCall;
class AboutTooLong extends ErrorWithCall {
}
exports.AboutTooLong = AboutTooLong;
class AccessTokenExpired extends ErrorWithCall {
}
exports.AccessTokenExpired = AccessTokenExpired;
class AccessTokenInvalid extends ErrorWithCall {
}
exports.AccessTokenInvalid = AccessTokenInvalid;
class ActiveUserRequired extends ErrorWithCall {
}
exports.ActiveUserRequired = ActiveUserRequired;
class AdminsTooMuch extends ErrorWithCall {
}
exports.AdminsTooMuch = AdminsTooMuch;
class AdminIdInvalid extends ErrorWithCall {
}
exports.AdminIdInvalid = AdminIdInvalid;
class AdminRankEmojiNotAllowed extends ErrorWithCall {
}
exports.AdminRankEmojiNotAllowed = AdminRankEmojiNotAllowed;
class AdminRankInvalid extends ErrorWithCall {
}
exports.AdminRankInvalid = AdminRankInvalid;
class AlbumPhotosTooMany extends ErrorWithCall {
}
exports.AlbumPhotosTooMany = AlbumPhotosTooMany;
class ApiIdInvalid extends ErrorWithCall {
}
exports.ApiIdInvalid = ApiIdInvalid;
class ApiIdPublishedFlood extends ErrorWithCall {
}
exports.ApiIdPublishedFlood = ApiIdPublishedFlood;
class ArticleTitleEmpty extends ErrorWithCall {
}
exports.ArticleTitleEmpty = ArticleTitleEmpty;
class AudioContentUrlEmpty extends ErrorWithCall {
}
exports.AudioContentUrlEmpty = AudioContentUrlEmpty;
class AudioTitleEmpty extends ErrorWithCall {
}
exports.AudioTitleEmpty = AudioTitleEmpty;
class AuthBytesInvalid extends ErrorWithCall {
}
exports.AuthBytesInvalid = AuthBytesInvalid;
class AuthKeyDuplicated extends ErrorWithCall {
}
exports.AuthKeyDuplicated = AuthKeyDuplicated;
class AuthKeyInvalid extends ErrorWithCall {
}
exports.AuthKeyInvalid = AuthKeyInvalid;
class AuthKeyPermEmpty extends ErrorWithCall {
}
exports.AuthKeyPermEmpty = AuthKeyPermEmpty;
class AuthKeyUnregistered extends ErrorWithCall {
}
exports.AuthKeyUnregistered = AuthKeyUnregistered;
class AuthRestart extends ErrorWithCall {
}
exports.AuthRestart = AuthRestart;
class AuthTokenAlreadyAccepted extends ErrorWithCall {
}
exports.AuthTokenAlreadyAccepted = AuthTokenAlreadyAccepted;
class AuthTokenException extends ErrorWithCall {
}
exports.AuthTokenException = AuthTokenException;
class AuthTokenExpired extends ErrorWithCall {
}
exports.AuthTokenExpired = AuthTokenExpired;
class AuthTokenInvalid extends ErrorWithCall {
}
exports.AuthTokenInvalid = AuthTokenInvalid;
class AutoarchiveNotAvailable extends ErrorWithCall {
}
exports.AutoarchiveNotAvailable = AutoarchiveNotAvailable;
class BankCardNumberInvalid extends ErrorWithCall {
}
exports.BankCardNumberInvalid = BankCardNumberInvalid;
class BannedRightsInvalid extends ErrorWithCall {
}
exports.BannedRightsInvalid = BannedRightsInvalid;
class BasePortLocInvalid extends ErrorWithCall {
}
exports.BasePortLocInvalid = BasePortLocInvalid;
class BotsTooMuch extends ErrorWithCall {
}
exports.BotsTooMuch = BotsTooMuch;
class BotChannelsNa extends ErrorWithCall {
}
exports.BotChannelsNa = BotChannelsNa;
class BotCommandDescriptionInvalid extends ErrorWithCall {
}
exports.BotCommandDescriptionInvalid = BotCommandDescriptionInvalid;
class BotCommandInvalid extends ErrorWithCall {
}
exports.BotCommandInvalid = BotCommandInvalid;
class BotDomainInvalid extends ErrorWithCall {
}
exports.BotDomainInvalid = BotDomainInvalid;
class BotGamesDisabled extends ErrorWithCall {
}
exports.BotGamesDisabled = BotGamesDisabled;
class BotGroupsBlocked extends ErrorWithCall {
}
exports.BotGroupsBlocked = BotGroupsBlocked;
class BotInlineDisabled extends ErrorWithCall {
}
exports.BotInlineDisabled = BotInlineDisabled;
class BotInvalid extends ErrorWithCall {
}
exports.BotInvalid = BotInvalid;
class BotMethodInvalid extends ErrorWithCall {
}
exports.BotMethodInvalid = BotMethodInvalid;
class BotMissing extends ErrorWithCall {
}
exports.BotMissing = BotMissing;
class BotOnesideNotAvail extends ErrorWithCall {
}
exports.BotOnesideNotAvail = BotOnesideNotAvail;
class BotPaymentsDisabled extends ErrorWithCall {
}
exports.BotPaymentsDisabled = BotPaymentsDisabled;
class BotPollsDisabled extends ErrorWithCall {
}
exports.BotPollsDisabled = BotPollsDisabled;
class BotResponseTimeout extends ErrorWithCall {
}
exports.BotResponseTimeout = BotResponseTimeout;
class BotScoreNotModified extends ErrorWithCall {
}
exports.BotScoreNotModified = BotScoreNotModified;
class BroadcastCallsDisabled extends ErrorWithCall {
}
exports.BroadcastCallsDisabled = BroadcastCallsDisabled;
class BroadcastForbidden extends ErrorWithCall {
}
exports.BroadcastForbidden = BroadcastForbidden;
class BroadcastIdInvalid extends ErrorWithCall {
}
exports.BroadcastIdInvalid = BroadcastIdInvalid;
class BroadcastPublicVotersForbidden extends ErrorWithCall {
}
exports.BroadcastPublicVotersForbidden = BroadcastPublicVotersForbidden;
class BroadcastRequired extends ErrorWithCall {
}
exports.BroadcastRequired = BroadcastRequired;
class ButtonDataInvalid extends ErrorWithCall {
}
exports.ButtonDataInvalid = ButtonDataInvalid;
class ButtonTextInvalid extends ErrorWithCall {
}
exports.ButtonTextInvalid = ButtonTextInvalid;
class ButtonTypeInvalid extends ErrorWithCall {
}
exports.ButtonTypeInvalid = ButtonTypeInvalid;
class ButtonUrlInvalid extends ErrorWithCall {
}
exports.ButtonUrlInvalid = ButtonUrlInvalid;
class ButtonUserPrivacyRestricted extends ErrorWithCall {
}
exports.ButtonUserPrivacyRestricted = ButtonUserPrivacyRestricted;
class CallAlreadyAccepted extends ErrorWithCall {
}
exports.CallAlreadyAccepted = CallAlreadyAccepted;
class CallAlreadyDeclined extends ErrorWithCall {
}
exports.CallAlreadyDeclined = CallAlreadyDeclined;
class CallOccupyFailed extends ErrorWithCall {
}
exports.CallOccupyFailed = CallOccupyFailed;
class CallPeerInvalid extends ErrorWithCall {
}
exports.CallPeerInvalid = CallPeerInvalid;
class CallProtocolFlagsInvalid extends ErrorWithCall {
}
exports.CallProtocolFlagsInvalid = CallProtocolFlagsInvalid;
class CdnMethodInvalid extends ErrorWithCall {
}
exports.CdnMethodInvalid = CdnMethodInvalid;
class CdnUploadTimeout extends ErrorWithCall {
}
exports.CdnUploadTimeout = CdnUploadTimeout;
class ChannelsAdminLocatedTooMuch extends ErrorWithCall {
}
exports.ChannelsAdminLocatedTooMuch = ChannelsAdminLocatedTooMuch;
class ChannelsAdminPublicTooMuch extends ErrorWithCall {
}
exports.ChannelsAdminPublicTooMuch = ChannelsAdminPublicTooMuch;
class ChannelsTooMuch extends ErrorWithCall {
}
exports.ChannelsTooMuch = ChannelsTooMuch;
class ChannelBanned extends ErrorWithCall {
}
exports.ChannelBanned = ChannelBanned;
class ChannelForumMissing extends ErrorWithCall {
}
exports.ChannelForumMissing = ChannelForumMissing;
class ChannelIdInvalid extends ErrorWithCall {
}
exports.ChannelIdInvalid = ChannelIdInvalid;
class ChannelInvalid extends ErrorWithCall {
}
exports.ChannelInvalid = ChannelInvalid;
class ChannelParicipantMissing extends ErrorWithCall {
}
exports.ChannelParicipantMissing = ChannelParicipantMissing;
class ChannelPrivate extends ErrorWithCall {
}
exports.ChannelPrivate = ChannelPrivate;
class ChannelPublicGroupNa extends ErrorWithCall {
}
exports.ChannelPublicGroupNa = ChannelPublicGroupNa;
class ChannelTooBig extends ErrorWithCall {
}
exports.ChannelTooBig = ChannelTooBig;
class ChannelTooLarge extends ErrorWithCall {
}
exports.ChannelTooLarge = ChannelTooLarge;
class ChatAboutNotModified extends ErrorWithCall {
}
exports.ChatAboutNotModified = ChatAboutNotModified;
class ChatAboutTooLong extends ErrorWithCall {
}
exports.ChatAboutTooLong = ChatAboutTooLong;
class ChatAdminInviteRequired extends ErrorWithCall {
}
exports.ChatAdminInviteRequired = ChatAdminInviteRequired;
class ChatAdminRequired extends ErrorWithCall {
}
exports.ChatAdminRequired = ChatAdminRequired;
class ChatDiscussionUnallowed extends ErrorWithCall {
}
exports.ChatDiscussionUnallowed = ChatDiscussionUnallowed;
class ChatForbidden extends ErrorWithCall {
}
exports.ChatForbidden = ChatForbidden;
class ChatForwardsRestricted extends ErrorWithCall {
}
exports.ChatForwardsRestricted = ChatForwardsRestricted;
class ChatGetFailed extends ErrorWithCall {
}
exports.ChatGetFailed = ChatGetFailed;
class ChatGuestSendForbidden extends ErrorWithCall {
}
exports.ChatGuestSendForbidden = ChatGuestSendForbidden;
class ChatIdEmpty extends ErrorWithCall {
}
exports.ChatIdEmpty = ChatIdEmpty;
class ChatIdGenerateFailed extends ErrorWithCall {
}
exports.ChatIdGenerateFailed = ChatIdGenerateFailed;
class ChatIdInvalid extends ErrorWithCall {
}
exports.ChatIdInvalid = ChatIdInvalid;
class ChatInvalid extends ErrorWithCall {
}
exports.ChatInvalid = ChatInvalid;
class ChatInvitePermanent extends ErrorWithCall {
}
exports.ChatInvitePermanent = ChatInvitePermanent;
class ChatLinkExists extends ErrorWithCall {
}
exports.ChatLinkExists = ChatLinkExists;
class ChatNotModified extends ErrorWithCall {
}
exports.ChatNotModified = ChatNotModified;
class ChatRestricted extends ErrorWithCall {
}
exports.ChatRestricted = ChatRestricted;
class ChatRevokeDateUnsupported extends ErrorWithCall {
}
exports.ChatRevokeDateUnsupported = ChatRevokeDateUnsupported;
class ChatSendGameForbidden extends ErrorWithCall {
}
exports.ChatSendGameForbidden = ChatSendGameForbidden;
class ChatSendGifsForbidden extends ErrorWithCall {
}
exports.ChatSendGifsForbidden = ChatSendGifsForbidden;
class ChatSendInlineForbidden extends ErrorWithCall {
}
exports.ChatSendInlineForbidden = ChatSendInlineForbidden;
class ChatSendMediaForbidden extends ErrorWithCall {
}
exports.ChatSendMediaForbidden = ChatSendMediaForbidden;
class ChatSendPollForbidden extends ErrorWithCall {
}
exports.ChatSendPollForbidden = ChatSendPollForbidden;
class ChatSendStickersForbidden extends ErrorWithCall {
}
exports.ChatSendStickersForbidden = ChatSendStickersForbidden;
class ChatTitleEmpty extends ErrorWithCall {
}
exports.ChatTitleEmpty = ChatTitleEmpty;
class ChatTooBig extends ErrorWithCall {
}
exports.ChatTooBig = ChatTooBig;
class ChatWriteForbidden extends ErrorWithCall {
}
exports.ChatWriteForbidden = ChatWriteForbidden;
class ChpCallFail extends ErrorWithCall {
}
exports.ChpCallFail = ChpCallFail;
class CodeEmpty extends ErrorWithCall {
}
exports.CodeEmpty = CodeEmpty;
class CodeHashInvalid extends ErrorWithCall {
}
exports.CodeHashInvalid = CodeHashInvalid;
class CodeInvalid extends ErrorWithCall {
}
exports.CodeInvalid = CodeInvalid;
class ConnectionApiIdInvalid extends ErrorWithCall {
}
exports.ConnectionApiIdInvalid = ConnectionApiIdInvalid;
class ConnectionAppVersionEmpty extends ErrorWithCall {
}
exports.ConnectionAppVersionEmpty = ConnectionAppVersionEmpty;
class ConnectionDeviceModelEmpty extends ErrorWithCall {
}
exports.ConnectionDeviceModelEmpty = ConnectionDeviceModelEmpty;
class ConnectionLangPackInvalid extends ErrorWithCall {
}
exports.ConnectionLangPackInvalid = ConnectionLangPackInvalid;
class ConnectionLayerInvalid extends ErrorWithCall {
}
exports.ConnectionLayerInvalid = ConnectionLayerInvalid;
class ConnectionNotInited extends ErrorWithCall {
}
exports.ConnectionNotInited = ConnectionNotInited;
class ConnectionSystemEmpty extends ErrorWithCall {
}
exports.ConnectionSystemEmpty = ConnectionSystemEmpty;
class ConnectionSystemLangCodeEmpty extends ErrorWithCall {
}
exports.ConnectionSystemLangCodeEmpty = ConnectionSystemLangCodeEmpty;
class ContactAddMissing extends ErrorWithCall {
}
exports.ContactAddMissing = ContactAddMissing;
class ContactIdInvalid extends ErrorWithCall {
}
exports.ContactIdInvalid = ContactIdInvalid;
class ContactNameEmpty extends ErrorWithCall {
}
exports.ContactNameEmpty = ContactNameEmpty;
class ContactReqMissing extends ErrorWithCall {
}
exports.ContactReqMissing = ContactReqMissing;
class CreateCallFailed extends ErrorWithCall {
}
exports.CreateCallFailed = CreateCallFailed;
class CurrencyTotalAmountInvalid extends ErrorWithCall {
}
exports.CurrencyTotalAmountInvalid = CurrencyTotalAmountInvalid;
class DataInvalid extends ErrorWithCall {
}
exports.DataInvalid = DataInvalid;
class DataJsonInvalid extends ErrorWithCall {
}
exports.DataJsonInvalid = DataJsonInvalid;
class DataTooLong extends ErrorWithCall {
}
exports.DataTooLong = DataTooLong;
class DateEmpty extends ErrorWithCall {
}
exports.DateEmpty = DateEmpty;
class DcIdInvalid extends ErrorWithCall {
}
exports.DcIdInvalid = DcIdInvalid;
class DhGAInvalid extends ErrorWithCall {
}
exports.DhGAInvalid = DhGAInvalid;
class DocumentInvalid extends ErrorWithCall {
}
exports.DocumentInvalid = DocumentInvalid;
class EditBotInviteForbidden extends ErrorWithCall {
}
exports.EditBotInviteForbidden = EditBotInviteForbidden;
class EmailHashExpired extends ErrorWithCall {
}
exports.EmailHashExpired = EmailHashExpired;
class EmailInvalid extends ErrorWithCall {
}
exports.EmailInvalid = EmailInvalid;
class EmailUnconfirmed extends ErrorWithCall {
}
exports.EmailUnconfirmed = EmailUnconfirmed;
class EmailVerifyExpired extends ErrorWithCall {
}
exports.EmailVerifyExpired = EmailVerifyExpired;
class EmojiInvalid extends ErrorWithCall {
}
exports.EmojiInvalid = EmojiInvalid;
class EmojiNotModified extends ErrorWithCall {
}
exports.EmojiNotModified = EmojiNotModified;
class EmoticonEmpty extends ErrorWithCall {
}
exports.EmoticonEmpty = EmoticonEmpty;
class EmoticonInvalid extends ErrorWithCall {
}
exports.EmoticonInvalid = EmoticonInvalid;
class EmoticonStickerpackMissing extends ErrorWithCall {
}
exports.EmoticonStickerpackMissing = EmoticonStickerpackMissing;
class EncryptedMessageInvalid extends ErrorWithCall {
}
exports.EncryptedMessageInvalid = EncryptedMessageInvalid;
class EncryptionAlreadyAccepted extends ErrorWithCall {
}
exports.EncryptionAlreadyAccepted = EncryptionAlreadyAccepted;
class EncryptionAlreadyDeclined extends ErrorWithCall {
}
exports.EncryptionAlreadyDeclined = EncryptionAlreadyDeclined;
class EncryptionDeclined extends ErrorWithCall {
}
exports.EncryptionDeclined = EncryptionDeclined;
class EncryptionIdInvalid extends ErrorWithCall {
}
exports.EncryptionIdInvalid = EncryptionIdInvalid;
class EncryptionOccupyFailed extends ErrorWithCall {
}
exports.EncryptionOccupyFailed = EncryptionOccupyFailed;
class EntitiesTooLong extends ErrorWithCall {
}
exports.EntitiesTooLong = EntitiesTooLong;
class EntityBoundsInvalid extends ErrorWithCall {
}
exports.EntityBoundsInvalid = EntityBoundsInvalid;
class EntityMentionUserInvalid extends ErrorWithCall {
}
exports.EntityMentionUserInvalid = EntityMentionUserInvalid;
class ErrorTextEmpty extends ErrorWithCall {
}
exports.ErrorTextEmpty = ErrorTextEmpty;
class ExpireDateInvalid extends ErrorWithCall {
}
exports.ExpireDateInvalid = ExpireDateInvalid;
class ExpireForbidden extends ErrorWithCall {
}
exports.ExpireForbidden = ExpireForbidden;
class ExportCardInvalid extends ErrorWithCall {
}
exports.ExportCardInvalid = ExportCardInvalid;
class ExternalUrlInvalid extends ErrorWithCall {
}
exports.ExternalUrlInvalid = ExternalUrlInvalid;
class FieldNameEmpty extends ErrorWithCall {
}
exports.FieldNameEmpty = FieldNameEmpty;
class FieldNameInvalid extends ErrorWithCall {
}
exports.FieldNameInvalid = FieldNameInvalid;
class FilerefUpgradeNeeded extends ErrorWithCall {
}
exports.FilerefUpgradeNeeded = FilerefUpgradeNeeded;
class FileContentTypeInvalid extends ErrorWithCall {
}
exports.FileContentTypeInvalid = FileContentTypeInvalid;
class FileEmtpy extends ErrorWithCall {
}
exports.FileEmtpy = FileEmtpy;
class FileIdInvalid extends ErrorWithCall {
}
exports.FileIdInvalid = FileIdInvalid;
class FilePartsInvalid extends ErrorWithCall {
}
exports.FilePartsInvalid = FilePartsInvalid;
class FilePart_0Missing extends ErrorWithCall {
}
exports.FilePart_0Missing = FilePart_0Missing;
class FilePartEmpty extends ErrorWithCall {
}
exports.FilePartEmpty = FilePartEmpty;
class FilePartInvalid extends ErrorWithCall {
}
exports.FilePartInvalid = FilePartInvalid;
class FilePartLengthInvalid extends ErrorWithCall {
}
exports.FilePartLengthInvalid = FilePartLengthInvalid;
class FilePartSizeChanged extends ErrorWithCall {
}
exports.FilePartSizeChanged = FilePartSizeChanged;
class FilePartSizeInvalid extends ErrorWithCall {
}
exports.FilePartSizeInvalid = FilePartSizeInvalid;
class FilePartTooBig extends ErrorWithCall {
}
exports.FilePartTooBig = FilePartTooBig;
class FilePartXMissing extends ErrorWithCall {
}
exports.FilePartXMissing = FilePartXMissing;
class FileReferenceEmpty extends ErrorWithCall {
}
exports.FileReferenceEmpty = FileReferenceEmpty;
class FileReferenceExpired extends ErrorWithCall {
}
exports.FileReferenceExpired = FileReferenceExpired;
class FileReferenceInvalid extends ErrorWithCall {
}
exports.FileReferenceInvalid = FileReferenceInvalid;
class FileTitleEmpty extends ErrorWithCall {
}
exports.FileTitleEmpty = FileTitleEmpty;
class FilterIdInvalid extends ErrorWithCall {
}
exports.FilterIdInvalid = FilterIdInvalid;
class FilterIncludeEmpty extends ErrorWithCall {
}
exports.FilterIncludeEmpty = FilterIncludeEmpty;
class FilterNotSupported extends ErrorWithCall {
}
exports.FilterNotSupported = FilterNotSupported;
class FilterTitleEmpty extends ErrorWithCall {
}
exports.FilterTitleEmpty = FilterTitleEmpty;
class FirstnameInvalid extends ErrorWithCall {
}
exports.FirstnameInvalid = FirstnameInvalid;
class FolderIdEmpty extends ErrorWithCall {
}
exports.FolderIdEmpty = FolderIdEmpty;
class FolderIdInvalid extends ErrorWithCall {
}
exports.FolderIdInvalid = FolderIdInvalid;
class FreshChangeAdminsForbidden extends ErrorWithCall {
}
exports.FreshChangeAdminsForbidden = FreshChangeAdminsForbidden;
class FreshChangePhoneForbidden extends ErrorWithCall {
}
exports.FreshChangePhoneForbidden = FreshChangePhoneForbidden;
class FreshResetAuthorisationForbidden extends ErrorWithCall {
}
exports.FreshResetAuthorisationForbidden = FreshResetAuthorisationForbidden;
class FromMessageBotDisabled extends ErrorWithCall {
}
exports.FromMessageBotDisabled = FromMessageBotDisabled;
class FromPeerInvalid extends ErrorWithCall {
}
exports.FromPeerInvalid = FromPeerInvalid;
class GameBotInvalid extends ErrorWithCall {
}
exports.GameBotInvalid = GameBotInvalid;
class GeoPointInvalid extends ErrorWithCall {
}
exports.GeoPointInvalid = GeoPointInvalid;
class GifContentTypeInvalid extends ErrorWithCall {
}
exports.GifContentTypeInvalid = GifContentTypeInvalid;
class GifIdInvalid extends ErrorWithCall {
}
exports.GifIdInvalid = GifIdInvalid;
class GraphExpiredReload extends ErrorWithCall {
}
exports.GraphExpiredReload = GraphExpiredReload;
class GraphInvalidReload extends ErrorWithCall {
}
exports.GraphInvalidReload = GraphInvalidReload;
class GraphOutdatedReload extends ErrorWithCall {
}
exports.GraphOutdatedReload = GraphOutdatedReload;
class GroupcallAddParticipantsFailed extends ErrorWithCall {
}
exports.GroupcallAddParticipantsFailed = GroupcallAddParticipantsFailed;
class GroupcallAlreadyDiscarded extends ErrorWithCall {
}
exports.GroupcallAlreadyDiscarded = GroupcallAlreadyDiscarded;
class GroupcallAlreadyStarted extends ErrorWithCall {
}
exports.GroupcallAlreadyStarted = GroupcallAlreadyStarted;
class GroupcallForbidden extends ErrorWithCall {
}
exports.GroupcallForbidden = GroupcallForbidden;
class GroupcallInvalid extends ErrorWithCall {
}
exports.GroupcallInvalid = GroupcallInvalid;
class GroupcallJoinMissing extends ErrorWithCall {
}
exports.GroupcallJoinMissing = GroupcallJoinMissing;
class GroupcallNotModified extends ErrorWithCall {
}
exports.GroupcallNotModified = GroupcallNotModified;
class GroupcallSsrcDuplicateMuch extends ErrorWithCall {
}
exports.GroupcallSsrcDuplicateMuch = GroupcallSsrcDuplicateMuch;
class GroupedMediaInvalid extends ErrorWithCall {
}
exports.GroupedMediaInvalid = GroupedMediaInvalid;
class GroupCallInvalid extends ErrorWithCall {
}
exports.GroupCallInvalid = GroupCallInvalid;
class HashInvalid extends ErrorWithCall {
}
exports.HashInvalid = HashInvalid;
class HideRequesterMissing extends ErrorWithCall {
}
exports.HideRequesterMissing = HideRequesterMissing;
class HistoryGetFailed extends ErrorWithCall {
}
exports.HistoryGetFailed = HistoryGetFailed;
class ImageProcessFailed extends ErrorWithCall {
}
exports.ImageProcessFailed = ImageProcessFailed;
class ImportFileInvalid extends ErrorWithCall {
}
exports.ImportFileInvalid = ImportFileInvalid;
class ImportFormatUnrecognized extends ErrorWithCall {
}
exports.ImportFormatUnrecognized = ImportFormatUnrecognized;
class ImportIdInvalid extends ErrorWithCall {
}
exports.ImportIdInvalid = ImportIdInvalid;
class InlineBotRequired extends ErrorWithCall {
}
exports.InlineBotRequired = InlineBotRequired;
class InlineResultExpired extends ErrorWithCall {
}
exports.InlineResultExpired = InlineResultExpired;
class InputConstructorInvalid extends ErrorWithCall {
}
exports.InputConstructorInvalid = InputConstructorInvalid;
class InputFetchError extends ErrorWithCall {
}
exports.InputFetchError = InputFetchError;
class InputFetchFail extends ErrorWithCall {
}
exports.InputFetchFail = InputFetchFail;
class InputFilterInvalid extends ErrorWithCall {
}
exports.InputFilterInvalid = InputFilterInvalid;
class InputLayerInvalid extends ErrorWithCall {
}
exports.InputLayerInvalid = InputLayerInvalid;
class InputMethodInvalid extends ErrorWithCall {
}
exports.InputMethodInvalid = InputMethodInvalid;
class InputRequestTooLong extends ErrorWithCall {
}
exports.InputRequestTooLong = InputRequestTooLong;
class InputTextEmpty extends ErrorWithCall {
}
exports.InputTextEmpty = InputTextEmpty;
class InputUserDeactivated extends ErrorWithCall {
}
exports.InputUserDeactivated = InputUserDeactivated;
class InterdcXCallError extends ErrorWithCall {
}
exports.InterdcXCallError = InterdcXCallError;
class InterdcXCallRichError extends ErrorWithCall {
}
exports.InterdcXCallRichError = InterdcXCallRichError;
class InviteForbiddenWithJoinas extends ErrorWithCall {
}
exports.InviteForbiddenWithJoinas = InviteForbiddenWithJoinas;
class InviteHashEmpty extends ErrorWithCall {
}
exports.InviteHashEmpty = InviteHashEmpty;
class InviteHashExpired extends ErrorWithCall {
}
exports.InviteHashExpired = InviteHashExpired;
class InviteHashInvalid extends ErrorWithCall {
}
exports.InviteHashInvalid = InviteHashInvalid;
class InviteRequestSent extends ErrorWithCall {
}
exports.InviteRequestSent = InviteRequestSent;
class InviteRevokedMissing extends ErrorWithCall {
}
exports.InviteRevokedMissing = InviteRevokedMissing;
class InvoicePayloadInvalid extends ErrorWithCall {
}
exports.InvoicePayloadInvalid = InvoicePayloadInvalid;
class JoinAsPeerInvalid extends ErrorWithCall {
}
exports.JoinAsPeerInvalid = JoinAsPeerInvalid;
class LangCodeInvalid extends ErrorWithCall {
}
exports.LangCodeInvalid = LangCodeInvalid;
class LangCodeNotSupported extends ErrorWithCall {
}
exports.LangCodeNotSupported = LangCodeNotSupported;
class LangPackInvalid extends ErrorWithCall {
}
exports.LangPackInvalid = LangPackInvalid;
class LastnameInvalid extends ErrorWithCall {
}
exports.LastnameInvalid = LastnameInvalid;
class LimitInvalid extends ErrorWithCall {
}
exports.LimitInvalid = LimitInvalid;
class LinkNotModified extends ErrorWithCall {
}
exports.LinkNotModified = LinkNotModified;
class LocationInvalid extends ErrorWithCall {
}
exports.LocationInvalid = LocationInvalid;
class MaxDateInvalid extends ErrorWithCall {
}
exports.MaxDateInvalid = MaxDateInvalid;
class MaxIdInvalid extends ErrorWithCall {
}
exports.MaxIdInvalid = MaxIdInvalid;
class MaxQtsInvalid extends ErrorWithCall {
}
exports.MaxQtsInvalid = MaxQtsInvalid;
class Md5ChecksumInvalid extends ErrorWithCall {
}
exports.Md5ChecksumInvalid = Md5ChecksumInvalid;
class MediaCaptionTooLong extends ErrorWithCall {
}
exports.MediaCaptionTooLong = MediaCaptionTooLong;
class MediaEmpty extends ErrorWithCall {
}
exports.MediaEmpty = MediaEmpty;
class MediaGroupedInvalid extends ErrorWithCall {
}
exports.MediaGroupedInvalid = MediaGroupedInvalid;
class MediaInvalid extends ErrorWithCall {
}
exports.MediaInvalid = MediaInvalid;
class MediaNewInvalid extends ErrorWithCall {
}
exports.MediaNewInvalid = MediaNewInvalid;
class MediaPrevInvalid extends ErrorWithCall {
}
exports.MediaPrevInvalid = MediaPrevInvalid;
class MediaTtlInvalid extends ErrorWithCall {
}
exports.MediaTtlInvalid = MediaTtlInvalid;
class MegagroupIdInvalid extends ErrorWithCall {
}
exports.MegagroupIdInvalid = MegagroupIdInvalid;
class MegagroupPrehistoryHidden extends ErrorWithCall {
}
exports.MegagroupPrehistoryHidden = MegagroupPrehistoryHidden;
class MegagroupRequired extends ErrorWithCall {
}
exports.MegagroupRequired = MegagroupRequired;
class MemberNoLocation extends ErrorWithCall {
}
exports.MemberNoLocation = MemberNoLocation;
class MemberOccupyPrimaryLocFailed extends ErrorWithCall {
}
exports.MemberOccupyPrimaryLocFailed = MemberOccupyPrimaryLocFailed;
class MessageAuthorRequired extends ErrorWithCall {
}
exports.MessageAuthorRequired = MessageAuthorRequired;
class MessageDeleteForbidden extends ErrorWithCall {
}
exports.MessageDeleteForbidden = MessageDeleteForbidden;
class MessageEditTimeExpired extends ErrorWithCall {
}
exports.MessageEditTimeExpired = MessageEditTimeExpired;
class MessageEmpty extends ErrorWithCall {
}
exports.MessageEmpty = MessageEmpty;
class MessageIdsEmpty extends ErrorWithCall {
}
exports.MessageIdsEmpty = MessageIdsEmpty;
class MessageIdInvalid extends ErrorWithCall {
}
exports.MessageIdInvalid = MessageIdInvalid;
class MessageNotModified extends ErrorWithCall {
}
exports.MessageNotModified = MessageNotModified;
class MessagePollClosed extends ErrorWithCall {
}
exports.MessagePollClosed = MessagePollClosed;
class MessageTooLong extends ErrorWithCall {
}
exports.MessageTooLong = MessageTooLong;
class MethodInvalid extends ErrorWithCall {
}
exports.MethodInvalid = MethodInvalid;
class MinDateInvalid extends ErrorWithCall {
}
exports.MinDateInvalid = MinDateInvalid;
class MsgidDecreaseRetry extends ErrorWithCall {
}
exports.MsgidDecreaseRetry = MsgidDecreaseRetry;
class MsgIdInvalid extends ErrorWithCall {
}
exports.MsgIdInvalid = MsgIdInvalid;
class MsgTooOld extends ErrorWithCall {
}
exports.MsgTooOld = MsgTooOld;
class MsgWaitFailed extends ErrorWithCall {
}
exports.MsgWaitFailed = MsgWaitFailed;
class MtSendQueueTooLong extends ErrorWithCall {
}
exports.MtSendQueueTooLong = MtSendQueueTooLong;
class MultiMediaTooLong extends ErrorWithCall {
}
exports.MultiMediaTooLong = MultiMediaTooLong;
class NeedChatInvalid extends ErrorWithCall {
}
exports.NeedChatInvalid = NeedChatInvalid;
class NeedMemberInvalid extends ErrorWithCall {
}
exports.NeedMemberInvalid = NeedMemberInvalid;
class NewSaltInvalid extends ErrorWithCall {
}
exports.NewSaltInvalid = NewSaltInvalid;
class NewSettingsEmpty extends ErrorWithCall {
}
exports.NewSettingsEmpty = NewSettingsEmpty;
class NewSettingsInvalid extends ErrorWithCall {
}
exports.NewSettingsInvalid = NewSettingsInvalid;
class NextOffsetInvalid extends ErrorWithCall {
}
exports.NextOffsetInvalid = NextOffsetInvalid;
class NotAllowed extends ErrorWithCall {
}
exports.NotAllowed = NotAllowed;
class OffsetInvalid extends ErrorWithCall {
}
exports.OffsetInvalid = OffsetInvalid;
class OffsetPeerIdInvalid extends ErrorWithCall {
}
exports.OffsetPeerIdInvalid = OffsetPeerIdInvalid;
class OptionsTooMuch extends ErrorWithCall {
}
exports.OptionsTooMuch = OptionsTooMuch;
class OptionInvalid extends ErrorWithCall {
}
exports.OptionInvalid = OptionInvalid;
class PackShortNameInvalid extends ErrorWithCall {
}
exports.PackShortNameInvalid = PackShortNameInvalid;
class PackShortNameOccupied extends ErrorWithCall {
}
exports.PackShortNameOccupied = PackShortNameOccupied;
class PackTitleInvalid extends ErrorWithCall {
}
exports.PackTitleInvalid = PackTitleInvalid;
class ParticipantsTooFew extends ErrorWithCall {
}
exports.ParticipantsTooFew = ParticipantsTooFew;
class ParticipantCallFailed extends ErrorWithCall {
}
exports.ParticipantCallFailed = ParticipantCallFailed;
class ParticipantIdInvalid extends ErrorWithCall {
}
exports.ParticipantIdInvalid = ParticipantIdInvalid;
class ParticipantJoinMissing extends ErrorWithCall {
}
exports.ParticipantJoinMissing = ParticipantJoinMissing;
class ParticipantVersionOutdated extends ErrorWithCall {
}
exports.ParticipantVersionOutdated = ParticipantVersionOutdated;
class PasswordEmpty extends ErrorWithCall {
}
exports.PasswordEmpty = PasswordEmpty;
class PasswordHashInvalid extends ErrorWithCall {
}
exports.PasswordHashInvalid = PasswordHashInvalid;
class PasswordMissing extends ErrorWithCall {
}
exports.PasswordMissing = PasswordMissing;
class PasswordRecoveryExpired extends ErrorWithCall {
}
exports.PasswordRecoveryExpired = PasswordRecoveryExpired;
class PasswordRecoveryNa extends ErrorWithCall {
}
exports.PasswordRecoveryNa = PasswordRecoveryNa;
class PasswordRequired extends ErrorWithCall {
}
exports.PasswordRequired = PasswordRequired;
class PaymentProviderInvalid extends ErrorWithCall {
}
exports.PaymentProviderInvalid = PaymentProviderInvalid;
class PeerFlood extends ErrorWithCall {
}
exports.PeerFlood = PeerFlood;
class PeerHistoryEmpty extends ErrorWithCall {
}
exports.PeerHistoryEmpty = PeerHistoryEmpty;
class PeerIdInvalid extends ErrorWithCall {
}
exports.PeerIdInvalid = PeerIdInvalid;
class PeerIdNotSupported extends ErrorWithCall {
}
exports.PeerIdNotSupported = PeerIdNotSupported;
class PersistentTimestampEmpty extends ErrorWithCall {
}
exports.PersistentTimestampEmpty = PersistentTimestampEmpty;
class PersistentTimestampInvalid extends ErrorWithCall {
}
exports.PersistentTimestampInvalid = PersistentTimestampInvalid;
class PersistentTimestampOutdated extends ErrorWithCall {
}
exports.PersistentTimestampOutdated = PersistentTimestampOutdated;
class PhoneCodeEmpty extends ErrorWithCall {
}
exports.PhoneCodeEmpty = PhoneCodeEmpty;
class PhoneCodeExpired extends ErrorWithCall {
}
exports.PhoneCodeExpired = PhoneCodeExpired;
class PhoneCodeHashEmpty extends ErrorWithCall {
}
exports.PhoneCodeHashEmpty = PhoneCodeHashEmpty;
class PhoneCodeInvalid extends ErrorWithCall {
}
exports.PhoneCodeInvalid = PhoneCodeInvalid;
class PhoneHashExpired extends ErrorWithCall {
}
exports.PhoneHashExpired = PhoneHashExpired;
class PhoneNotOccupied extends ErrorWithCall {
}
exports.PhoneNotOccupied = PhoneNotOccupied;
class PhoneNumberAppSignupForbidden extends ErrorWithCall {
}
exports.PhoneNumberAppSignupForbidden = PhoneNumberAppSignupForbidden;
class PhoneNumberBanned extends ErrorWithCall {
}
exports.PhoneNumberBanned = PhoneNumberBanned;
class PhoneNumberFlood extends ErrorWithCall {
}
exports.PhoneNumberFlood = PhoneNumberFlood;
class PhoneNumberInvalid extends ErrorWithCall {
}
exports.PhoneNumberInvalid = PhoneNumberInvalid;
class PhoneNumberOccupied extends ErrorWithCall {
}
exports.PhoneNumberOccupied = PhoneNumberOccupied;
class PhoneNumberUnoccupied extends ErrorWithCall {
}
exports.PhoneNumberUnoccupied = PhoneNumberUnoccupied;
class PhonePasswordFlood extends ErrorWithCall {
}
exports.PhonePasswordFlood = PhonePasswordFlood;
class PhonePasswordProtected extends ErrorWithCall {
}
exports.PhonePasswordProtected = PhonePasswordProtected;
class PhotoContentTypeInvalid extends ErrorWithCall {
}
exports.PhotoContentTypeInvalid = PhotoContentTypeInvalid;
class PhotoContentUrlEmpty extends ErrorWithCall {
}
exports.PhotoContentUrlEmpty = PhotoContentUrlEmpty;
class PhotoCropFileMissing extends ErrorWithCall {
}
exports.PhotoCropFileMissing = PhotoCropFileMissing;
class PhotoCropSizeSmall extends ErrorWithCall {
}
exports.PhotoCropSizeSmall = PhotoCropSizeSmall;
class PhotoExtInvalid extends ErrorWithCall {
}
exports.PhotoExtInvalid = PhotoExtInvalid;
class PhotoFileMissing extends ErrorWithCall {
}
exports.PhotoFileMissing = PhotoFileMissing;
class PhotoIdInvalid extends ErrorWithCall {
}
exports.PhotoIdInvalid = PhotoIdInvalid;
class PhotoInvalid extends ErrorWithCall {
}
exports.PhotoInvalid = PhotoInvalid;
class PhotoInvalidDimensions extends ErrorWithCall {
}
exports.PhotoInvalidDimensions = PhotoInvalidDimensions;
class PhotoSaveFileInvalid extends ErrorWithCall {
}
exports.PhotoSaveFileInvalid = PhotoSaveFileInvalid;
class PhotoThumbUrlEmpty extends ErrorWithCall {
}
exports.PhotoThumbUrlEmpty = PhotoThumbUrlEmpty;
class PinnedDialogsTooMuch extends ErrorWithCall {
}
exports.PinnedDialogsTooMuch = PinnedDialogsTooMuch;
class PinRestricted extends ErrorWithCall {
}
exports.PinRestricted = PinRestricted;
class PollAnswersInvalid extends ErrorWithCall {
}
exports.PollAnswersInvalid = PollAnswersInvalid;
class PollAnswerInvalid extends ErrorWithCall {
}
exports.PollAnswerInvalid = PollAnswerInvalid;
class PollOptionDuplicate extends ErrorWithCall {
}
exports.PollOptionDuplicate = PollOptionDuplicate;
class PollOptionInvalid extends ErrorWithCall {
}
exports.PollOptionInvalid = PollOptionInvalid;
class PollQuestionInvalid extends ErrorWithCall {
}
exports.PollQuestionInvalid = PollQuestionInvalid;
class PollUnsupported extends ErrorWithCall {
}
exports.PollUnsupported = PollUnsupported;
class PollVoteRequired extends ErrorWithCall {
}
exports.PollVoteRequired = PollVoteRequired;
class PostponedTimeout extends ErrorWithCall {
}
exports.PostponedTimeout = PostponedTimeout;
class PremiumAccountRequired extends ErrorWithCall {
}
exports.PremiumAccountRequired = PremiumAccountRequired;
class PremiumCurrentlyUnavailable extends ErrorWithCall {
}
exports.PremiumCurrentlyUnavailable = PremiumCurrentlyUnavailable;
class PreviousChatImportActiveWaitXmin extends ErrorWithCall {
}
exports.PreviousChatImportActiveWaitXmin = PreviousChatImportActiveWaitXmin;
class PrivacyKeyInvalid extends ErrorWithCall {
}
exports.PrivacyKeyInvalid = PrivacyKeyInvalid;
class PrivacyTooLong extends ErrorWithCall {
}
exports.PrivacyTooLong = PrivacyTooLong;
class PrivacyValueInvalid extends ErrorWithCall {
}
exports.PrivacyValueInvalid = PrivacyValueInvalid;
class PtsChangeEmpty extends ErrorWithCall {
}
exports.PtsChangeEmpty = PtsChangeEmpty;
class PublicChannelMissing extends ErrorWithCall {
}
exports.PublicChannelMissing = PublicChannelMissing;
class PublicKeyRequired extends ErrorWithCall {
}
exports.PublicKeyRequired = PublicKeyRequired;
class QueryIdEmpty extends ErrorWithCall {
}
exports.QueryIdEmpty = QueryIdEmpty;
class QueryIdInvalid extends ErrorWithCall {
}
exports.QueryIdInvalid = QueryIdInvalid;
class QueryTooShort extends ErrorWithCall {
}
exports.QueryTooShort = QueryTooShort;
class QuizAnswerMissing extends ErrorWithCall {
}
exports.QuizAnswerMissing = QuizAnswerMissing;
class QuizCorrectAnswersEmpty extends ErrorWithCall {
}
exports.QuizCorrectAnswersEmpty = QuizCorrectAnswersEmpty;
class QuizCorrectAnswersTooMuch extends ErrorWithCall {
}
exports.QuizCorrectAnswersTooMuch = QuizCorrectAnswersTooMuch;
class QuizCorrectAnswerInvalid extends ErrorWithCall {
}
exports.QuizCorrectAnswerInvalid = QuizCorrectAnswerInvalid;
class QuizMultipleInvalid extends ErrorWithCall {
}
exports.QuizMultipleInvalid = QuizMultipleInvalid;
class RandomIdDuplicate extends ErrorWithCall {
}
exports.RandomIdDuplicate = RandomIdDuplicate;
class RandomIdEmpty extends ErrorWithCall {
}
exports.RandomIdEmpty = RandomIdEmpty;
class RandomIdInvalid extends ErrorWithCall {
}
exports.RandomIdInvalid = RandomIdInvalid;
class RandomLengthInvalid extends ErrorWithCall {
}
exports.RandomLengthInvalid = RandomLengthInvalid;
class RangesInvalid extends ErrorWithCall {
}
exports.RangesInvalid = RangesInvalid;
class ReactionsTooMany extends ErrorWithCall {
}
exports.ReactionsTooMany = ReactionsTooMany;
class ReactionEmpty extends ErrorWithCall {
}
exports.ReactionEmpty = ReactionEmpty;
class ReactionInvalid extends ErrorWithCall {
}
exports.ReactionInvalid = ReactionInvalid;
class ReflectorNotAvailable extends ErrorWithCall {
}
exports.ReflectorNotAvailable = ReflectorNotAvailable;
class RegIdGenerateFailed extends ErrorWithCall {
}
exports.RegIdGenerateFailed = RegIdGenerateFailed;
class ReplyMarkupBuyEmpty extends ErrorWithCall {
}
exports.ReplyMarkupBuyEmpty = ReplyMarkupBuyEmpty;
class ReplyMarkupGameEmpty extends ErrorWithCall {
}
exports.ReplyMarkupGameEmpty = ReplyMarkupGameEmpty;
class ReplyMarkupInvalid extends ErrorWithCall {
}
exports.ReplyMarkupInvalid = ReplyMarkupInvalid;
class ReplyMarkupTooLong extends ErrorWithCall {
}
exports.ReplyMarkupTooLong = ReplyMarkupTooLong;
class ResetRequestMissing extends ErrorWithCall {
}
exports.ResetRequestMissing = ResetRequestMissing;
class ResultsTooMuch extends ErrorWithCall {
}
exports.ResultsTooMuch = ResultsTooMuch;
class ResultIdDuplicate extends ErrorWithCall {
}
exports.ResultIdDuplicate = ResultIdDuplicate;
class ResultIdEmpty extends ErrorWithCall {
}
exports.ResultIdEmpty = ResultIdEmpty;
class ResultIdInvalid extends ErrorWithCall {
}
exports.ResultIdInvalid = ResultIdInvalid;
class ResultTypeInvalid extends ErrorWithCall {
}
exports.ResultTypeInvalid = ResultTypeInvalid;
class RevoteNotAllowed extends ErrorWithCall {
}
exports.RevoteNotAllowed = RevoteNotAllowed;
class RightsNotModified extends ErrorWithCall {
}
exports.RightsNotModified = RightsNotModified;
class RightForbidden extends ErrorWithCall {
}
exports.RightForbidden = RightForbidden;
class RpcCallFail extends ErrorWithCall {
}
exports.RpcCallFail = RpcCallFail;
class RpcMcgetFail extends ErrorWithCall {
}
exports.RpcMcgetFail = RpcMcgetFail;
class RsaDecryptFailed extends ErrorWithCall {
}
exports.RsaDecryptFailed = RsaDecryptFailed;
class ScheduleBotNotAllowed extends ErrorWithCall {
}
exports.ScheduleBotNotAllowed = ScheduleBotNotAllowed;
class ScheduleDateInvalid extends ErrorWithCall {
}
exports.ScheduleDateInvalid = ScheduleDateInvalid;
class ScheduleDateTooLate extends ErrorWithCall {
}
exports.ScheduleDateTooLate = ScheduleDateTooLate;
class ScheduleStatusPrivate extends ErrorWithCall {
}
exports.ScheduleStatusPrivate = ScheduleStatusPrivate;
class ScheduleTooMuch extends ErrorWithCall {
}
exports.ScheduleTooMuch = ScheduleTooMuch;
class ScoreInvalid extends ErrorWithCall {
}
exports.ScoreInvalid = ScoreInvalid;
class SearchQueryEmpty extends ErrorWithCall {
}
exports.SearchQueryEmpty = SearchQueryEmpty;
class SearchWithLinkNotSupported extends ErrorWithCall {
}
exports.SearchWithLinkNotSupported = SearchWithLinkNotSupported;
class SecondsInvalid extends ErrorWithCall {
}
exports.SecondsInvalid = SecondsInvalid;
class SendAsPeerInvalid extends ErrorWithCall {
}
exports.SendAsPeerInvalid = SendAsPeerInvalid;
class SendCodeUnavailable extends ErrorWithCall {
}
exports.SendCodeUnavailable = SendCodeUnavailable;
class SendMessageMediaInvalid extends ErrorWithCall {
}
exports.SendMessageMediaInvalid = SendMessageMediaInvalid;
class SendMessageTypeInvalid extends ErrorWithCall {
}
exports.SendMessageTypeInvalid = SendMessageTypeInvalid;
class SensitiveChangeForbidden extends ErrorWithCall {
}
exports.SensitiveChangeForbidden = SensitiveChangeForbidden;
class SessionExpired extends ErrorWithCall {
}
exports.SessionExpired = SessionExpired;
class SessionPasswordNeeded extends ErrorWithCall {
}
exports.SessionPasswordNeeded = SessionPasswordNeeded;
class SessionRevoked extends ErrorWithCall {
}
exports.SessionRevoked = SessionRevoked;
class SettingsInvalid extends ErrorWithCall {
}
exports.SettingsInvalid = SettingsInvalid;
class Sha256HashInvalid extends ErrorWithCall {
}
exports.Sha256HashInvalid = Sha256HashInvalid;
class ShortnameOccupyFailed extends ErrorWithCall {
}
exports.ShortnameOccupyFailed = ShortnameOccupyFailed;
class ShortNameInvalid extends ErrorWithCall {
}
exports.ShortNameInvalid = ShortNameInvalid;
class ShortNameOccupied extends ErrorWithCall {
}
exports.ShortNameOccupied = ShortNameOccupied;
class SignInFailed extends ErrorWithCall {
}
exports.SignInFailed = SignInFailed;
class SlowmodeMultiMsgsDisabled extends ErrorWithCall {
}
exports.SlowmodeMultiMsgsDisabled = SlowmodeMultiMsgsDisabled;
class SmsCodeCreateFailed extends ErrorWithCall {
}
exports.SmsCodeCreateFailed = SmsCodeCreateFailed;
class SrpIdInvalid extends ErrorWithCall {
}
exports.SrpIdInvalid = SrpIdInvalid;
class SrpPasswordChanged extends ErrorWithCall {
}
exports.SrpPasswordChanged = SrpPasswordChanged;
class StartParamEmpty extends ErrorWithCall {
}
exports.StartParamEmpty = StartParamEmpty;
class StartParamInvalid extends ErrorWithCall {
}
exports.StartParamInvalid = StartParamInvalid;
class StartParamTooLong extends ErrorWithCall {
}
exports.StartParamTooLong = StartParamTooLong;
class StickerpackStickersTooMuch extends ErrorWithCall {
}
exports.StickerpackStickersTooMuch = StickerpackStickersTooMuch;
class StickersetInvalid extends ErrorWithCall {
}
exports.StickersetInvalid = StickersetInvalid;
class StickersetOwnerAnonymous extends ErrorWithCall {
}
exports.StickersetOwnerAnonymous = StickersetOwnerAnonymous;
class StickersEmpty extends ErrorWithCall {
}
exports.StickersEmpty = StickersEmpty;
class StickersTooMuch extends ErrorWithCall {
}
exports.StickersTooMuch = StickersTooMuch;
class StickerDocumentInvalid extends ErrorWithCall {
}
exports.StickerDocumentInvalid = StickerDocumentInvalid;
class StickerEmojiInvalid extends ErrorWithCall {
}
exports.StickerEmojiInvalid = StickerEmojiInvalid;
class StickerFileInvalid extends ErrorWithCall {
}
exports.StickerFileInvalid = StickerFileInvalid;
class StickerGifDimensions extends ErrorWithCall {
}
exports.StickerGifDimensions = StickerGifDimensions;
class StickerIdInvalid extends ErrorWithCall {
}
exports.StickerIdInvalid = StickerIdInvalid;
class StickerInvalid extends ErrorWithCall {
}
exports.StickerInvalid = StickerInvalid;
class StickerMimeInvalid extends ErrorWithCall {
}
exports.StickerMimeInvalid = StickerMimeInvalid;
class StickerPngDimensions extends ErrorWithCall {
}
exports.StickerPngDimensions = StickerPngDimensions;
class StickerPngNopng extends ErrorWithCall {
}
exports.StickerPngNopng = StickerPngNopng;
class StickerTgsNodoc extends ErrorWithCall {
}
exports.StickerTgsNodoc = StickerTgsNodoc;
class StickerTgsNotgs extends ErrorWithCall {
}
exports.StickerTgsNotgs = StickerTgsNotgs;
class StickerThumbPngNopng extends ErrorWithCall {
}
exports.StickerThumbPngNopng = StickerThumbPngNopng;
class StickerThumbTgsNotgs extends ErrorWithCall {
}
exports.StickerThumbTgsNotgs = StickerThumbTgsNotgs;
class StickerVideoBig extends ErrorWithCall {
}
exports.StickerVideoBig = StickerVideoBig;
class StickerVideoNodoc extends ErrorWithCall {
}
exports.StickerVideoNodoc = StickerVideoNodoc;
class StickerVideoNowebm extends ErrorWithCall {
}
exports.StickerVideoNowebm = StickerVideoNowebm;
class StorageCheckFailed extends ErrorWithCall {
}
exports.StorageCheckFailed = StorageCheckFailed;
class StoreInvalidScalarType extends ErrorWithCall {
}
exports.StoreInvalidScalarType = StoreInvalidScalarType;
class SwitchPmTextEmpty extends ErrorWithCall {
}
exports.SwitchPmTextEmpty = SwitchPmTextEmpty;
class TakeoutInvalid extends ErrorWithCall {
}
exports.TakeoutInvalid = TakeoutInvalid;
class TakeoutRequired extends ErrorWithCall {
}
exports.TakeoutRequired = TakeoutRequired;
class TempAuthKeyAlreadyBound extends ErrorWithCall {
}
exports.TempAuthKeyAlreadyBound = TempAuthKeyAlreadyBound;
class TempAuthKeyEmpty extends ErrorWithCall {
}
exports.TempAuthKeyEmpty = TempAuthKeyEmpty;
class ThemeFileInvalid extends ErrorWithCall {
}
exports.ThemeFileInvalid = ThemeFileInvalid;
class ThemeFormatInvalid extends ErrorWithCall {
}
exports.ThemeFormatInvalid = ThemeFormatInvalid;
class ThemeInvalid extends ErrorWithCall {
}
exports.ThemeInvalid = ThemeInvalid;
class ThemeMimeInvalid extends ErrorWithCall {
}
exports.ThemeMimeInvalid = ThemeMimeInvalid;
class ThemeTitleInvalid extends ErrorWithCall {
}
exports.ThemeTitleInvalid = ThemeTitleInvalid;
class Timeout extends ErrorWithCall {
}
exports.Timeout = Timeout;
class TitleInvalid extends ErrorWithCall {
}
exports.TitleInvalid = TitleInvalid;
class TmpPasswordDisabled extends ErrorWithCall {
}
exports.TmpPasswordDisabled = TmpPasswordDisabled;
class TmpPasswordInvalid extends ErrorWithCall {
}
exports.TmpPasswordInvalid = TmpPasswordInvalid;
class TokenInvalid extends ErrorWithCall {
}
exports.TokenInvalid = TokenInvalid;
class TopicDeleted extends ErrorWithCall {
}
exports.TopicDeleted = TopicDeleted;
class ToLangInvalid extends ErrorWithCall {
}
exports.ToLangInvalid = ToLangInvalid;
class TtlDaysInvalid extends ErrorWithCall {
}
exports.TtlDaysInvalid = TtlDaysInvalid;
class TtlMediaInvalid extends ErrorWithCall {
}
exports.TtlMediaInvalid = TtlMediaInvalid;
class TtlPeriodInvalid extends ErrorWithCall {
}
exports.TtlPeriodInvalid = TtlPeriodInvalid;
class TypesEmpty extends ErrorWithCall {
}
exports.TypesEmpty = TypesEmpty;
class TypeConstructorInvalid extends ErrorWithCall {
}
exports.TypeConstructorInvalid = TypeConstructorInvalid;
class Timedout extends ErrorWithCall {
}
exports.Timedout = Timedout;
class UnknownError extends ErrorWithCall {
}
exports.UnknownError = UnknownError;
class UnknownMethod extends ErrorWithCall {
}
exports.UnknownMethod = UnknownMethod;
class UntilDateInvalid extends ErrorWithCall {
}
exports.UntilDateInvalid = UntilDateInvalid;
class UpdateAppToLogin extends ErrorWithCall {
}
exports.UpdateAppToLogin = UpdateAppToLogin;
class UrlInvalid extends ErrorWithCall {
}
exports.UrlInvalid = UrlInvalid;
class UsageLimitInvalid extends ErrorWithCall {
}
exports.UsageLimitInvalid = UsageLimitInvalid;
class UsernameInvalid extends ErrorWithCall {
}
exports.UsernameInvalid = UsernameInvalid;
class UsernameNotModified extends ErrorWithCall {
}
exports.UsernameNotModified = UsernameNotModified;
class UsernameNotOccupied extends ErrorWithCall {
}
exports.UsernameNotOccupied = UsernameNotOccupied;
class UsernameOccupied extends ErrorWithCall {
}
exports.UsernameOccupied = UsernameOccupied;
class UsernamePurchaseAvailable extends ErrorWithCall {
}
exports.UsernamePurchaseAvailable = UsernamePurchaseAvailable;
class UserpicPrivacyRequired extends ErrorWithCall {
}
exports.UserpicPrivacyRequired = UserpicPrivacyRequired;
class UserpicUploadRequired extends ErrorWithCall {
}
exports.UserpicUploadRequired = UserpicUploadRequired;
class UsersTooFew extends ErrorWithCall {
}
exports.UsersTooFew = UsersTooFew;
class UsersTooMuch extends ErrorWithCall {
}
exports.UsersTooMuch = UsersTooMuch;
class UserAdminInvalid extends ErrorWithCall {
}
exports.UserAdminInvalid = UserAdminInvalid;
class UserAlreadyInvited extends ErrorWithCall {
}
exports.UserAlreadyInvited = UserAlreadyInvited;
class UserAlreadyParticipant extends ErrorWithCall {
}
exports.UserAlreadyParticipant = UserAlreadyParticipant;
class UserBannedInChannel extends ErrorWithCall {
}
exports.UserBannedInChannel = UserBannedInChannel;
class UserBlocked extends ErrorWithCall {
}
exports.UserBlocked = UserBlocked;
class UserBot extends ErrorWithCall {
}
exports.UserBot = UserBot;
class UserBotInvalid extends ErrorWithCall {
}
exports.UserBotInvalid = UserBotInvalid;
class UserBotRequired extends ErrorWithCall {
}
exports.UserBotRequired = UserBotRequired;
class UserChannelsTooMuch extends ErrorWithCall {
}
exports.UserChannelsTooMuch = UserChannelsTooMuch;
class UserCreator extends ErrorWithCall {
}
exports.UserCreator = UserCreator;
class UserDeactivated extends ErrorWithCall {
}
exports.UserDeactivated = UserDeactivated;
class UserDeactivatedBan extends ErrorWithCall {
}
exports.UserDeactivatedBan = UserDeactivatedBan;
class UserDeleted extends ErrorWithCall {
}
exports.UserDeleted = UserDeleted;
class UserIdInvalid extends ErrorWithCall {
}
exports.UserIdInvalid = UserIdInvalid;
class UserInvalid extends ErrorWithCall {
}
exports.UserInvalid = UserInvalid;
class UserIsBlocked extends ErrorWithCall {
}
exports.UserIsBlocked = UserIsBlocked;
class UserIsBot extends ErrorWithCall {
}
exports.UserIsBot = UserIsBot;
class UserKicked extends ErrorWithCall {
}
exports.UserKicked = UserKicked;
class UserNotMutualContact extends ErrorWithCall {
}
exports.UserNotMutualContact = UserNotMutualContact;
class UserNotParticipant extends ErrorWithCall {
}
exports.UserNotParticipant = UserNotParticipant;
class UserPrivacyRestricted extends ErrorWithCall {
}
exports.UserPrivacyRestricted = UserPrivacyRestricted;
class UserRestricted extends ErrorWithCall {
}
exports.UserRestricted = UserRestricted;
class UserVolumeInvalid extends ErrorWithCall {
}
exports.UserVolumeInvalid = UserVolumeInvalid;
class VideoContentTypeInvalid extends ErrorWithCall {
}
exports.VideoContentTypeInvalid = VideoContentTypeInvalid;
class VideoFileInvalid extends ErrorWithCall {
}
exports.VideoFileInvalid = VideoFileInvalid;
class VideoTitleEmpty extends ErrorWithCall {
}
exports.VideoTitleEmpty = VideoTitleEmpty;
class VoiceMessagesForbidden extends ErrorWithCall {
}
exports.VoiceMessagesForbidden = VoiceMessagesForbidden;
class WallpaperFileInvalid extends ErrorWithCall {
}
exports.WallpaperFileInvalid = WallpaperFileInvalid;
class WallpaperInvalid extends ErrorWithCall {
}
exports.WallpaperInvalid = WallpaperInvalid;
class WallpaperMimeInvalid extends ErrorWithCall {
}
exports.WallpaperMimeInvalid = WallpaperMimeInvalid;
class WcConvertUrlInvalid extends ErrorWithCall {
}
exports.WcConvertUrlInvalid = WcConvertUrlInvalid;
class WebdocumentInvalid extends ErrorWithCall {
}
exports.WebdocumentInvalid = WebdocumentInvalid;
class WebdocumentMimeInvalid extends ErrorWithCall {
}
exports.WebdocumentMimeInvalid = WebdocumentMimeInvalid;
class WebdocumentSizeTooBig extends ErrorWithCall {
}
exports.WebdocumentSizeTooBig = WebdocumentSizeTooBig;
class WebdocumentUrlInvalid extends ErrorWithCall {
}
exports.WebdocumentUrlInvalid = WebdocumentUrlInvalid;
class WebpageCurlFailed extends ErrorWithCall {
}
exports.WebpageCurlFailed = WebpageCurlFailed;
class WebpageMediaEmpty extends ErrorWithCall {
}
exports.WebpageMediaEmpty = WebpageMediaEmpty;
class WebpushAuthInvalid extends ErrorWithCall {
}
exports.WebpushAuthInvalid = WebpushAuthInvalid;
class WebpushKeyInvalid extends ErrorWithCall {
}
exports.WebpushKeyInvalid = WebpushKeyInvalid;
class WebpushTokenInvalid extends ErrorWithCall {
}
exports.WebpushTokenInvalid = WebpushTokenInvalid;
class WorkerBusyTooLongRetry extends ErrorWithCall {
}
exports.WorkerBusyTooLongRetry = WorkerBusyTooLongRetry;
class YouBlockedUser extends ErrorWithCall {
}
exports.YouBlockedUser = YouBlockedUser;
exports.map = {
    ABOUT_TOO_LONG: AboutTooLong,
    ACCESS_TOKEN_EXPIRED: AccessTokenExpired,
    ACCESS_TOKEN_INVALID: AccessTokenInvalid,
    ACTIVE_USER_REQUIRED: ActiveUserRequired,
    ADMINS_TOO_MUCH: AdminsTooMuch,
    ADMIN_ID_INVALID: AdminIdInvalid,
    ADMIN_RANK_EMOJI_NOT_ALLOWED: AdminRankEmojiNotAllowed,
    ADMIN_RANK_INVALID: AdminRankInvalid,
    ALBUM_PHOTOS_TOO_MANY: AlbumPhotosTooMany,
    API_ID_INVALID: ApiIdInvalid,
    API_ID_PUBLISHED_FLOOD: ApiIdPublishedFlood,
    ARTICLE_TITLE_EMPTY: ArticleTitleEmpty,
    AUDIO_CONTENT_URL_EMPTY: AudioContentUrlEmpty,
    AUDIO_TITLE_EMPTY: AudioTitleEmpty,
    AUTH_BYTES_INVALID: AuthBytesInvalid,
    AUTH_KEY_DUPLICATED: AuthKeyDuplicated,
    AUTH_KEY_INVALID: AuthKeyInvalid,
    AUTH_KEY_PERM_EMPTY: AuthKeyPermEmpty,
    AUTH_KEY_UNREGISTERED: AuthKeyUnregistered,
    AUTH_RESTART: AuthRestart,
    AUTH_TOKEN_ALREADY_ACCEPTED: AuthTokenAlreadyAccepted,
    AUTH_TOKEN_EXCEPTION: AuthTokenException,
    AUTH_TOKEN_EXPIRED: AuthTokenExpired,
    AUTH_TOKEN_INVALID: AuthTokenInvalid,
    AUTOARCHIVE_NOT_AVAILABLE: AutoarchiveNotAvailable,
    BANK_CARD_NUMBER_INVALID: BankCardNumberInvalid,
    BANNED_RIGHTS_INVALID: BannedRightsInvalid,
    BASE_PORT_LOC_INVALID: BasePortLocInvalid,
    BOTS_TOO_MUCH: BotsTooMuch,
    BOT_CHANNELS_NA: BotChannelsNa,
    BOT_COMMAND_DESCRIPTION_INVALID: BotCommandDescriptionInvalid,
    BOT_COMMAND_INVALID: BotCommandInvalid,
    BOT_DOMAIN_INVALID: BotDomainInvalid,
    BOT_GAMES_DISABLED: BotGamesDisabled,
    BOT_GROUPS_BLOCKED: BotGroupsBlocked,
    BOT_INLINE_DISABLED: BotInlineDisabled,
    BOT_INVALID: BotInvalid,
    BOT_METHOD_INVALID: BotMethodInvalid,
    BOT_MISSING: BotMissing,
    BOT_ONESIDE_NOT_AVAIL: BotOnesideNotAvail,
    BOT_PAYMENTS_DISABLED: BotPaymentsDisabled,
    BOT_POLLS_DISABLED: BotPollsDisabled,
    BOT_RESPONSE_TIMEOUT: BotResponseTimeout,
    BOT_SCORE_NOT_MODIFIED: BotScoreNotModified,
    BROADCAST_CALLS_DISABLED: BroadcastCallsDisabled,
    BROADCAST_FORBIDDEN: BroadcastForbidden,
    BROADCAST_ID_INVALID: BroadcastIdInvalid,
    BROADCAST_PUBLIC_VOTERS_FORBIDDEN: BroadcastPublicVotersForbidden,
    BROADCAST_REQUIRED: BroadcastRequired,
    BUTTON_DATA_INVALID: ButtonDataInvalid,
    BUTTON_TEXT_INVALID: ButtonTextInvalid,
    BUTTON_TYPE_INVALID: ButtonTypeInvalid,
    BUTTON_URL_INVALID: ButtonUrlInvalid,
    BUTTON_USER_PRIVACY_RESTRICTED: ButtonUserPrivacyRestricted,
    CALL_ALREADY_ACCEPTED: CallAlreadyAccepted,
    CALL_ALREADY_DECLINED: CallAlreadyDeclined,
    CALL_OCCUPY_FAILED: CallOccupyFailed,
    CALL_PEER_INVALID: CallPeerInvalid,
    CALL_PROTOCOL_FLAGS_INVALID: CallProtocolFlagsInvalid,
    CDN_METHOD_INVALID: CdnMethodInvalid,
    CDN_UPLOAD_TIMEOUT: CdnUploadTimeout,
    CHANNELS_ADMIN_LOCATED_TOO_MUCH: ChannelsAdminLocatedTooMuch,
    CHANNELS_ADMIN_PUBLIC_TOO_MUCH: ChannelsAdminPublicTooMuch,
    CHANNELS_TOO_MUCH: ChannelsTooMuch,
    CHANNEL_BANNED: ChannelBanned,
    CHANNEL_FORUM_MISSING: ChannelForumMissing,
    CHANNEL_ID_INVALID: ChannelIdInvalid,
    CHANNEL_INVALID: ChannelInvalid,
    CHANNEL_PARICIPANT_MISSING: ChannelParicipantMissing,
    CHANNEL_PRIVATE: ChannelPrivate,
    CHANNEL_PUBLIC_GROUP_NA: ChannelPublicGroupNa,
    CHANNEL_TOO_BIG: ChannelTooBig,
    CHANNEL_TOO_LARGE: ChannelTooLarge,
    CHAT_ABOUT_NOT_MODIFIED: ChatAboutNotModified,
    CHAT_ABOUT_TOO_LONG: ChatAboutTooLong,
    CHAT_ADMIN_INVITE_REQUIRED: ChatAdminInviteRequired,
    CHAT_ADMIN_REQUIRED: ChatAdminRequired,
    CHAT_DISCUSSION_UNALLOWED: ChatDiscussionUnallowed,
    CHAT_FORBIDDEN: ChatForbidden,
    CHAT_FORWARDS_RESTRICTED: ChatForwardsRestricted,
    CHAT_GET_FAILED: ChatGetFailed,
    CHAT_GUEST_SEND_FORBIDDEN: ChatGuestSendForbidden,
    CHAT_ID_EMPTY: ChatIdEmpty,
    CHAT_ID_GENERATE_FAILED: ChatIdGenerateFailed,
    CHAT_ID_INVALID: ChatIdInvalid,
    CHAT_INVALID: ChatInvalid,
    CHAT_INVITE_PERMANENT: ChatInvitePermanent,
    CHAT_LINK_EXISTS: ChatLinkExists,
    CHAT_NOT_MODIFIED: ChatNotModified,
    CHAT_RESTRICTED: ChatRestricted,
    CHAT_REVOKE_DATE_UNSUPPORTED: ChatRevokeDateUnsupported,
    CHAT_SEND_GAME_FORBIDDEN: ChatSendGameForbidden,
    CHAT_SEND_GIFS_FORBIDDEN: ChatSendGifsForbidden,
    CHAT_SEND_INLINE_FORBIDDEN: ChatSendInlineForbidden,
    CHAT_SEND_MEDIA_FORBIDDEN: ChatSendMediaForbidden,
    CHAT_SEND_POLL_FORBIDDEN: ChatSendPollForbidden,
    CHAT_SEND_STICKERS_FORBIDDEN: ChatSendStickersForbidden,
    CHAT_TITLE_EMPTY: ChatTitleEmpty,
    CHAT_TOO_BIG: ChatTooBig,
    CHAT_WRITE_FORBIDDEN: ChatWriteForbidden,
    CHP_CALL_FAIL: ChpCallFail,
    CODE_EMPTY: CodeEmpty,
    CODE_HASH_INVALID: CodeHashInvalid,
    CODE_INVALID: CodeInvalid,
    CONNECTION_API_ID_INVALID: ConnectionApiIdInvalid,
    CONNECTION_APP_VERSION_EMPTY: ConnectionAppVersionEmpty,
    CONNECTION_DEVICE_MODEL_EMPTY: ConnectionDeviceModelEmpty,
    CONNECTION_LANG_PACK_INVALID: ConnectionLangPackInvalid,
    CONNECTION_LAYER_INVALID: ConnectionLayerInvalid,
    CONNECTION_NOT_INITED: ConnectionNotInited,
    CONNECTION_SYSTEM_EMPTY: ConnectionSystemEmpty,
    CONNECTION_SYSTEM_LANG_CODE_EMPTY: ConnectionSystemLangCodeEmpty,
    CONTACT_ADD_MISSING: ContactAddMissing,
    CONTACT_ID_INVALID: ContactIdInvalid,
    CONTACT_NAME_EMPTY: ContactNameEmpty,
    CONTACT_REQ_MISSING: ContactReqMissing,
    CREATE_CALL_FAILED: CreateCallFailed,
    CURRENCY_TOTAL_AMOUNT_INVALID: CurrencyTotalAmountInvalid,
    DATA_INVALID: DataInvalid,
    DATA_JSON_INVALID: DataJsonInvalid,
    DATA_TOO_LONG: DataTooLong,
    DATE_EMPTY: DateEmpty,
    DC_ID_INVALID: DcIdInvalid,
    DH_G_A_INVALID: DhGAInvalid,
    DOCUMENT_INVALID: DocumentInvalid,
    EDIT_BOT_INVITE_FORBIDDEN: EditBotInviteForbidden,
    EMAIL_HASH_EXPIRED: EmailHashExpired,
    EMAIL_INVALID: EmailInvalid,
    EMAIL_UNCONFIRMED: EmailUnconfirmed,
    EMAIL_VERIFY_EXPIRED: EmailVerifyExpired,
    EMOJI_INVALID: EmojiInvalid,
    EMOJI_NOT_MODIFIED: EmojiNotModified,
    EMOTICON_EMPTY: EmoticonEmpty,
    EMOTICON_INVALID: EmoticonInvalid,
    EMOTICON_STICKERPACK_MISSING: EmoticonStickerpackMissing,
    ENCRYPTED_MESSAGE_INVALID: EncryptedMessageInvalid,
    ENCRYPTION_ALREADY_ACCEPTED: EncryptionAlreadyAccepted,
    ENCRYPTION_ALREADY_DECLINED: EncryptionAlreadyDeclined,
    ENCRYPTION_DECLINED: EncryptionDeclined,
    ENCRYPTION_ID_INVALID: EncryptionIdInvalid,
    ENCRYPTION_OCCUPY_FAILED: EncryptionOccupyFailed,
    ENTITIES_TOO_LONG: EntitiesTooLong,
    ENTITY_BOUNDS_INVALID: EntityBoundsInvalid,
    ENTITY_MENTION_USER_INVALID: EntityMentionUserInvalid,
    ERROR_TEXT_EMPTY: ErrorTextEmpty,
    EXPIRE_DATE_INVALID: ExpireDateInvalid,
    EXPIRE_FORBIDDEN: ExpireForbidden,
    EXPORT_CARD_INVALID: ExportCardInvalid,
    EXTERNAL_URL_INVALID: ExternalUrlInvalid,
    FIELD_NAME_EMPTY: FieldNameEmpty,
    FIELD_NAME_INVALID: FieldNameInvalid,
    FILEREF_UPGRADE_NEEDED: FilerefUpgradeNeeded,
    FILE_CONTENT_TYPE_INVALID: FileContentTypeInvalid,
    FILE_EMTPY: FileEmtpy,
    FILE_ID_INVALID: FileIdInvalid,
    FILE_PARTS_INVALID: FilePartsInvalid,
    FILE_PART_0_MISSING: FilePart_0Missing,
    FILE_PART_EMPTY: FilePartEmpty,
    FILE_PART_INVALID: FilePartInvalid,
    FILE_PART_LENGTH_INVALID: FilePartLengthInvalid,
    FILE_PART_SIZE_CHANGED: FilePartSizeChanged,
    FILE_PART_SIZE_INVALID: FilePartSizeInvalid,
    FILE_PART_TOO_BIG: FilePartTooBig,
    FILE_PART_X_MISSING: FilePartXMissing,
    FILE_REFERENCE_EMPTY: FileReferenceEmpty,
    FILE_REFERENCE_EXPIRED: FileReferenceExpired,
    FILE_REFERENCE_INVALID: FileReferenceInvalid,
    FILE_TITLE_EMPTY: FileTitleEmpty,
    FILTER_ID_INVALID: FilterIdInvalid,
    FILTER_INCLUDE_EMPTY: FilterIncludeEmpty,
    FILTER_NOT_SUPPORTED: FilterNotSupported,
    FILTER_TITLE_EMPTY: FilterTitleEmpty,
    FIRSTNAME_INVALID: FirstnameInvalid,
    FOLDER_ID_EMPTY: FolderIdEmpty,
    FOLDER_ID_INVALID: FolderIdInvalid,
    FRESH_CHANGE_ADMINS_FORBIDDEN: FreshChangeAdminsForbidden,
    FRESH_CHANGE_PHONE_FORBIDDEN: FreshChangePhoneForbidden,
    FRESH_RESET_AUTHORISATION_FORBIDDEN: FreshResetAuthorisationForbidden,
    FROM_MESSAGE_BOT_DISABLED: FromMessageBotDisabled,
    FROM_PEER_INVALID: FromPeerInvalid,
    GAME_BOT_INVALID: GameBotInvalid,
    GEO_POINT_INVALID: GeoPointInvalid,
    GIF_CONTENT_TYPE_INVALID: GifContentTypeInvalid,
    GIF_ID_INVALID: GifIdInvalid,
    GRAPH_EXPIRED_RELOAD: GraphExpiredReload,
    GRAPH_INVALID_RELOAD: GraphInvalidReload,
    GRAPH_OUTDATED_RELOAD: GraphOutdatedReload,
    GROUPCALL_ADD_PARTICIPANTS_FAILED: GroupcallAddParticipantsFailed,
    GROUPCALL_ALREADY_DISCARDED: GroupcallAlreadyDiscarded,
    GROUPCALL_ALREADY_STARTED: GroupcallAlreadyStarted,
    GROUPCALL_FORBIDDEN: GroupcallForbidden,
    GROUPCALL_INVALID: GroupcallInvalid,
    GROUPCALL_JOIN_MISSING: GroupcallJoinMissing,
    GROUPCALL_NOT_MODIFIED: GroupcallNotModified,
    GROUPCALL_SSRC_DUPLICATE_MUCH: GroupcallSsrcDuplicateMuch,
    GROUPED_MEDIA_INVALID: GroupedMediaInvalid,
    GROUP_CALL_INVALID: GroupCallInvalid,
    HASH_INVALID: HashInvalid,
    HIDE_REQUESTER_MISSING: HideRequesterMissing,
    HISTORY_GET_FAILED: HistoryGetFailed,
    IMAGE_PROCESS_FAILED: ImageProcessFailed,
    IMPORT_FILE_INVALID: ImportFileInvalid,
    IMPORT_FORMAT_UNRECOGNIZED: ImportFormatUnrecognized,
    IMPORT_ID_INVALID: ImportIdInvalid,
    INLINE_BOT_REQUIRED: InlineBotRequired,
    INLINE_RESULT_EXPIRED: InlineResultExpired,
    INPUT_CONSTRUCTOR_INVALID: InputConstructorInvalid,
    INPUT_FETCH_ERROR: InputFetchError,
    INPUT_FETCH_FAIL: InputFetchFail,
    INPUT_FILTER_INVALID: InputFilterInvalid,
    INPUT_LAYER_INVALID: InputLayerInvalid,
    INPUT_METHOD_INVALID: InputMethodInvalid,
    INPUT_REQUEST_TOO_LONG: InputRequestTooLong,
    INPUT_TEXT_EMPTY: InputTextEmpty,
    INPUT_USER_DEACTIVATED: InputUserDeactivated,
    INTERDC_X_CALL_ERROR: InterdcXCallError,
    INTERDC_X_CALL_RICH_ERROR: InterdcXCallRichError,
    INVITE_FORBIDDEN_WITH_JOINAS: InviteForbiddenWithJoinas,
    INVITE_HASH_EMPTY: InviteHashEmpty,
    INVITE_HASH_EXPIRED: InviteHashExpired,
    INVITE_HASH_INVALID: InviteHashInvalid,
    INVITE_REQUEST_SENT: InviteRequestSent,
    INVITE_REVOKED_MISSING: InviteRevokedMissing,
    INVOICE_PAYLOAD_INVALID: InvoicePayloadInvalid,
    JOIN_AS_PEER_INVALID: JoinAsPeerInvalid,
    LANG_CODE_INVALID: LangCodeInvalid,
    LANG_CODE_NOT_SUPPORTED: LangCodeNotSupported,
    LANG_PACK_INVALID: LangPackInvalid,
    LASTNAME_INVALID: LastnameInvalid,
    LIMIT_INVALID: LimitInvalid,
    LINK_NOT_MODIFIED: LinkNotModified,
    LOCATION_INVALID: LocationInvalid,
    MAX_DATE_INVALID: MaxDateInvalid,
    MAX_ID_INVALID: MaxIdInvalid,
    MAX_QTS_INVALID: MaxQtsInvalid,
    MD5_CHECKSUM_INVALID: Md5ChecksumInvalid,
    MEDIA_CAPTION_TOO_LONG: MediaCaptionTooLong,
    MEDIA_EMPTY: MediaEmpty,
    MEDIA_GROUPED_INVALID: MediaGroupedInvalid,
    MEDIA_INVALID: MediaInvalid,
    MEDIA_NEW_INVALID: MediaNewInvalid,
    MEDIA_PREV_INVALID: MediaPrevInvalid,
    MEDIA_TTL_INVALID: MediaTtlInvalid,
    MEGAGROUP_ID_INVALID: MegagroupIdInvalid,
    MEGAGROUP_PREHISTORY_HIDDEN: MegagroupPrehistoryHidden,
    MEGAGROUP_REQUIRED: MegagroupRequired,
    MEMBER_NO_LOCATION: MemberNoLocation,
    MEMBER_OCCUPY_PRIMARY_LOC_FAILED: MemberOccupyPrimaryLocFailed,
    MESSAGE_AUTHOR_REQUIRED: MessageAuthorRequired,
    MESSAGE_DELETE_FORBIDDEN: MessageDeleteForbidden,
    MESSAGE_EDIT_TIME_EXPIRED: MessageEditTimeExpired,
    MESSAGE_EMPTY: MessageEmpty,
    MESSAGE_IDS_EMPTY: MessageIdsEmpty,
    MESSAGE_ID_INVALID: MessageIdInvalid,
    MESSAGE_NOT_MODIFIED: MessageNotModified,
    MESSAGE_POLL_CLOSED: MessagePollClosed,
    MESSAGE_TOO_LONG: MessageTooLong,
    METHOD_INVALID: MethodInvalid,
    MIN_DATE_INVALID: MinDateInvalid,
    MSGID_DECREASE_RETRY: MsgidDecreaseRetry,
    MSG_ID_INVALID: MsgIdInvalid,
    MSG_TOO_OLD: MsgTooOld,
    MSG_WAIT_FAILED: MsgWaitFailed,
    MT_SEND_QUEUE_TOO_LONG: MtSendQueueTooLong,
    MULTI_MEDIA_TOO_LONG: MultiMediaTooLong,
    NEED_CHAT_INVALID: NeedChatInvalid,
    NEED_MEMBER_INVALID: NeedMemberInvalid,
    NEW_SALT_INVALID: NewSaltInvalid,
    NEW_SETTINGS_EMPTY: NewSettingsEmpty,
    NEW_SETTINGS_INVALID: NewSettingsInvalid,
    NEXT_OFFSET_INVALID: NextOffsetInvalid,
    NOT_ALLOWED: NotAllowed,
    OFFSET_INVALID: OffsetInvalid,
    OFFSET_PEER_ID_INVALID: OffsetPeerIdInvalid,
    OPTIONS_TOO_MUCH: OptionsTooMuch,
    OPTION_INVALID: OptionInvalid,
    PACK_SHORT_NAME_INVALID: PackShortNameInvalid,
    PACK_SHORT_NAME_OCCUPIED: PackShortNameOccupied,
    PACK_TITLE_INVALID: PackTitleInvalid,
    PARTICIPANTS_TOO_FEW: ParticipantsTooFew,
    PARTICIPANT_CALL_FAILED: ParticipantCallFailed,
    PARTICIPANT_ID_INVALID: ParticipantIdInvalid,
    PARTICIPANT_JOIN_MISSING: ParticipantJoinMissing,
    PARTICIPANT_VERSION_OUTDATED: ParticipantVersionOutdated,
    PASSWORD_EMPTY: PasswordEmpty,
    PASSWORD_HASH_INVALID: PasswordHashInvalid,
    PASSWORD_MISSING: PasswordMissing,
    PASSWORD_RECOVERY_EXPIRED: PasswordRecoveryExpired,
    PASSWORD_RECOVERY_NA: PasswordRecoveryNa,
    PASSWORD_REQUIRED: PasswordRequired,
    PAYMENT_PROVIDER_INVALID: PaymentProviderInvalid,
    PEER_FLOOD: PeerFlood,
    PEER_HISTORY_EMPTY: PeerHistoryEmpty,
    PEER_ID_INVALID: PeerIdInvalid,
    PEER_ID_NOT_SUPPORTED: PeerIdNotSupported,
    PERSISTENT_TIMESTAMP_EMPTY: PersistentTimestampEmpty,
    PERSISTENT_TIMESTAMP_INVALID: PersistentTimestampInvalid,
    PERSISTENT_TIMESTAMP_OUTDATED: PersistentTimestampOutdated,
    PHONE_CODE_EMPTY: PhoneCodeEmpty,
    PHONE_CODE_EXPIRED: PhoneCodeExpired,
    PHONE_CODE_HASH_EMPTY: PhoneCodeHashEmpty,
    PHONE_CODE_INVALID: PhoneCodeInvalid,
    PHONE_HASH_EXPIRED: PhoneHashExpired,
    PHONE_NOT_OCCUPIED: PhoneNotOccupied,
    PHONE_NUMBER_APP_SIGNUP_FORBIDDEN: PhoneNumberAppSignupForbidden,
    PHONE_NUMBER_BANNED: PhoneNumberBanned,
    PHONE_NUMBER_FLOOD: PhoneNumberFlood,
    PHONE_NUMBER_INVALID: PhoneNumberInvalid,
    PHONE_NUMBER_OCCUPIED: PhoneNumberOccupied,
    PHONE_NUMBER_UNOCCUPIED: PhoneNumberUnoccupied,
    PHONE_PASSWORD_FLOOD: PhonePasswordFlood,
    PHONE_PASSWORD_PROTECTED: PhonePasswordProtected,
    PHOTO_CONTENT_TYPE_INVALID: PhotoContentTypeInvalid,
    PHOTO_CONTENT_URL_EMPTY: PhotoContentUrlEmpty,
    PHOTO_CROP_FILE_MISSING: PhotoCropFileMissing,
    PHOTO_CROP_SIZE_SMALL: PhotoCropSizeSmall,
    PHOTO_EXT_INVALID: PhotoExtInvalid,
    PHOTO_FILE_MISSING: PhotoFileMissing,
    PHOTO_ID_INVALID: PhotoIdInvalid,
    PHOTO_INVALID: PhotoInvalid,
    PHOTO_INVALID_DIMENSIONS: PhotoInvalidDimensions,
    PHOTO_SAVE_FILE_INVALID: PhotoSaveFileInvalid,
    PHOTO_THUMB_URL_EMPTY: PhotoThumbUrlEmpty,
    PINNED_DIALOGS_TOO_MUCH: PinnedDialogsTooMuch,
    PIN_RESTRICTED: PinRestricted,
    POLL_ANSWERS_INVALID: PollAnswersInvalid,
    POLL_ANSWER_INVALID: PollAnswerInvalid,
    POLL_OPTION_DUPLICATE: PollOptionDuplicate,
    POLL_OPTION_INVALID: PollOptionInvalid,
    POLL_QUESTION_INVALID: PollQuestionInvalid,
    POLL_UNSUPPORTED: PollUnsupported,
    POLL_VOTE_REQUIRED: PollVoteRequired,
    POSTPONED_TIMEOUT: PostponedTimeout,
    PREMIUM_ACCOUNT_REQUIRED: PremiumAccountRequired,
    PREMIUM_CURRENTLY_UNAVAILABLE: PremiumCurrentlyUnavailable,
    PREVIOUS_CHAT_IMPORT_ACTIVE_WAIT_XMIN: PreviousChatImportActiveWaitXmin,
    PRIVACY_KEY_INVALID: PrivacyKeyInvalid,
    PRIVACY_TOO_LONG: PrivacyTooLong,
    PRIVACY_VALUE_INVALID: PrivacyValueInvalid,
    PTS_CHANGE_EMPTY: PtsChangeEmpty,
    PUBLIC_CHANNEL_MISSING: PublicChannelMissing,
    PUBLIC_KEY_REQUIRED: PublicKeyRequired,
    QUERY_ID_EMPTY: QueryIdEmpty,
    QUERY_ID_INVALID: QueryIdInvalid,
    QUERY_TOO_SHORT: QueryTooShort,
    QUIZ_ANSWER_MISSING: QuizAnswerMissing,
    QUIZ_CORRECT_ANSWERS_EMPTY: QuizCorrectAnswersEmpty,
    QUIZ_CORRECT_ANSWERS_TOO_MUCH: QuizCorrectAnswersTooMuch,
    QUIZ_CORRECT_ANSWER_INVALID: QuizCorrectAnswerInvalid,
    QUIZ_MULTIPLE_INVALID: QuizMultipleInvalid,
    RANDOM_ID_DUPLICATE: RandomIdDuplicate,
    RANDOM_ID_EMPTY: RandomIdEmpty,
    RANDOM_ID_INVALID: RandomIdInvalid,
    RANDOM_LENGTH_INVALID: RandomLengthInvalid,
    RANGES_INVALID: RangesInvalid,
    REACTIONS_TOO_MANY: ReactionsTooMany,
    REACTION_EMPTY: ReactionEmpty,
    REACTION_INVALID: ReactionInvalid,
    REFLECTOR_NOT_AVAILABLE: ReflectorNotAvailable,
    REG_ID_GENERATE_FAILED: RegIdGenerateFailed,
    REPLY_MARKUP_BUY_EMPTY: ReplyMarkupBuyEmpty,
    REPLY_MARKUP_GAME_EMPTY: ReplyMarkupGameEmpty,
    REPLY_MARKUP_INVALID: ReplyMarkupInvalid,
    REPLY_MARKUP_TOO_LONG: ReplyMarkupTooLong,
    RESET_REQUEST_MISSING: ResetRequestMissing,
    RESULTS_TOO_MUCH: ResultsTooMuch,
    RESULT_ID_DUPLICATE: ResultIdDuplicate,
    RESULT_ID_EMPTY: ResultIdEmpty,
    RESULT_ID_INVALID: ResultIdInvalid,
    RESULT_TYPE_INVALID: ResultTypeInvalid,
    REVOTE_NOT_ALLOWED: RevoteNotAllowed,
    RIGHTS_NOT_MODIFIED: RightsNotModified,
    RIGHT_FORBIDDEN: RightForbidden,
    RPC_CALL_FAIL: RpcCallFail,
    RPC_MCGET_FAIL: RpcMcgetFail,
    RSA_DECRYPT_FAILED: RsaDecryptFailed,
    SCHEDULE_BOT_NOT_ALLOWED: ScheduleBotNotAllowed,
    SCHEDULE_DATE_INVALID: ScheduleDateInvalid,
    SCHEDULE_DATE_TOO_LATE: ScheduleDateTooLate,
    SCHEDULE_STATUS_PRIVATE: ScheduleStatusPrivate,
    SCHEDULE_TOO_MUCH: ScheduleTooMuch,
    SCORE_INVALID: ScoreInvalid,
    SEARCH_QUERY_EMPTY: SearchQueryEmpty,
    SEARCH_WITH_LINK_NOT_SUPPORTED: SearchWithLinkNotSupported,
    SECONDS_INVALID: SecondsInvalid,
    SEND_AS_PEER_INVALID: SendAsPeerInvalid,
    SEND_CODE_UNAVAILABLE: SendCodeUnavailable,
    SEND_MESSAGE_MEDIA_INVALID: SendMessageMediaInvalid,
    SEND_MESSAGE_TYPE_INVALID: SendMessageTypeInvalid,
    SENSITIVE_CHANGE_FORBIDDEN: SensitiveChangeForbidden,
    SESSION_EXPIRED: SessionExpired,
    SESSION_PASSWORD_NEEDED: SessionPasswordNeeded,
    SESSION_REVOKED: SessionRevoked,
    SETTINGS_INVALID: SettingsInvalid,
    SHA256_HASH_INVALID: Sha256HashInvalid,
    SHORTNAME_OCCUPY_FAILED: ShortnameOccupyFailed,
    SHORT_NAME_INVALID: ShortNameInvalid,
    SHORT_NAME_OCCUPIED: ShortNameOccupied,
    SIGN_IN_FAILED: SignInFailed,
    SLOWMODE_MULTI_MSGS_DISABLED: SlowmodeMultiMsgsDisabled,
    SMS_CODE_CREATE_FAILED: SmsCodeCreateFailed,
    SRP_ID_INVALID: SrpIdInvalid,
    SRP_PASSWORD_CHANGED: SrpPasswordChanged,
    START_PARAM_EMPTY: StartParamEmpty,
    START_PARAM_INVALID: StartParamInvalid,
    START_PARAM_TOO_LONG: StartParamTooLong,
    STICKERPACK_STICKERS_TOO_MUCH: StickerpackStickersTooMuch,
    STICKERSET_INVALID: StickersetInvalid,
    STICKERSET_OWNER_ANONYMOUS: StickersetOwnerAnonymous,
    STICKERS_EMPTY: StickersEmpty,
    STICKERS_TOO_MUCH: StickersTooMuch,
    STICKER_DOCUMENT_INVALID: StickerDocumentInvalid,
    STICKER_EMOJI_INVALID: StickerEmojiInvalid,
    STICKER_FILE_INVALID: StickerFileInvalid,
    STICKER_GIF_DIMENSIONS: StickerGifDimensions,
    STICKER_ID_INVALID: StickerIdInvalid,
    STICKER_INVALID: StickerInvalid,
    STICKER_MIME_INVALID: StickerMimeInvalid,
    STICKER_PNG_DIMENSIONS: StickerPngDimensions,
    STICKER_PNG_NOPNG: StickerPngNopng,
    STICKER_TGS_NODOC: StickerTgsNodoc,
    STICKER_TGS_NOTGS: StickerTgsNotgs,
    STICKER_THUMB_PNG_NOPNG: StickerThumbPngNopng,
    STICKER_THUMB_TGS_NOTGS: StickerThumbTgsNotgs,
    STICKER_VIDEO_BIG: StickerVideoBig,
    STICKER_VIDEO_NODOC: StickerVideoNodoc,
    STICKER_VIDEO_NOWEBM: StickerVideoNowebm,
    STORAGE_CHECK_FAILED: StorageCheckFailed,
    STORE_INVALID_SCALAR_TYPE: StoreInvalidScalarType,
    SWITCH_PM_TEXT_EMPTY: SwitchPmTextEmpty,
    TAKEOUT_INVALID: TakeoutInvalid,
    TAKEOUT_REQUIRED: TakeoutRequired,
    TEMP_AUTH_KEY_ALREADY_BOUND: TempAuthKeyAlreadyBound,
    TEMP_AUTH_KEY_EMPTY: TempAuthKeyEmpty,
    THEME_FILE_INVALID: ThemeFileInvalid,
    THEME_FORMAT_INVALID: ThemeFormatInvalid,
    THEME_INVALID: ThemeInvalid,
    THEME_MIME_INVALID: ThemeMimeInvalid,
    THEME_TITLE_INVALID: ThemeTitleInvalid,
    TIMEOUT: Timeout,
    TITLE_INVALID: TitleInvalid,
    TMP_PASSWORD_DISABLED: TmpPasswordDisabled,
    TMP_PASSWORD_INVALID: TmpPasswordInvalid,
    TOKEN_INVALID: TokenInvalid,
    TOPIC_DELETED: TopicDeleted,
    TO_LANG_INVALID: ToLangInvalid,
    TTL_DAYS_INVALID: TtlDaysInvalid,
    TTL_MEDIA_INVALID: TtlMediaInvalid,
    TTL_PERIOD_INVALID: TtlPeriodInvalid,
    TYPES_EMPTY: TypesEmpty,
    TYPE_CONSTRUCTOR_INVALID: TypeConstructorInvalid,
    Timedout: Timedout,
    Timeout: Timeout,
    UNKNOWN_ERROR: UnknownError,
    UNKNOWN_METHOD: UnknownMethod,
    UNTIL_DATE_INVALID: UntilDateInvalid,
    UPDATE_APP_TO_LOGIN: UpdateAppToLogin,
    URL_INVALID: UrlInvalid,
    USAGE_LIMIT_INVALID: UsageLimitInvalid,
    USERNAME_INVALID: UsernameInvalid,
    USERNAME_NOT_MODIFIED: UsernameNotModified,
    USERNAME_NOT_OCCUPIED: UsernameNotOccupied,
    USERNAME_OCCUPIED: UsernameOccupied,
    USERNAME_PURCHASE_AVAILABLE: UsernamePurchaseAvailable,
    USERPIC_PRIVACY_REQUIRED: UserpicPrivacyRequired,
    USERPIC_UPLOAD_REQUIRED: UserpicUploadRequired,
    USERS_TOO_FEW: UsersTooFew,
    USERS_TOO_MUCH: UsersTooMuch,
    USER_ADMIN_INVALID: UserAdminInvalid,
    USER_ALREADY_INVITED: UserAlreadyInvited,
    USER_ALREADY_PARTICIPANT: UserAlreadyParticipant,
    USER_BANNED_IN_CHANNEL: UserBannedInChannel,
    USER_BLOCKED: UserBlocked,
    USER_BOT: UserBot,
    USER_BOT_INVALID: UserBotInvalid,
    USER_BOT_REQUIRED: UserBotRequired,
    USER_CHANNELS_TOO_MUCH: UserChannelsTooMuch,
    USER_CREATOR: UserCreator,
    USER_DEACTIVATED: UserDeactivated,
    USER_DEACTIVATED_BAN: UserDeactivatedBan,
    USER_DELETED: UserDeleted,
    USER_ID_INVALID: UserIdInvalid,
    USER_INVALID: UserInvalid,
    USER_IS_BLOCKED: UserIsBlocked,
    USER_IS_BOT: UserIsBot,
    USER_KICKED: UserKicked,
    USER_NOT_MUTUAL_CONTACT: UserNotMutualContact,
    USER_NOT_PARTICIPANT: UserNotParticipant,
    USER_PRIVACY_RESTRICTED: UserPrivacyRestricted,
    USER_RESTRICTED: UserRestricted,
    USER_VOLUME_INVALID: UserVolumeInvalid,
    VIDEO_CONTENT_TYPE_INVALID: VideoContentTypeInvalid,
    VIDEO_FILE_INVALID: VideoFileInvalid,
    VIDEO_TITLE_EMPTY: VideoTitleEmpty,
    VOICE_MESSAGES_FORBIDDEN: VoiceMessagesForbidden,
    WALLPAPER_FILE_INVALID: WallpaperFileInvalid,
    WALLPAPER_INVALID: WallpaperInvalid,
    WALLPAPER_MIME_INVALID: WallpaperMimeInvalid,
    WC_CONVERT_URL_INVALID: WcConvertUrlInvalid,
    WEBDOCUMENT_INVALID: WebdocumentInvalid,
    WEBDOCUMENT_MIME_INVALID: WebdocumentMimeInvalid,
    WEBDOCUMENT_SIZE_TOO_BIG: WebdocumentSizeTooBig,
    WEBDOCUMENT_URL_INVALID: WebdocumentUrlInvalid,
    WEBPAGE_CURL_FAILED: WebpageCurlFailed,
    WEBPAGE_MEDIA_EMPTY: WebpageMediaEmpty,
    WEBPUSH_AUTH_INVALID: WebpushAuthInvalid,
    WEBPUSH_KEY_INVALID: WebpushKeyInvalid,
    WEBPUSH_TOKEN_INVALID: WebpushTokenInvalid,
    WORKER_BUSY_TOO_LONG_RETRY: WorkerBusyTooLongRetry,
    YOU_BLOCKED_USER: YouBlockedUser,
};
