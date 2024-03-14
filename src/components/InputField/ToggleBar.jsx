import { Icon } from "@iconify/react";
import { useState } from "react";

export const ToggleBar = ({ heading }) => {
  const [click, setClick] = useState(false);
  return (
    <div className="flex justify-between items-center bg-[#FFF] p-5 rounded-[10px] h-[66px]">
      <p
        className={`text-base ${
          click ? "text-[#6A6A6A]" : "text-primaryColor"
        } font-normal`}
      >
        {heading}
      </p>
      <div className="w-[46px] h-[26px]" onClick={() => setClick(!click)}>
        <Icon
          className={`${
            click ? "text-[#A4A4A4]" : "text-[#030813]"
          }  cursor-pointer ${click ? "rotate-180" : ""} w-full h-full`}
          icon="ion:switch"
        />
      </div>
    </div>
  );
};
