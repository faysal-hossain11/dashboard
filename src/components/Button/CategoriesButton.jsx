import { Icon } from "@iconify/react";

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

export default CategoriesButton;
