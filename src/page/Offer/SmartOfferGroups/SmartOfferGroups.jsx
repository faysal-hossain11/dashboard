import { Icon } from "@iconify/react";
import SmartLinkModal from "./SmartLinkModal";
import SmartLinkUpdateModal from "./SmartLinkUpdateModal";
import { Headers } from "../../../components/Headers/Headers";
import CategoriesButton from "../../../components/Button/CategoriesButton";
import CreateNewModal from "./CreateNewModal";

const smartOfferGroups = [
  {
    id: "01",
    name: "George Davre",
    description: "Global SmartLink Group",
    offer: "All",
    optimizer: "CR",
    link: "Global Smart Link",
  },
  {
    id: "02",
    name: "George Davre",
    description: "Global SmartLink Group",
    offer: "All",
    optimizer: "CR",
    link: "Global Smart Link",
  },
  {
    id: "03",
    name: "George Davre",
    description: "Global SmartLink Group",
    offer: "All",
    optimizer: "CR",
    link: "Global Smart Link",
  },
  {
    id: "04",
    name: "George Davre",
    description: "Global SmartLink Group",
    offer: "All",
    optimizer: "CR",
    link: "Global Smart Link",
  },
  {
    id: "05",
    name: "George Davre",
    description: "Global SmartLink Group",
    offer: "All",
    optimizer: "CR",
    link: "Global Smart Link",
  },
  {
    id: "06",
    name: "George Davre",
    description: "Global SmartLink Group",
    offer: "All",
    optimizer: "CR",
    link: "Global Smart Link",
  },
  {
    id: "07",
    name: "George Davre",
    description: "Global SmartLink Group",
    offer: "All",
    optimizer: "CR",
    link: "Global Smart Link",
  },
  {
    id: "08",
    name: "George Davre",
    description: "Global SmartLink Group",
    offer: "All",
    optimizer: "CR",
    link: "Global Smart Link",
  },
  {
    id: "09",
    name: "George Davre",
    description: "Global SmartLink Group",
    offer: "All",
    optimizer: "CR",
    link: "Global Smart Link",
  },
  {
    id: "10",
    name: "George Davre",
    description: "Global SmartLink Group",
    offer: "All",
    optimizer: "CR",
    link: "Global Smart Link",
  },
];
const SmartOfferGroups = () => {
  return (
    <div>
      <div className="md:mb-[60px] mb-5">
        <Headers text={{ heading: "Smart Offer Groups Create New" }}>
          <button
            onClick={() =>
              document.getElementById("create-new-modal").showModal()
            }
          >
            <CategoriesButton
              text={"Create Offer"}
              icon={"octicon:feed-plus-16"}
            />
            <CreateNewModal />
          </button>
        </Headers>
      </div>
      <div className="py-[24px] px-[20px] bg-white rounded-[15px]">
        <div className="mb-[50px]">
          <h3 className=" font-primaryFont text-primaryColor text-[20px] font-medium">
            2 Group
          </h3>
        </div>
        <div className=" overflow-x-auto bg-white">
          <table className=" table-auto w-full ">
            <thead>
              <tr className=" bg-primaryColor">
                <th className="text-white text-left pr-[50px] py-3 pl-[10px]">
                  ID
                </th>
                <th className="text-white text-left pr-[50px] py-3">Name</th>
                <th className="text-white text-left pr-[50px] py-3">
                  Description
                </th>
                <th className="text-white text-left pr-[50px] py-3">Offers</th>
                <th className="text-white text-left pr-[50px] py-3">
                  Optimizer
                </th>
                <th className="text-white text-left py-3 pl-[40px]">
                  Optimizer
                </th>
                <th className="text-white text-left py-3 pl-[40px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {smartOfferGroups.map((item) => (
                <tr key={item.id} className="">
                  <td className="pl-[10px] pt-5">{item.id}</td>
                  <td className="pt-[20px]">{item.name}</td>
                  <td className="pt-[20px]">{item.description}</td>
                  <td className="pt-[20px]">{item.offer}</td>
                  <td className="pt-[20px]">{item.optimizer}</td>
                  {/* <td className="pt-5 pl-[30px] pr-4">
                    <Link className="flex rounded-[10px] text-[14px] font-secondaryFont text-primaryColor font-bold items-center justify-center py-2 gap-[10px] bg-[#D7D7D9]">
                  <td className="pt-5 pl-[30px] pr-4">
                    <Link className="flex w-[180px] rounded-[10px] text-[14px] font-secondaryFont text-primaryColor font-bold items-center justify-center py-2 gap-[10px] bg-[#D7D7D9]">
                      <Icon
                        icon="material-symbols:link"
                        className="text-[16px]"
                      />
                      {item.link}
                    </Link>
                  </td> */}
                  <td className="pt-5 pl-[30px] pr-4">
                    <button
                      className="w-[205px] flex rounded-[10px] text-[14px] font-secondaryFont text-primaryColor font-bold items-center justify-center py-2 gap-[10px] bg-[#D7D7D9]"
                      onClick={() =>
                        document.getElementById("globalSmart-modal").showModal()
                      }
                    >
                      <Icon
                        icon="material-symbols:link"
                        className="text-[16px]"
                      />
                      {item.link}
                    </button>
                    <SmartLinkModal />
                  </td>
                  <td className="pt-5 pl-[30px] pr-4">
                    <button
                      className="rounded-[10px] text-[14px] font-secondaryFont text-primaryColor font-bold items-center justify-center p-2 gap-[10px] bg-[#D7D7D9]"
                      onClick={() =>
                        document
                          .getElementById("smartLinkUpdate-modal")
                          .showModal()
                      }
                    >
                      Update
                    </button>
                    <SmartLinkUpdateModal />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SmartOfferGroups;
