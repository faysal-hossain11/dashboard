import { Icon } from "@iconify/react";
import AddButton from "../Button/AddButton";
import OutletButton from "../Button/OutletButton";

export const DeleteModal = ({ heading, text, icon }) => {
  return (
    <div>
      {icon && (
        <div className="flex justify-center">
          <div
            style={{ border: "3px solid #F23B01" }}
            className="p-5 rounded-[50px] w-[80px] h-[80px] flex justify-center items-center"
          >
            <Icon className="text-[#F23B01] text-[50px]" icon={icon} />
          </div>
        </div>
      )}
      {heading && (
        <h1 className="text-2xl font-semibold text-[#000] mt-5 text-center">
          {heading}
        </h1>
      )}
      {text && (
        <p className="text-[18px] font-normal text-[#3F3F3F] mt-[10px] text-center max-[576px]:text-base">
          {text}
        </p>
      )}
      <div className="mt-10 flex gap-[21px] max-[576px]:flex-col max-[576px]:gap-4 max-[576px]:mt-5">
        <AddButton text={"Delete"} varient={"black"} />
        <OutletButton text={"Cancel"} />
      </div>
    </div>
  );
};