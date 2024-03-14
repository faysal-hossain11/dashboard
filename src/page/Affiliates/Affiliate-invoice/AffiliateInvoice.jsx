import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Headers } from "../../../components/Headers/Headers";
import BlackButton from "../../../components/Button/BlackButton";
import GeneralButton from "../../../components/Button/GeneralButton";
import SearchFieldBorder from "../../../components/InputField/SearchFieldBorder";

const AffiliateInvoice = () => {
  return (
    <div>
      <div className="lg:flex justify-between items-center">
        <div>
          <Headers text={{ heading: "Affiliate Invoice" }}></Headers>
          <div className="mt-4 sm:flex items-center justify-center lg:justify-start gap-[10px] mb-5 lg:mb-0 ">
            <div className="sm:w-[338px]">
              <SearchFieldBorder placeholder={"Search ..."} name={"name"} />
            </div>
            <div className="sm:mt-0 mt-2">
              <BlackButton text={"Search"} />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="sm:flex items-center justify-center gap-[20px] ">
            <div className="mb-5 md:mb-0">
              <Link to="/admin/create-invoice">
                <BlackButton
                  text={"Create Invoice"}
                  icon={"charm:plus"}
                  contentReverse={true}
                />
              </Link>
            </div>
            <div className="mb-5 md:mb-0">
              <GeneralButton text={"Generate Invoice"} icon={"tabler:reload"} />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-between pl-5 md:pl-0 mt-11">
        <div className="max-w-[90%] flex flex-wrap gap-5">
          <div className="border border-[#3A3A3A] rounded-[10px] py-[6px] px-4 bg-white flex items-center gap-[10px]">
            <Icon icon="uis:calender" />
            <p>02.06.2022 - 25.09.2023</p>
          </div>
          <div>
            <select
              name=""
              id=""
              className="border border-[#3A3A3A] rounded-[10px] py-[6px] px-4 bg-white outline-none focus:outline-none"
            >
              <option value="">Status Any</option>
              <option value="">Status Any</option>
              <option value="">Status Any</option>
            </select>
          </div>
          <div>
            <select
              name=""
              id=""
              className="border border-[#3A3A3A] rounded-[10px] py-[6px] px-4 bg-white outline-none focus:outline-none"
            >
              <option value="">Select Affiliates</option>
              <option value="">Status Any</option>
              <option value="">Status Any</option>
            </select>
          </div>
          <div>
            <select
              name=""
              id=""
              className="border border-[#3A3A3A] rounded-[10px] py-[6px] px-4 bg-white outline-none focus:outline-none"
            >
              <option value="">payment Method Any</option>
              <option value="">Status Any</option>
              <option value="">Status Any</option>
            </select>
          </div>
          <div>
            <select
              name=""
              id=""
              className="border border-[#3A3A3A] rounded-[10px] py-[6px] px-4 bg-white outline-none focus:outline-none"
            >
              <option value="">Payment Team Any</option>
              <option value="">Status Any</option>
              <option value="">Status Any</option>
            </select>
          </div>
          <div>
            <select
              name=""
              id=""
              className="border border-[#3A3A3A] rounded-[10px] py-[6px] px-4 bg-white outline-none focus:outline-none"
            >
              <option value="">Select Affiliate Managers</option>
              <option value="">Status Any</option>
              <option value="">Status Any</option>
            </select>
          </div>
        </div>
        <div className="2xl:w-[10%] mt-5 lg:mt-0">
          <div>
            <button className=" font-secondaryFont text-[14px] font-bold text-white py-2 px-4 rounded-[10px] bg-[#1DD752]">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
      <div className="py-6 px-5 rounded-[10px] bg-white mt-[60px]">
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
                  <p className=" bg-primaryColor text-white py-1 px-3 rounded-[30px]">
                    Active
                  </p>
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
  );
};

export default AffiliateInvoice;
