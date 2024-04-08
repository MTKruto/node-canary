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
import { TLObject, types } from "./2_tl.js";
export interface ErrorWithCallParams {
    error_code: number;
    error_message: string;
    call: TLObject;
}
export declare class ErrorWithCall extends types.Rpc_error {
    call: TLObject;
    constructor(params: ErrorWithCallParams);
}
export declare class AboutTooLong extends ErrorWithCall {
}
export declare class AccessTokenExpired extends ErrorWithCall {
}
export declare class AccessTokenInvalid extends ErrorWithCall {
}
export declare class ActiveUserRequired extends ErrorWithCall {
}
export declare class AdminsTooMuch extends ErrorWithCall {
}
export declare class AdminIdInvalid extends ErrorWithCall {
}
export declare class AdminRankEmojiNotAllowed extends ErrorWithCall {
}
export declare class AdminRankInvalid extends ErrorWithCall {
}
export declare class AlbumPhotosTooMany extends ErrorWithCall {
}
export declare class ApiIdInvalid extends ErrorWithCall {
}
export declare class ApiIdPublishedFlood extends ErrorWithCall {
}
export declare class ArticleTitleEmpty extends ErrorWithCall {
}
export declare class AudioContentUrlEmpty extends ErrorWithCall {
}
export declare class AudioTitleEmpty extends ErrorWithCall {
}
export declare class AuthBytesInvalid extends ErrorWithCall {
}
export declare class AuthKeyDuplicated extends ErrorWithCall {
}
export declare class AuthKeyInvalid extends ErrorWithCall {
}
export declare class AuthKeyPermEmpty extends ErrorWithCall {
}
export declare class AuthKeyUnregistered extends ErrorWithCall {
}
export declare class AuthRestart extends ErrorWithCall {
}
export declare class AuthTokenAlreadyAccepted extends ErrorWithCall {
}
export declare class AuthTokenException extends ErrorWithCall {
}
export declare class AuthTokenExpired extends ErrorWithCall {
}
export declare class AuthTokenInvalid extends ErrorWithCall {
}
export declare class AutoarchiveNotAvailable extends ErrorWithCall {
}
export declare class BankCardNumberInvalid extends ErrorWithCall {
}
export declare class BannedRightsInvalid extends ErrorWithCall {
}
export declare class BasePortLocInvalid extends ErrorWithCall {
}
export declare class BotsTooMuch extends ErrorWithCall {
}
export declare class BotChannelsNa extends ErrorWithCall {
}
export declare class BotCommandDescriptionInvalid extends ErrorWithCall {
}
export declare class BotCommandInvalid extends ErrorWithCall {
}
export declare class BotDomainInvalid extends ErrorWithCall {
}
export declare class BotGamesDisabled extends ErrorWithCall {
}
export declare class BotGroupsBlocked extends ErrorWithCall {
}
export declare class BotInlineDisabled extends ErrorWithCall {
}
export declare class BotInvalid extends ErrorWithCall {
}
export declare class BotMethodInvalid extends ErrorWithCall {
}
export declare class BotMissing extends ErrorWithCall {
}
export declare class BotOnesideNotAvail extends ErrorWithCall {
}
export declare class BotPaymentsDisabled extends ErrorWithCall {
}
export declare class BotPollsDisabled extends ErrorWithCall {
}
export declare class BotResponseTimeout extends ErrorWithCall {
}
export declare class BotScoreNotModified extends ErrorWithCall {
}
export declare class BroadcastCallsDisabled extends ErrorWithCall {
}
export declare class BroadcastForbidden extends ErrorWithCall {
}
export declare class BroadcastIdInvalid extends ErrorWithCall {
}
export declare class BroadcastPublicVotersForbidden extends ErrorWithCall {
}
export declare class BroadcastRequired extends ErrorWithCall {
}
export declare class ButtonDataInvalid extends ErrorWithCall {
}
export declare class ButtonTextInvalid extends ErrorWithCall {
}
export declare class ButtonTypeInvalid extends ErrorWithCall {
}
export declare class ButtonUrlInvalid extends ErrorWithCall {
}
export declare class ButtonUserPrivacyRestricted extends ErrorWithCall {
}
export declare class CallAlreadyAccepted extends ErrorWithCall {
}
export declare class CallAlreadyDeclined extends ErrorWithCall {
}
export declare class CallOccupyFailed extends ErrorWithCall {
}
export declare class CallPeerInvalid extends ErrorWithCall {
}
export declare class CallProtocolFlagsInvalid extends ErrorWithCall {
}
export declare class CdnMethodInvalid extends ErrorWithCall {
}
export declare class CdnUploadTimeout extends ErrorWithCall {
}
export declare class ChannelsAdminLocatedTooMuch extends ErrorWithCall {
}
export declare class ChannelsAdminPublicTooMuch extends ErrorWithCall {
}
export declare class ChannelsTooMuch extends ErrorWithCall {
}
export declare class ChannelBanned extends ErrorWithCall {
}
export declare class ChannelForumMissing extends ErrorWithCall {
}
export declare class ChannelIdInvalid extends ErrorWithCall {
}
export declare class ChannelInvalid extends ErrorWithCall {
}
export declare class ChannelParicipantMissing extends ErrorWithCall {
}
export declare class ChannelPrivate extends ErrorWithCall {
}
export declare class ChannelPublicGroupNa extends ErrorWithCall {
}
export declare class ChannelTooBig extends ErrorWithCall {
}
export declare class ChannelTooLarge extends ErrorWithCall {
}
export declare class ChatAboutNotModified extends ErrorWithCall {
}
export declare class ChatAboutTooLong extends ErrorWithCall {
}
export declare class ChatAdminInviteRequired extends ErrorWithCall {
}
export declare class ChatAdminRequired extends ErrorWithCall {
}
export declare class ChatDiscussionUnallowed extends ErrorWithCall {
}
export declare class ChatForbidden extends ErrorWithCall {
}
export declare class ChatForwardsRestricted extends ErrorWithCall {
}
export declare class ChatGetFailed extends ErrorWithCall {
}
export declare class ChatGuestSendForbidden extends ErrorWithCall {
}
export declare class ChatIdEmpty extends ErrorWithCall {
}
export declare class ChatIdGenerateFailed extends ErrorWithCall {
}
export declare class ChatIdInvalid extends ErrorWithCall {
}
export declare class ChatInvalid extends ErrorWithCall {
}
export declare class ChatInvitePermanent extends ErrorWithCall {
}
export declare class ChatLinkExists extends ErrorWithCall {
}
export declare class ChatNotModified extends ErrorWithCall {
}
export declare class ChatRestricted extends ErrorWithCall {
}
export declare class ChatRevokeDateUnsupported extends ErrorWithCall {
}
export declare class ChatSendGameForbidden extends ErrorWithCall {
}
export declare class ChatSendGifsForbidden extends ErrorWithCall {
}
export declare class ChatSendInlineForbidden extends ErrorWithCall {
}
export declare class ChatSendMediaForbidden extends ErrorWithCall {
}
export declare class ChatSendPollForbidden extends ErrorWithCall {
}
export declare class ChatSendStickersForbidden extends ErrorWithCall {
}
export declare class ChatTitleEmpty extends ErrorWithCall {
}
export declare class ChatTooBig extends ErrorWithCall {
}
export declare class ChatWriteForbidden extends ErrorWithCall {
}
export declare class ChpCallFail extends ErrorWithCall {
}
export declare class CodeEmpty extends ErrorWithCall {
}
export declare class CodeHashInvalid extends ErrorWithCall {
}
export declare class CodeInvalid extends ErrorWithCall {
}
export declare class ConnectionApiIdInvalid extends ErrorWithCall {
}
export declare class ConnectionAppVersionEmpty extends ErrorWithCall {
}
export declare class ConnectionDeviceModelEmpty extends ErrorWithCall {
}
export declare class ConnectionLangPackInvalid extends ErrorWithCall {
}
export declare class ConnectionLayerInvalid extends ErrorWithCall {
}
export declare class ConnectionNotInited extends ErrorWithCall {
}
export declare class ConnectionSystemEmpty extends ErrorWithCall {
}
export declare class ConnectionSystemLangCodeEmpty extends ErrorWithCall {
}
export declare class ContactAddMissing extends ErrorWithCall {
}
export declare class ContactIdInvalid extends ErrorWithCall {
}
export declare class ContactNameEmpty extends ErrorWithCall {
}
export declare class ContactReqMissing extends ErrorWithCall {
}
export declare class CreateCallFailed extends ErrorWithCall {
}
export declare class CurrencyTotalAmountInvalid extends ErrorWithCall {
}
export declare class DataInvalid extends ErrorWithCall {
}
export declare class DataJsonInvalid extends ErrorWithCall {
}
export declare class DataTooLong extends ErrorWithCall {
}
export declare class DateEmpty extends ErrorWithCall {
}
export declare class DcIdInvalid extends ErrorWithCall {
}
export declare class DhGAInvalid extends ErrorWithCall {
}
export declare class DocumentInvalid extends ErrorWithCall {
}
export declare class EditBotInviteForbidden extends ErrorWithCall {
}
export declare class EmailHashExpired extends ErrorWithCall {
}
export declare class EmailInvalid extends ErrorWithCall {
}
export declare class EmailUnconfirmed extends ErrorWithCall {
}
export declare class EmailVerifyExpired extends ErrorWithCall {
}
export declare class EmojiInvalid extends ErrorWithCall {
}
export declare class EmojiNotModified extends ErrorWithCall {
}
export declare class EmoticonEmpty extends ErrorWithCall {
}
export declare class EmoticonInvalid extends ErrorWithCall {
}
export declare class EmoticonStickerpackMissing extends ErrorWithCall {
}
export declare class EncryptedMessageInvalid extends ErrorWithCall {
}
export declare class EncryptionAlreadyAccepted extends ErrorWithCall {
}
export declare class EncryptionAlreadyDeclined extends ErrorWithCall {
}
export declare class EncryptionDeclined extends ErrorWithCall {
}
export declare class EncryptionIdInvalid extends ErrorWithCall {
}
export declare class EncryptionOccupyFailed extends ErrorWithCall {
}
export declare class EntitiesTooLong extends ErrorWithCall {
}
export declare class EntityBoundsInvalid extends ErrorWithCall {
}
export declare class EntityMentionUserInvalid extends ErrorWithCall {
}
export declare class ErrorTextEmpty extends ErrorWithCall {
}
export declare class ExpireDateInvalid extends ErrorWithCall {
}
export declare class ExpireForbidden extends ErrorWithCall {
}
export declare class ExportCardInvalid extends ErrorWithCall {
}
export declare class ExternalUrlInvalid extends ErrorWithCall {
}
export declare class FieldNameEmpty extends ErrorWithCall {
}
export declare class FieldNameInvalid extends ErrorWithCall {
}
export declare class FilerefUpgradeNeeded extends ErrorWithCall {
}
export declare class FileContentTypeInvalid extends ErrorWithCall {
}
export declare class FileEmtpy extends ErrorWithCall {
}
export declare class FileIdInvalid extends ErrorWithCall {
}
export declare class FilePartsInvalid extends ErrorWithCall {
}
export declare class FilePart_0Missing extends ErrorWithCall {
}
export declare class FilePartEmpty extends ErrorWithCall {
}
export declare class FilePartInvalid extends ErrorWithCall {
}
export declare class FilePartLengthInvalid extends ErrorWithCall {
}
export declare class FilePartSizeChanged extends ErrorWithCall {
}
export declare class FilePartSizeInvalid extends ErrorWithCall {
}
export declare class FilePartTooBig extends ErrorWithCall {
}
export declare class FilePartXMissing extends ErrorWithCall {
}
export declare class FileReferenceEmpty extends ErrorWithCall {
}
export declare class FileReferenceExpired extends ErrorWithCall {
}
export declare class FileReferenceInvalid extends ErrorWithCall {
}
export declare class FileTitleEmpty extends ErrorWithCall {
}
export declare class FilterIdInvalid extends ErrorWithCall {
}
export declare class FilterIncludeEmpty extends ErrorWithCall {
}
export declare class FilterNotSupported extends ErrorWithCall {
}
export declare class FilterTitleEmpty extends ErrorWithCall {
}
export declare class FirstnameInvalid extends ErrorWithCall {
}
export declare class FolderIdEmpty extends ErrorWithCall {
}
export declare class FolderIdInvalid extends ErrorWithCall {
}
export declare class FreshChangeAdminsForbidden extends ErrorWithCall {
}
export declare class FreshChangePhoneForbidden extends ErrorWithCall {
}
export declare class FreshResetAuthorisationForbidden extends ErrorWithCall {
}
export declare class FromMessageBotDisabled extends ErrorWithCall {
}
export declare class FromPeerInvalid extends ErrorWithCall {
}
export declare class GameBotInvalid extends ErrorWithCall {
}
export declare class GeoPointInvalid extends ErrorWithCall {
}
export declare class GifContentTypeInvalid extends ErrorWithCall {
}
export declare class GifIdInvalid extends ErrorWithCall {
}
export declare class GraphExpiredReload extends ErrorWithCall {
}
export declare class GraphInvalidReload extends ErrorWithCall {
}
export declare class GraphOutdatedReload extends ErrorWithCall {
}
export declare class GroupcallAddParticipantsFailed extends ErrorWithCall {
}
export declare class GroupcallAlreadyDiscarded extends ErrorWithCall {
}
export declare class GroupcallAlreadyStarted extends ErrorWithCall {
}
export declare class GroupcallForbidden extends ErrorWithCall {
}
export declare class GroupcallInvalid extends ErrorWithCall {
}
export declare class GroupcallJoinMissing extends ErrorWithCall {
}
export declare class GroupcallNotModified extends ErrorWithCall {
}
export declare class GroupcallSsrcDuplicateMuch extends ErrorWithCall {
}
export declare class GroupedMediaInvalid extends ErrorWithCall {
}
export declare class GroupCallInvalid extends ErrorWithCall {
}
export declare class HashInvalid extends ErrorWithCall {
}
export declare class HideRequesterMissing extends ErrorWithCall {
}
export declare class HistoryGetFailed extends ErrorWithCall {
}
export declare class ImageProcessFailed extends ErrorWithCall {
}
export declare class ImportFileInvalid extends ErrorWithCall {
}
export declare class ImportFormatUnrecognized extends ErrorWithCall {
}
export declare class ImportIdInvalid extends ErrorWithCall {
}
export declare class InlineBotRequired extends ErrorWithCall {
}
export declare class InlineResultExpired extends ErrorWithCall {
}
export declare class InputConstructorInvalid extends ErrorWithCall {
}
export declare class InputFetchError extends ErrorWithCall {
}
export declare class InputFetchFail extends ErrorWithCall {
}
export declare class InputFilterInvalid extends ErrorWithCall {
}
export declare class InputLayerInvalid extends ErrorWithCall {
}
export declare class InputMethodInvalid extends ErrorWithCall {
}
export declare class InputRequestTooLong extends ErrorWithCall {
}
export declare class InputTextEmpty extends ErrorWithCall {
}
export declare class InputUserDeactivated extends ErrorWithCall {
}
export declare class InterdcXCallError extends ErrorWithCall {
}
export declare class InterdcXCallRichError extends ErrorWithCall {
}
export declare class InviteForbiddenWithJoinas extends ErrorWithCall {
}
export declare class InviteHashEmpty extends ErrorWithCall {
}
export declare class InviteHashExpired extends ErrorWithCall {
}
export declare class InviteHashInvalid extends ErrorWithCall {
}
export declare class InviteRequestSent extends ErrorWithCall {
}
export declare class InviteRevokedMissing extends ErrorWithCall {
}
export declare class InvoicePayloadInvalid extends ErrorWithCall {
}
export declare class JoinAsPeerInvalid extends ErrorWithCall {
}
export declare class LangCodeInvalid extends ErrorWithCall {
}
export declare class LangCodeNotSupported extends ErrorWithCall {
}
export declare class LangPackInvalid extends ErrorWithCall {
}
export declare class LastnameInvalid extends ErrorWithCall {
}
export declare class LimitInvalid extends ErrorWithCall {
}
export declare class LinkNotModified extends ErrorWithCall {
}
export declare class LocationInvalid extends ErrorWithCall {
}
export declare class MaxDateInvalid extends ErrorWithCall {
}
export declare class MaxIdInvalid extends ErrorWithCall {
}
export declare class MaxQtsInvalid extends ErrorWithCall {
}
export declare class Md5ChecksumInvalid extends ErrorWithCall {
}
export declare class MediaCaptionTooLong extends ErrorWithCall {
}
export declare class MediaEmpty extends ErrorWithCall {
}
export declare class MediaGroupedInvalid extends ErrorWithCall {
}
export declare class MediaInvalid extends ErrorWithCall {
}
export declare class MediaNewInvalid extends ErrorWithCall {
}
export declare class MediaPrevInvalid extends ErrorWithCall {
}
export declare class MediaTtlInvalid extends ErrorWithCall {
}
export declare class MegagroupIdInvalid extends ErrorWithCall {
}
export declare class MegagroupPrehistoryHidden extends ErrorWithCall {
}
export declare class MegagroupRequired extends ErrorWithCall {
}
export declare class MemberNoLocation extends ErrorWithCall {
}
export declare class MemberOccupyPrimaryLocFailed extends ErrorWithCall {
}
export declare class MessageAuthorRequired extends ErrorWithCall {
}
export declare class MessageDeleteForbidden extends ErrorWithCall {
}
export declare class MessageEditTimeExpired extends ErrorWithCall {
}
export declare class MessageEmpty extends ErrorWithCall {
}
export declare class MessageIdsEmpty extends ErrorWithCall {
}
export declare class MessageIdInvalid extends ErrorWithCall {
}
export declare class MessageNotModified extends ErrorWithCall {
}
export declare class MessagePollClosed extends ErrorWithCall {
}
export declare class MessageTooLong extends ErrorWithCall {
}
export declare class MethodInvalid extends ErrorWithCall {
}
export declare class MinDateInvalid extends ErrorWithCall {
}
export declare class MsgidDecreaseRetry extends ErrorWithCall {
}
export declare class MsgIdInvalid extends ErrorWithCall {
}
export declare class MsgTooOld extends ErrorWithCall {
}
export declare class MsgWaitFailed extends ErrorWithCall {
}
export declare class MtSendQueueTooLong extends ErrorWithCall {
}
export declare class MultiMediaTooLong extends ErrorWithCall {
}
export declare class NeedChatInvalid extends ErrorWithCall {
}
export declare class NeedMemberInvalid extends ErrorWithCall {
}
export declare class NewSaltInvalid extends ErrorWithCall {
}
export declare class NewSettingsEmpty extends ErrorWithCall {
}
export declare class NewSettingsInvalid extends ErrorWithCall {
}
export declare class NextOffsetInvalid extends ErrorWithCall {
}
export declare class NotAllowed extends ErrorWithCall {
}
export declare class OffsetInvalid extends ErrorWithCall {
}
export declare class OffsetPeerIdInvalid extends ErrorWithCall {
}
export declare class OptionsTooMuch extends ErrorWithCall {
}
export declare class OptionInvalid extends ErrorWithCall {
}
export declare class PackShortNameInvalid extends ErrorWithCall {
}
export declare class PackShortNameOccupied extends ErrorWithCall {
}
export declare class PackTitleInvalid extends ErrorWithCall {
}
export declare class ParticipantsTooFew extends ErrorWithCall {
}
export declare class ParticipantCallFailed extends ErrorWithCall {
}
export declare class ParticipantIdInvalid extends ErrorWithCall {
}
export declare class ParticipantJoinMissing extends ErrorWithCall {
}
export declare class ParticipantVersionOutdated extends ErrorWithCall {
}
export declare class PasswordEmpty extends ErrorWithCall {
}
export declare class PasswordHashInvalid extends ErrorWithCall {
}
export declare class PasswordMissing extends ErrorWithCall {
}
export declare class PasswordRecoveryExpired extends ErrorWithCall {
}
export declare class PasswordRecoveryNa extends ErrorWithCall {
}
export declare class PasswordRequired extends ErrorWithCall {
}
export declare class PaymentProviderInvalid extends ErrorWithCall {
}
export declare class PeerFlood extends ErrorWithCall {
}
export declare class PeerHistoryEmpty extends ErrorWithCall {
}
export declare class PeerIdInvalid extends ErrorWithCall {
}
export declare class PeerIdNotSupported extends ErrorWithCall {
}
export declare class PersistentTimestampEmpty extends ErrorWithCall {
}
export declare class PersistentTimestampInvalid extends ErrorWithCall {
}
export declare class PersistentTimestampOutdated extends ErrorWithCall {
}
export declare class PhoneCodeEmpty extends ErrorWithCall {
}
export declare class PhoneCodeExpired extends ErrorWithCall {
}
export declare class PhoneCodeHashEmpty extends ErrorWithCall {
}
export declare class PhoneCodeInvalid extends ErrorWithCall {
}
export declare class PhoneHashExpired extends ErrorWithCall {
}
export declare class PhoneNotOccupied extends ErrorWithCall {
}
export declare class PhoneNumberAppSignupForbidden extends ErrorWithCall {
}
export declare class PhoneNumberBanned extends ErrorWithCall {
}
export declare class PhoneNumberFlood extends ErrorWithCall {
}
export declare class PhoneNumberInvalid extends ErrorWithCall {
}
export declare class PhoneNumberOccupied extends ErrorWithCall {
}
export declare class PhoneNumberUnoccupied extends ErrorWithCall {
}
export declare class PhonePasswordFlood extends ErrorWithCall {
}
export declare class PhonePasswordProtected extends ErrorWithCall {
}
export declare class PhotoContentTypeInvalid extends ErrorWithCall {
}
export declare class PhotoContentUrlEmpty extends ErrorWithCall {
}
export declare class PhotoCropFileMissing extends ErrorWithCall {
}
export declare class PhotoCropSizeSmall extends ErrorWithCall {
}
export declare class PhotoExtInvalid extends ErrorWithCall {
}
export declare class PhotoFileMissing extends ErrorWithCall {
}
export declare class PhotoIdInvalid extends ErrorWithCall {
}
export declare class PhotoInvalid extends ErrorWithCall {
}
export declare class PhotoInvalidDimensions extends ErrorWithCall {
}
export declare class PhotoSaveFileInvalid extends ErrorWithCall {
}
export declare class PhotoThumbUrlEmpty extends ErrorWithCall {
}
export declare class PinnedDialogsTooMuch extends ErrorWithCall {
}
export declare class PinRestricted extends ErrorWithCall {
}
export declare class PollAnswersInvalid extends ErrorWithCall {
}
export declare class PollAnswerInvalid extends ErrorWithCall {
}
export declare class PollOptionDuplicate extends ErrorWithCall {
}
export declare class PollOptionInvalid extends ErrorWithCall {
}
export declare class PollQuestionInvalid extends ErrorWithCall {
}
export declare class PollUnsupported extends ErrorWithCall {
}
export declare class PollVoteRequired extends ErrorWithCall {
}
export declare class PostponedTimeout extends ErrorWithCall {
}
export declare class PremiumAccountRequired extends ErrorWithCall {
}
export declare class PremiumCurrentlyUnavailable extends ErrorWithCall {
}
export declare class PreviousChatImportActiveWaitXmin extends ErrorWithCall {
}
export declare class PrivacyKeyInvalid extends ErrorWithCall {
}
export declare class PrivacyTooLong extends ErrorWithCall {
}
export declare class PrivacyValueInvalid extends ErrorWithCall {
}
export declare class PtsChangeEmpty extends ErrorWithCall {
}
export declare class PublicChannelMissing extends ErrorWithCall {
}
export declare class PublicKeyRequired extends ErrorWithCall {
}
export declare class QueryIdEmpty extends ErrorWithCall {
}
export declare class QueryIdInvalid extends ErrorWithCall {
}
export declare class QueryTooShort extends ErrorWithCall {
}
export declare class QuizAnswerMissing extends ErrorWithCall {
}
export declare class QuizCorrectAnswersEmpty extends ErrorWithCall {
}
export declare class QuizCorrectAnswersTooMuch extends ErrorWithCall {
}
export declare class QuizCorrectAnswerInvalid extends ErrorWithCall {
}
export declare class QuizMultipleInvalid extends ErrorWithCall {
}
export declare class RandomIdDuplicate extends ErrorWithCall {
}
export declare class RandomIdEmpty extends ErrorWithCall {
}
export declare class RandomIdInvalid extends ErrorWithCall {
}
export declare class RandomLengthInvalid extends ErrorWithCall {
}
export declare class RangesInvalid extends ErrorWithCall {
}
export declare class ReactionsTooMany extends ErrorWithCall {
}
export declare class ReactionEmpty extends ErrorWithCall {
}
export declare class ReactionInvalid extends ErrorWithCall {
}
export declare class ReflectorNotAvailable extends ErrorWithCall {
}
export declare class RegIdGenerateFailed extends ErrorWithCall {
}
export declare class ReplyMarkupBuyEmpty extends ErrorWithCall {
}
export declare class ReplyMarkupGameEmpty extends ErrorWithCall {
}
export declare class ReplyMarkupInvalid extends ErrorWithCall {
}
export declare class ReplyMarkupTooLong extends ErrorWithCall {
}
export declare class ResetRequestMissing extends ErrorWithCall {
}
export declare class ResultsTooMuch extends ErrorWithCall {
}
export declare class ResultIdDuplicate extends ErrorWithCall {
}
export declare class ResultIdEmpty extends ErrorWithCall {
}
export declare class ResultIdInvalid extends ErrorWithCall {
}
export declare class ResultTypeInvalid extends ErrorWithCall {
}
export declare class RevoteNotAllowed extends ErrorWithCall {
}
export declare class RightsNotModified extends ErrorWithCall {
}
export declare class RightForbidden extends ErrorWithCall {
}
export declare class RpcCallFail extends ErrorWithCall {
}
export declare class RpcMcgetFail extends ErrorWithCall {
}
export declare class RsaDecryptFailed extends ErrorWithCall {
}
export declare class ScheduleBotNotAllowed extends ErrorWithCall {
}
export declare class ScheduleDateInvalid extends ErrorWithCall {
}
export declare class ScheduleDateTooLate extends ErrorWithCall {
}
export declare class ScheduleStatusPrivate extends ErrorWithCall {
}
export declare class ScheduleTooMuch extends ErrorWithCall {
}
export declare class ScoreInvalid extends ErrorWithCall {
}
export declare class SearchQueryEmpty extends ErrorWithCall {
}
export declare class SearchWithLinkNotSupported extends ErrorWithCall {
}
export declare class SecondsInvalid extends ErrorWithCall {
}
export declare class SendAsPeerInvalid extends ErrorWithCall {
}
export declare class SendCodeUnavailable extends ErrorWithCall {
}
export declare class SendMessageMediaInvalid extends ErrorWithCall {
}
export declare class SendMessageTypeInvalid extends ErrorWithCall {
}
export declare class SensitiveChangeForbidden extends ErrorWithCall {
}
export declare class SessionExpired extends ErrorWithCall {
}
export declare class SessionPasswordNeeded extends ErrorWithCall {
}
export declare class SessionRevoked extends ErrorWithCall {
}
export declare class SettingsInvalid extends ErrorWithCall {
}
export declare class Sha256HashInvalid extends ErrorWithCall {
}
export declare class ShortnameOccupyFailed extends ErrorWithCall {
}
export declare class ShortNameInvalid extends ErrorWithCall {
}
export declare class ShortNameOccupied extends ErrorWithCall {
}
export declare class SignInFailed extends ErrorWithCall {
}
export declare class SlowmodeMultiMsgsDisabled extends ErrorWithCall {
}
export declare class SmsCodeCreateFailed extends ErrorWithCall {
}
export declare class SrpIdInvalid extends ErrorWithCall {
}
export declare class SrpPasswordChanged extends ErrorWithCall {
}
export declare class StartParamEmpty extends ErrorWithCall {
}
export declare class StartParamInvalid extends ErrorWithCall {
}
export declare class StartParamTooLong extends ErrorWithCall {
}
export declare class StickerpackStickersTooMuch extends ErrorWithCall {
}
export declare class StickersetInvalid extends ErrorWithCall {
}
export declare class StickersetOwnerAnonymous extends ErrorWithCall {
}
export declare class StickersEmpty extends ErrorWithCall {
}
export declare class StickersTooMuch extends ErrorWithCall {
}
export declare class StickerDocumentInvalid extends ErrorWithCall {
}
export declare class StickerEmojiInvalid extends ErrorWithCall {
}
export declare class StickerFileInvalid extends ErrorWithCall {
}
export declare class StickerGifDimensions extends ErrorWithCall {
}
export declare class StickerIdInvalid extends ErrorWithCall {
}
export declare class StickerInvalid extends ErrorWithCall {
}
export declare class StickerMimeInvalid extends ErrorWithCall {
}
export declare class StickerPngDimensions extends ErrorWithCall {
}
export declare class StickerPngNopng extends ErrorWithCall {
}
export declare class StickerTgsNodoc extends ErrorWithCall {
}
export declare class StickerTgsNotgs extends ErrorWithCall {
}
export declare class StickerThumbPngNopng extends ErrorWithCall {
}
export declare class StickerThumbTgsNotgs extends ErrorWithCall {
}
export declare class StickerVideoBig extends ErrorWithCall {
}
export declare class StickerVideoNodoc extends ErrorWithCall {
}
export declare class StickerVideoNowebm extends ErrorWithCall {
}
export declare class StorageCheckFailed extends ErrorWithCall {
}
export declare class StoreInvalidScalarType extends ErrorWithCall {
}
export declare class SwitchPmTextEmpty extends ErrorWithCall {
}
export declare class TakeoutInvalid extends ErrorWithCall {
}
export declare class TakeoutRequired extends ErrorWithCall {
}
export declare class TempAuthKeyAlreadyBound extends ErrorWithCall {
}
export declare class TempAuthKeyEmpty extends ErrorWithCall {
}
export declare class ThemeFileInvalid extends ErrorWithCall {
}
export declare class ThemeFormatInvalid extends ErrorWithCall {
}
export declare class ThemeInvalid extends ErrorWithCall {
}
export declare class ThemeMimeInvalid extends ErrorWithCall {
}
export declare class ThemeTitleInvalid extends ErrorWithCall {
}
export declare class Timeout extends ErrorWithCall {
}
export declare class TitleInvalid extends ErrorWithCall {
}
export declare class TmpPasswordDisabled extends ErrorWithCall {
}
export declare class TmpPasswordInvalid extends ErrorWithCall {
}
export declare class TokenInvalid extends ErrorWithCall {
}
export declare class TopicDeleted extends ErrorWithCall {
}
export declare class ToLangInvalid extends ErrorWithCall {
}
export declare class TtlDaysInvalid extends ErrorWithCall {
}
export declare class TtlMediaInvalid extends ErrorWithCall {
}
export declare class TtlPeriodInvalid extends ErrorWithCall {
}
export declare class TypesEmpty extends ErrorWithCall {
}
export declare class TypeConstructorInvalid extends ErrorWithCall {
}
export declare class Timedout extends ErrorWithCall {
}
export declare class UnknownError extends ErrorWithCall {
}
export declare class UnknownMethod extends ErrorWithCall {
}
export declare class UntilDateInvalid extends ErrorWithCall {
}
export declare class UpdateAppToLogin extends ErrorWithCall {
}
export declare class UrlInvalid extends ErrorWithCall {
}
export declare class UsageLimitInvalid extends ErrorWithCall {
}
export declare class UsernameInvalid extends ErrorWithCall {
}
export declare class UsernameNotModified extends ErrorWithCall {
}
export declare class UsernameNotOccupied extends ErrorWithCall {
}
export declare class UsernameOccupied extends ErrorWithCall {
}
export declare class UsernamePurchaseAvailable extends ErrorWithCall {
}
export declare class UserpicPrivacyRequired extends ErrorWithCall {
}
export declare class UserpicUploadRequired extends ErrorWithCall {
}
export declare class UsersTooFew extends ErrorWithCall {
}
export declare class UsersTooMuch extends ErrorWithCall {
}
export declare class UserAdminInvalid extends ErrorWithCall {
}
export declare class UserAlreadyInvited extends ErrorWithCall {
}
export declare class UserAlreadyParticipant extends ErrorWithCall {
}
export declare class UserBannedInChannel extends ErrorWithCall {
}
export declare class UserBlocked extends ErrorWithCall {
}
export declare class UserBot extends ErrorWithCall {
}
export declare class UserBotInvalid extends ErrorWithCall {
}
export declare class UserBotRequired extends ErrorWithCall {
}
export declare class UserChannelsTooMuch extends ErrorWithCall {
}
export declare class UserCreator extends ErrorWithCall {
}
export declare class UserDeactivated extends ErrorWithCall {
}
export declare class UserDeactivatedBan extends ErrorWithCall {
}
export declare class UserDeleted extends ErrorWithCall {
}
export declare class UserIdInvalid extends ErrorWithCall {
}
export declare class UserInvalid extends ErrorWithCall {
}
export declare class UserIsBlocked extends ErrorWithCall {
}
export declare class UserIsBot extends ErrorWithCall {
}
export declare class UserKicked extends ErrorWithCall {
}
export declare class UserNotMutualContact extends ErrorWithCall {
}
export declare class UserNotParticipant extends ErrorWithCall {
}
export declare class UserPrivacyRestricted extends ErrorWithCall {
}
export declare class UserRestricted extends ErrorWithCall {
}
export declare class UserVolumeInvalid extends ErrorWithCall {
}
export declare class VideoContentTypeInvalid extends ErrorWithCall {
}
export declare class VideoFileInvalid extends ErrorWithCall {
}
export declare class VideoTitleEmpty extends ErrorWithCall {
}
export declare class VoiceMessagesForbidden extends ErrorWithCall {
}
export declare class WallpaperFileInvalid extends ErrorWithCall {
}
export declare class WallpaperInvalid extends ErrorWithCall {
}
export declare class WallpaperMimeInvalid extends ErrorWithCall {
}
export declare class WcConvertUrlInvalid extends ErrorWithCall {
}
export declare class WebdocumentInvalid extends ErrorWithCall {
}
export declare class WebdocumentMimeInvalid extends ErrorWithCall {
}
export declare class WebdocumentSizeTooBig extends ErrorWithCall {
}
export declare class WebdocumentUrlInvalid extends ErrorWithCall {
}
export declare class WebpageCurlFailed extends ErrorWithCall {
}
export declare class WebpageMediaEmpty extends ErrorWithCall {
}
export declare class WebpushAuthInvalid extends ErrorWithCall {
}
export declare class WebpushKeyInvalid extends ErrorWithCall {
}
export declare class WebpushTokenInvalid extends ErrorWithCall {
}
export declare class WorkerBusyTooLongRetry extends ErrorWithCall {
}
export declare class YouBlockedUser extends ErrorWithCall {
}
export declare const map: {
    ABOUT_TOO_LONG: typeof AboutTooLong;
    ACCESS_TOKEN_EXPIRED: typeof AccessTokenExpired;
    ACCESS_TOKEN_INVALID: typeof AccessTokenInvalid;
    ACTIVE_USER_REQUIRED: typeof ActiveUserRequired;
    ADMINS_TOO_MUCH: typeof AdminsTooMuch;
    ADMIN_ID_INVALID: typeof AdminIdInvalid;
    ADMIN_RANK_EMOJI_NOT_ALLOWED: typeof AdminRankEmojiNotAllowed;
    ADMIN_RANK_INVALID: typeof AdminRankInvalid;
    ALBUM_PHOTOS_TOO_MANY: typeof AlbumPhotosTooMany;
    API_ID_INVALID: typeof ApiIdInvalid;
    API_ID_PUBLISHED_FLOOD: typeof ApiIdPublishedFlood;
    ARTICLE_TITLE_EMPTY: typeof ArticleTitleEmpty;
    AUDIO_CONTENT_URL_EMPTY: typeof AudioContentUrlEmpty;
    AUDIO_TITLE_EMPTY: typeof AudioTitleEmpty;
    AUTH_BYTES_INVALID: typeof AuthBytesInvalid;
    AUTH_KEY_DUPLICATED: typeof AuthKeyDuplicated;
    AUTH_KEY_INVALID: typeof AuthKeyInvalid;
    AUTH_KEY_PERM_EMPTY: typeof AuthKeyPermEmpty;
    AUTH_KEY_UNREGISTERED: typeof AuthKeyUnregistered;
    AUTH_RESTART: typeof AuthRestart;
    AUTH_TOKEN_ALREADY_ACCEPTED: typeof AuthTokenAlreadyAccepted;
    AUTH_TOKEN_EXCEPTION: typeof AuthTokenException;
    AUTH_TOKEN_EXPIRED: typeof AuthTokenExpired;
    AUTH_TOKEN_INVALID: typeof AuthTokenInvalid;
    AUTOARCHIVE_NOT_AVAILABLE: typeof AutoarchiveNotAvailable;
    BANK_CARD_NUMBER_INVALID: typeof BankCardNumberInvalid;
    BANNED_RIGHTS_INVALID: typeof BannedRightsInvalid;
    BASE_PORT_LOC_INVALID: typeof BasePortLocInvalid;
    BOTS_TOO_MUCH: typeof BotsTooMuch;
    BOT_CHANNELS_NA: typeof BotChannelsNa;
    BOT_COMMAND_DESCRIPTION_INVALID: typeof BotCommandDescriptionInvalid;
    BOT_COMMAND_INVALID: typeof BotCommandInvalid;
    BOT_DOMAIN_INVALID: typeof BotDomainInvalid;
    BOT_GAMES_DISABLED: typeof BotGamesDisabled;
    BOT_GROUPS_BLOCKED: typeof BotGroupsBlocked;
    BOT_INLINE_DISABLED: typeof BotInlineDisabled;
    BOT_INVALID: typeof BotInvalid;
    BOT_METHOD_INVALID: typeof BotMethodInvalid;
    BOT_MISSING: typeof BotMissing;
    BOT_ONESIDE_NOT_AVAIL: typeof BotOnesideNotAvail;
    BOT_PAYMENTS_DISABLED: typeof BotPaymentsDisabled;
    BOT_POLLS_DISABLED: typeof BotPollsDisabled;
    BOT_RESPONSE_TIMEOUT: typeof BotResponseTimeout;
    BOT_SCORE_NOT_MODIFIED: typeof BotScoreNotModified;
    BROADCAST_CALLS_DISABLED: typeof BroadcastCallsDisabled;
    BROADCAST_FORBIDDEN: typeof BroadcastForbidden;
    BROADCAST_ID_INVALID: typeof BroadcastIdInvalid;
    BROADCAST_PUBLIC_VOTERS_FORBIDDEN: typeof BroadcastPublicVotersForbidden;
    BROADCAST_REQUIRED: typeof BroadcastRequired;
    BUTTON_DATA_INVALID: typeof ButtonDataInvalid;
    BUTTON_TEXT_INVALID: typeof ButtonTextInvalid;
    BUTTON_TYPE_INVALID: typeof ButtonTypeInvalid;
    BUTTON_URL_INVALID: typeof ButtonUrlInvalid;
    BUTTON_USER_PRIVACY_RESTRICTED: typeof ButtonUserPrivacyRestricted;
    CALL_ALREADY_ACCEPTED: typeof CallAlreadyAccepted;
    CALL_ALREADY_DECLINED: typeof CallAlreadyDeclined;
    CALL_OCCUPY_FAILED: typeof CallOccupyFailed;
    CALL_PEER_INVALID: typeof CallPeerInvalid;
    CALL_PROTOCOL_FLAGS_INVALID: typeof CallProtocolFlagsInvalid;
    CDN_METHOD_INVALID: typeof CdnMethodInvalid;
    CDN_UPLOAD_TIMEOUT: typeof CdnUploadTimeout;
    CHANNELS_ADMIN_LOCATED_TOO_MUCH: typeof ChannelsAdminLocatedTooMuch;
    CHANNELS_ADMIN_PUBLIC_TOO_MUCH: typeof ChannelsAdminPublicTooMuch;
    CHANNELS_TOO_MUCH: typeof ChannelsTooMuch;
    CHANNEL_BANNED: typeof ChannelBanned;
    CHANNEL_FORUM_MISSING: typeof ChannelForumMissing;
    CHANNEL_ID_INVALID: typeof ChannelIdInvalid;
    CHANNEL_INVALID: typeof ChannelInvalid;
    CHANNEL_PARICIPANT_MISSING: typeof ChannelParicipantMissing;
    CHANNEL_PRIVATE: typeof ChannelPrivate;
    CHANNEL_PUBLIC_GROUP_NA: typeof ChannelPublicGroupNa;
    CHANNEL_TOO_BIG: typeof ChannelTooBig;
    CHANNEL_TOO_LARGE: typeof ChannelTooLarge;
    CHAT_ABOUT_NOT_MODIFIED: typeof ChatAboutNotModified;
    CHAT_ABOUT_TOO_LONG: typeof ChatAboutTooLong;
    CHAT_ADMIN_INVITE_REQUIRED: typeof ChatAdminInviteRequired;
    CHAT_ADMIN_REQUIRED: typeof ChatAdminRequired;
    CHAT_DISCUSSION_UNALLOWED: typeof ChatDiscussionUnallowed;
    CHAT_FORBIDDEN: typeof ChatForbidden;
    CHAT_FORWARDS_RESTRICTED: typeof ChatForwardsRestricted;
    CHAT_GET_FAILED: typeof ChatGetFailed;
    CHAT_GUEST_SEND_FORBIDDEN: typeof ChatGuestSendForbidden;
    CHAT_ID_EMPTY: typeof ChatIdEmpty;
    CHAT_ID_GENERATE_FAILED: typeof ChatIdGenerateFailed;
    CHAT_ID_INVALID: typeof ChatIdInvalid;
    CHAT_INVALID: typeof ChatInvalid;
    CHAT_INVITE_PERMANENT: typeof ChatInvitePermanent;
    CHAT_LINK_EXISTS: typeof ChatLinkExists;
    CHAT_NOT_MODIFIED: typeof ChatNotModified;
    CHAT_RESTRICTED: typeof ChatRestricted;
    CHAT_REVOKE_DATE_UNSUPPORTED: typeof ChatRevokeDateUnsupported;
    CHAT_SEND_GAME_FORBIDDEN: typeof ChatSendGameForbidden;
    CHAT_SEND_GIFS_FORBIDDEN: typeof ChatSendGifsForbidden;
    CHAT_SEND_INLINE_FORBIDDEN: typeof ChatSendInlineForbidden;
    CHAT_SEND_MEDIA_FORBIDDEN: typeof ChatSendMediaForbidden;
    CHAT_SEND_POLL_FORBIDDEN: typeof ChatSendPollForbidden;
    CHAT_SEND_STICKERS_FORBIDDEN: typeof ChatSendStickersForbidden;
    CHAT_TITLE_EMPTY: typeof ChatTitleEmpty;
    CHAT_TOO_BIG: typeof ChatTooBig;
    CHAT_WRITE_FORBIDDEN: typeof ChatWriteForbidden;
    CHP_CALL_FAIL: typeof ChpCallFail;
    CODE_EMPTY: typeof CodeEmpty;
    CODE_HASH_INVALID: typeof CodeHashInvalid;
    CODE_INVALID: typeof CodeInvalid;
    CONNECTION_API_ID_INVALID: typeof ConnectionApiIdInvalid;
    CONNECTION_APP_VERSION_EMPTY: typeof ConnectionAppVersionEmpty;
    CONNECTION_DEVICE_MODEL_EMPTY: typeof ConnectionDeviceModelEmpty;
    CONNECTION_LANG_PACK_INVALID: typeof ConnectionLangPackInvalid;
    CONNECTION_LAYER_INVALID: typeof ConnectionLayerInvalid;
    CONNECTION_NOT_INITED: typeof ConnectionNotInited;
    CONNECTION_SYSTEM_EMPTY: typeof ConnectionSystemEmpty;
    CONNECTION_SYSTEM_LANG_CODE_EMPTY: typeof ConnectionSystemLangCodeEmpty;
    CONTACT_ADD_MISSING: typeof ContactAddMissing;
    CONTACT_ID_INVALID: typeof ContactIdInvalid;
    CONTACT_NAME_EMPTY: typeof ContactNameEmpty;
    CONTACT_REQ_MISSING: typeof ContactReqMissing;
    CREATE_CALL_FAILED: typeof CreateCallFailed;
    CURRENCY_TOTAL_AMOUNT_INVALID: typeof CurrencyTotalAmountInvalid;
    DATA_INVALID: typeof DataInvalid;
    DATA_JSON_INVALID: typeof DataJsonInvalid;
    DATA_TOO_LONG: typeof DataTooLong;
    DATE_EMPTY: typeof DateEmpty;
    DC_ID_INVALID: typeof DcIdInvalid;
    DH_G_A_INVALID: typeof DhGAInvalid;
    DOCUMENT_INVALID: typeof DocumentInvalid;
    EDIT_BOT_INVITE_FORBIDDEN: typeof EditBotInviteForbidden;
    EMAIL_HASH_EXPIRED: typeof EmailHashExpired;
    EMAIL_INVALID: typeof EmailInvalid;
    EMAIL_UNCONFIRMED: typeof EmailUnconfirmed;
    EMAIL_VERIFY_EXPIRED: typeof EmailVerifyExpired;
    EMOJI_INVALID: typeof EmojiInvalid;
    EMOJI_NOT_MODIFIED: typeof EmojiNotModified;
    EMOTICON_EMPTY: typeof EmoticonEmpty;
    EMOTICON_INVALID: typeof EmoticonInvalid;
    EMOTICON_STICKERPACK_MISSING: typeof EmoticonStickerpackMissing;
    ENCRYPTED_MESSAGE_INVALID: typeof EncryptedMessageInvalid;
    ENCRYPTION_ALREADY_ACCEPTED: typeof EncryptionAlreadyAccepted;
    ENCRYPTION_ALREADY_DECLINED: typeof EncryptionAlreadyDeclined;
    ENCRYPTION_DECLINED: typeof EncryptionDeclined;
    ENCRYPTION_ID_INVALID: typeof EncryptionIdInvalid;
    ENCRYPTION_OCCUPY_FAILED: typeof EncryptionOccupyFailed;
    ENTITIES_TOO_LONG: typeof EntitiesTooLong;
    ENTITY_BOUNDS_INVALID: typeof EntityBoundsInvalid;
    ENTITY_MENTION_USER_INVALID: typeof EntityMentionUserInvalid;
    ERROR_TEXT_EMPTY: typeof ErrorTextEmpty;
    EXPIRE_DATE_INVALID: typeof ExpireDateInvalid;
    EXPIRE_FORBIDDEN: typeof ExpireForbidden;
    EXPORT_CARD_INVALID: typeof ExportCardInvalid;
    EXTERNAL_URL_INVALID: typeof ExternalUrlInvalid;
    FIELD_NAME_EMPTY: typeof FieldNameEmpty;
    FIELD_NAME_INVALID: typeof FieldNameInvalid;
    FILEREF_UPGRADE_NEEDED: typeof FilerefUpgradeNeeded;
    FILE_CONTENT_TYPE_INVALID: typeof FileContentTypeInvalid;
    FILE_EMTPY: typeof FileEmtpy;
    FILE_ID_INVALID: typeof FileIdInvalid;
    FILE_PARTS_INVALID: typeof FilePartsInvalid;
    FILE_PART_0_MISSING: typeof FilePart_0Missing;
    FILE_PART_EMPTY: typeof FilePartEmpty;
    FILE_PART_INVALID: typeof FilePartInvalid;
    FILE_PART_LENGTH_INVALID: typeof FilePartLengthInvalid;
    FILE_PART_SIZE_CHANGED: typeof FilePartSizeChanged;
    FILE_PART_SIZE_INVALID: typeof FilePartSizeInvalid;
    FILE_PART_TOO_BIG: typeof FilePartTooBig;
    FILE_PART_X_MISSING: typeof FilePartXMissing;
    FILE_REFERENCE_EMPTY: typeof FileReferenceEmpty;
    FILE_REFERENCE_EXPIRED: typeof FileReferenceExpired;
    FILE_REFERENCE_INVALID: typeof FileReferenceInvalid;
    FILE_TITLE_EMPTY: typeof FileTitleEmpty;
    FILTER_ID_INVALID: typeof FilterIdInvalid;
    FILTER_INCLUDE_EMPTY: typeof FilterIncludeEmpty;
    FILTER_NOT_SUPPORTED: typeof FilterNotSupported;
    FILTER_TITLE_EMPTY: typeof FilterTitleEmpty;
    FIRSTNAME_INVALID: typeof FirstnameInvalid;
    FOLDER_ID_EMPTY: typeof FolderIdEmpty;
    FOLDER_ID_INVALID: typeof FolderIdInvalid;
    FRESH_CHANGE_ADMINS_FORBIDDEN: typeof FreshChangeAdminsForbidden;
    FRESH_CHANGE_PHONE_FORBIDDEN: typeof FreshChangePhoneForbidden;
    FRESH_RESET_AUTHORISATION_FORBIDDEN: typeof FreshResetAuthorisationForbidden;
    FROM_MESSAGE_BOT_DISABLED: typeof FromMessageBotDisabled;
    FROM_PEER_INVALID: typeof FromPeerInvalid;
    GAME_BOT_INVALID: typeof GameBotInvalid;
    GEO_POINT_INVALID: typeof GeoPointInvalid;
    GIF_CONTENT_TYPE_INVALID: typeof GifContentTypeInvalid;
    GIF_ID_INVALID: typeof GifIdInvalid;
    GRAPH_EXPIRED_RELOAD: typeof GraphExpiredReload;
    GRAPH_INVALID_RELOAD: typeof GraphInvalidReload;
    GRAPH_OUTDATED_RELOAD: typeof GraphOutdatedReload;
    GROUPCALL_ADD_PARTICIPANTS_FAILED: typeof GroupcallAddParticipantsFailed;
    GROUPCALL_ALREADY_DISCARDED: typeof GroupcallAlreadyDiscarded;
    GROUPCALL_ALREADY_STARTED: typeof GroupcallAlreadyStarted;
    GROUPCALL_FORBIDDEN: typeof GroupcallForbidden;
    GROUPCALL_INVALID: typeof GroupcallInvalid;
    GROUPCALL_JOIN_MISSING: typeof GroupcallJoinMissing;
    GROUPCALL_NOT_MODIFIED: typeof GroupcallNotModified;
    GROUPCALL_SSRC_DUPLICATE_MUCH: typeof GroupcallSsrcDuplicateMuch;
    GROUPED_MEDIA_INVALID: typeof GroupedMediaInvalid;
    GROUP_CALL_INVALID: typeof GroupCallInvalid;
    HASH_INVALID: typeof HashInvalid;
    HIDE_REQUESTER_MISSING: typeof HideRequesterMissing;
    HISTORY_GET_FAILED: typeof HistoryGetFailed;
    IMAGE_PROCESS_FAILED: typeof ImageProcessFailed;
    IMPORT_FILE_INVALID: typeof ImportFileInvalid;
    IMPORT_FORMAT_UNRECOGNIZED: typeof ImportFormatUnrecognized;
    IMPORT_ID_INVALID: typeof ImportIdInvalid;
    INLINE_BOT_REQUIRED: typeof InlineBotRequired;
    INLINE_RESULT_EXPIRED: typeof InlineResultExpired;
    INPUT_CONSTRUCTOR_INVALID: typeof InputConstructorInvalid;
    INPUT_FETCH_ERROR: typeof InputFetchError;
    INPUT_FETCH_FAIL: typeof InputFetchFail;
    INPUT_FILTER_INVALID: typeof InputFilterInvalid;
    INPUT_LAYER_INVALID: typeof InputLayerInvalid;
    INPUT_METHOD_INVALID: typeof InputMethodInvalid;
    INPUT_REQUEST_TOO_LONG: typeof InputRequestTooLong;
    INPUT_TEXT_EMPTY: typeof InputTextEmpty;
    INPUT_USER_DEACTIVATED: typeof InputUserDeactivated;
    INTERDC_X_CALL_ERROR: typeof InterdcXCallError;
    INTERDC_X_CALL_RICH_ERROR: typeof InterdcXCallRichError;
    INVITE_FORBIDDEN_WITH_JOINAS: typeof InviteForbiddenWithJoinas;
    INVITE_HASH_EMPTY: typeof InviteHashEmpty;
    INVITE_HASH_EXPIRED: typeof InviteHashExpired;
    INVITE_HASH_INVALID: typeof InviteHashInvalid;
    INVITE_REQUEST_SENT: typeof InviteRequestSent;
    INVITE_REVOKED_MISSING: typeof InviteRevokedMissing;
    INVOICE_PAYLOAD_INVALID: typeof InvoicePayloadInvalid;
    JOIN_AS_PEER_INVALID: typeof JoinAsPeerInvalid;
    LANG_CODE_INVALID: typeof LangCodeInvalid;
    LANG_CODE_NOT_SUPPORTED: typeof LangCodeNotSupported;
    LANG_PACK_INVALID: typeof LangPackInvalid;
    LASTNAME_INVALID: typeof LastnameInvalid;
    LIMIT_INVALID: typeof LimitInvalid;
    LINK_NOT_MODIFIED: typeof LinkNotModified;
    LOCATION_INVALID: typeof LocationInvalid;
    MAX_DATE_INVALID: typeof MaxDateInvalid;
    MAX_ID_INVALID: typeof MaxIdInvalid;
    MAX_QTS_INVALID: typeof MaxQtsInvalid;
    MD5_CHECKSUM_INVALID: typeof Md5ChecksumInvalid;
    MEDIA_CAPTION_TOO_LONG: typeof MediaCaptionTooLong;
    MEDIA_EMPTY: typeof MediaEmpty;
    MEDIA_GROUPED_INVALID: typeof MediaGroupedInvalid;
    MEDIA_INVALID: typeof MediaInvalid;
    MEDIA_NEW_INVALID: typeof MediaNewInvalid;
    MEDIA_PREV_INVALID: typeof MediaPrevInvalid;
    MEDIA_TTL_INVALID: typeof MediaTtlInvalid;
    MEGAGROUP_ID_INVALID: typeof MegagroupIdInvalid;
    MEGAGROUP_PREHISTORY_HIDDEN: typeof MegagroupPrehistoryHidden;
    MEGAGROUP_REQUIRED: typeof MegagroupRequired;
    MEMBER_NO_LOCATION: typeof MemberNoLocation;
    MEMBER_OCCUPY_PRIMARY_LOC_FAILED: typeof MemberOccupyPrimaryLocFailed;
    MESSAGE_AUTHOR_REQUIRED: typeof MessageAuthorRequired;
    MESSAGE_DELETE_FORBIDDEN: typeof MessageDeleteForbidden;
    MESSAGE_EDIT_TIME_EXPIRED: typeof MessageEditTimeExpired;
    MESSAGE_EMPTY: typeof MessageEmpty;
    MESSAGE_IDS_EMPTY: typeof MessageIdsEmpty;
    MESSAGE_ID_INVALID: typeof MessageIdInvalid;
    MESSAGE_NOT_MODIFIED: typeof MessageNotModified;
    MESSAGE_POLL_CLOSED: typeof MessagePollClosed;
    MESSAGE_TOO_LONG: typeof MessageTooLong;
    METHOD_INVALID: typeof MethodInvalid;
    MIN_DATE_INVALID: typeof MinDateInvalid;
    MSGID_DECREASE_RETRY: typeof MsgidDecreaseRetry;
    MSG_ID_INVALID: typeof MsgIdInvalid;
    MSG_TOO_OLD: typeof MsgTooOld;
    MSG_WAIT_FAILED: typeof MsgWaitFailed;
    MT_SEND_QUEUE_TOO_LONG: typeof MtSendQueueTooLong;
    MULTI_MEDIA_TOO_LONG: typeof MultiMediaTooLong;
    NEED_CHAT_INVALID: typeof NeedChatInvalid;
    NEED_MEMBER_INVALID: typeof NeedMemberInvalid;
    NEW_SALT_INVALID: typeof NewSaltInvalid;
    NEW_SETTINGS_EMPTY: typeof NewSettingsEmpty;
    NEW_SETTINGS_INVALID: typeof NewSettingsInvalid;
    NEXT_OFFSET_INVALID: typeof NextOffsetInvalid;
    NOT_ALLOWED: typeof NotAllowed;
    OFFSET_INVALID: typeof OffsetInvalid;
    OFFSET_PEER_ID_INVALID: typeof OffsetPeerIdInvalid;
    OPTIONS_TOO_MUCH: typeof OptionsTooMuch;
    OPTION_INVALID: typeof OptionInvalid;
    PACK_SHORT_NAME_INVALID: typeof PackShortNameInvalid;
    PACK_SHORT_NAME_OCCUPIED: typeof PackShortNameOccupied;
    PACK_TITLE_INVALID: typeof PackTitleInvalid;
    PARTICIPANTS_TOO_FEW: typeof ParticipantsTooFew;
    PARTICIPANT_CALL_FAILED: typeof ParticipantCallFailed;
    PARTICIPANT_ID_INVALID: typeof ParticipantIdInvalid;
    PARTICIPANT_JOIN_MISSING: typeof ParticipantJoinMissing;
    PARTICIPANT_VERSION_OUTDATED: typeof ParticipantVersionOutdated;
    PASSWORD_EMPTY: typeof PasswordEmpty;
    PASSWORD_HASH_INVALID: typeof PasswordHashInvalid;
    PASSWORD_MISSING: typeof PasswordMissing;
    PASSWORD_RECOVERY_EXPIRED: typeof PasswordRecoveryExpired;
    PASSWORD_RECOVERY_NA: typeof PasswordRecoveryNa;
    PASSWORD_REQUIRED: typeof PasswordRequired;
    PAYMENT_PROVIDER_INVALID: typeof PaymentProviderInvalid;
    PEER_FLOOD: typeof PeerFlood;
    PEER_HISTORY_EMPTY: typeof PeerHistoryEmpty;
    PEER_ID_INVALID: typeof PeerIdInvalid;
    PEER_ID_NOT_SUPPORTED: typeof PeerIdNotSupported;
    PERSISTENT_TIMESTAMP_EMPTY: typeof PersistentTimestampEmpty;
    PERSISTENT_TIMESTAMP_INVALID: typeof PersistentTimestampInvalid;
    PERSISTENT_TIMESTAMP_OUTDATED: typeof PersistentTimestampOutdated;
    PHONE_CODE_EMPTY: typeof PhoneCodeEmpty;
    PHONE_CODE_EXPIRED: typeof PhoneCodeExpired;
    PHONE_CODE_HASH_EMPTY: typeof PhoneCodeHashEmpty;
    PHONE_CODE_INVALID: typeof PhoneCodeInvalid;
    PHONE_HASH_EXPIRED: typeof PhoneHashExpired;
    PHONE_NOT_OCCUPIED: typeof PhoneNotOccupied;
    PHONE_NUMBER_APP_SIGNUP_FORBIDDEN: typeof PhoneNumberAppSignupForbidden;
    PHONE_NUMBER_BANNED: typeof PhoneNumberBanned;
    PHONE_NUMBER_FLOOD: typeof PhoneNumberFlood;
    PHONE_NUMBER_INVALID: typeof PhoneNumberInvalid;
    PHONE_NUMBER_OCCUPIED: typeof PhoneNumberOccupied;
    PHONE_NUMBER_UNOCCUPIED: typeof PhoneNumberUnoccupied;
    PHONE_PASSWORD_FLOOD: typeof PhonePasswordFlood;
    PHONE_PASSWORD_PROTECTED: typeof PhonePasswordProtected;
    PHOTO_CONTENT_TYPE_INVALID: typeof PhotoContentTypeInvalid;
    PHOTO_CONTENT_URL_EMPTY: typeof PhotoContentUrlEmpty;
    PHOTO_CROP_FILE_MISSING: typeof PhotoCropFileMissing;
    PHOTO_CROP_SIZE_SMALL: typeof PhotoCropSizeSmall;
    PHOTO_EXT_INVALID: typeof PhotoExtInvalid;
    PHOTO_FILE_MISSING: typeof PhotoFileMissing;
    PHOTO_ID_INVALID: typeof PhotoIdInvalid;
    PHOTO_INVALID: typeof PhotoInvalid;
    PHOTO_INVALID_DIMENSIONS: typeof PhotoInvalidDimensions;
    PHOTO_SAVE_FILE_INVALID: typeof PhotoSaveFileInvalid;
    PHOTO_THUMB_URL_EMPTY: typeof PhotoThumbUrlEmpty;
    PINNED_DIALOGS_TOO_MUCH: typeof PinnedDialogsTooMuch;
    PIN_RESTRICTED: typeof PinRestricted;
    POLL_ANSWERS_INVALID: typeof PollAnswersInvalid;
    POLL_ANSWER_INVALID: typeof PollAnswerInvalid;
    POLL_OPTION_DUPLICATE: typeof PollOptionDuplicate;
    POLL_OPTION_INVALID: typeof PollOptionInvalid;
    POLL_QUESTION_INVALID: typeof PollQuestionInvalid;
    POLL_UNSUPPORTED: typeof PollUnsupported;
    POLL_VOTE_REQUIRED: typeof PollVoteRequired;
    POSTPONED_TIMEOUT: typeof PostponedTimeout;
    PREMIUM_ACCOUNT_REQUIRED: typeof PremiumAccountRequired;
    PREMIUM_CURRENTLY_UNAVAILABLE: typeof PremiumCurrentlyUnavailable;
    PREVIOUS_CHAT_IMPORT_ACTIVE_WAIT_XMIN: typeof PreviousChatImportActiveWaitXmin;
    PRIVACY_KEY_INVALID: typeof PrivacyKeyInvalid;
    PRIVACY_TOO_LONG: typeof PrivacyTooLong;
    PRIVACY_VALUE_INVALID: typeof PrivacyValueInvalid;
    PTS_CHANGE_EMPTY: typeof PtsChangeEmpty;
    PUBLIC_CHANNEL_MISSING: typeof PublicChannelMissing;
    PUBLIC_KEY_REQUIRED: typeof PublicKeyRequired;
    QUERY_ID_EMPTY: typeof QueryIdEmpty;
    QUERY_ID_INVALID: typeof QueryIdInvalid;
    QUERY_TOO_SHORT: typeof QueryTooShort;
    QUIZ_ANSWER_MISSING: typeof QuizAnswerMissing;
    QUIZ_CORRECT_ANSWERS_EMPTY: typeof QuizCorrectAnswersEmpty;
    QUIZ_CORRECT_ANSWERS_TOO_MUCH: typeof QuizCorrectAnswersTooMuch;
    QUIZ_CORRECT_ANSWER_INVALID: typeof QuizCorrectAnswerInvalid;
    QUIZ_MULTIPLE_INVALID: typeof QuizMultipleInvalid;
    RANDOM_ID_DUPLICATE: typeof RandomIdDuplicate;
    RANDOM_ID_EMPTY: typeof RandomIdEmpty;
    RANDOM_ID_INVALID: typeof RandomIdInvalid;
    RANDOM_LENGTH_INVALID: typeof RandomLengthInvalid;
    RANGES_INVALID: typeof RangesInvalid;
    REACTIONS_TOO_MANY: typeof ReactionsTooMany;
    REACTION_EMPTY: typeof ReactionEmpty;
    REACTION_INVALID: typeof ReactionInvalid;
    REFLECTOR_NOT_AVAILABLE: typeof ReflectorNotAvailable;
    REG_ID_GENERATE_FAILED: typeof RegIdGenerateFailed;
    REPLY_MARKUP_BUY_EMPTY: typeof ReplyMarkupBuyEmpty;
    REPLY_MARKUP_GAME_EMPTY: typeof ReplyMarkupGameEmpty;
    REPLY_MARKUP_INVALID: typeof ReplyMarkupInvalid;
    REPLY_MARKUP_TOO_LONG: typeof ReplyMarkupTooLong;
    RESET_REQUEST_MISSING: typeof ResetRequestMissing;
    RESULTS_TOO_MUCH: typeof ResultsTooMuch;
    RESULT_ID_DUPLICATE: typeof ResultIdDuplicate;
    RESULT_ID_EMPTY: typeof ResultIdEmpty;
    RESULT_ID_INVALID: typeof ResultIdInvalid;
    RESULT_TYPE_INVALID: typeof ResultTypeInvalid;
    REVOTE_NOT_ALLOWED: typeof RevoteNotAllowed;
    RIGHTS_NOT_MODIFIED: typeof RightsNotModified;
    RIGHT_FORBIDDEN: typeof RightForbidden;
    RPC_CALL_FAIL: typeof RpcCallFail;
    RPC_MCGET_FAIL: typeof RpcMcgetFail;
    RSA_DECRYPT_FAILED: typeof RsaDecryptFailed;
    SCHEDULE_BOT_NOT_ALLOWED: typeof ScheduleBotNotAllowed;
    SCHEDULE_DATE_INVALID: typeof ScheduleDateInvalid;
    SCHEDULE_DATE_TOO_LATE: typeof ScheduleDateTooLate;
    SCHEDULE_STATUS_PRIVATE: typeof ScheduleStatusPrivate;
    SCHEDULE_TOO_MUCH: typeof ScheduleTooMuch;
    SCORE_INVALID: typeof ScoreInvalid;
    SEARCH_QUERY_EMPTY: typeof SearchQueryEmpty;
    SEARCH_WITH_LINK_NOT_SUPPORTED: typeof SearchWithLinkNotSupported;
    SECONDS_INVALID: typeof SecondsInvalid;
    SEND_AS_PEER_INVALID: typeof SendAsPeerInvalid;
    SEND_CODE_UNAVAILABLE: typeof SendCodeUnavailable;
    SEND_MESSAGE_MEDIA_INVALID: typeof SendMessageMediaInvalid;
    SEND_MESSAGE_TYPE_INVALID: typeof SendMessageTypeInvalid;
    SENSITIVE_CHANGE_FORBIDDEN: typeof SensitiveChangeForbidden;
    SESSION_EXPIRED: typeof SessionExpired;
    SESSION_PASSWORD_NEEDED: typeof SessionPasswordNeeded;
    SESSION_REVOKED: typeof SessionRevoked;
    SETTINGS_INVALID: typeof SettingsInvalid;
    SHA256_HASH_INVALID: typeof Sha256HashInvalid;
    SHORTNAME_OCCUPY_FAILED: typeof ShortnameOccupyFailed;
    SHORT_NAME_INVALID: typeof ShortNameInvalid;
    SHORT_NAME_OCCUPIED: typeof ShortNameOccupied;
    SIGN_IN_FAILED: typeof SignInFailed;
    SLOWMODE_MULTI_MSGS_DISABLED: typeof SlowmodeMultiMsgsDisabled;
    SMS_CODE_CREATE_FAILED: typeof SmsCodeCreateFailed;
    SRP_ID_INVALID: typeof SrpIdInvalid;
    SRP_PASSWORD_CHANGED: typeof SrpPasswordChanged;
    START_PARAM_EMPTY: typeof StartParamEmpty;
    START_PARAM_INVALID: typeof StartParamInvalid;
    START_PARAM_TOO_LONG: typeof StartParamTooLong;
    STICKERPACK_STICKERS_TOO_MUCH: typeof StickerpackStickersTooMuch;
    STICKERSET_INVALID: typeof StickersetInvalid;
    STICKERSET_OWNER_ANONYMOUS: typeof StickersetOwnerAnonymous;
    STICKERS_EMPTY: typeof StickersEmpty;
    STICKERS_TOO_MUCH: typeof StickersTooMuch;
    STICKER_DOCUMENT_INVALID: typeof StickerDocumentInvalid;
    STICKER_EMOJI_INVALID: typeof StickerEmojiInvalid;
    STICKER_FILE_INVALID: typeof StickerFileInvalid;
    STICKER_GIF_DIMENSIONS: typeof StickerGifDimensions;
    STICKER_ID_INVALID: typeof StickerIdInvalid;
    STICKER_INVALID: typeof StickerInvalid;
    STICKER_MIME_INVALID: typeof StickerMimeInvalid;
    STICKER_PNG_DIMENSIONS: typeof StickerPngDimensions;
    STICKER_PNG_NOPNG: typeof StickerPngNopng;
    STICKER_TGS_NODOC: typeof StickerTgsNodoc;
    STICKER_TGS_NOTGS: typeof StickerTgsNotgs;
    STICKER_THUMB_PNG_NOPNG: typeof StickerThumbPngNopng;
    STICKER_THUMB_TGS_NOTGS: typeof StickerThumbTgsNotgs;
    STICKER_VIDEO_BIG: typeof StickerVideoBig;
    STICKER_VIDEO_NODOC: typeof StickerVideoNodoc;
    STICKER_VIDEO_NOWEBM: typeof StickerVideoNowebm;
    STORAGE_CHECK_FAILED: typeof StorageCheckFailed;
    STORE_INVALID_SCALAR_TYPE: typeof StoreInvalidScalarType;
    SWITCH_PM_TEXT_EMPTY: typeof SwitchPmTextEmpty;
    TAKEOUT_INVALID: typeof TakeoutInvalid;
    TAKEOUT_REQUIRED: typeof TakeoutRequired;
    TEMP_AUTH_KEY_ALREADY_BOUND: typeof TempAuthKeyAlreadyBound;
    TEMP_AUTH_KEY_EMPTY: typeof TempAuthKeyEmpty;
    THEME_FILE_INVALID: typeof ThemeFileInvalid;
    THEME_FORMAT_INVALID: typeof ThemeFormatInvalid;
    THEME_INVALID: typeof ThemeInvalid;
    THEME_MIME_INVALID: typeof ThemeMimeInvalid;
    THEME_TITLE_INVALID: typeof ThemeTitleInvalid;
    TIMEOUT: typeof Timeout;
    TITLE_INVALID: typeof TitleInvalid;
    TMP_PASSWORD_DISABLED: typeof TmpPasswordDisabled;
    TMP_PASSWORD_INVALID: typeof TmpPasswordInvalid;
    TOKEN_INVALID: typeof TokenInvalid;
    TOPIC_DELETED: typeof TopicDeleted;
    TO_LANG_INVALID: typeof ToLangInvalid;
    TTL_DAYS_INVALID: typeof TtlDaysInvalid;
    TTL_MEDIA_INVALID: typeof TtlMediaInvalid;
    TTL_PERIOD_INVALID: typeof TtlPeriodInvalid;
    TYPES_EMPTY: typeof TypesEmpty;
    TYPE_CONSTRUCTOR_INVALID: typeof TypeConstructorInvalid;
    Timedout: typeof Timedout;
    Timeout: typeof Timeout;
    UNKNOWN_ERROR: typeof UnknownError;
    UNKNOWN_METHOD: typeof UnknownMethod;
    UNTIL_DATE_INVALID: typeof UntilDateInvalid;
    UPDATE_APP_TO_LOGIN: typeof UpdateAppToLogin;
    URL_INVALID: typeof UrlInvalid;
    USAGE_LIMIT_INVALID: typeof UsageLimitInvalid;
    USERNAME_INVALID: typeof UsernameInvalid;
    USERNAME_NOT_MODIFIED: typeof UsernameNotModified;
    USERNAME_NOT_OCCUPIED: typeof UsernameNotOccupied;
    USERNAME_OCCUPIED: typeof UsernameOccupied;
    USERNAME_PURCHASE_AVAILABLE: typeof UsernamePurchaseAvailable;
    USERPIC_PRIVACY_REQUIRED: typeof UserpicPrivacyRequired;
    USERPIC_UPLOAD_REQUIRED: typeof UserpicUploadRequired;
    USERS_TOO_FEW: typeof UsersTooFew;
    USERS_TOO_MUCH: typeof UsersTooMuch;
    USER_ADMIN_INVALID: typeof UserAdminInvalid;
    USER_ALREADY_INVITED: typeof UserAlreadyInvited;
    USER_ALREADY_PARTICIPANT: typeof UserAlreadyParticipant;
    USER_BANNED_IN_CHANNEL: typeof UserBannedInChannel;
    USER_BLOCKED: typeof UserBlocked;
    USER_BOT: typeof UserBot;
    USER_BOT_INVALID: typeof UserBotInvalid;
    USER_BOT_REQUIRED: typeof UserBotRequired;
    USER_CHANNELS_TOO_MUCH: typeof UserChannelsTooMuch;
    USER_CREATOR: typeof UserCreator;
    USER_DEACTIVATED: typeof UserDeactivated;
    USER_DEACTIVATED_BAN: typeof UserDeactivatedBan;
    USER_DELETED: typeof UserDeleted;
    USER_ID_INVALID: typeof UserIdInvalid;
    USER_INVALID: typeof UserInvalid;
    USER_IS_BLOCKED: typeof UserIsBlocked;
    USER_IS_BOT: typeof UserIsBot;
    USER_KICKED: typeof UserKicked;
    USER_NOT_MUTUAL_CONTACT: typeof UserNotMutualContact;
    USER_NOT_PARTICIPANT: typeof UserNotParticipant;
    USER_PRIVACY_RESTRICTED: typeof UserPrivacyRestricted;
    USER_RESTRICTED: typeof UserRestricted;
    USER_VOLUME_INVALID: typeof UserVolumeInvalid;
    VIDEO_CONTENT_TYPE_INVALID: typeof VideoContentTypeInvalid;
    VIDEO_FILE_INVALID: typeof VideoFileInvalid;
    VIDEO_TITLE_EMPTY: typeof VideoTitleEmpty;
    VOICE_MESSAGES_FORBIDDEN: typeof VoiceMessagesForbidden;
    WALLPAPER_FILE_INVALID: typeof WallpaperFileInvalid;
    WALLPAPER_INVALID: typeof WallpaperInvalid;
    WALLPAPER_MIME_INVALID: typeof WallpaperMimeInvalid;
    WC_CONVERT_URL_INVALID: typeof WcConvertUrlInvalid;
    WEBDOCUMENT_INVALID: typeof WebdocumentInvalid;
    WEBDOCUMENT_MIME_INVALID: typeof WebdocumentMimeInvalid;
    WEBDOCUMENT_SIZE_TOO_BIG: typeof WebdocumentSizeTooBig;
    WEBDOCUMENT_URL_INVALID: typeof WebdocumentUrlInvalid;
    WEBPAGE_CURL_FAILED: typeof WebpageCurlFailed;
    WEBPAGE_MEDIA_EMPTY: typeof WebpageMediaEmpty;
    WEBPUSH_AUTH_INVALID: typeof WebpushAuthInvalid;
    WEBPUSH_KEY_INVALID: typeof WebpushKeyInvalid;
    WEBPUSH_TOKEN_INVALID: typeof WebpushTokenInvalid;
    WORKER_BUSY_TOO_LONG_RETRY: typeof WorkerBusyTooLongRetry;
    YOU_BLOCKED_USER: typeof YouBlockedUser;
};
