import { Icon } from "@iconify/react";
import { useState } from "react";
import DownloadTable from "../../../components/Reports/Table-Feature/DownloadTable";
import { Headers } from "../../../components/Headers/Headers";
import GeneralButton from "../../../components/Button/GeneralButton";
import GrayButton from "../../../components/Button/GrayButton";
import ReportButton from "../../../components/Button/ReportButton";

const ConversionReport = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown((current) => !current);
  };
  const [value, setValue] = useState(1);

  const handleChange = (id) => {
    setValue(id);
  };

  return (
    <div>
      <div>
        <div className="xl:mb-[60px] md:mb-10 mb-5">
          <Headers text={{ heading: "Conversions Report" }}>
            <div onClick={handleClick}>
              <GeneralButton
                text={"Report Options"}
                icon={"iconamoon:arrow-down-2-fill"}
              />
            </div>
          </Headers>
        </div>
        <div>
          {isShown && (
            <div className="">
              <div className="md:flex shadow-lg shadow-[#F5F5F5] bg-white p-2 rounded-[10px] w-full">
                <div className="bg-primaryColor px-3 py-[30px] rounded-[10px] w-full md:w-[200px]">
                  <ul>
                    <li
                      onClick={() => handleChange(1)}
                      className={`flex gap-[10px] items-center ${
                        value === 1 ? "bg-white" : "bg-transparent"
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
                        Fields
                      </span>
                    </li>
                    <li
                      onClick={() => handleChange(2)}
                      className={`flex gap-[10px] items-center ${
                        value === 2 ? "bg-white" : "bg-transparent"
                      } py-2.5 px-5 cursor-pointer rounded-[10px]`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          value === 2 ? "text-primaryColor" : "text-[#A4A4A4]"
                        }`}
                        icon="octicon:filter-16"
                      />
                      <span
                        className={`text-xs font-medium ${
                          value === 2 ? "text-primaryColor" : "text-[#A4A4A4]"
                        }`}
                      >
                        Filter
                      </span>
                    </li>
                    <li
                      onClick={() => handleChange(3)}
                      className={`flex gap-[10px] items-center ${
                        value === 3 ? "bg-white" : "bg-transparent"
                      } py-2.5 px-5 cursor-pointer rounded-[10px]`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          value === 3 ? "text-primaryColor" : "text-[#A4A4A4]"
                        }`}
                        icon="ic:outline-search"
                      />
                      <span
                        className={`text-xs font-medium ${
                          value === 3 ? "text-primaryColor" : "text-[#A4A4A4]"
                        }`}
                      >
                        Search
                      </span>
                    </li>
                    <li
                      onClick={() => handleChange(4)}
                      className={`flex gap-[10px] items-center ${
                        value === 4 ? "bg-white" : "bg-transparent"
                      } py-2.5 px-5 cursor-pointer rounded-[10px]`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          value === 4 ? "text-primaryColor" : "text-[#A4A4A4]"
                        }`}
                        icon="ion:stopwatch"
                      />
                      <span
                        className={`text-xs font-medium ${
                          value === 4 ? "text-primaryColor" : "text-[#A4A4A4]"
                        }`}
                      >
                        Timezone
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className={value === 1 ? "block" : "hidden"}>
                    <div className="p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[50px]">
                      <div>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Affiliate
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Affiliate ID
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Affiliate Manager
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Affiliate Sub ID 1
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Affiliate Sub ID 2
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Affiliate Sub ID 3
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Affiliate Sub ID 4
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Affiliate Sub ID 5
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Sale Amount
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Date/Time
                        </label>
                      </div>
                      <div>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Country
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Source ID
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Device
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Platform
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Browser
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Referrer
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Payout
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Revenue
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Session Date/Time
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Date/Time Diff
                        </label>
                      </div>
                      <div>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Offer
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Offer ID
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Offer Reference ID
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Goal/Event
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Goal/Event ID
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Status
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Session IP
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Conversion IP
                        </label>
                      </div>
                      <div>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Advertiser
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Advertiser ID
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Advertiser Manager
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Advertiser Sub ID 1
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Advertiser Sub ID 2
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Advertiser Sub ID 3
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Status Message
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Fraud Score
                        </label>
                        <label className="custom-checkbox mb-5">
                          <input type="checkbox" />
                          <span className="checkbox-icon">+</span>
                          Currency
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className={value === 2 ? "block" : "hidden"}>
                    <div>
                      <div className="p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[100px]">
                        <div>
                          <label className="custom-checkbox mb-5">
                            <input type="checkbox" />
                            <span className="checkbox-icon">+</span>
                            Offers
                          </label>
                          <label className="custom-checkbox mb-5">
                            <input type="checkbox" />
                            <span className="checkbox-icon">+</span>
                            Status
                          </label>
                        </div>
                        <div>
                          <label className="custom-checkbox mb-5">
                            <input type="checkbox" />
                            <span className="checkbox-icon">+</span>
                            Advertiser
                          </label>
                          <label className="custom-checkbox mb-5">
                            <input type="checkbox" />
                            <span className="checkbox-icon">+</span>
                            Country
                          </label>
                        </div>
                        <div>
                          <label className="custom-checkbox mb-5">
                            <input type="checkbox" />
                            <span className="checkbox-icon">+</span>
                            Affiliate
                          </label>
                          <label className="custom-checkbox mb-5">
                            <input type="checkbox" />
                            <span className="checkbox-icon">+</span>
                            Adjustment
                          </label>
                        </div>
                        <div>
                          <label className="custom-checkbox mb-5">
                            <input type="checkbox" />
                            <span className="checkbox-icon">+</span>
                            Goal/Event
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={value === 3 ? "block" : "hidden"}>
                    <div>
                      <div className="p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[100px]">
                        <div>
                          <select
                            name=""
                            id=""
                            className=" text-[#6A6A6A] font-primaryFont font-normal text-[14px] py-[10px] pl-[10px] pr-[60px] bg-[#F5F5F5] outline-none focus:outline-none rounded-[10px]"
                          >
                            <option value="">Conversion IP</option>
                            <option value="">Click ID</option>
                            <option value="">Source</option>
                            <option value="">Affiliate Sub ID 1</option>
                            <option value="">Affiliate Sub ID 2</option>
                            <option value="">Affiliate Sub ID 3</option>
                            <option value="">Affiliate Sub ID 4</option>
                            <option value="">Affiliate Sub ID 5</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={value === 4 ? "block" : "hidden"}>
                    <div className="p-10">
                      <div>
                        <h3 className=" fontprimaryFont text-primaryColor font-medium text-[14px] mb-5">
                          Report Timezone
                        </h3>
                      </div>
                      <div>
                        <select
                          name=""
                          id=""
                          className=" text-[#6A6A6A] font-primaryFont font-normal text-[14px] py-[10px] pl-[10px] pr-[60px] bg-[#F5F5F5] outline-none focus:outline-none rounded-[10px]"
                        >
                          <option value="">( UTC+00:00 ) UTC</option>
                          <option value="">( UTC+00:00 ) UTC</option>
                          <option value="">( UTC+00:00 ) UTC</option>
                          <option value="">( UTC+00:00 ) UTC</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-white p-5 rounded-[15px] mt-[40px] ">
        <div className="md:flex items-center justify-between">
          <div className="flex gap-[10px] md:justify-start justify-center md:mb-0 mb-6">
            <GrayButton icon={"solar:copy-bold"} />
            <GrayButton icon={"ion:analytics-sharp"} />
            <DownloadTable />
          </div>
          <div>
            <div className=" md:flex justify-center items-center gap-5">
              <p className="flex mb-5 md:mb-0 md:justify-start items-center gap-2 py-[6px] px-4 rounded-[10px] border border-primaryColor w-[230px] justify-center">
                <Icon icon="uis:calender" />
                02.06.2022 - 25.09.2023
              </p>
              <ReportButton text={"Generate Report"} icon={"ion:rocket"} />
            </div>
          </div>
        </div>
        <div className="md:flex justify-center md:justify-between mt-5">
          <div>
            <h4 className=" font-primaryFont text-primaryColor font-medium text-[20px] mb-5 text-center md:text-left mt-5 md:mt-0">
              1-50 from 200 Conversions
            </h4>
          </div>
          <div className="flex items-center gap-[13px] justify-center mb-5">
            <button className="flex items-center gap-2 py-[6px] px-4 rounded-[10px] bg-[#1DD752] text-white font-secondaryFont text-[14px] font-bold">
              <Icon
                icon="ph:check-light"
                className="w-[22px] h-[22px] font-bold"
              />
              Approve
            </button>
            <button className="flex items-center gap-2 py-[6px] px-4 rounded-[10px] bg-[#EE501F] text-white font-secondaryFont text-[14px] font-bold">
              <Icon
                icon="material-symbols:close"
                className="w-[22px] h-[22px] font-bold"
              />
              Reject
            </button>
          </div>
        </div>
        <div>
          <div className=" overflow-x-auto">
            <table className=" w-full table-auto mb-10">
              <thead>
                <tr className=" bg-primaryColor text-white">
                  <th className="text-left pr-[80px] pl-2">Date & Time</th>
                  <th className="pr-[80px]">Affiliate Name</th>
                  <th className="pr-[80px]">Offer name</th>
                  <th className="pr-[80px]">Event</th>
                  <th className="pr-[80px]">Status</th>
                  <th className="pr-[80px]">Status Message</th>
                  <th className="pr-[80px]">Fraud Chance</th>
                  <th className="pr-[80px]">Payout</th>
                  <th className="pr-[80px]">Revenue</th>
                  <th className="pr-[80px]">Sale Ammount</th>
                  <th className="pr-[80px]">conversion IP</th>
                  <th className="pr-2">Click ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="flex items-center gap-2 pt-4 pl-2">
                    <Icon icon="mdi:checkbox-outline" />
                    2023-05-08
                  </td>
                  <td className="pt-4">Mahedi</td>
                  <td className="pt-4">Offer Name 01</td>
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">
                    <p className=" bg-primaryColor w-[80px] text-center text-white py-1 px-[10px] rounded-[30px]">
                      Active
                    </p>
                  </td>
                  <td className="pt-4">22</td>
                  <td className="pt-4">
                    <p className="w-[40px] bg-primaryColor text-white text-center rounded-[30px] py-1 px-[10px]">
                      0%
                    </p>
                  </td>
                  <td className="pt-4">$8.00</td>
                  <td className="pt-4">$8.00</td>
                  <td className="pt-4">$2.00</td>
                  <td className="pt-4">XXX.XXX.x.xxx</td>
                  <td className="pt-4">01</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-2 pt-4 pl-2">
                    <Icon icon="mdi:checkbox-outline" />
                    2023-05-08
                  </td>
                  <td className="pt-4">Mahedi</td>
                  <td className="pt-4">Offer Name 01</td>
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">
                    <p className=" bg-primaryColor w-[80px] text-center text-white py-1 px-[10px] rounded-[30px]">
                      Active
                    </p>
                  </td>
                  <td className="pt-4">22</td>
                  <td className="pt-4">
                    <p className="w-[40px] bg-primaryColor text-white text-center rounded-[30px] py-1 px-[10px]">
                      0%
                    </p>
                  </td>
                  <td className="pt-4">$8.00</td>
                  <td className="pt-4">$8.00</td>
                  <td className="pt-4">$2.00</td>
                  <td className="pt-4">XXX.XXX.x.xxx</td>
                  <td className="pt-4">01</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-2 pt-4 pl-2">
                    <Icon icon="mdi:checkbox-outline" />
                    2023-05-08
                  </td>
                  <td className="pt-4">Mahedi</td>
                  <td className="pt-4">Offer Name 01</td>
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">
                    <p className=" bg-primaryColor w-[80px] text-center text-white py-1 px-[10px] rounded-[30px]">
                      Active
                    </p>
                  </td>
                  <td className="pt-4">22</td>
                  <td className="pt-4">
                    <p className="w-[40px] bg-primaryColor text-white text-center rounded-[30px] py-1 px-[10px]">
                      0%
                    </p>
                  </td>
                  <td className="pt-4">$8.00</td>
                  <td className="pt-4">$8.00</td>
                  <td className="pt-4">$2.00</td>
                  <td className="pt-4">XXX.XXX.x.xxx</td>
                  <td className="pt-4">01</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-2 pt-4 pl-2">
                    <Icon icon="mdi:checkbox-outline" />
                    2023-05-08
                  </td>
                  <td className="pt-4">Mahedi</td>
                  <td className="pt-4">Offer Name 01</td>
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">
                    <p className=" bg-primaryColor w-[80px] text-center text-white py-1 px-[10px] rounded-[30px]">
                      Active
                    </p>
                  </td>
                  <td className="pt-4">22</td>
                  <td className="pt-4">
                    <p className="w-[40px] bg-primaryColor text-white text-center rounded-[30px] py-1 px-[10px]">
                      0%
                    </p>
                  </td>
                  <td className="pt-4">$8.00</td>
                  <td className="pt-4">$8.00</td>
                  <td className="pt-4">$2.00</td>
                  <td className="pt-4">XXX.XXX.x.xxx</td>
                  <td className="pt-4">01</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-2 pt-4 pl-2">
                    <Icon icon="mdi:checkbox-outline" />
                    2023-05-08
                  </td>
                  <td className="pt-4">Mahedi</td>
                  <td className="pt-4">Offer Name 01</td>
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">
                    <p className=" bg-primaryColor w-[80px] text-center text-white py-1 px-[10px] rounded-[30px]">
                      Active
                    </p>
                  </td>
                  <td className="pt-4">22</td>
                  <td className="pt-4">
                    <p className="w-[40px] bg-primaryColor text-white text-center rounded-[30px] py-1 px-[10px]">
                      0%
                    </p>
                  </td>
                  <td className="pt-4">$8.00</td>
                  <td className="pt-4">$8.00</td>
                  <td className="pt-4">$2.00</td>
                  <td className="pt-4">XXX.XXX.x.xxx</td>
                  <td className="pt-4">01</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-2 pt-4 pl-2">
                    <Icon icon="mdi:checkbox-outline" />
                    2023-05-08
                  </td>
                  <td className="pt-4 pb-2">Mahedi</td>
                  <td className="pt-4 pb-2">Offer Name 01</td>
                  <td className="pt-4 pb-2">N/A</td>
                  <td className="pt-4 pb-2">
                    <p className=" bg-primaryColor w-[80px] text-center text-white py-1 px-[10px] rounded-[30px]">
                      Active
                    </p>
                  </td>
                  <td className="pt-4 pb-2">22</td>
                  <td className="pt-4 pb-2">
                    <p className="w-[40px] bg-primaryColor text-white text-center rounded-[30px] py-1 px-[10px] mb-2">
                      0%
                    </p>
                  </td>
                  <td className="pt-4 pb-2">$8.00</td>
                  <td className="pt-4 pb-2">$8.00</td>
                  <td className="pt-4 pb-2">$2.00</td>
                  <td className="pt-4 pb-2">XXX.XXX.x.xxx</td>
                  <td className="pt-4 pb-2">01</td>
                </tr>
                <tr className="text-bold bg-[#DDDFE2] rounded-[10px]">
                  <td className="flex items-center gap-2 pt-2 pb-2 pl-2 text-bold">
                    Total
                  </td>
                  <td className="pt-2 pb-2">-</td>
                  <td className="pt-2 pb-2">-</td>
                  <td className="pt-2 pb-2">N/A</td>
                  <td className="pt-2 pb-2">
                    <p>Active</p>
                  </td>
                  <td className="pt-2 pb-2">22</td>
                  <td className="pt-2 pb-2">
                    <p>0%</p>
                  </td>
                  <td className="pt-2 pb-2">$8.00</td>
                  <td className="pt-2 pb-2">$8.00</td>
                  <td className="pt-2 pb-2">$2.00</td>
                  <td className="pt-2 pb-2">XXX.XXX.x.xxx</td>
                  <td className="pt-2 pb-2">01</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionReport;
