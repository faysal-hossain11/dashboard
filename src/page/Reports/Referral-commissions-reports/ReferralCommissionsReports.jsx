import { Icon } from "@iconify/react";
import { useState } from "react";
import ReferralDropdown from "./ReferralDropdown";
import { Headers } from "../../../components/Headers/Headers";
import GeneralButton from "../../../components/Button/GeneralButton";
import DownloadTable from "../../../components/Reports/Table-Feature/DownloadTable";
import ReportButton from "../../../components/Button/ReportButton";

const ReferralCommissionsReports = () => {
  const [click, setClick] = useState(false);
  const tableData = [
    {
      _id: 1,
      id: "01",
      name: "Mahedi",
      referal: "Mahedi",
      referalId: "22",
      date: "2023-05-08",
      commission: "2.6&",
      profit: "$10.00",
    },
    {
      _id: 2,
      id: "01",
      name: "Mahedi",
      referal: "Mahedi",
      referalId: "22",
      date: "2023-05-08",
      commission: "2.6&",
      profit: "$10.00",
    },
    {
      _id: 3,
      id: "01",
      name: "Mahedi",
      referal: "Mahedi",
      referalId: "22",
      date: "2023-05-08",
      commission: "2.6&",
      profit: "$10.00",
    },
    {
      _id: 4,
      id: "01",
      name: "Mahedi",
      referal: "Mahedi",
      referalId: "22",
      date: "2023-05-08",
      commission: "2.6&",
      profit: "$10.00",
    },
    {
      _id: 5,
      id: "01",
      name: "Mahedi",
      referal: "Mahedi",
      referalId: "22",
      date: "2023-05-08",
      commission: "2.6&",
      profit: "$10.00",
    },
  ];
  return (
    <div>
      <Headers text={{ heading: "Referral Comissions Report" }}>
        <div onClick={() => setClick(!click)}>
          <GeneralButton
            text={"Report Options"}
            icon={"iconamoon:arrow-down-2-fill"}
          />
        </div>
      </Headers>
      <div className={`${click ? "block" : "hidden"}`}>
        <ReferralDropdown />
      </div>
      <div className="p-[15px] mt-10 rounded-[10px] bg-white max-[767px]:mt-5">
        <div className="flex justify-between items-center max-[576px]:flex-col max-[576px]:gap-5">
          <DownloadTable />
          <div className="flex gap-5 max-[576px]:flex-col">
            <button
              style={{ border: "0.5px solid #A4A4A4" }}
              className="flex gap-2 items-center py-[6px] pl-3.5 pr-4 rounded-[10px] h-[34px]"
            >
              <Icon
                className="w-[22px] h-[22px] text-primaryColor"
                icon="ion:calendar-clear"
              />
              <span className="text-sm font-bold text-[#3A3A3A]">
                02.06.2022 - 25.09.2023
              </span>
            </button>
            <ReportButton text={"Generate Report"} icon={"ion:rocket"} />
          </div>
        </div>
        <div className="mt-5">
          <div className="overflow-x-auto mt-10 max-[576px]:mt-5">
            <table className=" table-auto w-full">
              <thead>
                <tr className="bg-primaryColor rounded-[10px]">
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[100px]">
                      Affiliate ID
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[120px]">
                      Affiliate Name
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[100px]">
                      Referral by
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[100px]">
                      Referral ID
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[100px]">
                      Date & Time
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[100px]">
                      Comission
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[100px]">
                      Status
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[100px]">
                      Profit
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((data) => (
                  <>
                    <tr key={data?._id}>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.id}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.name}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.referal}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.referalId}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.date}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.commission}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <button className="px-3 py-[3px] bg-primaryColor rounded-[10px]">
                          <p className="font-bold text-xs text-white">Active</p>
                        </button>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.profit}
                        </p>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
              <tr className="bg-[#DDDFE2]">
                <td className="px-5 py-2 max-[576px]:px-3">
                  <p className="text-sm font-normal text-primaryColor text-left">
                    Total
                  </p>
                </td>
                <td className="px-5 py-2 max-[576px]:px-3">
                  <p className="text-sm font-normal text-primaryColor text-left">
                    2.6%
                  </p>
                </td>
                <td className="px-5 py-2 max-[576px]:px-3">
                  <p className="text-sm font-normal text-primaryColor text-left">
                    200
                  </p>
                </td>
                <td className="px-5 py-2 max-[576px]:px-3">
                  <p className="text-sm font-normal text-primaryColor text-left">
                    22
                  </p>
                </td>
                <td className="px-5 py-2 max-[576px]:px-3">
                  <p className="text-sm font-normal text-primaryColor text-left">
                    $10.00
                  </p>
                </td>
                <td className="px-5 py-2 max-[576px]:px-3">
                  <p className="text-sm font-normal text-primaryColor text-left">
                    $8.00
                  </p>
                </td>
                <td className="px-5 py-2 max-[576px]:px-3">
                  <p className="text-sm font-normal text-primaryColor text-left">
                    $2.00
                  </p>
                </td>
                <td className="px-5 py-2 max-[576px]:px-3">
                  <p className="text-sm font-normal text-primaryColor text-left">
                    2.6667
                  </p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralCommissionsReports;
