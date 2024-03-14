import SyncCard from "../../../components/Cards/SyncCard";
import { Icon } from "@iconify/react";
import { Headers } from "../../../components/Headers/Headers";

const cardItems = [
  {
    icon: <Icon icon="icon-park-outline:database-download" />,
    title: "Quick Import",
    description:
      "Automatically import an offer from other network or advertiser by ID.",
    button: "Start",
  },
  {
    icon: <Icon icon="iconoir:rocket" />,
    title: "Explore Offers",
    description:
      "Automatically import an offer from other network or advertiser by ID.",
    button: "Explore",
  },
  {
    icon: <Icon icon="icon-park-outline:setting-web" />,
    title: "Manage Sources",
    description:
      "Automatically import an offer from other network or advertiser by ID.",
    button: "Go",
  },
  {
    icon: <Icon icon="fa6-solid:business-time" />,
    title: "History",
    description:
      "Automatically import an offer from other network or advertiser by ID.",
    button: "See",
  },
  {
    icon: <Icon icon="mdi:settings-sync" />,
    title: "Sync Settings ",
    description:
      "Automatically import an offer from other network or advertiser by ID.",
    button: "Go",
  },
];
const OfferSyncApi = () => {
  return (
    <div>
      <div className="mb-5">
        <Headers text={{ heading: " Offer Sync API" }}></Headers>
      </div>
      <div className="py-[14px] px-4 bg-primaryColor rounded-[10px] lg:mb-[90px] md:10-12 mb-5 max-w-full">
        <p className=" font-primaryFont text-white text-[12px] font-normal">
          You don&apos;t have added any sources to import offers. Click Here to
          add and get started.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[24px]">
          {cardItems.map((card, i) => (
            <>
              <SyncCard card={card} key={i} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferSyncApi;
