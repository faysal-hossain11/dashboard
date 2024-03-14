import { Icon } from "@iconify/react";

const BlackButton = ({ text, icon, contentReverse }) => {
  return (
    <button
      className={`flex items-center gap-[8px] py-3 pr-[22px] pl-[14px] bg-primaryColor rounded-[10px] ${
        contentReverse && "flex-row-reverse"
      }`}
    >
      <Icon className="text-[#FFFFFF] text-[22px]" icon={icon} />{" "}
      <span className="text-[#FFF] text-base font-medium">{text}</span>
    </button>
  );
};
export default BlackButton;
