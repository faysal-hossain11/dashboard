import { Icon } from "@iconify/react";
import { Headers } from "../../../components/Headers/Headers";
import AddButton from "../../../components/Button/AddButton";

const AddNewCustomPayout = () => {
  return (
    <div>
      <div className="lg:mb-[50px] md:mb-10 mb-5">
        <Headers text={{ heading: "New Custom Payout & Caps" }}></Headers>
      </div>
      <div className="py-[30px] px-[30px] md:py-[50px] md:px-[70px] lg:py-[60px] lg:px-[136px] rounded-[15px] bg-white m-auto lg:max-w-[1024px] md:max-w-[760px] max-w-[500px]">
        <div className="mb-[60px]">
          <h4 className="text-center font-primaryFont text-primaryColor font-medium text-[24px]">
            New Custom payout
          </h4>
        </div>
        <div className="mb-6">
          <div className="mb-2">
            <label
              htmlFor=""
              className=" font-primaryFont text-primaryColor text-[16px] font-normal"
            >
              Select Affiliate(s) *
            </label>
          </div>
          <select
            name=""
            id=""
            className=" outline-none focus:outline-none w-full py-3 px-4 bg-modalBg rounded-[10px] text-[#6A6A6A] font-primaryFont text-[16px]"
          >
            <option value="">Future Innovation</option>
            <option value="">Future Innovation</option>
            <option value="">Future Innovation</option>
          </select>
        </div>
        <div className="mb-6">
          <div className="mb-2">
            <label
              htmlFor=""
              className=" font-primaryFont text-primaryColor text-[16px] font-normal"
            >
              Offer *
            </label>
          </div>
          <select
            name=""
            id=""
            className=" outline-none focus:outline-none w-full py-3 px-4 bg-modalBg rounded-[10px] text-[#6A6A6A] font-primaryFont text-[16px]"
          >
            <option value="">Future Innovation</option>
            <option value="">Future Innovation</option>
            <option value="">Future Innovation</option>
            <option value="">Future Innovation</option>
          </select>
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            <p className=" font-primaryFont text-primaryColor font-normal text-[16px]">
              Payout per Conversion
            </p>
            <div className="flex gap-[10px]">
              <button className="py-3 px-5 bg-modalBg">USD</button>
              <p className="text-[#3A3A3A] font-primaryFont text-[12px]">
                The payout you would like Future innovation to receive. Leave
                empty for default.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            <p className=" font-primaryFont text-primaryColor font-normal text-[16px]">
              Payout per Conversion
            </p>
            <div className="flex gap-[10px]">
              <button className="py-3 px-5 bg-modalBg">USD</button>
              <p className="text-[#3A3A3A] font-primaryFont text-[12px]">
                The payout you would like Future innovation to receive. Leave
                empty for default.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="mb-2 ">
            <label
              htmlFor=""
              className="flex gap-2 items-center font-primaryFont text-primaryColor text-[16px] font-normal"
            >
              Manual Approval Ratio
              <Icon icon="raphael:question" className="text-[#A4A4A4]" />
            </label>
          </div>
          <select
            name=""
            id=""
            className=" outline-none focus:outline-none w-full py-3 px-4 border border-[#3F3F3F] rounded-[10px] text-[#6A6A6A] font-primaryFont text-[16px]"
          >
            <option value="">Disabled (0%)</option>
            <option value="">Future Innovation</option>
            <option value="">Future Innovation</option>
          </select>
        </div>
        <div className="grid md:grid-cols-2 mb-10">
          <div>
            <p>Revenue Share for Dynamic Payout (Optional)</p>
          </div>
          <div>
            <button className="py-3 px-4 bg-modalBg rounded-[10px]">%</button>
          </div>
        </div>
        <div className="max-w-[264px] mx-auto">
          <AddButton text={"Add"} varient={"black"} />
        </div>
      </div>
    </div>
  );
};

export default AddNewCustomPayout;
