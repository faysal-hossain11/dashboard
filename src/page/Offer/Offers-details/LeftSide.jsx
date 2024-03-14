import { Icon } from "@iconify/react";
import { SmallHeader } from "../../../components/Headers/MiddleHeader";
import { CheckboxInput } from "../../../components/InputField/CheckboxInput";
import {
  OutlateSmall,
  PreviousBtn,
} from "../../../components/Button/MarcosBtn";

const LeftSide = () => {
  return (
    <div className="bg-[#FFF] rounded-[10px] sm:p-5 p-2">
      <div>
        <SmallHeader heading={"Preview"} />
        <div className="flex flex-wrap gap-2 items-center justify-between mt-2.5 mb-4">
          <p className="text-sm text[#7A7A7A] font-normal">
            http://www.thedailysweepstakes.com/Flow.aspx..
          </p>
          <div>
            <PreviousBtn
              text={"Previous URL"}
              icon={"iconamoon:arrow-top-right-1"}
            />
          </div>
        </div>
        <hr className="w-full h-[0.5px] bg-[#A4A4A4]" />
      </div>
      <div className="flex flex-col gap-2.5 py-4">
        <SmallHeader heading={"Category"} />
        <OutlateSmall text={"Category name"} />
      </div>
      <hr className="w-full h-[0.5px] bg-[#A4A4A4]" />
      <div className="flex flex-col gap-2.5 py-4">
        <SmallHeader heading={"Postback Tracking Protocol"} />
        <p className="text-sm text-[#7A7A7A] font-normal">
          Server Postback (S2S)
        </p>
      </div>
      <hr className="w-full h-[0.5px] bg-[#A4A4A4]" />
      <div className="flex flex-col gap-2.5 py-4">
        <SmallHeader heading={"Expiry Date"} />
        <div className="flex gap-[6px] items-center">
          <Icon
            className="text-xl text-[#3F3F3F]"
            icon="ion:calendar-clear-outline"
          />
          <p className="text-sm text-[#3F3F3F] font-normal">21-09-2023</p>
        </div>
      </div>
      <hr className="w-full h-[0.5px] bg-[#A4A4A4]" />
      <div className="flex flex-wrap gap-10 py-4">
        <CheckboxInput label={"No Caps"} id={"1"} />
        <CheckboxInput label={"Available for All Affiliates"} id={"2"} />
      </div>
      <div className="flex flex-col gap-2.5">
        <SmallHeader heading={"Description"} />
        <p className="text-[#7A7A7A] text-sm font-normal">
          Users can enter their email for a chance at $5,000 cash!No pop traffic
          can be sent directly to the merchant&apos;s lander. If you are sending
          pop traffic please submit a prelander for approval. Pop traffic must
          negative match Abt.comThere is a cap of 300/day per publisher. No new
          pubs can go live on the weekend, or increase traffic without seeking
          permission from your Affiliate Manager beforehand.No YouTube traffic
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
