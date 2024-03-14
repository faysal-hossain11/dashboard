import { Icon } from "@iconify/react";

const EditButton = ({ icon, text }) => {
  return (
    <button className="py-[6px] pl-[9px] pr-[11px] bg-primaryColor rounded-[10px] flex gap-2 items-center">
      <Icon className="text-[#FFFFFF] text-[16.5px]" icon={icon} />
      <span className="text-[#FFF] text-sm font-bold">{text}</span>
    </button>
  );
};

export default EditButton;