import { Icon } from "@iconify/react";

const FilterButton = ({ text, icon }) => {
  return (
    <button className="flex items-center gap-[10px] p-3.5 bg-[#E2E3E4] rounded-[10px]">
      <Icon className="text-primaryColor text-5" icon={icon} />{" "}
      <span className="text-primaryColor text-base font-medium">{text}</span>
    </button>
  );
};
export default FilterButton;
