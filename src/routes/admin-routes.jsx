import AdvertiserLayout from "../layout/Advertiser-layout/AdvertiserLayout";
import AffiliateLayout from "../layout/Affiliate-layout/AffiliateLayout";
import OffersLayout from "../layout/Offers-layout/OffersLayout";
import SettingLayout from "../layout/Setting-layout/SettingLayout";
import MainLayout from "../layout/layout/MainLayout";
import AccountUsers from "../page/Advertiser/Account-Users/AccountUsers";
import AccountInformation from "../page/Advertiser/Account-information/AccountInformation";
import AccountPermission from "../page/Advertiser/Account-permission/AccountPermission";
import CreateAdvertiser from "../page/Advertiser/Manage-advertiser/CreateAdvertiser";
import ManageAdvertiser from "../page/Advertiser/Manage-advertiser/ManageAdvertiser";
import NotificationSetting from "../page/Advertiser/Notification-setting/NotificationSetting";
import UserAccountDetails from "../page/Advertiser/User-account-details/UserAccountDetails";
import AddCallback from "../page/Affiliates/Add-callback/AddCallback";
import AffiAccountUsers from "../page/Affiliates/Affi-account-users/AffiAccountUsers";
import AddCredits from "../page/Affiliates/Affialite-credit/AddCredits";
import AffiliateCredit from "../page/Affiliates/Affialite-credit/AffiliateCredit";
import AffiliateAccountDetails from "../page/Affiliates/Affiliate-account/AffiliateAccountDetails";
import AffiliateBilling from "../page/Affiliates/Affiliate-billing/AffiliateBilling";
import AffiliateDelete from "../page/Affiliates/Affiliate-delete/AffiliateDelete";
import AffiliateEdit from "../page/Affiliates/Affiliate-edit/AffiliateEdit";
import AffiliateInvoice from "../page/Affiliates/Affiliate-invoice/AffiliateInvoice";
import AffiliatePayoutTiers from "../page/Affiliates/Affiliate-payout-tiers/AffiliatePayoutTiers";
import AffiliatePermission from "../page/Affiliates/Affiliate-permission/AffiliatePermission";
import AddNewDocument from "../page/Affiliates/Affiliates-announcements/AddNewDocument";
import AffiliatesAnnouncements from "../page/Affiliates/Affiliates-announcements/AffiliatesAnnouncements";
import BlockAdvertiser from "../page/Affiliates/Block-advertiser/BlockAdvertiser";
import BlockSubids from "../page/Affiliates/Block-subids/BlockSubids";
import CallbackManager from "../page/Affiliates/Callback-manager/CallbackManager";
import CreateInvoice from "../page/Affiliates/Create-invoice/CreateInvoice";
import CreatePayoutTier from "../page/Affiliates/Create-payout-tier/CreatePayoutTier";
import CreateAffilliates from "../page/Affiliates/CreateAffiliates/CreateAffilliates";
import ManageAffiliates from "../page/Affiliates/Manage-affilaites/ManageAffiliates";
import OfferAccess from "../page/Affiliates/Offer-access/OfferAccess";
import OfferPayout from "../page/Affiliates/Offer-payout/OfferPayout";
import PendingAffiliates from "../page/Affiliates/PendingAffiliates/PendingAffiliates";
import PostbackPixels from "../page/Affiliates/Postback-pixels/PostbackPixels";
import AllComponents from "../page/All-Components/AllComponents";
import Home from "../page/Home/Home";
import AutomatedMailAlerts from "../page/MarketingTools/Automated-mail-alerts/AutomatedMailAlerts";
import EmailCustomServerSettings from "../page/MarketingTools/Email-custom-server-settings/EmailCustomServerSettings";
import EmailServerSettings from "../page/MarketingTools/Email-server-settings/EmailServerSettings";
import MarketingTools from "../page/MarketingTools/Marketing-tools/MarketingTools";
import CreativeManager from "../page/Offer/CreativeManager/CreativeManager";
import ImportFile from "../page/Offer/ImportFile/ImportFile";
import LinkChecker from "../page/Offer/LinkChecker/LinkChecker";
import OfferCategories from "../page/Offer/OfferCategories/OfferCategories";
import OfferSyncApi from "../page/Offer/OfferSyncApi/OfferSyncApi";
import OffersDetails from "../page/Offer/Offers-details/OffersDetails";
import SmartOfferGroups from "../page/Offer/SmartOfferGroups/SmartOfferGroups";
import TargetingRoules from "../page/Offer/Targeting-roules/TargetingRoules";
import TrackingCodes from "../page/Offer/Tracking-codes/TrackingCodes";
import CreateOffer from "../page/Offer/create-offer/CreateOffer";
import ManageOffers from "../page/Offer/manageOffers/ManageOffers";
import AdvertiserReport from "../page/Reports/AdvertiserReport/AdvertiserReport";
import AffiliateManagerReport from "../page/Reports/Affiliate-manager-report/AffiliateManagerReport";
import AffiliateReport from "../page/Reports/AffiliateReport/AffiliateReport";
import ConversionReport from "../page/Reports/Conversion-report/ConversionReport";
import ConvertionStatsReports from "../page/Reports/Convertion-stats-reports/ConvertionStatsReports";
import DailyReport from "../page/Reports/DailyReport/DailyReport";
import HourlyReport from "../page/Reports/HourlyReport/HourlyReport";
import ManageSavedReport from "../page/Reports/Manage-saved-report/ManageSavedReport";
import OfferReport from "../page/Reports/OfferReport/OfferReport";
import SavedReport from "../page/Reports/Saved-report/SavedReport";
import AccountInformatins from "../page/Settings/Account-information/AccountInformatins";
import AccountNotification from "../page/Settings/Account-notification/AccountNotification";
import AppSetting from "../page/Settings/App-setting/AppSetting";
import Fraudscore from "../page/Settings/Integration/Fraudscore";
import JsCodeIntegration from "../page/Settings/Integration/JsCodeIntegration";
import Permission from "../page/Settings/Permission/Permission";
import CreateQuestionFirst from "../page/Settings/Question/CreateQuestionFirst";
import CreateEmployee from "../page/Settings/Setting/CreateEmployee";
import Setting from "../page/Settings/Setting/Setting";

export const adminRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/all-components",
        element: <AllComponents />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/admin/manager-offer",
        element: <ManageOffers />,
      },
      {
        path: "/admin/create-offer",
        element: <CreateOffer />,
      },
      {
        path: "/admin/import-file",
        element: <ImportFile />,
      },
      {
        path: "/admin/creative-manager",
        element: <CreativeManager />,
      },
      {
        path: "/admin/offer-categories",
        element: <OfferCategories />,
      },
      {
        path: "/admn/import-file/import-with-sync-api",
        element: <OfferSyncApi />,
      },
      {
        path: "/admin/smart-group",
        element: <SmartOfferGroups />,
      },
      {
        path: "/admin/link-checker",
        element: <LinkChecker />,
      },
      {
        path: "/admin/daily-report",
        element: <DailyReport />,
      },
      {
        path: "/admin/hourly-report",
        element: <HourlyReport />,
      },
      {
        path: "/admin/affiliate-report",
        element: <AffiliateReport />,
      },
      {
        path: "/admin/advertiser-report",
        element: <AdvertiserReport />,
      },
      {
        path: "/admin/offer-report",
        element: <OfferReport />,
      },
      {
        path: "/admin/conversions-report",
        element: <ConversionReport />,
      },
      {
        path: "/admin/conversion-stats-report",
        element: <ConvertionStatsReports />,
      },
      {
        path: "/admin/saved-report",
        element: <SavedReport />,
      },
      {
        path: "/admin/manage-saved-report",
        element: <ManageSavedReport />,
      },
      {
        path: "/admin/team/affiliate-manager-report",
        element: <AffiliateManagerReport />,
      },
      {
        path: "/admin/manage-affiliate",
        element: <ManageAffiliates />,
      },
      {
        path: "/admin/create-affiliate",
        element: <CreateAffilliates />,
      },
      {
        path: "/admin/billing-manager",
        element: <AffiliateBilling />,
      },
      {
        path: "/admin/invoice",
        element: <AffiliateInvoice />,
      },
      {
        path: "/admin/credit",
        element: <AffiliateCredit />,
      },
      {
        path: "/admin/affiliate-announcements",
        element: <AffiliatesAnnouncements />,
      },
      {
        path: "/admin/payout-tiers",
        element: <AffiliatePayoutTiers />,
      },
      {
        path: "/admin/manager-advertisers",
        element: <ManageAdvertiser />,
      },
      {
        path: "/admin/create-advertisers",
        element: <CreateAdvertiser />,
      },
      {
        path: "/admin/mass-mailer",
        element: <MarketingTools />,
      },
      {
        path: "/admin/mail-alert",
        element: <AutomatedMailAlerts />,
      },
      {
        path: "/admin/manage-team",
        element: <Setting />,
      },
      {
        path: "/admin/access-system-preference",
        element: <AppSetting />,
      },
      {
        path: "/admin/create-affiliates",
        element: <CreateAffilliates />,
      },
      {
        path: "/admin/pending-affiliates",
        element: <PendingAffiliates />,
      },
      {
        path: "/admin/create-invoice",
        element: <CreateInvoice />,
      },
      {
        path: "/admin/add-credits",
        element: <AddCredits />,
      },
      {
        path: "/admin/postback-pixels",
        element: <CallbackManager />,
      },
      {
        path: "/admin/add-callback",
        element: <AddCallback />,
      },
      {
        path: "/admin/create-payout-tier",
        element: <CreatePayoutTier />,
      },
      {
        path: "/admin/create-employee",
        element: <CreateEmployee />,
      },
      {
        path: "/admin/integration/js",
        element: <JsCodeIntegration />,
      },
      {
        path: "/admin/integration/fraudscore",
        element: <Fraudscore />,
      },
      {
        path: "/admin/email-server-settings",
        element: <EmailServerSettings />,
      },
      {
        path: "/admin/affiliate/add-new-document",
        element: <AddNewDocument />,
      },
      {
        path: "/admin/email-custom-server-settings",
        element: <EmailCustomServerSettings />,
      },
      {
        path: "/admin/create-question",
        element: <CreateQuestionFirst />,
      },
    ],
  },
  {
    path: "/admin/advertiser",
    element: <AdvertiserLayout />,
    children: [
      {
        path: "/admin/advertiser/account-info",
        element: <AccountInformation />,
      },
      {
        path: "/admin/advertiser/permissions",
        element: <AccountPermission />,
      },
      {
        path: "/admin/advertiser/account-user",
        element: <AccountUsers />,
      },
      {
        path: "/admin/advertiser/account-details",
        element: <UserAccountDetails />,
      },
      {
        path: "/admin/advertiser/notification-setting",
        element: <NotificationSetting />,
      },
    ],
  },
  {
    path: "/admin/setting",
    element: <SettingLayout />,
    children: [
      {
        path: "/admin/setting/account-info",
        element: <AccountInformatins />,
      },
      {
        path: "/admin/setting/permissions",
        element: <Permission />,
      },
      {
        path: "/admin/setting/notification",
        element: <AccountNotification />,
      },
    ],
  },
  {
    path: "/admin/affiliate",
    element: <AffiliateLayout />,
    children: [
      {
        path: "/admin/affiliate/account-details",
        element: <AffiliateAccountDetails />,
      },
      {
        path: "/admin/affiliate/offer-payout",
        element: <OfferPayout />,
      },
      {
        path: "/admin/affiliate/offer-access",
        element: <OfferAccess />,
      },
      {
        path: "/admin/affiliate/postback-pixels",
        element: <PostbackPixels />,
      },
      {
        path: "/admin/affiliate/block-subids",
        element: <BlockSubids />,
      },
      {
        path: "/admin/affiliate/block-advertiser",
        element: <BlockAdvertiser />,
      },
      {
        path: "/admin/affiliate/permissions",
        element: <AffiliatePermission />,
      },
      {
        path: "/admin/affiliate/account-users",
        element: <AffiAccountUsers />,
      },
      {
        path: "/admin/affiliate/edit",
        element: <AffiliateEdit />,
      },
      {
        path: "/admin/affiliate/delete",
        element: <AffiliateDelete />,
      },
    ],
  },
  {
    path: "/admin/offers",
    element: <OffersLayout />,
    children: [
      {
        path: "/admin/offers/offer-details",
        element: <OffersDetails />
      },
      {
        path: "/admin/offers/tracking-codes",
        element: <TrackingCodes />
      },
      {
        path: "/admin/offers/targeting-rules",
        element: <TargetingRoules />
      },
    ],
  },
];
