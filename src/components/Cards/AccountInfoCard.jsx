import { foodImg } from "../../lib/image";
import { GreenBtn } from "../Button/MarcosBtn";
import { MiddleHeader } from "../Headers/MiddleHeader";

export const AccountInfoCard = ({ heading, text, btn }) => {
  return (
    <div className="p-[10px]">
      <div className="flex gap-5">
        <MiddleHeader heading={heading} />
        {btn && (
          <div className="w-[74px]">
            <GreenBtn text={"Active"} bg={"#4C9962"} />
          </div>
        )}
      </div>
      <div className="flex gap-5 mt-5 items-center">
        <img className="w-[71px] h-11" src={foodImg} alt="Food Img" />
        <p className="text-[#6A6A6A] text-base font-normal">{text}</p>
      </div>
    </div>
  );
};
