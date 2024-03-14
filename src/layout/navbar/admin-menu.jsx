import { MdDashboard } from "react-icons/md";
import { LiaAngleUpSolid, LiaAngleDownSolid } from "react-icons/lia";
const arrow = {
  up: <LiaAngleUpSolid />,
  down: <LiaAngleDownSolid />,
};

export const adminMenu = [
  {
    id: 0,
    name: "Dashboard",
    path: "/",
    icon: <MdDashboard />,
    arrow: false,
  },
  {
    id: 1,
    name: "Offers",
    path: "/",
    icon: <MdDashboard />,
    arrow,
    subMenu: [
      {
        name: "Manage Offer",
        path: "/admin/manager-offer",
      },
      {
        name: "Create Offer",
        path: "/admin/create-offer",
      },
      {
        name: "Import File",
        path: "/admin/import-file",
        arrow,
        subMenu: [
          {
            name: "Import with Sync Api",
            path: "/admn/import-file/import-with-sync-api",
          },
          {
            name: "Import with file",
            path: "/admn/import-file/import-with-file",
          },
        ],
      },
      {
        name: "Creative Manager",
        path: "/admin/creative-manager",
      },
      {
        name: "Offer Categories",
        path: "/admin/offer-categories",
      },
      {
        name: "Smart Group & Links",
        path: "/admin/smart-group",
      },
      {
        name: "Link Checker",
        path: "/admin/link-checker",
      },
      {
        name: "Offer Details",
        path: "/admin/offers",
      },
    ],
  },
  {
    id: 2,
    name: "Reports",
    path: "/",
    icon: <MdDashboard />,
    arrow,
    subMenu: [
      {
        name: "Daily Report",
        path: "/admin/daily-report",
      },
      {
        name: "Hourly Report",
        path: "/admin/hourly-report",
      },
      {
        name: "Affiliate Report",
        path: "/admin/affiliate-report",
      },
      {
        name: "Advertiser Report",
        path: "/admin/advertiser-report",
      },
      {
        name: "Offer Report",
        path: "/admin/offer-report",
      },
      {
        name: "Conversions Report",
        path: "/admin/conversions-report",
      },
      {
        name: "Conversion Stats Report",
        path: "/admin/conversion-stats-report",
      },
      {
        name: "Team Performence",
        path: "/admin/team/affiliate-manager-report",
        arrow,
        subMenu: [
          {
            name: "Affiliate Manager Report",
            path: "/admin/team/affiliate-manager-report",
          },
        ],
      },
      {
        name: "Manage Saved Report",
        path: "/admin/manage-saved-report",
      },
    ],
  },
  {
    id: 3,
    name: "Affiliates",
    path: "/",
    icon: <MdDashboard />,
    arrow,
    subMenu: [
      {
        name: "Manage Affiliate",
        path: "/admin/manage-affiliate",
      },
      {
        name: "Create Affiliate",
        path: "/admin/create-affiliate",
      },
      {
        name: "Affiliate Billing",
        arrow,
        subMenu: [
          {
            name: "Billing Manager",
            path: "/admin/billing-manager",
          },
          {
            name: "Invoice",
            path: "/admin/invoice",
          },
          {
            name: "Credit",
            path: "/admin/credit",
          },
        ],
      },
      {
        name: "Affiliate Announcements",
        path: "/admin/affiliate-announcements",
      },
      {
        name: "Adjust Statistics",
        path: "/",
      },
      {
        name: "Postback Pixels",
        path: "/admin/postback-pixels",
      },
      {
        name: "Payout Tiers",
        path: "/admin/payout-tiers",
      },
      {
        name: "Account",
        path: "/admin/affiliate",
      },
    ],
  },
  {
    id: 4,
    name: "Advertisers",
    path: "/",
    icon: <MdDashboard />,
    arrow,
    subMenu: [
      {
        name: "Manage Advertisers",
        path: "/admin/manager-advertisers",
      },
      {
        name: "Create Advertisers",
        path: "/admin/create-advertisers",
      },
      {
        name: "Account Info",
        path: "/admin/advertiser",
      },
    ],
  },
  {
    id: 5,
    name: "Event Log",
    path: "/",
    icon: <MdDashboard />,
    arrow,
    subMenu: [],
  },
  {
    id: 6,
    name: "Marketing Tools",
    path: "/",
    icon: <MdDashboard />,
    arrow,
    subMenu: [
      {
        name: "Mass Mailer",
        path: "/admin/mass-mailer",
      },
      {
        name: "Mail Alert",
        path: "/admin/mail-alert",
      },
    ],
  },
  {
    id: 7,
    name: "Settings",
    path: "/",
    icon: <MdDashboard />,
    arrow,
    subMenu: [
      {
        name: "Manage Team Access",
        path: "/admin/manage-team",
      },
      {
        name: "System Preference",
        path: "/admin/access-system-preference",
      },
      {
        name: "Account Info",
        path: "/admin/setting",
      },
    ],
  },
];
