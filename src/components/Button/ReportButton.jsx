import { Icon } from "@iconify/react";

const ReportButton = ({ text, icon, contentReverse }) => {
  return (
    <button
      className={`flex justify-center py-[6px] rounded-[10px] pl-4 pr-3.5 gap-[8px] bg-[#A4A4A4] ${
        contentReverse && "flex-row-reverse"
      }`}
    >
      <h3 className=" font-secondaryFont text-[14px] text-white font-bold flex items-center justify-center">
        {text}
      </h3>
      <Icon className="text-[#FFFFFF] text-[22px]" icon={icon} />
    </button>
  );
};

export default ReportButton;
