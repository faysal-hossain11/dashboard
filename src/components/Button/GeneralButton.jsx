import { Icon } from "@iconify/react";

const GeneralButton = ({ text, icon }) => {
  return (
    <button className="flex items-center gap-2 border border-primaryColor py-3 px-[22px] rounded-[10px]">
      <span className="font-secondaryFont text-primaryColor font-bold text-[16px]">
        {text}
      </span>
      <Icon className="text-[22px]" icon={icon} />
    </button>
  );
};

export default GeneralButton;

export const OutletBtn = ({ text, icon }) => {
  return (
    <button className="flex items-center gap-2 border border-primaryColor py-[6px] pl-3.5 pr-4 rounded-[10px]">
      <span className="font-secondaryFont text-primaryColor font-normal text-[14px]">
        {text}
      </span>
      <Icon icon={icon} />
    </button>
  );
};

export const EditBtns = ({ text, icon }) => {
  return (
    <button
      style={{ background: "rgba(3, 8, 19, 0.10)" }}
      className="py-[6px] pl-3.5 pr-4 rounded-[10px] flex items-center gap-2"
    >
      <Icon className="text-base text-primaryColor" icon={icon} />
      <span className="text-sm font-bold text-primaryColor">{text}</span>
    </button>
  );
};

export const CancelBtns = ({ text, icon }) => {
  return (
    <button
      style={{ background: "rgba(238, 80, 31, 0.10)" }}
      className="py-[6px] pl-3.5 pr-4 rounded-[10px] flex items-center gap-2"
    >
      <Icon className="text-[22px] text-[#EE501F]" icon={icon} />
      <span className="text-sm font-bold text-primaryColor">{text}</span>
    </button>
  );
};
