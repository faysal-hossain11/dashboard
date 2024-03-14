import { Icon } from "@iconify/react";
import { useState } from "react";

const ConverionStatsDropdown = () => {
  const [value, setValue] = useState(1);

  const handleClick = (id) => {
    setValue(id);
  };
  return (
    <div className="flex mt-5 max-[767px]:flex-col">
      <div className="bg-primaryColor px-3 py-[30px] rounded-[10px] w-[200px] max-[767px]:w-full">
        <ul className="flex flex-col gap-[10px]">
          <li
            onClick={() => handleClick(1)}
            className={`flex gap-5 items-center ${
              value === 1 ? "bg-modalBg" : "bg-transparent"
            } py-2.5 px-5 cursor-pointer rounded-[10px]`}
          >
            <Icon
              className={`w-5 h-5 ${
                value === 1 ? "text-primaryColor" : "text-[#A4A4A4]"
              }`}
              icon="ic:sharp-plus"
            />
            <span
              className={`text-xs font-medium ${
                value === 1 ? "text-primaryColor" : "text-[#A4A4A4]"
              }`}
            >
              Data
            </span>
          </li>
          <li
            onClick={() => handleClick(2)}
            className={`flex gap-5 items-center ${
              value === 2 ? "bg-modalBg" : "bg-transparent"
            } py-2.5 px-5 cursor-pointer rounded-[10px]`}
          >
            <Icon
              className={`w-5 h-5 ${
                value === 2 ? "text-primaryColor" : "text-[#A4A4A4]"
              }`}
              icon="ion:filter-outline"
            />
            <span
              className={`text-xs font-medium ${
                value === 2 ? "text-primaryColor" : "text-[#A4A4A4]"
              }`}
            >
              Filter By
            </span>
          </li>
          <li
            onClick={() => handleClick(3)}
            className={`flex gap-5 items-center ${
              value === 3 ? "bg-modalBg" : "bg-transparent"
            } py-2.5 px-5 cursor-pointer rounded-[10px]`}
          >
            <Icon
              className={`w-5 h-5 ${
                value === 3 ? "text-primaryColor" : "text-[#A4A4A4]"
              }`}
              icon="ion:stopwatch-sharp"
            />
            <span
              className={`text-xs font-medium ${
                value === 3 ? "text-primaryColor" : "text-[#A4A4A4]"
              }`}
            >
              Timezone
            </span>
          </li>
        </ul>
      </div>
      {/* tab 1 */}
      <div className={value === 1 ? "block" : "hidden"}>
        <div className="grid grid-cols-3 max-[992px]:grid-cols-2 max-[576px]:grid-cols-1 gap-5 max-[767px]:px-0 p-[30px] max-[767px]:py-5">
          <div className="flex flex-col gap-[10px]">
            <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Offer
              </label>
            </div>
            <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Offer ID
              </label>
            </div>
            <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Offer URL
              </label>
            </div>
            <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Event
              </label>
            </div>
            <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Goal/Event ID
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Affiliate
              </label>
            </div>
            <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Affiliate ID
              </label>
            </div>
            <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Advertiser Manager
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Affiliate
              </label>
            </div>
            <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Affiliate ID
              </label>
            </div>
            <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Affiliate Manager
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* tab 2 */}
      <div className={value === 2 ? "block" : "hidden"}>
        <div className="grid grid-cols-3 max-[992px]:grid-cols-2 max-[576px]:grid-cols-1 gap-5 max-[767px]:px-0 p-[30px] max-[767px]:py-5">
          <div className="flex flex-col gap-[10px]">
            <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Advertiser Manager
              </label>
            </div>
            <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Affiliate Manager
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Affiliate
              </label>
            </div>
            <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Offer Event
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Offer
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* tab 3 */}
      <div className={value === 3 ? "block" : "hidden"}>
        <div className="flex gap-[55px] max-[992px]:gap-5 max-[992px]:flex-col p-[30px] max-[767px]:px-0 max-[767px]:py-5">
          <div>
            <label className="font-medium text-primaryColor text-sm">
              Report Timezone
            </label>
            <select
              style={{ border: "0.5px solid #DDDFE2" }}
              className="px-4 py-[9px] mt-5 max-[576px]:mt-2 w-[281px] max-[1200px]:w-full rounded-[10px] bg-white block"
              name=""
              id=""
            >
              <option value="">( UTC+00:00 ) UTC</option>
              <option value="">( UTC+00:00 ) UTC</option>
            </select>
          </div>

          <div className="">
            <label className="font-medium text-primaryColor text-sm">
              Report Timezone
            </label>
            <select
              style={{ border: "0.5px solid #DDDFE2" }}
              className="px-4 py-[9px] mt-5 max-[576px]:mt-2 w-[366px] max-[1200px]:w-full rounded-[10px] bg-white block"
              name=""
              id=""
            >
              <option value="">Approved + + Rejected Revenue</option>
              <option value="">Approved + + Rejected Revenue</option>
            </select>
            <p className="font-medium text-tableColor text-sm pt-[11px] pl-4">
              Report Timezone
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConverionStatsDropdown;
