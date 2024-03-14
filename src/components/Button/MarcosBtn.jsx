import { Icon } from "@iconify/react";

export const MarcosBtn = ({ text, icon }) => {
  return (
    <button className="bg-primaryColor pl-4 pr-3.5 py-[6px] flex gap-2 rounded-[10px] justify-center items-center w-full">
      <span className="font-bold text-sm text-[#FFF]">{text}</span>
      <Icon className="text-[22px] text-[#FFF]" icon={icon} />
    </button>
  );
};

export const BlockBtn = ({ text, icon, bg }) => {
  return (
    <button
      className={`pl-[22px] py-3 pr-3.5 bg-[${bg}] rounded-[10px] w-full flex gap-[10px] justify-center items-center`}
    >
      <span className="text-base font-bold text-[#FFF]">{text}</span>
      <Icon className="text-[22px] text-[#FFF]" icon={icon} />
    </button>
  );
};

export const GreenBtn = ({ text, bg }) => {
  return (
    <button
      className={`bg-[${bg}] py-1 px-[10px] rounded-[5px] flex justify-center items-center h-[30px] w-full`}
    >
      <span className="text-[18px] text-[#FFF] font-normal">{text}</span>
    </button>
  );
};

export const PreviousBtn = ({ text, icon }) => {
  return (
    <button className="pl-3.5 pr-2 py-[3px] bg-[#DDDFE2] rounded-[10px] flex justify-center items-center gap-[2px] w-full">
      <span className="text-sm font-bold text-primaryColor">{text}</span>
      <Icon className="text-[22px] text-primaryColor" icon={icon} />
    </button>
  );
};

export const OutlateSmall = ({ text }) => {
  return (
    <span
      style={{ border: "0.5px solid #3A3A3A" }}
      className="text-[#3A3A3A] text-sm font-bold px-4 py-[6px] rounded-[10px] w-fit"
    >
      {text}
    </span>
  );
};