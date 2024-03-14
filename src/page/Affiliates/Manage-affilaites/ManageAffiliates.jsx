import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Headers } from "../../../components/Headers/Headers";
import BlackButton from "../../../components/Button/BlackButton";
import GeneralButton from "../../../components/Button/GeneralButton";
import SearchFiled from "../../../components/InputField/SearchFiled";

const ManageAffiliates = () => {
  return (
    <div>
      <Headers text={{ heading: "Manage Affiliates" }}>
        <Link to="/admin/create-affiliates">
          <BlackButton
            text={"Create Affiliate"}
            icon={"mdi:user-add"}
            contentReverse={true}
          />
        </Link>
        <Link to="/admin/pending-affiliates">
          <GeneralButton
            text={"Pending Affiliates"}
            icon={"fluent-mdl2:user-sync"}
          />
        </Link>
      </Headers>
      <div className="py-6 p-5 bg-white rounded-[15px] mt-10 max-[576px]:mt-5">
        <div className="xl:flex items-center justify-between">
          <div className="sm:flex items-center gap-6 justify-center mb-5 xl:mb-0">
            <div id="searchControler">
              <SearchFiled placeholder={"Search ..."} name={"name"} />
            </div>
            <div className="sm:mt-0 mt-2">
              <BlackButton text={"Search"} />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="md:flex items-center gap-5">
              <div className="flex justify-center">
                <p className="flex mb-5 md:mb-0 md:justify-start items-center gap-2 py-[6px] px-4 rounded-[10px] border border-primaryColor w-[230px] justify-center">
                  <Icon icon="uis:calender" />
                  02.06.2022 - 25.09.2023
                </p>
              </div>
              <div className="flex justify-center">
                <select
                  name=""
                  id=""
                  className=" outline-none focus:outline-none py-[6px] px-[20px] bg-[#FAFAFA] rounded-[10px]"
                >
                  <option value="">Show All</option>
                  <option value="">Pending</option>
                  <option value="">Rejected</option>
                  <option value="">Blocked</option>
                  <option value="">Deleted</option>
                </select>
              </div>
              <div className="flex justify-center">
                <select
                  name=""
                  id=""
                  className=" outline-none focus:outline-none py-[6px] px-[20px] bg-[#FAFAFA] rounded-[10px]"
                >
                  <option value="">All Account Managers</option>
                  <option value="">No Manager</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" overflow-x-auto bg-white mt-5">
            <table className=" table-auto w-full">
              <thead>
                <tr className=" bg-primaryColor text-white text-left">
                  <th className="flex items-center gap-2 pr-[100px] py-3 ml-3">
                    <Icon icon="mdi:checkbox-outline" />
                    ID
                    <Icon icon="fluent:arrow-sort-16-filled" />
                  </th>
                  <th className="w-[120px] text-left py-3">
                    <p>Affiliate</p>
                  </th>
                  <th className="w-[120px] text-left py-3">
                    <p>Status</p>
                  </th>
                  <th className="w-[120px] text-left py-3">
                    <p>Offers</p>
                  </th>
                  <th className="w-[120px] text-left py-3">
                    <p>Clicks</p>
                  </th>
                  <th className="w-[120px] text-left py-3">
                    <p>Conversions</p>
                  </th>
                  <th className="w-[120px] text-left py-3">
                    <p>Payout</p>
                  </th>
                  <th className="w-[120px] text-left py-3">
                    <p>Revenue</p>
                  </th>
                  <th className="w-[120px] text-left py-3">
                    <p>Profit</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="flex items-center gap-3 mt-4 ml-3">
                    <Icon icon="mdi:checkbox-outline" />
                    TestNet1323wsij
                  </td>
                  <td className="pt-4">Testoffer</td>
                  <td className="flex items-center gap-[10px]">
                    Active
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                    >
                      <circle cx="5" cy="5.5" r="5" fill="#38E25D" />
                    </svg>
                  </td>
                  <td className="pt-4">02</td>
                  <td className="pt-4">02</td>
                  <td className="pt-4">02</td>
                  <td className="pt-4">$0.00</td>
                  <td className="pt-4">$0.00</td>
                  <td className="pt-4">$0.00</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-3 mt-4 ml-3">
                    <Icon icon="mdi:checkbox-outline" />
                    TestNet1323wsij
                  </td>
                  <td className="pt-4">Testoffer</td>
                  <td className="flex items-center gap-[10px]">
                    Active
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                    >
                      <circle cx="5" cy="5.5" r="5" fill="#38E25D" />
                    </svg>
                  </td>
                  <td className="pt-4">02</td>
                  <td className="pt-4">02</td>
                  <td className="pt-4">02</td>
                  <td className="pt-4">$0.00</td>
                  <td className="pt-4">$0.00</td>
                  <td className="pt-4">$0.00</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-3 mt-4 ml-3">
                    <Icon icon="mdi:checkbox-outline" />
                    TestNet1323wsij
                  </td>
                  <td className="pt-4">Testoffer</td>
                  <td className="flex items-center gap-[10px]">
                    Active
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                    >
                      <circle cx="5" cy="5.5" r="5" fill="#38E25D" />
                    </svg>
                  </td>
                  <td className="pt-4">02</td>
                  <td className="pt-4">02</td>
                  <td className="pt-4">02</td>
                  <td className="pt-4">$0.00</td>
                  <td className="pt-4">$0.00</td>
                  <td className="pt-4">$0.00</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-3 mt-4 ml-3">
                    <Icon icon="mdi:checkbox-outline" />
                    TestNet1323wsij
                  </td>
                  <td className="pt-4">Testoffer</td>
                  <td className="flex items-center gap-[10px]">
                    Active
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                    >
                      <circle cx="5" cy="5.5" r="5" fill="#38E25D" />
                    </svg>
                  </td>
                  <td className="pt-4">02</td>
                  <td className="pt-4">02</td>
                  <td className="pt-4">02</td>
                  <td className="pt-4">$0.00</td>
                  <td className="pt-4">$0.00</td>
                  <td className="pt-4">$0.00</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-3 mt-4 ml-3">
                    <Icon icon="mdi:checkbox-outline" />
                    TestNet1323wsij
                  </td>
                  <td className="pt-4">Testoffer</td>
                  <td className="flex items-center gap-[10px]">
                    Active
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                    >
                      <circle cx="5" cy="5.5" r="5" fill="#38E25D" />
                    </svg>
                  </td>
                  <td className="pt-4">02</td>
                  <td className="pt-4">02</td>
                  <td className="pt-4">02</td>
                  <td className="pt-4">$0.00</td>
                  <td className="pt-4">$0.00</td>
                  <td className="pt-4">$0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAffiliates;
