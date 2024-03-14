import { Icon } from "@iconify/react";

const ReportBlackButton = ({ text, icon }) => {
  return (
    <button className="flex justify-center py-[6px] rounded-[10px] pl-5 pr-3.5 gap-[8px] bg-primaryColor">
      <h3 className="font-secondaryFont text-[14px] text-[#FFFFFF] font-bold flex items-center justify-center">
        {text}
      </h3>
      <Icon className="text-[#FFFFFF] text-[22px]" icon={icon} />
    </button>
  );
};

export default ReportBlackButton;
