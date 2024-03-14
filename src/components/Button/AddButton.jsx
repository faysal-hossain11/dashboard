import { Icon } from "@iconify/react";

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

export default AddButton;
