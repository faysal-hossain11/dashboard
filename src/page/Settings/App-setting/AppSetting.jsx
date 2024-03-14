import { Icon } from "@iconify/react";
import OfferSyncApiCard from "../../../components/OfferSyncApiCard/OfferSyncApiCard";
import { PiHandTapBold } from "react-icons/pi";
import { Headers } from "../../../components/Headers/Headers";

const AppSetting = () => {
  const cardItems = [
    {
      icon: <Icon icon="tabler:brand-campaignmonitor" />,
      title: "Branding",
      description:
        "Change your application Look & Feel. Change Logos and more..",
      button: "Start",
    },
    {
      icon: <Icon icon="pepicons-pencil:internet" />,
      title: "Domains",
      description: "Add/Change your own domains for dashboard and tracking.",
      button: "Explore",
    },
    {
      icon: <Icon icon="material-symbols:currency-exchange" />,
      title: "Currencies & Rates",
      description: "Manage offer currencies, default currency and rates.",
      button: "Go",
    },
    {
      icon: <Icon icon="icon-park-solid:setting-web" />,
      title: "Platform Settings",
      description:
        "Adjust system parameters such as default timezone, currency and other network settings.",
      button: "See",
    },
    {
      icon: <Icon icon="iconoir:rocket" />,
      title: "Affiliate Settings",
      description: "Manage affiliate features, rules and settings.",
      button: "Go",
    },
    {
      icon: <Icon icon="el:bullhorn" />,
      title: "Advertiser Settings",
      description:
        "Automatically import an offer from other network or advertiser by ID.",
      button: "Go",
    },
    {
      icon: <Icon icon="tabler:mail-filled" />,
      title: "Email",
      description: "Lets you to setup your own email server.",
      button: "See",
    },
    {
      icon: <PiHandTapBold />,
      title: "Integrations",
      description:
        "Connect your platform with 3rd party platforms, such as analytics, chat widgets.",
      button: "Go",
    },
    {
      icon: <Icon icon="bi:question-diamond-fill" />,
      title: "Sign Up Questions",
      description:
        "Set a list of questions to be asked when your advertiser or affiliate sign up at the platform.",
      button: "Go",
    },
  ];
  return (
    <div>
      <div className="mb-8">
        <Headers text={{ heading: "App Settings" }}></Headers>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {cardItems.map((card, i) => (
          <OfferSyncApiCard key={i} card={card} />
        ))}
      </div>
    </div>
  );
};

export default AppSetting;
