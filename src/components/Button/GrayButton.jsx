import { Icon } from "@iconify/react";

const GrayButton = ({ icon }) => {
  return (
    <button className="p-[14px] bg-[#F5F5F5] rounded-[10px]">
      <Icon icon={icon} className="text-[20px]" />
    </button>
  );
};

export default GrayButton;
