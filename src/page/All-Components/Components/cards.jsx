import { Icon } from "@iconify/react";
import DashboardCard from "../../../components/Cards/DashboardCard";
import FormateCard from "../../../components/Cards/FormateCard";
import GuideCard from "../../../components/Cards/GuideCard";
import SyncCard from "../../../components/Cards/SyncCard";
import BlackCard from "../../../components/Cards/BlackCard";
import TaskCard from "../../../components/Cards/TaskCard";
import FeaturesCards from "../../../components/Cards/FeaturesCards";
import ImportCard from "../../../components/Cards/ImportCard";
import { AccountInfoCard } from "../../../components/Cards/AccountInfoCard";
import { DeleteModal } from "../../../components/Cards/DeleteModal";

const cardItems = {
  id: 1,
  icon: <Icon icon="icon-park-outline:database-download" />,
  title: "Quick Import",
  description:
    "Automatically import an offer from other network or advertiser by ID.",
  button: "Start",
};
const e = {
  id: 1,
  header: "Total Clicks",
  amount: "325,748",
};

export const cards = {
  id: 2,
  label: "Cards",
  elements: [
    {
      name: "Dashboard Card",
      children: <DashboardCard e={e} />,
      howToUse: `<DashboardCard e={e} />`,
      code: `import { Icon } from "@iconify/react";

      const DashboardCard = ({ e }) => {
        return (
          <div className="flex flex-col gap-[10px] bg-white px-[20px] py-[16px] rounded-[15px] hover:bg-primaryColor transition-all duration-300 group h-[86px]">
            <div className="flex justify-between items-center">
              <p className=" font-normal font-primaryFont text-[14px] text-tartiaryColor leading-[15px] group-hover:text-white transition duration-300">
                {e?.header}
              </p>
              <Icon
                className="text-xl text-[#4C9962] group-hover:text-white transition duration-300"
                icon="ion:trending-up"
              />
            </div>
            <h2 className="font-secondaryFont text-primaryColor text-[24px] font-bold group-hover:text-white transition duration-300">
              {e?.amount}
            </h2>
          </div>
        );
      };
      
      export default DashboardCard;`,
    },
    {
      name: "Formate Card",
      children: (
        <FormateCard
          text={"Excel file (XLS)"}
          icon={"eva:cloud-download-fill"}
        />
      ),
      howToUse: ` <FormateCard
      text={"Excel file (XLS)"}
      icon={"eva:cloud-download-fill"}
    />`,
      code: `import { Icon } from "@iconify/react";

      const FormateCard = ({ text, icon }) => {
        return (
          <div className="sample-card">
            <p className="card-content">{text}</p>
            <Icon className="download-icon" icon={icon} />
          </div>
        );
      };
      
      export default FormateCard;`,
    },
    {
      name: "Guide Card",
      children: <GuideCard text={"Advertiser ID"} />,
      howToUse: `<GuideCard text={"Advertiser ID"} />`,
      code: `const GuideCard = ({text}) => {
        return <p className="single-item">{text}</p>;
      };
      
      export default GuideCard;`,
    },
    {
      name: "Sync Card",
      children: <SyncCard card={cardItems} />,
      howToUse: `<SyncCard card={cardItems} />`,
      code: `import OfferSyncModal from "../OfferSyncApiCard/OfferSyncModal";

      const SyncCard = ({ card }) => {
        return (
          <div className="mt-[50px] lg:px-0">
            <div className="px-[40px] pb-[30px] max-[576px]:p-5 rounded-[10px] bg-white  relative group hover:bg-primaryColor transition-all duration-300">
              <div className=" text-center  bg-white border-[5px] broder-secondary w-[100px] p-[25px] rounded-full m-auto absolute top-[-50px] left-[50%] translate-x-[-50%] group-hover:bg-primaryColor transition-all duration-300">
                <div className=" text-center text-[40px] text-red group-hover:text-white  transition-all duration-300">
                  {card.icon}
                </div>
              </div>
              <div>
                <h4 className=" font-primaryFont text-primaryColor font-medium text-[24px] mb-3 text-center pt-[70px] group-hover:text-white transition-all duration-300">
                  {card.title}
                </h4>
                <p className=" font-primaryFont text-tartiaryColor text-[16px] font-normal text-center mb-[34px] group-hover:text-white transition-all duration-300">
                  {card.description}
                </p>
                <div className="px-[20px]">
                  <button
                    onClick={() => document.getElementById("modal").showModal()}
                    className="text-center w-full bg-white py-3 border border-primaryColor rounded-[10px] text-[#6A6A6A] font-bold text-[16px] font-secondaryFont"
                  >
                    {card.button}
                  </button>
                  <OfferSyncModal />
                </div>
              </div>
            </div>
          </div>
        );
      };
      
      export default SyncCard;`,
    },
    {
      name: "Black Card",
      children: <BlackCard />,
      code: `import { BiSearchAlt2 } from "react-icons/bi";
      import { FaPlus } from "react-icons/fa6";
      import offer from "../../assets/images/offer.png";
      import Advertiser from "../../assets/images/advatiser.png";
      import Affiliate from "../../assets/images/affiliate.png";
      import Postback from "../../assets/images/postback.png";
      
      const BlackCard = () => {
        return (
          <div className=" bg-primaryColor rounded-[10px] md:h-[300px] md:p-[30px] p-[15px]">
            <div className="flex items-center bg-[#2A3347] py-[10px] px-[20px] rounded-[10px] mb-10 gap-[20px]">
              <div className="">
                <BiSearchAlt2 className="text-[#9ba7bc]" />
              </div>
              <input type="search" className="bg-[#2A3347] outline-none text-white" />
            </div>
            <div className="md:flex justify-between ">
              <div>
                <div className="flex items-center justify-between gap-10 mb-5">
                  <div className="flex items-center gap-[10px]">
                    <div>
                      <img src={offer} alt="offer-image" />
                    </div>
                    <p className=" font-primaryFont text-[14px] text-[#CDCDCD]">
                      Create Offer
                    </p>
                  </div>
                  <div>
                    <FaPlus className="text-white" />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-10 mb-5">
                  <div className="flex items-center gap-[10px]">
                    <div>
                      <img src={Affiliate} alt="offer-image" />
                    </div>
                    <p className=" font-primaryFont text-[14px] text-[#CDCDCD]">
                      Create Affiliate
                    </p>
                  </div>
                  <div>
                    <FaPlus className="text-white" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between gap-10 mb-5">
                  <div className="flex items-center gap-[10px]">
                    <div>
                      <img src={Advertiser} alt="offer-image" />
                    </div>
                    <p className=" font-primaryFont text-[14px] text-[#CDCDCD]">
                      Create Advertiser
                    </p>
                  </div>
                  <div>
                    <FaPlus className="text-white" />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-10 mb-5">
                  <div className="flex items-center gap-[10px]">
                    <div>
                      <img src={Postback} alt="offer-image" />
                    </div>
                    <p className=" font-primaryFont text-[14px] text-[#CDCDCD]">
                      Get Global Postback URL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      };
      
      export default BlackCard;`,
    },
    {
      name: "Task Card",
      children: <TaskCard />,
      code: `const TaskCard = () => {
        return (
          <div className="p-5 rounded-[10px] bg-white mt-7">
            <div>
              <h2 className="text-center font-bold font-secondaryFont text-primaryColor mb-5 text-[24px]">
                Pending Tasks
              </h2>
              <div className=" mb-2 group">
                <div className="group-hover:bg-[#F3F3F3] flex items-center justify-between py-2 px-4 rounded-[10px] transition duration-300">
                  <p className=" font-primaryFont text-[16px] text-[#6A6A6A] ">
                    Pending Advertiser
                  </p>
                  <p className="font-primaryFont text-[16px] text-[#6A6A6A] w-7 h-7 bg-[#DDDFE2] flex justify-center items-center rounded-full text-center leading-[28px]">
                    0
                  </p>
                </div>
              </div>
              <div className=" mb-2 group">
                <div className="group-hover:bg-[#F3F3F3] flex items-center justify-between py-2 px-4 rounded-[10px] transition duration-300">
                  <p className=" font-primaryFont text-[16px] text-[#6A6A6A] ">
                    Pending Advertiser
                  </p>
                  <p className="font-primaryFont text-[16px] text-[#6A6A6A] w-7 h-7 bg-[#DDDFE2] flex justify-center items-center rounded-full text-center leading-[28px]">
                    0
                  </p>
                </div>
              </div>
              <div className=" mb-2 group">
                <div className="group-hover:bg-[#F3F3F3] flex items-center justify-between py-2 px-4 rounded-[10px] transition duration-300">
                  <p className=" font-primaryFont text-[16px] text-[#6A6A6A] ">
                    Pending Advertiser
                  </p>
                  <p className="font-primaryFont text-[16px] text-[#6A6A6A] w-7 h-7 bg-[#DDDFE2] flex justify-center items-center rounded-full text-center leading-[28px]">
                    0
                  </p>
                </div>
              </div>
              <div className=" mb-2 group">
                <div className="group-hover:bg-[#F3F3F3] flex items-center justify-between py-2 px-4 rounded-[10px] transition duration-300">
                  <p className=" font-primaryFont text-[16px] text-[#6A6A6A] ">
                    Pending Advertiser
                  </p>
                  <p className="font-primaryFont text-[16px] text-[#6A6A6A] w-7 h-7 bg-[#DDDFE2] flex justify-center items-center rounded-full text-center leading-[28px]">
                    0
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      };
      
      export default TaskCard;`,
    },
    {
      name: "Task Card",
      children: <FeaturesCards />,
      howToUse: `<FeaturesCards />`,
      code: `
      <div className="p-[30px] bg-white rounded-[10px] mt-[30px] px-5 lg:px-0">
			<div>
				<h2 className=" font-secondaryFont text-primaryColor text-[24px] font-bold mb-5 text-center">
					Featured Offers
				</h2>
				<p className=" font-primaryFont text-primaryColor text-[16px] text-center font-normal mt-5 md:px-[80px] px-0 mb-[100px]">
					No featured offers available. Time to add some.
				</p>
			</div>
			<div className="flex gap-4 justify-center">
				<button className="py-4 pl-[22px] pr-[14px] bg-primaryColor text-white flex items-center gap-[10px] rounded-[10px]">
					Add <HiPlus />
				</button>
				<button className="py-4 px-[22px] border border-primaryColor rounded-[10px] font-primaryFont text-[16px] text-primaryColor font-medium">
					Enable Auto Mode
				</button>
			</div>
	  </div>`,
    },
    {
      name: "Import Card",
      children: <ImportCard icon={"ant-design:file-add-outlined"} />,
      howToUse: `<ImportCard icon={"ant-design:file-add-outlined"} />`,
      code: `import { Icon } from "@iconify/react";

      const ImportCard = ({ icon }) => {
        return (
          <div className="import-content">
            <Icon className="add-file-icon" icon={icon} />
            <p className="import-left-content">
              Click to upload{" "}
              <span className="import-right-content">or drag & drop</span>
            </p>
            <input type="file" name="" id="" className="upload-file" multiple />
          </div>
        );
      };
      
      export default ImportCard;`,
    },
    {
      name: "Information Card",
      children: (
        <AccountInfoCard
          heading={"#1 Jahid Rifat"}
          text={"Company ID: #1 | Jahid Rifat"}
          btn={true}
        />
      ),
      howToUse: ` <AccountInfoCard heading={"#1 Jahid Rifat"} text={"Company ID: #1 | Jahid Rifat"} btn={true} />`,
      code: `import { foodImg } from "../../lib/image";
      import { GreenBtn } from "../Button/MarcosBtn";
      import { MiddleHeader } from "../Headers/MiddleHeader";
      
      export const AccountInfoCard = ({ heading, text, btn }) => {
        return (
          <>
            <div className="flex gap-5">
              <MiddleHeader heading={heading} />
              {btn && (
                <div className="w-[74px]">
                  <GreenBtn text={"Active"} bg={"#4C9962"} />
                </div>
              )}
            </div>
            <div className="flex gap-5 mt-5 items-center">
              <img className="w-[71px] h-11" src={foodImg} alt="Food Img" />
              <p className="text-[#6A6A6A] text-base font-normal">{text}</p>
            </div>
          </>
        );
      };`,
    },
    {
      name: "Modal",
      children: (
        <DeleteModal
          heading={"Confirm!"}
          text={"The Affiliate Account Status Will Be Deleted."}
          icon={"ion:trash-outline"}
        />
      ),
      howToUse: `<DeleteModal heading={"Confirm!"} text={"The Affiliate Account Status Will Be Deleted."} icon={"ion:trash-outline"} />`,
      code: `import { Icon } from "@iconify/react";
      import AddButton from "../Button/AddButton";
      import OutletButton from "../Button/OutletButton";
      
      export const DeleteModal = ({ heading, text, icon }) => {
        return (
          <div>
            {icon && (
              <div className="flex justify-center">
                <div
                  style={{ border: "3px solid #F23B01" }}
                  className="p-5 rounded-[50px] w-[80px] h-[80px] flex justify-center items-center"
                >
                  <Icon className="text-[#F23B01] text-[50px]" icon={icon} />
                </div>
              </div>
            )}
            {heading && (
              <h1 className="text-2xl font-semibold text-[#000] mt-5 text-center">
                {heading}
              </h1>
            )}
            {text && (
              <p className="text-[18px] font-normal text-[#3F3F3F] mt-[10px] text-center max-[576px]:text-base">
                {text}
              </p>
            )}
            <div className="mt-10 flex gap-[21px] max-[576px]:flex-col max-[576px]:gap-4 max-[576px]:mt-5">
              <AddButton text={"Delete"} varient={"black"} />
              <OutletButton text={"Cancel"} />
            </div>
          </div>
        );
      };`,
    },
  ],
};
