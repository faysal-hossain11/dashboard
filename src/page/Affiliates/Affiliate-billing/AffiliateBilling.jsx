import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import DownloadTable from "../../../components/Reports/Table-Feature/DownloadTable";
import { BsArrowDownUp } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Headers } from "../../../components/Headers/Headers";
import BlackButton from "../../../components/Button/BlackButton";
import GeneralButton from "../../../components/Button/GeneralButton";
import GrayButton from "../../../components/Button/GrayButton";
import SearchFieldBorder from "../../../components/InputField/SearchFieldBorder";

const AffiliateBilling = () => {
  return (
    <div>
      <Headers text={{ heading: "Affiliate Invoice" }}>
        <Link to="/admin/create-invoice">
          <BlackButton
            text={"Create Invoice"}
            icon={"charm:plus"}
            contentReverse={true}
          />
        </Link>
        <GeneralButton text={"Generate Invoice"} icon={"tabler:reload"} />
      </Headers>
      <div className="sm:flex items-center justify-center md:justify-start gap-[10px] mt-3">
        <div className="sm:w-[338px]">
          <SearchFieldBorder placeholder={"Search ..."} name={"name"} />
        </div>
        <div className="sm:mt-0 mt-2">
          <BlackButton text={"Search"} />
        </div>
      </div>
      <div className=" p-5 rounded-[10px] bg-white mt-10">
        <div className="sm:flex justify-between">
          <div className="flex justify-center md:mb-0 mb-5">
            <button className=" py-3 px-[10px] rounded-[10px] bg-[#F6F6F6] flex items-center gap-2 text-primaryColor font-primaryFont text-[16px] font-normal">
              <Icon icon="bi:funnel-fill" />
              <Icon icon="clarity:angle-line" />
              Filter
            </button>
          </div>
          <div className="flex items-center justify-center md:justify-start mb-5 md:mb-0 gap-[20px]">
            <DownloadTable />
            <GrayButton icon={"tabler:git-compare"} />
            <GrayButton icon={"material-symbols:zoom-out-map-rounded"} />
          </div>
        </div>
        <div className=" mt-4 rounded-[10px] bg-white">
          <div className=" overflow-x-auto">
            <table className=" table-auto w-full">
              <thead>
                <tr className=" bg-primaryColor text-white text-left">
                  <th className="pl-3 pr-[30px]">
                    <Icon icon="mdi:checkbox-outline" />
                  </th>
                  <th className=" pr-[30px] flex items-center gap-2 py-3">
                    ID
                    <Icon icon="fluent:arrow-sort-16-filled" />
                  </th>
                  <th className="  ">
                    <p className="w-[100px]">Affiliate</p>
                  </th>
                  <th className="  ">
                    <p className="w-[170px]">Account Status</p>
                  </th>
                  <th className=" ">
                    <p className="w-[170px]">Payment Method</p>
                  </th>
                  <th className=" ">
                    <p className="w-[150px]">Payment Term</p>
                  </th>
                  <th className=" flex items-center gap-2 py-3">
                    <p className="w-[170px] flex items-center gap-2">
                      Unpaid Invoices
                      <Icon icon="dashicons:arrow-up" />
                    </p>
                  </th>

                  <th>
                    <p className=" pr-3 flex items-center gap-2 py-3">
                      Balance
                      <Icon icon="fluent:arrow-sort-16-filled" />
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-4 pl-3">
                    <Icon icon="mdi:checkbox-outline" />
                  </td>
                  <td className="pt-4">01</td>
                  <td className="pt-4">MOe</td>
                  <td className="pt-4 flex items-center gap-2">
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
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">0</td>
                  <td className="pt-4">$0.00</td>
                </tr>
                <tr>
                  <td className="pt-4 pl-3">
                    <Icon icon="mdi:checkbox-outline" />
                  </td>
                  <td className="pt-4">01</td>
                  <td className="pt-4">MOe</td>
                  <td className="pt-4 flex items-center gap-2">
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
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">0</td>
                  <td className="pt-4">$0.00</td>
                </tr>
                <tr>
                  <td className="pt-4 pl-3">
                    <Icon icon="mdi:checkbox-outline" />
                  </td>
                  <td className="pt-4">01</td>
                  <td className="pt-4">MOe</td>
                  <td className="pt-4 flex items-center gap-2">
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
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">0</td>
                  <td className="pt-4">$0.00</td>
                </tr>
                <tr>
                  <td className="pt-4 pl-3">
                    <Icon icon="mdi:checkbox-outline" />
                  </td>
                  <td className="pt-4">01</td>
                  <td className="pt-4">MOe</td>
                  <td className="pt-4 flex items-center gap-2">
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
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">0</td>
                  <td className="pt-4">$0.00</td>
                </tr>
                <tr>
                  <td className="pt-4 pl-3">
                    <Icon icon="mdi:checkbox-outline" />
                  </td>
                  <td className="pt-4">01</td>
                  <td className="pt-4">MOe</td>
                  <td className="pt-4 flex items-center gap-2">
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
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">0</td>
                  <td className="pt-4">$0.00</td>
                </tr>
                <tr>
                  <td className="pt-4 pl-3">
                    <Icon icon="mdi:checkbox-outline" />
                  </td>
                  <td className="pt-4">01</td>
                  <td className="pt-4">MOe</td>
                  <td className="pt-4 flex items-center gap-2">
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
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">0</td>
                  <td className="pt-4">$0.00</td>
                </tr>
                <tr>
                  <td className="pt-4 pl-3">
                    <Icon icon="mdi:checkbox-outline" />
                  </td>
                  <td className="pt-4">01</td>
                  <td className="pt-4">MOe</td>
                  <td className="pt-4 flex items-center gap-2">
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
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">N/A</td>
                  <td className="pt-4">0</td>
                  <td className="pt-4">$0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
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

export default AffiliateBilling;
