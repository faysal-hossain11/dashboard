import { Icon } from "@iconify/react";
import { useState } from "react";

const ReferralDropdown = () => {
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
            className={`flex gap-[10px] items-center ${
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
            className={`flex gap-[10px] items-center ${
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
            className={`flex gap-[10px] items-center ${
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
              Report Duration
            </span>
          </li>
        </ul>
      </div>
      {/* tab 1 */}
      <div className={value === 1 ? "block" : "hidden"}>
        <div className="grid grid-cols-3 max-[992px]:grid-cols-2 max-[576px]:grid-cols-1 gap-x-5 gap-y-[10px] max-[767px]:px-0 py-[30px] max-[767px]:py-5 pl-[30px] pr-[37px]">
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
              Referral
            </label>
          </div>
          <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
            <label className="custom-checkbox">
              <input type="checkbox" />
              <span className="checkbox-icon">+</span>
              Affiliate Total Profit
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
              Referral ID
            </label>
          </div>
          <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
            <label className="custom-checkbox">
              <input type="checkbox" />
              <span className="checkbox-icon">+</span>
              Commission
            </label>
          </div>
          <div className="px-[10px] py-[6px] w-[406px] max-[1360px]:w-full h-[33px]">
            <label className="custom-checkbox">
              <input type="checkbox" />
              <span className="checkbox-icon">+</span>
              Affiliate Status
            </label>
          </div>
        </div>
      </div>
      {/* tab 2 */}
      <div className={value === 2 ? "block" : "hidden"}>
        <div className="p-[30px] max-[767px]:px-0 max-[767px]:py-5">
          <div className="grid grid-cols-3 max-[992px]:grid-cols-2 max-[576px]:grid-cols-1 gap-y-3.5 gap-x-[10px]">
            <div className="px-[10px] py-[6px] w-[300px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Affiliate
              </label>
            </div>
            <div className="px-[10px] py-[6px] w-[300px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Affiliate Manager
              </label>
            </div>
            <div className="px-[10px] py-[6px] w-[300px] max-[1360px]:w-full h-[33px]">
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkbox-icon">+</span>
                Affiliate Status
              </label>
            </div>
          </div>
          <div className="mt-3.5 w-[300px] max-[767px]:w-full">
            <select
              style={{ border: "0.5px solid #DDDFE2" }}
              className="py-[8.5px] px-4 w-full rounded-[10px] bg-white block"
              name=""
              id=""
            >
              <option value="">Affiliates name</option>
              <option value="">Affiliates name</option>
            </select>
          </div>
        </div>
      </div>
      {/* tab 3 */}
      <div className={value === 3 ? "block" : "hidden"}>
        <div className="p-[30px] max-[767px]:px-0 max-[767px]:py-5">
          <label className="font-medium text-primaryColor text-sm">
            Report Timezone
          </label>
          <select
            style={{ border: "0.5px solid #DDDFE2" }}
            className="px-4 py-[8px] mt-5 w-[220px] max-[767px]:w-full rounded-[10px] bg-white block"
            name=""
            id=""
          >
            <option value="">Daily</option>
            <option value="">Daily</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ReferralDropdown;
