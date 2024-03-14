import { Icon } from "@iconify/react";
import { BsArrowDownUp } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Headers } from "../../../components/Headers/Headers";
import BlackButton from "../../../components/Button/BlackButton";

const ManagePayout = () => {
  return (
    <div>
      <Headers text={{ heading: "Custom Payout" }}>
        <BlackButton text={"Add"} />
      </Headers>
      <div className="p-6 rounded-[10px] bg-white lg:mt-[60px] md:mt-10 mt-5">
        <div className="md:flex justify-between">
          <div className="flex items-center gap-6 justify-center mb-5 xl:mb-0">
            <div className="flex items-center gap-2 py-[10px] md:w-[360px] lg:w-[500px] bg-modalBg px-5 rounded-[10px]">
              <Icon icon="ic:outline-search" className="text-[#777]" />
              <input
                type="search"
                placeholder="Search ..."
                className=" bg-modalBg outline-none focus:outline-none w-full"
              />
            </div>
            <div>
              <BlackButton text={"Search"} />
            </div>
          </div>
          <div className="">
            <select
              name=""
              id=""
              className="py-2 w-[192px] outline-none focus:outline-none px-[10px] bg-modalBg rounded-[10px] mt-auto"
            >
              <option value="">Active Offer Only</option>
              <option value="">Active Offer Only</option>
              <option value="">Active Offer Only</option>
              <option value="">Active Offer Only</option>
            </select>
          </div>
        </div>
        <div className="mt-10 overflow-x-auto">
          <table className=" table-auto w-full">
            <thead>
              <tr className=" bg-primaryColor text-white text-left">
                <th>
                  <p className=" pl-3 w-[100px] py-3">Offer ID</p>
                </th>
                <th className="">
                  <p className="w-[80px] flex items-center gap-2  py-3">
                    Offer
                    <Icon icon="fluent:arrow-sort-16-filled" />
                  </p>
                </th>
                <th>
                  <p className="w-[80px] py-3">Event</p>
                </th>
                <th className="">
                  <p className="flex items-center gap-2  w-[110px] py-3">
                    Payout
                    <Icon icon="fluent:arrow-sort-16-filled" />
                  </p>
                </th>
                <th className="">
                  <p className="flex items-center gap-2  w-[180px] py-3">
                    Pending Ratio
                    <Icon icon="fluent:arrow-sort-16-filled" />
                  </p>
                </th>
                <th>
                  <p className="flex items-center gap-2 w-[240px] py-3">
                    Dynamic Rev/Share
                    <Icon icon="fluent:arrow-sort-16-filled" />
                  </p>
                </th>
                <th>
                  <p className="flex items-center gap-2 w-[100px] py-3">
                    Offer
                    <Icon icon="fluent:arrow-sort-16-filled" />
                  </p>
                </th>
                <th>
                  <p className="w-[100px] py-3">Caps</p>
                </th>
                <th className="">
                  <p className="flex items-center pr-3 gap-2  ">
                    Action
                    <Icon icon="fluent:arrow-sort-16-filled" />
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 pl-3">Kitkat</td>
                <td className="py-4">12:20 PM</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">No</td>
                <td className="py-4">No</td>
              </tr>
              <tr>
                <td className="py-4 pl-3">Kitkat</td>
                <td className="py-4">12:20 PM</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">No</td>
                <td className="py-4">No</td>
              </tr>
              <tr>
                <td className="py-4 pl-3">Kitkat</td>
                <td className="py-4">12:20 PM</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">No</td>
                <td className="py-4">No</td>
              </tr>
              <tr>
                <td className="py-4 pl-3">Kitkat</td>
                <td className="py-4">12:20 PM</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">No</td>
                <td className="py-4">No</td>
              </tr>
              <tr>
                <td className="py-4 pl-3">Kitkat</td>
                <td className="py-4">12:20 PM</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">No</td>
                <td className="py-4">No</td>
              </tr>
              <tr>
                <td className="py-4 pl-3">Kitkat</td>
                <td className="py-4">12:20 PM</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">Paid</td>
                <td className="py-4">No</td>
                <td className="py-4">No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="md:flex justify-between mt-[35px]">
        <div className=" basis-[33.3%]"></div>
        <div className="flex items-center justify-center gap-6 basis-[33.3%] mb-5 md:mb-0">
          <div>
            <button className="flex items-center gap-[10px] border-2 border-primaryColor rounded-[10px] font-secondaryFont text-primaryColor font-bold text-[16px] px-5 py-3">
              <FaAngleLeft />
              Previous
            </button>
          </div>
          <div>
            <button className=" bg-primaryColor text-white font-secondaryFont font-bold text-[16px] flex items-center gap-[10px] py-3 px-5 rounded-[10px]">
              Next
              <FaAngleRight />
            </button>
          </div>
        </div>
        <div className=" basis-[33.3%] flex items-center md:justify-end justify-center">
          <div className="flex items-center gap-[15px]">
            <p className=" font-primaryFont text-[14px] text-primaryColor font-normal">
              Page
            </p>
            <button className="flex items-center gap-1 border-2 border-primaryColor py-[10px] px-[14px] rounded-[10px]">
              2<BsArrowDownUp />
            </button>
            <p className=" font-primaryFont text-[14px] text-primaryColor font-normal">
              of 10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePayout;
