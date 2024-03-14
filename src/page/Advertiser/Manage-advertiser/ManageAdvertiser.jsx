import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Headers } from "../../../components/Headers/Headers";
import BlackButton from "../../../components/Button/BlackButton";
import SearchFiled from "../../../components/InputField/SearchFiled";
import SelectFiled from "../../../components/InputField/SelectFiled";

const ManageAdvertiser = () => {
  const tableData = [
    {
      _id: 1,
      id: "01",
      advertiser: "Testoffer",
      offer: "02",
      click: "02",
      conversion: "02",
      payout: "$0.00",
      reveneu: "$0.00",
      profit: "$0.00",
    },
    {
      _id: 2,
      id: "01",
      advertiser: "Testoffer",
      offer: "02",
      click: "02",
      conversion: "02",
      payout: "$0.00",
      reveneu: "$0.00",
      profit: "$0.00",
    },
    {
      _id: 3,
      id: "01",
      advertiser: "Testoffer",
      offer: "02",
      click: "02",
      conversion: "02",
      payout: "$0.00",
      reveneu: "$0.00",
      profit: "$0.00",
    },
    {
      _id: 4,
      id: "01",
      advertiser: "Testoffer",
      offer: "02",
      click: "02",
      conversion: "02",
      payout: "$0.00",
      reveneu: "$0.00",
      profit: "$0.00",
    },
  ];
  return (
    <div>
      <Headers text={{ heading: "Manage Advertiser" }}>
        <Link to="/admin/create-advertisers">
          <BlackButton
            text={"Create Advertiser"}
            icon={"gridicons:user-add"}
            contentReverse={true}
          />
        </Link>
      </Headers>
      <div className="flex gap-[15px] items-center mt-5 max-[414px]:flex-col">
        <div className="w-[338px] max-[414px]:w-full relative">
          <SearchFiled placeholder={"Search ..."} name={"name"} bg={"#FFF"} />
        </div>
        <BlackButton text={"Search"} />
      </div>
      <div className="mt-[54px] max-[576px]:mt-5 px-[15px] max-[767px]:py-5 py-[32px] bg-white rounded-[10px] max-[767px]:mt-10">
        <div className="pt-[30px] pb-[33px] flex flex-wrap gap-5 items-center justify-end max-[776px]:flex-col max-[767px]:pb-4 max-[767px]:pt-0">
          <button className="flex items-center gap-2 py-[6px] pl-3.5 pr-4 h-[34px] w-[226px] rounded-[10px] border border-primaryColor justify-center">
            <Icon className="text-[22px]" icon="uis:calender" />
            <span className="text-[#3A3A3A] text-sm font-bold">
              02.06.2022 - 25.09.2023
            </span>
          </button>
          <div className="sm:max-w-[218px] w-full">
            <SelectFiled
              name={"name"}
              bg={"#FAFAFA"}
              select={[
                { value: "Show Only Active", option: "Show Only Active" },
                { value: "Show All", option: "Show All" },
                { value: "Show pending", option: "Show pending" },
                { value: "Show Rejected", option: "Show Rejected" },
                { value: "Show Blocked", option: "Show Blocked" },
                { value: "Show Deleted", option: "Show Deleted" },
              ]}
            />
          </div>
          <div className="sm:max-w-[218px] w-full">
            <SelectFiled
              name={"name"}
              bg={"#FAFAFA"}
              select={[
                {
                  value: "All Account Managers",
                  option: "All Account Managers",
                },
                { value: "No Manager", option: "No Manager" },
                { value: "Manager Name", option: "Manager Name" },
              ]}
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-primaryColor rounded-[10px]">
                <th className="p-5 max-[576px]:p-3">
                  <Icon
                    className="w-20 text-[26px] text-[#FFFFFF]"
                    icon="ion:checkbox-outline"
                  />
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <div className="flex gap-2 items-center w-[70px]">
                    <span className="text-base font-medium text-white">ID</span>
                    <Icon
                      className="text-base text-[#FFFFFF]"
                      icon="fluent:arrow-sort-28-regular"
                    />
                  </div>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[100px]">
                    Advertiser
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[80px]">
                    Status
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[70px]">
                    Offers
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[70px]">
                    Clicks
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[100px]">
                    Conversions
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[80px]">
                    Payout
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[120px]">
                    Revenue
                  </p>
                </th>
                <th className="p-5 max-[576px]:p-3">
                  <p className="text-base font-medium text-white text-left w-[120px]">
                    Profit
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((data) => (
                <>
                  <tr key={data?._id}>
                    <td className="p-4 max-[576px]:p-2">
                      <Icon
                        className="w-20 text-[26px] text-[#6A6A6A]"
                        icon="ion:checkbox-outline"
                      />
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.id}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.advertiser}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <div className="flex gap-2 items-center text-left">
                        <span>Active</span>
                        <div className="h-[10px] w-[10px] bg-[#38E25D] rounded-[10px]"></div>
                      </div>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.offer}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.click}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.conversion}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.payout}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.reveneu}
                      </p>
                    </td>
                    <td className="p-4 max-[576px]:p-2">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.profit}
                      </p>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAdvertiser;
