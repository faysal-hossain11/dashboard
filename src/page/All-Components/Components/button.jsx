import ActiveBadgeButton from "../../../components/Button/ActiveBadgeButton";
import AddButton from "../../../components/Button/AddButton";
import BlackButton from "../../../components/Button/BlackButton";
import { BackButton } from "../../../components/Button/Button";
import CategoriesButton from "../../../components/Button/CategoriesButton";
import FilterButton from "../../../components/Button/FiliterButton";
import GeneralButton, {
  CancelBtns,
  EditBtns,
  OutletBtn,
} from "../../../components/Button/GeneralButton";
import GrayButton from "../../../components/Button/GrayButton";
import ImportButton from "../../../components/Button/ImportButton";
import {
  BlockBtn,
  GreenBtn,
  MarcosBtn,
  OutlateSmall,
  PreviousBtn,
} from "../../../components/Button/MarcosBtn";
import OutletButton from "../../../components/Button/OutletButton";
import PostBackDeleteButton from "../../../components/Button/PostBackDeleteButton";
import ReportBlackButton from "../../../components/Button/ReportBlackButton";
import ReportButton from "../../../components/Button/ReportButton";
import SuccessPendingButton from "../../../components/Button/SuccessPendingButton";
import UploadButton from "../../../components/Button/UploadButton";

export const buttons = {
  id: 1,
  label: "Button",
  elements: [
    {
      name: "Back Button",
      children: <BackButton />,
      howToUse: `<BackButton />`,
      code: `  import { FaAngleLeft } from 'react-icons/fa';

    export function BackButton() {
        const style = {
            color: '#3A3A3A',
            fontFamily: 'PT Sans',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 'normal',
        };
        return (
            <button className="flex items-center gap-[10px]  ">
                <span>
                    <FaAngleLeft />
                </span>
                <span style={style}>Back</span>
            </button>
        );
    }
     
    `,
    },
    {
      name: "Black Button",
      children: (
        <>
          <BlackButton
            text={"Open Live Dashboard"}
            icon={"heroicons:signal-20-solid"}
          />
          <BlackButton
            text={"Create Offer"}
            icon={"ic:twotone-plus"}
            contentReverse={true}
          />
        </>
      ),
      howToUse: `<BlackButton
      text={"Open Live Dashboard"}
      icon={"heroicons:signal-20-solid"}
    />
    <BlackButton
      text={"Create Offer"}
      icon={"ic:twotone-plus"}
      contentReverse={true}
    />`,
      code: `  import { Icon } from "@iconify/react";

      const BlackButton = ({ text, icon }) => {
       return (
         <button className="flex items-center gap-[8px] py-3 pr-[22px] pl-[14px] bg-primaryColor rounded-[10px]">
           <Icon className="text-[#FFFFFF] text-[22px]" icon={icon} />{" "}
           <span className="text-[#FFF] text-base font-medium">{text}</span>
         </button>
       );
     };
     export default BlackButton;`,
    },
    {
      name: "Filiter Button",
      children: <FilterButton text={"Filiter"} icon={"ion:filter"} />,
      howToUse: `<FilterButton text={"Filiter"} icon={"ion:filter"}`,
      code: `  import { Icon } from "@iconify/react";

      const FilterButton = ({ text, icon }) => {
        return (
          <button className="flex items-center gap-[10px] p-3.5 bg-[#E2E3E4] rounded-[10px]">
            <Icon className="text-primaryColor text-5" icon={icon} />{" "}
            <span className="text-primaryColor text-base font-medium">{text}</span>
          </button>
        );
      };
      export default FilterButton;
      `,
    },
    {
      name: "Import Button",
      children: <ImportButton text={"Import File"} icon={"ion:download"} />,
      howToUse: `<ImportButton text={"Import File"} icon={"ion:download"} />`,
      code: `import { Icon } from "@iconify/react";

      const ImportButton = ({ text, icon }) => {
        return (
          <button className="flex items-center gap-[10px] pl-[22px] py-3 pr-3.5 bg-[#FFF] rounded-[10px]">
            <span className="text-primaryColor text-base font-medium">{text}</span>
            <Icon className="text-primaryColor text-[22px]" icon={icon} />
          </button>
        );
      };
      
      export default ImportButton;`,
    },
    {
      name: "Gray Button",
      children: <GrayButton icon={"solar:download-linear"} />,
      howToUse: `<GrayButton icon={"solar:download-linear"} />`,
      code: `import { Icon } from "@iconify/react";

      const GrayButton = ({ icon }) => {
        return (
          <button className="p-[14px] bg-[#F5F5F5] rounded-[10px]">
            <Icon icon={icon} className="text-[20px]" />
          </button>
        );
      };
      
      export default GrayButton;`,
    },
    {
      name: "Categories Button",
      children: (
        <CategoriesButton
          text={"Create Offer Categories"}
          icon={"octicon:feed-plus-16"}
        />
      ),
      howToUse: `<CategoriesButton
      text={"Create Offer Categories"}
      icon={"octicon:feed-plus-16"}
    />`,
      code: `import { Icon } from "@iconify/react";

      const CategoriesButton = ({ text, icon }) => {
        return (
          <button className="flex items-center justify-center gap-[10px] p-[10px] rounded-[10px] bg-primaryColor">
            <span className="text-white font-primaryFont text-[16px] font-medium">
              {text}
            </span>
            <Icon className="text-[30px] text-[#FFFFFF]" icon={icon} />
          </button>
        );
      };
      
      export default CategoriesButton;`,
    },
    {
      name: "Report Button",
      children: (
        <>
          <ReportButton text={"Generate Report"} icon={"ion:rocket"} />
          <ReportButton
            text={"Generate Report"}
            icon={"ion:rocket"}
            contentReverse={true}
          />
        </>
      ),
      howToUse: `<ReportButton text={"Generate Report"} icon={"ion:rocket"} />
      <ReportButton
        text={"Generate Report"}
        icon={"ion:rocket"}
        contentReverse={true}
      />`,
      code: `import { Icon } from "@iconify/react";

      const ReportButton = ({ text, icon }) => {
        return (
          <button className="flex justify-center py-[6px] rounded-[10px] pl-4 pr-3.5 gap-[8px] bg-[#A4A4A4]">
            <h3 className=" font-secondaryFont text-[14px] text-white font-bold flex items-center justify-center">
              {text}
            </h3>
            <Icon className="text-[#FFFFFF] text-[22px]" icon={icon} />
          </button>
        );
      };
      
      export default ReportButton;`,
    },
    {
      name: "Black Button",
      children: (
        <ReportBlackButton text={"Generate Report"} icon={"ion:rocket"} />
      ),
      howToUse: `<ReportBlackButton text={"Generate Report"} icon={"ion:rocket"} />`,
      code: `import { Icon } from "@iconify/react";

      const ReportBlackButton = ({ text, icon }) => {
        return (
          <button className="flex justify-center py-[6px] rounded-[10px] pl-4 pr-3.5 gap-[8px] bg-primaryColor">
            <h3 className="font-secondaryFont text-[14px] text-[#FFFFFF] font-bold flex items-center justify-center">
              {text}
            </h3>
            <Icon className="text-[#FFFFFF] text-[22px]" icon={icon} />
          </button>
        );
      };
      
      export default ReportBlackButton;`,
    },
    {
      name: "General Button",
      children: (
        <GeneralButton
          text={"Generate Report"}
          icon={"iconamoon:arrow-down-2-fill"}
        />
      ),
      howToUse: `<GeneralButton
      text={"Generate Report"}
      icon={"iconamoon:arrow-down-2-fill"}
    />`,
      code: `import { Icon } from "@iconify/react";

      const GeneralButton = ({ text, icon }) => {
        return (
          <button className="flex items-center gap-2 border border-primaryColor py-3 px-[22px] rounded-[10px]">
            <span className="font-secondaryFont text-primaryColor font-bold text-[16px]">
              {text}
            </span>
            <Icon className="text-[22px]" icon={icon} />
          </button>
        );
      };
      
      export default GeneralButton;`,
    },
    {
      name: "Badge Button",
      children: (
        <>
          <ActiveBadgeButton text={"Active"} badged={"active"} />
          <ActiveBadgeButton text={"Enable"} badged={"enable"} />
          <ActiveBadgeButton text={"Inactive"} badged={"inactive"} />
          <ActiveBadgeButton text={"Disable"} badged={"disable"} />
        </>
      ),
      howToUse: `<ActiveBadgeButton text={"Active"} badged={"active"} />
      <ActiveBadgeButton text={"Enable"} badged={"enable"} />
      <ActiveBadgeButton text={"Inactive"} badged={"inactive"} />
      <ActiveBadgeButton text={"Disable"} badged={"disable"} />`,
      code: `const ActiveBadgeButton = ({ text, badged }) => {
        return <span className={badged}>{text}</span>;
      };
      
      export default ActiveBadgeButton;`,
    },
    {
      name: "Badge Button",
      children: (
        <>
          <PostBackDeleteButton
            text={"posback Code"}
            icon={"ion:code-slash"}
            bg={"postback"}
          />
          <PostBackDeleteButton
            icon={"iconamoon:trash-duotone"}
            bg={"delete"}
          />
          <PostBackDeleteButton text={"Edit"} icon={"mdi:pencil"} bg={"edit"} />
        </>
      ),
      howToUse: `<PostBackDeleteButton
      text={"posback Code"}
      icon={"ion:code-slash"}
      bg={"postback"}
    />
    <PostBackDeleteButton
      icon={"iconamoon:trash-duotone"}
      bg={"delete"}
    />
    <PostBackDeleteButton text={"Edit"} icon={"mdi:pencil"} bg={"edit"} />`,
      code: `import { Icon } from "@iconify/react";

      const PostBackDeleteButton = ({ text, icon, bg }) => {
        return (
          <button className={bg}>
            <Icon className="text-[22px] text-[#FFFFFF]" icon={icon} />
            <span className="text-[#FFF] text-sm font-bold">{text}</span>
          </button>
        );
      };
      
      export default PostBackDeleteButton;`,
    },
    {
      name: "Add Button",
      children: (
        <>
          <AddButton
            text={"Add"}
            varient={"black"}
            icon={"material-symbols:chevron-right"}
          />
          <AddButton
            text={"Buy Now"}
            varient={"green"}
            icon={"material-symbols:chevron-right"}
          />
          <AddButton
            text={"Block Access"}
            varient={"red"}
            icon={"material-symbols:chevron-right"}
          />
        </>
      ),
      howToUse: `<AddButton text={"Add"} varient={"black"}  icon={"material-symbols:chevron-right"} />
      <AddButton text={"Buy Now"} varient={"green"}  />
      <AddButton text={"Block Access"} varient={"red"}  icon={"material-symbols:chevron-right"} />`,

      code: `import { Icon } from "@iconify/react";

      const AddButton = ({ text, varient, icon }) => {
        return (
          <button
            id={varient}
            className="px-[22px] py-3 rounded-[10px] w-full flex justify-center items-center gap-[10px]"
          >
            <p className="text-base text-white font-bold">{text}</p>
            {icon && <Icon className="text-white text-[22px]" icon={icon} />}
          </button>
        );
      };
      
      export default AddButton;`,
    },
    {
      name: "Upload Button",
      children: <UploadButton text={"Upload"} />,
      howToUse: `<UploadButton text={"Upload"} />`,
      code: `const UploadButton = ({ text }) => {
        return (
          <button className="py-3 px-[22px] bg-[#A4A4A4] rounded-[10px] w-full">
            <p className="text-[#FFF] text-base font-bold">{text}</p>
          </button>
        );
      };
      
      export default UploadButton;`,
    },
    {
      name: "Sucess Pending Button",
      children: (
        <>
          <SuccessPendingButton text={"Success"} bg={"success"} />
          <SuccessPendingButton text={"Pending"} bg={"pending"} />
          <SuccessPendingButton text={"Completed"} bg={"completed"} />
        </>
      ),
      howToUse: `<SuccessPendingButton text={"Success"} bg={"success"} />
      <SuccessPendingButton text={"Pending"} bg={"pending"} />
      <SuccessPendingButton text={"Completed"} bg={"completed"} />`,
      code: `const SuccessPendingButton = ({ bg, text }) => {
        return (
          <span id={bg} className="text-sm text-[#FFF] font-bold">
            {text}
          </span>
        );
      };
      
      export default SuccessPendingButton;`,
    },
    {
      name: "Outlet Button",
      children: <OutletButton text={"Cancel"} />,
      howToUse: `<OutletButton text={"Cancel"} />`,
      code: `export const OutletButton = ({ text }) => {
        return (
          <button
            style={{ border: "0.5px solid #030813" }}
            className="py-2 px-[22px] rounded-[10px] w-full"
          >
            <span className="font-normal text-base text-primaryColor">{text}</span>
          </button>
        );
      };`,
    },
    {
      name: "Outlet Btn",
      children: (
        <OutletBtn
          text={"Show Only Active Users"}
          icon={"iconamoon:arrow-down-2-fill"}
        />
      ),
      howToUse: `<OutletBtn
      text={"Show Only Active Users"}
      icon={"iconamoon:arrow-down-2-fill"}
    />`,
      code: `export const OutletBtn = ({ text, icon }) => {
        return (
          <button className="flex items-center gap-2 border border-primaryColor py-[6px] pl-3.5 pr-4 rounded-[10px]">
            <span className="font-secondaryFont text-primaryColor font-normal text-[14px]">
              {text}
            </span>
            <Icon icon={icon} />
          </button>
        );
      };`,
    },
    {
      name: "Edit Cancel Btn",
      children: (
        <>
          <EditBtns text={"Edit"} icon={"heroicons:pencil-solid"} />
          <CancelBtns text={"Cancel"} icon={"heroicons:pencil-solid"} />
        </>
      ),
      howToUse: `
      <EditBtns text={"Edit"} icon={"heroicons:pencil-solid"} />
          <CancelBtns text={"Cancel"} icon={"heroicons:pencil-solid"} />
    `,
      code: `
      export const EditBtns = ({ text, icon }) => {
        return (
          <button
            style={{ background: "rgba(3, 8, 19, 0.10)" }}
            className="py-[6px] pl-3.5 pr-4 rounded-[10px] flex items-center gap-2"
          >
            <Icon className="text-base text-primaryColor" icon={icon} />
            <span className="text-sm font-bold text-primaryColor">{text}</span>
          </button>
        );
      };
      
      export const CancelBtns = ({ text, icon }) => {
        return (
          <button
            style={{ background: "rgba(238, 80, 31, 0.10)" }}
            className="py-[6px] pl-3.5 pr-4 rounded-[10px] flex items-center gap-2"
          >
            <Icon className="text-[22px] text-[#EE501F]" icon={icon} />
            <span className="text-sm font-bold text-primaryColor">{text}</span>
          </button>
        );
      };`,
    },
    {
      name: "Marcos Btn",
      children: <MarcosBtn text={"Marcos"} icon={"vaadin:curly-brackets"} />,
      howToUse: `<MarcosBtn text={"Marcos"} icon={"vaadin:curly-brackets"} />`,
      code: `import { Icon } from "@iconify/react";

      export const MarcosBtn = ({ text, icon }) => {
        return (
          <button className="bg-primaryColor pl-4 pr-3.5 py-[6px] flex gap-2 rounded-[10px] justify-center items-center w-full">
            <span className="font-bold text-sm text-[#FFF]">{text}</span>
            <Icon className="text-[22px] text-[#FFF]" icon={icon} />
          </button>
        );
      };`,
    },
    {
      name: "Block Btn",
      children: (
        <BlockBtn text={"Block"} icon={"ion:lock-closed"} bg={"#F23B01"} />
      ),
      howToUse: `<BlockBtn text={"Block"} icon={"ion:lock-closed"} bg={"#F23B01"} />`,
      code: `export const BlockBtn = ({ text, icon, bg }) => {
        return (
          <button
            className={'pl-[22px] py-3 pr-3.5 bg-[${"bg"}] rounded-[10px] w-full flex gap-[10px] justify-center items-center'}
          >
            <span className="text-base font-bold text-[#FFF]">{text}</span>
            <Icon className="text-[22px] text-[#FFF]" icon={icon} />
          </button>
        );
      };`,
    },
    {
      name: "Active Btn",
      children: <GreenBtn text={"Active"} bg={"#4C9962"} />,
      howToUse: `<GreenBtn text={"Active"} bg={"#4C9962"} />`,
      code: `export const GreenBtn = ({ text, bg }) => {
        return (
          <button
            className={'bg-[${'bg'}] py-1 px-[10px] rounded-[5px] flex justify-center items-center h-[30px] w-full'}
          >
            <span className="text-[18px] text-[#FFF] font-normal">{text}</span>
          </button>
        );
      };`,
    },
    {
      name: "Previous Btn",
      children: <PreviousBtn text={"Active"} icon={"iconamoon:arrow-top-right-1"} />,
      howToUse: `<PreviousBtn text={"Active"} icon={"iconamoon:arrow-top-right-1"} />`,
      code: `export const PreviousBtn = ({ text, icon }) => {
        return (
          <button className="pl-3.5 pr-2 py-[3px] bg-[#DDDFE2] rounded-[10px] flex justify-center items-center gap-[2px] w-full">
            <span className="text-sm font-bold text-primaryColor">{text}</span>
            <Icon className="text-[22px] text-primaryColor" icon={icon} />
          </button>
        );
      };`,
    },
    {
      name: "Outline Small Btn",
      children: <OutlateSmall text={"Category name"} />,
      howToUse: `<OutlateSmall text={"Category name"} />`,
      code: `export const OutlateSmall = ({ text }) => {
        return (
          <span
            style={{ border: "0.5px solid #3A3A3A" }}
            className="text-[#3A3A3A] text-sm font-bold px-4 py-[6px] rounded-[10px]"
          >
            {text}
          </span>
        );
      };`,
    },
  ],
};
