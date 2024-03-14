import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import ManageOffers from "./page/Offer/manageOffers/ManageOffers";
import ImportFile from "./page/Offer/ImportFile/ImportFile";
import OfferSyncApi from "./page/Offer/OfferSyncApi/OfferSyncApi";
import EditOffer from "./page/Offer/Edit-Offer/EditOffer";
import AddPayout from "./page/Offer/Add-payout/AddPayout";
import CreateOffer from "./page/Offer/create-offer/CreateOffer";
import CreativeManager from "./page/Offer/CreativeManager/CreativeManager";
import OfferCategories from "./page/Offer/OfferCategories/OfferCategories";
import SmartOfferGroups from "./page/Offer/SmartOfferGroups/SmartOfferGroups";
import LinkChecker from "./page/Offer/LinkChecker/LinkChecker";
import NewOfferUrl from "./page/Offer/New-offer-url/NewOfferUrl";
import ManageOfferSourses from "./page/Offer/Manage-offer-sourses/ManageOfferSourses";
import ManageOfferAutoImport from "./page/Offer/Manage-offer-auto-import-enable/ManageOfferAutoImport";
import ManageOfferAddSourses from "./page/Offer/Manage-offer-add-new-sourse/ManageOfferAddSourses";
import History from "./page/Offer/History/History";
import SyncSettings from "./page/Offer/Sync-settings/SyncSettings";
import DailyReport from "./page/Reports/DailyReport/DailyReport";
import HourlyReport from "./page/Reports/HourlyReport/HourlyReport";
import AffiliateReport from "./page/Reports/AffiliateReport/AffiliateReport";
import AdvertiserReport from "./page/Reports/AdvertiserReport/AdvertiserReport";
import OfferReport from "./page/Reports/OfferReport/OfferReport";
import ReferralCommissionsReports from "./page/Reports/Referral-commissions-reports/ReferralCommissionsReports";
import ManageSavedReport from "./page/Reports/Manage-saved-report/ManageSavedReport";
import ConversionReport from "./page/Reports/Conversion-report/ConversionReport";
import AdvertiserManagerReport from "./page/Reports/Advertiser-manager-report/AdvertiserManagerReport";
import AffiliateManagerReport from "./page/Reports/Affiliate-manager-report/AffiliateManagerReport";
import SavedReport from "./page/Reports/Saved-report/SavedReport";
import ConvertionStatsReports from "./page/Reports/Convertion-stats-reports/ConvertionStatsReports";
import AffiliatePayoutTiers from "./page/Affiliates/Affiliate-payout-tiers/AffiliatePayoutTiers";
import CreatePayoutTier from "./page/Affiliates/Create-payout-tier/CreatePayoutTier";
import ManageAffiliates from "./page/Affiliates/Manage-affilaites/ManageAffiliates";
import AddCallback from "./page/Affiliates/Add-callback/AddCallback";
import CallbackManager from "./page/Affiliates/Callback-manager/CallbackManager";
import CreateAffilliates from "./page/Affiliates/CreateAffiliates/CreateAffilliates";
import PendingAffiliates from "./page/Affiliates/PendingAffiliates/PendingAffiliates";
import AffiliatesAnnouncements from "./page/Affiliates/Affiliates-announcements/AffiliatesAnnouncements";
import AffiliateBilling from "./page/Affiliates/Affiliate-billing/AffiliateBilling";
import CreateInvoice from "./page/Affiliates/Create-invoice/CreateInvoice";
import AffiliateInvoice from "./page/Affiliates/Affiliate-invoice/AffiliateInvoice";
import AddNewDocument from "./page/Affiliates/Affiliates-announcements/AddNewDocument";
import AffiliateCredit from "./page/Affiliates/Affialite-credit/AffiliateCredit";
import AddCredits from "./page/Affiliates/Affialite-credit/AddCredits";
import Test from "./page/Affiliates/Affiliate-test/Test";
// import AffiliateDetails from "./page/Affiliates/Affiliate-account/AffiliateDetails";
// import AffiliateAccountLayout from "./page/Affiliates/Affiliate-account/AffiliateAccountLayout";
import ManagePayout from "./page/Affiliates/Manage-payout/ManagePayout";
import StaticAdjustmentLogs from "./page/Affiliates/Static-adjustment-logs/StaticAdjustmentLogs";
import ManageAdvertiser from "./page/Advertiser/Manage-advertiser/ManageAdvertiser";
import AddNewCustomPayout from "./page/Affiliates/Add-new-custom-payout/AddNewCustomPayout";
import CreateAdvertiser from "./page/Advertiser/Manage-advertiser/CreateAdvertiser";
import Setting from "./page/Settings/Setting/Setting";
import CreateEmployee from "./page/Settings/Setting/CreateEmployee";
import AppSetting from "./page/Settings/App-setting/AppSetting";
import PendingAdvertiser from "./page/Advertiser/Pending-advertiser/PendingAdvertiser";
import MarketingTools from "./page/MarketingTools/Marketing-tools/MarketingTools";
import EmailServerSettings from "./page/MarketingTools/Email-server-settings/EmailServerSettings";
import EmailCustomServerSettings from "./page/MarketingTools/Email-custom-server-settings/EmailCustomServerSettings";
import AutomatedMailAlerts from "./page/MarketingTools/Automated-mail-alerts/AutomatedMailAlerts";
import EditEmployeeProfile from "./page/Settings/Edit-employee-profile/EditEmployeeProfile";
import CustomDomain from "./page/Settings/Custom-domain/CustomDomain";
import CurencyManager from "./page/Settings/Curency-manager/CurencyManager";
import AppBranding from "./page/Settings/App-branding/AppBranding";
import PlatformSetting from "./page/Settings/Platform-setting/PlatformSetting";
import AffiliateFeature from "./page/Settings/Affiliate-feature/AffiliateFeature";
import AdvertiserFeature from "./page/Settings/Advertiser-feature/AdvertiserFeature";
import Email from "./page/Settings/Email/Email";
import EmailCustomServer from "./page/Settings/Email-custom-server-setting/EmailCustomServer";
import Integration from "./page/Settings/Integration/Integration";
import JsCodeIntegration from "./page/Settings/Integration/JsCodeIntegration";
import Fraudscore from "./page/Settings/Integration/Fraudscore";
import Question from "./page/Settings/Question/Question";
import CreateQuestion from "./page/Settings/Question/CreateQuestion";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage-offer" element={<ManageOffers />} />
          <Route path="/import-file" element={<ImportFile />} />
          <Route path="/offer-sync-api" element={<OfferSyncApi />} />
          <Route path="/edit-offer" element={<EditOffer />} />
          <Route path="/creative-manager" element={<CreativeManager />} />
          <Route path="/add-payout" element={<AddPayout />} />
          <Route path="/offer-categories" element={<OfferCategories />} />
          <Route path="/create-offer" element={<CreateOffer />} />
          <Route path="/smart-offer-groups" element={<SmartOfferGroups />} />
          <Route path="/link-checker" element={<LinkChecker />} />
          <Route path="/new-offer-url" element={<NewOfferUrl />} />
          <Route
            path="/manage-offer-sourses"
            element={<ManageOfferSourses />}
          />
          <Route
            path="/manage-offer-auto-import"
            element={<ManageOfferAutoImport />}
          />
          <Route
            path="/manage-offer-add-sourse"
            element={<ManageOfferAddSourses />}
          />
          <Route path="/history" element={<History />} />
          <Route path="/sync-settings" element={<SyncSettings />} />
          <Route path="/daily-report" element={<DailyReport />} />
          <Route path="/hourly-report" element={<HourlyReport />} />
          <Route path="/affiliate-report" element={<AffiliateReport />} />
          <Route path="/advertiser-report" element={<AdvertiserReport />} />
          <Route path="/offer-report" element={<OfferReport />} />
          <Route
            path="/referral-commissions-report"
            element={<ReferralCommissionsReports />}
          />
          <Route path="/manage-saved-report" element={<ManageSavedReport />} />
          <Route path="/conversion-report" element={<ConversionReport />} />
          <Route
            path="/advertiser-manager-report"
            element={<AdvertiserManagerReport />}
          />
          <Route
            path="/affiliate-manager-report"
            element={<AffiliateManagerReport />}
          />
          <Route path="/saved-report" element={<SavedReport />} />
          <Route
            path="/convertion-stats-reports"
            element={<ConvertionStatsReports />}
          />
          <Route
            path="/affiliate-payout-tiers"
            element={<AffiliatePayoutTiers />}
          />
          <Route path="/create-payout-tier" element={<CreatePayoutTier />} />
          <Route path="/manage-affiliates" element={<ManageAffiliates />} />
          <Route path="/add-callback" element={<AddCallback />} />
          <Route path="/callback-manager" element={<CallbackManager />} />
          <Route path="/create-affiliates" element={<CreateAffilliates />} />
          <Route path="/pending-affiliates" element={<PendingAffiliates />} />
          <Route
            path="/affiliates-announcements"
            element={<AffiliatesAnnouncements />}
          />
          <Route path="/affilaite-billing" element={<AffiliateBilling />} />
          <Route path="/create-invoice" element={<CreateInvoice />} />
          <Route path="/affiliate-invoice" element={<AffiliateInvoice />} />
          <Route path="/add-new-document" element={<AddNewDocument />} />
          <Route path="/affiliate-credit" element={<AffiliateCredit />} />
          <Route path="/add-credits" element={<AddCredits />} />
          <Route path="/test" element={<Test />} />
          <Route path="/manage-payout" element={<ManagePayout />} />
          {/* <Route
            path="/affiliate-account"
            element={<AffiliateAccountLayout />}
          ></Route> */}
          {/* <Route path="/affiliate-details" element={<AffiliateDetails />} /> */}
          <Route
            path="/static-adjustment-logs"
            element={<StaticAdjustmentLogs />}
          />
          <Route path="/manage-advertiser" element={<ManageAdvertiser />} />
          <Route
            path="/add-new-custom-payout"
            element={<AddNewCustomPayout />}
          />
          <Route path="/create-advertiser" element={<CreateAdvertiser />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/create-employee" element={<CreateEmployee />} />
          <Route path="/app-setting" element={<AppSetting />} />
          <Route path="/pending-advertiser" element={<PendingAdvertiser />} />
          <Route path="/marketing-tools" element={<MarketingTools />} />
          <Route
            path="/email-server-settings"
            element={<EmailServerSettings />}
          />
          <Route
            path="/email-custom-server-settings"
            element={<EmailCustomServerSettings />}
          />
          <Route
            path="/automated-main-alerts"
            element={<AutomatedMailAlerts />}
          />
          <Route
            path="/edit-employee-profile"
            element={<EditEmployeeProfile />}
          />
          <Route path="/custom-domain" element={<CustomDomain />} />
          <Route path="/curency-manager" element={<CurencyManager />} />
          <Route path="/app-branding" element={<AppBranding />} />
          <Route path="/platform-setting" element={<PlatformSetting />} />
          <Route path="/affiliate-feature" element={<AffiliateFeature />} />
          <Route path="/advertiser-feature" element={<AdvertiserFeature />} />
          <Route path="/email" element={<Email />} />
          <Route path="/email-custom-server" element={<EmailCustomServer />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/js-code-integration" element={<JsCodeIntegration />} />
          <Route path="/fraudscore" element={<Fraudscore />} />
          <Route path="/question" element={<Question />} />
          <Route path="/create-question" element={<CreateQuestion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
