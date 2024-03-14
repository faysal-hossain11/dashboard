import { Icon } from "@iconify/react";
import {
  MiddleHeader,
  Paragraph,
} from "../../../components/Headers/MiddleHeader";
import { offerDetailsImg } from "../../../lib/image";
import AddButton from "../../../components/Button/AddButton";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

const OffersDetails = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between md:gap-2 gap-5">
        <div className="md:flex gap-5 items-center">
          <img
            className="w-[235px] h-[160px] md:mx-0 mx-auto"
            src={offerDetailsImg}
            alt="Offer Details Img"
          />
          <div className="flex flex-col gap-5 md:mt-0 mt-5">
            <div className="flex flex-wrap gap-5 items-center">
              <MiddleHeader
                heading={"#1 SweepstakesADay - Win $5,000 - One Field ID"}
              />
              <button
                style={{ background: "rgba(76, 153, 98, 0.20)" }}
                className="px-5 py-[7px] rounded-[10px]"
              >
                <span className="text-[#1DD752] text-sm font-medium">
                  Active
                </span>
              </button>
            </div>
            <div className="flex gap-5">
              <Paragraph text={"By"} color={"#3F3F3F"} />
              <Paragraph text={"Affiliate name"} color={"#030813"} />
            </div>
            <div className="flex gap-5 items-center">
              <Icon className="text-5 text-[#F23B01]" icon="ph:warning-light" />
              <span className="text-[18px] font-normal text-[#F23B01]">
                Expire in 1 day
              </span>
            </div>
          </div>
        </div>
        <div className="w-[239px]">
          <AddButton
            text={"Change Status"}
            varient={"black"}
            icon={"ion:reload-circle-sharp"}
          />
        </div>
      </div>
      <div className="mt-10 xl:flex gap-[25px]">
        <div className="xl:w-1/2">
          <LeftSide />
        </div>
        <div className="xl:w-1/2 xl:mt-0 mt-6">
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default OffersDetails;
