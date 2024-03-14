import { Icon } from "@iconify/react";
const OfferButton = ({ icon, text }) => {
  return (
    <button className="flex items-center gap-[10px] py-3 pr-[22px] pl-[14px] bg-primaryColor rounded-[10px]">
      <span className="text-[#FFF] text-base font-medium">{text}</span>
      <Icon className="text-[#FFFFFF] text-[22px]" icon={icon} />{" "}
    </button>
  );
};

export default OfferButton;
