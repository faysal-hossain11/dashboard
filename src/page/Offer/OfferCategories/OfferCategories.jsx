import { Icon } from "@iconify/react";
import CategoriesButton from "../../../components/Button/CategoriesButton";
import { Headers } from "../../../components/Headers/Headers";
import ActiveBadgeButton from "../../../components/Button/ActiveBadgeButton";
import PostBackDeleteButton from "../../../components/Button/PostBackDeleteButton";
import OfferCategoriesModal from "./OfferCategoriesModal";

const offerCategories = [
  {
    id: 1,
    offer: "Arts & Entertainment",
    status: "active",
    offerCount: 12,
    button: "Edit",
  },
  {
    id: 2,
    offer: "Arts & Entertainment",
    status: "active",
    offerCount: 12,
    button: "Edit",
  },
  {
    id: 3,
    offer: "Arts & Entertainment",
    status: "active",
    offerCount: 12,
    button: "Edit",
  },
  {
    id: 4,
    offer: "Arts & Entertainment",
    status: "active",
    offerCount: 12,
    button: "Edit",
  },
  {
    id: 5,
    offer: "Arts & Entertainment",
    status: "active",
    offerCount: 12,
    button: "Edit",
  },
  {
    id: 6,
    offer: "Arts & Entertainment",
    status: "active",
    offerCount: 12,
    button: "Edit",
  },
  {
    id: 7,
    offer: "Arts & Entertainment",
    status: "active",
    offerCount: 12,
    button: "Edit",
  },
  {
    id: 8,
    offer: "Arts & Entertainment",
    status: "active",
    offerCount: 12,
    button: "Edit",
  },
  {
    id: 9,
    offer: "Arts & Entertainment",
    status: "active",
    offerCount: 12,
    button: "Edit",
  },
  {
    id: 10,
    offer: "Arts & Entertainment",
    status: "active",
    offerCount: 12,
    button: "Edit",
  },
];
const OfferCategories = () => {
  return (
    <div>
      <div className="md:mb-8 mb-5">
        <Headers text={{ heading: "Offer Categories" }}>
          <button
            onClick={() =>
              document.getElementById("offerCategories-modal").showModal()
            }
          >
            <CategoriesButton
              text={"Create Offer Categories"}
              icon={"octicon:feed-plus-16"}
            />
          </button>
          <OfferCategoriesModal />
        </Headers>
      </div>
      <div className=" overflow-x-auto">
        <table className=" table-auto w-full">
          <thead>
            <tr className=" bg-primaryColor">
              <th className="flex items-center gap-2 text-white pl-5  py-3 ">
                ID
                <Icon icon="fluent:arrow-sort-16-filled" />
              </th>
              <th className="text-white text-left">Offer</th>
              <th className="text-white text-left">Status</th>
              <th className="text-white text-left">Offer</th>
              <th className="text-white text-right pr-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {offerCategories.map((item) => (
              <tr key={item.id}>
                <td className="pl-5 pt-2">{item.id}</td>
                <td className="pt-2">{item.offer}</td>
                <td className="pt-2 mx-7">
                  <ActiveBadgeButton
                    text={item?.status}
                    badged={item?.status}
                  />
                </td>
                <td className=" pt-2 ">{item.offerCount}</td>
                <td className="mt-[16px] text-right flex justify-end pr-5">
                  <PostBackDeleteButton
                    text={"Edit"}
                    icon={"mdi:pencil"}
                    bg={"edit"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OfferCategories;
