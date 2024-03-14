import { Icon } from "@iconify/react";

const ImportButton = ({ text, icon }) => {
  return (
    <button className="flex items-center gap-[10px] pl-[22px] py-3 pr-3.5 bg-[#FFF] rounded-[10px]">
      <span className="text-primaryColor text-base font-medium">{text}</span>
      <Icon className="text-primaryColor text-[22px]" icon={icon} />
    </button>
  );
};

export default ImportButton;
